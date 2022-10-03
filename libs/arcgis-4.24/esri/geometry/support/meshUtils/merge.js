// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../MeshComponent ../MeshTransform ../MeshVertexAttributes ./georeference".split(" "),function(B,E,m,C,F,G,H,I,D){function J(a){let b=null,e=!0;const c=F.create();let n=0,k=!1;for(const f of a)if(!m.isSome(b)||!m.isNone(f.transform)&&f.transform.equals(b)||(e=!1),m.isSome(f.transform)){if(m.isSome(b)&&b.geographic!==f.transform.geographic)return A.error("merge()","Inconsistent geographic mode for provided geometries transform. Some are geographic while others are not, unable to merge geometries."),
null;m.isNone(b)&&(b=f.transform);f.transform.geographic&&(k=!0);n++;C.add(c,c,f.transform.origin)}if(m.isNone(b))return{transform:null,rebake:!1};if(e)return{transform:b.clone(),rebake:!1};a=C.scale(c,c,1/n);return{transform:new H({origin:a,geographic:k}),rebake:!0}}function x(a,b,e,c,n){if(b){var k=b.position;if(k)if(b=b[a],e=e[a],m.isNone(b)){b=c[a];var f=p[a];if(m.isSome(e)){for(var h=0;h<k.length;h+=3)for(let q=0;q<f;q++)e[b++]=n;c[a]=b}}else if(m.isSome(e)&&m.isSome(b)){n=0;k=c[a];f=b.length;
for(h=0;h<f;h++)e[k++]=b[n++];c[a]+=b.length}}}const A=E.getLogger("esri.geometry.support.triangleMeshMerge"),p={position:3,normal:3,tangent:4,uv:2,color:4};B.merge=function(a,b){var e,c;if(0===a.length)return A.error("merge()","Must specify one more geometries to merge"),null;const n=a[0].spatialReference;for(var k of a){if(!k.spatialReference.equals(n))return A.error("merge()","Geometries must all be in the same spatial reference"),null;if(!k.loaded)return A.error("merge()","Geometries must all be loaded before merging"),
null}k=J(a);if(m.isNone(k))return null;var f=0,h=0,q=0,y=0,l=0,d=e=!1;var r=c=!1;for(v of a){var g=v.vertexAttributes;if(g&&g.position&&(g.uv&&(e=!0),g.normal&&(d=!0),g.tangent&&(r=!0),g.color&&(c=!0),d&&e&&c&&r))break}var v=d;for(u of a)(d=u.vertexAttributes)&&d.position&&(f+=d.position.length,e&&(h+=d.position.length/p.position*p.uv),v&&(q+=d.position.length/p.position*p.normal),c&&(y+=d.position.length/p.position*p.color),r&&(l+=d.position.length/p.position*p.tangent));var u=new I.MeshVertexAttributes({position:new Float64Array(f),
uv:h?new Float32Array(h):null,normal:q?new Float32Array(q):null,tangent:l?new Float32Array(l):null,color:y?new Uint8Array(y):null});f=[];h={position:0,uv:0,normal:0,tangent:0,color:0};q=new Map;y=new Map;for(const w of a){a=w;l=k;l.rebake?(r=D.georeferenceApplyTransform(a.vertexAttributes,a.transform,a.spatialReference),a=m.isSome(l.transform)?D.ungeoreference(r,l.transform.getOriginPoint(a.spatialReference),{geographic:l.transform.geographic}):r):a=a.vertexAttributes;v=a;if(b&&b.reuseMaterials&&
w.components)for(const z of w.components)z.material&&q.set(z.material,z.material);a=w;l=h;c=q;e=y;r=f;if(a.components)for(const z of a.components){d=z.cloneWithDeduplication(c,e);g=l.position/3;if(d.faces)for(var t=0;t<d.faces.length;t++)d.faces[t]+=g;else for(d.faces=new Uint32Array(a.vertexAttributes.position.length/3),t=0;t<d.faces.length;t++)d.faces[t]=t+g;g=d;0<l.normal&&!a.vertexAttributes.normal&&"source"===g.shading&&(g.shading="flat");r.push(d)}else if(a.vertexAttributes&&a.vertexAttributes.position){c=
a.vertexAttributes.position.length/3;e=new Uint32Array(c);d=l.position/3;for(g=0;g<c;g++)e[g]=g+d;c=e=new G({faces:e});0<l.normal&&!a.vertexAttributes.normal&&"source"===c.shading&&(c.shading="flat");r.push(e)}x("position",v,u,h,0);x("normal",v,u,h,0);x("tangent",v,u,h,0);x("uv",w.vertexAttributes,u,h,0);x("color",w.vertexAttributes,u,h,255)}return{vertexAttributes:u,components:f,transform:k.transform,spatialReference:n}};Object.defineProperties(B,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});