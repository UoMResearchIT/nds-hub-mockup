// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../TimeExtent ../../geometry/Extent ../../geometry/SpatialReference ../../chunks/persistableUrlUtils ../../support/timeUtils ../../symbols/support/ElevationInfo ../../webdoc/support/opacityUtils".split(" "),function(c,n,k,p,f,l,g,m){const q={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},r={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader(b,a){return!a.disablePopup}},write:{enabled:!0,
writer(b,a,d){a[d]=!b}}}},t={type:Boolean,value:!0,json:{name:"showLabels",write:!0}};f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:f.write}}};const u={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}};g={value:null,type:g.default,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};const e={type:Number,json:{origins:{"web-document":{write:!0,read:!0},
"portal-item":{write:!0}}}},v={...e,json:{...e.json,origins:{"web-document":{...e.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader(b,a,d){if((!d||"service"===d.origin)&&a.drawingInfo&&void 0!==a.drawingInfo.transparency)return m.transparencyToOpacity(a.drawingInfo.transparency);if(a.layerDefinition&&a.layerDefinition.drawingInfo&&
void 0!==a.layerDefinition.drawingInfo.transparency)return m.transparencyToOpacity(a.layerDefinition.drawingInfo.transparency)}}}},w={type:k,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(b,a)=>{b=k.fromJSON(b);null!=a.spatialReference&&"object"===typeof a.spatialReference&&(b.spatialReference=p.fromJSON(a.spatialReference));return b}}}},read:!1}},x={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},y={type:Number,json:{origins:{service:{write:{enabled:!1}}},
read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},z={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}};c.combinedViewLayerTimeExtentProperty={type:n,readOnly:!0,get(){var b,a;if(null==(b=this.layer)||!b.timeInfo)return null;const {datesInUnknownTimezone:d,timeOffset:h,useViewTime:A}=this.layer;b=null==(a=this.view)?void 0:a.timeExtent;a=this.layer.timeExtent;d&&(a=l.toLocalTimeExtent(a));
a=A?b&&a?b.intersection(a):b||a:a;if(!a||a.isEmpty||a.isAllTime)return a;h&&(a=a.offset(-h.value,h.unit));d&&(a=l.toUTCTimeExtent(a));b=this._get("timeExtent");return a.equals(b)?b:a}};c.elevationInfo=g;c.id=x;c.labelsVisible=t;c.legendEnabled=u;c.listMode={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}};c.maxScale=z;c.minScale=y;c.opacity=e;c.opacityDrawingInfo=v;c.popupEnabled=r;c.readOnlyService=function(b){return{type:b,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}};
c.sceneLayerFullExtent=w;c.screenSizePerspectiveEnabled=q;c.url=f;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});