// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","./BaseBucket","../../webgl/TurboLine"],function(D,I,J,K){const L=q=>(r,p,a,b,f,d,c,g,e,l,h)=>{q._lineVertexBuffer.add(r,p,c,g,a,b,f,d,e,l,h,q._ddValues);return q._lineVertexBuffer.index-1},M=q=>(r,p,a)=>{q._lineIndexBuffer.add(r,p,a)};return function(q){function r(a,b,f,d,c){b=q.call(this,a,b,f)||this;b.type=I.BucketType.LINE;b._tessellationOptions={pixelCoordRatio:8,halfWidth:0,offset:0};b._patternMap=new Map;b.tessellationProperties=
{_lineVertexBuffer:null,_lineIndexBuffer:null,_ddValues:null};b.tessellationProperties._lineVertexBuffer=d;b.tessellationProperties._lineIndexBuffer=c;b._lineTessellator=new K.LineTessellation(L(b.tessellationProperties),M(b.tessellationProperties),a.canUseThinTessellation);return b}D._inheritsLoose(r,q);var p=r.prototype;p.getResources=function(a,b,f){a=this.layer;const d=this.zoom;var c=a.hasDataDrivenLine;const g=a.getPaintProperty("line-pattern"),e=a.getPaintProperty("line-dasharray"),l=a.getLayoutProperty("line-cap");
if(g||e){f=(null==l?void 0:l.getValue(d))||0;var h=null==l?void 0:l.isDataDriven;if(c){c=null==g?void 0:g.isDataDriven;const y=null==e?void 0:e.isDataDriven;if(c||y)for(var u of this._features)c?b(g.getValue(d,u)):b(this._getDashArrayKey(u,d,a,e,h,l,f))}else g?b(g.getValue(d)):e&&(u=e.getValue(d),b(a.getDashKey(u,f)))}};p.processFeatures=function(a){var b,f,d,c;this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index;this._lineIndexCount=0;const g=this.layer,e=this.zoom;var l=this._features;
const h=this._tessellationOptions,{hasDataDrivenLine:u,lineMaterial:y}=g;a&&a.setExtent(this.layerExtent);var v=g.getPaintProperty("line-pattern"),w=g.getPaintProperty("line-dasharray");const E=null==v?void 0:v.isDataDriven;var B=null==w?void 0:w.isDataDriven;var k=g.getLayoutProperty("line-cap");const t=null!=(b=k)&&b.isDataDriven?k:null,C=t?null:g.getLayoutValue("line-cap",e),N=C||0,O=!!t;k=g.getLayoutProperty("line-join");const F=(b=null!=(f=k)&&f.isDataDriven?k:null)?null:g.getLayoutValue("line-join",
e);k=g.getLayoutProperty("line-miter-limit");const G=(f=null!=(d=k)&&d.isDataDriven?k:null)?null:g.getLayoutValue("line-miter-limit",e);k=g.getLayoutProperty("line-round-limit");const H=(d=null!=(c=k)&&c.isDataDriven?k:null)?null:g.getLayoutValue("line-round-limit",e);k=g.getPaintProperty("line-width");var z=(c=null!=(z=k)&&z.isDataDriven?k:null)?null:g.getPaintValue("line-width",e);k=g.getPaintProperty("line-offset");var A=(k=null!=(A=k)&&A.isDataDriven?k:null)?null:g.getPaintValue("line-offset",
e);if(E||B){var n=[];for(const m of l){l=E?v.getValue(e,m):this._getDashArrayKey(m,e,g,w,O,t,N);l=this._spriteInfo[l];if(!l||!l.rect)continue;B=y.encodeAttributes(m,e,g,l);const x=m.getGeometry(a);n.push({ddAttributes:B,page:l.page,cap:t?t.getValue(e,m):C,join:b?b.getValue(e,m):F,miterLimit:f?f.getValue(e,m):G,roundLimit:d?d.getValue(e,m):H,halfWidth:.5*(c?c.getValue(e,m):z),offset:k?k.getValue(e,m):A,geometry:x})}n.sort((m,x)=>m.page-x.page);h.textured=!0;for(const {ddAttributes:m,page:x,cap:P,join:Q,
miterLimit:R,roundLimit:S,halfWidth:T,offset:U,geometry:V}of n)h.capType=P,h.joinType=Q,h.miterLimit=R,h.roundLimit=S,h.halfWidth=T,h.offset=U,this._processFeature(V,m,x)}else{h.textured=!(!v&&!w);h.capType=C;h.joinType=F;h.miterLimit=G;h.roundLimit=H;h.halfWidth=.5*z;h.offset=A;for(n of l)v=u?y.encodeAttributes(n,e,g):null,t&&(h.capType=t.getValue(e,n)),b&&(h.joinType=b.getValue(e,n)),f&&(h.miterLimit=f.getValue(e,n)),d&&(h.roundLimit=d.getValue(e,n)),c&&(h.halfWidth=.5*c.getValue(e,n)),k&&(h.offset=
k.getValue(e,n)),w=n.getGeometry(a),this._processFeature(w,v)}};p.serialize=function(){var a=6+this.layerUIDs.length;a+=this.tessellationProperties._lineVertexBuffer.array.length;a+=this.tessellationProperties._lineIndexBuffer.array.length;a+=3*this._patternMap.size+1;a=new Uint32Array(a);var b=new Int32Array(a.buffer);let f=0;a[f++]=this.type;a[f++]=this.layerUIDs.length;for(var d=0;d<this.layerUIDs.length;d++)a[f++]=this.layerUIDs[d];a[f++]=this._lineIndexStart;a[f++]=this._lineIndexCount;d=this._patternMap;
const c=d.size;a[f++]=c;if(0<c)for(const [g,[e,l]]of d)a[f++]=g,a[f++]=e,a[f++]=l;a[f++]=this.tessellationProperties._lineVertexBuffer.array.length;for(d=0;d<this.tessellationProperties._lineVertexBuffer.array.length;d++)b[f++]=this.tessellationProperties._lineVertexBuffer.array[d];a[f++]=this.tessellationProperties._lineIndexBuffer.array.length;for(b=0;b<this.tessellationProperties._lineIndexBuffer.array.length;b++)a[f++]=this.tessellationProperties._lineIndexBuffer.array[b];return a.buffer};p._processFeature=
function(a,b,f){if(a){var d=a.length;for(let c=0;c<d;c++)this._processGeometry(a[c],b,f)}};p._processGeometry=function(a,b,f){if(!(2>a.length)){for(var d=a[0],c=1,g,e;c<a.length;)g=a[c].x-d.x,e=a[c].y-d.y,1E-6>g*g+e*e?a.splice(c,1):(d=a[c],++c);2>a.length||(c=this.tessellationProperties._lineIndexBuffer,d=3*c.index,this._tessellationOptions.initialDistance=0,this._tessellationOptions.wrapDistance=65535,this.tessellationProperties._ddValues=b,this._lineTessellator.tessellate(a,this._tessellationOptions),
a=3*c.index-d,void 0!==f&&(b=this._patternMap,(c=b.get(f))?c[1]+=a:b.set(f,[d+this._lineIndexCount,a])),this._lineIndexCount+=a)}};p._getDashArrayKey=function(a,b,f,d,c,g,e){c=c?g.getValue(b,a):e;a=d.getValue(b,a);return f.getDashKey(a,c)};D._createClass(r,[{key:"lineIndexStart",get:function(){return this._lineIndexStart}},{key:"lineIndexCount",get:function(){return this._lineIndexCount}}]);return r}(J)});