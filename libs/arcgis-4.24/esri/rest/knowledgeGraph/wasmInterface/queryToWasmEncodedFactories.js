// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/Error ../../../geometry/Multipoint ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/Polyline ../../../geometry/Geometry".split(" "),function(g,C,t,u,v,l,m,w){function n(a,b){if(a instanceof u)return x(a,b);if(a instanceof v){{const c=new b.GeometryValue;c.geometry_type=b.esriGeometryType.esriGeometryPoint;c.has_z=a.hasZ;c.has_m=a.hasM;b=[];b[0]=a.x;b[1]=a.y;let d=2;a.hasZ&&(b[d]=a.z,d++);a.hasM&&(b[d]=a.m,d++);c.coords=new Float64Array(b);
c.lengths=new Uint32Array([1]);a=c}return a}if(a instanceof m||a instanceof l)return y(a,b);throw new t("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:a});}function p(a,b){const c=new b.ObjectValue;for(const [d,e]of Object.entries(a))c.set_key_value(d,k(e,b));return c}function k(a,b){if(null===a||void 0===a)return"";if("object"!==typeof a||a instanceof Date)return a;if(a instanceof w)return n(a,b);if(Array.isArray(a)){const c=
new b.ArrayValue;a.forEach(d=>{c.add_value(k(d,b))});return c}return p(a,b)}function y(a,b){const c=new b.GeometryValue;c.has_z=a.hasZ;c.has_m=a.hasM;const d=[],e=[];let f=[];a instanceof m?(c.geometry_type=b.esriGeometryType.esriGeometryPolyline,f=a.paths):a instanceof l&&(c.geometry_type=b.esriGeometryType.esriGeometryPolygon,f=a.rings);let h=0,q=0;f.forEach(z=>{let r=0;z.forEach(A=>{r++;A.forEach(B=>{d[q]=B;q++})});e[h]=r;h++});c.coords=new Float64Array(d);c.lengths=new Uint32Array(e);return c}
function x(a,b){const c=new b.GeometryValue;c.geometry_type=c.geometry_type=b.esriGeometryType.esriGeometryMultipoint;c.has_z=a.hasZ;c.has_m=a.hasM;const d=[];b=[];b[0]=a.points.length;let e=0;a.points.forEach(f=>{f.forEach(h=>{d[e]=h;e++})});c.coords=new Float64Array(d);c.lengths=new Uint32Array(b);return c}g.bindParamArrayToWasm=function(a,b){const c=new b.ArrayValue;a.forEach(d=>{c.add_value(k(d,b))});return c};g.bindParamObjectToWasm=p;g.geometryToWasm=n;Object.defineProperties(g,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});