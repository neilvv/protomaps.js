var protomaps = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step2(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step2(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step2 = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step2((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@mapbox/point-geometry/index.js
  var require_point_geometry = __commonJS({
    "node_modules/@mapbox/point-geometry/index.js"(exports, module) {
      "use strict";
      module.exports = Point9;
      function Point9(x, y) {
        this.x = x;
        this.y = y;
      }
      Point9.prototype = {
        clone: function() {
          return new Point9(this.x, this.y);
        },
        add: function(p2) {
          return this.clone()._add(p2);
        },
        sub: function(p2) {
          return this.clone()._sub(p2);
        },
        multByPoint: function(p2) {
          return this.clone()._multByPoint(p2);
        },
        divByPoint: function(p2) {
          return this.clone()._divByPoint(p2);
        },
        mult: function(k) {
          return this.clone()._mult(k);
        },
        div: function(k) {
          return this.clone()._div(k);
        },
        rotate: function(a2) {
          return this.clone()._rotate(a2);
        },
        rotateAround: function(a2, p2) {
          return this.clone()._rotateAround(a2, p2);
        },
        matMult: function(m) {
          return this.clone()._matMult(m);
        },
        unit: function() {
          return this.clone()._unit();
        },
        perp: function() {
          return this.clone()._perp();
        },
        round: function() {
          return this.clone()._round();
        },
        mag: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        equals: function(other) {
          return this.x === other.x && this.y === other.y;
        },
        dist: function(p2) {
          return Math.sqrt(this.distSqr(p2));
        },
        distSqr: function(p2) {
          var dx = p2.x - this.x, dy = p2.y - this.y;
          return dx * dx + dy * dy;
        },
        angle: function() {
          return Math.atan2(this.y, this.x);
        },
        angleTo: function(b) {
          return Math.atan2(this.y - b.y, this.x - b.x);
        },
        angleWith: function(b) {
          return this.angleWithSep(b.x, b.y);
        },
        angleWithSep: function(x, y) {
          return Math.atan2(this.x * y - this.y * x, this.x * x + this.y * y);
        },
        _matMult: function(m) {
          var x = m[0] * this.x + m[1] * this.y, y = m[2] * this.x + m[3] * this.y;
          this.x = x;
          this.y = y;
          return this;
        },
        _add: function(p2) {
          this.x += p2.x;
          this.y += p2.y;
          return this;
        },
        _sub: function(p2) {
          this.x -= p2.x;
          this.y -= p2.y;
          return this;
        },
        _mult: function(k) {
          this.x *= k;
          this.y *= k;
          return this;
        },
        _div: function(k) {
          this.x /= k;
          this.y /= k;
          return this;
        },
        _multByPoint: function(p2) {
          this.x *= p2.x;
          this.y *= p2.y;
          return this;
        },
        _divByPoint: function(p2) {
          this.x /= p2.x;
          this.y /= p2.y;
          return this;
        },
        _unit: function() {
          this._div(this.mag());
          return this;
        },
        _perp: function() {
          var y = this.y;
          this.y = this.x;
          this.x = -y;
          return this;
        },
        _rotate: function(angle2) {
          var cos = Math.cos(angle2), sin = Math.sin(angle2), x = cos * this.x - sin * this.y, y = sin * this.x + cos * this.y;
          this.x = x;
          this.y = y;
          return this;
        },
        _rotateAround: function(angle2, p2) {
          var cos = Math.cos(angle2), sin = Math.sin(angle2), x = p2.x + cos * (this.x - p2.x) - sin * (this.y - p2.y), y = p2.y + sin * (this.x - p2.x) + cos * (this.y - p2.y);
          this.x = x;
          this.y = y;
          return this;
        },
        _round: function() {
          this.x = Math.round(this.x);
          this.y = Math.round(this.y);
          return this;
        }
      };
      Point9.convert = function(a2) {
        if (a2 instanceof Point9) {
          return a2;
        }
        if (Array.isArray(a2)) {
          return new Point9(a2[0], a2[1]);
        }
        return a2;
      };
    }
  });

  // node_modules/@mapbox/vector-tile/lib/vectortilefeature.js
  var require_vectortilefeature = __commonJS({
    "node_modules/@mapbox/vector-tile/lib/vectortilefeature.js"(exports, module) {
      "use strict";
      var Point9 = require_point_geometry();
      module.exports = VectorTileFeature;
      function VectorTileFeature(pbf, end, extent, keys, values) {
        this.properties = {};
        this.extent = extent;
        this.type = 0;
        this._pbf = pbf;
        this._geometry = -1;
        this._keys = keys;
        this._values = values;
        pbf.readFields(readFeature, this, end);
      }
      function readFeature(tag, feature, pbf) {
        if (tag == 1)
          feature.id = pbf.readVarint();
        else if (tag == 2)
          readTag(pbf, feature);
        else if (tag == 3)
          feature.type = pbf.readVarint();
        else if (tag == 4)
          feature._geometry = pbf.pos;
      }
      function readTag(pbf, feature) {
        var end = pbf.readVarint() + pbf.pos;
        while (pbf.pos < end) {
          var key = feature._keys[pbf.readVarint()], value = feature._values[pbf.readVarint()];
          feature.properties[key] = value;
        }
      }
      VectorTileFeature.types = ["Unknown", "Point", "LineString", "Polygon"];
      VectorTileFeature.prototype.loadGeometry = function() {
        var pbf = this._pbf;
        pbf.pos = this._geometry;
        var end = pbf.readVarint() + pbf.pos, cmd = 1, length2 = 0, x = 0, y = 0, lines = [], line;
        while (pbf.pos < end) {
          if (length2 <= 0) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 7;
            length2 = cmdLen >> 3;
          }
          length2--;
          if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();
            if (cmd === 1) {
              if (line)
                lines.push(line);
              line = [];
            }
            line.push(new Point9(x, y));
          } else if (cmd === 7) {
            if (line) {
              line.push(line[0].clone());
            }
          } else {
            throw new Error("unknown command " + cmd);
          }
        }
        if (line)
          lines.push(line);
        return lines;
      };
      VectorTileFeature.prototype.bbox = function() {
        var pbf = this._pbf;
        pbf.pos = this._geometry;
        var end = pbf.readVarint() + pbf.pos, cmd = 1, length2 = 0, x = 0, y = 0, x1 = Infinity, x2 = -Infinity, y1 = Infinity, y2 = -Infinity;
        while (pbf.pos < end) {
          if (length2 <= 0) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 7;
            length2 = cmdLen >> 3;
          }
          length2--;
          if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();
            if (x < x1)
              x1 = x;
            if (x > x2)
              x2 = x;
            if (y < y1)
              y1 = y;
            if (y > y2)
              y2 = y;
          } else if (cmd !== 7) {
            throw new Error("unknown command " + cmd);
          }
        }
        return [x1, y1, x2, y2];
      };
      VectorTileFeature.prototype.toGeoJSON = function(x, y, z2) {
        var size = this.extent * Math.pow(2, z2), x0 = this.extent * x, y0 = this.extent * y, coords = this.loadGeometry(), type = VectorTileFeature.types[this.type], i2, j;
        function project3(line) {
          for (var j2 = 0; j2 < line.length; j2++) {
            var p2 = line[j2], y2 = 180 - (p2.y + y0) * 360 / size;
            line[j2] = [
              (p2.x + x0) * 360 / size - 180,
              360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90
            ];
          }
        }
        switch (this.type) {
          case 1:
            var points = [];
            for (i2 = 0; i2 < coords.length; i2++) {
              points[i2] = coords[i2][0];
            }
            coords = points;
            project3(coords);
            break;
          case 2:
            for (i2 = 0; i2 < coords.length; i2++) {
              project3(coords[i2]);
            }
            break;
          case 3:
            coords = classifyRings(coords);
            for (i2 = 0; i2 < coords.length; i2++) {
              for (j = 0; j < coords[i2].length; j++) {
                project3(coords[i2][j]);
              }
            }
            break;
        }
        if (coords.length === 1) {
          coords = coords[0];
        } else {
          type = "Multi" + type;
        }
        var result = {
          type: "Feature",
          geometry: {
            type,
            coordinates: coords
          },
          properties: this.properties
        };
        if ("id" in this) {
          result.id = this.id;
        }
        return result;
      };
      function classifyRings(rings) {
        var len2 = rings.length;
        if (len2 <= 1)
          return [rings];
        var polygons = [], polygon, ccw;
        for (var i2 = 0; i2 < len2; i2++) {
          var area = signedArea(rings[i2]);
          if (area === 0)
            continue;
          if (ccw === void 0)
            ccw = area < 0;
          if (ccw === area < 0) {
            if (polygon)
              polygons.push(polygon);
            polygon = [rings[i2]];
          } else {
            polygon.push(rings[i2]);
          }
        }
        if (polygon)
          polygons.push(polygon);
        return polygons;
      }
      function signedArea(ring) {
        var sum = 0;
        for (var i2 = 0, len2 = ring.length, j = len2 - 1, p1, p2; i2 < len2; j = i2++) {
          p1 = ring[i2];
          p2 = ring[j];
          sum += (p2.x - p1.x) * (p1.y + p2.y);
        }
        return sum;
      }
    }
  });

  // node_modules/@mapbox/vector-tile/lib/vectortilelayer.js
  var require_vectortilelayer = __commonJS({
    "node_modules/@mapbox/vector-tile/lib/vectortilelayer.js"(exports, module) {
      "use strict";
      var VectorTileFeature = require_vectortilefeature();
      module.exports = VectorTileLayer;
      function VectorTileLayer(pbf, end) {
        this.version = 1;
        this.name = null;
        this.extent = 4096;
        this.length = 0;
        this._pbf = pbf;
        this._keys = [];
        this._values = [];
        this._features = [];
        pbf.readFields(readLayer, this, end);
        this.length = this._features.length;
      }
      function readLayer(tag, layer, pbf) {
        if (tag === 15)
          layer.version = pbf.readVarint();
        else if (tag === 1)
          layer.name = pbf.readString();
        else if (tag === 5)
          layer.extent = pbf.readVarint();
        else if (tag === 2)
          layer._features.push(pbf.pos);
        else if (tag === 3)
          layer._keys.push(pbf.readString());
        else if (tag === 4)
          layer._values.push(readValueMessage(pbf));
      }
      function readValueMessage(pbf) {
        var value = null, end = pbf.readVarint() + pbf.pos;
        while (pbf.pos < end) {
          var tag = pbf.readVarint() >> 3;
          value = tag === 1 ? pbf.readString() : tag === 2 ? pbf.readFloat() : tag === 3 ? pbf.readDouble() : tag === 4 ? pbf.readVarint64() : tag === 5 ? pbf.readVarint() : tag === 6 ? pbf.readSVarint() : tag === 7 ? pbf.readBoolean() : null;
        }
        return value;
      }
      VectorTileLayer.prototype.feature = function(i2) {
        if (i2 < 0 || i2 >= this._features.length)
          throw new Error("feature index out of bounds");
        this._pbf.pos = this._features[i2];
        var end = this._pbf.readVarint() + this._pbf.pos;
        return new VectorTileFeature(this._pbf, end, this.extent, this._keys, this._values);
      };
    }
  });

  // node_modules/@mapbox/vector-tile/lib/vectortile.js
  var require_vectortile = __commonJS({
    "node_modules/@mapbox/vector-tile/lib/vectortile.js"(exports, module) {
      "use strict";
      var VectorTileLayer = require_vectortilelayer();
      module.exports = VectorTile2;
      function VectorTile2(pbf, end) {
        this.layers = pbf.readFields(readTile, {}, end);
      }
      function readTile(tag, layers, pbf) {
        if (tag === 3) {
          var layer = new VectorTileLayer(pbf, pbf.readVarint() + pbf.pos);
          if (layer.length)
            layers[layer.name] = layer;
        }
      }
    }
  });

  // node_modules/@mapbox/vector-tile/index.js
  var require_vector_tile = __commonJS({
    "node_modules/@mapbox/vector-tile/index.js"(exports, module) {
      module.exports.VectorTile = require_vectortile();
      module.exports.VectorTileFeature = require_vectortilefeature();
      module.exports.VectorTileLayer = require_vectortilelayer();
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e2, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i2 = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s2 = buffer[offset + i2];
        i2 += d;
        e2 = s2 & (1 << -nBits) - 1;
        s2 >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e2 = e2 * 256 + buffer[offset + i2], i2 += d, nBits -= 8) {
        }
        m = e2 & (1 << -nBits) - 1;
        e2 >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i2], i2 += d, nBits -= 8) {
        }
        if (e2 === 0) {
          e2 = 1 - eBias;
        } else if (e2 === eMax) {
          return m ? NaN : (s2 ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e2 = e2 - eBias;
        }
        return (s2 ? -1 : 1) * m * Math.pow(2, e2 - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e2, m, c2;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i2 = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e2 = eMax;
        } else {
          e2 = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c2 = Math.pow(2, -e2)) < 1) {
            e2--;
            c2 *= 2;
          }
          if (e2 + eBias >= 1) {
            value += rt / c2;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c2 >= 2) {
            e2++;
            c2 /= 2;
          }
          if (e2 + eBias >= eMax) {
            m = 0;
            e2 = eMax;
          } else if (e2 + eBias >= 1) {
            m = (value * c2 - 1) * Math.pow(2, mLen);
            e2 = e2 + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e2 = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i2] = m & 255, i2 += d, m /= 256, mLen -= 8) {
        }
        e2 = e2 << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i2] = e2 & 255, i2 += d, e2 /= 256, eLen -= 8) {
        }
        buffer[offset + i2 - d] |= s2 * 128;
      };
    }
  });

  // node_modules/pbf/index.js
  var require_pbf = __commonJS({
    "node_modules/pbf/index.js"(exports, module) {
      "use strict";
      module.exports = Pbf;
      var ieee754 = require_ieee754();
      function Pbf(buf) {
        this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
        this.pos = 0;
        this.type = 0;
        this.length = this.buf.length;
      }
      Pbf.Varint = 0;
      Pbf.Fixed64 = 1;
      Pbf.Bytes = 2;
      Pbf.Fixed32 = 5;
      var SHIFT_LEFT_32 = (1 << 16) * (1 << 16);
      var SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;
      var TEXT_DECODER_MIN_LENGTH = 12;
      var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf8");
      Pbf.prototype = {
        destroy: function() {
          this.buf = null;
        },
        readFields: function(readField, result, end) {
          end = end || this.length;
          while (this.pos < end) {
            var val = this.readVarint(), tag = val >> 3, startPos = this.pos;
            this.type = val & 7;
            readField(tag, result, this);
            if (this.pos === startPos)
              this.skip(val);
          }
          return result;
        },
        readMessage: function(readField, result) {
          return this.readFields(readField, result, this.readVarint() + this.pos);
        },
        readFixed32: function() {
          var val = readUInt32(this.buf, this.pos);
          this.pos += 4;
          return val;
        },
        readSFixed32: function() {
          var val = readInt32(this.buf, this.pos);
          this.pos += 4;
          return val;
        },
        readFixed64: function() {
          var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
          this.pos += 8;
          return val;
        },
        readSFixed64: function() {
          var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
          this.pos += 8;
          return val;
        },
        readFloat: function() {
          var val = ieee754.read(this.buf, this.pos, true, 23, 4);
          this.pos += 4;
          return val;
        },
        readDouble: function() {
          var val = ieee754.read(this.buf, this.pos, true, 52, 8);
          this.pos += 8;
          return val;
        },
        readVarint: function(isSigned) {
          var buf = this.buf, val, b;
          b = buf[this.pos++];
          val = b & 127;
          if (b < 128)
            return val;
          b = buf[this.pos++];
          val |= (b & 127) << 7;
          if (b < 128)
            return val;
          b = buf[this.pos++];
          val |= (b & 127) << 14;
          if (b < 128)
            return val;
          b = buf[this.pos++];
          val |= (b & 127) << 21;
          if (b < 128)
            return val;
          b = buf[this.pos];
          val |= (b & 15) << 28;
          return readVarintRemainder(val, isSigned, this);
        },
        readVarint64: function() {
          return this.readVarint(true);
        },
        readSVarint: function() {
          var num = this.readVarint();
          return num % 2 === 1 ? (num + 1) / -2 : num / 2;
        },
        readBoolean: function() {
          return Boolean(this.readVarint());
        },
        readString: function() {
          var end = this.readVarint() + this.pos;
          var pos = this.pos;
          this.pos = end;
          if (end - pos >= TEXT_DECODER_MIN_LENGTH && utf8TextDecoder) {
            return readUtf8TextDecoder(this.buf, pos, end);
          }
          return readUtf8(this.buf, pos, end);
        },
        readBytes: function() {
          var end = this.readVarint() + this.pos, buffer = this.buf.subarray(this.pos, end);
          this.pos = end;
          return buffer;
        },
        readPackedVarint: function(arr2, isSigned) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readVarint(isSigned));
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readVarint(isSigned));
          return arr2;
        },
        readPackedSVarint: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readSVarint());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readSVarint());
          return arr2;
        },
        readPackedBoolean: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readBoolean());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readBoolean());
          return arr2;
        },
        readPackedFloat: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readFloat());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readFloat());
          return arr2;
        },
        readPackedDouble: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readDouble());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readDouble());
          return arr2;
        },
        readPackedFixed32: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readFixed32());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readFixed32());
          return arr2;
        },
        readPackedSFixed32: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readSFixed32());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readSFixed32());
          return arr2;
        },
        readPackedFixed64: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readFixed64());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readFixed64());
          return arr2;
        },
        readPackedSFixed64: function(arr2) {
          if (this.type !== Pbf.Bytes)
            return arr2.push(this.readSFixed64());
          var end = readPackedEnd(this);
          arr2 = arr2 || [];
          while (this.pos < end)
            arr2.push(this.readSFixed64());
          return arr2;
        },
        skip: function(val) {
          var type = val & 7;
          if (type === Pbf.Varint)
            while (this.buf[this.pos++] > 127) {
            }
          else if (type === Pbf.Bytes)
            this.pos = this.readVarint() + this.pos;
          else if (type === Pbf.Fixed32)
            this.pos += 4;
          else if (type === Pbf.Fixed64)
            this.pos += 8;
          else
            throw new Error("Unimplemented type: " + type);
        },
        writeTag: function(tag, type) {
          this.writeVarint(tag << 3 | type);
        },
        realloc: function(min2) {
          var length2 = this.length || 16;
          while (length2 < this.pos + min2)
            length2 *= 2;
          if (length2 !== this.length) {
            var buf = new Uint8Array(length2);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length2;
          }
        },
        finish: function() {
          this.length = this.pos;
          this.pos = 0;
          return this.buf.subarray(0, this.length);
        },
        writeFixed32: function(val) {
          this.realloc(4);
          writeInt32(this.buf, val, this.pos);
          this.pos += 4;
        },
        writeSFixed32: function(val) {
          this.realloc(4);
          writeInt32(this.buf, val, this.pos);
          this.pos += 4;
        },
        writeFixed64: function(val) {
          this.realloc(8);
          writeInt32(this.buf, val & -1, this.pos);
          writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
          this.pos += 8;
        },
        writeSFixed64: function(val) {
          this.realloc(8);
          writeInt32(this.buf, val & -1, this.pos);
          writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
          this.pos += 8;
        },
        writeVarint: function(val) {
          val = +val || 0;
          if (val > 268435455 || val < 0) {
            writeBigVarint(val, this);
            return;
          }
          this.realloc(4);
          this.buf[this.pos++] = val & 127 | (val > 127 ? 128 : 0);
          if (val <= 127)
            return;
          this.buf[this.pos++] = (val >>>= 7) & 127 | (val > 127 ? 128 : 0);
          if (val <= 127)
            return;
          this.buf[this.pos++] = (val >>>= 7) & 127 | (val > 127 ? 128 : 0);
          if (val <= 127)
            return;
          this.buf[this.pos++] = val >>> 7 & 127;
        },
        writeSVarint: function(val) {
          this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
        },
        writeBoolean: function(val) {
          this.writeVarint(Boolean(val));
        },
        writeString: function(str2) {
          str2 = String(str2);
          this.realloc(str2.length * 4);
          this.pos++;
          var startPos = this.pos;
          this.pos = writeUtf8(this.buf, str2, this.pos);
          var len2 = this.pos - startPos;
          if (len2 >= 128)
            makeRoomForExtraLength(startPos, len2, this);
          this.pos = startPos - 1;
          this.writeVarint(len2);
          this.pos += len2;
        },
        writeFloat: function(val) {
          this.realloc(4);
          ieee754.write(this.buf, val, this.pos, true, 23, 4);
          this.pos += 4;
        },
        writeDouble: function(val) {
          this.realloc(8);
          ieee754.write(this.buf, val, this.pos, true, 52, 8);
          this.pos += 8;
        },
        writeBytes: function(buffer) {
          var len2 = buffer.length;
          this.writeVarint(len2);
          this.realloc(len2);
          for (var i2 = 0; i2 < len2; i2++)
            this.buf[this.pos++] = buffer[i2];
        },
        writeRawMessage: function(fn, obj) {
          this.pos++;
          var startPos = this.pos;
          fn(obj, this);
          var len2 = this.pos - startPos;
          if (len2 >= 128)
            makeRoomForExtraLength(startPos, len2, this);
          this.pos = startPos - 1;
          this.writeVarint(len2);
          this.pos += len2;
        },
        writeMessage: function(tag, fn, obj) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeRawMessage(fn, obj);
        },
        writePackedVarint: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedVarint, arr2);
        },
        writePackedSVarint: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedSVarint, arr2);
        },
        writePackedBoolean: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedBoolean, arr2);
        },
        writePackedFloat: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedFloat, arr2);
        },
        writePackedDouble: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedDouble, arr2);
        },
        writePackedFixed32: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedFixed32, arr2);
        },
        writePackedSFixed32: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedSFixed32, arr2);
        },
        writePackedFixed64: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedFixed64, arr2);
        },
        writePackedSFixed64: function(tag, arr2) {
          if (arr2.length)
            this.writeMessage(tag, writePackedSFixed64, arr2);
        },
        writeBytesField: function(tag, buffer) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeBytes(buffer);
        },
        writeFixed32Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeFixed32(val);
        },
        writeSFixed32Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeSFixed32(val);
        },
        writeFixed64Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeFixed64(val);
        },
        writeSFixed64Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeSFixed64(val);
        },
        writeVarintField: function(tag, val) {
          this.writeTag(tag, Pbf.Varint);
          this.writeVarint(val);
        },
        writeSVarintField: function(tag, val) {
          this.writeTag(tag, Pbf.Varint);
          this.writeSVarint(val);
        },
        writeStringField: function(tag, str2) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeString(str2);
        },
        writeFloatField: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeFloat(val);
        },
        writeDoubleField: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeDouble(val);
        },
        writeBooleanField: function(tag, val) {
          this.writeVarintField(tag, Boolean(val));
        }
      };
      function readVarintRemainder(l2, s2, p2) {
        var buf = p2.buf, h, b;
        b = buf[p2.pos++];
        h = (b & 112) >> 4;
        if (b < 128)
          return toNum(l2, h, s2);
        b = buf[p2.pos++];
        h |= (b & 127) << 3;
        if (b < 128)
          return toNum(l2, h, s2);
        b = buf[p2.pos++];
        h |= (b & 127) << 10;
        if (b < 128)
          return toNum(l2, h, s2);
        b = buf[p2.pos++];
        h |= (b & 127) << 17;
        if (b < 128)
          return toNum(l2, h, s2);
        b = buf[p2.pos++];
        h |= (b & 127) << 24;
        if (b < 128)
          return toNum(l2, h, s2);
        b = buf[p2.pos++];
        h |= (b & 1) << 31;
        if (b < 128)
          return toNum(l2, h, s2);
        throw new Error("Expected varint not more than 10 bytes");
      }
      function readPackedEnd(pbf) {
        return pbf.type === Pbf.Bytes ? pbf.readVarint() + pbf.pos : pbf.pos + 1;
      }
      function toNum(low, high, isSigned) {
        if (isSigned) {
          return high * 4294967296 + (low >>> 0);
        }
        return (high >>> 0) * 4294967296 + (low >>> 0);
      }
      function writeBigVarint(val, pbf) {
        var low, high;
        if (val >= 0) {
          low = val % 4294967296 | 0;
          high = val / 4294967296 | 0;
        } else {
          low = ~(-val % 4294967296);
          high = ~(-val / 4294967296);
          if (low ^ 4294967295) {
            low = low + 1 | 0;
          } else {
            low = 0;
            high = high + 1 | 0;
          }
        }
        if (val >= 18446744073709552e3 || val < -18446744073709552e3) {
          throw new Error("Given varint doesn't fit into 10 bytes");
        }
        pbf.realloc(10);
        writeBigVarintLow(low, high, pbf);
        writeBigVarintHigh(high, pbf);
      }
      function writeBigVarintLow(low, high, pbf) {
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos] = low & 127;
      }
      function writeBigVarintHigh(high, pbf) {
        var lsb = (high & 7) << 4;
        pbf.buf[pbf.pos++] |= lsb | ((high >>>= 3) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127;
      }
      function makeRoomForExtraLength(startPos, len2, pbf) {
        var extraLen = len2 <= 16383 ? 1 : len2 <= 2097151 ? 2 : len2 <= 268435455 ? 3 : Math.floor(Math.log(len2) / (Math.LN2 * 7));
        pbf.realloc(extraLen);
        for (var i2 = pbf.pos - 1; i2 >= startPos; i2--)
          pbf.buf[i2 + extraLen] = pbf.buf[i2];
      }
      function writePackedVarint(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeVarint(arr2[i2]);
      }
      function writePackedSVarint(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeSVarint(arr2[i2]);
      }
      function writePackedFloat(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeFloat(arr2[i2]);
      }
      function writePackedDouble(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeDouble(arr2[i2]);
      }
      function writePackedBoolean(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeBoolean(arr2[i2]);
      }
      function writePackedFixed32(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeFixed32(arr2[i2]);
      }
      function writePackedSFixed32(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeSFixed32(arr2[i2]);
      }
      function writePackedFixed64(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeFixed64(arr2[i2]);
      }
      function writePackedSFixed64(arr2, pbf) {
        for (var i2 = 0; i2 < arr2.length; i2++)
          pbf.writeSFixed64(arr2[i2]);
      }
      function readUInt32(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16) + buf[pos + 3] * 16777216;
      }
      function writeInt32(buf, val, pos) {
        buf[pos] = val;
        buf[pos + 1] = val >>> 8;
        buf[pos + 2] = val >>> 16;
        buf[pos + 3] = val >>> 24;
      }
      function readInt32(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16) + (buf[pos + 3] << 24);
      }
      function readUtf8(buf, pos, end) {
        var str2 = "";
        var i2 = pos;
        while (i2 < end) {
          var b0 = buf[i2];
          var c2 = null;
          var bytesPerSequence = b0 > 239 ? 4 : b0 > 223 ? 3 : b0 > 191 ? 2 : 1;
          if (i2 + bytesPerSequence > end)
            break;
          var b1, b2, b3;
          if (bytesPerSequence === 1) {
            if (b0 < 128) {
              c2 = b0;
            }
          } else if (bytesPerSequence === 2) {
            b1 = buf[i2 + 1];
            if ((b1 & 192) === 128) {
              c2 = (b0 & 31) << 6 | b1 & 63;
              if (c2 <= 127) {
                c2 = null;
              }
            }
          } else if (bytesPerSequence === 3) {
            b1 = buf[i2 + 1];
            b2 = buf[i2 + 2];
            if ((b1 & 192) === 128 && (b2 & 192) === 128) {
              c2 = (b0 & 15) << 12 | (b1 & 63) << 6 | b2 & 63;
              if (c2 <= 2047 || c2 >= 55296 && c2 <= 57343) {
                c2 = null;
              }
            }
          } else if (bytesPerSequence === 4) {
            b1 = buf[i2 + 1];
            b2 = buf[i2 + 2];
            b3 = buf[i2 + 3];
            if ((b1 & 192) === 128 && (b2 & 192) === 128 && (b3 & 192) === 128) {
              c2 = (b0 & 15) << 18 | (b1 & 63) << 12 | (b2 & 63) << 6 | b3 & 63;
              if (c2 <= 65535 || c2 >= 1114112) {
                c2 = null;
              }
            }
          }
          if (c2 === null) {
            c2 = 65533;
            bytesPerSequence = 1;
          } else if (c2 > 65535) {
            c2 -= 65536;
            str2 += String.fromCharCode(c2 >>> 10 & 1023 | 55296);
            c2 = 56320 | c2 & 1023;
          }
          str2 += String.fromCharCode(c2);
          i2 += bytesPerSequence;
        }
        return str2;
      }
      function readUtf8TextDecoder(buf, pos, end) {
        return utf8TextDecoder.decode(buf.subarray(pos, end));
      }
      function writeUtf8(buf, str2, pos) {
        for (var i2 = 0, c2, lead; i2 < str2.length; i2++) {
          c2 = str2.charCodeAt(i2);
          if (c2 > 55295 && c2 < 57344) {
            if (lead) {
              if (c2 < 56320) {
                buf[pos++] = 239;
                buf[pos++] = 191;
                buf[pos++] = 189;
                lead = c2;
                continue;
              } else {
                c2 = lead - 55296 << 10 | c2 - 56320 | 65536;
                lead = null;
              }
            } else {
              if (c2 > 56319 || i2 + 1 === str2.length) {
                buf[pos++] = 239;
                buf[pos++] = 191;
                buf[pos++] = 189;
              } else {
                lead = c2;
              }
              continue;
            }
          } else if (lead) {
            buf[pos++] = 239;
            buf[pos++] = 191;
            buf[pos++] = 189;
            lead = null;
          }
          if (c2 < 128) {
            buf[pos++] = c2;
          } else {
            if (c2 < 2048) {
              buf[pos++] = c2 >> 6 | 192;
            } else {
              if (c2 < 65536) {
                buf[pos++] = c2 >> 12 | 224;
              } else {
                buf[pos++] = c2 >> 18 | 240;
                buf[pos++] = c2 >> 12 & 63 | 128;
              }
              buf[pos++] = c2 >> 6 & 63 | 128;
            }
            buf[pos++] = c2 & 63 | 128;
          }
        }
        return pos;
      }
    }
  });

  // src/types/unitbezier.d.ts
  var require_unitbezier_d = __commonJS({
    "src/types/unitbezier.d.ts"() {
    }
  });

  // node_modules/tinyqueue/tinyqueue.js
  var require_tinyqueue = __commonJS({
    "node_modules/tinyqueue/tinyqueue.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.TinyQueue = factory());
      })(exports, function() {
        "use strict";
        var TinyQueue = function TinyQueue2(data, compare) {
          if (data === void 0)
            data = [];
          if (compare === void 0)
            compare = defaultCompare;
          this.data = data;
          this.length = this.data.length;
          this.compare = compare;
          if (this.length > 0) {
            for (var i2 = (this.length >> 1) - 1; i2 >= 0; i2--) {
              this._down(i2);
            }
          }
        };
        TinyQueue.prototype.push = function push(item) {
          this.data.push(item);
          this.length++;
          this._up(this.length - 1);
        };
        TinyQueue.prototype.pop = function pop() {
          if (this.length === 0) {
            return void 0;
          }
          var top = this.data[0];
          var bottom = this.data.pop();
          this.length--;
          if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
          }
          return top;
        };
        TinyQueue.prototype.peek = function peek() {
          return this.data[0];
        };
        TinyQueue.prototype._up = function _up(pos) {
          var ref = this;
          var data = ref.data;
          var compare = ref.compare;
          var item = data[pos];
          while (pos > 0) {
            var parent = pos - 1 >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) {
              break;
            }
            data[pos] = current;
            pos = parent;
          }
          data[pos] = item;
        };
        TinyQueue.prototype._down = function _down(pos) {
          var ref = this;
          var data = ref.data;
          var compare = ref.compare;
          var halfLength = this.length >> 1;
          var item = data[pos];
          while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var best = data[left];
            var right = left + 1;
            if (right < this.length && compare(data[right], best) < 0) {
              left = right;
              best = data[right];
            }
            if (compare(best, item) >= 0) {
              break;
            }
            data[pos] = best;
            pos = left;
          }
          data[pos] = item;
        };
        function defaultCompare(a2, b) {
          return a2 < b ? -1 : a2 > b ? 1 : 0;
        }
        return TinyQueue;
      });
    }
  });

  // node_modules/polylabel/polylabel.js
  var require_polylabel = __commonJS({
    "node_modules/polylabel/polylabel.js"(exports, module) {
      "use strict";
      var Queue = require_tinyqueue();
      if (Queue.default)
        Queue = Queue.default;
      module.exports = polylabel2;
      module.exports.default = polylabel2;
      function polylabel2(polygon, precision, debug) {
        precision = precision || 1;
        var minX, minY, maxX, maxY;
        for (var i2 = 0; i2 < polygon[0].length; i2++) {
          var p2 = polygon[0][i2];
          if (!i2 || p2[0] < minX)
            minX = p2[0];
          if (!i2 || p2[1] < minY)
            minY = p2[1];
          if (!i2 || p2[0] > maxX)
            maxX = p2[0];
          if (!i2 || p2[1] > maxY)
            maxY = p2[1];
        }
        var width = maxX - minX;
        var height = maxY - minY;
        var cellSize = Math.min(width, height);
        var h = cellSize / 2;
        if (cellSize === 0) {
          var degeneratePoleOfInaccessibility = [minX, minY];
          degeneratePoleOfInaccessibility.distance = 0;
          return degeneratePoleOfInaccessibility;
        }
        var cellQueue = new Queue(void 0, compareMax);
        for (var x = minX; x < maxX; x += cellSize) {
          for (var y = minY; y < maxY; y += cellSize) {
            cellQueue.push(new Cell(x + h, y + h, h, polygon));
          }
        }
        var bestCell = getCentroidCell(polygon);
        var bboxCell = new Cell(minX + width / 2, minY + height / 2, 0, polygon);
        if (bboxCell.d > bestCell.d)
          bestCell = bboxCell;
        var numProbes = cellQueue.length;
        while (cellQueue.length) {
          var cell = cellQueue.pop();
          if (cell.d > bestCell.d) {
            bestCell = cell;
            if (debug)
              console.log("found best %d after %d probes", Math.round(1e4 * cell.d) / 1e4, numProbes);
          }
          if (cell.max - bestCell.d <= precision)
            continue;
          h = cell.h / 2;
          cellQueue.push(new Cell(cell.x - h, cell.y - h, h, polygon));
          cellQueue.push(new Cell(cell.x + h, cell.y - h, h, polygon));
          cellQueue.push(new Cell(cell.x - h, cell.y + h, h, polygon));
          cellQueue.push(new Cell(cell.x + h, cell.y + h, h, polygon));
          numProbes += 4;
        }
        if (debug) {
          console.log("num probes: " + numProbes);
          console.log("best distance: " + bestCell.d);
        }
        var poleOfInaccessibility = [bestCell.x, bestCell.y];
        poleOfInaccessibility.distance = bestCell.d;
        return poleOfInaccessibility;
      }
      function compareMax(a2, b) {
        return b.max - a2.max;
      }
      function Cell(x, y, h, polygon) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.d = pointToPolygonDist(x, y, polygon);
        this.max = this.d + this.h * Math.SQRT2;
      }
      function pointToPolygonDist(x, y, polygon) {
        var inside = false;
        var minDistSq = Infinity;
        for (var k = 0; k < polygon.length; k++) {
          var ring = polygon[k];
          for (var i2 = 0, len2 = ring.length, j = len2 - 1; i2 < len2; j = i2++) {
            var a2 = ring[i2];
            var b = ring[j];
            if (a2[1] > y !== b[1] > y && x < (b[0] - a2[0]) * (y - a2[1]) / (b[1] - a2[1]) + a2[0])
              inside = !inside;
            minDistSq = Math.min(minDistSq, getSegDistSq(x, y, a2, b));
          }
        }
        return minDistSq === 0 ? 0 : (inside ? 1 : -1) * Math.sqrt(minDistSq);
      }
      function getCentroidCell(polygon) {
        var area = 0;
        var x = 0;
        var y = 0;
        var points = polygon[0];
        for (var i2 = 0, len2 = points.length, j = len2 - 1; i2 < len2; j = i2++) {
          var a2 = points[i2];
          var b = points[j];
          var f2 = a2[0] * b[1] - b[0] * a2[1];
          x += (a2[0] + b[0]) * f2;
          y += (a2[1] + b[1]) * f2;
          area += f2 * 3;
        }
        if (area === 0)
          return new Cell(points[0][0], points[0][1], 0, polygon);
        return new Cell(x / area, y / area, 0, polygon);
      }
      function getSegDistSq(px, py, a2, b) {
        var x = a2[0];
        var y = a2[1];
        var dx = b[0] - x;
        var dy = b[1] - y;
        if (dx !== 0 || dy !== 0) {
          var t2 = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);
          if (t2 > 1) {
            x = b[0];
            y = b[1];
          } else if (t2 > 0) {
            x += dx * t2;
            y += dy * t2;
          }
        }
        dx = px - x;
        dy = py - y;
        return dx * dx + dy * dy;
      }
    }
  });

  // node_modules/rbush/rbush.min.js
  var require_rbush_min = __commonJS({
    "node_modules/rbush/rbush.min.js"(exports, module) {
      !function(t2, i2) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = i2() : typeof define == "function" && define.amd ? define(i2) : (t2 = t2 || self).RBush = i2();
      }(exports, function() {
        "use strict";
        function t2(t3, r3, e3, a3, h2) {
          !function t4(n3, r4, e4, a4, h3) {
            for (; a4 > e4; ) {
              if (a4 - e4 > 600) {
                var o3 = a4 - e4 + 1, s3 = r4 - e4 + 1, l3 = Math.log(o3), f3 = 0.5 * Math.exp(2 * l3 / 3), u3 = 0.5 * Math.sqrt(l3 * f3 * (o3 - f3) / o3) * (s3 - o3 / 2 < 0 ? -1 : 1), m2 = Math.max(e4, Math.floor(r4 - s3 * f3 / o3 + u3)), c3 = Math.min(a4, Math.floor(r4 + (o3 - s3) * f3 / o3 + u3));
                t4(n3, r4, m2, c3, h3);
              }
              var p3 = n3[r4], d2 = e4, x = a4;
              for (i2(n3, e4, r4), h3(n3[a4], p3) > 0 && i2(n3, e4, a4); d2 < x; ) {
                for (i2(n3, d2, x), d2++, x--; h3(n3[d2], p3) < 0; )
                  d2++;
                for (; h3(n3[x], p3) > 0; )
                  x--;
              }
              h3(n3[e4], p3) === 0 ? i2(n3, e4, x) : i2(n3, ++x, a4), x <= r4 && (e4 = x + 1), r4 <= x && (a4 = x - 1);
            }
          }(t3, r3, e3 || 0, a3 || t3.length - 1, h2 || n2);
        }
        function i2(t3, i3, n3) {
          var r3 = t3[i3];
          t3[i3] = t3[n3], t3[n3] = r3;
        }
        function n2(t3, i3) {
          return t3 < i3 ? -1 : t3 > i3 ? 1 : 0;
        }
        var r2 = function(t3) {
          t3 === void 0 && (t3 = 9), this._maxEntries = Math.max(4, t3), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
        };
        function e2(t3, i3, n3) {
          if (!n3)
            return i3.indexOf(t3);
          for (var r3 = 0; r3 < i3.length; r3++)
            if (n3(t3, i3[r3]))
              return r3;
          return -1;
        }
        function a2(t3, i3) {
          h(t3, 0, t3.children.length, i3, t3);
        }
        function h(t3, i3, n3, r3, e3) {
          e3 || (e3 = p2(null)), e3.minX = 1 / 0, e3.minY = 1 / 0, e3.maxX = -1 / 0, e3.maxY = -1 / 0;
          for (var a3 = i3; a3 < n3; a3++) {
            var h2 = t3.children[a3];
            o2(e3, t3.leaf ? r3(h2) : h2);
          }
          return e3;
        }
        function o2(t3, i3) {
          return t3.minX = Math.min(t3.minX, i3.minX), t3.minY = Math.min(t3.minY, i3.minY), t3.maxX = Math.max(t3.maxX, i3.maxX), t3.maxY = Math.max(t3.maxY, i3.maxY), t3;
        }
        function s2(t3, i3) {
          return t3.minX - i3.minX;
        }
        function l2(t3, i3) {
          return t3.minY - i3.minY;
        }
        function f2(t3) {
          return (t3.maxX - t3.minX) * (t3.maxY - t3.minY);
        }
        function u2(t3) {
          return t3.maxX - t3.minX + (t3.maxY - t3.minY);
        }
        function m(t3, i3) {
          return t3.minX <= i3.minX && t3.minY <= i3.minY && i3.maxX <= t3.maxX && i3.maxY <= t3.maxY;
        }
        function c2(t3, i3) {
          return i3.minX <= t3.maxX && i3.minY <= t3.maxY && i3.maxX >= t3.minX && i3.maxY >= t3.minY;
        }
        function p2(t3) {
          return { children: t3, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
        }
        function d(i3, n3, r3, e3, a3) {
          for (var h2 = [n3, r3]; h2.length; )
            if (!((r3 = h2.pop()) - (n3 = h2.pop()) <= e3)) {
              var o3 = n3 + Math.ceil((r3 - n3) / e3 / 2) * e3;
              t2(i3, o3, n3, r3, a3), h2.push(n3, o3, o3, r3);
            }
        }
        return r2.prototype.all = function() {
          return this._all(this.data, []);
        }, r2.prototype.search = function(t3) {
          var i3 = this.data, n3 = [];
          if (!c2(t3, i3))
            return n3;
          for (var r3 = this.toBBox, e3 = []; i3; ) {
            for (var a3 = 0; a3 < i3.children.length; a3++) {
              var h2 = i3.children[a3], o3 = i3.leaf ? r3(h2) : h2;
              c2(t3, o3) && (i3.leaf ? n3.push(h2) : m(t3, o3) ? this._all(h2, n3) : e3.push(h2));
            }
            i3 = e3.pop();
          }
          return n3;
        }, r2.prototype.collides = function(t3) {
          var i3 = this.data;
          if (!c2(t3, i3))
            return false;
          for (var n3 = []; i3; ) {
            for (var r3 = 0; r3 < i3.children.length; r3++) {
              var e3 = i3.children[r3], a3 = i3.leaf ? this.toBBox(e3) : e3;
              if (c2(t3, a3)) {
                if (i3.leaf || m(t3, a3))
                  return true;
                n3.push(e3);
              }
            }
            i3 = n3.pop();
          }
          return false;
        }, r2.prototype.load = function(t3) {
          if (!t3 || !t3.length)
            return this;
          if (t3.length < this._minEntries) {
            for (var i3 = 0; i3 < t3.length; i3++)
              this.insert(t3[i3]);
            return this;
          }
          var n3 = this._build(t3.slice(), 0, t3.length - 1, 0);
          if (this.data.children.length)
            if (this.data.height === n3.height)
              this._splitRoot(this.data, n3);
            else {
              if (this.data.height < n3.height) {
                var r3 = this.data;
                this.data = n3, n3 = r3;
              }
              this._insert(n3, this.data.height - n3.height - 1, true);
            }
          else
            this.data = n3;
          return this;
        }, r2.prototype.insert = function(t3) {
          return t3 && this._insert(t3, this.data.height - 1), this;
        }, r2.prototype.clear = function() {
          return this.data = p2([]), this;
        }, r2.prototype.remove = function(t3, i3) {
          if (!t3)
            return this;
          for (var n3, r3, a3, h2 = this.data, o3 = this.toBBox(t3), s3 = [], l3 = []; h2 || s3.length; ) {
            if (h2 || (h2 = s3.pop(), r3 = s3[s3.length - 1], n3 = l3.pop(), a3 = true), h2.leaf) {
              var f3 = e2(t3, h2.children, i3);
              if (f3 !== -1)
                return h2.children.splice(f3, 1), s3.push(h2), this._condense(s3), this;
            }
            a3 || h2.leaf || !m(h2, o3) ? r3 ? (n3++, h2 = r3.children[n3], a3 = false) : h2 = null : (s3.push(h2), l3.push(n3), n3 = 0, r3 = h2, h2 = h2.children[0]);
          }
          return this;
        }, r2.prototype.toBBox = function(t3) {
          return t3;
        }, r2.prototype.compareMinX = function(t3, i3) {
          return t3.minX - i3.minX;
        }, r2.prototype.compareMinY = function(t3, i3) {
          return t3.minY - i3.minY;
        }, r2.prototype.toJSON = function() {
          return this.data;
        }, r2.prototype.fromJSON = function(t3) {
          return this.data = t3, this;
        }, r2.prototype._all = function(t3, i3) {
          for (var n3 = []; t3; )
            t3.leaf ? i3.push.apply(i3, t3.children) : n3.push.apply(n3, t3.children), t3 = n3.pop();
          return i3;
        }, r2.prototype._build = function(t3, i3, n3, r3) {
          var e3, h2 = n3 - i3 + 1, o3 = this._maxEntries;
          if (h2 <= o3)
            return a2(e3 = p2(t3.slice(i3, n3 + 1)), this.toBBox), e3;
          r3 || (r3 = Math.ceil(Math.log(h2) / Math.log(o3)), o3 = Math.ceil(h2 / Math.pow(o3, r3 - 1))), (e3 = p2([])).leaf = false, e3.height = r3;
          var s3 = Math.ceil(h2 / o3), l3 = s3 * Math.ceil(Math.sqrt(o3));
          d(t3, i3, n3, l3, this.compareMinX);
          for (var f3 = i3; f3 <= n3; f3 += l3) {
            var u3 = Math.min(f3 + l3 - 1, n3);
            d(t3, f3, u3, s3, this.compareMinY);
            for (var m2 = f3; m2 <= u3; m2 += s3) {
              var c3 = Math.min(m2 + s3 - 1, u3);
              e3.children.push(this._build(t3, m2, c3, r3 - 1));
            }
          }
          return a2(e3, this.toBBox), e3;
        }, r2.prototype._chooseSubtree = function(t3, i3, n3, r3) {
          for (; r3.push(i3), !i3.leaf && r3.length - 1 !== n3; ) {
            for (var e3 = 1 / 0, a3 = 1 / 0, h2 = void 0, o3 = 0; o3 < i3.children.length; o3++) {
              var s3 = i3.children[o3], l3 = f2(s3), u3 = (m2 = t3, c3 = s3, (Math.max(c3.maxX, m2.maxX) - Math.min(c3.minX, m2.minX)) * (Math.max(c3.maxY, m2.maxY) - Math.min(c3.minY, m2.minY)) - l3);
              u3 < a3 ? (a3 = u3, e3 = l3 < e3 ? l3 : e3, h2 = s3) : u3 === a3 && l3 < e3 && (e3 = l3, h2 = s3);
            }
            i3 = h2 || i3.children[0];
          }
          var m2, c3;
          return i3;
        }, r2.prototype._insert = function(t3, i3, n3) {
          var r3 = n3 ? t3 : this.toBBox(t3), e3 = [], a3 = this._chooseSubtree(r3, this.data, i3, e3);
          for (a3.children.push(t3), o2(a3, r3); i3 >= 0 && e3[i3].children.length > this._maxEntries; )
            this._split(e3, i3), i3--;
          this._adjustParentBBoxes(r3, e3, i3);
        }, r2.prototype._split = function(t3, i3) {
          var n3 = t3[i3], r3 = n3.children.length, e3 = this._minEntries;
          this._chooseSplitAxis(n3, e3, r3);
          var h2 = this._chooseSplitIndex(n3, e3, r3), o3 = p2(n3.children.splice(h2, n3.children.length - h2));
          o3.height = n3.height, o3.leaf = n3.leaf, a2(n3, this.toBBox), a2(o3, this.toBBox), i3 ? t3[i3 - 1].children.push(o3) : this._splitRoot(n3, o3);
        }, r2.prototype._splitRoot = function(t3, i3) {
          this.data = p2([t3, i3]), this.data.height = t3.height + 1, this.data.leaf = false, a2(this.data, this.toBBox);
        }, r2.prototype._chooseSplitIndex = function(t3, i3, n3) {
          for (var r3, e3, a3, o3, s3, l3, u3, m2 = 1 / 0, c3 = 1 / 0, p3 = i3; p3 <= n3 - i3; p3++) {
            var d2 = h(t3, 0, p3, this.toBBox), x = h(t3, p3, n3, this.toBBox), v = (e3 = d2, a3 = x, o3 = void 0, s3 = void 0, l3 = void 0, u3 = void 0, o3 = Math.max(e3.minX, a3.minX), s3 = Math.max(e3.minY, a3.minY), l3 = Math.min(e3.maxX, a3.maxX), u3 = Math.min(e3.maxY, a3.maxY), Math.max(0, l3 - o3) * Math.max(0, u3 - s3)), M = f2(d2) + f2(x);
            v < m2 ? (m2 = v, r3 = p3, c3 = M < c3 ? M : c3) : v === m2 && M < c3 && (c3 = M, r3 = p3);
          }
          return r3 || n3 - i3;
        }, r2.prototype._chooseSplitAxis = function(t3, i3, n3) {
          var r3 = t3.leaf ? this.compareMinX : s2, e3 = t3.leaf ? this.compareMinY : l2;
          this._allDistMargin(t3, i3, n3, r3) < this._allDistMargin(t3, i3, n3, e3) && t3.children.sort(r3);
        }, r2.prototype._allDistMargin = function(t3, i3, n3, r3) {
          t3.children.sort(r3);
          for (var e3 = this.toBBox, a3 = h(t3, 0, i3, e3), s3 = h(t3, n3 - i3, n3, e3), l3 = u2(a3) + u2(s3), f3 = i3; f3 < n3 - i3; f3++) {
            var m2 = t3.children[f3];
            o2(a3, t3.leaf ? e3(m2) : m2), l3 += u2(a3);
          }
          for (var c3 = n3 - i3 - 1; c3 >= i3; c3--) {
            var p3 = t3.children[c3];
            o2(s3, t3.leaf ? e3(p3) : p3), l3 += u2(s3);
          }
          return l3;
        }, r2.prototype._adjustParentBBoxes = function(t3, i3, n3) {
          for (var r3 = n3; r3 >= 0; r3--)
            o2(i3[r3], t3);
        }, r2.prototype._condense = function(t3) {
          for (var i3 = t3.length - 1, n3 = void 0; i3 >= 0; i3--)
            t3[i3].children.length === 0 ? i3 > 0 ? (n3 = t3[i3 - 1].children).splice(n3.indexOf(t3[i3]), 1) : this.clear() : a2(t3[i3], this.toBBox);
        }, r2;
      });
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    CenteredSymbolizer: () => CenteredSymbolizer,
    CenteredTextSymbolizer: () => CenteredTextSymbolizer,
    CircleSymbolizer: () => CircleSymbolizer,
    FlexSymbolizer: () => FlexSymbolizer,
    Font: () => Font,
    GeomType: () => GeomType,
    GroupSymbolizer: () => GroupSymbolizer,
    IconSymbolizer: () => IconSymbolizer,
    Index: () => Index,
    Justify: () => Justify,
    Labeler: () => Labeler,
    Labelers: () => Labelers,
    LineLabelPlacement: () => LineLabelPlacement,
    LineLabelSymbolizer: () => LineLabelSymbolizer,
    LineSymbolizer: () => LineSymbolizer,
    OffsetSymbolizer: () => OffsetSymbolizer,
    OffsetTextSymbolizer: () => OffsetTextSymbolizer,
    PMTiles: () => PMTiles,
    Padding: () => Padding,
    PmtilesSource: () => PmtilesSource,
    PolygonLabelSymbolizer: () => PolygonLabelSymbolizer,
    PolygonSymbolizer: () => PolygonSymbolizer,
    ShieldSymbolizer: () => ShieldSymbolizer,
    Sprites: () => Sprites,
    Static: () => Static,
    TextPlacements: () => TextPlacements,
    TextSymbolizer: () => TextSymbolizer,
    TileCache: () => TileCache,
    View: () => View,
    ZxySource: () => ZxySource,
    arr: () => arr,
    covering: () => covering,
    createPattern: () => createPattern,
    cubicBezier: () => cubicBezier,
    dark: () => dark,
    exp: () => exp,
    filterFn: () => filterFn,
    getFont: () => getFont,
    getZoom: () => getZoom,
    isCCW: () => isCCW,
    isInRing: () => isInRing,
    json_style: () => json_style,
    labelRules: () => labelRules,
    leafletLayer: () => leafletLayer,
    light: () => light,
    linear: () => linear,
    numberFn: () => numberFn,
    numberOrFn: () => numberOrFn,
    paintRules: () => paintRules,
    painter: () => painter,
    pointInPolygon: () => pointInPolygon,
    pointMinDistToLines: () => pointMinDistToLines,
    pointMinDistToPoints: () => pointMinDistToPoints,
    step: () => step,
    toIndex: () => toIndex,
    transformGeom: () => transformGeom,
    widthFn: () => widthFn,
    wrap: () => wrap,
    xray: () => xray
  });

  // src/frontends/static.ts
  var import_point_geometry7 = __toModule(require_point_geometry());

  // src/tilecache.ts
  var import_point_geometry = __toModule(require_point_geometry());
  var import_vector_tile = __toModule(require_vector_tile());
  var import_pbf = __toModule(require_pbf());

  // node_modules/pmtiles/index.mjs
  var shift = (number2, shift2) => {
    return number2 * Math.pow(2, shift2);
  };
  var getUint24 = (dataview, pos) => {
    return shift(dataview.getUint16(pos + 1, true), 8) + dataview.getUint8(pos, true);
  };
  var getUint48 = (dataview, pos) => {
    return shift(dataview.getUint32(pos + 2, true), 16) + dataview.getUint16(pos, true);
  };
  var parseHeader = (dataview) => {
    var magic = dataview.getUint16(0, true);
    var version = dataview.getUint16(2, true);
    var json_size = dataview.getUint32(4, true);
    var root_entries = dataview.getUint16(8, true);
    return { version, json_size, root_entries };
  };
  var bytesToMap = (dataview) => {
    let m = new Map();
    for (var i2 = 0; i2 < dataview.byteLength; i2 += 17) {
      var z_raw = dataview.getUint8(i2, true);
      var z2 = z_raw & 127;
      var is_dir = z_raw >> 7;
      var x = getUint24(dataview, i2 + 1);
      var y = getUint24(dataview, i2 + 4);
      var offset = getUint48(dataview, i2 + 7);
      var length2 = dataview.getUint32(i2 + 13, true);
      m.set(z2 + "_" + x + "_" + y, [offset, length2, is_dir]);
    }
    return m;
  };
  var PMTiles = class {
    constructor(url) {
      __publicField(this, "metadata", (func) => {
        return new Promise((resolve, reject) => {
          this.root.then((root) => {
            resolve(root.metadata);
          });
        });
      });
      __publicField(this, "getLeaf", (offset, len2) => {
        return new Promise((resolve, reject) => {
          if (this.leaves.has(offset)) {
            this.leaves.get(offset)[0]++;
            resolve(this.leaves.get(offset)[1]);
          } else if (this.outstanding_requests.has(offset)) {
            this.outstanding_requests.get(offset).push(resolve);
          } else {
            this.outstanding_requests.set(offset, []);
            fetch(this.url, { headers: { Range: "bytes=" + offset + "-" + (offset + len2 - 1) } }).then((resp) => {
              return resp.arrayBuffer();
            }).then((buf) => {
              var map = bytesToMap(new DataView(buf), len2 / 17);
              if (this.leaves.size > 32) {
                var minStep = Infinity;
                var minKey = void 0;
                this.leaves.forEach((val, key) => {
                  if (val[0] < minStep) {
                    minStep = val[0];
                    minKey = key;
                  }
                });
                this.leaves.delete(minKey);
              }
              this.leaves.set(offset, [this.step++, map]);
              resolve(map);
              this.outstanding_requests.get(offset).forEach((f2) => f2(map));
              this.outstanding_requests.delete(offset);
            });
          }
        });
      });
      __publicField(this, "getZxy", (z2, x, y) => {
        var strid = z2 + "_" + x + "_" + y;
        return this.root.then((root) => {
          if (root.dir.has(strid) && root.dir.get(strid)[2] == 0) {
            return root.dir.get(strid);
          } else {
            if (z2 >= 7) {
              var z7_tile_diff = z2 - 7;
              var z7_tile = [7, Math.trunc(x / (1 << z7_tile_diff)), Math.trunc(y / (1 << z7_tile_diff))];
              var z7_tile_str = z7_tile[0] + "_" + z7_tile[1] + "_" + z7_tile[2];
              if (root.dir.has(z7_tile_str) && root.dir.get(z7_tile_str)[2] == 1) {
                const val = root.dir.get(z7_tile_str);
                return this.getLeaf(val[0], val[1]).then((leafdir) => {
                  if (leafdir.has(strid)) {
                    return leafdir.get(strid);
                  }
                  return null;
                });
              }
            }
          }
          return null;
        });
      });
      __publicField(this, "transformRequest", (u2, t2, tile, done) => {
        if (u2.endsWith(".pmtiles") && done) {
          var tid = tile.tileID.canonical;
          var strid = tid.z + "_" + tid.x + "_" + tid.y;
          this.getZxy(tid.z, tid.x, tid.y).then((val) => {
            if (val) {
              done({ url: this.url, headers: { "Range": "bytes=" + val[0] + "-" + (val[0] + val[1] - 1) } });
            }
          });
        }
        return { url: u2 };
      });
      __publicField(this, "leafletLayer", (options) => {
        const self2 = this;
        var cls = L.GridLayer.extend({
          createTile: function(coord, done) {
            var tile = document.createElement("img");
            var error;
            self2.getZxy(coord.z, coord.x, coord.y).then((result) => {
              if (result === null)
                return;
              fetch(self2.url, { headers: { Range: "bytes=" + result[0] + "-" + (result[0] + result[1] - 1) } }).then((resp) => {
                return resp.arrayBuffer();
              }).then((buf) => {
                var blob = new Blob([buf], { type: "image/png" });
                var imageUrl = window.URL.createObjectURL(blob);
                tile.src = imageUrl;
                done(error, tile);
              });
            });
            return tile;
          },
          _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) {
              return;
            }
            tile.el.width = 0;
            tile.el.height = 0;
            tile.el.deleted = true;
            L.DomUtil.remove(tile.el);
            delete this._tiles[key];
            this.fire("tileunload", {
              tile: tile.el,
              coords: this._keyToTileCoords(key)
            });
          }
        });
        return new cls(options);
      });
      this.url = url;
      const controller = new AbortController();
      const signal = controller.signal;
      this.root = fetch(this.url, { signal, headers: { Range: "bytes=0-511999" } }).then((resp) => {
        if (resp.headers.get("Content-Length") != 512e3) {
          console.error("Content-Length mismatch indicates byte serving not supported; aborting.");
          controller.abort();
        }
        return resp.arrayBuffer();
      }).then((buf) => {
        const header = parseHeader(new DataView(buf, 0, 10));
        var dec = new TextDecoder("utf-8");
        return {
          metadata: JSON.parse(dec.decode(new DataView(buf, 10, header.json_size))),
          dir: bytesToMap(new DataView(buf, 10 + header.json_size, 17 * header.root_entries))
        };
      });
      this.step = 0;
      this.leaves = new Map();
      this.outstanding_requests = new Map();
    }
  };

  // src/tilecache.ts
  var GeomType;
  (function(GeomType2) {
    GeomType2[GeomType2["Point"] = 1] = "Point";
    GeomType2[GeomType2["Line"] = 2] = "Line";
    GeomType2[GeomType2["Polygon"] = 3] = "Polygon";
  })(GeomType || (GeomType = {}));
  function toIndex(c2) {
    return c2.x + ":" + c2.y + ":" + c2.z;
  }
  var loadGeomAndBbox = (pbf, geometry, scale2) => {
    pbf.pos = geometry;
    var end = pbf.readVarint() + pbf.pos, cmd = 1, length2 = 0, x = 0, y = 0, x1 = Infinity, x2 = -Infinity, y1 = Infinity, y2 = -Infinity;
    var lines = [];
    var line;
    while (pbf.pos < end) {
      if (length2 <= 0) {
        var cmdLen = pbf.readVarint();
        cmd = cmdLen & 7;
        length2 = cmdLen >> 3;
      }
      length2--;
      if (cmd === 1 || cmd === 2) {
        x += pbf.readSVarint() * scale2;
        y += pbf.readSVarint() * scale2;
        if (x < x1)
          x1 = x;
        if (x > x2)
          x2 = x;
        if (y < y1)
          y1 = y;
        if (y > y2)
          y2 = y;
        if (cmd === 1) {
          if (line)
            lines.push(line);
          line = [];
        }
        line.push(new import_point_geometry.default(x, y));
      } else if (cmd === 7) {
        if (line)
          line.push(line[0].clone());
      } else
        throw new Error("unknown command " + cmd);
    }
    if (line)
      lines.push(line);
    return { geom: lines, bbox: { minX: x1, minY: y1, maxX: x2, maxY: y2 } };
  };
  function parseTile(buffer, tileSize) {
    let v = new import_vector_tile.VectorTile(new import_pbf.default(buffer));
    let result = new Map();
    for (let [key, value] of Object.entries(v.layers)) {
      let features = [];
      let layer = value;
      for (let i2 = 0; i2 < layer.length; i2++) {
        let result2 = loadGeomAndBbox(layer.feature(i2)._pbf, layer.feature(i2)._geometry, tileSize / layer.extent);
        let numVertices = 0;
        for (let part of result2.geom)
          numVertices += part.length;
        features.push({
          id: layer.feature(i2).id,
          geomType: layer.feature(i2).type,
          geom: result2.geom,
          numVertices,
          bbox: result2.bbox,
          props: layer.feature(i2).properties
        });
      }
      result.set(key, features);
    }
    return result;
  }
  var PmtilesSource = class {
    constructor(url, shouldCancelZooms) {
      if (url.url) {
        this.p = url;
      } else {
        this.p = new PMTiles(url);
      }
      this.controllers = [];
      this.shouldCancelZooms = shouldCancelZooms;
    }
    get(c2, tileSize) {
      return __async(this, null, function* () {
        if (this.shouldCancelZooms) {
          this.controllers = this.controllers.filter((cont) => {
            if (cont[0] != c2.z) {
              cont[1].abort();
              return false;
            }
            return true;
          });
        }
        let result = yield this.p.getZxy(c2.z, c2.x, c2.y);
        if (!result)
          throw new Error(`Tile ${c2.z} ${c2.x} ${c2.y} not found in archive`);
        const controller = new AbortController();
        this.controllers.push([c2.z, controller]);
        const signal = controller.signal;
        return new Promise((resolve, reject) => {
          fetch(this.p.url, {
            headers: {
              Range: "bytes=" + result[0] + "-" + (result[0] + result[1] - 1)
            },
            signal
          }).then((resp) => {
            return resp.arrayBuffer();
          }).then((buffer) => {
            let result2 = parseTile(buffer, tileSize);
            resolve(result2);
          }).catch((e2) => {
            reject(e2);
          });
        });
      });
    }
  };
  var ZxySource = class {
    constructor(url, shouldCancelZooms) {
      this.url = url;
      this.controllers = [];
      this.shouldCancelZooms = shouldCancelZooms;
    }
    get(c2, tileSize) {
      return __async(this, null, function* () {
        if (this.shouldCancelZooms) {
          this.controllers = this.controllers.filter((cont) => {
            if (cont[0] != c2.z) {
              cont[1].abort();
              return false;
            }
            return true;
          });
        }
        let url = this.url.replace("{z}", c2.z.toString()).replace("{x}", c2.x.toString()).replace("{y}", c2.y.toString());
        const controller = new AbortController();
        this.controllers.push([c2.z, controller]);
        const signal = controller.signal;
        return new Promise((resolve, reject) => {
          fetch(url, { signal }).then((resp) => {
            return resp.arrayBuffer();
          }).then((buffer) => {
            let result = parseTile(buffer, tileSize);
            resolve(result);
          }).catch((e2) => {
            reject(e2);
          });
        });
      });
    }
  };
  var R = 6378137;
  var MAX_LATITUDE = 85.0511287798;
  var MAXCOORD = R * Math.PI;
  var project = (latlng) => {
    let d = Math.PI / 180;
    let constrained_lat = Math.max(Math.min(MAX_LATITUDE, latlng[0]), -MAX_LATITUDE);
    let sin = Math.sin(constrained_lat * d);
    return new import_point_geometry.default(R * latlng[1] * d, R * Math.log((1 + sin) / (1 - sin)) / 2);
  };
  function sqr(x) {
    return x * x;
  }
  function dist2(v, w) {
    return sqr(v.x - w.x) + sqr(v.y - w.y);
  }
  function distToSegmentSquared(p2, v, w) {
    var l2 = dist2(v, w);
    if (l2 === 0)
      return dist2(p2, v);
    var t2 = ((p2.x - v.x) * (w.x - v.x) + (p2.y - v.y) * (w.y - v.y)) / l2;
    t2 = Math.max(0, Math.min(1, t2));
    return dist2(p2, { x: v.x + t2 * (w.x - v.x), y: v.y + t2 * (w.y - v.y) });
  }
  function isInRing(point, ring) {
    var inside = false;
    for (var i2 = 0, j = ring.length - 1; i2 < ring.length; j = i2++) {
      var xi = ring[i2].x, yi = ring[i2].y;
      var xj = ring[j].x, yj = ring[j].y;
      var intersect = yi > point.y != yj > point.y && point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi;
      if (intersect)
        inside = !inside;
    }
    return inside;
  }
  function isCCW(ring) {
    var area = 0;
    for (var i2 = 0; i2 < ring.length; i2++) {
      let j = (i2 + 1) % ring.length;
      area += ring[i2].x * ring[j].y;
      area -= ring[j].x * ring[i2].y;
    }
    return area < 0;
  }
  function pointInPolygon(point, geom) {
    var isInCurrentExterior = false;
    for (let ring of geom) {
      if (isCCW(ring)) {
        if (isInRing(point, ring))
          isInCurrentExterior = false;
      } else {
        if (isInCurrentExterior)
          return true;
        if (isInRing(point, ring))
          isInCurrentExterior = true;
      }
    }
    return isInCurrentExterior;
  }
  function pointMinDistToPoints(point, geom) {
    let min2 = Infinity;
    for (let l2 of geom) {
      let dist3 = Math.sqrt(dist2(point, l2[0]));
      if (dist3 < min2)
        min2 = dist3;
    }
    return min2;
  }
  function pointMinDistToLines(point, geom) {
    let min2 = Infinity;
    for (let l2 of geom) {
      for (var i2 = 0; i2 < l2.length - 1; i2++) {
        let dist3 = Math.sqrt(distToSegmentSquared(point, l2[i2], l2[i2 + 1]));
        if (dist3 < min2)
          min2 = dist3;
      }
    }
    return min2;
  }
  var TileCache = class {
    constructor(source, tileSize) {
      this.source = source;
      this.cache = new Map();
      this.inflight = new Map();
      this.tileSize = tileSize;
    }
    queryFeatures(lng, lat, zoom, brushSize) {
      let projected = project([lat, lng]);
      var normalized = new import_point_geometry.default((projected.x + MAXCOORD) / (MAXCOORD * 2), 1 - (projected.y + MAXCOORD) / (MAXCOORD * 2));
      if (normalized.x > 1)
        normalized.x = normalized.x - Math.floor(normalized.x);
      let on_zoom = normalized.mult(1 << zoom);
      let tile_x = Math.floor(on_zoom.x);
      let tile_y = Math.floor(on_zoom.y);
      const idx = toIndex({ z: zoom, x: tile_x, y: tile_y });
      let retval = [];
      let entry = this.cache.get(idx);
      if (entry) {
        const center = {
          x: (on_zoom.x - tile_x) * this.tileSize,
          y: (on_zoom.y - tile_y) * this.tileSize
        };
        for (let [layer_name, layer_arr] of entry.data.entries()) {
          for (let feature of layer_arr) {
            if (feature.geomType == 1) {
              if (pointMinDistToPoints(center, feature.geom) < brushSize) {
                retval.push({ feature, layerName: layer_name });
              }
            } else if (feature.geomType == 2) {
              if (pointMinDistToLines(center, feature.geom) < brushSize) {
                retval.push({ feature, layerName: layer_name });
              }
            } else {
              if (pointInPolygon(center, feature.geom)) {
                retval.push({ feature, layerName: layer_name });
              }
            }
          }
        }
      }
      return retval;
    }
    get(c2) {
      return __async(this, null, function* () {
        const idx = toIndex(c2);
        return new Promise((resolve, reject) => {
          let entry = this.cache.get(idx);
          if (entry) {
            entry.used = performance.now();
            resolve(entry.data);
          } else {
            let ifentry = this.inflight.get(idx);
            if (ifentry) {
              ifentry.push([resolve, reject]);
            } else {
              this.inflight.set(idx, []);
              this.source.get(c2, this.tileSize).then((tile) => {
                this.cache.set(idx, { used: performance.now(), data: tile });
                let ifentry2 = this.inflight.get(idx);
                if (ifentry2)
                  ifentry2.forEach((f2) => f2[0](tile));
                this.inflight.delete(idx);
                resolve(tile);
                if (this.cache.size >= 64) {
                  let min_used = Infinity;
                  let min_key = void 0;
                  this.cache.forEach((value, key) => {
                    if (value.used < min_used) {
                      min_used = value.used;
                      min_key = key;
                    }
                  });
                  if (min_key)
                    this.cache.delete(min_key);
                }
              }).catch((e2) => {
                let ifentry2 = this.inflight.get(idx);
                if (ifentry2)
                  ifentry2.forEach((f2) => f2[1](e2));
                this.inflight.delete(idx);
                reject(e2);
              });
            }
          }
        });
      });
    }
  };

  // src/view.ts
  var import_point_geometry2 = __toModule(require_point_geometry());
  var transformGeom = (geom, scale2, translate) => {
    let retval = [];
    for (let arr2 of geom) {
      let loop = [];
      for (let coord of arr2) {
        loop.push(coord.clone().mult(scale2).add(translate));
      }
      retval.push(loop);
    }
    return retval;
  };
  var wrap = (val, z2) => {
    let dim = 1 << z2;
    if (val < 0)
      val = dim + val;
    if (val >= dim)
      val = val % dim;
    return val;
  };
  var View = class {
    constructor(tileCache, maxDataLevel, levelDiff) {
      this.tileCache = tileCache;
      this.maxDataLevel = maxDataLevel;
      this.levelDiff = levelDiff;
    }
    dataTilesForBounds(display_zoom, bounds) {
      let fractional = Math.pow(2, display_zoom) / Math.pow(2, Math.ceil(display_zoom));
      let needed = [];
      var scale2 = 1;
      var dim = this.tileCache.tileSize;
      if (display_zoom < this.levelDiff) {
        scale2 = 1 / (1 << this.levelDiff - display_zoom) * fractional;
        needed.push({
          data_tile: { z: 0, x: 0, y: 0 },
          origin: new import_point_geometry2.default(0, 0),
          scale: scale2,
          dim: dim * scale2
        });
      } else if (display_zoom <= this.levelDiff + this.maxDataLevel) {
        let f2 = 1 << this.levelDiff;
        let basetile_size = 256 * fractional;
        let data_zoom = Math.ceil(display_zoom) - this.levelDiff;
        let mintile_x = Math.floor(bounds.minX / f2 / basetile_size);
        let mintile_y = Math.floor(bounds.minY / f2 / basetile_size);
        let maxtile_x = Math.floor(bounds.maxX / f2 / basetile_size);
        let maxtile_y = Math.floor(bounds.maxY / f2 / basetile_size);
        for (var tx = mintile_x; tx <= maxtile_x; tx++) {
          for (var ty = mintile_y; ty <= maxtile_y; ty++) {
            let origin = new import_point_geometry2.default(tx * f2 * basetile_size, ty * f2 * basetile_size);
            needed.push({
              data_tile: {
                z: data_zoom,
                x: wrap(tx, data_zoom),
                y: wrap(ty, data_zoom)
              },
              origin,
              scale: fractional,
              dim: dim * fractional
            });
          }
        }
      } else {
        let f2 = 1 << this.levelDiff;
        scale2 = (1 << Math.ceil(display_zoom) - this.maxDataLevel - this.levelDiff) * fractional;
        let mintile_x = Math.floor(bounds.minX / f2 / 256 / scale2);
        let mintile_y = Math.floor(bounds.minY / f2 / 256 / scale2);
        let maxtile_x = Math.floor(bounds.maxX / f2 / 256 / scale2);
        let maxtile_y = Math.floor(bounds.maxY / f2 / 256 / scale2);
        for (var tx = mintile_x; tx <= maxtile_x; tx++) {
          for (var ty = mintile_y; ty <= maxtile_y; ty++) {
            let origin = new import_point_geometry2.default(tx * f2 * 256 * scale2, ty * f2 * 256 * scale2);
            needed.push({
              data_tile: {
                z: this.maxDataLevel,
                x: wrap(tx, this.maxDataLevel),
                y: wrap(ty, this.maxDataLevel)
              },
              origin,
              scale: scale2,
              dim: dim * scale2
            });
          }
        }
      }
      return needed;
    }
    dataTileForDisplayTile(display_tile) {
      var data_tile;
      var scale2 = 1;
      var dim = this.tileCache.tileSize;
      var origin;
      if (display_tile.z < this.levelDiff) {
        data_tile = { z: 0, x: 0, y: 0 };
        scale2 = 1 / (1 << this.levelDiff - display_tile.z);
        origin = new import_point_geometry2.default(0, 0);
        dim = dim * scale2;
      } else if (display_tile.z <= this.levelDiff + this.maxDataLevel) {
        let f2 = 1 << this.levelDiff;
        data_tile = {
          z: display_tile.z - this.levelDiff,
          x: Math.floor(display_tile.x / f2),
          y: Math.floor(display_tile.y / f2)
        };
        origin = new import_point_geometry2.default(data_tile.x * f2 * 256, data_tile.y * f2 * 256);
      } else {
        scale2 = 1 << display_tile.z - this.maxDataLevel - this.levelDiff;
        let f2 = 1 << this.levelDiff;
        data_tile = {
          z: this.maxDataLevel,
          x: Math.floor(display_tile.x / f2 / scale2),
          y: Math.floor(display_tile.y / f2 / scale2)
        };
        origin = new import_point_geometry2.default(data_tile.x * f2 * scale2 * 256, data_tile.y * f2 * scale2 * 256);
        dim = dim * scale2;
      }
      return { data_tile, scale: scale2, origin, dim };
    }
    getBbox(display_zoom, bounds) {
      return __async(this, null, function* () {
        let needed = this.dataTilesForBounds(display_zoom, bounds);
        let result = yield Promise.all(needed.map((tt) => this.tileCache.get(tt.data_tile)));
        return result.map((data, i2) => {
          let tt = needed[i2];
          return {
            data,
            z: display_zoom,
            data_tile: tt.data_tile,
            scale: tt.scale,
            dim: tt.dim,
            origin: tt.origin
          };
        });
      });
    }
    getDisplayTile(display_tile) {
      return __async(this, null, function* () {
        let tt = this.dataTileForDisplayTile(display_tile);
        const data = yield this.tileCache.get(tt.data_tile);
        return {
          data,
          z: display_tile.z,
          data_tile: tt.data_tile,
          scale: tt.scale,
          origin: tt.origin,
          dim: tt.dim
        };
      });
    }
    queryFeatures(lng, lat, display_zoom) {
      let rounded_zoom = Math.round(display_zoom);
      let data_zoom = Math.min(rounded_zoom - this.levelDiff, this.maxDataLevel);
      let brush_size = 16 / (1 << rounded_zoom - data_zoom);
      return this.tileCache.queryFeatures(lng, lat, data_zoom, brush_size);
    }
  };

  // src/painter.ts
  var import_point_geometry5 = __toModule(require_point_geometry());

  // src/symbolizer.ts
  var import_point_geometry4 = __toModule(require_point_geometry());
  var import_unitbezier = __toModule(require_unitbezier_d());
  var import_polylabel = __toModule(require_polylabel());

  // src/attribute.ts
  var StringAttr = class {
    constructor(c2, defaultValue) {
      this.str = c2 != null ? c2 : defaultValue;
      this.per_feature = typeof this.str == "function" && this.str.length == 2;
    }
    get(z2, f2) {
      if (typeof this.str === "function") {
        return this.str(z2, f2);
      } else {
        return this.str;
      }
    }
  };
  var NumberAttr = class {
    constructor(c2, defaultValue = 1) {
      this.value = c2 != null ? c2 : defaultValue;
      this.per_feature = typeof this.value == "function" && this.value.length == 2;
    }
    get(z2, f2) {
      if (typeof this.value == "function") {
        return this.value(z2, f2);
      } else {
        return this.value;
      }
    }
  };
  var TextAttr = class {
    constructor(options) {
      var _a;
      this.label_props = (_a = options == null ? void 0 : options.label_props) != null ? _a : ["name"];
      this.textTransform = options == null ? void 0 : options.textTransform;
    }
    get(z2, f2) {
      let retval;
      let label_props;
      if (typeof this.label_props == "function") {
        label_props = this.label_props(z2, f2);
      } else {
        label_props = this.label_props;
      }
      for (let property of label_props) {
        if (f2.props.hasOwnProperty(property) && typeof f2.props[property] === "string") {
          retval = f2.props[property];
          break;
        }
      }
      let transform;
      if (typeof this.textTransform === "function") {
        transform = this.textTransform(z2, f2);
      } else {
        transform = this.textTransform;
      }
      if (retval && transform === "uppercase")
        retval = retval.toUpperCase();
      else if (retval && transform === "lowercase")
        retval = retval.toLowerCase();
      else if (retval && transform === "capitalize") {
        const wordsArray = retval.toLowerCase().split(" ");
        const capsArray = wordsArray.map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        });
        retval = capsArray.join(" ");
      }
      return retval;
    }
  };
  var FontAttr = class {
    constructor(options) {
      var _a, _b;
      if (options == null ? void 0 : options.font) {
        this.font = options.font;
      } else {
        this.family = (_a = options == null ? void 0 : options.fontFamily) != null ? _a : "sans-serif";
        this.size = (_b = options == null ? void 0 : options.fontSize) != null ? _b : 12;
        this.weight = options == null ? void 0 : options.fontWeight;
        this.style = options == null ? void 0 : options.fontStyle;
      }
    }
    get(z2, f2) {
      if (this.font) {
        if (typeof this.font === "function") {
          return this.font(z2, f2);
        } else {
          return this.font;
        }
      } else {
        var style = "";
        if (this.style) {
          if (typeof this.style === "function") {
            style = this.style(z2, f2) + " ";
          } else {
            style = this.style + " ";
          }
        }
        var weight = "";
        if (this.weight) {
          if (typeof this.weight === "function") {
            weight = this.weight(z2, f2) + " ";
          } else {
            weight = this.weight + " ";
          }
        }
        var size;
        if (typeof this.size === "function") {
          size = this.size(z2, f2);
        } else {
          size = this.size;
        }
        var family;
        if (typeof this.family === "function") {
          family = this.family(z2, f2);
        } else {
          family = this.family;
        }
        return `${style}${weight}${size}px ${family}`;
      }
    }
  };
  var ArrayAttr = class {
    constructor(c2, defaultValue = []) {
      this.value = c2 != null ? c2 : defaultValue;
      this.per_feature = typeof this.value == "function" && this.value.length == 2;
    }
    get(z2, f2) {
      if (typeof this.value == "function") {
        return this.value(z2, f2);
      } else {
        return this.value;
      }
    }
  };

  // src/line.ts
  var import_point_geometry3 = __toModule(require_point_geometry());
  var linelabel = (pts, max_angle_delta, targetLen) => {
    var chunks = [];
    var a2, b, c2, i2 = 0, n2 = 0, d = 0;
    var abmag = 0, bcmag = 0;
    var abx = 0, aby = 0;
    var bcx = 0, bcy = 0;
    var dt = 0;
    var i_start = 0;
    var d_start = 0;
    if (pts.length < 2)
      return [];
    if (pts.length === 2) {
      d = Math.sqrt(Math.pow(pts[1].x - pts[0].x, 2) + Math.pow(pts[1].y - pts[0].y, 2));
      return [
        {
          length: d,
          beginIndex: 0,
          beginDistance: 0,
          endIndex: 2,
          endDistance: d
        }
      ];
    }
    abmag = Math.sqrt(Math.pow(pts[1].x - pts[0].x, 2) + Math.pow(pts[1].y - pts[0].y, 2));
    for (i2 = 1, n2 = pts.length - 1; i2 < n2; i2++) {
      a2 = pts[i2 - 1];
      b = pts[i2];
      c2 = pts[i2 + 1];
      abx = b.x - a2.x;
      aby = b.y - a2.y;
      bcx = c2.x - b.x;
      bcy = c2.y - b.y;
      bcmag = Math.sqrt(bcx * bcx + bcy * bcy);
      d += abmag;
      dt = Math.acos((abx * bcx + aby * bcy) / (abmag * bcmag));
      if (dt > max_angle_delta || d - d_start > targetLen) {
        chunks.push({
          length: d - d_start,
          beginDistance: d_start,
          beginIndex: i_start,
          endIndex: i2 + 1,
          endDistance: d
        });
        i_start = i2;
        d_start = d;
      }
      abmag = bcmag;
    }
    if (i2 - i_start > 0) {
      chunks.push({
        length: d - d_start + bcmag,
        beginIndex: i_start,
        beginDistance: d_start,
        endIndex: i2 + 1,
        endDistance: d + bcmag
      });
    }
    return chunks;
  };
  function simpleLabel(mls, minimum, repeatDistance, cellSize) {
    let longestStart;
    let longestEnd;
    let longestLength = 0;
    let candidates = [];
    var lastLabeledDistance = -Infinity;
    for (let ls of mls) {
      let segments = linelabel(ls, Math.PI / 45, minimum);
      for (let segment of segments) {
        if (segment.length >= minimum + cellSize) {
          let start = new import_point_geometry3.default(ls[segment.beginIndex].x, ls[segment.beginIndex].y);
          let end = ls[segment.endIndex - 1];
          let normalized = new import_point_geometry3.default((end.x - start.x) / segment.length, (end.y - start.y) / segment.length);
          for (var i2 = cellSize; i2 < segment.length - minimum; i2 += repeatDistance) {
            candidates.push({
              start: start.add(normalized.mult(i2)),
              end: start.add(normalized.mult(i2 + minimum))
            });
          }
        }
      }
    }
    return candidates;
  }
  function lineCells(a2, b, length2, spacing) {
    let dx = b.x - a2.x;
    let dy = b.y - a2.y;
    let dist3 = Math.sqrt(Math.pow(b.x - a2.x, 2) + Math.pow(b.y - a2.y, 2));
    let retval = [];
    for (var i2 = 0; i2 < length2 + spacing; i2 += 2 * spacing) {
      let factor = i2 * 1 / dist3;
      retval.push({ x: a2.x + factor * dx, y: a2.y + factor * dy });
    }
    return retval;
  }

  // src/text.ts
  function linebreak(str2, maxUnits) {
    if (str2.length <= maxUnits)
      return [str2];
    let endIndex = maxUnits - 1;
    let space_before = str2.lastIndexOf(" ", endIndex);
    let space_after = str2.indexOf(" ", endIndex);
    if (space_before == -1 && space_after == -1) {
      return [str2];
    }
    let first;
    let after;
    if (space_after == -1 || space_before >= 0 && endIndex - space_before < space_after - endIndex) {
      first = str2.substring(0, space_before);
      after = str2.substring(space_before + 1, str2.length);
    } else {
      first = str2.substring(0, space_after);
      after = str2.substring(space_after + 1, str2.length);
    }
    return [first, ...linebreak(after, maxUnits)];
  }
  var CJK_CHARS = "\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DB5\u4E00-\u9FEA\uF900-\uFA6D\uFA70-\uFAD9\u2000";
  var cjk_test = new RegExp("^[" + CJK_CHARS + "]+$");

  // src/symbolizer.ts
  var MAX_VERTICES_PER_DRAW_CALL = 5400;
  var Justify;
  (function(Justify2) {
    Justify2[Justify2["Left"] = 1] = "Left";
    Justify2[Justify2["Center"] = 2] = "Center";
    Justify2[Justify2["Right"] = 3] = "Right";
  })(Justify || (Justify = {}));
  var TextPlacements;
  (function(TextPlacements2) {
    TextPlacements2[TextPlacements2["N"] = 1] = "N";
    TextPlacements2[TextPlacements2["NE"] = 2] = "NE";
    TextPlacements2[TextPlacements2["E"] = 3] = "E";
    TextPlacements2[TextPlacements2["SE"] = 4] = "SE";
    TextPlacements2[TextPlacements2["S"] = 5] = "S";
    TextPlacements2[TextPlacements2["SW"] = 6] = "SW";
    TextPlacements2[TextPlacements2["W"] = 7] = "W";
    TextPlacements2[TextPlacements2["NW"] = 8] = "NW";
  })(TextPlacements || (TextPlacements = {}));
  var createPattern = (width, height, fn) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    if (ctx !== null)
      fn(canvas, ctx);
    return canvas;
  };
  var PolygonSymbolizer = class {
    constructor(options) {
      var _a;
      this.pattern = options.pattern;
      this.fill = new StringAttr(options.fill, "black");
      this.opacity = new NumberAttr(options.opacity, 1);
      this.stroke = new StringAttr(options.stroke, "black");
      this.width = new NumberAttr(options.width, 0);
      this.per_feature = (_a = this.fill.per_feature || this.opacity.per_feature || this.stroke.per_feature || this.width.per_feature || options.per_feature) != null ? _a : false;
      this.do_stroke = false;
    }
    before(ctx, z2) {
      if (!this.per_feature) {
        ctx.globalAlpha = this.opacity.get(z2);
        ctx.fillStyle = this.fill.get(z2);
        ctx.strokeStyle = this.stroke.get(z2);
        let width = this.width.get(z2);
        if (width > 0)
          this.do_stroke = true;
        ctx.lineWidth = width;
      }
      if (this.pattern) {
        const patten = ctx.createPattern(this.pattern, "repeat");
        if (patten)
          ctx.fillStyle = patten;
      }
    }
    draw(ctx, geom, z2, f2) {
      var do_stroke = false;
      if (this.per_feature) {
        ctx.globalAlpha = this.opacity.get(z2, f2);
        ctx.fillStyle = this.fill.get(z2, f2);
        var width = this.width.get(z2, f2);
        if (width) {
          do_stroke = true;
          ctx.strokeStyle = this.stroke.get(z2, f2);
          ctx.lineWidth = width;
        }
      }
      let drawPath = () => {
        ctx.fill();
        if (do_stroke || this.do_stroke) {
          ctx.stroke();
        }
      };
      var vertices_in_path = 0;
      ctx.beginPath();
      for (var poly of geom) {
        if (vertices_in_path + poly.length > MAX_VERTICES_PER_DRAW_CALL) {
          drawPath();
          vertices_in_path = 0;
          ctx.beginPath();
        }
        for (var p2 = 0; p2 < poly.length - 1; p2++) {
          let pt = poly[p2];
          if (p2 == 0)
            ctx.moveTo(pt.x, pt.y);
          else
            ctx.lineTo(pt.x, pt.y);
        }
        vertices_in_path += poly.length;
      }
      if (vertices_in_path > 0)
        drawPath();
    }
  };
  function arr(base, a2) {
    return (z2) => {
      let b = z2 - base;
      if (b >= 0 && b < a2.length) {
        return a2[b];
      }
      return 0;
    };
  }
  function getStopIndex(input, stops) {
    let idx = 0;
    while (stops[idx + 1][0] < input)
      idx++;
    return idx;
  }
  function interpolate(factor, start, end) {
    return factor * (end - start) + start;
  }
  function computeInterpolationFactor(z2, idx, base, stops) {
    const difference = stops[idx + 1][0] - stops[idx][0];
    const progress = z2 - stops[idx][0];
    if (difference === 0)
      return 0;
    else if (base === 1)
      return progress / difference;
    else
      return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
  }
  function exp(base, stops) {
    return (z2) => {
      if (stops.length < 1)
        return 0;
      if (z2 <= stops[0][0])
        return stops[0][1];
      if (z2 >= stops[stops.length - 1][0])
        return stops[stops.length - 1][1];
      const idx = getStopIndex(z2, stops);
      const factor = computeInterpolationFactor(z2, idx, base, stops);
      return interpolate(factor, stops[idx][1], stops[idx + 1][1]);
    };
  }
  function step(output0, stops) {
    return (z2) => {
      if (stops.length < 1)
        return 0;
      let retval = output0;
      for (let i2 = 0; i2 < stops.length; i2++) {
        if (z2 >= stops[i2][0])
          retval = stops[i2][1];
      }
      return retval;
    };
  }
  function linear(stops) {
    return exp(1, stops);
  }
  function cubicBezier(x1, y1, x2, y2, stops) {
    return (z2) => {
      if (stops.length < 1)
        return 0;
      const bezier = new import_unitbezier.default(x1, y1, x2, y2);
      const idx = getStopIndex(z2, stops);
      const factor = bezier.solve(computeInterpolationFactor(z2, idx, 1, stops));
      return interpolate(factor, stops[idx][1], stops[idx + 1][1]);
    };
  }
  var LineSymbolizer = class {
    constructor(options) {
      var _a;
      this.color = new StringAttr(options.color, "black");
      this.width = new NumberAttr(options.width);
      this.opacity = new NumberAttr(options.opacity);
      this.dash = options.dash ? new ArrayAttr(options.dash) : null;
      this.dashColor = new StringAttr(options.dashColor, "black");
      this.dashWidth = new NumberAttr(options.dashWidth, 1);
      this.lineCap = new StringAttr(options.lineCap, "butt");
      this.lineJoin = new StringAttr(options.lineJoin, "miter");
      this.skip = false;
      this.per_feature = !!(((_a = this.dash) == null ? void 0 : _a.per_feature) || this.color.per_feature || this.opacity.per_feature || this.width.per_feature || this.lineCap.per_feature || this.lineJoin.per_feature || options.per_feature);
    }
    before(ctx, z2) {
      if (!this.per_feature) {
        ctx.strokeStyle = this.color.get(z2);
        ctx.lineWidth = this.width.get(z2);
        ctx.globalAlpha = this.opacity.get(z2);
        ctx.lineCap = this.lineCap.get(z2);
        ctx.lineJoin = this.lineJoin.get(z2);
      }
    }
    draw(ctx, geom, z2, f2) {
      if (this.skip)
        return;
      let strokePath = () => {
        if (this.per_feature) {
          ctx.globalAlpha = this.opacity.get(z2, f2);
          ctx.lineCap = this.lineCap.get(z2, f2);
          ctx.lineJoin = this.lineJoin.get(z2, f2);
        }
        if (this.dash) {
          ctx.save();
          if (this.per_feature) {
            ctx.lineWidth = this.dashWidth.get(z2, f2);
            ctx.strokeStyle = this.dashColor.get(z2, f2);
            ctx.setLineDash(this.dash.get(z2, f2));
          } else {
            ctx.setLineDash(this.dash.get(z2));
          }
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.save();
          if (this.per_feature) {
            ctx.lineWidth = this.width.get(z2, f2);
            ctx.strokeStyle = this.color.get(z2, f2);
          }
          ctx.stroke();
          ctx.restore();
        }
      };
      var vertices_in_path = 0;
      ctx.beginPath();
      for (var ls of geom) {
        if (vertices_in_path + ls.length > MAX_VERTICES_PER_DRAW_CALL) {
          strokePath();
          vertices_in_path = 0;
          ctx.beginPath();
        }
        for (var p2 = 0; p2 < ls.length; p2++) {
          let pt = ls[p2];
          if (p2 == 0)
            ctx.moveTo(pt.x, pt.y);
          else
            ctx.lineTo(pt.x, pt.y);
        }
        vertices_in_path += ls.length;
      }
      if (vertices_in_path > 0)
        strokePath();
    }
  };
  var IconSymbolizer = class {
    constructor(options) {
      var _a;
      this.name = options.name;
      this.sprites = (_a = options.sprites) != null ? _a : new Map();
    }
    place(layout, geom, feature) {
      let pt = geom[0];
      let a2 = new import_point_geometry4.default(geom[0][0].x, geom[0][0].y);
      let bbox = {
        minX: a2.x - 32,
        minY: a2.y - 32,
        maxX: a2.x + 32,
        maxY: a2.y + 32
      };
      let draw = (ctx) => {
        ctx.globalAlpha = 1;
        let r2 = this.sprites.get(this.name);
        if (r2)
          ctx.drawImage(r2.canvas, r2.x, r2.y, r2.w, r2.h, -8, -8, r2.w, r2.h);
      };
      return [{ anchor: a2, bboxes: [bbox], draw }];
    }
  };
  var CircleSymbolizer = class {
    constructor(options) {
      this.radius = new NumberAttr(options.radius, 3);
      this.fill = new StringAttr(options.fill, "black");
      this.stroke = new StringAttr(options.stroke, "white");
      this.width = new NumberAttr(options.width, 0);
      this.opacity = new NumberAttr(options.opacity);
    }
    draw(ctx, geom, z2, f2) {
      ctx.globalAlpha = this.opacity.get(z2, f2);
      let radius = this.radius.get(z2, f2);
      let width = this.width.get(z2, f2);
      if (width > 0) {
        ctx.fillStyle = this.stroke.get(z2, f2);
        ctx.beginPath();
        ctx.arc(geom[0][0].x, geom[0][0].y, radius + width, 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.fillStyle = this.fill.get(z2, f2);
      ctx.beginPath();
      ctx.arc(geom[0][0].x, geom[0][0].y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
    place(layout, geom, feature) {
      let pt = geom[0];
      let a2 = new import_point_geometry4.default(geom[0][0].x, geom[0][0].y);
      let radius = this.radius.get(layout.zoom, feature);
      let bbox = {
        minX: a2.x - radius,
        minY: a2.y - radius,
        maxX: a2.x + radius,
        maxY: a2.y + radius
      };
      let draw = (ctx) => {
        this.draw(ctx, [[new import_point_geometry4.default(0, 0)]], layout.zoom, feature);
      };
      return [{ anchor: a2, bboxes: [bbox], draw }];
    }
  };
  var ShieldSymbolizer = class {
    constructor(options) {
      this.font = new FontAttr(options);
      this.text = new TextAttr(options);
      this.fill = new StringAttr(options.fill, "black");
      this.background = new StringAttr(options.background, "white");
      this.padding = new NumberAttr(options.padding, 0);
    }
    place(layout, geom, f2) {
      let property = this.text.get(layout.zoom, f2);
      if (!property)
        return void 0;
      let font = this.font.get(layout.zoom, f2);
      layout.scratch.font = font;
      let metrics = layout.scratch.measureText(property);
      let width = metrics.width;
      let ascent = metrics.actualBoundingBoxAscent;
      let descent = metrics.actualBoundingBoxDescent;
      let pt = geom[0];
      let a2 = new import_point_geometry4.default(geom[0][0].x, geom[0][0].y);
      let p2 = this.padding.get(layout.zoom, f2);
      let bbox = {
        minX: a2.x - width / 2 - p2,
        minY: a2.y - ascent - p2,
        maxX: a2.x + width / 2 + p2,
        maxY: a2.y + descent + p2
      };
      let draw = (ctx) => {
        ctx.globalAlpha = 1;
        ctx.fillStyle = this.background.get(layout.zoom, f2);
        ctx.fillRect(-width / 2 - p2, -ascent - p2, width + 2 * p2, ascent + descent + 2 * p2);
        ctx.fillStyle = this.fill.get(layout.zoom, f2);
        ctx.font = font;
        ctx.fillText(property, -width / 2, 0);
      };
      return [{ anchor: a2, bboxes: [bbox], draw }];
    }
  };
  var FlexSymbolizer = class {
    constructor(list) {
      this.list = list;
    }
    place(layout, geom, feature) {
      var labels = this.list[0].place(layout, geom, feature);
      if (!labels)
        return void 0;
      var label = labels[0];
      let anchor = label.anchor;
      let bbox = label.bboxes[0];
      let height = bbox.maxY - bbox.minY;
      let draws = [{ draw: label.draw, translate: { x: 0, y: 0 } }];
      let newGeom = [[{ x: geom[0][0].x, y: geom[0][0].y + height }]];
      for (let i2 = 1; i2 < this.list.length; i2++) {
        labels = this.list[i2].place(layout, newGeom, feature);
        if (labels) {
          label = labels[0];
          bbox = mergeBbox(bbox, label.bboxes[0]);
          draws.push({ draw: label.draw, translate: { x: 0, y: height } });
        }
      }
      let draw = (ctx) => {
        for (let sub2 of draws) {
          ctx.save();
          ctx.translate(sub2.translate.x, sub2.translate.y);
          sub2.draw(ctx);
          ctx.restore();
        }
      };
      return [{ anchor, bboxes: [bbox], draw }];
    }
  };
  var mergeBbox = (b1, b2) => {
    return {
      minX: Math.min(b1.minX, b2.minX),
      minY: Math.min(b1.minY, b2.minY),
      maxX: Math.max(b1.maxX, b2.maxX),
      maxY: Math.max(b1.maxY, b2.maxY)
    };
  };
  var GroupSymbolizer = class {
    constructor(list) {
      this.list = list;
    }
    place(layout, geom, feature) {
      let first = this.list[0];
      if (!first)
        return void 0;
      var labels = first.place(layout, geom, feature);
      if (!labels)
        return void 0;
      var label = labels[0];
      let anchor = label.anchor;
      let bbox = label.bboxes[0];
      let draws = [label.draw];
      for (let i2 = 1; i2 < this.list.length; i2++) {
        labels = this.list[i2].place(layout, geom, feature);
        if (!labels)
          return void 0;
        label = labels[0];
        bbox = mergeBbox(bbox, label.bboxes[0]);
        draws.push(label.draw);
      }
      let draw = (ctx) => {
        draws.forEach((d) => d(ctx));
      };
      return [{ anchor, bboxes: [bbox], draw }];
    }
  };
  var CenteredSymbolizer = class {
    constructor(symbolizer) {
      this.symbolizer = symbolizer;
    }
    place(layout, geom, feature) {
      let a2 = geom[0][0];
      let placed = this.symbolizer.place(layout, [[new import_point_geometry4.default(0, 0)]], feature);
      if (!placed || placed.length == 0)
        return void 0;
      let first_label = placed[0];
      let bbox = first_label.bboxes[0];
      let width = bbox.maxX - bbox.minX;
      let height = bbox.maxY - bbox.minY;
      let centered = {
        minX: a2.x - width / 2,
        maxX: a2.x + width / 2,
        minY: a2.y - height / 2,
        maxY: a2.y + height / 2
      };
      let draw = (ctx) => {
        ctx.translate(-width / 2, height / 2 - bbox.maxY);
        first_label.draw(ctx, { justify: 2 });
      };
      return [{ anchor: a2, bboxes: [centered], draw }];
    }
  };
  var Padding = class {
    constructor(padding, symbolizer) {
      this.padding = new NumberAttr(padding, 0);
      this.symbolizer = symbolizer;
    }
    place(layout, geom, feature) {
      let placed = this.symbolizer.place(layout, geom, feature);
      if (!placed || placed.length == 0)
        return void 0;
      let padding = this.padding.get(layout.zoom, feature);
      for (var label of placed) {
        for (var bbox of label.bboxes) {
          bbox.minX -= padding;
          bbox.minY -= padding;
          bbox.maxX += padding;
          bbox.maxY += padding;
        }
      }
      return placed;
    }
  };
  var TextSymbolizer = class {
    constructor(options) {
      this.font = new FontAttr(options);
      this.text = new TextAttr(options);
      this.fill = new StringAttr(options.fill, "black");
      this.stroke = new StringAttr(options.stroke, "black");
      this.width = new NumberAttr(options.width, 0);
      this.lineHeight = new NumberAttr(options.lineHeight, 1);
      this.letterSpacing = new NumberAttr(options.letterSpacing, 0);
      this.maxLineCodeUnits = new NumberAttr(options.maxLineChars, 15);
      this.justify = options.justify;
    }
    place(layout, geom, feature) {
      let property = this.text.get(layout.zoom, feature);
      if (!property)
        return void 0;
      let font = this.font.get(layout.zoom, feature);
      layout.scratch.font = font;
      let letterSpacing = this.letterSpacing.get(layout.zoom, feature);
      let lines = linebreak(property, this.maxLineCodeUnits.get(layout.zoom, feature));
      var longestLine;
      var longestLineLen = 0;
      for (let line of lines) {
        if (line.length > longestLineLen) {
          longestLineLen = line.length;
          longestLine = line;
        }
      }
      let metrics = layout.scratch.measureText(longestLine);
      let width = metrics.width + letterSpacing * (longestLineLen - 1);
      let ascent = metrics.actualBoundingBoxAscent;
      let descent = metrics.actualBoundingBoxDescent;
      let lineHeight = (ascent + descent) * this.lineHeight.get(layout.zoom, feature);
      let a2 = new import_point_geometry4.default(geom[0][0].x, geom[0][0].y);
      let bbox = {
        minX: a2.x,
        minY: a2.y - ascent,
        maxX: a2.x + width,
        maxY: a2.y + descent + (lines.length - 1) * lineHeight
      };
      let draw = (ctx, extra) => {
        ctx.globalAlpha = 1;
        ctx.font = font;
        ctx.fillStyle = this.fill.get(layout.zoom, feature);
        let textStrokeWidth = this.width.get(layout.zoom, feature);
        var y = 0;
        for (let line of lines) {
          var startX = 0;
          if (this.justify == 2 || extra && extra.justify == 2) {
            startX = (width - ctx.measureText(line).width) / 2;
          } else if (this.justify == 3 || extra && extra.justify == 3) {
            startX = width - ctx.measureText(line).width;
          }
          if (textStrokeWidth) {
            ctx.lineWidth = textStrokeWidth * 2;
            ctx.strokeStyle = this.stroke.get(layout.zoom, feature);
            if (letterSpacing > 0) {
              var xPos = startX;
              for (var letter of line) {
                ctx.strokeText(letter, xPos, y);
                xPos += ctx.measureText(letter).width + letterSpacing;
              }
            } else {
              ctx.strokeText(line, startX, y);
            }
          }
          if (letterSpacing > 0) {
            var xPos = startX;
            for (var letter of line) {
              ctx.fillText(letter, xPos, y);
              xPos += ctx.measureText(letter).width + letterSpacing;
            }
          } else {
            ctx.fillText(line, startX, y);
          }
          y += lineHeight;
        }
      };
      return [{ anchor: a2, bboxes: [bbox], draw }];
    }
  };
  var CenteredTextSymbolizer = class {
    constructor(options) {
      this.centered = new CenteredSymbolizer(new TextSymbolizer(options));
    }
    place(layout, geom, feature) {
      return this.centered.place(layout, geom, feature);
    }
  };
  var OffsetSymbolizer = class {
    constructor(symbolizer, options) {
      var _a, _b, _c;
      this.symbolizer = symbolizer;
      this.offsetX = new NumberAttr(options.offsetX, 0);
      this.offsetY = new NumberAttr(options.offsetY, 0);
      this.justify = (_a = options.justify) != null ? _a : void 0;
      this.placements = (_b = options.placements) != null ? _b : [
        2,
        6,
        8,
        4,
        1,
        3,
        5,
        7
      ];
      this.ddValues = (_c = options.ddValues) != null ? _c : () => {
        return {};
      };
    }
    place(layout, geom, feature) {
      if (feature.geomType !== GeomType.Point)
        return void 0;
      let anchor = geom[0][0];
      let placed = this.symbolizer.place(layout, [[new import_point_geometry4.default(0, 0)]], feature);
      if (!placed || placed.length == 0)
        return void 0;
      let first_label = placed[0];
      let fb = first_label.bboxes[0];
      let offsetXValue = this.offsetX;
      let offsetYValue = this.offsetY;
      let justifyValue = this.justify;
      let placements = this.placements;
      const {
        offsetX: ddOffsetX,
        offsetY: ddOffsetY,
        justify: ddJustify,
        placements: ddPlacements
      } = this.ddValues(layout.zoom, feature) || {};
      if (ddOffsetX)
        offsetXValue = new NumberAttr(ddOffsetX, 0);
      if (ddOffsetY)
        offsetYValue = new NumberAttr(ddOffsetY, 0);
      if (ddJustify)
        justifyValue = ddJustify;
      if (ddPlacements)
        placements = ddPlacements;
      const offsetX = offsetXValue.get(layout.zoom, feature);
      const offsetY = offsetYValue.get(layout.zoom, feature);
      let getBbox = (a2, o2) => {
        return {
          minX: a2.x + o2.x + fb.minX,
          minY: a2.y + o2.y + fb.minY,
          maxX: a2.x + o2.x + fb.maxX,
          maxY: a2.y + o2.y + fb.maxY
        };
      };
      var origin = new import_point_geometry4.default(offsetX, offsetY);
      var justify;
      let draw = (ctx) => {
        ctx.translate(origin.x, origin.y);
        first_label.draw(ctx, { justify });
      };
      const placeLabelInPoint = (a2, o2) => {
        const bbox = getBbox(a2, o2);
        if (!layout.index.bboxCollides(bbox, layout.order))
          return [{ anchor, bboxes: [bbox], draw }];
      };
      for (let placement of placements) {
        const xAxisOffset = this.computeXAxisOffset(offsetX, fb, placement);
        const yAxisOffset = this.computeYAxisOffset(offsetY, fb, placement);
        justify = this.computeJustify(justifyValue, placement);
        origin = new import_point_geometry4.default(xAxisOffset, yAxisOffset);
        return placeLabelInPoint(anchor, origin);
      }
      return void 0;
    }
    computeXAxisOffset(offsetX, fb, placement) {
      const labelWidth = fb.maxX;
      const labelHalfWidth = labelWidth / 2;
      if ([1, 5].includes(placement))
        return offsetX - labelHalfWidth;
      if ([8, 7, 6].includes(placement))
        return offsetX - labelWidth;
      return offsetX;
    }
    computeYAxisOffset(offsetY, fb, placement) {
      const labelHalfHeight = Math.abs(fb.minY);
      const labelBottom = fb.maxY;
      const labelCenterHeight = (fb.minY + fb.maxY) / 2;
      if ([3, 7].includes(placement))
        return offsetY - labelCenterHeight;
      if ([8, 2, 1].includes(placement))
        return offsetY - labelBottom;
      if ([6, 4, 5].includes(placement))
        return offsetY + labelHalfHeight;
      return offsetY;
    }
    computeJustify(fixedJustify, placement) {
      if (fixedJustify)
        return fixedJustify;
      if ([1, 5].includes(placement))
        return 2;
      if ([2, 3, 4].includes(placement))
        return 1;
      return 3;
    }
  };
  var OffsetTextSymbolizer = class {
    constructor(options) {
      this.symbolizer = new OffsetSymbolizer(new TextSymbolizer(options), options);
    }
    place(layout, geom, feature) {
      return this.symbolizer.place(layout, geom, feature);
    }
  };
  var LineLabelPlacement;
  (function(LineLabelPlacement2) {
    LineLabelPlacement2[LineLabelPlacement2["Above"] = 1] = "Above";
    LineLabelPlacement2[LineLabelPlacement2["Center"] = 2] = "Center";
    LineLabelPlacement2[LineLabelPlacement2["Below"] = 3] = "Below";
  })(LineLabelPlacement || (LineLabelPlacement = {}));
  var LineLabelSymbolizer = class {
    constructor(options) {
      var _a;
      this.font = new FontAttr(options);
      this.text = new TextAttr(options);
      this.fill = new StringAttr(options.fill, "black");
      this.stroke = new StringAttr(options.stroke, "black");
      this.width = new NumberAttr(options.width, 0);
      this.offset = new NumberAttr(options.offset, 0);
      this.position = (_a = options.position) != null ? _a : 1;
      this.maxLabelCodeUnits = new NumberAttr(options.maxLabelChars, 40);
      this.repeatDistance = new NumberAttr(options.repeatDistance, 250);
    }
    place(layout, geom, feature) {
      let name = this.text.get(layout.zoom, feature);
      if (!name)
        return void 0;
      if (name.length > this.maxLabelCodeUnits.get(layout.zoom, feature))
        return void 0;
      let MIN_LABELABLE_DIM = 20;
      let fbbox = feature.bbox;
      if (fbbox.maxY - fbbox.minY < MIN_LABELABLE_DIM && fbbox.maxX - fbbox.minX < MIN_LABELABLE_DIM)
        return void 0;
      let font = this.font.get(layout.zoom, feature);
      layout.scratch.font = font;
      let metrics = layout.scratch.measureText(name);
      let width = metrics.width;
      let height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
      var repeatDistance = this.repeatDistance.get(layout.zoom, feature);
      if (layout.overzoom > 4)
        repeatDistance *= 1 << layout.overzoom - 4;
      let cell_size = height * 2;
      let label_candidates = simpleLabel(geom, width, repeatDistance, cell_size);
      if (label_candidates.length == 0)
        return void 0;
      let labels = [];
      for (let candidate of label_candidates) {
        let dx = candidate.end.x - candidate.start.x;
        let dy = candidate.end.y - candidate.start.y;
        let cells = lineCells(candidate.start, candidate.end, width, cell_size / 2);
        let bboxes = cells.map((c2) => {
          return {
            minX: c2.x - cell_size / 2,
            minY: c2.y - cell_size / 2,
            maxX: c2.x + cell_size / 2,
            maxY: c2.y + cell_size / 2
          };
        });
        let draw = (ctx, drawExtra) => {
          ctx.globalAlpha = 1;
          let totalRotation = 0;
          if (drawExtra == null ? void 0 : drawExtra.rotation) {
            totalRotation += drawExtra.rotation;
          }
          totalRotation += Math.atan2(dy, dx);
          ctx.rotate(totalRotation);
          if (totalRotation > Math.PI / 2 || totalRotation < -Math.PI / 2) {
            ctx.scale(-1, -1);
            ctx.translate(-width, 0);
          }
          let heightPlacement = 0;
          if (this.position === 3)
            heightPlacement += height;
          else if (this.position === 2)
            heightPlacement += height / 2;
          ctx.translate(0, heightPlacement - this.offset.get(layout.zoom, feature));
          ctx.font = font;
          let lineWidth = this.width.get(layout.zoom, feature);
          if (lineWidth) {
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = this.stroke.get(layout.zoom, feature);
            ctx.strokeText(name, 0, 0);
          }
          ctx.fillStyle = this.fill.get(layout.zoom, feature);
          ctx.fillText(name, 0, 0);
        };
        labels.push({
          anchor: candidate.start,
          bboxes,
          draw,
          deduplicationKey: name,
          deduplicationDistance: repeatDistance
        });
      }
      return labels;
    }
  };
  var PolygonLabelSymbolizer = class {
    constructor(options) {
      this.symbolizer = new TextSymbolizer(options);
    }
    place(layout, geom, feature) {
      let fbbox = feature.bbox;
      let area = (fbbox.maxY - fbbox.minY) * (fbbox.maxX - fbbox.minX);
      if (area < 2e4)
        return void 0;
      let placed = this.symbolizer.place(layout, [[new import_point_geometry4.default(0, 0)]], feature);
      if (!placed || placed.length == 0)
        return void 0;
      let first_label = placed[0];
      let fb = first_label.bboxes[0];
      let first_poly = geom[0];
      let found = (0, import_polylabel.default)([first_poly.map((c2) => [c2.x, c2.y])]);
      let a2 = new import_point_geometry4.default(found[0], found[1]);
      let bbox = {
        minX: a2.x - (fb.maxX - fb.minX) / 2,
        minY: a2.y - (fb.maxY - fb.minY) / 2,
        maxX: a2.x + (fb.maxX - fb.minX) / 2,
        maxY: a2.y + (fb.maxY - fb.minY) / 2
      };
      let draw = (ctx) => {
        ctx.translate(first_label.anchor.x - (fb.maxX - fb.minX) / 2, first_label.anchor.y);
        first_label.draw(ctx);
      };
      return [{ anchor: a2, bboxes: [bbox], draw }];
    }
  };

  // src/painter.ts
  function xray(ctx, prepared_tiles, bbox, origin, clip, debug) {
    let start = performance.now();
    let xray_colors = [
      "crimson",
      "lightgreen",
      "lightseagreen",
      "mediumslateblue",
      "purple",
      "cornflowerblue"
    ];
    ctx.save();
    ctx.miterLimit = 2;
    for (var prepared_tile of prepared_tiles) {
      let po = prepared_tile.origin;
      let ps = prepared_tile.scale;
      let dim = prepared_tile.dim;
      ctx.save();
      if (clip) {
        ctx.beginPath();
        let minX = Math.max(po.x - origin.x, bbox.minX - origin.x) - 0.5;
        let minY = Math.max(po.y - origin.y, bbox.minY - origin.y) - 0.5;
        let maxX = Math.min(po.x - origin.x + dim, bbox.maxX - origin.x) + 0.5;
        let maxY = Math.min(po.y - origin.y + dim, bbox.maxY - origin.y) + 0.5;
        ctx.rect(minX, minY, maxX - minX, maxY - minY);
        ctx.clip();
      }
      ctx.translate(po.x - origin.x, po.y - origin.y);
      if (clip) {
        ctx.translate(dim / 2, dim / 2);
        ctx.scale(1 + 1 / dim, 1 + 1 / dim);
        ctx.translate(-dim / 2, -dim / 2);
      }
      prepared_tile.data.forEach((features, layerName) => {
        if (layerName == "earth")
          return;
        let color = xray_colors[layerName.charCodeAt(0) % 6];
        let point_symbolizer = new CircleSymbolizer({
          fill: color,
          opacity: 0.8
        });
        let line_symbolizer = new LineSymbolizer({
          per_feature: true,
          color,
          opacity: 0.5
        });
        let polygon_symbolizer = new PolygonSymbolizer({
          per_feature: true,
          fill: color,
          opacity: 0.3
        });
        line_symbolizer.before(ctx, prepared_tile.z);
        polygon_symbolizer.before(ctx, prepared_tile.z);
        for (var feature of features) {
          let geom = feature.geom;
          let fbox = feature.bbox;
          if (fbox.maxX * ps + po.x < bbox.minX || fbox.minX * ps + po.x > bbox.maxX || fbox.minY * ps + po.y > bbox.maxY || fbox.maxY * ps + po.y < bbox.minY) {
            continue;
          }
          if (ps != 1) {
            geom = transformGeom(geom, ps, new import_point_geometry5.default(0, 0));
          }
          if (feature.geomType == GeomType.Point) {
            point_symbolizer.draw(ctx, geom, prepared_tile.z, feature);
          } else if (feature.geomType == GeomType.Line) {
            line_symbolizer.draw(ctx, geom, prepared_tile.z, feature);
          } else {
            polygon_symbolizer.draw(ctx, geom, prepared_tile.z, feature);
            line_symbolizer.draw(ctx, geom, prepared_tile.z, feature);
          }
        }
      });
      ctx.restore();
    }
    if (clip) {
      ctx.beginPath();
      ctx.rect(bbox.minX - origin.x, bbox.minY - origin.y, bbox.maxX - bbox.minX, bbox.maxY - bbox.minY);
      ctx.clip();
    }
    ctx.restore();
    return performance.now() - start;
  }
  function painter(ctx, prepared_tiles, label_data, rules, bbox, origin, clip, rotation, debug) {
    let start = performance.now();
    ctx.save();
    ctx.miterLimit = 2;
    if (rotation) {
      ctx.translate(ctx.canvas.clientWidth / 2, ctx.canvas.clientHeight / 2);
      ctx.rotate(rotation);
      ctx.translate(-ctx.canvas.clientWidth / 2, -ctx.canvas.clientHeight / 2);
    }
    for (var prepared_tile of prepared_tiles) {
      let po = prepared_tile.origin;
      let ps = prepared_tile.scale;
      let dim = prepared_tile.dim;
      ctx.save();
      if (clip) {
        ctx.beginPath();
        let minX = Math.max(po.x - origin.x, bbox.minX - origin.x) - 0.5;
        let minY = Math.max(po.y - origin.y, bbox.minY - origin.y) - 0.5;
        let maxX = Math.min(po.x - origin.x + dim, bbox.maxX - origin.x) + 0.5;
        let maxY = Math.min(po.y - origin.y + dim, bbox.maxY - origin.y) + 0.5;
        ctx.rect(minX, minY, maxX - minX, maxY - minY);
        ctx.clip();
      }
      ctx.translate(po.x - origin.x, po.y - origin.y);
      if (clip) {
        ctx.translate(dim / 2, dim / 2);
        ctx.scale(1 + 1 / dim, 1 + 1 / dim);
        ctx.translate(-dim / 2, -dim / 2);
      }
      for (var rule of rules) {
        if (rule.minzoom && prepared_tile.z < rule.minzoom)
          continue;
        if (rule.maxzoom && prepared_tile.z > rule.maxzoom)
          continue;
        var layer = prepared_tile.data.get(rule.dataLayer);
        if (layer === void 0)
          continue;
        if (rule.symbolizer.before)
          rule.symbolizer.before(ctx, prepared_tile.z);
        for (var feature of layer) {
          let geom = feature.geom;
          let fbox = feature.bbox;
          if (fbox.maxX * ps + po.x < bbox.minX || fbox.minX * ps + po.x > bbox.maxX || fbox.minY * ps + po.y > bbox.maxY || fbox.maxY * ps + po.y < bbox.minY) {
            continue;
          }
          if (rule.filter && !rule.filter(prepared_tile.z, feature))
            continue;
          if (ps != 1) {
            geom = transformGeom(geom, ps, new import_point_geometry5.default(0, 0));
          }
          rule.symbolizer.draw(ctx, geom, prepared_tile.z, feature);
        }
      }
      ctx.restore();
    }
    if (clip) {
      ctx.beginPath();
      ctx.rect(bbox.minX - origin.x, bbox.minY - origin.y, bbox.maxX - bbox.minX, bbox.maxY - bbox.minY);
      ctx.clip();
    }
    if (label_data) {
      let matches = label_data.searchBbox(bbox, Infinity);
      for (var label of matches) {
        ctx.save();
        ctx.translate(label.anchor.x - origin.x, label.anchor.y - origin.y);
        if (rotation) {
          ctx.rotate(-rotation);
        }
        label.draw(ctx, { justify: Justify.Left, rotation });
        ctx.restore();
        if (debug) {
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = debug;
          ctx.fillStyle = debug;
          ctx.globalAlpha = 1;
          ctx.fillRect(label.anchor.x - origin.x - 2, label.anchor.y - origin.y - 2, 4, 4);
          for (let bbox2 of label.bboxes) {
            ctx.strokeRect(bbox2.minX - origin.x, bbox2.minY - origin.y, bbox2.maxX - bbox2.minX, bbox2.maxY - bbox2.minY);
          }
        }
      }
    }
    ctx.restore();
    return performance.now() - start;
  }

  // src/labeler.ts
  var import_point_geometry6 = __toModule(require_point_geometry());
  var import_rbush = __toModule(require_rbush_min());
  var covering = (display_zoom, tile_width, bbox) => {
    let res = 256;
    let f2 = tile_width / res;
    let minx = Math.floor(bbox.minX / res);
    let miny = Math.floor(bbox.minY / res);
    let maxx = Math.floor(bbox.maxX / res);
    let maxy = Math.floor(bbox.maxY / res);
    let leveldiff = Math.log2(f2);
    let retval = [];
    for (let x = minx; x <= maxx; x++) {
      let wrapped_x = x % (1 << display_zoom);
      for (let y = miny; y <= maxy; y++) {
        retval.push({
          display: toIndex({ z: display_zoom, x: wrapped_x, y }),
          key: toIndex({
            z: display_zoom - leveldiff,
            x: Math.floor(wrapped_x / f2),
            y: Math.floor(y / f2)
          })
        });
      }
    }
    return retval;
  };
  var Index = class {
    constructor(dim) {
      this.tree = new import_rbush.default();
      this.current = new Map();
      this.dim = dim;
    }
    has(tileKey) {
      return this.current.has(tileKey);
    }
    size() {
      return this.current.size;
    }
    keys() {
      return this.current.keys();
    }
    searchBbox(bbox, order) {
      let labels = new Set();
      for (let match of this.tree.search(bbox)) {
        if (match.indexed_label.order <= order) {
          labels.add(match.indexed_label);
        }
      }
      return labels;
    }
    searchLabel(label, order) {
      let labels = new Set();
      for (let bbox of label.bboxes) {
        for (let match of this.tree.search(bbox)) {
          if (match.indexed_label.order <= order) {
            labels.add(match.indexed_label);
          }
        }
      }
      return labels;
    }
    bboxCollides(bbox, order) {
      for (let match of this.tree.search(bbox)) {
        if (match.indexed_label.order <= order)
          return true;
      }
      return false;
    }
    labelCollides(label, order) {
      for (let bbox of label.bboxes) {
        for (let match of this.tree.search(bbox)) {
          if (match.indexed_label.order <= order)
            return true;
        }
      }
      return false;
    }
    deduplicationCollides(label) {
      if (!label.deduplicationKey || !label.deduplicationDistance)
        return false;
      let dist3 = label.deduplicationDistance;
      let test_bbox = {
        minX: label.anchor.x - dist3,
        minY: label.anchor.y - dist3,
        maxX: label.anchor.x + dist3,
        maxY: label.anchor.y + dist3
      };
      for (let collision of this.tree.search(test_bbox)) {
        if (collision.indexed_label.deduplicationKey === label.deduplicationKey) {
          if (collision.indexed_label.anchor.dist(label.anchor) < dist3) {
            return true;
          }
        }
      }
      return false;
    }
    insert(label, order, tileKey) {
      let indexed_label = {
        anchor: label.anchor,
        bboxes: label.bboxes,
        draw: label.draw,
        order,
        tileKey,
        deduplicationKey: label.deduplicationKey,
        deduplicationDistance: label.deduplicationDistance
      };
      let entry = this.current.get(tileKey);
      if (entry) {
        entry.add(indexed_label);
      } else {
        let newSet = new Set();
        newSet.add(indexed_label);
        this.current.set(tileKey, newSet);
      }
      var wrapsLeft = false;
      var wrapsRight = false;
      for (let bbox of label.bboxes) {
        var b = bbox;
        b.indexed_label = indexed_label;
        this.tree.insert(b);
        if (bbox.minX < 0)
          wrapsLeft = true;
        if (bbox.maxX > this.dim)
          wrapsRight = true;
      }
      if (wrapsLeft || wrapsRight) {
        var shift2 = wrapsLeft ? this.dim : -this.dim;
        var new_bboxes = [];
        for (let bbox of label.bboxes) {
          new_bboxes.push({
            minX: bbox.minX + shift2,
            minY: bbox.minY,
            maxX: bbox.maxX + shift2,
            maxY: bbox.maxY
          });
        }
        let duplicate_label = {
          anchor: new import_point_geometry6.default(label.anchor.x + shift2, label.anchor.y),
          bboxes: new_bboxes,
          draw: label.draw,
          order,
          tileKey
        };
        let entry2 = this.current.get(tileKey);
        if (entry2)
          entry2.add(duplicate_label);
        for (let bbox of new_bboxes) {
          var b = bbox;
          b.indexed_label = duplicate_label;
          this.tree.insert(b);
        }
      }
    }
    prune(keyToRemove) {
      let indexed_labels = this.current.get(keyToRemove);
      if (!indexed_labels)
        return;
      let entries_to_delete = [];
      for (let entry of this.tree.all()) {
        if (indexed_labels.has(entry.indexed_label)) {
          entries_to_delete.push(entry);
        }
      }
      entries_to_delete.forEach((entry) => {
        this.tree.remove(entry);
      });
      this.current.delete(keyToRemove);
    }
    removeLabel(labelToRemove) {
      let entries_to_delete = [];
      for (let entry of this.tree.all()) {
        if (labelToRemove == entry.indexed_label) {
          entries_to_delete.push(entry);
        }
      }
      entries_to_delete.forEach((entry) => {
        this.tree.remove(entry);
      });
      let c2 = this.current.get(labelToRemove.tileKey);
      if (c2)
        c2.delete(labelToRemove);
    }
  };
  var Labeler = class {
    constructor(z2, scratch, labelRules2, maxLabeledTiles, callback) {
      this.index = new Index(256 * 1 << z2);
      this.z = z2;
      this.scratch = scratch;
      this.labelRules = labelRules2;
      this.callback = callback;
      this.maxLabeledTiles = maxLabeledTiles;
    }
    layout(pt) {
      let start = performance.now();
      let key = toIndex(pt.data_tile);
      let tiles_invalidated = new Set();
      for (let [order, rule] of this.labelRules.entries()) {
        if (rule.visible == false)
          continue;
        if (rule.minzoom && this.z < rule.minzoom)
          continue;
        if (rule.maxzoom && this.z > rule.maxzoom)
          continue;
        let layer = pt.data.get(rule.dataLayer);
        if (layer === void 0)
          continue;
        let feats = layer;
        if (rule.sort)
          feats.sort((a2, b) => {
            if (rule.sort) {
              return rule.sort(a2.props, b.props);
            }
            return 0;
          });
        let layout = {
          index: this.index,
          zoom: this.z,
          scratch: this.scratch,
          order,
          overzoom: this.z - pt.data_tile.z
        };
        for (let feature of feats) {
          if (rule.filter && !rule.filter(this.z, feature))
            continue;
          let transformed = transformGeom(feature.geom, pt.scale, pt.origin);
          let labels = rule.symbolizer.place(layout, transformed, feature);
          if (!labels)
            continue;
          for (let label of labels) {
            var label_added = false;
            if (label.deduplicationKey && this.index.deduplicationCollides(label)) {
              continue;
            }
            if (this.index.labelCollides(label, Infinity)) {
              if (!this.index.labelCollides(label, order)) {
                let conflicts = this.index.searchLabel(label, Infinity);
                for (let conflict of conflicts) {
                  this.index.removeLabel(conflict);
                  for (let bbox of conflict.bboxes) {
                    this.findInvalidatedTiles(tiles_invalidated, pt.dim, bbox, key);
                  }
                }
                this.index.insert(label, order, key);
                label_added = true;
              }
            } else {
              this.index.insert(label, order, key);
              label_added = true;
            }
            if (label_added) {
              for (let bbox of label.bboxes) {
                if (bbox.maxX > pt.origin.x + pt.dim || bbox.minX < pt.origin.x || bbox.minY < pt.origin.y || bbox.maxY > pt.origin.y + pt.dim) {
                  this.findInvalidatedTiles(tiles_invalidated, pt.dim, bbox, key);
                }
              }
            }
          }
        }
      }
      if (tiles_invalidated.size > 0 && this.callback) {
        this.callback(tiles_invalidated);
      }
      return performance.now() - start;
    }
    findInvalidatedTiles(tiles_invalidated, dim, bbox, key) {
      let touched = covering(this.z, dim, bbox);
      for (let s2 of touched) {
        if (s2.key != key && this.index.has(s2.key)) {
          tiles_invalidated.add(s2.display);
        }
      }
    }
    pruneCache(added) {
      if (this.index.size() > this.maxLabeledTiles) {
        let max_key = void 0;
        let max_dist = 0;
        for (let key of this.index.keys()) {
          let split = key.split(":");
          let dist3 = Math.sqrt(Math.pow(+split[0] - added.data_tile.x, 2) + Math.pow(+split[1] - added.data_tile.y, 2));
          if (dist3 > max_dist) {
            max_dist = dist3;
            max_key = key;
          }
        }
        if (max_key)
          this.index.prune(max_key);
      }
    }
    add(prepared_tile) {
      let idx = toIndex(prepared_tile.data_tile);
      if (this.index.has(idx)) {
        return 0;
      } else {
        let timing = this.layout(prepared_tile);
        this.pruneCache(prepared_tile);
        return timing;
      }
    }
  };
  var Labelers = class {
    constructor(scratch, labelRules2, maxLabeledTiles, callback) {
      this.labelers = new Map();
      this.scratch = scratch;
      this.labelRules = labelRules2;
      this.maxLabeledTiles = maxLabeledTiles;
      this.callback = callback;
    }
    add(prepared_tile) {
      var labeler = this.labelers.get(prepared_tile.z);
      if (labeler) {
        return labeler.add(prepared_tile);
      } else {
        labeler = new Labeler(prepared_tile.z, this.scratch, this.labelRules, this.maxLabeledTiles, this.callback);
        this.labelers.set(prepared_tile.z, labeler);
        return labeler.add(prepared_tile);
      }
    }
    getIndex(z2) {
      let labeler = this.labelers.get(z2);
      if (labeler)
        return labeler.index;
    }
  };

  // src/default_style/light.ts
  var light = {
    earth: "#FFFBF6",
    glacier: "#ffffff",
    residential: "#F4F4F8",
    hospital: "#FFF6F6",
    cemetery: "#EFF2EE",
    school: "#F7F6FF",
    industrial: "#FFF9EF",
    wood: "#F4F9EF",
    grass: "#EBF9E3",
    park: "#E5F9D5",
    water: "#B7DFF2",
    sand: "#ebebeb",
    buildings: "#F2EDE8",
    highwayCasing: "#FFC3C3",
    majorRoadCasing: "#FFB9B9",
    mediumRoadCasing: "#FFCE8E",
    minorRoadCasing: "#cccccc",
    highway: "#FFCEBB",
    majorRoad: "#FFE4B3",
    mediumRoad: "#FFF2C8",
    minorRoad: "#ffffff",
    boundaries: "#9e9e9e",
    mask: "#dddddd",
    countryLabel: "#aaaaaa",
    cityLabel: "#6C6C6C",
    stateLabel: "#999999",
    neighbourhoodLabel: "#888888",
    landuseLabel: "#898989",
    waterLabel: "#41ABDC",
    naturalLabel: "#4B8F14",
    roadsLabel: "#888888",
    poisLabel: "#606060"
  };

  // src/default_style/dark.ts
  var dark = {
    earth: "#151515",
    glacier: "#1c1c1c",
    residential: "#252B2F",
    hospital: "#3E2C2C",
    cemetery: "#36483D",
    school: "#2C3440",
    industrial: "#33312C",
    wood: "#3A3E38",
    grass: "#4E604D",
    park: "#2C4034",
    water: "#4D5B73",
    sand: "#777777",
    buildings: "#464545",
    highwayCasing: "#000000",
    majorRoadCasing: "#1C1B1B",
    mediumRoadCasing: "#3E3E3E",
    minorRoadCasing: "#000000",
    highway: "#5B5B5B",
    majorRoad: "#595959",
    mediumRoad: "#4F4F4F",
    minorRoad: "#393939",
    boundaries: "#666666",
    mask: "#dddddd",
    countryLabel: "#ffffff",
    cityLabel: "#FFFFFF",
    stateLabel: "#ffffff",
    neighbourhoodLabel: "#FDFDFD",
    landuseLabel: "#DDDDDD",
    waterLabel: "#707E95",
    naturalLabel: "#4c4c4c",
    roadsLabel: "#C4C4C4",
    poisLabel: "#959393"
  };

  // node_modules/color2k/dist/index.module.js
  function t(t2, n2, r2) {
    return Math.min(Math.max(t2, r2), n2);
  }
  var n = class extends Error {
    constructor(t2) {
      super(`Failed to parse color: "${t2}"`);
    }
  };
  function r(r2) {
    if (typeof r2 != "string")
      throw new n(r2);
    if (r2.trim().toLowerCase() === "transparent")
      return [0, 0, 0, 0];
    let e2 = r2.trim();
    e2 = u.test(r2) ? function(t2) {
      const r3 = t2.toLowerCase().trim(), e3 = o[function(t3) {
        let n2 = 5381, r4 = t3.length;
        for (; r4; )
          n2 = 33 * n2 ^ t3.charCodeAt(--r4);
        return (n2 >>> 0) % 2341;
      }(r3)];
      if (!e3)
        throw new n(t2);
      return `#${e3}`;
    }(r2) : r2;
    const f2 = s.exec(e2);
    if (f2) {
      const t2 = Array.from(f2).slice(1);
      return [...t2.slice(0, 3).map((t3) => parseInt(_(t3, 2), 16)), parseInt(_(t2[3] || "f", 2), 16) / 255];
    }
    const p2 = i.exec(e2);
    if (p2) {
      const t2 = Array.from(p2).slice(1);
      return [...t2.slice(0, 3).map((t3) => parseInt(t3, 16)), parseInt(t2[3] || "ff", 16) / 255];
    }
    const z2 = a.exec(e2);
    if (z2) {
      const t2 = Array.from(z2).slice(1);
      return [...t2.slice(0, 3).map((t3) => parseInt(t3, 10)), parseFloat(t2[3] || "1")];
    }
    const h = c.exec(e2);
    if (h) {
      const [e3, o2, _2, s2] = Array.from(h).slice(1).map(parseFloat);
      if (t(0, 100, o2) !== o2)
        throw new n(r2);
      if (t(0, 100, _2) !== _2)
        throw new n(r2);
      return [...l(e3, o2, _2), s2 || 1];
    }
    throw new n(r2);
  }
  var e = (t2) => parseInt(t2.replace(/_/g, ""), 36);
  var o = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((t2, n2) => {
    const r2 = e(n2.substring(0, 3)), o2 = e(n2.substring(3)).toString(16);
    let _2 = "";
    for (let t3 = 0; t3 < 6 - o2.length; t3++)
      _2 += "0";
    return t2[r2] = `${_2}${o2}`, t2;
  }, {});
  var _ = (t2, n2) => Array.from(Array(n2)).map(() => t2).join("");
  var s = new RegExp(`^#${_("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
  var i = new RegExp(`^#${_("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
  var a = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${_(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
  var c = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
  var u = /^[a-z]+$/i;
  var f = (t2) => Math.round(255 * t2);
  var l = (t2, n2, r2) => {
    let e2 = r2 / 100;
    if (n2 === 0)
      return [e2, e2, e2].map(f);
    const o2 = (t2 % 360 + 360) % 360 / 60, _2 = (1 - Math.abs(2 * e2 - 1)) * (n2 / 100), s2 = _2 * (1 - Math.abs(o2 % 2 - 1));
    let i2 = 0, a2 = 0, c2 = 0;
    o2 >= 0 && o2 < 1 ? (i2 = _2, a2 = s2) : o2 >= 1 && o2 < 2 ? (i2 = s2, a2 = _2) : o2 >= 2 && o2 < 3 ? (a2 = _2, c2 = s2) : o2 >= 3 && o2 < 4 ? (a2 = s2, c2 = _2) : o2 >= 4 && o2 < 5 ? (i2 = s2, c2 = _2) : o2 >= 5 && o2 < 6 && (i2 = _2, c2 = s2);
    const u2 = e2 - _2 / 2;
    return [i2 + u2, a2 + u2, c2 + u2].map(f);
  };
  function p(t2) {
    const [n2, e2, o2, _2] = r(t2).map((t3, n3) => n3 === 3 ? t3 : t3 / 255), s2 = Math.max(n2, e2, o2), i2 = Math.min(n2, e2, o2), a2 = (s2 + i2) / 2;
    if (s2 === i2)
      return [0, 0, a2, _2];
    const c2 = s2 - i2;
    return [60 * (n2 === s2 ? (e2 - o2) / c2 + (e2 < o2 ? 6 : 0) : e2 === s2 ? (o2 - n2) / c2 + 2 : (n2 - e2) / c2 + 4), a2 > 0.5 ? c2 / (2 - s2 - i2) : c2 / (s2 + i2), a2, _2];
  }
  function z(n2, r2, e2, o2) {
    return `hsla(${(n2 % 360).toFixed()}, ${t(0, 100, 100 * r2).toFixed()}%, ${t(0, 100, 100 * e2).toFixed()}%, ${parseFloat(t(0, 1, o2).toFixed(3))})`;
  }

  // src/default_style/style.ts
  var doShading = (params, shade) => {
    let shadeHsl = p(shade);
    let outParams = __spreadValues({}, params);
    for (const [key, value] of Object.entries(params)) {
      let o2 = p(value);
      outParams[key] = z(shadeHsl[0], shadeHsl[1], o2[2], o2[3]);
    }
    return outParams;
  };
  var paintRules = (params, shade) => {
    if (shade)
      params = doShading(params, shade);
    return [
      {
        dataLayer: "earth",
        symbolizer: new PolygonSymbolizer({
          fill: params.earth
        })
      },
      {
        dataLayer: "natural",
        symbolizer: new PolygonSymbolizer({
          fill: params.glacier
        }),
        filter: (z2, f2) => {
          return f2.props.natural == "glacier";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: new PolygonSymbolizer({
          fill: params.residential
        }),
        filter: (z2, f2) => {
          return f2.props.landuse == "residential" || f2.props.place == "neighbourhood";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: new PolygonSymbolizer({
          fill: params.hospital
        }),
        filter: (z2, f2) => {
          return f2.props.amenity == "hospital";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: new PolygonSymbolizer({
          fill: params.cemetery
        }),
        filter: (z2, f2) => {
          return f2.props.landuse == "cemetery";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: new PolygonSymbolizer({
          fill: params.school
        }),
        filter: (z2, f2) => {
          return f2.props.amenity == "school" || f2.props.amenity == "kindergarten" || f2.props.amenity == "university" || f2.props.amenity == "college";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: new PolygonSymbolizer({
          fill: params.industrial
        }),
        filter: (z2, f2) => {
          return f2.props.landuse == "industrial";
        }
      },
      {
        dataLayer: "natural",
        symbolizer: new PolygonSymbolizer({
          fill: params.wood
        }),
        filter: (z2, f2) => {
          return f2.props.natural == "wood";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: new PolygonSymbolizer({
          fill: params.grass
        }),
        filter: (z2, f2) => {
          return f2.props.landuse == "grass";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: new PolygonSymbolizer({
          fill: params.park
        }),
        filter: (z2, f2) => {
          return f2.props.leisure == "park";
        }
      },
      {
        dataLayer: "water",
        symbolizer: new PolygonSymbolizer({
          fill: params.water
        })
      },
      {
        dataLayer: "natural",
        symbolizer: new PolygonSymbolizer({
          fill: params.sand
        }),
        filter: (z2, f2) => {
          return f2.props.natural == "sand";
        }
      },
      {
        dataLayer: "buildings",
        symbolizer: new PolygonSymbolizer({
          fill: params.buildings
        })
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.highwayCasing,
          width: exp(1.4, [
            [5, 1.5],
            [11, 4],
            [16, 9],
            [20, 40]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "highway";
        }
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.majorRoadCasing,
          width: exp(1.4, [
            [9, 3],
            [12, 4],
            [17, 8],
            [20, 22]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "major_road";
        }
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.mediumRoadCasing,
          width: exp(1.4, [
            [13, 3],
            [17, 6],
            [20, 18]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "medium_road";
        }
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.minorRoadCasing,
          width: exp(1.4, [
            [14, 2],
            [17, 5],
            [20, 15]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "minor_road";
        }
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.minorRoad,
          width: exp(1.4, [
            [14, 1],
            [17, 3],
            [20, 13]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "minor_road";
        }
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.mediumRoad,
          width: exp(1.4, [
            [13, 2],
            [17, 4],
            [20, 15]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "medium_road";
        }
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.majorRoad,
          width: exp(1.4, [
            [9, 2],
            [12, 3],
            [17, 6],
            [20, 20]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "major_road";
        }
      },
      {
        dataLayer: "roads",
        symbolizer: new LineSymbolizer({
          color: params.highway,
          width: exp(1.4, [
            [5, 0.5],
            [11, 2.5],
            [16, 7],
            [20, 30]
          ])
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "highway";
        }
      },
      {
        dataLayer: "boundaries",
        symbolizer: new LineSymbolizer({
          color: params.boundaries,
          width: 2,
          opacity: 0.4
        })
      },
      {
        dataLayer: "mask",
        symbolizer: new PolygonSymbolizer({
          fill: params.mask
        })
      }
    ];
  };
  var labelRules = (params, shade, language1, language2) => {
    if (shade)
      params = doShading(params, shade);
    var nametags = ["name"];
    if (language1)
      nametags = language1;
    let languageStack = (symbolizer, fill) => {
      if (!language2)
        return symbolizer;
      if (symbolizer instanceof OffsetTextSymbolizer) {
        return new FlexSymbolizer([
          symbolizer,
          new OffsetTextSymbolizer({
            fill,
            label_props: language2
          })
        ]);
      } else {
        return new FlexSymbolizer([
          symbolizer,
          new CenteredTextSymbolizer({
            fill,
            label_props: language2
          })
        ]);
      }
    };
    return [
      {
        dataLayer: "places",
        symbolizer: languageStack(new CenteredTextSymbolizer({
          label_props: nametags,
          fill: params.countryLabel,
          lineHeight: 1.5,
          font: (z2, f2) => {
            if (z2 < 6)
              return "200 14px sans-serif";
            return "200 20px sans-serif";
          },
          textTransform: "uppercase"
        }), params.countryLabel),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "country";
        }
      },
      {
        dataLayer: "places",
        symbolizer: languageStack(new CenteredTextSymbolizer({
          label_props: nametags,
          fill: params.stateLabel,
          font: "300 16px sans-serif"
        }), params.stateLabel),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "state";
        }
      },
      {
        id: "cities_high",
        dataLayer: "places",
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "city";
        },
        minzoom: 7,
        symbolizer: languageStack(new CenteredTextSymbolizer({
          label_props: nametags,
          fill: params.cityLabel,
          font: (z2, f2) => {
            if ((f2 == null ? void 0 : f2.props["pmap:rank"]) === 1) {
              if (z2 > 8)
                return "600 20px sans-serif";
              return "600 12px sans-serif";
            } else {
              if (z2 > 8)
                return "600 16px sans-serif";
              return "600 10px sans-serif";
            }
          }
        }), params.cityLabel),
        sort: (a2, b) => {
          return a2["pmap:rank"] - b["pmap:rank"];
        }
      },
      {
        id: "cities_low",
        dataLayer: "places",
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "city";
        },
        maxzoom: 6,
        symbolizer: new GroupSymbolizer([
          new CircleSymbolizer({
            radius: 2,
            fill: params.cityLabel
          }),
          languageStack(new OffsetTextSymbolizer({
            label_props: nametags,
            fill: params.cityLabel,
            offsetX: 2,
            offsetY: 2,
            font: (z2, f2) => {
              if ((f2 == null ? void 0 : f2.props["pmap:rank"]) === 1) {
                if (z2 > 8)
                  return "600 20px sans-serif";
                return "600 12px sans-serif";
              } else {
                if (z2 > 8)
                  return "600 16px sans-serif";
                return "600 10px sans-serif";
              }
            }
          }), params.cityLabel)
        ]),
        sort: (a2, b) => {
          return a2["pmap:rank"] - b["pmap:rank"];
        }
      },
      {
        id: "neighbourhood",
        dataLayer: "places",
        symbolizer: languageStack(new CenteredTextSymbolizer({
          label_props: nametags,
          fill: params.neighbourhoodLabel,
          font: "500 10px sans-serif",
          textTransform: "uppercase"
        }), params.neighbourhoodLabel),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "neighbourhood";
        }
      },
      {
        dataLayer: "landuse",
        symbolizer: languageStack(new PolygonLabelSymbolizer({
          label_props: nametags,
          fill: params.landuseLabel,
          font: "300 12px sans-serif"
        }), params.landuseLabel)
      },
      {
        dataLayer: "water",
        symbolizer: languageStack(new PolygonLabelSymbolizer({
          label_props: nametags,
          fill: params.waterLabel,
          font: "italic 600 12px sans-serif"
        }), params.waterLabel)
      },
      {
        dataLayer: "natural",
        symbolizer: languageStack(new PolygonLabelSymbolizer({
          label_props: nametags,
          fill: params.naturalLabel,
          font: "italic 300 12px sans-serif"
        }), params.naturalLabel)
      },
      {
        dataLayer: "roads",
        symbolizer: languageStack(new LineLabelSymbolizer({
          label_props: nametags,
          fill: params.roadsLabel,
          font: "500 12px sans-serif"
        }), params.roadsLabel),
        minzoom: 12
      },
      {
        dataLayer: "roads",
        symbolizer: new ShieldSymbolizer({
          label_props: ["ref"],
          font: "600 9px sans-serif",
          background: params.highway,
          padding: 2,
          fill: params.neighbourhoodLabel
        }),
        filter: (z2, f2) => {
          return f2.props["pmap:kind"] == "highway";
        }
      },
      {
        dataLayer: "pois",
        symbolizer: new GroupSymbolizer([
          new CircleSymbolizer({
            radius: 2,
            fill: params.poisLabel
          }),
          languageStack(new OffsetTextSymbolizer({
            label_props: nametags,
            fill: params.poisLabel,
            offsetX: 2,
            offsetY: 2,
            font: "300 10px sans-serif"
          }), params.poisLabel)
        ])
      }
    ];
  };

  // node_modules/gl-matrix/esm/common.js
  var EPSILON = 1e-6;
  var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
  var RANDOM = Math.random;
  var degree = Math.PI / 180;
  if (!Math.hypot)
    Math.hypot = function() {
      var y = 0, i2 = arguments.length;
      while (i2--) {
        y += arguments[i2] * arguments[i2];
      }
      return Math.sqrt(y);
    };

  // node_modules/gl-matrix/esm/vec2.js
  var vec2_exports = {};
  __export(vec2_exports, {
    add: () => add,
    angle: () => angle,
    ceil: () => ceil,
    clone: () => clone,
    copy: () => copy,
    create: () => create,
    cross: () => cross,
    dist: () => dist,
    distance: () => distance,
    div: () => div,
    divide: () => divide,
    dot: () => dot,
    equals: () => equals,
    exactEquals: () => exactEquals,
    floor: () => floor,
    forEach: () => forEach,
    fromValues: () => fromValues,
    inverse: () => inverse,
    len: () => len,
    length: () => length,
    lerp: () => lerp,
    max: () => max,
    min: () => min,
    mul: () => mul,
    multiply: () => multiply,
    negate: () => negate,
    normalize: () => normalize,
    random: () => random,
    rotate: () => rotate,
    round: () => round,
    scale: () => scale,
    scaleAndAdd: () => scaleAndAdd,
    set: () => set,
    sqrDist: () => sqrDist,
    sqrLen: () => sqrLen,
    squaredDistance: () => squaredDistance,
    squaredLength: () => squaredLength,
    str: () => str,
    sub: () => sub,
    subtract: () => subtract,
    transformMat2: () => transformMat2,
    transformMat2d: () => transformMat2d,
    transformMat3: () => transformMat3,
    transformMat4: () => transformMat4,
    zero: () => zero
  });
  function create() {
    var out = new ARRAY_TYPE(2);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
    }
    return out;
  }
  function clone(a2) {
    var out = new ARRAY_TYPE(2);
    out[0] = a2[0];
    out[1] = a2[1];
    return out;
  }
  function fromValues(x, y) {
    var out = new ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
  }
  function copy(out, a2) {
    out[0] = a2[0];
    out[1] = a2[1];
    return out;
  }
  function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
  }
  function add(out, a2, b) {
    out[0] = a2[0] + b[0];
    out[1] = a2[1] + b[1];
    return out;
  }
  function subtract(out, a2, b) {
    out[0] = a2[0] - b[0];
    out[1] = a2[1] - b[1];
    return out;
  }
  function multiply(out, a2, b) {
    out[0] = a2[0] * b[0];
    out[1] = a2[1] * b[1];
    return out;
  }
  function divide(out, a2, b) {
    out[0] = a2[0] / b[0];
    out[1] = a2[1] / b[1];
    return out;
  }
  function ceil(out, a2) {
    out[0] = Math.ceil(a2[0]);
    out[1] = Math.ceil(a2[1]);
    return out;
  }
  function floor(out, a2) {
    out[0] = Math.floor(a2[0]);
    out[1] = Math.floor(a2[1]);
    return out;
  }
  function min(out, a2, b) {
    out[0] = Math.min(a2[0], b[0]);
    out[1] = Math.min(a2[1], b[1]);
    return out;
  }
  function max(out, a2, b) {
    out[0] = Math.max(a2[0], b[0]);
    out[1] = Math.max(a2[1], b[1]);
    return out;
  }
  function round(out, a2) {
    out[0] = Math.round(a2[0]);
    out[1] = Math.round(a2[1]);
    return out;
  }
  function scale(out, a2, b) {
    out[0] = a2[0] * b;
    out[1] = a2[1] * b;
    return out;
  }
  function scaleAndAdd(out, a2, b, scale2) {
    out[0] = a2[0] + b[0] * scale2;
    out[1] = a2[1] + b[1] * scale2;
    return out;
  }
  function distance(a2, b) {
    var x = b[0] - a2[0], y = b[1] - a2[1];
    return Math.hypot(x, y);
  }
  function squaredDistance(a2, b) {
    var x = b[0] - a2[0], y = b[1] - a2[1];
    return x * x + y * y;
  }
  function length(a2) {
    var x = a2[0], y = a2[1];
    return Math.hypot(x, y);
  }
  function squaredLength(a2) {
    var x = a2[0], y = a2[1];
    return x * x + y * y;
  }
  function negate(out, a2) {
    out[0] = -a2[0];
    out[1] = -a2[1];
    return out;
  }
  function inverse(out, a2) {
    out[0] = 1 / a2[0];
    out[1] = 1 / a2[1];
    return out;
  }
  function normalize(out, a2) {
    var x = a2[0], y = a2[1];
    var len2 = x * x + y * y;
    if (len2 > 0) {
      len2 = 1 / Math.sqrt(len2);
    }
    out[0] = a2[0] * len2;
    out[1] = a2[1] * len2;
    return out;
  }
  function dot(a2, b) {
    return a2[0] * b[0] + a2[1] * b[1];
  }
  function cross(out, a2, b) {
    var z2 = a2[0] * b[1] - a2[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z2;
    return out;
  }
  function lerp(out, a2, b, t2) {
    var ax = a2[0], ay = a2[1];
    out[0] = ax + t2 * (b[0] - ax);
    out[1] = ay + t2 * (b[1] - ay);
    return out;
  }
  function random(out, scale2) {
    scale2 = scale2 || 1;
    var r2 = RANDOM() * 2 * Math.PI;
    out[0] = Math.cos(r2) * scale2;
    out[1] = Math.sin(r2) * scale2;
    return out;
  }
  function transformMat2(out, a2, m) {
    var x = a2[0], y = a2[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
  }
  function transformMat2d(out, a2, m) {
    var x = a2[0], y = a2[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }
  function transformMat3(out, a2, m) {
    var x = a2[0], y = a2[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
  }
  function transformMat4(out, a2, m) {
    var x = a2[0];
    var y = a2[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
  }
  function rotate(out, a2, b, rad) {
    var p0 = a2[0] - b[0], p1 = a2[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];
    return out;
  }
  function angle(a2, b) {
    var x1 = a2[0], y1 = a2[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }
  function zero(out) {
    out[0] = 0;
    out[1] = 0;
    return out;
  }
  function str(a2) {
    return "vec2(" + a2[0] + ", " + a2[1] + ")";
  }
  function exactEquals(a2, b) {
    return a2[0] === b[0] && a2[1] === b[1];
  }
  function equals(a2, b) {
    var a0 = a2[0], a1 = a2[1];
    var b0 = b[0], b1 = b[1];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
  }
  var len = length;
  var sub = subtract;
  var mul = multiply;
  var div = divide;
  var dist = distance;
  var sqrDist = squaredDistance;
  var sqrLen = squaredLength;
  var forEach = function() {
    var vec = create();
    return function(a2, stride, offset, count, fn, arg) {
      var i2, l2;
      if (!stride) {
        stride = 2;
      }
      if (!offset) {
        offset = 0;
      }
      if (count) {
        l2 = Math.min(count * stride + offset, a2.length);
      } else {
        l2 = a2.length;
      }
      for (i2 = offset; i2 < l2; i2 += stride) {
        vec[0] = a2[i2];
        vec[1] = a2[i2 + 1];
        fn(vec, vec, arg);
        a2[i2] = vec[0];
        a2[i2 + 1] = vec[1];
      }
      return a2;
    };
  }();

  // src/frontends/static.ts
  var R2 = 6378137;
  var MAX_LATITUDE2 = 85.0511287798;
  var MAXCOORD2 = R2 * Math.PI;
  var ROTATE_ZERO = 0;
  var project2 = (latlng) => {
    let d = Math.PI / 180;
    let constrained_lat = Math.max(Math.min(MAX_LATITUDE2, latlng[0]), -MAX_LATITUDE2);
    let sin = Math.sin(constrained_lat * d);
    return new import_point_geometry7.default(R2 * latlng[1] * d, R2 * Math.log((1 + sin) / (1 - sin)) / 2);
  };
  var unproject = (point) => {
    var d = 180 / Math.PI;
    return {
      lat: (2 * Math.atan(Math.exp(point.y / R2)) - Math.PI / 2) * d,
      lng: point.x * d / R2
    };
  };
  var instancedProject = (origin, display_zoom) => {
    return (latlng) => {
      let projected = project2(latlng);
      let normalized = new import_point_geometry7.default((projected.x + MAXCOORD2) / (MAXCOORD2 * 2), 1 - (projected.y + MAXCOORD2) / (MAXCOORD2 * 2));
      return normalized.mult((1 << display_zoom) * 256).sub(origin);
    };
  };
  var instancedUnproject = (origin, display_zoom) => {
    return (point) => {
      console.log(point);
      let normalized = new import_point_geometry7.default(point.x, point.y).add(origin).div((1 << display_zoom) * 256);
      let projected = new import_point_geometry7.default(normalized.x * (MAXCOORD2 * 2) - MAXCOORD2, (1 - normalized.y) * (MAXCOORD2 * 2) - MAXCOORD2);
      return unproject(projected);
    };
  };
  var getZoom = (degrees_lng, css_pixels) => {
    let d = css_pixels * (360 / degrees_lng);
    return Math.log2(d / 256);
  };
  var Static = class {
    constructor(options) {
      let theme = options.dark ? dark : light;
      this.paint_rules = options.paint_rules || paintRules(theme, options.shade);
      this.label_rules = options.label_rules || labelRules(theme, options.shade, options.language1, options.language2);
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
      let levelDiff = options.levelDiff === void 0 ? 2 : options.levelDiff;
      let cache = new TileCache(source, 256 * 1 << levelDiff);
      this.view = new View(cache, maxDataZoom, levelDiff);
      this.debug = options.debug || false;
    }
    drawContext(ctx, width, height, latlng, display_zoom, rotation) {
      return __async(this, null, function* () {
        let center = project2(latlng);
        let normalized_center = new import_point_geometry7.default((center.x + MAXCOORD2) / (MAXCOORD2 * 2), 1 - (center.y + MAXCOORD2) / (MAXCOORD2 * 2));
        let origin = normalized_center.clone().mult(Math.pow(2, display_zoom) * 256).sub(new import_point_geometry7.default(width / 2, height / 2));
        let bbox = {
          minX: origin.x,
          minY: origin.y,
          maxX: origin.x + width,
          maxY: origin.y + height
        };
        bbox = this.rotatedBbox(origin, width, height, rotation, bbox);
        let prepared_tiles = yield this.view.getBbox(display_zoom, bbox);
        let start = performance.now();
        let labeler = new Labeler(display_zoom, ctx, this.label_rules, 16);
        for (var prepared_tile of prepared_tiles) {
          yield labeler.add(prepared_tile);
        }
        if (this.backgroundColor) {
          ctx.save();
          ctx.fillStyle = this.backgroundColor;
          ctx.fillRect(0, 0, width, height);
          ctx.restore();
        }
        let p2 = painter(ctx, prepared_tiles, labeler.index, this.paint_rules, bbox, origin, true, rotation, this.debug);
        if (this.debug) {
          ctx.save();
          ctx.translate(-origin.x, -origin.y);
          for (var prepared_tile of prepared_tiles) {
            ctx.strokeStyle = this.debug;
            ctx.strokeRect(prepared_tile.origin.x, prepared_tile.origin.y, prepared_tile.dim, prepared_tile.dim);
          }
          ctx.restore();
        }
        return {
          elapsed: performance.now() - start,
          project: instancedProject(origin, display_zoom),
          unproject: instancedUnproject(origin, display_zoom)
        };
      });
    }
    rotatedBbox(origin, width, height, rotation, bbox) {
      let centre = [origin.x + width / 2, origin.y + height / 2];
      let p1_vec = vec2_exports.fromValues(origin.x, origin.y);
      let p2_vec = vec2_exports.fromValues(origin.x + width, origin.y);
      let p3_vec = vec2_exports.fromValues(origin.x + width, origin.y + height);
      let p4_vec = vec2_exports.fromValues(origin.x, origin.y + height);
      let origin_vec = vec2_exports.fromValues(centre[0], centre[1]);
      let s_p1 = vec2_exports.create();
      let s_p2 = vec2_exports.create();
      let s_p3 = vec2_exports.create();
      let s_p4 = vec2_exports.create();
      vec2_exports.rotate(s_p1, p1_vec, origin_vec, rotation);
      vec2_exports.rotate(s_p2, p2_vec, origin_vec, rotation);
      vec2_exports.rotate(s_p3, p3_vec, origin_vec, rotation);
      vec2_exports.rotate(s_p4, p4_vec, origin_vec, rotation);
      let minX = Math.min(s_p1[0], s_p2[0], s_p3[0], s_p4[0], bbox.minX);
      let maxX = Math.max(s_p1[0], s_p2[0], s_p3[0], s_p4[0], bbox.maxX);
      let minY = Math.min(s_p1[1], s_p2[1], s_p3[1], s_p4[1], bbox.minY);
      let maxY = Math.max(s_p1[1], s_p2[1], s_p3[1], s_p4[1], bbox.maxY);
      let rotatedBbox = {
        minX,
        minY,
        maxX,
        maxY
      };
      return rotatedBbox;
    }
    drawCanvas(_0, _1, _2, _3) {
      return __async(this, arguments, function* (canvas, latlng, display_zoom, rotation, options = {}) {
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
      });
    }
    drawContextBounds(ctx, top_left, bottom_right, width, height) {
      return __async(this, null, function* () {
        let delta_degrees = bottom_right[0] - top_left[0];
        let center = [
          (top_left[1] + bottom_right[1]) / 2,
          (top_left[0] + bottom_right[0]) / 2
        ];
        return this.drawContext(ctx, width, height, center, getZoom(delta_degrees, width), ROTATE_ZERO);
      });
    }
    drawCanvasBounds(_0, _1, _2, _3) {
      return __async(this, arguments, function* (canvas, top_left, bottom_right, width, options = {}) {
        let delta_degrees = bottom_right[0] - top_left[0];
        let center = [
          (top_left[1] + bottom_right[1]) / 2,
          (top_left[0] + bottom_right[0]) / 2
        ];
        return this.drawCanvas(canvas, center, getZoom(delta_degrees, width), options);
      });
    }
  };

  // src/frontends/leaflet.ts
  var import_point_geometry8 = __toModule(require_point_geometry());
  var timer = (duration) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  };
  var reflect = (promise) => {
    return promise.then((v) => {
      return { status: "fulfilled", value: v };
    }, (error) => {
      return { status: "rejected", reason: error };
    });
  };
  var leafletLayer = (options) => {
    class LeafletLayer extends L.GridLayer {
      constructor(options2) {
        if (options2.noWrap && !options2.bounds)
          options2.bounds = [
            [-90, -180],
            [90, 180]
          ];
        if (options2.attribution == null)
          options2.attribution = '<a href="https://protomaps.com">Protomaps</a> \xA9 <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>';
        super(options2);
        let theme = options2.dark ? dark : light;
        this.paint_rules = options2.paint_rules || paintRules(theme, options2.shade);
        this.label_rules = options2.label_rules || labelRules(theme, options2.shade, options2.language1, options2.language2);
        this.backgroundColor = options2.backgroundColor;
        this.lastRequestedZ = void 0;
        this.xray = options2.xray;
        let source;
        if (options2.url.url) {
          source = new PmtilesSource(options2.url, true);
        } else if (options2.url.endsWith(".pmtiles")) {
          source = new PmtilesSource(options2.url, true);
        } else {
          source = new ZxySource(options2.url, true);
        }
        let maxDataZoom = 14;
        if (options2.maxDataZoom) {
          maxDataZoom = options2.maxDataZoom;
        }
        this.levelDiff = options2.levelDiff === void 0 ? 2 : options2.levelDiff;
        this.tasks = options2.tasks || [];
        let cache = new TileCache(source, 256 * 1 << this.levelDiff);
        this.view = new View(cache, maxDataZoom, this.levelDiff);
        this.debug = options2.debug;
        let scratch = document.createElement("canvas").getContext("2d");
        this.scratch = scratch;
        this.onTilesInvalidated = (tiles) => {
          tiles.forEach((t2) => {
            this.rerenderTile(t2);
          });
        };
        this.labelers = new Labelers(this.scratch, this.label_rules, 16, this.onTilesInvalidated);
        this.tile_size = 256 * window.devicePixelRatio;
        this.tileDelay = options2.tileDelay || 3;
        this.lang = options2.lang;
        this.inspector = this.inspect(this);
      }
      setDefaultStyle(darkOption, shade, language1, language2) {
        let theme = darkOption ? dark : light;
        this.paint_rules = paintRules(theme, shade);
        this.label_rules = labelRules(theme, shade, language1, language2);
      }
      renderTile(coords, element, key, done = () => {
      }) {
        return __async(this, null, function* () {
          this.lastRequestedZ = coords.z;
          var prepared_tile;
          try {
            prepared_tile = yield this.view.getDisplayTile(coords);
          } catch (e2) {
            if (e2.name == "AbortError")
              return;
            else
              throw e2;
          }
          if (element.key != key)
            return;
          if (this.lastRequestedZ !== coords.z)
            return;
          yield Promise.all(this.tasks.map(reflect));
          if (element.key != key)
            return;
          if (this.lastRequestedZ !== coords.z)
            return;
          let layout_time = yield this.labelers.add(prepared_tile);
          if (element.key != key)
            return;
          if (this.lastRequestedZ !== coords.z)
            return;
          let label_data = this.labelers.getIndex(prepared_tile.z);
          if (!this._map)
            return;
          let center = this._map.getCenter().wrap();
          let pixelBounds = this._getTiledPixelBounds(center), tileRange = this._pxBoundsToTileRange(pixelBounds), tileCenter = tileRange.getCenter();
          let priority = coords.distanceTo(tileCenter) * this.tileDelay;
          yield timer(priority);
          if (element.key != key)
            return;
          if (this.lastRequestedZ !== coords.z)
            return;
          let BUF = 16;
          let bbox = {
            minX: 256 * coords.x - BUF,
            minY: 256 * coords.y - BUF,
            maxX: 256 * (coords.x + 1) + BUF,
            maxY: 256 * (coords.y + 1) + BUF
          };
          let origin = new import_point_geometry8.default(256 * coords.x, 256 * coords.y);
          element.width = this.tile_size;
          element.height = this.tile_size;
          let ctx = element.getContext("2d");
          ctx.setTransform(this.tile_size / 256, 0, 0, this.tile_size / 256, 0, 0);
          ctx.clearRect(0, 0, 256, 256);
          if (this.backgroundColor) {
            ctx.save();
            ctx.fillStyle = this.backgroundColor;
            ctx.fillRect(0, 0, 256, 256);
            ctx.restore();
          }
          var painting_time = 0;
          if (this.xray) {
            painting_time = xray(ctx, [prepared_tile], bbox, origin, false, this.debug);
          } else {
            painting_time = painter(ctx, [prepared_tile], label_data, this.paint_rules, bbox, origin, false, 0, this.debug);
          }
          if (this.debug) {
            let data_tile = prepared_tile.data_tile;
            ctx.save();
            ctx.fillStyle = this.debug;
            ctx.font = "600 12px sans-serif";
            ctx.fillText(coords.z + " " + coords.x + " " + coords.y, 4, 14);
            ctx.font = "200 12px sans-serif";
            ctx.fillText(data_tile.z + " " + data_tile.x + " " + data_tile.y, 4, 28);
            ctx.font = "600 10px sans-serif";
            if (painting_time > 8) {
              ctx.fillText(painting_time.toFixed() + " ms paint", 4, 42);
            }
            if (layout_time > 8) {
              ctx.fillText(layout_time.toFixed() + " ms layout", 4, 56);
            }
            ctx.strokeStyle = this.debug;
            ctx.lineWidth = coords.x / (1 << this.levelDiff) === data_tile.x ? 2.5 : 0.5;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 256);
            ctx.stroke();
            ctx.lineWidth = coords.y / (1 << this.levelDiff) === data_tile.y ? 2.5 : 0.5;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(256, 0);
            ctx.stroke();
            ctx.restore();
          }
          done();
        });
      }
      rerenderTile(key) {
        for (let unwrapped_k in this._tiles) {
          let wrapped_coord = this._wrapCoords(this._keyToTileCoords(unwrapped_k));
          if (key === this._tileCoordsToKey(wrapped_coord)) {
            this.renderTile(wrapped_coord, this._tiles[unwrapped_k].el, key);
          }
        }
      }
      clearLayout() {
        this.labelers = new Labelers(this.scratch, this.label_rules, 16, this.onTilesInvalidated);
      }
      rerenderTiles() {
        for (let unwrapped_k in this._tiles) {
          let wrapped_coord = this._wrapCoords(this._keyToTileCoords(unwrapped_k));
          let key = this._tileCoordsToKey(wrapped_coord);
          this.renderTile(wrapped_coord, this._tiles[unwrapped_k].el, key);
        }
      }
      createTile(coords, showTile) {
        let element = L.DomUtil.create("canvas", "leaflet-tile");
        element.lang = this.lang;
        let key = this._tileCoordsToKey(coords);
        element.key = key;
        this.renderTile(coords, element, key, () => {
          showTile(null, element);
        });
        return element;
      }
      _removeTile(key) {
        let tile = this._tiles[key];
        if (!tile) {
          return;
        }
        tile.el.removed = true;
        tile.el.key = void 0;
        L.DomUtil.removeClass(tile.el, "leaflet-tile-loaded");
        L.DomUtil.remove(tile.el);
        delete this._tiles[key];
        this.fire("tileunload", {
          tile: tile.el,
          coords: this._keyToTileCoords(key)
        });
      }
      queryFeatures(lng, lat) {
        return this.view.queryFeatures(lng, lat, this._map.getZoom());
      }
      inspect(layer) {
        return (ev) => {
          let typeNames = ["Point", "Line", "Polygon"];
          let wrapped = layer._map.wrapLatLng(ev.latlng);
          let results = layer.queryFeatures(wrapped.lng, wrapped.lat);
          var content = "";
          for (var i2 = 0; i2 < results.length; i2++) {
            let result = results[i2];
            content = content + `<div><b>${result.layerName}</b> ${typeNames[result.feature.geomType - 1]} ${result.feature.id}</div>`;
            for (const prop in result.feature.props) {
              content = content + `<div>${prop}=${result.feature.props[prop]}</div>`;
            }
            if (i2 < results.length - 1)
              content = content + "<hr/>";
          }
          if (results.length == 0) {
            content = "No features.";
          }
          L.popup().setLatLng(ev.latlng).setContent(content).openOn(layer._map);
        };
      }
      addInspector(map) {
        return map.on("click", this.inspector);
      }
      removeInspector(map) {
        return map.off("click", this.inspector);
      }
    }
    return new LeafletLayer(options);
  };

  // node_modules/protosprites/index.js
  var potpack = (boxes) => {
    let area = 0;
    let maxWidth = 0;
    for (const box of boxes) {
      area += box.w * box.h;
      maxWidth = Math.max(maxWidth, box.w);
    }
    boxes.sort((a2, b) => b.h - a2.h);
    const startWidth = Math.max(Math.ceil(Math.sqrt(area / 0.95)), maxWidth);
    const spaces = [{ x: 0, y: 0, w: startWidth, h: Infinity }];
    let width = 0;
    let height = 0;
    for (const box of boxes) {
      for (let i2 = spaces.length - 1; i2 >= 0; i2--) {
        const space = spaces[i2];
        if (box.w > space.w || box.h > space.h)
          continue;
        box.x = space.x;
        box.y = space.y;
        height = Math.max(height, box.y + box.h);
        width = Math.max(width, box.x + box.w);
        if (box.w === space.w && box.h === space.h) {
          const last = spaces.pop();
          if (i2 < spaces.length)
            spaces[i2] = last;
        } else if (box.h === space.h) {
          space.x += box.w;
          space.w -= box.w;
        } else if (box.w === space.w) {
          space.y += box.h;
          space.h -= box.h;
        } else {
          spaces.push({
            x: space.x + box.w,
            y: space.y,
            w: space.w - box.w,
            h: box.h
          });
          space.y += box.h;
          space.h -= box.h;
        }
        break;
      }
    }
    return {
      w: width,
      h: height,
      fill: area / (width * height) || 0
    };
  };
  var mkimg = (src) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject("Invalid SVG");
      img.src = src;
    });
  };
  var MISSING = `
<svg width="20px" height="20px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="#cccccc"/>
    <g transform="translate(5,5)">
        <path fill="none" stroke="#666666" stroke-width="7" d="m11,12a8.5,8 0 1,1 17,0q0,4-4,6t-4.5,4.5-.4,4v.2m0,3v7"/>
    </g>
</svg>
`;
  var Protosprites = class {
    constructor(src) {
      this.src = src;
      this.canvas = null;
    }
    load() {
      return __async(this, null, function* () {
        let src = this.src;
        let scale2 = window.devicePixelRatio;
        if (src.endsWith(".html")) {
          let c2 = yield fetch(src);
          src = yield c2.text();
        }
        let tree = new window.DOMParser().parseFromString(src, "text/html");
        let icons = tree.body.children;
        this.mapping = {};
        let missingImg = yield mkimg("data:image/svg+xml;base64," + btoa(MISSING));
        let boxes = [
          { w: missingImg.width * scale2, h: missingImg.height * scale2, img: missingImg }
        ];
        let serializer = new XMLSerializer();
        for (let ps of icons) {
          var svg64 = btoa(serializer.serializeToString(ps));
          var image64 = "data:image/svg+xml;base64," + svg64;
          let img = yield mkimg(image64);
          boxes.push({ w: img.width * scale2, h: img.height * scale2, img, id: ps.id });
        }
        let packresult = potpack(boxes);
        this.canvas = document.createElement("canvas");
        this.canvas.width = packresult.w;
        this.canvas.height = packresult.h;
        let ctx = this.canvas.getContext("2d");
        for (let box of boxes) {
          ctx.drawImage(box.img, box.x, box.y, box.w, box.h);
          if (box.id)
            this.mapping[box.id] = { x: box.x, y: box.y, w: box.w, h: box.h };
          else
            this.missingBox = { x: box.x, y: box.y, w: box.w, h: box.h };
        }
        return this;
      });
    }
    get(name) {
      let result = this.mapping[name];
      if (!result)
        result = this.missingBox;
      result.canvas = this.canvas;
      return result;
    }
  };

  // src/task.ts
  var Font = (name, url, weight) => {
    let ff = new FontFace(name, "url(" + url + ")", { weight });
    document.fonts.add(ff);
    return ff.load();
  };
  var Sprites = (url) => {
    return new Protosprites(url);
  };

  // src/compat/json_style.ts
  function number(val, defaultValue) {
    return typeof val === "number" ? val : defaultValue;
  }
  function filterFn(arr2) {
    if (arr2.includes("$type")) {
      return (z2) => true;
    } else if (arr2[0] == "==") {
      return (z2, f2) => f2.props[arr2[1]] === arr2[2];
    } else if (arr2[0] == "!=") {
      return (z2, f2) => f2.props[arr2[1]] !== arr2[2];
    } else if (arr2[0] == "!") {
      let sub2 = filterFn(arr2[1]);
      return (z2, f2) => !sub2(z2, f2);
    } else if (arr2[0] === "<") {
      return (z2, f2) => number(f2.props[arr2[1]], Infinity) < arr2[2];
    } else if (arr2[0] === "<=") {
      return (z2, f2) => number(f2.props[arr2[1]], Infinity) <= arr2[2];
    } else if (arr2[0] === ">") {
      return (z2, f2) => number(f2.props[arr2[1]], -Infinity) > arr2[2];
    } else if (arr2[0] === ">=") {
      return (z2, f2) => number(f2.props[arr2[1]], -Infinity) >= arr2[2];
    } else if (arr2[0] === "in") {
      return (z2, f2) => arr2.slice(2, arr2.length).includes(f2.props[arr2[1]]);
    } else if (arr2[0] === "!in") {
      return (z2, f2) => !arr2.slice(2, arr2.length).includes(f2.props[arr2[1]]);
    } else if (arr2[0] === "has") {
      return (z2, f2) => f2.props.hasOwnProperty(arr2[1]);
    } else if (arr2[0] === "!has") {
      return (z2, f2) => !f2.props.hasOwnProperty(arr2[1]);
    } else if (arr2[0] === "all") {
      let parts = arr2.slice(1, arr2.length).map((e2) => filterFn(e2));
      return (z2, f2) => parts.every((p2) => {
        return p2(z2, f2);
      });
    } else if (arr2[0] === "any") {
      let parts = arr2.slice(1, arr2.length).map((e2) => filterFn(e2));
      return (z2, f2) => parts.some((p2) => {
        return p2(z2, f2);
      });
    } else {
      console.log("Unimplemented filter: ", arr2[0]);
      return (f2) => false;
    }
  }
  function numberFn(obj) {
    if (obj.base && obj.stops) {
      return (z2) => {
        return exp(obj.base, obj.stops)(z2 - 1);
      };
    } else if (obj[0] == "interpolate" && obj[1][0] == "exponential" && obj[2] == "zoom") {
      let slice = obj.slice(3);
      let stops = [];
      for (var i2 = 0; i2 < slice.length; i2 += 2) {
        stops.push([slice[i2], slice[i2 + 1]]);
      }
      return (z2) => {
        return exp(obj[1][1], stops)(z2 - 1);
      };
    } else if (obj[0] == "step" && obj[1][0] == "get") {
      let slice = obj.slice(2);
      let prop = obj[1][1];
      return (z2, f2) => {
        let val = f2 == null ? void 0 : f2.props[prop];
        if (typeof val === "number") {
          if (val < slice[1])
            return slice[0];
          for (i2 = 1; i2 < slice.length; i2 += 2) {
            if (val <= slice[i2])
              return slice[i2 + 1];
          }
        }
        return slice[slice.length - 1];
      };
    } else {
      console.log("Unimplemented numeric fn: ", obj);
      return (z2) => 1;
    }
  }
  function numberOrFn(obj, defaultValue = 0) {
    if (!obj)
      return defaultValue;
    if (typeof obj == "number") {
      return obj;
    }
    return (z2, f2) => f2 ? numberFn(obj)(z2, f2) : defaultValue;
  }
  function widthFn(width_obj, gap_obj) {
    let w = numberOrFn(width_obj, 1);
    let g = numberOrFn(gap_obj);
    return (z2, f2) => {
      let tmp = typeof w == "number" ? w : w(z2, f2);
      if (g) {
        return tmp + (typeof g == "number" ? g : g(z2, f2));
      }
      return tmp;
    };
  }
  function getFont(obj, fontsubmap) {
    let fontfaces = [];
    for (let wanted_face of obj["text-font"]) {
      if (fontsubmap.hasOwnProperty(wanted_face)) {
        fontfaces.push(fontsubmap[wanted_face]);
      }
    }
    if (fontfaces.length === 0)
      fontfaces.push({ face: "sans-serif" });
    let text_size = obj["text-size"];
    var weight = "";
    if (fontfaces.length && fontfaces[0].weight)
      weight = fontfaces[0].weight + " ";
    var style = "";
    if (fontfaces.length && fontfaces[0].style)
      style = fontfaces[0].style + " ";
    if (typeof text_size == "number") {
      return (z2) => `${style}${weight}${text_size}px ${fontfaces.map((f2) => f2.face).join(", ")}`;
    } else if (text_size.stops) {
      var base = 1.4;
      if (text_size.base)
        base = text_size.base;
      let t2 = numberFn(text_size);
      return (z2, f2) => {
        return `${style}${weight}${t2(z2, f2)}px ${fontfaces.map((f3) => f3.face).join(", ")}`;
      };
    } else if (text_size[0] == "step") {
      let t2 = numberFn(text_size);
      return (z2, f2) => {
        return `${style}${weight}${t2(z2, f2)}px ${fontfaces.map((f3) => f3.face).join(", ")}`;
      };
    } else {
      console.log("Can't parse font: ", obj);
      return (z2) => "12px sans-serif";
    }
  }
  function json_style(obj, fontsubmap) {
    let paint_rules = [];
    let label_rules = [];
    let refs = new Map();
    for (var layer of obj.layers) {
      refs.set(layer.id, layer);
      if (layer.layout && layer.layout.visibility == "none") {
        continue;
      }
      if (layer.ref) {
        let referenced = refs.get(layer.ref);
        layer.type = referenced.type;
        layer.filter = referenced.filter;
        layer.source = referenced["source"];
        layer["source-layer"] = referenced["source-layer"];
      }
      let sourceLayer = layer["source-layer"];
      var symbolizer;
      var filter = void 0;
      if (layer.filter) {
        filter = filterFn(layer.filter);
      }
      if (layer.type == "fill") {
        paint_rules.push({
          dataLayer: layer["source-layer"],
          filter,
          symbolizer: new PolygonSymbolizer({
            fill: layer.paint["fill-color"],
            opacity: layer.paint["fill-opacity"]
          })
        });
      } else if (layer.type == "fill-extrusion") {
        paint_rules.push({
          dataLayer: layer["source-layer"],
          filter,
          symbolizer: new PolygonSymbolizer({
            fill: layer.paint["fill-extrusion-color"],
            opacity: layer.paint["fill-extrusion-opacity"]
          })
        });
      } else if (layer.type == "line") {
        if (layer.paint["line-dasharray"]) {
          paint_rules.push({
            dataLayer: layer["source-layer"],
            filter,
            symbolizer: new LineSymbolizer({
              width: widthFn(layer.paint["line-width"], layer.paint["line-gap-width"]),
              dash: layer.paint["line-dasharray"],
              dashColor: layer.paint["line-color"]
            })
          });
        } else {
          paint_rules.push({
            dataLayer: layer["source-layer"],
            filter,
            symbolizer: new LineSymbolizer({
              color: layer.paint["line-color"],
              width: widthFn(layer.paint["line-width"], layer.paint["line-gap-width"])
            })
          });
        }
      } else if (layer.type == "symbol") {
        if (layer.layout["symbol-placement"] == "line") {
          label_rules.push({
            dataLayer: layer["source-layer"],
            filter,
            symbolizer: new LineLabelSymbolizer({
              font: getFont(layer.layout, fontsubmap),
              fill: layer.paint["text-color"],
              width: layer.paint["text-halo-width"],
              stroke: layer.paint["text-halo-color"],
              textTransform: layer.layout["text-transform"],
              label_props: layer.layout["text-field"] ? [layer.layout["text-field"]] : void 0
            })
          });
        } else {
          label_rules.push({
            dataLayer: layer["source-layer"],
            filter,
            symbolizer: new CenteredTextSymbolizer({
              font: getFont(layer.layout, fontsubmap),
              fill: layer.paint["text-color"],
              stroke: layer.paint["text-halo-color"],
              width: layer.paint["text-halo-width"],
              textTransform: layer.layout["text-transform"],
              label_props: layer.layout["text-field"] ? [layer.layout["text-field"]] : void 0
            })
          });
        }
      } else if (layer.type == "circle") {
        paint_rules.push({
          dataLayer: layer["source-layer"],
          filter,
          symbolizer: new CircleSymbolizer({
            radius: layer.paint["circle-radius"],
            fill: layer.paint["circle-color"],
            stroke: layer.paint["circle-stroke-color"],
            width: layer.paint["circle-stroke-width"]
          })
        });
      }
    }
    label_rules.reverse();
    return { paint_rules, label_rules, tasks: [] };
  }
  return src_exports;
})();
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
