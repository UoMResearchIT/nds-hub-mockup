// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","./number"],function(f,n,k){function m(a,b){Array.isArray(b)?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):(a[0]=b.r,a[1]=b.g,a[2]=b.b,a[3]=b.a);return a}function l(a,b=0,c=!1){const e=a[b+3];a[b+0]*=e;a[b+1]*=e;a[b+2]*=e;c||(a[b+3]*=255);return a}const g=[0,0,0,0];f.copyAndPremultiply=function(a){return l(m([],a))};f.premultiplyAlpha=l;f.premultiplyAlphaRGBA=function(a){if(!a)return 0;const {r:b,g:c,b:e,a:d}=a;return k.i8888to32(b*d,c*d,e*d,255*d)};f.premultiplyAlphaRGBAArray=
function(a){if(!a)return 0;const [b,c,e,d]=a;return k.i8888to32(d/255*b,d/255*c,d/255*e,d)};f.premultiplyAlphaUint32=function(a){l(m(g,a));return k.i8888to32(g[0],g[1],g[2],g[3])};f.white=[255,255,255,1];f.writeColor=function(a,b,c=0){if(n.isNone(b))a[c+0]=0,a[c+1]=0,a[c+2]=0,a[c+3]=0;else{var {r:e,g:d,b:p,a:h}=b;a[c+0]=e*h/255;a[c+1]=d*h/255;a[c+2]=p*h/255;a[c+3]=h}};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});