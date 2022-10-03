// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/typeUtils".split(" "),function(n,c,b,h,p,q,e,w,x,y,r,t,u,v){b=function(k){function f(a){a=
k.call(this,a)||this;a.displayFieldName=null;a.feature=null;a.foundFieldName=null;a.layerId=null;a.layerName=null;a.value=void 0;return a}n._inheritsLoose(f,k);var l=f.prototype;l.readFeature=function(a,d){a={attributes:{}};d.attributes&&(a.attributes=d.attributes);d.geometry&&(a.geometry=d.geometry);return h.fromJSON(a)};l.writeFeature=function(a,d){if(a){var {attributes:m,geometry:g}=a;m&&(d.attributes={...m});q.isSome(g)&&(d.geometry=g.toJSON(),d.geometryType=v.typeKebabDictionary.toJSON(g.type))}};
return f}(p.JSONSupport);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"displayFieldName",void 0);c.__decorate([e.property({type:h})],b.prototype,"feature",void 0);c.__decorate([r.reader("feature",["attributes","geometry"])],b.prototype,"readFeature",null);c.__decorate([u.writer("feature")],b.prototype,"writeFeature",null);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"foundFieldName",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],b.prototype,
"layerId",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"layerName",void 0);c.__decorate([e.property({json:{write:!0}})],b.prototype,"value",void 0);return b=c.__decorate([t.subclass("esri.rest.support.FindResult")],b)});