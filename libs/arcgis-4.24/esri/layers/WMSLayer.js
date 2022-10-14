// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../config ../Graphic ../PopupTemplate ../request ../core/Collection ../core/CollectionFlattener ../core/HandleOwner ../core/jsonMap ../core/lang ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/reactiveUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/write ../geometry/Extent ../geometry/SpatialReference ../geometry/support/scaleUtils ../geometry/support/spatialReferenceUtils ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./ogc/crsUtils ./support/arcgisLayerUrl ./support/commonProperties ./support/ExportWMSImageParameters ./support/WMSSublayer ./support/wmsUtils".split(" "),
function(r,f,B,K,L,C,D,M,e,v,N,y,O,P,E,F,k,Q,w,R,z,S,T,x,G,U,V,W,X,Y,Z,aa,ba,ca,da,H,I,A,t){function ea(m,n){return m.some(h=>{for(const b in h)if(S.willPropertyWrite(h,b,null,n))return!0;return!1})}function J(m,n,h){const b=new Map;m.every(a=>null==a.id)&&(m=N.clone(m),m.forEach((a,d)=>a.id=d));for(const a of m){const d=new A;d.read(a,n);-1===(null==h?void 0:h.indexOf(d.name))&&(d.visible=!1);b.set(d.id,d)}n=[];for(const a of m)m=b.get(a.id),null!=a.parentLayerId&&0<=a.parentLayerId?(h=b.get(a.parentLayerId),
h.sublayers||(h.sublayers=new D),h.sublayers.unshift(m)):n.unshift(m);return n}v=new v.JSONMap({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});e=function(m){function n(...b){var a=m.call(this,...b)||this;a.allSublayers=new M({getCollections:()=>[a.sublayers],getChildrenFunction(d){return d.sublayers}});a.customParameters=null;a.customLayerParameters=null;a.copyright=null;a.description=null;a.dimensions=null;a.fullExtent=null;a.fullExtents=
null;a.featureInfoFormat=null;a.featureInfoUrl=null;a.imageFormat=null;a.imageMaxHeight=2048;a.imageMaxWidth=2048;a.imageTransparency=!0;a.legendEnabled=!0;a.mapUrl=null;a.isReference=null;a.operationalLayerType="WMS";a.spatialReference=null;a.spatialReferences=null;a.sublayers=null;a.type="wms";a.url=null;a.version=null;a.own(E.watch(()=>a.sublayers,(d,l)=>{if(l){for(const g of l)g.layer=null;a.handles.remove("wms-sublayer")}if(d){for(const g of d)g.parent=r._assertThisInitialized(a),g.layer=r._assertThisInitialized(a);
a.handles.add([d.on("after-add",({item:g})=>{g.parent=r._assertThisInitialized(a);g.layer=r._assertThisInitialized(a)}),d.on("after-remove",({item:g})=>{g.parent=null;g.layer=null})],"wms-sublayer")}},E.sync));return a}r._inheritsLoose(n,m);var h=n.prototype;h.normalizeCtorArgs=function(b,a){return"string"===typeof b?{url:b,...a}:b};h.load=function(b){const a=y.isSome(b)?b.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},b).catch(P.throwIfAbortError).then(()=>this._fetchService(a)));
return Promise.resolve(this)};h.readFullExtentFromItemOrMap=function(b,a){b=a.extent;return new T({xmin:b[0][0],ymin:b[0][1],xmax:b[1][0],ymax:b[1][1]})};h.writeFullExtent=function(b,a){a.extent=[[b.xmin,b.ymin],[b.xmax,b.ymax]]};h.readImageFormat=function(b,a){return(b=a.supportedImageFormatTypes)&&b.includes("image/png")?"image/png":b&&b[0]};h.readSpatialReferenceFromItemOrDocument=function(b,a){return new x(a.spatialReferences[0])};h.writeSpatialReferences=function(b,a){const d=this.spatialReference&&
this.spatialReference.wkid;b&&d?(a.spatialReferences=b.filter(l=>l!==d),a.spatialReferences.unshift(d)):a.spatialReferences=b};h.readSublayersFromItemOrMap=function(b,a,d){return J(a.layers,d,a.visibleLayers)};h.readSublayers=function(b,a,d){return J(a.layers,d)};h.writeSublayers=function(b,a,d,l){a.layers=[];const g=new Map;b=b.flatten(({sublayers:c})=>c&&c.toArray()).toArray();b.forEach(c=>{"number"===typeof c.parent.id&&(g.has(c.parent.id)?g.get(c.parent.id).push(c.id):g.set(c.parent.id,[c.id]))});
b.forEach(c=>{const p={sublayer:c,...l},q=c.write({parentLayerId:"number"===typeof c.parent.id?c.parent.id:-1},p);g.has(c.id)&&(q.sublayerIds=g.get(c.id));!c.sublayers&&c.name&&(c=c.write({},p),delete c.id,a.layers.push(c))});a.visibleLayers=b.filter(c=>c.visible&&!c.sublayers).map(c=>c.name)};h.createExportImageParameters=function(b,a,d,l){d=l&&l.pixelRatio||1;a=G.getScale({extent:b,width:a})*d;a=new I.ExportWMSImageParameters({layer:this,scale:a});const {xmin:g,ymin:c,xmax:p,ymax:q,spatialReference:u}=
b;b=t.normalizeWKID(u,this.spatialReferences);d="1.3.0"===this.version&&ca.isAxesOrderReversedForWkid(b)?`${c},${g},${q},${p}`:`${g},${c},${p},${q}`;a=a.toJSON();return{bbox:d,["1.3.0"===this.version?"crs":"srs"]:isNaN(b)?void 0:"EPSG:"+b,...a}};h.fetchImage=function(){var b=r._asyncToGenerator(function*(a,d,l,g){var c,p,q=this.mapUrl;a=this.createExportImageParameters(a,d,l,g);if(!a.layers)return q=document.createElement("canvas"),q.width=d,q.height=l,q;const u=null==g?void 0:null==(c=g.timeExtent)?
void 0:c.start;c=null==g?void 0:null==(p=g.timeExtent)?void 0:p.end;p=y.isSome(u)&&y.isSome(c)?u.getTime()===c.getTime()?t.toISOString(u):`${t.toISOString(u)}/${t.toISOString(c)}`:void 0;d={responseType:"image",query:this._mixCustomParameters({width:d,height:l,...a,time:p,...this.refreshParameters}),signal:null==g?void 0:g.signal};return C(q,d).then(fa=>fa.data)});return function(a,d,l,g){return b.apply(this,arguments)}}();h.fetchFeatureInfo=function(b,a,d,l,g){var c=G.getScale({extent:b,width:a});
c=new I.ExportWMSImageParameters({layer:this,scale:c});c=t.getPopupLayers(c.visibleSublayers);if(!this.featureInfoUrl||!c)return null;l={query_layers:c,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:a,height:d,..."1.3.0"===this.version?{I:l,J:g}:{x:l,y:g}};b={...this.createExportImageParameters(b,a,d),...l};b=this._mixCustomParameters(b);b=F.addQueryParameters(this.featureInfoUrl,b);a=document.createElement("iframe");a.src=b;a.style.border="none";a.style.margin=
"0";a.style.width="100%";a.setAttribute("sandbox","");b=new L({title:this.title,content:a});return new K({sourceLayer:this,popupTemplate:b})};h.findSublayerById=function(b){return this.allSublayers.find(a=>a.id===b)};h.findSublayerByName=function(b){return this.allSublayers.find(a=>a.name===b)};h.serviceSupportsSpatialReference=function(b){return da.isWmsServer(this.url)||this.spatialReferences.some(a=>{a=900913===a?x.WebMercator:new x({wkid:a});return U.equals(a,b)})};h._fetchService=function(){var b=
r._asyncToGenerator(function*(a){this.resourceInfo||(this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request),a=yield C(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:a}),
this.resourceInfo=t.parseCapabilities(a.data));this.parsedUrl&&(a=new F.Url(this.parsedUrl.path),"https"!==a.scheme||a.port&&"443"!==a.port||B.request.httpsDomains.includes(a.host)||B.request.httpsDomains.push(a.host));this.read(this.resourceInfo,{origin:"service"})});return function(a){return b.apply(this,arguments)}}();h._mixCustomParameters=function(b){if(!this.customLayerParameters&&!this.customParameters)return b;const a={...this.customParameters,...this.customLayerParameters};for(const d in a)b[d.toLowerCase()]=
a[d];return b};return n}(e.HandleOwnerMixin(W.BlendLayer(ba.TemporalLayer(Z.RefreshableLayer(aa.ScaleRangeLayer(X.OperationalLayer(Y.PortalLayer(O.MultiOriginJSONMixin(V)))))))));f.__decorate([k.property({readOnly:!0})],e.prototype,"allSublayers",void 0);f.__decorate([k.property({json:{type:Object,write:!0}})],e.prototype,"customParameters",void 0);f.__decorate([k.property({json:{type:Object,write:!0}})],e.prototype,"customLayerParameters",void 0);f.__decorate([k.property({type:String,json:{write:!0}})],
e.prototype,"copyright",void 0);f.__decorate([k.property()],e.prototype,"description",void 0);f.__decorate([k.property({readOnly:!0})],e.prototype,"dimensions",void 0);f.__decorate([k.property({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],e.prototype,"fullExtent",void 0);f.__decorate([w.reader(["web-document","portal-item"],"fullExtent",["extent"])],e.prototype,"readFullExtentFromItemOrMap",
null);f.__decorate([z.writer(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],e.prototype,"writeFullExtent",null);f.__decorate([k.property()],e.prototype,"fullExtents",void 0);f.__decorate([k.property({type:String,json:{write:{ignoreOrigin:!0}}})],e.prototype,"featureInfoFormat",void 0);f.__decorate([k.property({type:String,json:{write:{ignoreOrigin:!0}}})],e.prototype,"featureInfoUrl",void 0);f.__decorate([k.property({type:String,json:{origins:{"web-document":{default:"image/png",
type:v.jsonValues,read:{reader:v.read,source:"format"},write:{writer:v.write,target:"format"}}}}})],e.prototype,"imageFormat",void 0);f.__decorate([w.reader("imageFormat",["supportedImageFormatTypes"])],e.prototype,"readImageFormat",null);f.__decorate([k.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],e.prototype,"imageMaxHeight",void 0);f.__decorate([k.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],e.prototype,"imageMaxWidth",
void 0);f.__decorate([k.property()],e.prototype,"imageTransparency",void 0);f.__decorate([k.property(H.legendEnabled)],e.prototype,"legendEnabled",void 0);f.__decorate([k.property({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0);f.__decorate([k.property({type:String,json:{write:{ignoreOrigin:!0}}})],e.prototype,"mapUrl",void 0);f.__decorate([k.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],e.prototype,"isReference",void 0);f.__decorate([k.property({type:["WMS"]})],
e.prototype,"operationalLayerType",void 0);f.__decorate([k.property()],e.prototype,"resourceInfo",void 0);f.__decorate([k.property({type:x,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],e.prototype,"spatialReference",void 0);f.__decorate([w.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],e.prototype,"readSpatialReferenceFromItemOrDocument",null);f.__decorate([k.property({type:[Q.Integer],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,
write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],e.prototype,"spatialReferences",void 0);f.__decorate([z.writer(["web-document","portal-item"],"spatialReferences")],e.prototype,"writeSpatialReferences",null);f.__decorate([k.property({type:D.ofType(A),json:{write:{target:"layers",overridePolicy(m,n,h){if(ea(this.allSublayers,h))return{ignoreOrigin:!0}}}}})],e.prototype,"sublayers",void 0);f.__decorate([w.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],
e.prototype,"readSublayersFromItemOrMap",null);f.__decorate([w.reader("service","sublayers",["layers"])],e.prototype,"readSublayers",null);f.__decorate([z.writer("sublayers",{layers:{type:[A]},visibleLayers:{type:[String]}})],e.prototype,"writeSublayers",null);f.__decorate([k.property({json:{read:!1},readOnly:!0,value:"wms"})],e.prototype,"type",void 0);f.__decorate([k.property(H.url)],e.prototype,"url",void 0);f.__decorate([k.property({type:String,json:{write:{ignoreOrigin:!0}}})],e.prototype,"version",
void 0);return e=f.__decorate([R.subclass("esri.layers.WMSLayer")],e)});