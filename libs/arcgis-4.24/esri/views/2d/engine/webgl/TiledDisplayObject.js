// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/mat3","../DisplayObject","../../tiling/TileKey"],function(k,p,l,g,q){g=function(m){function h(b,c,d,e,f,r=e,t=f){var a=m.call(this)||this;a.triangleCountReportedInDebug=0;a.triangleCount=0;a.texture=null;a.key=new q(b);a.x=c;a.y=d;a.width=e;a.height=f;a.rangeX=r;a.rangeY=t;return a}p._inheritsLoose(h,m);var n=h.prototype;n.destroy=function(){this.texture&&(this.texture.dispose(),this.texture=null)};n.setTransform=
function(b,c){c/=b.resolution*b.pixelRatio;const d=this.transforms.tileMat3,[e,f]=b.toScreenNoRotation([0,0],[this.x,this.y]);l.set(d,this.width/this.rangeX*c,0,0,0,this.height/this.rangeY*c,0,e,f,1);l.multiply(this.transforms.dvs,b.displayViewMat3,d)};return h}(g.DisplayObject);k.TiledDisplayObject=g;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});