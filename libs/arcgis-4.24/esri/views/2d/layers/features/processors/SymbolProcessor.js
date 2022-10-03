// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/BidiText ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/accessorSupport/set ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/accessorSupport/diffUtils ../../../../../geometry/SpatialReference ../../../engine/webgl/DisplayId ../../../engine/webgl/mesh/MeshData ../../../engine/webgl/mesh/factories/WGLMeshFactory ../../../engine/webgl/mesh/templates/WGLTemplateStore ../../../engine/webgl/util/Matcher ../textUtils ./BaseProcessor ../support/ResourceManagerProxy".split(" "),
function(v,H,I,A,U,J,q,w,V,W,X,K,C,L,M,N,O,P,D,Q,R,S){function E(n,r){return(!n.minScale||n.minScale>=r)&&(!n.maxScale||n.maxScale<=r)}function F(n){n=n.message;const r={message:{data:{},tileKey:n.tileKey,tileKeyOrigin:n.tileKeyOrigin,version:n.version},transferList:[]};for(const a in n.data){var f=n.data[a];r.message.data[a]=null;if(q.isSome(f)){var b=f.stride;const c=f.indices.slice(0),d=f.vertices.slice(0),e=f.records.slice(0);f=q.applySome(f.metrics,g=>g.slice(0));b={stride:b,indices:c,vertices:d,
records:e,metrics:f};r.transferList.push(c,d,e);r.message.data[a]=b}}return r}J.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");A=function(n){function r(){var b=n.apply(this,arguments)||this;b.type="symbol";b._matchers={feature:null,aggregate:null};b._bufferData=new Map;b._bufferIds=new Map;return b}v._inheritsLoose(r,n);var f=r.prototype;f.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);this._resourceManagerProxy=new S(this.remoteClient)};
f.destroy=function(){this._resourceManagerProxy.destroy()};f.forEachBufferId=function(b){this._bufferIds.forEach(a=>{a.forEach(b)})};f.update=function(){var b=v._asyncToGenerator(function*(a,c){c=c.schema.processors[0];if("symbol"===c.type){var d=C.diff(this._schema,c);C.hasDiff(d,"mesh")&&(a.mesh=!0,a.why.mesh.push("Symbology changed"),this._schema=c,this._factory=this._createFactory(c),this._factory.update(c,this.tileStore.tileScheme.tileInfo))}});return function(a,c){return b.apply(this,arguments)}}();
f.onTileMessage=function(b,a,c,d){w.throwIfAborted(d);return this._onTileData(b,a,c,d)};f.onTileClear=function(b){this._bufferData.delete(b.key.id);this._bufferIds.delete(b.key.id);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:b.id,data:{clear:!0}})};f.onTileError=function(b,a,c){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:b.id,error:a},{signal:c.signal})};f.onTileUpdate=function(b){for(const a of b.removed)this._bufferData.has(a.key.id)&&this._bufferData.delete(a.key.id),
this._bufferIds.has(a.key.id)&&this._bufferIds.delete(a.key.id);for(const a of b.added)this._bufferData.forEach(c=>{for(const d of c)d.message.tileKey===a.id&&this._updateTileMesh("append",a,F(d),[],!1,!1,null)})};f._addBufferData=function(b,a){this._bufferData.has(b)||this._bufferData.set(b,[]);this._bufferData.get(b).push(F(a))};f._createFactory=function(b){const {geometryType:a,objectIdField:c,fields:d}=this.service,e=L.fromJSON(this.spatialReference),g={geometryType:a,fields:d,spatialReference:e},
h=new P.WGLTemplateStore((p,m)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",p,m),this.tileStore.tileScheme.tileInfo),{matcher:k,aggregateMatcher:l}=b.mesh;this._store=h;this._matchers.feature=D.createMatcher(k,h,g,this._resourceManagerProxy);this._matchers.aggregate=q.applySome(l,p=>D.createMatcher(p,h,g,this._resourceManagerProxy));return new O.WGLMeshFactory(a,c,h)};f._onTileData=function(){var b=v._asyncToGenerator(function*(a,c,d,e){w.throwIfAborted(e);const {type:g,addOrUpdate:h,
remove:k,clear:l,end:p}=c;var m=!!this._schema.mesh.sortKey;if(!h)return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:a.id,data:{type:g,addOrUpdate:null,remove:k,clear:l,end:p,sort:m}},e);d=this._processFeatures(a,h,d,e,c.status.version);try{var u=yield d;if(q.isNone(u))return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:a.id,data:{type:g,addOrUpdate:null,remove:k,clear:l,end:p,sort:m}},e);m=[];for(const t of u){u=!1;const x=t.message.bufferIds,B=a.key.id,z=t.message.tileKey;
if(B!==z&&q.isSome(x)){if(!this.tileStore.get(z)){this._addBufferData(B,t);m.push(t);continue}let y=this._bufferIds.get(z);y||(y=new Set,this._bufferIds.set(z,y));const T=Array.from(x);for(const G of T)if(y.has(G)){u=!0;break}else y.add(G)}u||(this._addBufferData(B,t),m.push(t))}yield Promise.all(m.map(t=>{const x=a.key.id===t.message.tileKey;return this._updateTileMesh(g,a,t,x?c.remove:[],x&&c.end,c.clear,e.signal)}))}catch(t){this._handleError(a,t,e)}});return function(a,c,d,e){return b.apply(this,
arguments)}}();f._updateTileMesh=function(){var b=v._asyncToGenerator(function*(a,c,d,e,g,h,k){const l=d.message.tileKey,p=!!this._schema.mesh.sortKey;l!==c.key.id&&(g=!1);c=q.applySome(d,m=>m.message);d=q.applySome(d,m=>m.transferList)||[];a={type:a,addOrUpdate:c,remove:e,clear:h,end:g,sort:p};k={transferList:q.unwrap(d)||[],signal:k};w.throwIfAborted(k);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:l,data:a},k)});return function(a,c,d,e,g,h,k){return b.apply(this,arguments)}}();
f._processFeatures=function(){var b=v._asyncToGenerator(function*(a,c,d,e,g){if(q.isNone(c)||!c.hasFeatures)return null;const h={transform:a.transform,hasZ:!1,hasM:!1},k=this._factory,l={viewingMode:"",scale:a.scale},p=yield this._matchers.feature,m=yield this._matchers.aggregate;w.throwIfAborted(e);const u=this._getLabelInfos(a,c);yield k.analyze(c.getCursor(),this._resourceManagerProxy,p,m,h,l);w.throwIfAborted(e);return this._writeFeatureSet(a,c,h,u,k,d,g)});return function(a,c,d,e,g){return b.apply(this,
arguments)}}();f._writeFeatureSet=function(b,a,c,d,e,g,h){const k=a.getSize();g=new N.MeshData(b.key.id,{features:k,records:k,metrics:0},this._schema.mesh.matcher.symbologyType,g,!0,h);h={viewingMode:"",scale:b.scale};for(a=a.getCursor();a.next();)try{const l=a.getDisplayId(),p=q.isSome(d)?d.get(l):null;e.writeCursor(g,a,c,h,b.level,p,this._resourceManagerProxy)}catch(l){}return g.serialize(b.tileInfoView.tileInfo.isWrappable)};f._handleError=function(b,a,c){if(!w.isAbortError(a))return this.remoteClient.invoke("tileRenderer.onTileError",
{tileKey:b.id,error:a.message},{signal:c.signal})};f._getLabelingSchemaForScale=function(b){var a=this._schema.mesh.labels;if(q.isNone(a))return null;if("subtype"===a.type){const c={type:"subtype",classes:{}};let d=!1;for(const e in a.classes){const g=a.classes[e].filter(h=>E(h,b.scale));d=d||!!g.length;c.classes[e]=g}return d?c:null}a=a.classes.filter(c=>E(c,b.scale));return a.length?{type:"simple",classes:a}:null};f._getLabels=function(b,a){if("subtype"===a.type){var c;const d=q.unwrapOrThrow(this.service.subtypeField,
"Expected to find subtype Field");b=b.readAttribute(d);return null==b?[]:null!=(c=a.classes[b])?c:[]}return a.classes};f._getLabelInfos=function(b,a){b=this._getLabelingSchemaForScale(b);if(q.isNone(b))return null;const c=new Map;for(a=a.getCursor();a.next();){const e=a.getDisplayId(),g=[],h=M.isAggregateId(e),k=h&&1!==a.readAttribute("cluster_count")?"aggregate":"feature";var d=this._getLabels(a,b);for(const l of d){if(l.target!==k)continue;d=a.getStorage();d=h&&"feature"===k?d.getComputedStringAtIndex(a.readAttribute("referenceId"),
l.fieldIndex):d.getComputedStringAtIndex(e,l.fieldIndex);if(!d)continue;d=I.bidiText(d.toString());const p=d[1];this._store.getMosaicItem(l.symbol,Q.codepoints(d[0])).then(m=>{g[l.index]={glyphs:m.glyphMosaicItems,rtl:p,index:l.index}})}c.set(e,g)}return c};v._createClass(r,[{key:"supportsTileUpdates",get:function(){return!0}}]);return r}(R);return A=H.__decorate([K.subclass("esri.views.2d.layers.features.processors.SymbolProcessor")],A)});