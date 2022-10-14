// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/spatialReferenceUtils ../../../layers/support/layerUtils ../../ViewingMode ./terrainUtils ./TilingScheme".split(" "),
function(c,n,d,v,w,k,p,f,A,B,C,x,q,y,r,z,t,m,h){c.TilingSchemeLogic=function(u){function l(a){a=u.call(this,a)||this;a._handles=new w;return a}n._inheritsLoose(l,u);var g=l.prototype;g.initialize=function(){this._handles.add(this.layers.on("change",()=>this._update()));this._handles.add(p.watch(()=>this.extentHelper.layerViewsExtent,()=>this._setAdHocTilingScheme()));this._update();this.tilingSchemeLocked||this._setAdHocTilingScheme()};g.destroy=function(){this._handles=k.destroyMaybe(this._handles);
this._waitTask=null};g._update=function(){this._waitTask=null;if(!this.tilingSchemeLocked){var a;this.layers.some(e=>!z.isTiledLayer(e)||e.isRejected()?!1:!e.isFulfilled()||k.isSome(m.getTiledLayerInfo(e,this.viewSpatialReference,this.viewingMode))?(a=e,"vector-tile"!==(null==e?void 0:e.type)&&!m.isProjectableRasterLayer(e)):!1);if(a)if(a.isResolved()){var b=m.getTiledLayerInfo(a,this.viewSpatialReference,this.viewingMode);k.isSome(b)&&(b=new h.TilingScheme(b.tileInfo),this._lockTilingScheme(b))}else this._updateWhen(a)}};
g._updateWhen=function(a){const b=a.when().catch(()=>{}).then(()=>{b!==this._waitTask||this.destroyed||this._update()});this._waitTask=b};g._lockTilingScheme=function(a){if(this.viewingMode===t.ViewingMode.Global){const b=a.levels.length-1;a.spatialReference.isWebMercator?a=h.TilingScheme.makeWebMercatorAuxiliarySphere(b):q.canProjectToWGS84ComparableLonLat(a.spatialReference)&&(a=h.TilingScheme.makeGCSWithTileSize(a.spatialReference,a.pixelSize,b))}this.tilingSchemeLocked=!0;this.tilingScheme=a;
this.extentHelper.tilingScheme=this.tilingScheme;this._updateTiledLayerExtent();this._handles.removeAll();this._handles.add(p.watch(()=>this.extentHelper.tiledLayersExtent,()=>this._updateTiledLayerExtent()))};g._updateTiledLayerExtent=function(){this._set("extent",this.extentHelper.tiledLayersExtent)};g._setAdHocTilingScheme=function(){if(this.viewingMode===t.ViewingMode.Global){var a=this.extentHelper.viewSpatialReference;const b=q.canProjectToWGS84ComparableLonLat(a)||r.isMars(a)||r.isMoon(a);
a.isWebMercator?this.tilingScheme=h.TilingScheme.WebMercatorAuxiliarySphere:b&&(this.tilingScheme=h.TilingScheme.makeGCSWithTileSize(a,256));this._set("extent",this.extentHelper.layerViewsExtent)}else a=this.extentHelper.layerViewsExtent,k.isSome(a)&&!y.equals(a,this.extent)&&(this.tilingScheme=h.TilingScheme.fromExtent(a,this.extentHelper.viewSpatialReference),this._set("extent",a))};n._createClass(l,[{key:"test",get:function(){return{lockTilingScheme:a=>this._lockTilingScheme(a),done:!this._waitTask}}}]);
return l}(v);d.__decorate([f.property()],c.TilingSchemeLogic.prototype,"tilingScheme",void 0);d.__decorate([f.property({readOnly:!0})],c.TilingSchemeLogic.prototype,"extent",void 0);d.__decorate([f.property({value:!1})],c.TilingSchemeLogic.prototype,"tilingSchemeLocked",void 0);d.__decorate([f.property({constructOnly:!0})],c.TilingSchemeLogic.prototype,"viewSpatialReference",void 0);d.__decorate([f.property({constructOnly:!0})],c.TilingSchemeLogic.prototype,"layers",void 0);d.__decorate([f.property({constructOnly:!0})],
c.TilingSchemeLogic.prototype,"extentHelper",void 0);d.__decorate([f.property({constructOnly:!0})],c.TilingSchemeLogic.prototype,"viewingMode",void 0);c.TilingSchemeLogic=d.__decorate([x.subclass("esri.views.3d.terrain.TilingSchemeLogic")],c.TilingSchemeLogic);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});