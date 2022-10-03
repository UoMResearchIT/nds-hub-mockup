// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../chunks/Fog.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(m,h,k,n,f,p,g,l,q,r,b,d){g=function(c){function a(){return c.apply(this,
arguments)||this}k._inheritsLoose(a,c);var e=a.prototype;e.initializeProgram=function(t){const u=a.shader.get().build(this.configuration);return new r.Program(t.rctx,u,q.Default3D)};e.initializePipeline=function(){return this.configuration.haze?d.makePipelineState({blending:d.separateBlendingParams(b.BlendFactor.ONE,b.BlendFactor.ZERO,b.BlendFactor.ONE_MINUS_SRC_COLOR,b.BlendFactor.ONE),colorWrite:d.defaultColorWriteParams}):d.makePipelineState({blending:d.separateBlendingParams(b.BlendFactor.SRC_ALPHA,
b.BlendFactor.ZERO,b.BlendFactor.ONE_MINUS_SRC_ALPHA,b.BlendFactor.ONE),colorWrite:d.defaultColorWriteParams})};return a}(g.ShaderTechnique);g.shader=new p.ReloadableShaderModule(f.Fog,()=>new Promise((c,a)=>m(["./Fog.glsl"],c,a)));f=function(c){function a(){var e=c.apply(this,arguments)||this;e.haze=!1;return e}k._inheritsLoose(a,c);return a}(l.ShaderTechniqueConfiguration);n.__decorate([l.parameter()],f.prototype,"haze",void 0);h.FogTechnique=g;h.FogTechniqueConfiguration=f;Object.defineProperties(h,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});