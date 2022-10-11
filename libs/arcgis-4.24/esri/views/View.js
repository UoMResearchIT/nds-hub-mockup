// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Map ../TimeExtent ../core/Accessor ../core/Collection ../core/CollectionFlattener ../core/Error ../core/Evented ../core/HandleOwner ../core/handleUtils ../core/Loadable ../core/Logger ../core/maybe ../core/Promise ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ../core/support/OwningCollection ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ../geometry/support/spatialReferenceUtils ../support/AnalysesCollection ../support/GraphicsCollection ./BasemapView ./LayerViewManager ./Magnifier ./ToolViewManager ./input/Input ./input/ViewEvents ./navigation/Navigation ./support/DefaultsFromMap".split(" "),
function(m,d,E,F,c,p,G,H,I,J,K,v,L,h,M,w,k,x,Z,aa,ba,e,N,y,O,P,Q,R,z,A,S,T,B,U,V,W,C,X){var q;const r=L.getLogger("esri.views.View");c=q=function(u){function t(b){var a=u.call(this,b)||this;a._userSpatialReference=null;a._cursor=null;a.allLayerViews=new G({getCollections:()=>{var f,l,n;return[null==(f=a.basemapView)?void 0:f.baseLayerViews,null==(l=a.groundView)?void 0:l.layerViews,a.layerViews,null==(n=a.basemapView)?void 0:n.referenceLayerViews]},getChildrenFunction:f=>f.layerViews});a.groundView=
null;a.animation=null;a.basemapView=null;a.fatalError=null;a.extent=null;a.graphics=new A.GraphicsCollection;a.analyses=new z.AnalysesCollection;a.navigating=!1;a.typeSpecificPreconditionsReady=!0;a.layerViews=new p;a.magnifier=new B;a.padding={left:0,top:0,right:0,bottom:0};a.ready=!1;a.spatialReferenceWarningDelay=1E3;a.supportsGround=!0;a.timeExtent=null;a.type=null;a.scale=null;a.updating=!1;a.initialExtentRequired=!0;a.input=new V;a.navigation=new C;a.layerViewManager=null;a.analysisViewManager=
null;a.isHeightModelInfoRequired=!1;a.width=null;a.height=null;a.resizing=!1;a.suspended=!1;a.viewEvents=new W.ViewEvents(m._assertThisInitialized(a));a.persistableViewModels=new p;a._isValid=!1;a._readyCycleForced=!1;a.handles.add(k.watch(()=>a.preconditionsReady,f=>{f?(a._currentSpatialReference=a.spatialReference,q.views.add(m._assertThisInitialized(a))):(a._currentSpatialReference=null,q.views.remove(m._assertThisInitialized(a)));a.notifyChange("spatialReference");if(!f&&a.ready){var l,n;null==
(l=a.layerViewManager)?void 0:l.clear();null==(n=a.toolViewManager)?void 0:n.detach();h.isSome(a.analysisViewManager)&&a.analysisViewManager.detach();a._teardown()}else f&&!a.ready&&(a._startup(),h.isSome(a.analysisViewManager)&&a.analysisViewManager.attach(),a.toolViewManager.attach())},k.sync));return a}m._inheritsLoose(t,u);var g=t.prototype;g.initialize=function(){this.addResolvingPromise(this.validate().then(()=>{this._isValid=!0;return k.whenOnce(()=>this.ready)}));this.basemapView=new S.BasemapView({view:this});
this.layerViewManager=new T({view:this,layerViewImporter:{importLayerView:b=>this.importLayerView(b),hasLayerViewModule:b=>this.hasLayerViewModule(b)},supportsGround:this.supportsGround});this.toolViewManager=new U({view:this});this._setupSpatialReferenceLogger();this.handles.add([k.watch(()=>this.initialExtentRequired,b=>this.defaultsFromMap.required={...this.defaultsFromMap.required,extent:b},{sync:!0,initial:!0}),k.watch(()=>this.ready,b=>{this.defaultsFromMap&&(this.defaultsFromMap.suspended=
b,this.defaultsFromMap.userSpatialReference=b?this.spatialReference:this._userSpatialReference)},{sync:!0}),k.watch(()=>this._userSpatialReference,b=>{this.defaultsFromMap&&(this.defaultsFromMap.userSpatialReference=b)},{sync:!0,initial:!0})])};g._setupSpatialReferenceLogger=function(){var b=this;let a=null;this.handles.add([k.watch(()=>{var f;return null==(f=this.defaultsFromMap)?void 0:f.ready},f=>{var l;const n=0<(null==(l=this.map)?void 0:l.allLayers.length);f&&!this.spatialReference&&n?h.isSome(a)||
(f=K.makeHandle(()=>a=h.abortMaybe(a)),a=w.createTask(function(){var Y=m._asyncToGenerator(function*(D){try{yield w.after(b.spatialReferenceWarningDelay,null,D)}catch{return}finally{a=null}r.warn("#spatialReference","no spatial reference could be derived from the currently added map layers")});return function(D){return Y.apply(this,arguments)}}()),this.handles.add(f,"spatial-reference-logger-task")):this.handles.remove("spatial-reference-logger-task")},{sync:!0})])};g.destroy=function(){if(!this.destroyed){this.viewEvents.destroy();
this.allLayerViews.destroy();this.navigation&&(this.navigation.destroy(),this._set("navigation",null));this.graphics=h.destroyMaybe(this.graphics);this.analyses=h.destroyMaybe(this.analyses);this.handles.remove("defaultsFromMap");this.defaultsFromMap.destroy();this._set("defaultsFromMap",null);h.destroyMaybe(this.analysisViewManager);this.toolViewManager=h.destroyMaybe(this.toolViewManager);this.layerViewManager=h.destroyMaybe(this.layerViewManager);this.basemapView=h.destroyMaybe(this.basemapView);
this.invalidate();this._emitter.clear();this.handles.removeAll();var b=this.map;this.map=null;null==b?void 0:b.destroy()}};g._startup=function(){this._set("ready",!0)};g._teardown=function(){this._set("ready",!1)};g.whenReady=function(){return Promise.resolve(this)};g.toMap=function(){r.error("#toMap()","Not implemented on this instance of View");return null};g._spatialReferenceChanged=function(b){};g.whenLayerView=function(b){return this.layerViewManager.whenLayerView(b)};g.getDefaultSpatialReference=
function(){var b;return null==(b=this.defaultsFromMap)?void 0:b.spatialReference};g.getDefaultHeightModelInfo=function(){var b,a,f;return null!=(b=null!=(a=this.map&&"heightModelInfo"in this.map?this.map.heightModelInfo:void 0)?a:null==(f=this.defaultsFromMap)?void 0:f.heightModelInfo)?b:null};g.importLayerView=function(b){throw new H("importLayerView() not implemented");};g.hasLayerViewModule=function(b){return!1};g.validate=function(){var b=m._asyncToGenerator(function*(){});return function(){return b.apply(this,
arguments)}}();g.invalidate=function(){this._isValid=!1};g.getSpatialReferenceSupport=function(){return{constraints:null}};g._validateSpatialReference=function(b){return h.isSome(this.getSpatialReferenceSupport({spatialReference:b}))};g.when=function(b,a){this.isResolved()&&!this.ready&&r.warn("#when()","Calling view.when() while the view is no longer ready but was already resolved once will resolve immediately. Use reactiveUtils.whenOnce(() \x3d\x3e view.ready).then(...) instead.");return u.prototype.when.call(this,
b,a)};g.forceReadyCycle=function(){this.ready&&(k.when(()=>!1===this.preconditionsReady,()=>this._readyCycleForced=!1,{once:!0}),this._readyCycleForced=!0)};g.addAndActivateTool=function(b){this.toolViewManager.tools.add(b);this.activeTool=b};g.tryFatalErrorRecovery=function(){this.fatalError=null};m._createClass(t,[{key:"_defaultsFromMapSettings",get:function(){return{}}},{key:"defaultsFromMap",get:function(){return new X.DefaultsFromMap({required:{tileInfo:!1,heightModelInfo:!1,extent:!1},map:()=>
this.map,getSpatialReferenceSupport:b=>this.getSpatialReferenceSupport(b),...this._defaultsFromMapSettings})}},{key:"heightModelInfo",get:function(){return this.getDefaultHeightModelInfo()}},{key:"interacting",get:function(){return this.navigating}},{key:"preconditionsReady",get:function(){var b;return!(this.fatalError||!this._isValid||this._readyCycleForced||!this.map||v.isLoadable(this.map)&&!this.map.loaded||0===this.width||0===this.height||!this.spatialReference||!this._validateSpatialReference(this.spatialReference)||
!(this._currentSpatialReference||null!=(b=this.defaultsFromMap)&&b.ready)||!this.typeSpecificPreconditionsReady)}},{key:"map",set:function(b){var a;const f=this._get("map");b!==f&&(null!=(a=b)&&a.destroyed&&(r.warn("#map","The provided map is already destroyed",{map:b}),b=null),v.isLoadable(b)&&b.load().catch(()=>{}),this.initialized&&(this.forceReadyCycle(),this._currentSpatialReference=null),this._set("map",b))}},{key:"spatialReference",get:function(){var b,a;let f=this._userSpatialReference||this._currentSpatialReference||
this.getDefaultSpatialReference()||null;f&&null!=(b=this.defaultsFromMap)&&null!=(a=b.required)&&a.heightModelInfo&&(f=f.clone(),f.vcsWkid=this.defaultsFromMap.vcsWkid,f.latestVcsWkid=this.defaultsFromMap.latestVcsWkid);return f},set:function(b){const a=!R.equals(b,this._get("spatialReference"));this._set("_userSpatialReference",b);a&&(this._set("spatialReference",b),this._spatialReferenceChanged(b))}},{key:"stationary",get:function(){return!this.animation&&!this.navigating&&!this.resizing}},{key:"initialExtent",
get:function(){var b;return null==(b=this.defaultsFromMap)?void 0:b.extent}},{key:"cursor",get:function(){const b=this.toolViewManager?this.toolViewManager.cursor:null;return h.isSome(b)?b:this._cursor||"default"},set:function(b){this._cursor=b;this.notifyChange("cursor")}},{key:"size",get:function(){return[this.width,this.height]}}]);return t}(J.HandleOwnerMixin(I.EventedMixin(M.EsriPromiseMixin(c))));c.views=new p;d.__decorate([e.property()],c.prototype,"_userSpatialReference",void 0);d.__decorate([x.aliasOf("toolViewManager.activeTool")],
c.prototype,"activeTool",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"allLayerViews",void 0);d.__decorate([e.property()],c.prototype,"groundView",void 0);d.__decorate([e.property()],c.prototype,"animation",void 0);d.__decorate([e.property()],c.prototype,"basemapView",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"_defaultsFromMapSettings",null);d.__decorate([e.property()],c.prototype,"defaultsFromMap",null);d.__decorate([e.property()],c.prototype,"fatalError",void 0);
d.__decorate([e.property({type:O})],c.prototype,"extent",void 0);d.__decorate([e.property(y.owningCollectionProperty(A.GraphicsCollection,"graphics"))],c.prototype,"graphics",void 0);d.__decorate([e.property(y.owningCollectionProperty(z.AnalysesCollection,"analyses"))],c.prototype,"analyses",void 0);d.__decorate([e.property({readOnly:!0,type:P})],c.prototype,"heightModelInfo",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"interacting",null);d.__decorate([e.property({readOnly:!0})],c.prototype,
"navigating",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:"fatalError _isValid _readyCycleForced map map.loaded? width height spatialReference _currentSpatialReference defaultsFromMap.ready typeSpecificPreconditionsReady".split(" ")})],c.prototype,"preconditionsReady",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"typeSpecificPreconditionsReady",void 0);d.__decorate([e.property({type:p,readOnly:!0})],c.prototype,"layerViews",void 0);d.__decorate([e.property({type:B})],c.prototype,
"magnifier",void 0);d.__decorate([e.property({value:null,type:E})],c.prototype,"map",null);d.__decorate([e.property()],c.prototype,"padding",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"ready",void 0);d.__decorate([e.property({type:Q})],c.prototype,"spatialReference",null);d.__decorate([e.property()],c.prototype,"spatialReferenceWarningDelay",void 0);d.__decorate([e.property()],c.prototype,"stationary",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"supportsGround",void 0);
d.__decorate([e.property({type:F})],c.prototype,"timeExtent",void 0);d.__decorate([x.aliasOf("toolViewManager.tools")],c.prototype,"tools",void 0);d.__decorate([e.property()],c.prototype,"toolViewManager",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"type",void 0);d.__decorate([e.property({type:Number})],c.prototype,"scale",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"updating",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"initialExtentRequired",void 0);
d.__decorate([e.property({readOnly:!0})],c.prototype,"initialExtent",null);d.__decorate([e.property()],c.prototype,"cursor",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"input",void 0);d.__decorate([e.property({type:C,nonNullable:!0})],c.prototype,"navigation",void 0);d.__decorate([e.property()],c.prototype,"layerViewManager",void 0);d.__decorate([e.property()],c.prototype,"analysisViewManager",void 0);d.__decorate([e.property()],c.prototype,"width",void 0);d.__decorate([e.property()],
c.prototype,"height",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"resizing",void 0);d.__decorate([e.property({value:null,readOnly:!0})],c.prototype,"size",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"suspended",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"viewEvents",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"persistableViewModels",void 0);d.__decorate([e.property()],c.prototype,"_isValid",void 0);d.__decorate([e.property()],c.prototype,
"_readyCycleForced",void 0);d.__decorate([e.property()],c.prototype,"_currentSpatialReference",void 0);return c=q=d.__decorate([N.subclass("esri.views.View")],c)});