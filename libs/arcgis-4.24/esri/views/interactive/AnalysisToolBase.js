// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./InteractiveToolBase".split(" "),function(a,k,b,f,g,n,p,q,l,m){a.AnalysisToolBase=function(h){function c(d){return h.call(this,d)||this}k._inheritsLoose(c,h);var e=c.prototype;e.initialize=function(){this.own(f.watch(()=>this.analysisViewData.visible,
d=>this.visible=d,f.syncAndInitial))};e.deactivate=function(){this.onDeactivate();this.created||this.analysis.clear()};e.resetCreated=function(){this._set("created",!1)};return c}(m.InteractiveToolBase);b.__decorate([g.property({constructOnly:!0})],a.AnalysisToolBase.prototype,"analysis",void 0);b.__decorate([g.property()],a.AnalysisToolBase.prototype,"analysisViewData",void 0);a.AnalysisToolBase=b.__decorate([l.subclass("esri.views.interactive.AnalysisToolBase")],a.AnalysisToolBase);Object.defineProperties(a,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});