// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/quantityFormatUtils ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/set ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,k,l,m,A,B,C,D,E,n,
e,p,f,F,c){var q=`${e.CONTENT} ${`${e.CONTENT}--transform-absolute`}`;a.TooltipContentTransformAbsolute=function(g){function d(){return g.apply(this,arguments)||this}k._inheritsLoose(d,g);d.prototype.render=function(){var h;const {orientation:r,orientationEnabled:t,orientationPrecision:u,rotationType:v,size:w,sizeEnabled:x,sizeUnit:y,sizePrecision:z}=this.info,b=null==(h=this._messagesTooltip)?void 0:h.sketch;return c.tsx("div",{class:q},t&&c.tsx(f.TooltipField,{title:null==b?void 0:b.orientation,
value:m.formatAngle(r,v,u)}),x&&c.tsx(f.TooltipField,{title:null==b?void 0:b.size,value:this._formatLength(w,y,z)}))};return d}(p.TooltipContent);a.TooltipContentTransformAbsolute=l.__decorate([n.subclass("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],a.TooltipContentTransformAbsolute);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});