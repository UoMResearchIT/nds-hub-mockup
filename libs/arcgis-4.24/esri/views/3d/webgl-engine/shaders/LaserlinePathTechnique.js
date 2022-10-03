// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/Program ../lib/VertexAttribute ../../../../chunks/LaserlinePath.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(k,f,l,m,b,n,c,p,g,e){b=function(d){function a(){return d.apply(this,arguments)||this}l._inheritsLoose(a,d);var h=a.prototype;h.initializeProgram=function(q){const r=a.shader.get().build(this.configuration);
return new n.Program(q.rctx,r,a.attributeLocations)};h.initializePipeline=function(){return e.makePipelineState({blending:e.simpleBlendingParams(g.BlendFactor.ONE,g.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:e.defaultColorWriteParams})};return a}(b.ShaderTechnique);b.shader=new m.ReloadableShaderModule(p.LaserlinePath,()=>new Promise((d,a)=>k(["./LaserlinePath.glsl"],d,a)));b.attributeLocations=new Map([[c.VertexAttribute.START,0],[c.VertexAttribute.END,1],[c.VertexAttribute.UP,2],[c.VertexAttribute.EXTRUDE,
3]]);f.LaserlinePathTechnique=b;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});