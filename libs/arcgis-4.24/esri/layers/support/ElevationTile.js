// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe"],function(m,n){let x=function(){function p(b,a=null){this.tile=b;this.zmax=this.zmin=0;n.isSome(a)&&(b=b.extent,this.samplerData={pixelData:a.values,width:a.width,height:a.height,safeWidth:.99999999*(a.width-1),noDataValue:a.noDataValue,dx:(a.width-1)/(b[2]-b[0]),dy:(a.width-1)/(b[3]-b[1]),x0:b[0],y1:b[3]},this.zmin=a.minValue,this.zmax=a.maxValue)}p.prototype.sample=function(b,a){if(!n.isNone(this.samplerData)){var {safeWidth:f,width:q,pixelData:g,noDataValue:h,
dx:t,dy:u,y1:v,x0:w}=this.samplerData;a=u*(v-a);a=0>a?0:a>f?f:a;b=t*(b-w);var k=0>b?0:b>f?f:b;b=Math.floor(a);var r=Math.floor(k),c=b*q+r,d=c+q,e=g[c],l=g[d];c=g[c+1];d=g[d+1];if(e!==h&&l!==h&&c!==h&&d!==h)return k-=r,e+=(c-e)*k,e+(l+(d-l)*k-e)*(a-b)}};return p}();m.ElevationTile=x;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});