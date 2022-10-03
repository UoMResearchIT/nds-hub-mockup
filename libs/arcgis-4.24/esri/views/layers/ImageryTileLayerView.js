// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/Error ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/rasterFunctions/rasterProjectionHelper ./support/popupUtils".split(" "),function(u,l,A,y,v,m,E,F,G,B,C,w,D){return g=>{g=function(z){function r(){var a=z.apply(this,
arguments)||this;a._rasterFieldPrefix="Raster.";a.layer=null;a.view=null;a.tileInfo=null;return a}u._inheritsLoose(r,z);var k=r.prototype;k._getfullExtent=function(){return this.projectFullExtent(this.view.spatialReference)};k.supportsSpatialReference=function(a){return!!this.projectFullExtent(a)};k.projectFullExtent=function(a){const b=v.unwrap(this.layer.fullExtent),c=w.getDefaultDatumTransformationForDataset(b,a,!1);return w.projectExtent(b,a,c)};k.fetchPopupFeatures=function(){var a=u._asyncToGenerator(function*(b,
c){const {layer:d}=this;if(!b)throw new y("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:d});var {popupEnabled:e}=d;c=D.getFetchPopupTemplate(d,c);if(!e||v.isNone(c))throw new y("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:e,popupTemplate:c});e=[];const {value:n,magdirValue:t}=yield d.identify(b,{timeExtent:this.timeExtent});let x="";if(n&&n.length){var h,p;x="imagery-tile"===d.type&&d.hasStandardTime()&&
null!=n[0]?n.map(q=>d.getStandardTimeValue(q)).join(", "):n.join(", ");b={ObjectId:0};b["Raster.ServicePixelValue"]=this._formatAttributeValue(x,"Raster.ServicePixelValue");if((c=null==(h=d.rasterInfo)?void 0:null==(p=h.attributeTable)?void 0:p.features)&&0<c.length&&(h=c.filter(q=>String(q.attributes.value||q.attributes.Value||q.attributes.VALUE)===x),0<h.length&&(h=h[0])))for(var f in h.attributes)h.attributes.hasOwnProperty(f)&&(p=this._rasterFieldPrefix+f,b[p]=this._formatAttributeValue(h.attributes[f],
p));f=d.rasterInfo.dataType;if("vector-magdir"===f||"vector-uv"===f)b["Raster.Magnitude"]=null==t?void 0:t[0],b["Raster.Direction"]=null==t?void 0:t[1];f=new A(this.fullExtent.clone(),null,b);f.layer=d;f.sourceLayer=f.layer;e.push(f)}return e});return function(b,c){return a.apply(this,arguments)}}();k._formatAttributeValue=function(a,b){if("string"===typeof a&&(b=(b=this._getFieldInfo(this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,b))&&b.format)){let c,d;return a.trim().includes(",")?
(c=",",d=c+" ",this._formatDelimitedString(a,c,d,b)):a.trim().includes(" ")?(c=d=" ",this._formatDelimitedString(a,c,d,b)):this._formatNumberFromString(a,b)}return a};k._getFieldInfo=function(a,b){if(a&&a.length&&b){var c=b.toLowerCase(),d=void 0;a.some(e=>!e.fieldName||e.fieldName.toLowerCase()!==c&&e.fieldName.toLowerCase()!==c.replace(/ /g,"_")?!1:(d=e,!0));return d}};k._formatDelimitedString=function(a,b,c,d){return a&&b&&c&&d?a.trim().split(b).map(e=>this._formatNumberFromString(e,d)).join(c):
a};k._formatNumberFromString=function(a,b){if(!a||!b)return a;const c=Number(a);return isNaN(c)?a:b.format(c)};u._createClass(r,[{key:"fullExtent",get:function(){return this._getfullExtent()}},{key:"hasTilingEffects",get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}},{key:"datumTransformation",get:function(){return w.getDefaultDatumTransformationForDataset(v.unwrap(this.layer.fullExtent),this.view.spatialReference,
!0)}}]);return r}(g);l.__decorate([m.property()],g.prototype,"layer",void 0);l.__decorate([m.property(C.combinedViewLayerTimeExtentProperty)],g.prototype,"timeExtent",void 0);l.__decorate([m.property()],g.prototype,"view",void 0);l.__decorate([m.property()],g.prototype,"fullExtent",null);l.__decorate([m.property()],g.prototype,"tileInfo",void 0);l.__decorate([m.property({readOnly:!0})],g.prototype,"hasTilingEffects",null);return g=l.__decorate([B.subclass("esri.views.layers.ImageryTileLayerView")],
g)}});