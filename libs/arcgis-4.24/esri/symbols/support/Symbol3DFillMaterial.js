// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/set ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./Symbol3DMaterial".split(" "),function(b,g,e,h,n,p,q,r,t,k,l,m){var c;b.Symbol3DFillMaterial=c=function(f){function d(a){a=f.call(this,a)||this;a.colorMixMode=null;return a}g._inheritsLoose(d,
f);d.prototype.clone=function(){const a={color:h.isSome(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode};return new c(a)};return d}(m.Symbol3DMaterial);e.__decorate([k.enumeration({multiply:"multiply",replace:"replace",tint:"tint"})],b.Symbol3DFillMaterial.prototype,"colorMixMode",void 0);b.Symbol3DFillMaterial=c=e.__decorate([l.subclass("esri.symbols.support.Symbol3DFillMaterial")],b.Symbol3DFillMaterial);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});