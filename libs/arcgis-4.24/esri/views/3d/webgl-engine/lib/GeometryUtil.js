// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/vec3 ../../../../chunks/vec3f32 ../../../../chunks/vec3f64 ../../../../geometry/support/plane ../../../../geometry/support/ray ./basicInterfaces ./BufferVectorMath ./Geometry ./geometryDataUtils ./Util ./VertexAttribute".split(" "),function(n,u,ca,S,da,T,ea,G,fa,Q,k){const N=ea.Vec3Compact;var U;(function(z){const E=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],H=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],J=[0,0,1,0,
1,1,0,1],b=new Uint16Array([0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5]),c=new Uint16Array(36);for(var a=0;6>a;a++)for(let e=0;6>e;e++)c[6*a+e]=a;const d=new Uint16Array(36);for(a=0;6>a;a++)d[6*a]=0,d[6*a+1]=1,d[6*a+2]=2,d[6*a+3]=2,d[6*a+4]=3,d[6*a+5]=0;z.createGeometry=function(e){Array.isArray(e)||(e=[e,e,e]);const g=Array(24);for(let f=0;8>f;f++)g[3*f]=E[f][0]*e[0],g[3*f+1]=E[f][1]*e[1],g[3*f+2]=E[f][2]*e[2];return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,
data:g,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:H}],[k.VertexAttribute.UV0,{size:2,data:J}]],[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,c],[k.VertexAttribute.UV0,d]])}})(U||(U={}));var V;(function(z){const E=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],H=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],J=new Uint16Array([5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0]),b=new Uint16Array([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]);z.createGeometry=
function(c){Array.isArray(c)||(c=[c,c,c]);const a=Array(18);for(let d=0;6>d;d++)a[3*d]=E[d][0]*c[0],a[3*d+1]=E[d][1]*c[1],a[3*d+2]=E[d][2]*c[2];return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:a,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:H}]],[[k.VertexAttribute.POSITION,J],[k.VertexAttribute.NORMAL,b]])}})(V||(V={}));var W;(function(z){const E=u.fromValues(-.5,0,-.5),H=u.fromValues(.5,0,-.5),J=u.fromValues(0,0,.5),b=u.fromValues(0,.5,0),c=u.create(),a=u.create(),d=u.create(),
e=u.create(),g=u.create();n.subtract(c,E,b);n.subtract(a,E,H);n.cross(d,c,a);n.normalize(d,d);n.subtract(c,H,b);n.subtract(a,H,J);n.cross(e,c,a);n.normalize(e,e);n.subtract(c,J,b);n.subtract(a,J,E);n.cross(g,c,a);n.normalize(g,g);const f=[E,H,J,b],h=[0,-1,0,d[0],d[1],d[2],e[0],e[1],e[2],g[0],g[1],g[2]],l=[0,1,2,3,1,0,3,2,1,3,0,2],q=[0,0,0,1,1,1,2,2,2,3,3,3];z.createGeometry=function(r){Array.isArray(r)||(r=[r,r,r]);const t=Array(12);for(let m=0;4>m;m++)t[3*m]=f[m][0]*r[0],t[3*m+1]=f[m][1]*r[1],t[3*
m+2]=f[m][2]*r[2];return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:t,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:h}]],[[k.VertexAttribute.POSITION,new Uint16Array(l)],[k.VertexAttribute.NORMAL,new Uint16Array(q)]])}})(W||(W={}));var X;(function(z){function E(b,c,a,d,e){if(Math.abs(n.dot(c,b))>e)return!1;n.cross(a,b,c);n.normalize(a,a);n.cross(d,a,b);n.normalize(d,d);return!0}function H(b,c,a,d,e,g,f){return E(b,c,e,g,f)||E(b,a,e,g,f)||E(b,d,e,g,f)}z.createBoxGeometry=U.createGeometry;
z.createDiamondGeometry=V.createGeometry;z.createTetrahedronGeometry=W.createGeometry;z.createSphereGeometry=function(b,c,a,d={uv:!0}){var e=-Math.PI,g=2*Math.PI,f=-Math.PI/2,h=Math.PI;c=Math.max(3,Math.floor(c));const l=Math.max(2,Math.floor(a));var q=(c+1)*(l+1);a=new Float32Array(3*q);const r=new Float32Array(3*q);q=new Float32Array(2*q);const t=[];let m=0;for(var v=0;v<=l;v++){var x=[];const w=v/l,C=f+w*h,D=Math.cos(C);for(let B=0;B<=c;B++){const p=B/c;var A=e+p*g;const L=Math.cos(A)*D,F=Math.sin(C);
A=-Math.sin(A)*D;a[3*m]=L*b;a[3*m+1]=F*b;a[3*m+2]=A*b;r[3*m]=L;r[3*m+1]=F;r[3*m+2]=A;q[2*m]=p;q[2*m+1]=w;x.push(m);++m}t.push(x)}b=new Uint32Array(2*c*(l-1)*3);m=0;for(e=0;e<l;e++)for(g=0;g<c;g++)f=t[e][g],h=t[e][g+1],v=t[e+1][g+1],x=t[e+1][g],0===e?(b[m++]=f,b[m++]=v,b[m++]=x):e===l-1?(b[m++]=f,b[m++]=h,b[m++]=v):(b[m++]=f,b[m++]=h,b[m++]=v,b[m++]=v,b[m++]=x,b[m++]=f);c=[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,b]];a=[[k.VertexAttribute.POSITION,{size:3,data:a,exclusive:!0}],[k.VertexAttribute.NORMAL,
{size:3,data:r,exclusive:!0}]];d.uv&&(a.push([k.VertexAttribute.UV0,{size:2,data:q,exclusive:!0}]),c.push([k.VertexAttribute.UV0,b]));d.offset&&(c[0][0]=k.VertexAttribute.OFFSET,a[0][0]=k.VertexAttribute.OFFSET,c.push([k.VertexAttribute.POSITION,new Uint32Array(b.length)]),a.push([k.VertexAttribute.POSITION,{size:3,data:Float64Array.from(d.offset),exclusive:!0}]));return new G.Geometry(a,c)};z.createPolySphereGeometry=function(b,c,a){function d(h,l){h>l&&([h,l]=[l,h]);const q=h.toString()+"."+l.toString();
if(f[q])return f[q];let r=e.length;e.length+=3;N.add(e,3*h,e,3*l,e,r);N.scale(e,r,b/N.length(e,r));r/=3;return f[q]=r}let e;a?(e=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=new Uint32Array([0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1])):(a=b*(1+Math.sqrt(5))/2,e=[-b,a,0,b,a,0,-b,-a,0,b,-a,0,0,-b,a,0,b,a,0,-b,-a,0,b,-a,a,0,-b,a,0,b,-a,0,-b,-a,0,b],a=new Uint32Array([0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]));
for(var g=0;g<e.length;g+=3)N.scale(e,g,b/N.length(e,g));let f={};for(g=0;g<c;g++){const h=a.length,l=new Uint32Array(4*h);for(let q=0;q<h;q+=3){const r=a[q],t=a[q+1],m=a[q+2],v=d(r,t),x=d(t,m),A=d(m,r),w=4*q;l[w]=r;l[w+1]=v;l[w+2]=A;l[w+3]=t;l[w+4]=x;l[w+5]=v;l[w+6]=m;l[w+7]=A;l[w+8]=x;l[w+9]=v;l[w+10]=x;l[w+11]=A}a=l;f={}}c=new Float32Array(e);for(g=0;g<c.length;g+=3)N.normalize(c,g);a=[[k.VertexAttribute.POSITION,a],[k.VertexAttribute.NORMAL,a]];c=[[k.VertexAttribute.POSITION,{size:3,data:new Float32Array(e),
exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:c,exclusive:!0}]];return new G.Geometry(c,a)};z.createPointGeometry=function(b,c,a,d,e,g,f){c=c?[c[0],c[1],c[2]]:[0,0,0];b=b?[b[0],b[1],b[2]]:[0,0,1];g=g||[0,0];a=[[k.VertexAttribute.POSITION,{size:3,data:c,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:b,exclusive:!0}],[k.VertexAttribute.UV0,{size:g.length,data:g}],[k.VertexAttribute.COLOR,{size:4,data:a?[255*a[0],255*a[1],255*a[2],3<a.length?255*a[3]:255]:[255,255,255,255],exclusive:!0}],
[k.VertexAttribute.SIZE,{size:2,data:null!=d&&2===d.length?d:[1,1]}]];null!=e&&(e=new Float32Array([e[0],e[1],e[2],e[3]]),a.push([k.VertexAttribute.AUXPOS1,{size:4,data:e}]));null!=f&&(f=new Float32Array([f[0],f[1],f[2],f[3]]),a.push([k.VertexAttribute.AUXPOS2,{size:4,data:f}]));return new G.Geometry(a,null,T.PrimitiveType.Point)};z.updatePointGeometry=function(b,c,a,d,e,g,f,h){if(null!=b){const {data:l}=h.getMutableAttribute(k.VertexAttribute.NORMAL);l[0]=b[0];l[1]=b[1];l[2]=b[2]}null!=c&&({data:b}=
h.getMutableAttribute(k.VertexAttribute.POSITION),b[0]=c[0],b[1]=c[1],b[2]=c[2]);null!=a&&({data:c}=h.getMutableAttribute(k.VertexAttribute.COLOR),c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3]);null!=d&&({data:a}=h.getMutableAttribute(k.VertexAttribute.SIZE),a[0]=d[0],a[1]=d[1]);null!=e&&({data:d}=h.getMutableAttribute(k.VertexAttribute.AUXPOS1),d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3]);null!=g&&({data:e}=h.getMutableAttribute(k.VertexAttribute.UV0),e[0]=g[0],e[1]=g[1]);null!=f&&({data:g}=h.getMutableAttribute(k.VertexAttribute.AUXPOS2),
g[0]=f[0],g[1]=f[1],g[2]=f[2],g[3]=f[3])};z.createPointArrayGeometry=function(b,c){const a=new Float32Array(3*b.length),d=new Float32Array(c?3*b.length:3),e=new Uint32Array(b.length),g=new Uint32Array(b.length);for(let f=0;f<b.length;f++)a[3*f]=b[f][0],a[3*f+1]=b[f][1],a[3*f+2]=b[f][2],c&&(d[3*f]=c[f][0],d[3*f+1]=c[f][1],d[3*f+2]=c[f][2]),e[f]=f,g[f]=0;c||(d[0]=0,d[1]=1,d[2]=0);return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:a,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:d,
exclusive:!0}],[k.VertexAttribute.UV0,{size:2,data:[0,0],exclusive:!0}]],[[k.VertexAttribute.POSITION,e],[k.VertexAttribute.NORMAL,c?e:g],[k.VertexAttribute.UV0,g]],T.PrimitiveType.Point)};z.createTriangleGeometry=function(){const b=new Uint16Array([0,1,2]),c=new Uint16Array([0,0,0]),a=new Uint16Array([0,0,0]);return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:[0,0,0,0,0,100,100,0,0],exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:[0,1,0],exclusive:!0}],[k.VertexAttribute.UV0,{size:2,
data:[0,0],exclusive:!0}]],[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,c],[k.VertexAttribute.UV0,a]])};const J=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];z.createSquareGeometry=function(b=J){const c=Array(12);for(var a=0;4>a;a++)for(let d=0;3>d;d++)c[3*a+d]=b[a][d];b=new Uint32Array([0,1,2,2,3,0]);a=new Uint32Array([0,0,0,0,0,0]);return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:c,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:[0,0,1],exclusive:!0}],[k.VertexAttribute.UV0,
{size:2,data:[0,0,1,0,1,1,0,1],exclusive:!0}],[k.VertexAttribute.COLOR,{size:4,data:[255,255,255,255],exclusive:!0}]],[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,a],[k.VertexAttribute.UV0,b],[k.VertexAttribute.COLOR,a]])};z.createConeGeometry=function(b,c,a,d,e=!0,g=!0){var f=0,h=u.fromValues(0,f,0),l=u.fromValues(0,f+b,0),q=u.fromValues(0,-1,0),r=u.fromValues(0,1,0);d&&(f=b,l=u.fromValues(0,0,0),h=u.fromValues(0,f,0),q=u.fromValues(0,1,0),r=u.fromValues(0,-1,0));h=[l,h];q=[q,r];r=a+
2;l=Math.sqrt(b*b+c*c);if(d)for(d=a-1;0<=d;d--){var t=2*Math.PI/a*d,m=u.fromValues(Math.cos(t)*c,f,Math.sin(t)*c);h.push(m);t=u.fromValues(b*Math.cos(t)/l,-c/l,b*Math.sin(t)/l);q.push(t)}else for(d=0;d<a;d++)t=2*Math.PI/a*d,m=u.fromValues(Math.cos(t)*c,f,Math.sin(t)*c),h.push(m),t=u.fromValues(b*Math.cos(t)/l,c/l,b*Math.sin(t)/l),q.push(t);b=new Uint32Array(6*(a+2));a=new Uint32Array(6*(a+2));f=c=0;if(e){for(e=3;e<h.length;e++)b[c++]=1,b[c++]=e-1,b[c++]=e,a[f++]=0,a[f++]=0,a[f++]=0;b[c++]=h.length-
1;b[c++]=2;b[c++]=1;a[f++]=0;a[f++]=0;a[f++]=0}if(g){for(g=3;g<h.length;g++)b[c++]=g,b[c++]=g-1,b[c++]=0,a[f++]=g,a[f++]=g-1,a[f++]=1;b[c++]=0;b[c++]=2;b[c++]=h.length-1;a[f++]=1;a[f++]=2;a[f++]=q.length-1}g=new Float32Array(3*r);for(e=0;e<r;e++)g[3*e]=h[e][0],g[3*e+1]=h[e][1],g[3*e+2]=h[e][2];h=new Float32Array(3*r);for(e=0;e<r;e++)h[3*e]=q[e][0],h[3*e+1]=q[e][1],h[3*e+2]=q[e][2];return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:g,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:h,
exclusive:!0}]],[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,a]])};z.createCylinderGeometry=function(b,c,a,d,e,g){d=d?u.clone(d):u.fromValues(1,0,0);e=e?u.clone(e):u.fromValues(0,0,0);g=null==g?!0:g;var f=u.create();n.normalize(f,d);var h=u.create();n.scale(h,f,Math.abs(b));var l=u.create();n.scale(l,h,-.5);n.add(l,l,e);const q=u.fromValues(0,1,0);.2>Math.abs(1-n.dot(f,q))&&n.set(q,0,0,1);const r=u.create();n.cross(r,f,q);n.normalize(r,r);n.cross(q,r,f);b=2*a+(g?2:0);e=a+(g?2:0);d=new Float32Array(3*
b);const t=new Float32Array(3*e),m=new Float32Array(2*b),v=new Uint32Array(3*a*(g?4:2)),x=new Uint32Array(3*a*(g?4:2));g&&(d[3*(b-2)]=l[0],d[3*(b-2)+1]=l[1],d[3*(b-2)+2]=l[2],m[2*(b-2)]=0,m[2*(b-2)+1]=0,d[3*(b-1)]=d[3*(b-2)]+h[0],d[3*(b-1)+1]=d[3*(b-2)+1]+h[1],d[3*(b-1)+2]=d[3*(b-2)+2]+h[2],m[2*(b-1)]=1,m[2*(b-1)+1]=1,t[3*(e-2)]=-f[0],t[3*(e-2)+1]=-f[1],t[3*(e-2)+2]=-f[2],t[3*(e-1)]=f[0],t[3*(e-1)+1]=f[1],t[3*(e-1)+2]=f[2]);f=0;const A=u.create(),w=u.create();for(let p=0;p<a;p++){var C=2*Math.PI/
a*p;n.scale(A,q,Math.sin(C));n.scale(w,r,Math.cos(C));n.add(A,A,w);t[3*p]=A[0];t[3*p+1]=A[1];t[3*p+2]=A[2];n.scale(A,A,c);n.add(A,A,l);d[3*p]=A[0];d[3*p+1]=A[1];d[3*p+2]=A[2];m[2*p]=p/a;m[2*p+1]=0;d[3*(p+a)]=d[3*p]+h[0];d[3*(p+a)+1]=d[3*p+1]+h[1];d[3*(p+a)+2]=d[3*p+2]+h[2];m[2*(p+a)]=p/a;m[2*p+1]=1;C=(p+1)%a;var D=f++,B=p;v[D]=p;x[D]=B;D=f++;B=p;v[D]=p+a;x[D]=B;D=f++;B=C;v[D]=C;x[D]=B;D=f++;B=C;v[D]=C;x[D]=B;D=f++;B=p;v[D]=p+a;x[D]=B;D=f++;B=C;v[D]=C+a;x[D]=B}if(g){for(c=0;c<a;c++)g=(c+1)%a,h=f++,
l=e-2,v[h]=b-2,x[h]=l,h=f++,l=e-2,v[h]=c,x[h]=l,h=f++,l=e-2,v[h]=g,x[h]=l;for(c=0;c<a;c++)g=(c+1)%a,h=f++,l=e-1,v[h]=c+a,x[h]=l,h=f++,l=e-1,v[h]=b-1,x[h]=l,h=f++,l=e-1,v[h]=g+a,x[h]=l}return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:d,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:t,exclusive:!0}],[k.VertexAttribute.UV0,{size:2,data:m,exclusive:!0}]],[[k.VertexAttribute.POSITION,v],[k.VertexAttribute.NORMAL,x],[k.VertexAttribute.UV0,v]])};z.createTubeGeometry=function(b,c,a,
d,e){a=a||10;d=null!=d?d:!0;Q.assert(1<b.length);const g=[],f=[];for(let h=0;h<a;h++){g.push([0,-h-1,-((h+1)%a)-1]);const l=h/a*2*Math.PI;f.push([Math.cos(l)*c,Math.sin(l)*c])}return z.createPathExtrusionGeometry(f,b,[[0,0,0]],g,d,e)};z.createPathExtrusionGeometry=function(b,c,a,d,e,g=u.fromValues(0,0,0)){var f=b.length;const h=new Float32Array(c.length*f*3+(6*a.length||0)),l=new Float32Array(c.length*f*3+(a?6:0));var q=(c.length-1)*f*6+6*d.length;const r=new Uint32Array(q);q=new Uint32Array(q);let t=
0;var m=0;let v=0,x=0;const A=u.create(),w=u.create(),C=u.create(),D=u.create(),B=u.create(),p=u.create(),L=u.create(),F=ca.create(),R=u.create(),O=u.create(),Z=u.create(),Y=u.create(),ha=u.create(),aa=S.create();n.set(R,0,1,0);n.subtract(w,c[1],c[0]);n.normalize(w,w);e?(n.add(F,c[0],g),n.normalize(C,F)):n.set(C,0,0,1);H(w,C,R,R,B,C,.99619469809);n.copy(D,C);n.copy(Y,B);for(var y=0;y<a.length;y++)n.scale(p,B,a[y][0]),n.scale(F,C,a[y][2]),n.add(p,p,F),n.add(p,p,c[0]),h[t++]=p[0],h[t++]=p[1],h[t++]=
p[2];l[m++]=-w[0];l[m++]=-w[1];l[m++]=-w[2];for(y=0;y<d.length;y++)r[v++]=0<d[y][0]?d[y][0]:-d[y][0]-1+a.length,r[v++]=0<d[y][1]?d[y][1]:-d[y][1]-1+a.length,r[v++]=0<d[y][2]?d[y][2]:-d[y][2]-1+a.length,q[x++]=0,q[x++]=0,q[x++]=0;y=a.length;const ia=a.length-1;for(let I=0;I<c.length;I++){let ba=!1;0<I&&(n.copy(A,w),I<c.length-1?(n.subtract(w,c[I+1],c[I]),n.normalize(w,w)):ba=!0,n.add(O,A,w),n.normalize(O,O),n.add(Z,c[I-1],D),S.fromPositionAndNormal(c[I],O,aa),S.intersectRay(aa,da.wrap(Z,A),F)?(n.subtract(F,
F,c[I]),n.normalize(C,F),n.cross(B,O,C),n.normalize(B,B)):H(O,D,Y,R,B,C,.99619469809),n.copy(D,C),n.copy(Y,B));e&&(n.add(F,c[I],g),n.normalize(ha,F));for(let K=0;K<f;K++)if(n.scale(p,B,b[K][0]),n.scale(F,C,b[K][1]),n.add(p,p,F),n.normalize(L,p),l[m++]=L[0],l[m++]=L[1],l[m++]=L[2],n.add(p,p,c[I]),h[t++]=p[0],h[t++]=p[1],h[t++]=p[2],!ba){var M=(K+1)%f;r[v++]=y+K;r[v++]=y+f+K;r[v++]=y+M;r[v++]=y+M;r[v++]=y+f+K;r[v++]=y+f+M;for(M=0;6>M;M++)q[x++]=r[v-6+M]-ia}y+=f}b=c[c.length-1];for(c=0;c<a.length;c++)n.scale(p,
B,a[c][0]),n.scale(F,C,a[c][1]),n.add(p,p,F),n.add(p,p,b),h[t++]=p[0],h[t++]=p[1],h[t++]=p[2];a=m/3;l[m++]=w[0];l[m++]=w[1];l[m++]=w[2];f=y-f;for(m=0;m<d.length;m++)r[v++]=0<=d[m][0]?y+d[m][0]:-d[m][0]-1+f,r[v++]=0<=d[m][2]?y+d[m][2]:-d[m][2]-1+f,r[v++]=0<=d[m][1]?y+d[m][1]:-d[m][1]-1+f,q[x++]=a,q[x++]=a,q[x++]=a;return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:h,exclusive:!0}],[k.VertexAttribute.NORMAL,{size:3,data:l,exclusive:!0}]],[[k.VertexAttribute.POSITION,r],[k.VertexAttribute.NORMAL,
q]])};z.createPolylineGeometry=function(b,c,a){Q.assert(1<b.length,"createPolylineGeometry(): polyline needs at least 2 points");Q.assert(3===b[0].length,"createPolylineGeometry(): malformed vertex");Q.assert(null==c||c.length===b.length,"createPolylineGeometry: need same number of points and normals");Q.assert(null==c||3===c[0].length,"createPolylineGeometry(): malformed normal");var d=new Float64Array(3*b.length);const e=new Uint32Array(2*(b.length-1));var g=0,f=0;for(var h=0;h<b.length;h++){for(var l=
0;3>l;l++)d[g++]=b[h][l];0<h&&(e[f++]=h-1,e[f++]=h)}g=[];f=[];g.push([k.VertexAttribute.POSITION,e]);f.push([k.VertexAttribute.POSITION,{size:3,data:d,exclusive:!0}]);if(c){d=new Float32Array(3*c.length);h=0;for(l=0;l<b.length;l++)for(let q=0;3>q;q++)d[h++]=c[l][q];g.push([k.VertexAttribute.NORMAL,e]);f.push([k.VertexAttribute.NORMAL,{size:3,data:d,exclusive:!0}])}a&&(f.push([k.VertexAttribute.COLOR,{size:4,data:a}]),g.push([k.VertexAttribute.COLOR,fa.generateDefaultIndexArray(a.length/4)]));return new G.Geometry(f,
g,T.PrimitiveType.Line)};z.createExtrudedTriangle=function(b,c,a,d,e=0){const g=Array(18);b=[[-c,e,d/2],[a,e,d/2],[0,b+e,d/2],[-c,e,-d/2],[a,e,-d/2],[0,b+e,-d/2]];c=new Uint16Array([0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]);for(a=0;6>a;a++)g[3*a]=b[a][0],g[3*a+1]=b[a][1],g[3*a+2]=b[a][2];return new G.Geometry([[k.VertexAttribute.POSITION,{size:3,data:g,exclusive:!0}]],[[k.VertexAttribute.POSITION,c]])};z.transformInPlace=function(b,c){b=b.getMutableAttribute(k.VertexAttribute.POSITION).data;
for(let a=0;a<b.length;a+=3)n.set(P,b[a],b[a+1],b[a+2]),n.transformMat4(P,P,c),b[a]=P[0],b[a+1]=P[1],b[a+2]=P[2]};z.cgToGIS=function(b,c=b){var a=b.vertexAttributes;b=a.get(k.VertexAttribute.POSITION).data;if(a=a.get(k.VertexAttribute.NORMAL).data){var d=c.getMutableAttribute(k.VertexAttribute.NORMAL).data;for(var e=0;e<a.length;e+=3){const g=a[e+1];d[e+1]=-a[e+2];d[e+2]=g}}if(b)for(a=c.getMutableAttribute(k.VertexAttribute.POSITION).data,d=0;d<b.length;d+=3)e=b[d+1],a[d+1]=-b[d+2],a[d+2]=e;return c};
z.makeOrthoBasisDirUp=E;z.makeOrthoBasisDirUpFallback=H})(X||(X={}));const P=u.create();return X});