// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper","../enums"],function(n,u,p,v,k){let q=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(f,h,a,b){return new w(f,h,a)};return d}();q.instance=null;let w=function(d){function f(a,b,c){a=d.call(this,a,!1,!0)||this;a._curveHelper=new v.CurveHelper;a._angleToLine=void 0!==b.angleToLine?b.angleToLine:!0;a._offset=void 0!==b.offset?
b.offset*c:0;a._type=b.extremityPlacement;a._position=void 0!==b.offsetAlongLine?b.offsetAlongLine*c:0;a._beginProcessed=!1;return a}u._inheritsLoose(f,d);var h=f.prototype;h.processPath=function(a){let b;switch(this._type){default:this._beginProcessed?(b=this._atExtremities(a,this._position,!1),this.iteratePath=this._beginProcessed=!1):(b=this._atExtremities(a,this._position,!0),this.iteratePath=this._beginProcessed=!0);break;case k.ExtremityPlacement.JustBegin:b=this._atExtremities(a,this._position,
!0);break;case k.ExtremityPlacement.JustEnd:b=this._atExtremities(a,this._position,!1);case k.ExtremityPlacement.None:}return b};h._atExtremities=function(a,b,c){var e=a.length;if(2>e)return null;var g=c?1:e-2;const x=c?e:-1,y=c?1:-1;let l=0;c=c?a[0]:a[e-1];for(e=g;e!==x;e+=y){g=c;c=a[e];const m=this._curveHelper.calculateLength(g,c);if(l+m>b){a=(b-l)/m;const [r,t]=this._curveHelper.getAngleCS(g,c,a);a=p.getCoord2D(g,c,a);this.internalPlacement.setTranslate(a[0]-this._offset*t,a[1]+this._offset*r);
this._angleToLine&&this.internalPlacement.setRotateCS(-r,-t);return this.internalPlacement}l+=m}return null};return f}(p.PathTransformationCursor);n.PlacementAtExtremities=q;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});