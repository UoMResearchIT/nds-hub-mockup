// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec4f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../II3SMeshView3D".split(" "),
function(c,r,e,t,u,f,B,C,D,v,w,x,n,p,h){c.I3SQueryFeatureStore=function(q){function l(a){a=q.call(this,a)||this;a.events=new u;return a}r._inheritsLoose(l,q);var m=l.prototype;m.forEach=function(a){this.forAllFeatures(k=>{a(k);return h.ForAllFeaturesReturnType.CONTINUE})};m.forEachBounds=function(a,k,d){const g=this.getFeatureExtent;for(const y of a)k(g(y,d))};m.forEachInBounds=function(a,k){this.forAllFeatures(d=>{const g=this.getFeatureExtent(d,z);p.intersects(a,n.toRect(g,A))&&k(d);return h.ForAllFeaturesReturnType.CONTINUE},
d=>{x.projectBoundingSphere(d.node.mbs,this.sourceSpatialReference,b,this.viewSpatialReference);if(b[0]>=a[0]&&b[2]<=a[2]&&b[1]>=a[1]&&b[3]<=a[3])return h.ForAllFeaturesReturnType.CONTINUE;d=b[0]-Math.max(a[0],Math.min(b[0],a[2]));const g=b[1]-Math.max(a[1],Math.min(b[1],a[3]));return d*d+g*g<=b[3]*b[3]?h.ForAllFeaturesReturnType.CONTINUE:h.ForAllFeaturesReturnType.SKIP})};return l}(t);e.__decorate([f.property({constructOnly:!0})],c.I3SQueryFeatureStore.prototype,"featureAdapter",void 0);e.__decorate([f.property({constructOnly:!0})],
c.I3SQueryFeatureStore.prototype,"toArray",void 0);e.__decorate([f.property({constructOnly:!0})],c.I3SQueryFeatureStore.prototype,"forAllFeatures",void 0);e.__decorate([f.property({constructOnly:!0})],c.I3SQueryFeatureStore.prototype,"getFeatureExtent",void 0);e.__decorate([f.property({constructOnly:!0})],c.I3SQueryFeatureStore.prototype,"sourceSpatialReference",void 0);e.__decorate([f.property({constructOnly:!0})],c.I3SQueryFeatureStore.prototype,"viewSpatialReference",void 0);c.I3SQueryFeatureStore=
e.__decorate([v.subclass("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],c.I3SQueryFeatureStore);const b=w.create(),z=n.create(),A=p.create();Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});