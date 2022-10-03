// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./LayerView3D ./graphics/GraphicsProcessor ./support/projectExtentUtils ../webgl-engine/lib/basicInterfaces ../../layers/LayerView".split(" "),function(m,f,p,q,g,e,y,z,r,t,u,v,w,x){e=function(k){function l(){var a=
k.apply(this,arguments)||this;a.type="graphics-3d";a.slicePlaneEnabled=!1;a.fullExtentInLocalViewSpatialReference=null;return a}m._inheritsLoose(l,k);var d=l.prototype;d.initialize=function(){this._set("processor",new u.GraphicsProcessor({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0}));this.addResolvingPromise(this.processor.setup());this.handles.add(this.layer.on("graphic-update",a=>this.processor.graphicsCore.graphicUpdateHandler(a)));this.addResolvingPromise(v.toViewIfLocal(this).then(a=>
this.fullExtentInLocalViewSpatialReference=a));this.layer.internal?this.notifyChange("updating"):this.handles.add(q.when(()=>{var a,b;return null==(a=this.view)?void 0:null==(b=a.basemapTerrain)?void 0:b.ready},()=>()=>this.notifyChange("updating"),{once:!0}))};d.destroy=function(){this.handles.removeAll();this.updatingHandles.removeAll();this._set("processor",p.destroyMaybe(this.processor))};d.getSuspendInfo=function(){var a,b,c,h;const n=k.prototype.getSuspendInfo.call(this);n.outsideScaleRange=
null!=(a=null==(b=this.processor)?void 0:b.scaleVisibilitySuspended)?a:!1;n.outsideOfView=null!=(c=null==(h=this.processor)?void 0:h.frustumVisibilitySuspended)?c:!1;return n};d.fetchPopupFeatures=function(){var a=m._asyncToGenerator(function*(b,c){return p.isSome(c)?c.clientGraphics:null});return function(b,c){return a.apply(this,arguments)}}();d.getHit=function(a){return this.processor.getHit(a)};d.whenGraphicBounds=function(a,b){return this.processor.whenGraphicBounds(a,b)};d.computeAttachmentOrigin=
function(a,b){var c;return null==(c=this.processor)?void 0:c.computeAttachmentOrigin(a,b)};d.getSymbolLayerSize=function(a,b){return this.processor.getSymbolLayerSize(a,b)};d.queryGraphics=function(){return Promise.resolve(this.loadedGraphics)};d.maskOccludee=function(a){return this.processor.maskOccludee(a)};d.highlight=function(a){return this.processor.highlight(a)};d.canResume=function(){var a;return k.prototype.canResume.call(this)&&!(null!=(a=this.processor)&&a.scaleVisibilitySuspended)};d.isUpdating=
function(){var a,b,c;return!((null==(a=this.processor)||!a.updating)&&(this.layer.internal||null!=(b=this.view)&&null!=(c=b.basemapTerrain)&&c.ready))};m._createClass(l,[{key:"loadedGraphics",get:function(){return this.layer.graphics}},{key:"legendEnabled",get:function(){var a;return this.canResume()&&!(null!=(a=this.processor)&&a.frustumVisibilitySuspended)}},{key:"updatePolicy",get:function(){var a;return(null==(a=this.processor)?void 0:a.graphicsCore.effectiveUpdatePolicy)||w.UpdatePolicy.SYNC}},
{key:"performanceInfo",get:function(){var a,b,c,h;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:null!=(a=null==(b=this.processor)?void 0:b.elevationAlignment.updating)?a:!1,visibilityFrustum:null!=(c=!(null!=(h=this.processor)&&h.frustumVisibilitySuspended))?c:!1}}}]);return l}(t.LayerView3D(x));f.__decorate([g.property()],e.prototype,"loadedGraphics",null);f.__decorate([g.property({readOnly:!0})],
e.prototype,"legendEnabled",null);f.__decorate([g.property()],e.prototype,"layer",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"processor",void 0);f.__decorate([g.property({type:Boolean})],e.prototype,"slicePlaneEnabled",void 0);return e=f.__decorate([r.subclass("esri.views.3d.layers.GraphicsLayerView3D")],e)});