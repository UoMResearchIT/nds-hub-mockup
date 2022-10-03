// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../color ../../definitions ../Technique ../../../../../webgl/enums".split(" "),function(f,m,n,g,p,d,e){d=function(h){function c(){return h.apply(this,arguments)||this}m._inheritsLoose(c,h);c.getStorageSpec=function({attributes:a}){return{visualVariables:!1,attributes:null!=a?a:null}};c._createRendererSchema=function(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,
dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}};c.createOrUpdateRendererSchema=function(a,k){const {attributes:l,dotValue:q,referenceScale:r,dotSize:t,dotBlendingEnabled:u,seed:v,backgroundColor:w}=k;a=n.isSome(a)&&"dot-density"===a.type?a:this._createRendererSchema();a.dotValue=q;a.dotSize=t;a.dotScale=r;a.dotBlending=u;a.seed=v;const {colors:x,activeDots:y,backgroundColor:z}=a;for(var b=0;b<p.DOT_DENSITY_MAX_FIELDS;b++)g.writeColor(x,b>=l.length?null:
l[b].color,4*b);for(b=0;8>b;b++)y[b]=b<k.attributes.length?1:0;g.writeColor(z,w);return a};c.getVariation=function(a){return{ddDotBlending:a.dotBlending}};c.getVariationHash=function(a){return a.dotBlending?1:0};return c}(d.Technique);d.type="dot-density";d.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:e.DataType.SHORT},{location:1,name:"a_id",count:3,type:e.DataType.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:e.DataType.UNSIGNED_BYTE},
{location:3,name:"a_inverseArea",count:1,type:e.DataType.FLOAT}]}};f.DotDensityTechnique=d;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});