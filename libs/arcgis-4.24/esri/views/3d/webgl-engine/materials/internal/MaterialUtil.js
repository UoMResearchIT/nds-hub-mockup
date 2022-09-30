// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/arrayUtils ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/aaBoundingBox ../../lib/basicInterfaces ../../lib/screenSizePerspectiveUtils ../../lib/Util ../../lib/VertexAttribute ../renderers/utils".split(" "),function(z,Z,Q,G,H,J,M,aa,ba,ca,K,da){function R(a,b,c,e,g,f){if(!G.isNone(a)){var d=S(b,c,ea);M.setMin(L,a.getBBMin());M.setMax(L,a.getBBMax());G.isSome(g)&&g.applyToAabb(L);
if(T(L,b,d,e)){const {primitiveIndices:q,indices:u,position:n}=a;d=q?q.length:u.length/3;if(1E3<d&&(a=a.getChildren(),void 0!==a)){for(d=0;8>d;++d)void 0!==a[d]&&R(a[d],b,c,e,g,f);return}N(b,c,0,d,u,n,q,g,f)}}}function N(a,b,c,e,g,f,d,q,u){if(d){var n=f.data;f=f.stride||f.size;var A=a[0],y=a[1];a=a[2];var w=b[0]-A,C=b[1]-y;for(b=b[2]-a;c<e;++c){var D=d[c],h=3*D,k=f*g[h++],r=n[k++],m=n[k++],l=n[k];k=f*g[h++];var t=n[k++],x=n[k++],p=n[k];k=f*g[h];h=n[k++];var v=n[k++];k=n[k];G.isSome(q)&&([r,m,l]=q.applyToVertex(r,
m,l,c),[t,x,p]=q.applyToVertex(t,x,p,c),[h,v,k]=q.applyToVertex(h,v,k,c));t-=r;x-=m;p-=l;h-=r;v-=m;k-=l;var E=C*k-v*b,I=b*h-k*w;const F=w*v-h*C;var B=t*E+x*I+p*F;if(!(Math.abs(B)<=Number.EPSILON)){r=A-r;m=y-m;l=a-l;E=r*E+m*I+l*F;if(0<B){if(0>E||E>B)continue}else if(0<E||E<B)continue;I=m*p-x*l;l=l*t-p*r;m=r*x-t*m;r=w*I+C*l+b*m;if(0<B){if(0>r||E+r>B)continue}else if(0<r||E+r<B)continue;l=(h*I+v*l+k*m)/B;0<=l&&(t=O(t,x,p,h,v,k,U),u(l,t,D,!1))}}}else{d=f.data;n=f.stride||f.size;f=a[0];A=a[1];y=a[2];a=
b[0]-f;w=b[1]-A;C=b[2]-y;for(let F=c,P=3*c;F<e;++F)if(h=n*g[P++],m=d[h++],l=d[h++],p=d[h],h=n*g[P++],b=d[h++],c=d[h++],D=d[h],h=n*g[P++],t=d[h++],x=d[h++],h=d[h],G.isSome(q)&&([m,l,p]=q.applyToVertex(m,l,p,F),[b,c,D]=q.applyToVertex(b,c,D,F),[t,x,h]=q.applyToVertex(t,x,h,F)),b-=m,c-=l,D-=p,t-=m,x-=l,h-=p,k=w*h-x*C,r=C*t-h*a,B=a*x-t*w,v=b*k+c*r+D*B,!(Math.abs(v)<=Number.EPSILON)){m=f-m;l=A-l;p=y-p;k=m*k+l*r+p*B;if(0<v){if(0>k||k>v)continue}else if(0<k||k<v)continue;r=l*D-c*p;p=p*b-D*m;l=m*c-b*l;m=
a*r+w*p+C*l;if(0<v){if(0>m||k+m>v)continue}else if(0<m||k+m<v)continue;p=(t*r+x*p+h*l)/v;0<=p&&(b=O(b,c,D,t,x,h,U),u(p,b,F,!1))}}}function O(a,b,c,e,g,f,d){H.set(V,a,b,c);H.set(W,e,g,f);H.cross(d,V,W);H.normalize(d,d);return d}function S(a,b,c){return H.set(c,1/(b[0]-a[0]),1/(b[1]-a[1]),1/(b[2]-a[2]))}function T(a,b,c,e){return X(a,b,c,e,Infinity)}function X(a,b,c,e,g){var f=(a[0]-e-b[0])*c[0],d=(a[3]+e-b[0])*c[0];let q=Math.min(f,d);f=Math.max(f,d);d=(a[1]-e-b[1])*c[1];const u=(a[4]+e-b[1])*c[1];
f=Math.min(f,Math.max(d,u));if(0>f)return!1;q=Math.max(q,Math.min(d,u));if(q>f)return!1;d=(a[2]-e-b[2])*c[2];a=(a[5]+e-b[2])*c[2];f=Math.min(f,Math.max(d,a));if(0>f)return!1;q=Math.max(q,Math.min(d,a));return q>f?!1:q<g}function Y(a,b){b=b?Y(b):{};for(const c in a){let e=a[c];e&&e.forEach&&(e=fa(e));null==e&&c in b||(b[c]=e)}return b}function fa(a){const b=[];a.forEach(c=>b.push(c));return b}const L=M.create(),ea=J.create(),U=J.create(),V=J.create(),W=J.create();z.colorMixModes={multiply:1,ignore:2,
replace:3,tint:4};z.computeInvDir=S;z.computeNormal=O;z.copyParameters=Y;z.intersectAabbInvDir=T;z.intersectAabbInvDirBefore=X;z.intersectDrapedRenderLineGeometry=function(a,b,c,e,g,f){if(b.options.selectionMode){b=a.vertexAttributes.get(K.VertexAttribute.POSITION).data;var d=a.vertexAttributes.get(K.VertexAttribute.SIZE),q=e[0];e=e[1];a=(((d&&d.data[0])+g)/2+4)*a.screenToWorldRatio;g=Number.MAX_VALUE;d=0;for(let w=0;w<b.length-5;w+=3){var u=b[w],n=b[w+1],A=q-u,y=e-n;u=b[w+3]-u;n=b[w+4]-n;const C=
Q.clamp((u*A+n*y)/(u*u+n*n),0,1);A=u*C-A;y=n*C-y;y=A*A+y*y;y<g&&(g=y,d=w/3)}g<a*a&&f(c.dist,c.normal,d,!1)}};z.intersectTriangleGeometry=function(a,b,c,e,g,f,d){da.isInstanceHidden(b)||(a.boundingInfo?(ca.assert(a.primitiveType===aa.PrimitiveType.Triangle),R(a.boundingInfo,e,g,c.tolerance,f,d)):(b=a.indices.get(K.VertexAttribute.POSITION),a=a.vertexAttributes.get(K.VertexAttribute.POSITION),N(e,g,0,b.length/3,b,a,void 0,f,d)))};z.intersectTriangles=N;z.updateParameters=function(a,b){let c=!1;for(const e in b){const g=
b[e];void 0!==g&&(Array.isArray(g)?null===a[e]?(a[e]=g.slice(),c=!0):Z.update(a[e],g)&&(c=!0):a[e]!==g&&(c=!0,a[e]=g))}return c};z.verticalOffsetAtDistance=function(a,b,c,e,g){let f=(c.screenLength||0)*a.pixelRatio;G.isSome(g)&&(f=ba.scale(f,e,b,g));return Q.clamp(f*Math.tan(.5*a.fovY)/(.5*a.fullHeight)*b,c.minWorldLength||0,null!=c.maxWorldLength?c.maxWorldLength:Infinity)};Object.defineProperties(z,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});