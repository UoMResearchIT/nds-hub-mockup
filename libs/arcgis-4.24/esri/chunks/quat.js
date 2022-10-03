// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./mat3f64 ./quatf64 ./vec3f64 ./common ./vec3 ./vec4".split(" "),function(g,A,F,B,r,q,k){function G(b){b[0]=0;b[1]=0;b[2]=0;b[3]=1;return b}function C(b,a,c){c*=.5;const d=Math.sin(c);b[0]=d*a[0];b[1]=d*a[1];b[2]=d*a[2];b[3]=Math.cos(c);return b}function H(b,a){const c=2*Math.acos(a[3]),d=Math.sin(c/2);d>r.EPSILON?(b[0]=a[0]/d,b[1]=a[1]/d,b[2]=a[2]/d):(b[0]=1,b[1]=0,b[2]=0);return c}function u(b,a,c){const d=a[0],e=a[1],f=a[2];a=a[3];const h=c[0],n=c[1],p=c[2];c=c[3];b[0]=d*c+a*h+
e*p-f*n;b[1]=e*c+a*n+f*h-d*p;b[2]=f*c+a*p+d*n-e*h;b[3]=a*c-d*h-e*n-f*p;return b}function I(b,a,c){c*=.5;const d=a[0],e=a[1],f=a[2];a=a[3];const h=Math.sin(c);c=Math.cos(c);b[0]=d*c+a*h;b[1]=e*c+f*h;b[2]=f*c-e*h;b[3]=a*c-d*h;return b}function J(b,a,c){c*=.5;const d=a[0],e=a[1],f=a[2];a=a[3];const h=Math.sin(c);c=Math.cos(c);b[0]=d*c-f*h;b[1]=e*c+a*h;b[2]=f*c+d*h;b[3]=a*c-e*h;return b}function K(b,a,c){c*=.5;const d=a[0],e=a[1],f=a[2];a=a[3];const h=Math.sin(c);c=Math.cos(c);b[0]=d*c+e*h;b[1]=e*c-d*
h;b[2]=f*c+a*h;b[3]=a*c-f*h;return b}function L(b,a){const c=a[0],d=a[1];a=a[2];b[0]=c;b[1]=d;b[2]=a;b[3]=Math.sqrt(Math.abs(1-c*c-d*d-a*a));return b}function t(b,a,c,d){const e=a[0],f=a[1],h=a[2];a=a[3];let n=c[0],p=c[1],v=c[2];c=c[3];let w;let D;var l=e*n+f*p+h*v+a*c;0>l&&(l=-l,n=-n,p=-p,v=-v,c=-c);1-l>r.EPSILON?(w=Math.acos(l),D=Math.sin(w),l=Math.sin((1-d)*w)/D,d=Math.sin(d*w)/D):l=1-d;b[0]=l*e+d*n;b[1]=l*f+d*p;b[2]=l*h+d*v;b[3]=l*a+d*c;return b}function M(b){var a=r.RANDOM();const c=r.RANDOM(),
d=r.RANDOM(),e=Math.sqrt(1-a);a=Math.sqrt(a);b[0]=e*Math.sin(2*Math.PI*c);b[1]=e*Math.cos(2*Math.PI*c);b[2]=a*Math.sin(2*Math.PI*d);b[3]=a*Math.cos(2*Math.PI*d);return b}function N(b,a){const c=a[0],d=a[1],e=a[2];a=a[3];var f=c*c+d*d+e*e+a*a;f=f?1/f:0;b[0]=-c*f;b[1]=-d*f;b[2]=-e*f;b[3]=a*f;return b}function O(b,a){b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b}function E(b,a){var c=a[0]+a[4]+a[8];if(0<c)c=Math.sqrt(c+1),b[3]=.5*c,c=.5/c,b[0]=(a[5]-a[7])*c,b[1]=(a[6]-a[2])*c,b[2]=(a[1]-a[3])*
c;else{let d=0;a[4]>a[0]&&(d=1);a[8]>a[3*d+d]&&(d=2);const e=(d+1)%3,f=(d+2)%3;c=Math.sqrt(a[3*d+d]-a[3*e+e]-a[3*f+f]+1);b[d]=.5*c;c=.5/c;b[3]=(a[3*e+f]-a[3*f+e])*c;b[e]=(a[3*e+d]+a[3*d+e])*c;b[f]=(a[3*f+d]+a[3*d+f])*c}return b}function P(b,a,c,d){var e=.5*Math.PI/180;a*=e;c*=e;d*=e;e=Math.sin(a);a=Math.cos(a);const f=Math.sin(c);c=Math.cos(c);const h=Math.sin(d);d=Math.cos(d);b[0]=e*c*d-a*f*h;b[1]=a*f*d+e*c*h;b[2]=a*c*h-e*f*d;b[3]=a*c*d+e*f*h;return b}function Q(b){return"quat("+b[0]+", "+b[1]+", "+
b[2]+", "+b[3]+")"}function R(b,a,c){const d=q.dot(a,c);if(-.999999>d)return q.cross(m,da,a),1E-6>q.len(m)&&q.cross(m,ea,a),q.normalize(m,m),C(b,m,Math.PI),b;if(.999999<d)return b[0]=0,b[1]=0,b[2]=0,b[3]=1,b;q.cross(m,a,c);b[0]=m[0];b[1]=m[1];b[2]=m[2];b[3]=1+d;return x(b,b)}function S(b,a,c,d,e,f){t(T,a,e,f);t(U,c,d,f);t(b,T,U,2*f*(1-f));return b}function V(b,a,c,d){const e=fa;e[0]=c[0];e[3]=c[1];e[6]=c[2];e[1]=d[0];e[4]=d[1];e[7]=d[2];e[2]=-a[0];e[5]=-a[1];e[8]=-a[2];return x(b,E(b,e))}const W=
k.copy,X=k.set,Y=k.add,Z=k.scale,aa=k.dot,ba=k.lerp,y=k.length,z=k.squaredLength,x=k.normalize,ca=k.exactEquals;k=k.equals;const m=B.create(),da=B.fromValues(1,0,0),ea=B.fromValues(0,1,0),T=F.create(),U=F.create(),fa=A.create();A=Object.freeze(Object.defineProperty({__proto__:null,identity:G,setAxisAngle:C,getAxisAngle:H,multiply:u,rotateX:I,rotateY:J,rotateZ:K,calculateW:L,slerp:t,random:M,invert:N,conjugate:O,fromMat3:E,fromEuler:P,str:Q,copy:W,set:X,add:Y,mul:u,scale:Z,dot:aa,lerp:ba,length:y,
len:y,squaredLength:z,sqrLen:z,normalize:x,exactEquals:ca,equals:k,rotationTo:R,sqlerp:S,setAxes:V},Symbol.toStringTag,{value:"Module"}));g.add=Y;g.calculateW=L;g.conjugate=O;g.copy=W;g.dot=aa;g.equals=k;g.exactEquals=ca;g.fromEuler=P;g.fromMat3=E;g.getAxisAngle=H;g.identity=G;g.invert=N;g.len=y;g.length=y;g.lerp=ba;g.mul=u;g.multiply=u;g.normalize=x;g.quat=A;g.random=M;g.rotateX=I;g.rotateY=J;g.rotateZ=K;g.rotationTo=R;g.scale=Z;g.set=X;g.setAxes=V;g.setAxisAngle=C;g.slerp=t;g.sqlerp=S;g.sqrLen=
z;g.squaredLength=z;g.str=Q});