// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ./basicInterfaces ./RenderTargetHelper ../shaders/CompositingTechniqueConfiguration ../../../webgl/context-util ../../../webgl/enums".split(" "),function(p,q,r,l,t,h,u,d){let x=function(){function m(a,c){this._rctx=a;this._compositingHelper=c;this._mainColorTarget=0;this._dimensions={width:4,height:4};this._needLastFrameColorTexture=!1;this._background={type:"color",color:[0,0,0,1]};const f=a.type===u.ContextType.WEBGL2,
b=this._renderTargetHelper=new t.RenderTargetHelper(a);this.mainColorTargets=[b.registerColorTarget({name:"mainColorTarget0"}),b.registerColorTarget({name:"mainColorTarget1"})];this.frontFaceTarget=b.registerColorTarget({name:"frontFaceTarget"});a=g=>b.registerColorTarget({name:g,dataType:d.PixelType.FLOAT,internalFormat:f?d.SizedPixelFormat.RGBA32F:d.PixelFormat.RGBA,samplingMode:d.TextureSamplingMode.NEAREST});this.colorFloatTarget=a("colorFloatTarget");this.alphaFloatTarget=a("alphaFloatTarget");
this.mainDepth=b.registerDepthTarget({name:"mainDepth"});this.linearDepth=b.registerColorTarget({name:"linearDepth",samplingMode:d.TextureSamplingMode.NEAREST});this.terrainLinearDepth=b.registerColorTarget({name:"terrainLinearDepth"});this.geometryLinearDepth=b.registerColorTarget({name:"geometryLinearDepth"});this.normal=b.registerColorTarget({name:"normal"});this.highlight=b.registerColorTarget({name:"highlight",internalFormat:f?d.SizedPixelFormat.RGBA4:d.PixelFormat.RGBA,dataType:d.PixelType.UNSIGNED_SHORT_4_4_4_4});
this.hudVisibility=b.registerColorTarget({name:"hudVisibility",internalFormat:f?d.SizedPixelFormat.RGBA4:d.PixelFormat.RGBA,dataType:d.PixelType.UNSIGNED_SHORT_4_4_4_4});this.tmpColor=b.registerColorTarget({name:"tmpColor"});this.tmpDepth=b.registerDepthTarget({name:"tmpDepth"});this.hudColor=b.registerColorTarget({name:"hudColor"})}var e=m.prototype;e.dispose=function(){this._renderTargetHelper.dispose()};e.getFramebuffer=function(a,c){return this._renderTargetHelper.getFramebuffer(this._dimensions,
a,c)};e.advanceCurrentRenderTarget=function(){this._mainColorTarget=0===this._mainColorTarget&&this._needLastFrameColorTexture?1:0};e.initializeFrame=function(a){const c=this._rctx;this._dimensions.width=a.fullWidth;this._dimensions.height=a.fullHeight;this.bindTarget(this.currentColorTarget,this.mainDepth);c.setClearStencil(0);a=this._background.color;c.setClearColor(a[0]*a[3],a[1]*a[3],a[2]*a[3],a[3]);c.clearSafe(d.ClearBufferBit.COLOR_BUFFER_BIT|d.ClearBufferBit.DEPTH_BUFFER_BIT|d.ClearBufferBit.STENCIL_BUFFER_BIT)};
e.composite=function(a){r.isSome(this.colorTexture)&&this._compositingHelper.composite(a,this.colorTexture,h.AlphaMode.None)};e.renderTmpAndCompositeToMain=function(a,c,f,b=!1){this.renderToTargets(a,this.tmpColor,b?this.tmpDepth:this.mainDepth,v);this._compositingHelper.composite(c,this._getColorTexture(this.tmpColor),f)};e.renderHUDVisibility=function(a,c=!1){this.renderToTargets(a,this.hudVisibility,c?this.tmpDepth:this.mainDepth,w)};e.compositeTransparentTerrainOntoHUDVisibility=function(a){this.renderToTargets(()=>
this._compositingHelper.composite(a,this._getColorTexture(this.tmpColor),h.AlphaMode.None,1,h.CompositingFunction.TransparentToHUDVisibility),this.hudVisibility,this.tmpDepth)};e.renderOITPass=function(a,c,f){let b,g;switch(c){case l.TransparencyPassType.Color:b=this.colorFloatTarget;g=[0,0,0,0];break;case l.TransparencyPassType.Alpha:b=this.alphaFloatTarget;g=[1,1,1,1];break;case l.TransparencyPassType.FrontFace:b=this.frontFaceTarget,g=[0,0,0,0]}f?this.renderToTargets(a,b,this.tmpDepth,g,!0,!0):
this.renderToTargets(a,b,this.mainDepth,g,!1)};e.compositeTransparentTerrainOntoMain=function(a){this.bindFramebuffer();this._compositingHelper.composite(a,this._getColorTexture(this.tmpColor),h.AlphaMode.PremultipliedAlpha)};e.compositeOccludedOntoMain=function(a,c){this.bindFramebuffer();this._compositingHelper.composite(a,this._getColorTexture(this.tmpColor),h.AlphaMode.PremultipliedAlpha,c)};e.compositeTransparentOntoOpaque=function(a,c){c?(this.bindTarget(this.hudColor,this.tmpDepth),this._rctx.setClearColor(0,
0,0,1E-13),this._rctx.clearSafe(d.ClearBufferBit.COLOR_BUFFER_BIT)):this.bindFramebuffer();this._compositingHelper.compositeTransparent(a,this._getColorTexture(this.colorFloatTarget),this._getColorTexture(this.alphaFloatTarget),this._getColorTexture(this.frontFaceTarget))};e.bindFramebuffer=function(){this._rctx.bindFramebuffer(this.framebuffer)};e.renderDepthDetached=function(a){this.bindTarget(this.currentColorTarget);a();this.bindTarget(this.currentColorTarget,this.mainDepth)};e.disposeTarget=
function(a){this._renderTargetHelper.disposeTargetResource(a)};e.renderToTargets=function(a,c,f,b,g=!1,k=!1){const n=this._rctx;c=this.bindTarget(c,f);f=0;b&&(n.setClearColor(b[0],b[1],b[2],Math.max(1E-13,b[3])),f|=d.ClearBufferBit.COLOR_BUFFER_BIT);g&&(f|=d.ClearBufferBit.DEPTH_BUFFER_BIT);!1===k?k=0:(!0===k&&(k=255),f|=d.ClearBufferBit.STENCIL_BUFFER_BIT);f&&n.clearSafe(f,k);a();n.gl.flush();this.bindTarget(this.currentColorTarget,this.mainDepth);return c};e.bindTarget=function(a,c){a=this._renderTargetHelper.getFramebuffer(this._dimensions,
a,c);this._rctx.bindFramebuffer(a);return a};e._getColorTexture=function(a){return this._renderTargetHelper.getColorTexture(a,this._dimensions)};q._createClass(m,[{key:"width",get:function(){return this._dimensions.width}},{key:"height",get:function(){return this._dimensions.height}},{key:"background",get:function(){return this._background},set:function(a){this._background=a}},{key:"currentColorTarget",get:function(){return this.mainColorTargets[this._mainColorTarget]}},{key:"previousColorTarget",
get:function(){return this.mainColorTargets[1-this._mainColorTarget]}},{key:"framebuffer",get:function(){return this.getFramebuffer(this.currentColorTarget,this.mainDepth)}},{key:"colorTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.currentColorTarget)}},{key:"depthTexture",get:function(){return this._renderTargetHelper.getAllocatedDepthTexture(this.mainDepth)}},{key:"linearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.linearDepth)}},
{key:"terrainLinearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.terrainLinearDepth)}},{key:"geometryLinearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.geometryLinearDepth)}},{key:"lastFrameColorTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.previousColorTarget)}},{key:"normalTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.normal)}},
{key:"highlightTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.highlight)}},{key:"hudVisibilityTexture",get:function(){return this._getColorTexture(this.hudVisibility)}},{key:"tmpColorTexture",get:function(){return this._getColorTexture(this.tmpColor)}},{key:"hudColorTexture",get:function(){return this._getColorTexture(this.hudColor)}},{key:"mainColorTexture",get:function(){return this._getColorTexture(this.currentColorTarget)}},{key:"needLastFrameColorTexture",
get:function(){return this._needLastFrameColorTexture},set:function(a){!a&&this._needLastFrameColorTexture&&(this._mainColorTarget=0,this.disposeTarget(this.mainColorTargets[1]));this._needLastFrameColorTexture=a}},{key:"gpuMemoryUsage",get:function(){let a=0;this._renderTargetHelper&&(a+=this._renderTargetHelper.gpuMemoryUsage);return a}}]);return m}();const v=[0,0,0,0],w=[0,1,0,1];p.OffscreenRendering=x;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});