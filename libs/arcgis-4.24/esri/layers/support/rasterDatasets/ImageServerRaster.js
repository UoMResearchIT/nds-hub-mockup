// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/urlUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../RasterInfo ../RasterStorageInfo ../serviceTileInfoProperty ../TileInfo ../TilemapCache ./BaseRaster ../rasterFunctions/pixelUtils ../rasterTransforms/GCSShiftTransform ../../../rest/imageService/fetchRasterInfo ../../../geometry/SpatialReference ../../../geometry/Point ../../../geometry/Extent".split(" "),
function(t,z,v,A,w,G,D,W,X,Y,H,I,J,K,L,M,N,O,P,Q,R,S,T){v=function(E){function B(){var e=E.apply(this,arguments)||this;e._levelOffset=0;e._tilemapCache=null;e._slices=null;e.datasetFormat="RasterTileServer";return e}t._inheritsLoose(B,E);var r=B.prototype;r.open=function(){var e=t._asyncToGenerator(function*(b){yield this.init();b=b&&b.signal;var a=this.sourceJSON?{data:this.sourceJSON}:yield this.request(this.url,{query:{f:"json"},signal:b});a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));
const c=a.data;this.sourceJSON=c;if(!c)throw new A("imageserverraster:open","cannot initialize tiled image service, missing service info");if(!c.tileInfo)throw new A("imageserverraster:open","use ImageryLayer to open non-tiled image services");this._fixScaleInServiceInfo();a="jpg jpeg png png8 png24 png32 mixed".split(" ");this.tileType=c.cacheType;null==this.tileType&&(a.includes(c.tileInfo.format.toLowerCase())?this.tileType="Map":"lerc"===c.tileInfo.format.toLowerCase()?this.tileType="Elevation":
this.tileType="Raster");this.datasetName=c.name.slice(c.name.indexOf("/")+1);b=yield this._fetchRasterInfo({signal:b});if(w.isSome(b)){a="Map"===this.tileType?K.readServiceTileInfo(c.tileInfo,c):L.fromJSON(c.tileInfo);const {extent:f,pixelSize:g}=b,q=.5/b.width*g.x;let l,m;var d=a.lodAt(Math.max.apply(null,a.lods.map(k=>k.level)));"Map"!==this.tileType&&0!==c.maxScale&&("Raster"===this.tileType?(l=a.lods.find(k=>k.resolution===g.x))||(l=a.lods[a.lods.length-1]):(l=a.lods.find(k=>Math.abs(k.scale-
c.maxScale)<q))||(l=a.lods.filter(k=>k.scale>c.maxScale).sort((k,C)=>k.scale>C.scale?1:-1)[0]),g.x=g.y=l.resolution,b.width=Math.ceil((f.xmax-f.xmin)/g.x-.1),b.height=Math.ceil((f.ymax-f.ymin)/g.y-.1));l||(l=d);d=a.lodAt(Math.min.apply(null,a.lods.map(k=>k.level)));"Map"===this.tileType?this._levelOffset=a.lods[0].level:0!==c.minScale&&"Elevation"===this.tileType&&(m=a.lods.find(k=>Math.abs(k.scale-c.minScale)<q),this._levelOffset=m.level-d.level);m||(m=d);const x=Math.max(g.x,g.y);if(Math.abs(g.x-
g.y)>q||!a.lods.some(k=>Math.abs(k.resolution-x)<q))g.x=g.y=l.resolution,b.width=Math.ceil((f.xmax-f.xmin)/g.x-.1),b.height=Math.ceil((f.ymax-f.ymin)/g.y-.1);d=l.level-m.level;const [y,u]=a.size,n=[];a.lods.forEach(k=>{k.level>=m.level&&k.level<=l.level&&n.push({x:k.resolution,y:k.resolution})});n.sort((k,C)=>k.x-C.x);const U=this.computeBlockBoundary(f,y,u,a.origin,n,d),V=1<n.length?n.slice(1):null;let F;if(c.transposeInfo){var h,p;F={tileSize:[c.transposeInfo.rows,c.transposeInfo.cols],packetSize:null!=
(h=null==(p=b.keyProperties)?void 0:p._yxs.PacketSize)?h:0}}b.storageInfo=new J({blockWidth:a.size[0],blockHeight:a.size[1],pyramidBlockWidth:a.size[0],pyramidBlockHeight:a.size[1],pyramidResolutions:V,compression:a.format,origin:a.origin,firstPyramidLevel:1,maximumPyramidLevel:d,tileInfo:a,transposeInfo:F,blockBoundary:U});this._fixGCSShift(b);this._set("rasterInfo",b)}else throw new A("image-server-raster:open","cannot initialize image service");c.capabilities.toLowerCase().includes("tilemap")&&
(h={tileInfo:b.storageInfo.tileInfo,parsedUrl:G.urlToObject(this.url),url:this.url,tileServers:[],type:"tile"},this._tilemapCache=new M.TilemapCache({layer:h}))});return function(b){return e.apply(this,arguments)}}();r.fetchRawTile=function(){var e=t._asyncToGenerator(function*(b,a,c,d={}){const {storageInfo:h,extent:p}=this.rasterInfo;var {transposeInfo:f}=h,g=w.isSome(f)&&!!d.transposedVariableName;if(this._slices&&!g&&null==d.sliceId)return null;({data:d}=yield this.request(`${this.url}/tile/${g?
0:h.maximumPyramidLevel-b+this._levelOffset}/${a}/${c}`,{query:this._slices?g?{variable:d.transposedVariableName}:{sliceId:d.sliceId||0}:null,responseType:"array-buffer",signal:d.signal}));if(!d)return null;f=g?f.tileSize:h.tileInfo.size;g=yield this.decodePixelBlock(d,{width:f[0],height:f[1],planes:null,pixelType:null,isPoint:"Elevation"===this.tileType,returnPixelInterleavedDims:g});f=h.blockBoundary[b];if("jpg"!==h.compression||c>f.minCol&&c<f.maxCol&&a>f.minRow&&a<f.maxRow)return g;const {origin:q,
blockWidth:l,blockHeight:m}=h,{x,y}=this.getPyramidPixelSize(b);var u=Math.round((p.xmin-q.x)/x)%l;b=Math.round((p.xmax-q.x)/x)%l||l;var n=Math.round((q.y-p.ymax)/y)%m;d=Math.round((q.y-p.ymin)/y)%m||m;u=c===f.minCol?u:0;n=a===f.minRow?n:0;O.setValidBoundary(g,{x:u,y:n},{width:(c===f.maxCol?b:l)-u,height:(a===f.maxRow?d:m)-n});return g});return function(b,a,c){return e.apply(this,arguments)}}();r.getSliceIndex=function(e){if(!this._slices||w.isNone(e)||0===e.length)return null;for(let b=0;b<this._slices.length;b++){const a=
this._slices[b].multidimensionalDefinition;if(a.length===e.length&&!a.some(c=>{var d=e.find(p=>c.variableName===p.variableName&&p.dimensionName===c.dimensionName);if(!d)return!0;const h=Array.isArray(c.values[0])?`${c.values[0][0]}-${c.values[0][1]}`:c.values[0];d=Array.isArray(d.values[0])?`${d.values[0][0]}-${d.values[0][1]}`:d.values[0];return h!==d}))return b}return null};r.fetchVariableStatisticsHistograms=function(){var e=t._asyncToGenerator(function*(b,a){var c=this.request(this.url+"/statistics",
{query:{variable:b,f:"json"},signal:a}).then(d=>{var h;return null==(h=d.data)?void 0:h.statistics});b=this.request(this.url+"/histograms",{query:{variable:b,f:"json"},signal:a}).then(d=>{var h;return null==(h=d.data)?void 0:h.histograms});c=yield Promise.all([c,b]);c[0]&&c[0].forEach(d=>{d.avg=d.mean;d.stddev=d.standardDeviation});return{statistics:c[0]||null,histograms:c[1]||null}});return function(b,a){return e.apply(this,arguments)}}();r.computeBestPyramidLevelForLocation=function(){var e=t._asyncToGenerator(function*(b,
a={}){if(!this._tilemapCache)return 0;b=this.identifyPixelLocation(b,0,w.unwrap(a.datumTransformation));if(null===b)return null;let c=0;var {maximumPyramidLevel:d}=this.rasterInfo.storageInfo;d=d-c+this._levelOffset;const h=b.srcLocation;for(;0<=d;){try{if("available"===(yield this._tilemapCache.fetchAvailability(d,b.row,b.col,a)))break}catch{}d--;c++;b=this.identifyPixelLocation(h,c,w.unwrap(a.datumTransformation));if(null===b)return null}return-1===d||null==b?null:c});return function(b){return e.apply(this,
arguments)}}();r._fetchRasterInfo=function(){var e=t._asyncToGenerator(function*(b){var a=this.sourceJSON;if("Map"===this.tileType){b=Math.ceil((a.extent.xmax-a.extent.xmin)/a.pixelSizeX-.1);var c=Math.ceil((a.extent.ymax-a.extent.ymin)/a.pixelSizeY-.1);const d=R.fromJSON(a.spatialReference||a.extent.spatialReference),h=new S({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:d});return new I({width:b,height:c,bandCount:3,extent:T.fromJSON(a.extent),spatialReference:d,pixelSize:h,pixelType:"u8",statistics:null,
keyProperties:{DataType:"processed"}})}({signal:c}=b);b=Q.fetchServiceRasterInfo(this.url,this.sourceJSON,{signal:c,query:this.ioConfig.customFetchParameters});a=a.hasMultidimensions?this.request(`${this.url}/slices`,{query:{f:"json"},signal:c}).then(d=>d.data&&d.data.slices).catch(()=>null):null;a=yield Promise.all([b,a]);this._slices=a[1];return a[0]});return function(b){return e.apply(this,arguments)}}();r._fixScaleInServiceInfo=function(){const {sourceJSON:e}=this;e.minScale&&0>e.minScale&&(e.minScale=
0);e.maxScale&&0>e.maxScale&&(e.maxScale=0)};r._fixGCSShift=function(e){const {extent:b,spatialReference:a}=e;0===b.xmin&&360===b.xmax&&a.wkid&&a.isGeographic&&(e.nativeExtent=e.extent,e.transform=new P,e.extent=e.transform.forwardTransform(b))};return B}(N);z.__decorate([D.property({type:String,json:{write:!0}})],v.prototype,"datasetFormat",void 0);z.__decorate([D.property()],v.prototype,"tileType",void 0);return v=z.__decorate([H.subclass("esri.layers.support.rasterDatasets.ImageServerRaster")],
v)});