// @ts-ignore
import Point from "@mapbox/point-geometry";

import { ZxySource, PmtilesSource, TileCache } from "../tilecache";
import { View } from "../view";
import { Rule, painter } from "../painter";
import { LabelRule, Labeler } from "../labeler";
import { light } from "../default_style/light";
import { dark } from "../default_style/dark";
import { paintRules, labelRules } from "../default_style/style";
import { vec2 } from "gl-matrix";

let R = 6378137;
let MAX_LATITUDE = 85.0511287798;
let MAXCOORD = R * Math.PI;
let ROTATE_ZERO = 0;

let project = (latlng: number[]) => {
  let d = Math.PI / 180;
  let constrained_lat = Math.max(
    Math.min(MAX_LATITUDE, latlng[0]),
    -MAX_LATITUDE
  );
  let sin = Math.sin(constrained_lat * d);
  return new Point(
    R * latlng[1] * d,
    (R * Math.log((1 + sin) / (1 - sin))) / 2
  );
};

let unproject = (point: Point) => {
  var d = 180 / Math.PI;
  return {
    lat: (2 * Math.atan(Math.exp(point.y / R)) - Math.PI / 2) * d,
    lng: (point.x * d) / R,
  };
};

let instancedProject = (origin: Point, display_zoom: number) => {
  return (latlng: number[]) => {
    let projected = project(latlng);
    let normalized = new Point(
      (projected.x + MAXCOORD) / (MAXCOORD * 2),
      1 - (projected.y + MAXCOORD) / (MAXCOORD * 2)
    );
    return normalized.mult((1 << display_zoom) * 256).sub(origin);
  };
};

let instancedUnproject = (origin: Point, display_zoom: number) => {
  return (point: Point) => {
    console.log(point);
    let normalized = new Point(point.x, point.y)
      .add(origin)
      .div((1 << display_zoom) * 256);
    let projected = new Point(
      normalized.x * (MAXCOORD * 2) - MAXCOORD,
      (1 - normalized.y) * (MAXCOORD * 2) - MAXCOORD
    );
    return unproject(projected);
  };
};

export const getZoom = (degrees_lng: number, css_pixels: number): number => {
  let d = css_pixels * (360 / degrees_lng);
  return Math.log2(d / 256);
};

export class Static {
  paint_rules: Rule[];
  label_rules: LabelRule[];
  view: View;
  debug: string;
  scratch: any;
  backgroundColor: string;

  constructor(options: any) {
    let theme = options.dark ? dark : light;
    this.paint_rules = options.paint_rules || paintRules(theme, options.shade);
    this.label_rules =
      options.label_rules ||
      labelRules(theme, options.shade, options.language1, options.language2);
    this.backgroundColor = options.backgroundColor;

    let source;
    if (options.url.url) {
      source = new PmtilesSource(options.url, false);
    } else if (options.url.endsWith(".pmtiles")) {
      source = new PmtilesSource(options.url, false);
    } else {
      source = new ZxySource(options.url, false);
    }

    let maxDataZoom = 14;
    if (options.maxDataZoom) {
      maxDataZoom = options.maxDataZoom;
    }

    let levelDiff = options.levelDiff === undefined ? 2 : options.levelDiff;
    let cache = new TileCache(source, (256 * 1) << levelDiff);
    this.view = new View(cache, maxDataZoom, levelDiff);
    this.debug = options.debug || false;
  }

