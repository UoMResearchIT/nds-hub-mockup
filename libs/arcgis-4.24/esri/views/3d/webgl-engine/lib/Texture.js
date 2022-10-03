// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/compilerUtils ../../../../core/Error ../../../../core/Evented ../../../../core/mathUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/typedArrayUtil ../../../../core/urlUtils ../../../../support/requestImageUtils ../../../../support/requestUtils ./basicInterfaces ./BasisUtil ./ContentObject ./ContentObjectType ./DDSUtil ./glUtil3D ./Util ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util ../../../webgl/capabilities/isWebGL2Context".split(" "),
function(C,w,D,E,F,x,n,y,p,A,G,H,B,z,r,I,J,K,L,h,M,t,N,O){r=function(m){function l(a,c){var b=m.call(this)||this;b.data=a;b.type=I.ContentObjectType.Texture;b._glTexture=null;b._powerOfTwoStretchInfo=null;b._loadingPromise=null;b._loadingController=null;b.events=new F;b.params=c||{};b.params.mipmap=!1!==b.params.mipmap;b.params.noUnpackFlip=b.params.noUnpackFlip||!1;b.params.preMultiplyAlpha=b.params.preMultiplyAlpha||!1;b.params.wrap=b.params.wrap||{s:h.TextureWrapMode.REPEAT,t:h.TextureWrapMode.REPEAT};
b.params.powerOfTwoResizeMode=b.params.powerOfTwoResizeMode||B.PowerOfTwoResizeMode.STRETCH;b.estimatedTexMemRequired=l._estimateTexMemRequired(b.data,b.params);b._startPreload();return b}w._inheritsLoose(l,m);var g=l.prototype;g._startPreload=function(){const a=this.data;n.isNone(a)||(a instanceof HTMLVideoElement?this._startPreloadVideoElement(a):a instanceof HTMLImageElement&&this._startPreloadImageElement(a))};g._startPreloadVideoElement=function(a){if(!(A.isBlobProtocol(a.src)||"auto"===a.preload&&
a.crossOrigin)){a.preload="auto";a.crossOrigin="anonymous";const c=!a.paused;a.src=a.src;if(c&&a.autoplay){const b=()=>{a.removeEventListener("canplay",b);a.play()};a.addEventListener("canplay",b)}}};g._startPreloadImageElement=function(a){A.isDataProtocol(a.src)||A.isBlobProtocol(a.src)||a.crossOrigin||(a.crossOrigin="anonymous",a.src=a.src)};l._getDataDimensions=function(a){return a instanceof HTMLVideoElement?{width:a.videoWidth,height:a.videoHeight}:a};l._estimateTexMemRequired=function(a,c){if(n.isNone(a))return 0;
if(p.isArrayBuffer(a)||p.isUint8Array(a))return c.encoding===l.KTX2_ENCODING?z.estimateMemoryKTX2(a,c.mipmap):c.encoding===l.BASIS_ENCODING?z.estimateMemoryBasis(a,c.mipmap):a.byteLength;const {width:b,height:d}=a instanceof Image||a instanceof ImageData||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement?l._getDataDimensions(a):c;return(c.mipmap?4/3:1)*b*d*(c.components||4)||0};g.dispose=function(){this.data=void 0};g._createDescriptor=function(a){var c;return{target:h.TextureType.TEXTURE_2D,
pixelFormat:h.PixelFormat.RGBA,dataType:h.PixelType.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?h.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:h.TextureSamplingMode.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(c=this.params.maxAnisotropy)?c:this.params.mipmap?a.parameters.maxMaxAnisotropy:1}};g.load=function(a,c){if(n.isSome(this._glTexture))return this._glTexture;if(n.isSome(this._loadingPromise))return this._loadingPromise;
const b=this.data;return n.isNone(b)?this._glTexture=new t.Texture(a,this._createDescriptor(a),null):"string"===typeof b?this._loadFromURL(a,c,b):b instanceof Image?this._loadFromImageElement(a,c,b):b instanceof HTMLVideoElement?this._loadFromVideoElement(a,c,b):b instanceof ImageData||b instanceof HTMLCanvasElement?this._loadFromImage(a,b,c):(p.isArrayBuffer(b)||p.isUint8Array(b))&&this.params.encoding===l.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(a,b)):(p.isArrayBuffer(b)||p.isUint8Array(b))&&
this.params.encoding===l.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(a,b)):(p.isArrayBuffer(b)||p.isUint8Array(b))&&this.params.encoding===l.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(a,b)):p.isUint8Array(b)?this._loadFromPixelData(a,b):p.isArrayBuffer(b)?this._loadFromPixelData(a,new Uint8Array(b)):null};g.frameUpdate=function(a,c,b){if(!(this.data instanceof HTMLVideoElement)||n.isNone(this._glTexture)||this.data.readyState<u.HAVE_CURRENT_DATA||b===this.data.currentTime)return b;
if(n.isSome(this._powerOfTwoStretchInfo)){const {framebuffer:d,vao:f,sourceTexture:e}=this._powerOfTwoStretchInfo;e.setData(this.data);this._drawStretchedTexture(a,c,d,f,e,this._glTexture)}else{const {videoWidth:d,videoHeight:f}=this.data,{width:e,height:k}=this._glTexture.descriptor;d!==e||f!==k?this._glTexture.updateData(0,0,0,Math.min(d,e),Math.min(f,k),this.data):this._glTexture.setData(this.data)}this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap();this.params.updateCallback&&
this.params.updateCallback();return this.data.currentTime};g._loadFromDDSData=function(a,c){return this._glTexture=J.createDDSTexture(a,this._createDescriptor(a),c)};g._loadFromKTX2=function(a,c){return this._loadAsync(()=>z.createTextureKTX2(a,this._createDescriptor(a),c).then(b=>this._glTexture=b))};g._loadFromBasis=function(a,c){return this._loadAsync(()=>z.createTextureBasis(a,this._createDescriptor(a),c).then(b=>this._glTexture=b))};g._loadFromPixelData=function(a,c){L.assert(0<this.params.width&&
0<this.params.height);const b=this._createDescriptor(a);b.pixelFormat=1===this.params.components?h.PixelFormat.LUMINANCE:3===this.params.components?h.PixelFormat.RGB:h.PixelFormat.RGBA;b.width=this.params.width;b.height=this.params.height;return this._glTexture=new t.Texture(a,b,c)};g._loadFromURL=function(a,c,b){var d=this;return this._loadAsync(function(){var f=w._asyncToGenerator(function*(e){const k=yield G.requestImage(b,{signal:e});y.throwIfAborted(e);return d._loadFromImage(a,k,c)});return function(e){return f.apply(this,
arguments)}}())};g._loadFromImageElement=function(a,c,b){var d=this;return b.complete?this._loadFromImage(a,b,c):this._loadAsync(function(){var f=w._asyncToGenerator(function*(e){const k=yield H.loadImageAsync(b,b.src,!1,e);y.throwIfAborted(e);return d._loadFromImage(a,k,c)});return function(e){return f.apply(this,arguments)}}())};g._loadFromVideoElement=function(a,c,b){return b.readyState>=u.HAVE_CURRENT_DATA?this._loadFromImage(a,b,c):this._loadFromVideoElementAsync(a,c,b)};g._loadFromVideoElementAsync=
function(a,c,b){return this._loadAsync(d=>new Promise((f,e)=>{const k=()=>{b.removeEventListener("loadeddata",v);b.removeEventListener("error",q);n.removeMaybe(P)},v=()=>{b.readyState>=u.HAVE_CURRENT_DATA&&(k(),f(this._loadFromImage(a,b,c)))},q=Q=>{k();e(Q||new E("Failed to load video"))};b.addEventListener("loadeddata",v);b.addEventListener("error",q);const P=y.onAbort(d,()=>q(y.createAbortError()))}))};g._loadFromImage=function(a,c,b){const d=l._getDataDimensions(c);this.params.width=d.width;this.params.height=
d.height;const f=this._createDescriptor(a);f.pixelFormat=3===this.params.components?h.PixelFormat.RGB:h.PixelFormat.RGBA;if(this._requiresPowerOfTwo(a,f)&&(!x.isPowerOfTwo(d.width)||!x.isPowerOfTwo(d.height)))return this._glTexture=this._makePowerOfTwoTexture(a,c,d,f,b);f.width=d.width;f.height=d.height;return this._glTexture=new t.Texture(a,f,c)};g._loadAsync=function(a){const c=new AbortController;this._loadingController=c;const b=a(c.signal);this._loadingPromise=b;a=()=>{this._loadingController===
c&&(this._loadingController=null);this._loadingPromise===b&&(this._loadingPromise=null)};b.then(a,a);return b};g._requiresPowerOfTwo=function(a,c){var b=h.TextureWrapMode.CLAMP_TO_EDGE;b="number"===typeof c.wrapMode?c.wrapMode===b:c.wrapMode.s===b&&c.wrapMode.t===b;return!O(a.gl)&&(c.hasMipmap||!b)};g._makePowerOfTwoTexture=function(a,c,b,d,f){const {width:e,height:k}=b;b=x.nextHighestPowerOfTwo(e);const v=x.nextHighestPowerOfTwo(k);d.width=b;d.height=v;let q;switch(this.params.powerOfTwoResizeMode){case B.PowerOfTwoResizeMode.PAD:d.textureCoordinateScaleFactor=
[e/b,k/v];q=new t.Texture(a,d);q.updateData(0,0,0,e,k,c);break;case B.PowerOfTwoResizeMode.STRETCH:case null:case void 0:q=this._stretchToPowerOfTwo(a,c,d,f());break;default:D.neverReached(this.params.powerOfTwoResizeMode)}d.hasMipmap&&q.generateMipmap();return q};g._stretchToPowerOfTwo=function(a,c,b,d){const f=new t.Texture(a,b),e=new M.FramebufferObject(a,{colorTarget:h.TargetType.TEXTURE,depthStencilTarget:h.DepthStencilTargetType.NONE},f);c=new t.Texture(a,{target:h.TextureType.TEXTURE_2D,pixelFormat:b.pixelFormat,
dataType:h.PixelType.UNSIGNED_BYTE,wrapMode:h.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:h.TextureSamplingMode.LINEAR,flipped:!!b.flipped,maxAnisotropy:8,preMultiplyAlpha:b.preMultiplyAlpha},c);b=K.createQuadVAO(a);const k=a.getBoundFramebufferObject();this._drawStretchedTexture(a,d,e,b,c,f);this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:b,sourceTexture:c,framebuffer:e}:(b.dispose(!0),c.dispose(),e.detachColorTexture(),e.dispose());a.bindFramebuffer(k);return f};g._drawStretchedTexture=
function(a,c,b,d,f,e){a.bindFramebuffer(b);b=a.getViewport();a.setViewport(0,0,e.descriptor.width,e.descriptor.height);c=a.bindTechnique(c);c.setUniform4f("uColor",1,1,1,1);c.bindTexture("tex",f);a.bindVAO(d);a.drawArrays(h.PrimitiveType.TRIANGLE_STRIP,0,N.vertexCount(d,"geometry"));a.bindFramebuffer(null);a.setViewport(b.x,b.y,b.width,b.height)};g.unload=function(){if(n.isSome(this._powerOfTwoStretchInfo)){const {framebuffer:a,vao:c,sourceTexture:b}=this._powerOfTwoStretchInfo;c.dispose(!0);b.dispose();
a.dispose();this._powerOfTwoStretchInfo=this._glTexture=null}n.isSome(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null);if(n.isSome(this._loadingController)){const a=this._loadingController;this._loadingPromise=this._loadingController=null;a.abort()}this.events.emit("unloaded")};w._createClass(l,[{key:"width",get:function(){return this.params.width}},{key:"height",get:function(){return this.params.height}},{key:"glTexture",get:function(){return this._glTexture}},{key:"requiresFrameUpdates",
get:function(){return this.data instanceof HTMLVideoElement}}]);return l}(r.ContentObject);r.DDS_ENCODING="image/vnd-ms.dds";r.KTX2_ENCODING="image/ktx2";r.BASIS_ENCODING="image/x.basis";var u;(function(m){m[m.HAVE_NOTHING=0]="HAVE_NOTHING";m[m.HAVE_METADATA=1]="HAVE_METADATA";m[m.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA";m[m.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA";m[m.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(u||(u={}));C.Texture=r;Object.defineProperties(C,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});