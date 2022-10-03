// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../TimeExtent ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ../../layers/support/MosaicRule ../../layers/support/RasterFunction ../../geometry/Point".split(" "),function(m,c,n,p,a,q,d,y,r,t,g,u,v,w){var e;a=e=function(h){function f(){var b=
h.apply(this,arguments)||this;b.geometry=null;b.mosaicRule=null;b.renderingRule=null;b.pixelSize=null;b.raster=void 0;b.timeExtent=null;return b}m._inheritsLoose(f,h);var k=f.prototype;k.writeGeometry=function(b,l,x){null!=b&&(l.geometryType=g.getJsonType(b),l[x]=b.toJSON())};k.clone=function(){return new e(q.clone({geometry:this.geometry,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,raster:this.raster,timeExtent:this.timeExtent}))};return f}(a.JSONSupport);
c.__decorate([d.property({types:n.geometryTypes,json:{read:g.fromJSON}})],a.prototype,"geometry",void 0);c.__decorate([t.writer("geometry")],a.prototype,"writeGeometry",null);c.__decorate([d.property({type:u,json:{write:!0}})],a.prototype,"mosaicRule",void 0);c.__decorate([d.property({type:v,json:{write:!0}})],a.prototype,"renderingRule",void 0);c.__decorate([d.property({type:w,json:{write:!0}})],a.prototype,"pixelSize",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"raster",void 0);
c.__decorate([d.property({type:p,json:{read:{source:"time"},write:{target:"time"}}})],a.prototype,"timeExtent",void 0);return a=e=c.__decorate([r.subclass("esri.rest.support.ImageHistogramParameters")],a)});