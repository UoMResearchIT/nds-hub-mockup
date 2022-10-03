// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/maybe ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../renderers/visualVariables/SizeVariable ../../renderers/visualVariables/support/SizeStop ./SmartMappingSliderBase ./SizeSlider/SizeSliderViewModel ./support/utils ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(D,l,g,x,p,R,S,E,t,F,y,z,G,H,m,I,J,q){var w;const A={trackFillColor:new g([149,149,149]),trackBackgroundColor:new g([224,224,224])};g=w=function(B){function u(a,b){a=B.call(this,a,b)||this;a._maxRampFillWidth=1;a._minRampFillWidth=.2;a._rampNode=null;a.handlesSyncedToPrimary=null;a.label=void 0;a.messages=null;a.persistSizeRangeEnabled=null;a.primaryHandleEnabled=null;a.stops=null;a.style={...A};a.viewModel=new H;a.zoomOptions=null;return a}D._inheritsLoose(u,B);var n=u.prototype;n.castStyle=
function(a){return{...A,...a}};u.fromRendererResult=function(a,b){const {visualVariables:c,statistics:d}=a,{avg:f,stddev:e}=d,h=c[0],[k,r]=m.getSizesFromVariable(h);a=a.renderer.authoringInfo.visualVariables[0];return new w({max:a.maxSliderValue,min:a.minSliderValue,stops:[{value:h.minDataValue,size:r},{value:h.maxDataValue,size:k}],histogramConfig:{average:f,standardDeviation:e,bins:b?b.bins:[]}})};n.updateFromRendererResult=function(a,b){const {visualVariables:c,statistics:d}=a,{avg:f,stddev:e}=
d,h=c[0],[k,r]=m.getSizesFromVariable(h);a=a.renderer.authoringInfo.visualVariables[0];this.set({max:a.maxSliderValue,min:a.minSliderValue,stops:[{value:h.minDataValue,size:r},{value:h.maxDataValue,size:k}],histogramConfig:{average:f,standardDeviation:e,bins:b?b.bins:[]}})};n.updateVisualVariable=function(a){const b=a.clone();var {stops:c}=this;if(!a||!c)return null;if(b.stops)return b.stops=c,b;a=c[0];c=c[c.length-1];let d=b.maxSize,f=b.minSize;if(d instanceof y){var e=d.stops;const h=c.size/e[0].size;
e=e.map(k=>{k.size*=h;return k});d.stops=e}else d=c.size;if(f instanceof y){e=f.stops;const h=a.size/e[0].size;e=e.map(k=>{k.size*=h;return k});f.stops=e}else f=a.size;b.set({maxDataValue:c.value,minDataValue:a.value,maxSize:d,minSize:f});return b};n.updateFromVisualVariable=function(a){if(a){var {maxDataValue:b,minDataValue:c,stops:d}=a;if(d)this.stops=d;else{const [f,e]=m.getSizesFromVariable(a);this.stops=[new z({value:c,size:e}),new z({value:b,size:f})]}}};n.render=function(){const {label:a,primaryHandleEnabled:b,
state:c,visibleElements:d}=this,f="disabled"===c,e=this.classes("esri-size-slider","esri-widget","esri-widget--panel",{["esri-disabled"]:f,["esri-size-slider--primary-handle"]:b,["esri-size-slider--interactive-track"]:d.interactiveTrack});return q.tsx("div",{"aria-label":a,class:e},f?null:this.renderContent(this.renderRamp(),"esri-size-slider__slider-container","esri-size-slider__histogram-container"))};n.renderRamp=function(){const {style:{trackBackgroundColor:a},zoomOptions:b}=this;return q.tsx("div",
{afterCreate:I.storeNode,bind:this,class:"esri-size-slider__ramp","data-node-ref":"_rampNode"},q.tsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},q.tsx("rect",{x:"0",y:"0",fill:m.getFillFromColor(a),height:"100%",width:"100%"}),this.renderPath()),b?this.renderZoomCaps():null)};n.renderPath=function(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(!x.isNone(a)&&!x.isNone(b)){var {primaryHandleEnabled:c,stops:d,style:{trackFillColor:f},values:e,viewModel:{max:h,
min:k},_maxRampFillWidth:r,_minRampFillWidth:K}=this,v=[r,K];d[0].size<d[d.length-1].size&&v.reverse();var N=e.slice().sort((L,M)=>L>M?1:-1),[O,C]=v,[P,Q]=N;v=c?m.getDynamicPathForSizeStops({max:h,min:k,pathHeight:a,pathWidth:b,stops:d,padding:C}):m.getPathForSizeStops({bottomValue:P,bottomWidth:O,max:h,min:k,pathHeight:a,pathWidth:b,topValue:Q,topWidth:C});return q.tsx("path",{d:v,fill:m.getFillFromColor(f)})}}};return u}(G.SmartMappingSliderBase);l.__decorate([p.aliasOf("viewModel.handlesSyncedToPrimary")],
g.prototype,"handlesSyncedToPrimary",void 0);l.__decorate([t.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0);l.__decorate([t.property(),J.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],g.prototype,"messages",void 0);l.__decorate([p.aliasOf("viewModel.persistSizeRangeEnabled")],g.prototype,"persistSizeRangeEnabled",void 0);l.__decorate([p.aliasOf("viewModel.primaryHandleEnabled")],g.prototype,"primaryHandleEnabled",void 0);l.__decorate([p.aliasOf("viewModel.stops")],
g.prototype,"stops",void 0);l.__decorate([t.property()],g.prototype,"style",void 0);l.__decorate([E.cast("style")],g.prototype,"castStyle",null);l.__decorate([t.property()],g.prototype,"viewModel",void 0);l.__decorate([p.aliasOf("viewModel.zoomOptions")],g.prototype,"zoomOptions",void 0);return g=w=l.__decorate([F.subclass("esri.widgets.smartMapping.SizeSlider")],g)});