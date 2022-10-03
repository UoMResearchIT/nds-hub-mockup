// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../config ../kernel ../request ../core/Error ../core/JSONSupport ../core/Loadable ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/Extent ../intl/locale ./PortalQueryParams ./PortalQueryResult ./PortalUser ../support/apiKeyUtils".split(" "),
function(v,B,c,y,z,G,A,b,H,I,t,d,Q,R,J,u,K,L,C,D,M,N,O){const w=p=>Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));var m;let E;const F={PortalGroup:()=>new Promise((p,n)=>v(["./PortalGroup"],h=>p(w(h)),n)),PortalItem:()=>new Promise((p,n)=>v(["./PortalItem"],h=>p(w(h)),n)),PortalUser:()=>new Promise((p,n)=>v(["./PortalUser"],h=>p(w(h)),n))};b=m=function(p){function n(a){a=p.call(this,a)||this;a.access=null;a.allSSL=!1;a.authMode="auto";a.authorizedCrossOriginDomains=
null;a.basemapGalleryGroupQuery=null;a.bingKey=null;a.canListApps=!1;a.canListData=!1;a.canListPreProvisionedItems=!1;a.canProvisionDirectPurchase=!1;a.canSearchPublic=!0;a.canShareBingPublic=!1;a.canSharePublic=!1;a.canSignInArcGIS=!1;a.canSignInIDP=!1;a.colorSetsGroupQuery=null;a.commentsEnabled=!1;a.created=null;a.culture=null;a.customBaseUrl=null;a.defaultBasemap=null;a.defaultDevBasemap=null;a.defaultExtent=null;a.defaultVectorBasemap=null;a.description=null;a.devBasemapGalleryGroupQuery=null;
a.eueiEnabled=null;a.featuredGroups=null;a.featuredItemsGroupQuery=null;a.galleryTemplatesGroupQuery=null;a.livingAtlasGroupQuery=null;a.hasCategorySchema=!1;a.helperServices=null;a.homePageFeaturedContent=null;a.homePageFeaturedContentCount=null;a.httpPort=null;a.httpsPort=null;a.id=null;a.ipCntryCode=null;a.isPortal=!1;a.isReadOnly=!1;a.layerTemplatesGroupQuery=null;a.maxTokenExpirationMinutes=null;a.modified=null;a.name=null;a.portalHostname=null;a.portalMode=null;a.portalProperties=null;a.region=
null;a.rotatorPanels=null;a.showHomePageDescription=!1;a.sourceJSON=null;a.supportsHostedServices=!1;a.symbolSetsGroupQuery=null;a.templatesGroupQuery=null;a.units=null;a.url=y.portalUrl;a.urlKey=null;a.user=null;a.useStandardizedQuery=!1;a.useVectorBasemaps=!1;a.vectorBasemapGalleryGroupQuery=null;return a}B._inheritsLoose(n,p);var h=n.prototype;h.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a};h.destroy=function(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),
this._esriId_credentialCreateHandle=null)};h.readAuthorizedCrossOriginDomains=function(a){if(a)for(const e of a)y.request.trustedServers.includes(e)||y.request.trustedServers.push(e);return a};h.readDefaultBasemap=function(a){return this._readBasemap(a)};h.readDefaultDevBasemap=function(a){return this._readBasemap(a)};h.readDefaultVectorBasemap=function(a){return this._readBasemap(a)};h.readUrlKey=function(a){return a?a.toLowerCase():a};h.readUser=function(a){let e=null;a&&(e=N.fromJSON(a),e.portal=
this);return e};h.load=function(a){const e=(new Promise((f,g)=>v(["../Basemap"],k=>f(w(k)),g))).then(({default:f})=>{t.throwIfAborted(a);E=f}).then(()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,a)).then(f=>{if(z.id){const g=z.id;this.credential=g.findCredential(this.restUrl);this.credential||this.authMode!==m.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=g.on("credential-create",()=>{g.findCredential(this.restUrl)&&this._signIn()}))}this.sourceJSON=f;this.read(f)});this.addResolvingPromise(e);
return Promise.resolve(this)};h.createElevationLayers=function(){var a=B._asyncToGenerator(function*(){yield this.load();const e=this._getHelperService("defaultElevationLayers"),f=(yield new Promise((g,k)=>v(["../layers/ElevationLayer"],l=>g(w(l)),k))).default;return e?e.map(g=>new f({id:g.id,url:g.url})):[]});return function(){return a.apply(this,arguments)}}();h.fetchBasemaps=function(a,e){const f=new D;f.query=a||(y.apiKey&&O.supportsApiKey(this.url)?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?
this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery);f.disableExtraQuery=!0;return this.queryGroups(f,e).then(g=>{f.num=100;f.query='type:"Web Map" -type:"Web Application"';return g.total?(g=g.results[0],f.sortField=g.sortField||"name",f.sortOrder=g.sortOrder||"desc",g.queryItems(f,e)):null}).then(g=>g&&g.total?g.results.filter(k=>"Web Map"===k.type).map(k=>new E({portalItem:k})):[])};h.fetchCategorySchema=function(a){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",
a).then(e=>e.categorySchema):t.isAborted(a)?Promise.reject(t.createAbortError()):Promise.resolve([])};h.fetchFeaturedGroups=function(a){const e=this.featuredGroups,f=new D;f.num=100;f.sortField="title";if(e&&e.length){const g=[];for(const k of e)g.push(`(title:"${k.title}" AND owner:${k.owner})`);f.query=g.join(" OR ");return this.queryGroups(f,a).then(k=>k.results)}return t.isAborted(a)?Promise.reject(t.createAbortError()):Promise.resolve([])};h.fetchRegions=function(a){var e;const f=(null==(e=this.user)?
void 0:e.culture)||this.culture||C.getLocale();return this._request(this.restUrl+"/portals/regions",{...a,query:{culture:f}})};h.fetchSettings=function(a){var e;const f=(null==(e=this.user)?void 0:e.culture)||this.culture||C.getLocale();return this._request(this.restUrl+"/portals/self/settings",{...a,query:{culture:f}})};n.getDefault=function(){if(!m._default||m._default.destroyed)m._default=new m;return m._default};h.queryGroups=function(a,e){return this._queryPortal("/community/groups",a,"PortalGroup",
e)};h.queryItems=function(a,e){return this._queryPortal("/search",a,"PortalItem",e)};h.queryUsers=function(a,e){a.sortField||(a.sortField="username");return this._queryPortal("/community/users",a,"PortalUser",e)};h.toJSON=function(){throw new A("internal:not-yet-implemented","Portal.toJSON is not yet implemented");};n.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");return new m({sourceJSON:a})};h._getHelperService=function(a){const e=this.helperServices&&
this.helperServices[a];if(!e)throw new A("portal:service-not-found",`The \`helperServices\` do not include an entry named "${a}"`);return e};h._getHelperServiceUrl=function(a){const e=this._getHelperService(a);if(!e.url)throw new A("portal:service-url-not-found",`The \`helperServices\` entry "${a}" does not include a \`url\` value`);return e.url};h._fetchSelf=function(a=this.authMode,e=!1,f){const g=this.restUrl+"/portals/self";a={authMode:a,query:{culture:C.getLocale().toLowerCase()},...f};"auto"===
a.authMode&&(a.authMode="no-prompt");e&&(a.query.default=!0);return this._request(g,a)};h._queryPortal=function(a,e,f,g){const k=J.ensureType(D,e),l=x=>this._request(this.restUrl+a,{...k.toRequestOptions(this),...g}).then(q=>{const r=k.clone();r.start=q.nextStart;return new M({nextQueryParams:r,queryParams:k,total:q.total,results:m._resultsToTypedArray(x,{portal:this},q,g)})}).then(q=>Promise.all(q.results.map(r=>"function"===typeof r.when?r.when():q)).then(()=>q,r=>{t.throwIfAbortError(r);return q}));
return f&&F[f]?F[f]().then(({default:x})=>{t.throwIfAborted(g);return l(x)}):l()};h._signIn=function(){if(this.authMode===m.AUTH_MODE_ANONYMOUS)return Promise.reject(new A("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`));if("failed"===this.loadStatus)return Promise.reject(this.loadError);const a=e=>Promise.resolve().then(()=>{if("not-loaded"===this.loadStatus)return e||(this.authMode="immediate"),this.load().then(()=>null);if("loading"===this.loadStatus)return this.load().then(()=>
{if(this.credential)return null;this.credential=e;return this._fetchSelf("immediate")});if(this.user&&this.credential===e)return null;this.credential=e;return this._fetchSelf("immediate")}).then(f=>{f&&(this.sourceJSON=f,this.read(f))});return z.id?z.id.getCredential(this.restUrl).then(e=>a(e)):a(this.credential)};h._normalizeSSL=function(a){return a.replace(/^http:/i,"https:").replace(":7080",":7443")};h._normalizeUrl=function(a){const e=this.credential&&this.credential.token;return this._normalizeSSL(e?
a+(a.includes("?")?"\x26":"?")+"token\x3d"+e:a)};h._requestToTypedArray=function(a,e,f){return this._request(a,e).then(g=>{const k=m._resultsToTypedArray(f,{portal:this},g);return Promise.all(k.map(l=>"function"===typeof l.when?l.when():g)).then(()=>k,()=>k)})};h._readBasemap=function(a){return a?(a=E.fromJSON(a),a.portalItem={portal:this},a):null};h._request=function(a,e={}){const f={f:"json",...e.query},{authMode:g=this.authMode===m.AUTH_MODE_ANONYMOUS?"anonymous":"auto",body:k=null,cacheBust:l=
!1,method:x="auto",responseType:q="json",signal:r}=e;e={authMode:g,body:k,cacheBust:l,method:x,query:f,responseType:q,timeout:0,signal:r};return G(this._normalizeSSL(a),e).then(P=>P.data)};n._resultsToTypedArray=function(a,e,f,g){if(f){const k=I.isSome(g)?g.signal:null;f=f.listings||f.notifications||f.userInvitations||f.tags||f.items||f.groups||f.comments||f.provisions||f.results||f.relatedItems||f;if(a||e)f=f.map(l=>{l=Object.assign(a?a.fromJSON(l):l,e);"function"===typeof l.load&&l.load(k);return l})}else f=
[];return f};B._createClass(n,[{key:"extraQuery",get:function(){const a=!(this.user&&this.user.orgId)||this.canSearchPublic;return this.id&&!a?` AND orgid:${this.id}`:null}},{key:"isOrganization",get:function(){return!!this.access}},{key:"restUrl",get:function(){let a=this.url;if(a){const e=a.indexOf("/sharing");a=0<e?a.substring(0,e):this.url.replace(/\/+$/,"");a+="/sharing/rest"}return a}},{key:"thumbnailUrl",get:function(){const a=this.restUrl,e=this.thumbnail;return a&&e?this._normalizeSSL(a+
"/portals/self/resources/"+e):null}}]);return n}(b.JSONSupportMixin(H));b.AUTH_MODE_ANONYMOUS="anonymous";b.AUTH_MODE_AUTO="auto";b.AUTH_MODE_IMMEDIATE="immediate";c.__decorate([d.property()],b.prototype,"access",void 0);c.__decorate([d.property()],b.prototype,"allSSL",void 0);c.__decorate([d.property()],b.prototype,"authMode",void 0);c.__decorate([d.property()],b.prototype,"authorizedCrossOriginDomains",void 0);c.__decorate([u.reader("authorizedCrossOriginDomains")],b.prototype,"readAuthorizedCrossOriginDomains",
null);c.__decorate([d.property()],b.prototype,"basemapGalleryGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"bingKey",void 0);c.__decorate([d.property()],b.prototype,"canListApps",void 0);c.__decorate([d.property()],b.prototype,"canListData",void 0);c.__decorate([d.property()],b.prototype,"canListPreProvisionedItems",void 0);c.__decorate([d.property()],b.prototype,"canProvisionDirectPurchase",void 0);c.__decorate([d.property()],b.prototype,"canSearchPublic",void 0);c.__decorate([d.property()],
b.prototype,"canShareBingPublic",void 0);c.__decorate([d.property()],b.prototype,"canSharePublic",void 0);c.__decorate([d.property()],b.prototype,"canSignInArcGIS",void 0);c.__decorate([d.property()],b.prototype,"canSignInIDP",void 0);c.__decorate([d.property()],b.prototype,"colorSetsGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"commentsEnabled",void 0);c.__decorate([d.property({type:Date})],b.prototype,"created",void 0);c.__decorate([d.property()],b.prototype,"credential",void 0);
c.__decorate([d.property()],b.prototype,"culture",void 0);c.__decorate([d.property()],b.prototype,"currentVersion",void 0);c.__decorate([d.property()],b.prototype,"customBaseUrl",void 0);c.__decorate([d.property()],b.prototype,"defaultBasemap",void 0);c.__decorate([u.reader("defaultBasemap")],b.prototype,"readDefaultBasemap",null);c.__decorate([d.property()],b.prototype,"defaultDevBasemap",void 0);c.__decorate([u.reader("defaultDevBasemap")],b.prototype,"readDefaultDevBasemap",null);c.__decorate([d.property({type:L})],
b.prototype,"defaultExtent",void 0);c.__decorate([d.property()],b.prototype,"defaultVectorBasemap",void 0);c.__decorate([u.reader("defaultVectorBasemap")],b.prototype,"readDefaultVectorBasemap",null);c.__decorate([d.property()],b.prototype,"description",void 0);c.__decorate([d.property()],b.prototype,"devBasemapGalleryGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"eueiEnabled",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"extraQuery",null);c.__decorate([d.property()],
b.prototype,"featuredGroups",void 0);c.__decorate([d.property()],b.prototype,"featuredItemsGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"galleryTemplatesGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"livingAtlasGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"hasCategorySchema",void 0);c.__decorate([d.property()],b.prototype,"helpBase",void 0);c.__decorate([d.property()],b.prototype,"helperServices",void 0);c.__decorate([d.property()],b.prototype,"helpMap",
void 0);c.__decorate([d.property()],b.prototype,"homePageFeaturedContent",void 0);c.__decorate([d.property()],b.prototype,"homePageFeaturedContentCount",void 0);c.__decorate([d.property()],b.prototype,"httpPort",void 0);c.__decorate([d.property()],b.prototype,"httpsPort",void 0);c.__decorate([d.property()],b.prototype,"id",void 0);c.__decorate([d.property()],b.prototype,"ipCntryCode",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"isOrganization",null);c.__decorate([d.property()],b.prototype,
"isPortal",void 0);c.__decorate([d.property()],b.prototype,"isReadOnly",void 0);c.__decorate([d.property()],b.prototype,"layerTemplatesGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"maxTokenExpirationMinutes",void 0);c.__decorate([d.property({type:Date})],b.prototype,"modified",void 0);c.__decorate([d.property()],b.prototype,"name",void 0);c.__decorate([d.property()],b.prototype,"portalHostname",void 0);c.__decorate([d.property()],b.prototype,"portalMode",void 0);c.__decorate([d.property()],
b.prototype,"portalProperties",void 0);c.__decorate([d.property()],b.prototype,"region",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"restUrl",null);c.__decorate([d.property()],b.prototype,"rotatorPanels",void 0);c.__decorate([d.property()],b.prototype,"showHomePageDescription",void 0);c.__decorate([d.property()],b.prototype,"sourceJSON",void 0);c.__decorate([d.property()],b.prototype,"staticImagesUrl",void 0);c.__decorate([d.property({json:{name:"2DStylesGroupQuery"}})],b.prototype,
"stylesGroupQuery2d",void 0);c.__decorate([d.property({json:{name:"stylesGroupQuery"}})],b.prototype,"stylesGroupQuery3d",void 0);c.__decorate([d.property()],b.prototype,"supportsHostedServices",void 0);c.__decorate([d.property()],b.prototype,"symbolSetsGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"templatesGroupQuery",void 0);c.__decorate([d.property()],b.prototype,"thumbnail",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"thumbnailUrl",null);c.__decorate([d.property()],
b.prototype,"units",void 0);c.__decorate([d.property()],b.prototype,"url",void 0);c.__decorate([d.property()],b.prototype,"urlKey",void 0);c.__decorate([u.reader("urlKey")],b.prototype,"readUrlKey",null);c.__decorate([d.property()],b.prototype,"user",void 0);c.__decorate([u.reader("user")],b.prototype,"readUser",null);c.__decorate([d.property()],b.prototype,"useStandardizedQuery",void 0);c.__decorate([d.property()],b.prototype,"useVectorBasemaps",void 0);c.__decorate([d.property()],b.prototype,"vectorBasemapGalleryGroupQuery",
void 0);return b=m=c.__decorate([K.subclass("esri.portal.Portal")],b)});