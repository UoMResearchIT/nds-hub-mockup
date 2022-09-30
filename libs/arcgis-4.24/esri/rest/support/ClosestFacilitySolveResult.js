// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../geometry/SpatialReference ./DirectionsFeatureSet ./FeatureSet ./NAMessage ../../geometry/Point ../../geometry/Polyline ../../geometry/Polygon".split(" "),
function(n,c,b,m,p,q,e,B,C,D,h,r,t,u,v,w,l,x,y){function z(g){return g.features.map(d=>{const f=t.fromJSON(g.spatialReference);d=m.fromJSON(d);q.isSome(d.geometry)&&(d.geometry.spatialReference=f);return d})}function k(g){return v.fromJSON(g).features.map(d=>d.geometry)}b=function(g){function d(a){a=g.call(this,a)||this;a.directions=null;a.facilities=null;a.incidents=null;a.messages=null;a.pointBarriers=null;a.polylineBarriers=null;a.polygonBarriers=null;a.routes=null;return a}n._inheritsLoose(d,
g);var f=d.prototype;f.readFacilities=function(a){return k(a)};f.readIncidents=function(a){return k(a)};f.readPointBarriers=function(a,A){return k(A.barriers)};f.readPolylineBarriers=function(a){return k(a)};f.readPolygonBarriers=function(a){return k(a)};f.readRoutes=function(a){return z(a)};return d}(p.JSONSupport);c.__decorate([e.property({type:[u]})],b.prototype,"directions",void 0);c.__decorate([e.property({type:[l]})],b.prototype,"facilities",void 0);c.__decorate([h.reader("facilities")],b.prototype,
"readFacilities",null);c.__decorate([e.property({type:[l]})],b.prototype,"incidents",void 0);c.__decorate([h.reader("incidents")],b.prototype,"readIncidents",null);c.__decorate([e.property({type:[w]})],b.prototype,"messages",void 0);c.__decorate([e.property({type:[l]})],b.prototype,"pointBarriers",void 0);c.__decorate([h.reader("pointBarriers",["barriers"])],b.prototype,"readPointBarriers",null);c.__decorate([e.property({type:[x]})],b.prototype,"polylineBarriers",void 0);c.__decorate([h.reader("polylineBarriers")],
b.prototype,"readPolylineBarriers",null);c.__decorate([e.property({type:[y]})],b.prototype,"polygonBarriers",void 0);c.__decorate([h.reader("polygonBarriers")],b.prototype,"readPolygonBarriers",null);c.__decorate([e.property({type:[m]})],b.prototype,"routes",void 0);c.__decorate([h.reader("routes")],b.prototype,"readRoutes",null);return b=c.__decorate([r.subclass("esri.rest.support.ClosestFacilitySolveResult")],b)});