// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./FeatureFilter ./FeatureLayerSource".split(" "),function(g,c,a,h,d,p,q,r,k,l,m,n){a=function(e){function f(b){b=e.call(this,b)||this;b.fenceSource=null;b.filter=null;b.bufferDistance=
null;b.type="features";return b}g._inheritsLoose(f,e);return f}(a.ClonableMixin(h.JSONSupport));c.__decorate([d.property({type:n,json:{write:{isRequired:!0}}})],a.prototype,"fenceSource",void 0);c.__decorate([d.property({type:m,json:{write:!0}})],a.prototype,"filter",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"bufferDistance",void 0);c.__decorate([k.enumeration({features:"features"},{readOnly:!0})],a.prototype,"type",void 0);return a=c.__decorate([l.subclass("esri.webdoc.geotriggersInfo.FeatureFenceParameters")],
a)});