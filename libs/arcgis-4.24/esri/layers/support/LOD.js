// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,d,m,n,k,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.cols=null;b.level=0;b.levelValue=null;b.origin=null;b.resolution=0;b.rows=null;b.scale=0;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({cols:this.cols,
level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})};return f}(a.JSONSupport);c.__decorate([d.property({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"cols",void 0);c.__decorate([d.property({type:k.Integer,json:{write:!0}})],a.prototype,"level",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"levelValue",void 0);c.__decorate([d.property({json:{write:!0,origins:{"web-document":{read:!1,
write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"origin",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"resolution",void 0);c.__decorate([d.property({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"rows",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"scale",void 0);return a=e=c.__decorate([l.subclass("esri.layers.support.LOD")],a)});