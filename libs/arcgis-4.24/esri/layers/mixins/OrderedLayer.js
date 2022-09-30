// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/object ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../support/OrderByInfo".split(" "),function(e,h,f,k,l,r,t,u,m,g){function n(a,b,c){if(!a)return null;a=a.find(d=>!!d.field);if(!a)return null;b=new g;b.read(a,c);return[b]}function p(a,b,c,d){(a=a.find(q=>!!q.field))&&k.setDeepValue(c,[a.toJSON()],
b)}e.OrderedLayer=a=>{a=function(b){function c(){var d=b.apply(this,arguments)||this;d.orderBy=null;return d}h._inheritsLoose(c,b);return c}(a);f.__decorate([l.property({type:[g],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:n},write:{target:"layerDefinition.orderBy",writer:p}}})],a.prototype,"orderBy",void 0);return a=f.__decorate([m.subclass("esri.layers.mixins.OrderedLayer")],a)};e.isOrderedLayer=function(a){return void 0!==a.orderBy};Object.defineProperties(e,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});