// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../intl ../../../core/Logger ../../../core/maybe ../../../core/string ../../../intl/date ../../../intl/number ../../../layers/support/fieldUtils ../../../popup/support/FieldInfoFormat ../../../support/arcadeOnDemand".split(" "),function(h,l,ja,O,p,q,m,B,C,P,Q){function r(){r=l._asyncToGenerator(function*(a,b){return"function"===typeof a?a.call(null,b):a});return r.apply(this,arguments)}function D(a){return a?E.test(a):!1}function R(a,
b){if(!D(b)||!a)return null;const c=b.replace(E,"").toLowerCase();let e;a.some(d=>d.name.toLowerCase()===c?(e=d,!0):!1);return e}function t(a,b){return(b=u(b,a))?b.name:a}function u(a,b){return a&&"function"===typeof a.getField?a.getField(b):null}function F({formattedAttributes:a,template:b,fieldInfoMap:c}){return`${q.replace(q.replace(b,e=>{{const d=c.get(e.toLowerCase());e=`{${d&&d.fieldName||e}}`}return e}),a).replace(S,"")}`.trim()}function T(a,b,c=!1){const e=b[a];"string"===typeof e&&(c=(c?
encodeURIComponent(e):e).replace(U,"%27"),b[a]=c)}function V(a,b=!1){const c={...a};Object.keys(c).forEach(e=>T(e,c,b));return c}function G(a,b){return a.replace(W,(c,e,d)=>(c=u(b,d))?`{${c.name}}`:e)}function X(a,b,c){return(a=G(a,c))?a.replace(Y,(e,d,f)=>{d=`${d||f}`.trim();return q.replace(e,V(b,d&&"{"!==d[0]))}):a}function H(a,b){var c=b.fieldName,e=I(b.fieldInfos,c),d=null==e?void 0:e.clone();e=b.preventPlacesFormatting;b=b.layer;var f=u(b,c);if(d&&"date"===(null==f?void 0:f.type)){f=d.format||
new P;f.dateFormat=f.dateFormat||"short-date-short-time";var g;if(!(g=!(null!=b&&b.layer)&&"feature"===(null==b?void 0:b.type)&&b.datesInUnknownTimezone)){if(g=!(null==b||!b.layer))g=b.layer,g="map-image"===(null==g?void 0:g.type);g=g&&b.layer.datesInUnknownTimezone}f.dateTimeFormatOptions=g?{timeZone:"UTC"}:null;d.format=f}d=d&&d.format;if("string"===typeof a&&C.isRasterPixelValueField(c)&&d)return d.formatRasterPixelValue(a);"string"!==typeof a||!d||null!=d.dateFormat||null==d.places&&null==d.digitSeparator||
(c=Number(a),isNaN(c)||(a=c));return"string"===typeof a||null==a||null==d?v(a):e?B.formatNumber(a,{...B.convertNumberFormatToIntlOptions(d),minimumFractionDigits:0,maximumFractionDigits:20}):d.format(a)}function I(a,b){if(a&&a.length&&b){var c=b.toLowerCase(),e=void 0;a.some(d=>d.fieldName&&d.fieldName.toLowerCase()===c?(e=d,!0):!1);return e}}function Z({fieldName:a,graphic:b,layer:c}){if(w(a)||!c||"function"!==typeof c.getFeatureType)return null;const {typeIdField:e}=c;return e&&a===e?(a=c.getFeatureType(b))?
a.name:null:null}function aa({fieldName:a,value:b,graphic:c,layer:e}){return w(a)||!e||"function"!==typeof e.getFieldDomain?null:(a=e.getFieldDomain(a,{feature:c}))&&"coded-value"===a.type?a.getName(b):null}function v(a){return"string"===typeof a?a.replace(ba,'\x3cbr class\x3d"esri-text-new-line" /\x3e'):a}function J(a){const {value:b,fieldName:c,fieldInfos:e,fieldInfoMap:d,layer:f,graphic:g}=a;return null==b?"":(a=aa({fieldName:c,value:b,graphic:g,layer:f}))||(a=Z({fieldName:c,graphic:g,layer:f}))?
a:d.get(c.toLowerCase())?H(b,{fieldInfos:e||Array.from(d.values()),fieldName:c,layer:f}):(a=f&&f.fieldsIndex)&&a.isDateField(c)?m.formatDate(b,x):v(b)}function ca(a,b){return y.apply(this,arguments)}function y(){y=l._asyncToGenerator(function*(a,b){var c,e;const {layer:d,graphic:f,outFields:g,objectIds:k,returnGeometry:n,spatialReference:da}=a;a=k[0];if("number"!==typeof a&&"string"!==typeof a)return K.warn("Could not query required fields for the specified feature. The feature's ID is invalid.",
{layer:d,graphic:f,objectId:a,requiredFields:g}),null;if(null==(c=d.capabilities)||null==(e=c.operations)||!e.supportsQuery)return K.warn("The specified layer cannot be queried. The following fields will not be available.",{layer:d,graphic:f,requiredFields:g,returnGeometry:n}),null;c=d.createQuery();c.objectIds=k;c.outFields=null!=g&&g.length?g:[d.objectIdField];c.returnGeometry=!!n;c.returnZ=!!n;c.returnM=!!n;c.outSpatialReference=da;return(yield d.queryFeatures(c,b)).features[0]});return y.apply(this,
arguments)}function ea(a){return z.apply(this,arguments)}function z(){z=l._asyncToGenerator(function*(a){var b;if(null==(b=a.expressionInfos)||!b.length)return!1;b=yield Q.loadArcade();({arcadeUtils:{hasGeometryFunctions:b}}=b);return b(a)});return z.apply(this,arguments)}function A(){A=l._asyncToGenerator(function*({graphic:a,popupTemplate:b,layer:c,spatialReference:e},d){if(c&&b&&("function"===typeof c.load&&(yield c.load(d)),a.attributes)){var f=a.attributes[c.objectIdField];if(null!=f){f=[f];
var g=yield b.getRequiredFields(c.fieldsIndex),k=C.featureHasFields(g,a);g=k?[]:g;b=b.returnGeometry||(yield ea(b));if(!k||b)if(c=yield ca({layer:c,graphic:a,outFields:g,objectIds:f,returnGeometry:b,spatialReference:e},d))c.geometry&&(a.geometry=c.geometry),c.attributes&&(a.attributes={...a.attributes,...c.attributes})}}});return A.apply(this,arguments)}function w(a=""){return a?a.includes("relationships/"):!1}function L({attributes:a,graphic:b,relatedInfo:c,fieldInfos:e,fieldInfoMap:d,layer:f}){a&&
b&&c&&Object.keys(b.attributes).forEach(g=>{var k=(k={layerId:c.relation.id.toString(),fieldName:g},`${"relationships/"}${k.layerId}/${k.fieldName}`);a[k]=J({fieldName:k,fieldInfos:e,fieldInfoMap:d,layer:f,value:b.attributes[g],graphic:b})})}function fa({attributes:a,relatedInfo:b,fieldInfoMap:c,fieldInfos:e,layer:d}){a&&b&&(b.relatedFeatures&&b.relatedFeatures&&b.relatedFeatures.forEach(f=>L({attributes:a,graphic:f,relatedInfo:b,fieldInfoMap:c,fieldInfos:e,layer:d})),b.relatedStatsFeatures&&b.relatedStatsFeatures&&
b.relatedStatsFeatures.forEach(f=>L({attributes:a,graphic:f,relatedInfo:b,fieldInfoMap:c,fieldInfos:e,layer:d})))}const K=O.getLogger("esri.widgets.Feature.support.featureUtils"),S=/href=(""|'')/gi,W=/(\{([^\{\r\n]+)\})/g,U=/'/g,E=/^\s*expression\//i,ba=/(\n)/gi,ha=/[\u00A0-\u9999<>&]/gim,Y=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,ia=/^(?:mailto:|tel:)/,x=m.convertDateFormatToIntlOptions("short-date-short-time"),M=a=>{if(!a)return!1;a=a.toUpperCase();return a.includes("CURRENT_TIMESTAMP")||a.includes("CURRENT_DATE")||
a.includes("CURRENT_TIME")},N=({layer:a,method:b,query:c,definitionExpression:e})=>{var d,f;null!=(d=a.capabilities)&&null!=(f=d.query)&&f.supportsCacheHint&&"attachments"!==b&&(a=p.isSome(c.where)&&c.where,b=p.isSome(c.geometry)&&c.geometry,M(e)||M(a)||"extent"===(null==b?void 0:b.type)||"tile"===c.resultType||(c.cacheHint=!0))};h.applyTextFormattingHTML=v;h.createfieldInfoMap=function(a,b){const c=new Map;a&&a.forEach(e=>{const d=t(e.fieldName,b);e.fieldName=d;c.set(d.toLowerCase(),e)});return c};
h.fixTokens=G;h.formatAttributes=function({fieldInfos:a,attributes:b,layer:c,graphic:e,fieldInfoMap:d,relatedInfos:f}){const g={};null==f?void 0:f.forEach(k=>fa({attributes:g,relatedInfo:k,fieldInfoMap:d,fieldInfos:a,layer:c}));Object.keys(b).forEach(k=>{g[k]=J({fieldName:k,fieldInfos:a,fieldInfoMap:d,layer:c,value:b[k],graphic:e})});return g};h.formatEditInfo=function(a,b){const {creatorField:c,creationDateField:e,editorField:d,editDateField:f}=a;if(b){a=b[f];if("number"===typeof a)return b=b[d],
{type:"edit",date:m.formatDate(a,x),user:b};a=b[e];return"number"===typeof a?(b=b[c],{type:"create",date:m.formatDate(a,x),user:b}):null}};h.formatValueToFieldInfo=H;h.getAllFieldInfos=function(a){const b=[];if(!a)return b;const {fieldInfos:c,content:e}=a;c&&b.push(...c);if(!e||!Array.isArray(e))return b;e.forEach(d=>{"fields"===d.type&&(d=d&&d.fieldInfos)&&b.push(...d)});return b};h.getFieldInfo=I;h.getFieldInfoLabel=function(a,b){return(b=R(b,null==a?void 0:a.fieldName))?b.title||null:a?a.label||
a.fieldName:null};h.getFixedFieldName=t;h.getFixedFieldNames=function(a,b){return a&&a.map(c=>t(c,b))};h.getSourceLayer=function(a){if(!p.isNone(a))return a.get("sourceLayer")||a.get("layer")};h.graphicCallback=function(a,b){return r.apply(this,arguments)};h.htmlEntities=function(a){return a.replace(ha,b=>`&#${b.charCodeAt(0)};`)};h.isExpressionField=D;h.isRelatedField=w;h.preLayerQueryCallback=({query:a,layer:b,method:c})=>{N({layer:b,method:c,query:a,definitionExpression:`${b.definitionExpression} ${b.serviceDefinitionExpression}`})};
h.preRequestCallback=({queryPayload:a,layer:b,method:c})=>{N({layer:b,method:c,query:a,definitionExpression:`${b.definitionExpression} ${b.serviceDefinitionExpression}`})};h.queryUpdatedFeature=function(a,b){return A.apply(this,arguments)};h.shouldOpenInNewTab=function(a=""){if(a)return!ia.test(a.trim().toLowerCase())};h.substituteAttributes=F;h.substituteFieldsInLinksAndAttributes=function({attributes:a,globalAttributes:b,layer:c,text:e,expressionAttributes:d,fieldInfoMap:f}){return e?F({formattedAttributes:b,
template:X(e,{...b,...d,...a},c),fieldInfoMap:f}):""};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});