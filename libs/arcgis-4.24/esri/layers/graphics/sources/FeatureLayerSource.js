// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../request ../../../TimeExtent ../../../core/Error ../../../core/has ../../../core/jsonMap ../../../core/Loadable ../../../core/maybe ../../../core/object ../../../core/promiseUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Extent ../../../geometry/support/jsonUtils ./support/clientSideDefaults ./support/QueryTask ../../../rest/query/operations/editsZScale ../../../rest/query/operations/queryAttachments ../../../geometry/SpatialReference".split(" "),
function(k,w,t,E,r,F,x,B,G,H,y,I,J,C,z,V,W,K,L,M,N,O,P,Q,R){function S(q){return A.apply(this,arguments)}function A(){A=k._asyncToGenerator(function*(q){if("string"===typeof q){const n=C.dataComponents(q);return n?n:{data:q}}return new Promise((n,e)=>{const c=new FileReader;c.readAsDataURL(q);c.onload=()=>n(C.dataComponents(c.result));c.onerror=a=>e(a)})});return A.apply(this,arguments)}const T=new G.JSONMap({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),U=new Set(["Feature Layer",
"Table"]);t=function(q){function n(){var c=q.apply(this,arguments)||this;c.type="feature-layer";c.refresh=J.debounce(k._asyncToGenerator(function*(){var a,b;yield c.load();const f=null==(a=c.sourceJSON.editingInfo)?void 0:a.lastEditDate;if(null==f)return{dataChanged:!0,updates:{}};try{yield c._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}a=f!==(null==(b=c.sourceJSON.editingInfo)?void 0:b.lastEditDate);return{dataChanged:a,updates:a?{editingInfo:c.sourceJSON.editingInfo,extent:c.sourceJSON.extent}:
null}}));return c}k._inheritsLoose(n,q);var e=n.prototype;e.load=function(c){c=y.isSome(c)?c.signal:null;this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,c));return Promise.resolve(this)};e.addAttachment=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();a=a.attributes[this.layer.objectIdField];const f=this.layer.parsedUrl.path+"/"+a+"/addAttachment",g=this._getLayerRequestOptions();b=this._getFormDataForAttachment(b,g.query);try{const d=yield r(f,{body:b});return this._createFeatureEditResult(d.data.addAttachmentResult)}catch(d){throw this._createAttachmentErrorResult(a,
d);}});return function(a,b){return c.apply(this,arguments)}}();e.updateAttachment=function(){var c=k._asyncToGenerator(function*(a,b,f){yield this.load();a=a.attributes[this.layer.objectIdField];const g=this.layer.parsedUrl.path+"/"+a+"/updateAttachment";b=this._getLayerRequestOptions({query:{attachmentId:b}});f=this._getFormDataForAttachment(f,b.query);try{const d=yield r(g,{body:f});return this._createFeatureEditResult(d.data.updateAttachmentResult)}catch(d){throw this._createAttachmentErrorResult(a,
d);}});return function(a,b,f){return c.apply(this,arguments)}}();e.applyEdits=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();var f=a.addFeatures.map(this._serializeFeature,this);const g=a.updateFeatures.map(this._serializeFeature,this),d=this._getFeatureIds(a.deleteFeatures,null==b?void 0:b.globalIdUsed);P.unapplyEditsZUnitScaling(f,g,this.layer.spatialReference);var h=[];const l=[],m=[...a.deleteAttachments];for(const p of a.addAttachments)h.push(yield this._serializeAttachment(p));
for(const p of a.updateAttachments)l.push(yield this._serializeAttachment(p));a=h.length||l.length||m.length?{adds:h,updates:l,deletes:m}:null;h={gdbVersion:(null==b?void 0:b.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==b?void 0:b.rollbackOnFailureEnabled,useGlobalIds:null==b?void 0:b.globalIdUsed,returnEditMoment:null==b?void 0:b.returnEditMoment,usePreviousEditMoment:null==b?void 0:b.usePreviousEditMoment,sessionId:null==b?void 0:b.sessionId};null!=b&&b.returnServiceEditsOption?(h.edits=
JSON.stringify([{id:this.layer.layerId,adds:f,updates:g,deletes:d,attachments:a}]),h.returnServiceEditsOption=T.toJSON(null==b?void 0:b.returnServiceEditsOption),h.returnServiceEditsInSourceSR=null==b?void 0:b.returnServiceEditsInSourceSR):(h.adds=f.length?JSON.stringify(f):null,h.updates=g.length?JSON.stringify(g):null,h.deletes=d.length?null!=b&&b.globalIdUsed?JSON.stringify(d):d.join(","):null,h.attachments=a&&JSON.stringify(a));f=this._getLayerRequestOptions({method:"post",query:h});b=yield r((null!=
b&&b.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path)+"/applyEdits",f);return this._createEditsResult(b)});return function(a,b){return c.apply(this,arguments)}}();e.deleteAttachments=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();a=a.attributes[this.layer.objectIdField];const f=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(yield r(f,this._getLayerRequestOptions({query:{attachmentIds:b.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(g){throw this._createAttachmentErrorResult(a,
g);}});return function(a,b){return c.apply(this,arguments)}}();e.fetchRecomputedExtents=function(c={}){var a=this;return this.load({signal:c.signal}).then(k._asyncToGenerator(function*(){var b=a._getLayerRequestOptions({...c,query:{returnUpdates:!0}});const {layerId:f,url:g}=a.layer;({data:b}=yield r(`${g}/${f}`,b));const {id:d,extent:h,fullExtent:l,timeExtent:m}=b;b=h||l;return{id:d,fullExtent:b&&L.fromJSON(b),timeExtent:m&&F.fromJSON({start:m[0],end:m[1]})}}))};e.queryAttachments=function(){var c=
k._asyncToGenerator(function*(a,b={}){const {parsedUrl:f}=this.layer,g=f.path;yield this.load();b=this._getLayerRequestOptions(b);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const {objectIds:d}=a;a=[];for(const h of d)a.push(r(g+"/"+h+"/attachments",b));return Promise.all(a).then(h=>d.map((l,m)=>({parentObjectId:l,attachmentInfos:h[m].data.attachmentInfos}))).then(h=>Q.processAttachmentQueryResult(h,g))}return this.queryTask.executeAttachmentQuery(a,b)});return function(a){return c.apply(this,
arguments)}}();e.queryFeatures=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.execute(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryFeaturesJSON=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeJSON(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryObjectIds=function(){var c=
k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeForIds(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryFeatureCount=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeForCount(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryExtent=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();
return this.queryTask.executeForExtent(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryRelatedFeatures=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeRelationshipQuery(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryRelatedFeaturesCount=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeRelationshipQueryForCount(a,
{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryTopFeatures=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeTopFeaturesQuery(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryTopObjectIds=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeForTopIds(a,{...b,query:this._createRequestQueryOptions(b)})});
return function(a,b){return c.apply(this,arguments)}}();e.queryTopExtents=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeForTopExtents(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,arguments)}}();e.queryTopCount=function(){var c=k._asyncToGenerator(function*(a,b){yield this.load();return this.queryTask.executeForTopCount(a,{...b,query:this._createRequestQueryOptions(b)})});return function(a,b){return c.apply(this,
arguments)}}();e._createRequestQueryOptions=function(c){c={...this.layer.customParameters,token:this.layer.apiKey,...null==c?void 0:c.query};this.layer.datesInUnknownTimezone&&(c.timeReferenceUnknownClient=!0);return c};e._fetchService=function(){var c=k._asyncToGenerator(function*(a,b){a||({data:a}=yield r(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:B("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:b})));this.sourceJSON=this._patchServiceJSON(a);a=a.type;if(!U.has(a))throw new x("feature-layer-source:unsupported-type",
`Source type "${a}" is not supported`);});return function(a,b){return c.apply(this,arguments)}}();e._patchServiceJSON=function(c){var a;"Table"===c.type||!c.geometryType||null!=c&&null!=(a=c.drawingInfo)&&a.renderer||c.defaultSymbol||(a=N.createDrawingInfo(c.geometryType).renderer,I.setDeepValue("drawingInfo.renderer",a,c));"esriGeometryMultiPatch"===c.geometryType&&c.infoFor3D&&(c.geometryType="mesh");return c};e._serializeFeature=function(c){const {geometry:a,attributes:b}=c;return y.isNone(a)?
{attributes:b}:"mesh"===a.type||"extent"===a.type?null:{geometry:a.toJSON(),attributes:b}};e._serializeAttachment=function(){var c=k._asyncToGenerator(function*(a){const {feature:b,attachment:f}=a,{globalId:g,name:d,contentType:h,data:l,uploadId:m}=f;a={globalId:g,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};b&&(a.parentGlobalId="attributes"in b?b.attributes&&b.attributes[this.layer.globalIdField]:b.globalId);if(m)a.uploadId=m;else if(l){const p=yield S(l);a.contentType=
p.mediaType;a.data=p.data;l instanceof File&&(a.name=l.name)}d&&(a.name=d);h&&(a.contentType=h);return a});return function(a){return c.apply(this,arguments)}}();e._getFeatureIds=function(c,a){const b=c[0];return b?this._canUseGlobalIds(a,c)?this._getGlobalIdsFromFeatureIdentifier(c):"objectId"in b?this._getObjectIdsFromFeatureIdentifier(c):this._getIdsFromFeatures(c):[]};e._getIdsFromFeatures=function(c){const a=this.layer.objectIdField;return c.map(b=>b.attributes&&b.attributes[a])};e._canUseGlobalIds=
function(c,a){return c&&"globalId"in a[0]};e._getObjectIdsFromFeatureIdentifier=function(c){return c.map(a=>a.objectId)};e._getGlobalIdsFromFeatureIdentifier=function(c){return c.map(a=>a.globalId)};e._createEditsResult=function(c){var a;const b=c.data,{layerId:f}=this.layer;c=[];let g=null;if(Array.isArray(b))for(var d of b)c.push({id:d.id,editedFeatures:d.editedFeatures}),d.id===f&&(g={addResults:d.addResults,updateResults:d.updateResults,deleteResults:d.deleteResults,attachments:d.attachments,
editMoment:d.editMoment});else g=b;d=null==(a=g)?void 0:a.attachments;a={addFeatureResults:g.addResults?g.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:g.updateResults?g.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:g.deleteResults?g.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:d&&d.addResults?d.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:d&&d.updateResults?d.updateResults.map(this._createFeatureEditResult,
this):[],deleteAttachmentResults:d&&d.deleteResults?d.deleteResults.map(this._createFeatureEditResult,this):[]};g.editMoment&&(a.editMoment=g.editMoment);if(0<c.length){a.editedFeatureResults=[];for(const h of c){const {adds:l,updates:m,deletes:p,spatialReference:D}=h.editedFeatures,v=D?new R(D):null;a.editedFeatureResults.push({layerId:h.id,editedFeatures:{adds:(null==l?void 0:l.map(u=>this._createEditedFeature(u,v)))||[],updates:(null==m?void 0:m.map(u=>({original:this._createEditedFeature(u[0],
v),current:this._createEditedFeature(u[1],v)})))||[],deletes:(null==p?void 0:p.map(u=>this._createEditedFeature(u,v)))||[],spatialReference:v}})}}return a};e._createEditedFeature=function(c,a){return new E({attributes:c.attributes,geometry:M.fromJSON({...c.geometry,spatialReference:a})})};e._createFeatureEditResult=function(c){const a=!0===c.success?null:c.error||{code:void 0,description:void 0};return{objectId:c.objectId,globalId:c.globalId,error:a?new x("feature-layer-source:edit-failure",a.description,
{code:a.code}):null}};e._createAttachmentErrorResult=function(c,a){return{objectId:c,globalId:null,error:new x("feature-layer-source:attachment-failure",a.details.messages&&a.details.messages[0]||a.message,{code:a.details.httpStatus||a.details.messageCode})}};e._getFormDataForAttachment=function(c,a){if(c=c instanceof FormData?c:c&&c.elements?new FormData(c):null)for(const b in a){const f=a[b];null!=f&&(c.set?c.set(b,f):c.append(b,f))}return c};e._getLayerRequestOptions=function(c={}){const {parsedUrl:a,
gdbVersion:b,dynamicDataSource:f}=this.layer;return{...c,query:{gdbVersion:b,layer:f?JSON.stringify({source:f}):void 0,...a.query,f:"json",...this._createRequestQueryOptions(c)},responseType:"json"}};k._createClass(n,[{key:"queryTask",get:function(){const {capabilities:{query:{supportsFormatPBF:c}},parsedUrl:a,dynamicDataSource:b,infoFor3D:f,gdbVersion:g,spatialReference:d,fieldsIndex:h}=this.layer,l=B("featurelayer-pbf")&&c&&y.isNone(f)?"pbf":"json";return new O({url:a.path,format:l,fieldsIndex:h,
infoFor3D:f,dynamicDataSource:b,gdbVersion:g,sourceSpatialReference:d})}}]);return n}(H);w.__decorate([z.property()],t.prototype,"type",void 0);w.__decorate([z.property({constructOnly:!0})],t.prototype,"layer",void 0);w.__decorate([z.property({readOnly:!0})],t.prototype,"queryTask",null);return t=w.__decorate([K.subclass("esri.layers.graphics.sources.FeatureLayerSource")],t)});