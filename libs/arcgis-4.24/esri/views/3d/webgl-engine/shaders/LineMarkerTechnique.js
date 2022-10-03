// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderLibrary/ShaderOutputOptions ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/basicInterfaces ../lib/OrderIndependentTransparency ../lib/Program ../lib/RenderSlot ../lib/StencilUtils ../lib/VertexAttribute ../../../../chunks/LineMarker.glsl ../../../webgl/renderState".split(" "),function(u,n,v,p,w,l,x,e,y,q,a,c,z,d){const r=new Map([[c.VertexAttribute.POSITION,0],[c.VertexAttribute.UV0,
2],[c.VertexAttribute.AUXPOS1,3],[c.VertexAttribute.SIZE,6],[c.VertexAttribute.SIZEFEATUREATTRIBUTE,6],[c.VertexAttribute.COLOR,5],[c.VertexAttribute.COLORFEATUREATTRIBUTE,5],[c.VertexAttribute.OPACITYFEATUREATTRIBUTE,7]]);l=function(h){function f(){return h.apply(this,arguments)||this}v._inheritsLoose(f,h);var m=f.prototype;m.initializeProgram=function(b){const g=f.shader.get().build(this.configuration);return new y.Program(b.rctx,g,r)};m._makePipelineState=function(b,g){const k=this.configuration,
t=b===x.TransparencyPassType.NONE;return d.makePipelineState({blending:k.output===p.ShaderOutput.Color||k.output===p.ShaderOutput.Alpha?t?e.blendingDefault:e.oitBlending(b):null,depthTest:{func:e.oitDepthTest(b)},depthWrite:t?k.writeDepth&&d.defaultDepthWriteParams:e.oitDepthWrite(b),colorWrite:d.defaultColorWriteParams,stencilWrite:k.hasOccludees?a.stencilWriteMaskOn:null,stencilTest:k.hasOccludees?g?a.stencilToolMaskBaseParams:a.stencilBaseAllZerosParams:null,polygonOffset:{factor:0,units:-10}})};
m.initializePipeline=function(){this.configuration.occluder&&(this._occluderPipelineTransparent=d.makePipelineState({blending:e.blendingDefault,depthTest:a.depthCompareAlways,depthWrite:null,colorWrite:d.defaultColorWriteParams,stencilWrite:null,stencilTest:a.stencilToolTransparentOccluderParams}),this._occluderPipelineOpaque=d.makePipelineState({blending:e.blendingDefault,depthTest:a.depthCompareAlways,depthWrite:null,colorWrite:d.defaultColorWriteParams,stencilWrite:a.stencilWriteMaskOff,stencilTest:a.stencilToolMaskOccluderParams}),
this._occluderPipelineMaskWrite=d.makePipelineState({blending:null,depthTest:a.depthCompareLess,depthWrite:null,colorWrite:null,stencilWrite:a.stencilWriteMaskOn,stencilTest:a.stencilToolMaskBaseParams}));this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0);return this._makePipelineState(this.configuration.transparencyPassType,!1)};m.getPipelineState=function(b,g){return g?this._occludeePipelineState:this.configuration.occluder?b===q.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL?
this._occluderPipelineTransparent:b===q.RenderSlot.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:h.prototype.getPipelineState.call(this,b,g)};return f}(l.ShaderTechnique);l.shader=new w.ReloadableShaderModule(z.LineMarker,()=>new Promise((h,f)=>u(["./LineMarker.glsl"],h,f)));n.LineMarkerTechnique=l;n.markerVertexAttributeLocations=r;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});