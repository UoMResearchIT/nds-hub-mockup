// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../request ../../../../core/asyncUtils ../../../../core/Error ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/Version ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../support/requestImageUtils ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Texture ../../webgl-engine/materials/DefaultMaterial ../../../webgl/enums".split(" "),
function(w,x,R,I,S,T,v,J,K,L,A,U,r,V,W,X,M){function B(){B=x._asyncToGenerator(function*(a,b){a=yield Y(a,b);b=yield N(a.textureDefinitions,b);return{resource:a,textures:b}});return B.apply(this,arguments)}function Y(a,b){return C.apply(this,arguments)}function C(){C=x._asyncToGenerator(function*(a,b){const f=v.isSome(b)&&b.streamDataRequester;if(f)return Z(a,f,b);a=yield I.result(R(a,v.unwrap(b)));if(!0===a.ok)return a.value.data;J.throwIfAbortError(a.error);O(a.error)});return C.apply(this,arguments)}
function Z(a,b,f){return D.apply(this,arguments)}function D(){D=x._asyncToGenerator(function*(a,b,f){a=yield I.result(b.request(a,"json",f));if(!0===a.ok)return a.value;J.throwIfAbortError(a.error);O(a.error.details.url)});return D.apply(this,arguments)}function O(a){throw new S("",`Request for object resource failed: ${a}`);}function aa(a){const b=A.empty();a.forEach(f=>{f=f.boundingInfo;v.isSome(f)&&(A.expandWithVec3(b,f.getBBMin()),A.expandWithVec3(b,f.getBBMax()))});return b}function N(a,b){return E.apply(this,
arguments)}function E(){E=x._asyncToGenerator(function*(a,b){const f=[];for(const q in a){var m=a[q],l=m.images[0].data;if(!l){n.warn("Externally referenced texture data is not yet supported");continue}l=m.encoding+";base64,"+l;const t="/textureDefinitions/"+q,u="rgba"===m.channels?m.alphaChannelUsage||"transparency":"none",y={noUnpackFlip:!0,wrap:{s:M.TextureWrapMode.REPEAT,t:M.TextureWrapMode.REPEAT},preMultiplyAlpha:P(u)!==r.AlphaDiscardMode.Opaque};m=v.isSome(b)&&b.disableTextures?Promise.resolve(null):
U.requestImage(l,b);f.push(m.then(F=>({refId:t,image:F,params:y,alphaChannelUsage:u})))}a=yield Promise.all(f);b={};for(const q of a)b[q.refId]=q;return b});return E.apply(this,arguments)}function P(a){switch(a){case "mask":return r.AlphaDiscardMode.Mask;case "maskAndTransparency":return r.AlphaDiscardMode.MaskBlend;case "none":return r.AlphaDiscardMode.Opaque;case "transparency":return r.AlphaDiscardMode.Blend;default:return r.AlphaDiscardMode.Blend}}const n=T.getLogger("esri.views.3d.layers.graphics.objectResourceUtils"),
ba=new K.Version(1,2,"wosr");w.createTextureResources=N;w.load=function(a,b){return B.apply(this,arguments)};w.processLoadResult=function(a,b){const f=[],m=[],l=[],q=[],t=a.resource;var u=K.Version.parse(t.version||"1.0","wosr");ba.validate(u);u=t.model.name;const y=t.model.geometries,F=t.materialDefinitions;a=a.textures;let Q=0;const G=new Map;for(let H=0;H<y.length;H++){var e=y[H],p=e,d=p.params,g=d.topology;var c=!0;d.vertexAttributes||(n.warn("Geometry must specify vertex attributes"),c=!1);switch(d.topology){case "PerAttributeArray":break;
case "Indexed":case null:case void 0:g=d.faces;if(!g)n.warn("Indexed geometries must specify faces"),c=!1;else if(d.vertexAttributes)for(const h in d.vertexAttributes)(d=g[h])&&d.values?(null!=d.valueType&&"UInt32"!==d.valueType&&(n.warn(`Unsupported indexed geometry indices type '${d.valueType}', only UInt32 is currently supported`),c=!1),null!=d.valuesPerElement&&1!==d.valuesPerElement&&(n.warn(`Unsupported indexed geometry values per element '${d.valuesPerElement}', only 1 is currently supported`),
c=!1)):(n.warn(`Indexed geometry does not specify face indices for '${h}' attribute`),c=!1);break;default:n.warn(`Unsupported topology '${g}'`),c=!1}p.params.material||(n.warn("Geometry requires material"),c=!1);p=p.params.vertexAttributes;for(const h in p)p[h].values||(n.warn("Geometries with externally defined attributes are not yet supported"),c=!1);if(c){c=e.params;c={id:1,material:c.material,texture:c.texture,region:c.texture};d=e.params.vertexAttributes;p=[];for(const h in d)g=d[h],p.push([h,
{data:g.values,size:g.valuesPerElement,exclusive:!0}]);d=[];if("PerAttributeArray"!==e.params.topology){e=e.params.faces;for(const h in e)d.push([h,new Uint32Array(e[h].values)])}if((e=a&&a[c.texture])&&!G.has(c.texture)){const {image:h,params:ca}=e;g=new W.Texture(h,ca);q.push(g);G.set(c.texture,g)}g=(g=G.get(c.texture))?g.id:void 0;var k=l[c.material]?l[c.material][c.texture]:null;if(!k){k=c.material.substring(c.material.lastIndexOf("/")+1);k=F[k].params;1===k.transparency&&(k.transparency=0);var z=
e&&e.alphaChannelUsage;z=0<k.transparency||"transparency"===z||"maskAndTransparency"===z;const h=e?P(e.alphaChannelUsage):void 0;e={ambient:L.fromArray(k.diffuse),diffuse:L.fromArray(k.diffuse),opacity:1-(k.transparency||0),transparent:z,textureAlphaMode:h,textureAlphaCutoff:.33,textureId:g,initTextureTransparent:!0,doubleSided:!0,cullFace:r.CullFaceOptions.None,colorMixMode:k.externalColorMixMode||"tint",textureAlphaPremultiplied:e?!!e.params.preMultiplyAlpha:!1};v.isSome(b)&&b.materialParamsMixin&&
Object.assign(e,b.materialParamsMixin);k=new X.DefaultMaterial(e);l[c.material]||(l[c.material]={});l[c.material][c.texture]=k}m.push(k);c=new V.Geometry(p,d);Q+=d.position?d.position.length:0;f.push(c)}}return{name:u,stageResources:{textures:q,materials:m,geometries:f},pivotOffset:t.model.pivotOffset,boundingBox:aa(f),numberOfVertices:Q,lodThreshold:null}};Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});