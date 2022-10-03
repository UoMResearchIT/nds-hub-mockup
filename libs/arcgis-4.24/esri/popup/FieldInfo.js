// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/jsonMap ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./support/FieldInfoFormat".split(" "),function(h,c,k,a,l,d,q,m,n,p){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.fieldName=null;b.format=null;b.isEditable=!1;b.label=null;b.stringFieldOption="text-box";
b.statisticType=null;b.tooltip=null;b.visible=!0;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({fieldName:this.fieldName,format:this.format?l.clone(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})};return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"fieldName",void 0);c.__decorate([d.property({type:p,
json:{write:!0}})],a.prototype,"format",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0,default:!1}})],a.prototype,"isEditable",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c.__decorate([m.enumeration(new k.JSONMap({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],a.prototype,"stringFieldOption",void 0);c.__decorate([d.property({type:"count sum min max avg stddev var".split(" "),json:{write:!0}})],a.prototype,
"statisticType",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"tooltip",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"visible",void 0);return a=e=c.__decorate([n.subclass("esri.popup.FieldInfo")],a)});