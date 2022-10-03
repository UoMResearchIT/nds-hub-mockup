// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./LayerView3D ./TiledLayerView3D ../terrain/RasterTile ../../layers/ImageryTileLayerView ../../layers/LayerView ../../layers/RefreshableLayerView ../../support/drapedUtils ../../webgl/capabilities".split(" "),
function(k,h,u,p,v,l,g,F,G,w,x,y,z,A,B,C,D,E){g=function(t){function m(){var a=t.apply(this,arguments)||this;a.type="imagery-tile-3d";a.isAlignedMapTile=!0;return a}k._inheritsLoose(m,t);var e=m.prototype;e.initialize=function(){this.layer.increaseRasterJobHandlerUsage();null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new u("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const a=v.whenOnce(()=>{var c,
b;return null==(c=this.view)?void 0:null==(b=c.basemapTerrain)?void 0:b.tilingSchemeLocked}).then(()=>{const c=this.view.basemapTerrain.tilingScheme,{tileInfo:b}=this.layer,f=["png","png24","png32","jpg","mixed"].includes(b.format)&&c.compatibleWith(b);this.tileInfo=(this.isAlignedMapTile=f)?b:c.toTileInfo();this.updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition],()=>this.refresh())});this.addResolvingPromise(a)};e.destroy=
function(){this.layer.decreaseRasterJobHandlerUsage();this.view=null};e._getfullExtent=function(){return this.projectFullExtent(this.view.basemapTerrain&&null!==this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:this.view.spatialReference)};e.fetchTile=function(){var a=k._asyncToGenerator(function*(c,b,f,d){const q=this.tileInfo,r=this._canSymbolizeInWebGL();d={tileInfo:q,requestRawData:r,signal:p.unwrap(d.signal),requestAsImageElement:this.isAlignedMapTile};d=yield this.layer.fetchTile(c,
b,f,d);if(d instanceof HTMLImageElement)return d;let n=d&&d.pixelBlock;if(p.isNone(n)||!r&&(n=yield this.layer.applyRenderer(d),p.isNone(n)))return this._blankTile;b=new z.RasterTile([c,b,f],n,q.size[0],q.size[1]);r?(b.symbolizerRenderer=this.layer.symbolizer.rendererJSON,b.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(c)),b.transformGrid=d.transformGrid):b.isRendereredSource=!0;b.interpolation=this.layer.interpolation;b.bandIds=this.layer.bandIds;return b});
return function(c,b,f,d){return a.apply(this,arguments)}}();e._getSymbolizerOptions=function(a){a=this.tileInfo.lodAt(a).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:a,y:a},bandIds:this.layer.bandIds}};e.ensureSymbolizerParameters=function(a){this._canSymbolizeInWebGL()&&JSON.stringify(a.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(a.symbolizerParameters=
this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(a.lij[0])))};e.createFetchPopupFeaturesQueryGeometry=function(a,c){return D.createQueryGeometry(a,c,this.view)};e.refresh=function(){this.emit("data-changed")};e.doRefresh=function(){var a=k._asyncToGenerator(function*(){this.suspended||this.emit("data-changed")});return function(){return a.apply(this,arguments)}}();e._canSymbolizeInWebGL=function(){return E.getWebGLCapabilities("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL};
k._createClass(m,[{key:"_blankTile",get:function(){const a=document.createElement("canvas"),c=a.getContext("2d"),[b,f]=this.tileInfo.size;a.width=b;a.height=f;c.clearRect(0,0,b,f);return c.getImageData(0,0,b,f)}},{key:"imageFormatIsOpaque",get:function(){return"jpg"===this.layer.tileInfo.format}},{key:"hasMixedImageFormats",get:function(){return"mixed"===this.layer.tileInfo.format}},{key:"dataLevelRange",get:function(){const a=this.layer.tileInfo.lods;return this.levelRangeFromScaleRange(this.tileInfo.lods[0].scale,
a[a.length-1].scale)}}]);return m}(A(C(y.TiledLayerView3D(x.LayerView3D(B)))));h.__decorate([l.property({readOnly:!0})],g.prototype,"_blankTile",null);h.__decorate([l.property({readOnly:!0})],g.prototype,"imageFormatIsOpaque",null);h.__decorate([l.property({readOnly:!0})],g.prototype,"hasMixedImageFormats",null);h.__decorate([l.property({readOnly:!0})],g.prototype,"dataLevelRange",null);return g=h.__decorate([w.subclass("esri.views.3d.layers.ImageryTileLayerView3D")],g)});