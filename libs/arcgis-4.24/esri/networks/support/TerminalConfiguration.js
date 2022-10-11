// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./Terminal".split(" "),function(h,c,d,a,e,m,n,p,k,l){d=new d.JSONMap({esriUNTMBidirectional:"bidirectional",esriUNTMDirectional:"directional"});a=function(f){function g(b){b=f.call(this,b)||this;b.defaultConfiguration=null;
b.id=null;b.name=null;b.terminals=[];b.traversabilityModel=null;return b}h._inheritsLoose(g,f);return g}(a.JSONSupport);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"defaultConfiguration",void 0);c.__decorate([e.property({type:Number,json:{read:{source:"terminalConfigurationId"},write:{target:"terminalConfigurationId"}}})],a.prototype,"id",void 0);c.__decorate([e.property({type:String,json:{read:{source:"terminalConfigurationName"},write:{target:"terminalConfigurationName"}}})],
a.prototype,"name",void 0);c.__decorate([e.property({type:[l],json:{write:!0}})],a.prototype,"terminals",void 0);c.__decorate([e.property({type:d.apiValues,json:{type:d.jsonValues,read:d.read,write:d.write}})],a.prototype,"traversabilityModel",void 0);return a=c.__decorate([k.subclass("esri.networks.support.TerminalConfiguration")],a)});