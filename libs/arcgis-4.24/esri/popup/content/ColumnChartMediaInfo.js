// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./mixins/ChartMediaInfo ./support/chartMediaInfoUtils".split(" "),function(g,e,h,a,n,p,k,l,m){var c;a=c=function(f){function d(b){b=f.call(this,b)||this;b.type="column-chart";return b}g._inheritsLoose(d,f);d.prototype.clone=function(){return new c({altText:this.altText,
title:this.title,caption:this.caption,value:this.value?this.value.clone():null})};return d}(l);e.__decorate([h.property({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:m.chartTypeKebabDict.write}})],a.prototype,"type",void 0);return a=c=e.__decorate([k.subclass("esri.popup.content.ColumnChartMediaInfo")],a)});