// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/set ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,h,k,r,t,u,v,w,l,c,m,n,x,d){var p=`${c.CONTENT} ${`${c.CONTENT}--reshape-edge-offset`}`;
a.TooltipContentReshapeEdgeOffset=function(e){function b(){return e.apply(this,arguments)||this}h._inheritsLoose(b,e);b.prototype.render=function(){var f;const {distance:q}=this.info,g=null==(f=this._messagesTooltip)?void 0:f.sketch;return d.tsx("div",{class:p},d.tsx(n.TooltipField,{title:null==g?void 0:g.distance,value:this._formatRelativeLength(q)}))};return b}(m.TooltipContent);a.TooltipContentReshapeEdgeOffset=k.__decorate([l.subclass("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],
a.TooltipContentReshapeEdgeOffset);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});