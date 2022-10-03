// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/quat ../../../../chunks/quatf64 ../../../../chunks/vec3 ../../../../chunks/vec3f32 ../../../../chunks/vec3f64 ../../../../chunks/sphere".split(" "),function(n,z,A,K,L,r,v,M,N,w,O,q,B){let P=function(){function g(){this._transform=v.create();this._transformInverse=new x({value:this._transform},r.invert,
v.create);this._transformInverseTranspose=new x(this._transformInverse,r.transpose,v.create);this._transformTranspose=new x({value:this._transform},r.transpose,v.create);this._transformInverseRotation=new x({value:this._transform},K.normalFromMat4Legacy,L.create)}var h=g.prototype;h._invalidateLazyTransforms=function(){this._transformInverse.invalidate();this._transformInverseTranspose.invalidate();this._transformTranspose.invalidate();this._transformInverseRotation.invalidate()};h.setTransformMatrix=
function(a){r.copy(this._transform,a)};h.multiplyTransform=function(a){r.multiply(this._transform,this._transform,a)};h.set=function(a){r.copy(this._transform,a);this._invalidateLazyTransforms()};h.setAndInvalidateLazyTransforms=function(a,b){this.setTransformMatrix(a);this.multiplyTransform(b);this._invalidateLazyTransforms()};z._createClass(g,[{key:"transform",get:function(){return this._transform}},{key:"inverse",get:function(){return this._transformInverse.value}},{key:"inverseTranspose",get:function(){return this._transformInverseTranspose.value}},
{key:"inverseRotation",get:function(){return this._transformInverseRotation.value}},{key:"transpose",get:function(){return this._transformTranspose.value}}]);return g}(),x=function(){function g(h,a,b){this.original=h;this.update=a;this.dirty=!0;this.transform=b()}g.prototype.invalidate=function(){this.dirty=!0};z._createClass(g,[{key:"value",get:function(){this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1);return this.transform}}]);return g}(),C=function(){function g(a=0){this.offset=
a;this.tmpVertex=q.create()}var h=g.prototype;h.applyToVertex=function(a,b,c){const d=a+this.localOrigin[0],e=b+this.localOrigin[1],f=c+this.localOrigin[2],m=this.offset/Math.sqrt(d*d+e*e+f*f);this.tmpVertex[0]=a+d*m;this.tmpVertex[1]=b+e*m;this.tmpVertex[2]=c+f*m;return this.tmpVertex};h.applyToAabb=function(a){for(var b=0;3>b;++b)p[b]=a[0+b]+this.localOrigin[b],y[b]=a[3+b]+this.localOrigin[b],t[b]=p[b];b=this.applyToVertex(p[0],p[1],p[2]);for(var c=0;3>c;++c)a[c]=b[c],a[c+3]=b[c];b=e=>{e=this.applyToVertex(e[0],
e[1],e[2]);for(let f=0;3>f;++f)a[f+0]=Math.min(a[f+0],e[f]),a[f+3]=Math.max(a[f+3],e[f])};for(c=1;8>c;++c){for(var d=0;3>d;++d)t[d]=0===(c&1<<d)?p[d]:y[d];b(t)}c=0;for(d=0;3>d;++d)0>p[d]*y[d]&&(c|=1<<d);if(0!==c&&7!==c)for(d=0;8>d;++d)if(0===(c&d)){for(let e=0;3>e;++e)t[e]=c[e]?0:0!==(d&1<<e)?p[e]:y[e];b(t)}for(b=0;3>b;++b)a[b+0]-=this.localOrigin[b],a[b+3]-=this.localOrigin[b];return a};return g}();const p=q.create(),y=q.create(),t=q.create();let F=function(){function g(a=0){this.componentLocalOriginLength=
0;this._tmpVertex=q.create();this._mbs=B.create();this._obb={center:q.create(),halfSize:O.create(),quaternion:null};this._offset=this._totalOffset=0;this._resetOffset(a)}var h=g.prototype;h._resetOffset=function(a){this._totalOffset=this._offset=a};h.applyToVertex=function(a,b,c){const d=c+this.componentLocalOriginLength,e=this._totalOffset/Math.sqrt(a*a+b*b+d*d);this._tmpVertex[0]=a+a*e;this._tmpVertex[1]=b+b*e;this._tmpVertex[2]=c+d*e;return this._tmpVertex};h.applyToAabb=function(a){const b=a[0],
c=a[1],d=a[2]+this.componentLocalOriginLength,e=a[3],f=a[4],m=a[5]+this.componentLocalOriginLength;var k=0>b*e?0:Math.min(Math.abs(b),Math.abs(e)),l=0>c*f?0:Math.min(Math.abs(c),Math.abs(f)),u=0>d*m?0:Math.min(Math.abs(d),Math.abs(m));k=Math.sqrt(k*k+l*l+u*u);if(k<this._totalOffset)return a[0]-=0>b?this._totalOffset:0,a[1]-=0>c?this._totalOffset:0,a[2]-=0>d?this._totalOffset:0,a[3]+=0<e?this._totalOffset:0,a[4]+=0<f?this._totalOffset:0,a[5]+=0<m?this._totalOffset:0,a;l=Math.max(Math.abs(b),Math.abs(e));
u=Math.max(Math.abs(c),Math.abs(f));const D=Math.max(Math.abs(d),Math.abs(m));l=this._totalOffset/Math.sqrt(l*l+u*u+D*D);k=this._totalOffset/k;a[0]+=b*(0<b?l:k);a[1]+=c*(0<c?l:k);a[2]+=d*(0<d?l:k);a[3]+=e*(0>e?l:k);a[4]+=f*(0>f?l:k);a[5]+=m*(0>m?l:k);return a};h.applyToMbs=function(a){const b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]),c=this._totalOffset/b;this._mbs[0]=a[0]+a[0]*c;this._mbs[1]=a[1]+a[1]*c;this._mbs[2]=a[2]+a[2]*c;this._mbs[3]=a[3]+a[3]*this._totalOffset/b;return this._mbs};h.applyToObb=
function(a){var b=a.center;const c=this._totalOffset/Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]);this._obb.center[0]=b[0]+b[0]*c;this._obb.center[1]=b[1]+b[1]*c;this._obb.center[2]=b[2]+b[2]*c;w.transformQuat(this._obb.halfSize,a.halfSize,a.quaternion);w.add(this._obb.halfSize,this._obb.halfSize,a.center);b=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);this._obb.halfSize[0]+=this._obb.halfSize[0]*
b;this._obb.halfSize[1]+=this._obb.halfSize[1]*b;this._obb.halfSize[2]+=this._obb.halfSize[2]*b;w.subtract(this._obb.halfSize,this._obb.halfSize,a.center);M.conjugate(E,a.quaternion);w.transformQuat(this._obb.halfSize,this._obb.halfSize,E);this._obb.halfSize[0]*=0>this._obb.halfSize[0]?-1:1;this._obb.halfSize[1]*=0>this._obb.halfSize[1]?-1:1;this._obb.halfSize[2]*=0>this._obb.halfSize[2]?-1:1;this._obb.quaternion=a.quaternion;return this._obb};z._createClass(g,[{key:"offset",get:function(){return this._offset},
set:function(a){this._resetOffset(a)}},{key:"componentOffset",set:function(a){this._totalOffset=this._offset+a}},{key:"localOrigin",set:function(a){this.componentLocalOriginLength=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])}}]);return g}(),G=function(){function g(a=0){this.offset=a;this.sphere=B.create();this.tmpVertex=q.create()}var h=g.prototype;h.applyToVertex=function(a,b,c){const d=this.objectTransform.transform;let e=d[0]*a+d[4]*b+d[8]*c+d[12],f=d[1]*a+d[5]*b+d[9]*c+d[13];a=d[2]*a+d[6]*b+d[10]*
c+d[14];b=this.offset/Math.sqrt(e*e+f*f+a*a);e+=e*b;f+=f*b;a+=a*b;b=this.objectTransform.inverse;this.tmpVertex[0]=b[0]*e+b[4]*f+b[8]*a+b[12];this.tmpVertex[1]=b[1]*e+b[5]*f+b[9]*a+b[13];this.tmpVertex[2]=b[2]*e+b[6]*f+b[10]*a+b[14];return this.tmpVertex};h.applyToMinMax=function(a,b){const c=this.offset/Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);a[0]+=a[0]*c;a[1]+=a[1]*c;a[2]+=a[2]*c;a=this.offset/Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]);b[0]+=b[0]*a;b[1]+=b[1]*a;b[2]+=b[2]*a};h.applyToAabb=function(a){var b=
this.offset/Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);a[0]+=a[0]*b;a[1]+=a[1]*b;a[2]+=a[2]*b;b=this.offset/Math.sqrt(a[3]*a[3]+a[4]*a[4]+a[5]*a[5]);a[3]+=a[3]*b;a[4]+=a[4]*b;a[5]+=a[5]*b;return a};h.applyToBoundingSphere=function(a){const b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]),c=this.offset/b;this.sphere[0]=a[0]+a[0]*c;this.sphere[1]=a[1]+a[1]*c;this.sphere[2]=a[2]+a[2]*c;this.sphere[3]=a[3]+a[3]*this.offset/b;return this.sphere};return g}();const H=new G,I=new F,J=new C,E=N.create();n.I3SVerticalOffsetGlobalViewingMode=
F;n.IntersectorTransform=P;n.Object3DVerticalOffsetGlobalViewingMode=G;n.TERRAIN_ID="terrain";n.TerrainVerticalOffsetGlobalViewingMode=C;n.getVerticalOffsetI3S=function(g){return A.isSome(g)?(I.offset=g,I):null};n.getVerticalOffsetObject3D=function(g){return A.isSome(g)?(H.offset=g,H):null};n.getVerticalOffsetTerrain=function(g){return A.isSome(g)?(J.offset=g,J):null};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});