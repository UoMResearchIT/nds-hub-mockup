// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Logger ../snappingUtils ./SnappingHint".split(" "),function(e,h,f,k,d,l){k.getLogger("esri.views.interactive.snapping.hints.RightAngleSnappingHint");f=function(g){function c(a,m,n,b){b=g.call(this,b)||this;b.previousVertex=a;b.centerVertex=m;b.nextVertex=n;return b}h._inheritsLoose(c,g);c.prototype.equals=function(a){return a instanceof c?d.objectEqual(this.previousVertex,a.previousVertex)&&d.objectEqual(this.centerVertex,
a.centerVertex)&&d.objectEqual(this.nextVertex,a.nextVertex):!1};return c}(l.SnappingHint);e.RightAngleSnappingHint=f;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});