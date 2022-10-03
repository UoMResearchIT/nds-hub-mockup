// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../GeometryWalker"],function(g,k,l,f){let h=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(e,b,a,c){return new m(e,b,a)};return d}();h.instance=null;let m=function(d){function e(b,a,c){b=d.call(this,b,!0,!0)||this;b._walker=new f.GeometryWalker;b._walker.updateTolerance(c);b._angleToLine=void 0!==a.angleToLine?a.angleToLine:!0;b._offset=void 0!==
a.offset?a.offset*c:0;b._beginGap=void 0!==a.beginPosition?a.beginPosition*c:0;b._endGap=void 0!==a.endPosition?a.endPosition*c:0;b._flipFirst=void 0!==a.flipFirst?a.flipFirst:!0;b._pattern=new f.DashPattern;b._pattern.init(a.positionArray,!1,!1);b._subPathLen=0;b._posCount=b._pattern.size();b._isFirst=!0;b._prevPos=0;return b}k._inheritsLoose(e,d);e.prototype.processPath=function(b){if(this._pattern.isEmpty())return null;if(this.iteratePath){b=this._pattern.nextValue()*this._subPathLen;var a=this._beginGap+
b;b=a-this._prevPos;this._prevPos=a}else{this._posCount=this._pattern.size();this._isFirst=!0;this._prevPos=0;this._subPathLen=this._walker.calculatePathLength(b)-this._beginGap-this._endGap;if(0>this._subPathLen)return this.iteratePath=!1,null;if(!this._walker.init(b,this._pattern,!1))return null;this._pattern.reset();b=this._pattern.nextValue()*this._subPathLen;a=this._beginGap+b;b=a-this._prevPos;this._prevPos=a;this.iteratePath=!0}a={};if(!this._walker.nextPointAndAngle(b,a,f.EndType.END))return this.iteratePath=
!1,null;this.internalPlacement.setTranslate(a.pt[0]-this._offset*a.sa,a.pt[1]+this._offset*a.ca);b=this._isFirst&&this._flipFirst;let c;this._angleToLine?(c=a.ca,a=a.sa):(c=1,a=0);b&&(c=-c,a=-a);this.internalPlacement.setRotateCS(c,a);this._isFirst=!1;this._posCount--;0===this._posCount&&(this.iteratePath=!1);return this.internalPlacement};return e}(l.PathTransformationCursor);g.PlacementAtRatioPositions=h;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});