  async drawContext(
    ctx: any,
    width: number,
    height: number,
    latlng: number[],
    display_zoom: number,
    rotation: number
  ) {
    let center = project(latlng);
    let normalized_center = new Point(
      (center.x + MAXCOORD) / (MAXCOORD * 2),
      1 - (center.y + MAXCOORD) / (MAXCOORD * 2)
    );

    // the origin of the painter call in global Z coordinates
    let origin = normalized_center
      .clone()
      .mult(Math.pow(2, display_zoom) * 256)
      .sub(new Point(width / 2, height / 2));

    // the bounds of the painter call in global Z coordinates
    let bbox = {
      minX: origin.x,
      minY: origin.y,
      maxX: origin.x + width,
      maxY: origin.y + height,
    };

    bbox = this.rotatedBbox(origin, width, height, rotation, bbox);
    let prepared_tiles = await this.view.getBbox(display_zoom, bbox);

    let start = performance.now();
    let labeler = new Labeler(
      display_zoom,
      ctx,
      this.label_rules,
      16
    ); // because need ctx to measure
    for (var prepared_tile of prepared_tiles) {
      await labeler.add(prepared_tile);
    }

    if (this.backgroundColor) {
      ctx.save();
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    let p = painter(
      ctx,
      prepared_tiles,
      labeler.index,
      this.paint_rules,
      bbox,
      origin,
      true,
      rotation,
      this.debug
    );

    if (this.debug) {
      ctx.save();
      ctx.translate(-origin.x, -origin.y);
      for (var prepared_tile of prepared_tiles) {
        ctx.strokeStyle = this.debug;
        ctx.strokeRect(
          prepared_tile.origin.x,
          prepared_tile.origin.y,
          prepared_tile.dim,
          prepared_tile.dim
        );
      }
      ctx.restore();
    }

    // TODO this API isn't so elegant
    return {
      elapsed: performance.now() - start,
      project: instancedProject(origin, display_zoom),
      unproject: instancedUnproject(origin, display_zoom),
    };
  }

  // Crude roated bounding box using combined max/min of roated and unroatated
  private rotatedBbox(origin: any, width: number, height: number, rotation: number, bbox: { minX: any; minY: any; maxX: any; maxY: any; }) {
    let centre = [origin.x + (width / 2), origin.y + height / 2];
    let p1_vec = vec2.fromValues(origin.x, origin.y);
    let p2_vec = vec2.fromValues(origin.x + width, origin.y);
    let p3_vec = vec2.fromValues(origin.x + width, origin.y + height);
    let p4_vec = vec2.fromValues(origin.x, origin.y + height);
    let origin_vec = vec2.fromValues(centre[0], centre[1]);
    let s_p1 = vec2.create();
    let s_p2 = vec2.create();
    let s_p3 = vec2.create();
    let s_p4 = vec2.create();
    vec2.rotate(s_p1, p1_vec, origin_vec, rotation);
    vec2.rotate(s_p2, p2_vec, origin_vec, rotation);
    vec2.rotate(s_p3, p3_vec, origin_vec, rotation);
    vec2.rotate(s_p4, p4_vec, origin_vec, rotation);
    let minX = Math.min(s_p1[0], s_p2[0], s_p3[0], s_p4[0], bbox.minX);
    let maxX = Math.max(s_p1[0], s_p2[0], s_p3[0], s_p4[0], bbox.maxX);
    let minY = Math.min(s_p1[1], s_p2[1], s_p3[1], s_p4[1], bbox.minY);
    let maxY = Math.max(s_p1[1], s_p2[1], s_p3[1], s_p4[1], bbox.maxY);
    let rotatedBbox = {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY,
    };
    return rotatedBbox;
  }

  async drawCanvas(
    canvas: any,
    latlng: Point,
    display_zoom: number,
    rotation: number,
    options: any = {}
  ) {
    let dpr = window.devicePixelRatio;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    if (!canvas.sizeSet) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.sizeSet = true;
    }
    canvas.lang = options.lang;
    let ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return this.drawContext(ctx, width, height, latlng, display_zoom, rotation);
  }

  async drawContextBounds(
    ctx: any,
    top_left: Point,
    bottom_right: Point,
    width: number,
    height: number
  ) {
    let delta_degrees = bottom_right[0] - top_left[0];
    let center = [
      (top_left[1] + bottom_right[1]) / 2,
      (top_left[0] + bottom_right[0]) / 2,
    ];
    return this.drawContext(
      ctx,
      width,
      height,
      center,
      getZoom(delta_degrees, width),
      ROTATE_ZERO
    );
  }

  async drawCanvasBounds(
    canvas: any,
    top_left: Point,
    bottom_right: Point,
    width: number,
    options: any = {}
  ) {
    let delta_degrees = bottom_right[0] - top_left[0];
    let center = [
      (top_left[1] + bottom_right[1]) / 2,
      (top_left[0] + bottom_right[0]) / 2,
    ];
    return this.drawCanvas(
      canvas,
      center,
      getZoom(delta_degrees, width),
      options
    );
  }
}
