// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/RandomLCG","../CIMPlacements","../enums"],function(q,w,x,p){let r=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(m,a,b,c){return new y(m,a,b,c)};return d}();r.instance=null;let y=function(){function d(a,b,c,l){var e,f,g;this._currentY=this._currentX=this._yMax=this._yMin=this._xMax=this._xMin=0;this._stepX=Math.abs(null!=(e=b.stepX)?e:16)*c;this._stepY=Math.abs(null!=(f=b.stepY)?f:16)*
c;if(0!==this._stepX&&0!==this._stepY&&a&&void 0!==a.rings&&a.rings){this._gridType=null!=(g=b.gridType)?g:p.PlacementGridType.Fixed;if(this._gridType===p.PlacementGridType.Random){var h,n;c=null!=(h=b.seed)?h:13;this._randomLCG=new w(1*c);this._randomness=(null!=(n=b.randomness)?n:100)/100;this._gridAngle=0;this._shiftOddRows=!1;this._cosAngle=1;this._offsetY=this._offsetX=this._sinAngle=0}else{var k,t,u,v;this._randomness=0;this._gridAngle=null!=(k=b.gridAngle)?k:0;this._shiftOddRows=null!=(t=b.shiftOddRows)?
t:!1;this._offsetX=(null!=(u=b.offsetX)?u:0)*c;this._offsetY=(null!=(v=b.offsetY)?v:0)*c;this._cosAngle=Math.cos(this._gridAngle/180*Math.PI);this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI);if(this._stepX)if(0>this._offsetX)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(0>this._offsetY)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=
this._stepY}this._graphicOriginY=this._graphicOriginX=0;this._internalPlacement=new x.Placement;this._calculateMinMax(a);this._geometry=a}}var m=d.prototype;m.next=function(){return this._geometry?this._nextInside():null};m._calculateMinMax=function(a){this._yMax=this._yMin=this._xMax=this._xMin=0;let b,c,l,e,f;c=l=Number.MAX_VALUE;e=f=-Number.MAX_VALUE;for(const h of a.rings){const n=h?h.length:0;for(let k=0;k<n;++k){var g=h[k][0]-this._graphicOriginX-this._offsetX;b=h[k][1]-this._graphicOriginY-
this._offsetY;a=this._cosAngle*g-this._sinAngle*b;g=this._sinAngle*g+this._cosAngle*b;c=Math.min(c,a);e=Math.max(e,a);l=Math.min(l,g);f=Math.max(f,g)}}c+=this._graphicOriginX;e+=this._graphicOriginX;l+=this._graphicOriginY;f+=this._graphicOriginY;this._xMin=Math.round(c/this._stepX);this._xMax=Math.round(e/this._stepX);this._yMin=Math.round(l/this._stepY);this._yMax=Math.round(f/this._stepY);this._currentX=this._xMax+1;this._currentY=this._yMin-1};m._nextInside=function(){for(;;){if(this._currentX>
this._xMax){this._currentY++;if(this._currentY>this._yMax)return null;this._currentX=this._xMin;this._shiftOddRows&&this._currentY%2&&this._currentX--}var a=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(a+=.5*this._stepX);const b=this._currentY*this._stepY+this._offsetY;this._currentX++;let c;this._gridType===p.PlacementGridType.Random?(c=this._graphicOriginX+a+this._stepX*this._randomness*(.5-this._randomLCG.getFloat())*2/3,a=this._graphicOriginY+b+this._stepY*this._randomness*
(.5-this._randomLCG.getFloat())*2/3):(c=this._graphicOriginX+this._cosAngle*a+this._sinAngle*b,a=this._graphicOriginY-this._sinAngle*a+this._cosAngle*b);this._internalPlacement.setTranslate(c,a);return this._internalPlacement}};return d}();q.PlacementInsidePolygon=r;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});