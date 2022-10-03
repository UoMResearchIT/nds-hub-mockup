// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/throttle ../../../core/unitFormatUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Widget ../css ../support/constants ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(d,w,k,r,
x,m,n,B,C,D,y,z,g,l,E,t,h){d.Statistics=function(u){function p(a,c){a=u.call(this,a,c)||this;a._messagesUnits=null;a._updateLayout=b=>{const e=b.parentElement,A=b.style.display;e.removeChild(b);document.body.appendChild(b);b.style.display="block";let q=80;for(const v of b.childNodes)v instanceof HTMLElement&&(q=Math.max(q,v.offsetWidth));document.body.removeChild(b);e.appendChild(b);b.style.display=A;b.style.setProperty("--max-width",`${q}px`)};a._updateLayoutThrottled=x.throttle(a._updateLayout,
100);return a}w._inheritsLoose(p,u);var f=p.prototype;f.initialize=function(){this.own(this._updateLayoutThrottled)};f.render=function(){return h.tsx("div",{bind:this,class:g.STATISTICS_CSS.base,afterCreate:this._updateLayout,afterUpdate:this._updateLayoutThrottled},this._renderStatistics())};f._renderStatistics=function(){var a;const c=null==(a=this._messages)?void 0:a.statistics;return c?[this._renderDistanceStatistic("maxDistance",c.maxDistance),this._renderElevationStatistic("elevationGain",c.gain),
this._renderElevationStatistic("elevationLoss",c.loss),this._renderElevationStatistic("minElevation",c.minElevation),this._renderElevationStatistic("maxElevation",c.maxElevation),this._renderElevationStatistic("avgElevation",c.avgElevation),this._renderSlopeStatistic("maxPositiveSlope","maxNegativeSlope",c.maxSlope),this._renderSlopeStatistic("avgPositiveSlope","avgNegativeSlope",c.avgSlope)]:[]};f._renderDistanceStatistic=function(a,c){a=this._renderValue(a,b=>m.formatDecimal(this._messagesUnits,
b,this.effectiveUnits.distance,l.FORMAT_PRECISION));return this._renderStatistic(c,a)};f._renderElevationStatistic=function(a,c){a=this._renderValue(a,b=>m.formatDecimal(this._messagesUnits,b,this.effectiveUnits.elevation,l.FORMAT_PRECISION));return this._renderStatistic(c,a)};f._renderSlopeStatistic=function(a,c,b){a=h.tsx("div",{key:"slope-up",class:g.STATISTICS_CSS.slopeValue},h.tsx("div",{class:g.STATISTICS_CSS.slopeUpIcon}),this._renderValue(a,e=>m.formatAngleDegrees(e,"degrees","geographic",
"geographic",l.FORMAT_PRECISION)),h.tsx("div",{class:g.STATISTICS_CSS.slopeDownIcon}),this._renderValue(c,e=>m.formatAngleDegrees(e,"degrees","geographic","geographic",l.FORMAT_PRECISION)));return this._renderStatistic(b,a)};f._renderStatistic=function(a,c){return h.tsx("div",{class:g.STATISTICS_CSS.statistic},h.tsx("label",{class:g.STATISTICS_CSS.statisticLabel},a),h.tsx("div",{class:g.STATISTICS_CSS.statisticValue},c))};f._renderValue=function(a,c){var b=this.line;b=r.applySome(1===b.progress?b.statistics:
null,e=>e[a]);return r.isSome(b)?c(b):l.NOT_AVAILABLE};return p}(z);k.__decorate([n.property()],d.Statistics.prototype,"effectiveUnits",void 0);k.__decorate([n.property()],d.Statistics.prototype,"line",void 0);k.__decorate([n.property(),t.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],d.Statistics.prototype,"_messages",void 0);k.__decorate([n.property(),t.messageBundle("esri/core/t9n/Units")],d.Statistics.prototype,"_messagesUnits",void 0);d.Statistics=k.__decorate([y.subclass("esri.widgets.ElevationProfile.Statistics")],
d.Statistics);Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});