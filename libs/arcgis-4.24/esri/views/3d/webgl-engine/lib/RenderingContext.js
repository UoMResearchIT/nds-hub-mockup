// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../webgl/RenderingContext"],function(k,l,e,f){f=function(g){function c(a,d,b){a=g.call(this,a,d)||this;a.newCache=b;a._refCount=1;return a}l._inheritsLoose(c,g);var h=c.prototype;h.dispose=function(){0<--this._refCount||g.prototype.dispose.call(this)};h.ref=function(){++this._refCount};h.bindTechnique=function(a,d,b,m){this.useProgram(a.program);const n=e.isSome(b)?b.slot:null;a.bindPipelineState(this,
n,m);e.isSome(d)&&e.isSome(b)&&a.bindPass(d,b);return a.program};l._createClass(c,[{key:"test",get:function(){return this.programCache.test}}]);return c}(f.RenderingContext);k.RenderingContext=f;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});