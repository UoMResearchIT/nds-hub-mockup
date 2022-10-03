// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../core/maybe","../visualVariables/support/visualVariableUtils"],function(g,n,r,h,p){function k(a,b){if(!a||a.symbol)return null;b=b&&b.renderer;return a&&h.isSome(b)&&b.getObservationRenderer?b.getObservationRenderer(a):b}function q(a,b){return l.apply(this,arguments)}function l(){l=n._asyncToGenerator(function*(a,b){if(h.isSome(a.symbol))return a.symbol;const d=k(a,b);return h.isSome(d)&&d.getSymbolAsync(a,b)});return l.apply(this,
arguments)}function m(){m=n._asyncToGenerator(function*(a,b){var d=k(a,b),c=yield q(a,b);if(!c)return null;c={renderer:d,symbol:c};if(!(d&&"visualVariables"in d&&d.visualVariables))return c;b=p.getVisualVariableValues(d,a,b);a=["proportional","proportional","proportional"];for(const {variable:e,value:f}of b)"color"===e.type?c.color=r.toUnitRGBA(f):"size"===e.type?"outline"===e.target?c.outlineSize=f:(b=e.axis,d=e.useSymbolValue?"symbol-value":f,"width"===b?a[0]=d:"depth"===b?a[1]=d:"height"===b?a[2]=
d:a[0]="width-and-depth"===b?a[1]=d:a[1]=a[2]=d):"opacity"===e.type?c.opacity=f:"rotation"===e.type&&"tilt"===e.axis?c.tilt=f:"rotation"===e.type&&"roll"===e.axis?c.roll=f:"rotation"===e.type&&(c.heading=f);if(isFinite(a[0])||isFinite(a[1])||isFinite(a[2]))c.size=a;return c});return m.apply(this,arguments)}g.getDriverAxisSizeValue=function(a,b=0){a=a[b];return"number"===typeof a&&isFinite(a)?a:null};g.getDriverAxisSizeValueAny=function(a){for(let b=0;3>b;b++){const d=a[b];if("number"===typeof d)return isFinite(d)?
d:0}return 0};g.getRenderer=k;g.getRenderingInfo=function(a,b){const d=k(a,b);if(h.isSome(a.symbol))var c=a.symbol;else c=k(a,b),c=h.isSome(c)&&"dot-density"!==c.type?c.getSymbol(a,b):null;if(h.isNone(c))return null;c={renderer:d,symbol:c};if(h.isNone(d)||!("visualVariables"in d)||!d.visualVariables)return c;b=p.getVisualVariableValues(d,a,b);a=["proportional","proportional","proportional"];for(const {variable:e,value:f}of b)switch(e.type){case "color":c.color=f.toRgba();break;case "size":if("outline"===
e.target)c.outlineSize=f;else switch(b=e.useSymbolValue?"symbol-value":f,e.axis){case "width":a[0]=b;break;case "depth":a[1]=b;break;case "height":a[2]=b;break;case "width-and-depth":a[0]=a[1]=b;break;default:a[0]=a[1]=a[2]=b}break;case "opacity":c.opacity=f;break;case "rotation":switch(e.axis){case "tilt":c.tilt=f;break;case "roll":c.roll=f;break;default:c.heading=f}}if("proportional"!==a[0]||"proportional"!==a[1]||"proportional"!==a[2])c.size=a;return c};g.getRenderingInfoAsync=function(a,b){return m.apply(this,
arguments)};g.getSymbolAsync=q;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});