// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ZoomConditions2D ./ZoomConditions3D".split(" "),function(g,c,b,h,d,p,q,r,l,m,n){b=function(k){function e(a){a=k.call(this,a)||this;a.canZoomIn=!1;a.canZoomOut=!1;return a}g._inheritsLoose(e,k);var f=e.prototype;f.destroy=
function(){this.view=null};f.zoomIn=function(){if(this.canZoomIn){var a=this.view;"2d"===a.type?a.mapViewNavigation.zoomIn():h.ignoreAbortErrors(a.goTo({zoomFactor:2}))}};f.zoomOut=function(){if(this.canZoomOut){var a=this.view;"2d"===a.type?a.mapViewNavigation.zoomOut():h.ignoreAbortErrors(a.goTo({zoomFactor:.5}))}};g._createClass(e,[{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}},{key:"view",set:function(a){a?"2d"===a.type?this._zoomConditions=new m({view:a}):"3d"===
a.type&&(this._zoomConditions=new n({view:a})):this._zoomConditions=null;this._set("view",a)}}]);return e}(b);c.__decorate([d.property()],b.prototype,"_zoomConditions",void 0);c.__decorate([d.property({aliasOf:"_zoomConditions.canZoomIn",readOnly:!0})],b.prototype,"canZoomIn",void 0);c.__decorate([d.property({aliasOf:"_zoomConditions.canZoomOut",readOnly:!0})],b.prototype,"canZoomOut",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],b.prototype,
"view",null);return b=c.__decorate([l.subclass("esri.widgets.Zoom.ZoomViewModel")],b)});