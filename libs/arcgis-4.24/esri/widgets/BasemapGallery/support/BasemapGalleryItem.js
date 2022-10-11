// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/HandleOwner ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../support/basemapUtils".split(" "),function(k,d,c,p,q,f,e,u,v,w,r,t){c=function(l){function g(a){a=l.call(this,a)||this;a.compatibilityFunction=
null;a.error=null;a.state="loading";a.view=null;return a}k._inheritsLoose(g,l);var h=g.prototype;h.initialize=function(){const a=()=>this.refresh();this.handles.add([f.watch(()=>{var b;return null==(b=this.basemap)?void 0:b.loadStatus},a),f.watch(()=>this.compatibilityFunction,a),f.watch(()=>{var b;return this.view&&"basemapTerrain"in this.view&&(null==(b=this.view.basemapTerrain)?void 0:b.tilingScheme)},a),f.watch(()=>{var b;return null==(b=this.view)?void 0:b.ready},a),f.watch(()=>{var b;return null==
(b=this.view)?void 0:b.spatialReference},a)]);this.refresh()};h.destroy=function(){this._cancelRefresh();this.view=this.compatibilityFunction=this.basemap=null};h.refresh=function(){var a;this._cancelRefresh();this._set("state","loading");const b=null==(a=this.basemap)?void 0:a.loadStatus;if("loaded"===b||"failed"===b)if(this.compatibilityFunction){a=new AbortController;var {signal:m}=a;this.compatibilityFunction(this,{signal:m}).then(()=>f.whenOnce(()=>!this._spatialReferenceTask.updating,m)).then(()=>
{this._set("state","ready");this._set("error",null)}).catch(n=>{q.isAbortError(n)||(this._set("state","error"),this._set("error",n))});this._refreshController=a}else"loaded"===b?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError))};h._cancelRefresh=function(){this._refreshController&&(this._refreshController.abort(),this._refreshController=null)};k._createClass(g,[{key:"_spatialReferenceTask",get:function(){return t.findSpatialReference(this.view,
this.basemap)}},{key:"basemap",set:function(a){const b=this._get("basemap");b&&b.cancelLoad();a&&a.load().catch(()=>{});this._set("basemap",a)}},{key:"spatialReference",get:function(){return this._spatialReferenceTask.spatialReference}}]);return g}(p.HandleOwnerMixin(c));d.__decorate([e.property({readOnly:!0})],c.prototype,"_spatialReferenceTask",null);d.__decorate([e.property()],c.prototype,"basemap",null);d.__decorate([e.property()],c.prototype,"compatibilityFunction",void 0);d.__decorate([e.property({readOnly:!0})],
c.prototype,"error",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"spatialReference",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",void 0);d.__decorate([e.property()],c.prototype,"view",void 0);return c=d.__decorate([r.subclass("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],c)});