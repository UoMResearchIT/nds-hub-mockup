// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(k,c,a,l,e,d,m){var f;a=f=function(h){function g(b){b=h.call(this,b)||this;b.variableName=null;b.dimensionName=null;b.values=[];b.isSlice=!1;return b}k._inheritsLoose(g,h);g.prototype.clone=function(){return new f({variableName:this.variableName,
dimensionName:this.dimensionName,values:l.clone(this.values),isSlice:this.isSlice})};return g}(a.JSONSupport);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"variableName",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"dimensionName",void 0);c.__decorate([e.property({type:d.types.array(d.types.oneOf([d.types.native(Number),d.types.array(d.types.native(Number))])),json:{write:!0}})],a.prototype,"values",void 0);c.__decorate([e.property({type:Boolean,
json:{write:!0}})],a.prototype,"isSlice",void 0);return a=f=c.__decorate([m.subclass("esri.layers.support.DimensionalDefinition")],a)});