// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../popup/ExpressionInfo ../../../popup/FieldInfo ../support/featureUtils".split(" "),function(g,c,a,e,r,t,u,m,n,p,q){a=function(h){function f(b){b=h.call(this,b)||this;b.attributes=null;b.expressionInfos=null;b.description=
null;b.fieldInfos=null;b.title=null;return b}g._inheritsLoose(f,h);g._createClass(f,[{key:"formattedFieldInfos",get:function(){const {expressionInfos:b,fieldInfos:k}=this,l=[];null==k?void 0:k.forEach(d=>{if(!d.hasOwnProperty("visible")||d.visible)d=d.clone(),d.label=q.getFieldInfoLabel(d,b),l.push(d)});return l}}]);return f}(a);c.__decorate([e.property()],a.prototype,"attributes",void 0);c.__decorate([e.property({type:[n]})],a.prototype,"expressionInfos",void 0);c.__decorate([e.property()],a.prototype,
"description",void 0);c.__decorate([e.property({type:[p]})],a.prototype,"fieldInfos",void 0);c.__decorate([e.property({readOnly:!0})],a.prototype,"formattedFieldInfos",null);c.__decorate([e.property()],a.prototype,"title",void 0);return a=c.__decorate([m.subclass("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")],a)});