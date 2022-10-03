// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../intl ../../../core/arrayUtils ../../../core/handleUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/unitFormatUtils ../../../core/unitUtils ../css ./constants ./intlUtils ./niceScale ../../support/chartUtils ../../support/widgetUtils ../../../support/themeUtils ../../../intl/substitute ../../../intl/number".split(" "),function(w,K,la,L,v,m,M,x,A,N,t,O,P,Q,y,R,S,T){function z(){z=K._asyncToGenerator(function*(a){const c=
yield Q.loadChartsModule(),{am4core:b,am4charts:f}=c;M.throwIfAborted(a.abortOptions);var {options:d}=b;d.minPolylineStep=.5;d.autoSetClassName=!0;d.animationsEnabled=!1;var e=R.isDarkTheme();d=e?U:B;e&&b.useTheme(c.am4themes_dark);const g=b.create(a.container,f.XYChart);g.arrangeTooltips=!1;g.preloader.disabled=!0;g.zoomOutButton.disabled=!0;e=y.isRTL(a.container);g.rtl=e;g.padding(d.paddingTop,e?d.paddingLeft:d.paddingRight,d.paddingBottom,e?d.paddingRight:d.paddingLeft);e=g.plotContainer.background;
e.strokeWidth=0;e.strokeOpacity=0;e.stroke=null;e=g.xAxes.push(new f.ValueAxis);const k=g.yAxes.push(new f.ValueAxis),h={params:a,amCharts4Index:c,amChart:g,xAxis:e,yAxis:k,series:new Map,data:null,messages:null,theme:d,zooming:!1,pointerIsOver:!1};g.cursor=V(h);W(h);X(h);Y(h);const n=[Z(h,a.onRangeChange),aa(h,a.onCursorPositionChange),ba(h)];let l=null,q=!1;const p=()=>{m.isNone(l)||("undefined"!==typeof window&&"cancelIdleCallback"in window?window.cancelIdleCallback(l):clearTimeout(l),l=null)};
return{...h,destroy(){q=!0;p();v.handlesGroup(n).remove();g.dispose()},update(u){if(u.data!==h.data||u.messages!==h.messages)if(p(),!q){var C=()=>{q||(l=null,ca(h,u))};l="undefined"!==typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(C,{timeout:30}):setTimeout(C,30)}},zoomOut(){q||(h.yAxis.zoom({start:0,end:1},!1,!0),h.xAxis.zoom({start:0,end:1},!1,!0))}}});return z.apply(this,arguments)}function V(a){a=new a.amCharts4Index.am4charts.XYCursor;a.trackable=!0;a.lineY.disabled=
!0;a.behavior="zoomXY";return a}function W(a){const c=a.theme,b=a.amChart.tooltip,{am4core:f}=a.amCharts4Index;b.id="series-tooltip";b.fitPointerToBounds=!0;b.pointerOrientation="vertical";b.zIndex=-1;b.getFillFromObject=!1;b.label.fontSize=c.seriesTooltipFontSize;b.label.fill=f.color(c.seriesTooltipLabelColor);b.label.padding(c.seriesTooltipPaddingVertical,c.seriesTooltipPaddingHorizontal,c.seriesTooltipPaddingVertical,c.seriesTooltipPaddingHorizontal);b.background.cornerRadius=c.tooltipBorderRadius;
b.background.stroke=null;b.background.fill=f.color(c.seriesTooltipBackgroundColor);b.background.padding(0,0,0,0);b.adapter.add("dy",()=>c.seriesTooltipSpacing*(0>=b.background.pointerY?1:-1));y.isRTL(a.params.container)&&(b.label.textAlign="middle")}function X(a){const {xAxis:c,theme:b}=a,{am4core:f}=a.amCharts4Index;c.numberFormatter=D(a,"distance");c.strictMinMax=!0;c.cursorTooltipEnabled=!1;c.title.visible=!1;a=c.renderer;a.line.visible=!1;a.minGridDistance=b.xAxisMinGridDistance;a.minLabelPosition=
b.xAxisMinLabelPosition;a.maxLabelPosition=b.xAxisMaxLabelPosition;a.fontWeight=b.axisFontWeight;a.fontSize=b.axisFontSize;a.baseGrid.disabled=!0;var d=a.labels.template;d.fontSize=b.axisLabelsFontSize;d.fontWeight=b.axisLabelsFontWeight;d.fill=f.color(b.axisLabelsColor);d.paddingTop=b.xAxisLabelsSpacing;d.horizontalCenter="left";d.paddingLeft=0;d=c.tooltip;d.id="axis-tooltip";d.background.fill=f.color(b.axisTooltipBackgroundColor);d.background.stroke=null;d.background.padding(0,0,0,0);d.label.fontSize=
b.axisTooltipFontSize;d.label.fill=f.color(b.axisTooltipLabelColor);d.label.padding(b.axisTooltipPaddingTop,b.axisTooltipPaddingHorizontal,b.axisTooltipPaddingBottom,b.axisTooltipPaddingHorizontal);a=a.grid.template;a.strokeOpacity=1;a.stroke=f.color(b.axisGridStroke)}function Y(a){const {yAxis:c,theme:b}=a,{am4core:f}=a.amCharts4Index;c.numberFormatter=D(a,"elevation");c.title.visible=!1;c.cursorTooltipEnabled=!1;c.strictMinMax=!0;c.baseValue=t.NO_DATA_VALUE;const d=c.renderer;d.inside=!0;d.line.opacity=
0;d.line.visible=!1;d.minGridDistance=b.yAxisMinGridDistance;d.minLabelPosition=b.yAxisMinLabelPosition;d.maxLabelPosition=b.yAxisMaxLabelPosition;d.fontWeight=b.axisFontWeight;d.fontSize=b.axisFontSize;d.baseGrid.disabled=!0;const e=d.labels.template;e.fontSize=b.axisLabelsFontSize;e.fontWeight=b.axisLabelsFontWeight;e.fill=f.color(b.axisLabelsColor);e.verticalCenter="bottom";e.paddingLeft=b.yAxisLabelSpacing;e.paddingBottom=0;const g=d.grid.template;g.strokeOpacity=1;g.stroke=f.color(b.axisGridStroke);
y.isRTL(a.params.container)&&(d.opposite=!0,e.textAlign="middle",e.paddingLeft=0,e.paddingRight=b.yAxisLabelSpacing)}function ca(a,{data:c,messages:b}){var {htmlContainer:f}=a.amChart;if(f){var d=m.isSome(c)&&c.refined;a.amChart.cursor.disabled=!d;f.classList.toggle(N.CHART_CSS.cursorEnabled,d);f=a.data!==c;d=m.applySome(a.data,e=>e.effectiveUnits)!==m.applySome(c,e=>e.effectiveUnits);a.data=c;a.messages=b;f&&(da(a),ea(a));d&&(a.yAxis.invalidateLabels(),a.xAxis.invalidateLabels());r(a)}}function da(a){const {xAxis:c,
yAxis:b}=a,{minX:f,maxX:d,minY:e,maxY:g}=E({data:a.data,pixelWidth:c.pixelWidth,pixelHeight:b.pixelHeight});c.min=f;c.max=d;b.min=e;b.max=g}function E({data:a,pixelWidth:c,pixelHeight:b}){if(m.isNone(a))return F;var f=a.statistics;const d=m.applySome(f,h=>h.maxDistance);let e=m.applySome(f,h=>h.minElevation);var g=m.applySome(f,h=>h.maxElevation);if(m.isNone(d)||m.isNone(e)||m.isNone(g))return F;f=Math.max(d-0,.001);let k=Math.max(g-e,.001);g=a.effectiveUnits;a.dynamicElevationRange&&(g=A.convertUnit(f,
g.distance,g.elevation),k=Math.max(k,g/t.MAX_CHART_RATIO));e-=.02*k;g=e+k+.02*k;[e,g]=P.niceScale(e,g,10);k=g-e;return a.uniformScaling?G({data:a,bounds:{minX:0,maxX:d,minY:e,maxY:g},pixelWidth:c,pixelHeight:b,centered:!0}):{minX:0,maxX:0+f,minY:e,maxY:e+k}}function G({data:a,bounds:c,pixelWidth:b,pixelHeight:f,centered:d}){if(m.isNone(a))return c;let {minX:e,maxX:g,minY:k,maxY:h}=c;c=g-e;a=a.effectiveUnits;b=A.convertUnit(h-k,a.elevation,a.distance)/f/(c/b);1<=b?[e,g]=H([e,g],b,d):[k,h]=H([k,h],
1/b,d);return{minX:e,maxX:g,minY:k,maxY:h}}function H([a,c],b,f){b*=c-a;return f?(a=(a+c)/2-b/2,[a,a+b]):[a,a+b]}function ea(a){const {amChart:c,data:b}=a;if(m.isNone(b)||0===b.lines.length)c.series.clear();else{var f=new Map,d=new Set(c.series.values),e=b.lines.length;for(let g=0;g<e;g++){const k=b.lines[g];let h=a.series.get(k.id);h?(m.applySome(h.fill,l=>d.delete(l)),d.delete(h.line)):(h=fa(a,k),m.applySome(h.fill,l=>c.series.push(l)),c.series.push(h.line));f.set(h.id,h);const n=e-g-1;m.applySome(h.fill,
l=>l.zIndex=n);h.line.zIndex=e+n;ha(a,h,k)}a.series=f;for(const g of d)c.series.removeValue(g)}}function ha(a,{line:c,fill:b},f){const {theme:d}=a;({am4core:a}=a.amCharts4Index);const {r:e,g,b:k,a:h}=f.color,n=a.color({r:e,g,b:k,a:h}),l=m.unwrapOr(f.samples,[]),q=0<l.length;c.stroke=n;c.visible=q;m.applySome(b,p=>{p.visible=q;p.fill=n.lighten(d.seriesFillLighten)});f=l.length;a=c.data;if(a.length===f){for(let p=0;p<f;++p)ia(a[p],l[p]);c.invalidateRawData();m.applySome(b,p=>p.invalidateRawData())}else c.data=
l,m.applySome(b,p=>p.data=l)}function ia(a,c){a.x=c.x;a.y=c.y;a.z=c.z;a.distance=c.distance;a.elevation=c.elevation}function fa(a,c){const {id:b}=c,f=I(a,`${"line"}-${b}`);f.strokeWidth=c.chartStrokeWidth;f.dy=c.chartStrokeOffsetY;let d=null;c.chartFillEnabled&&(d=I(a,`${"fill"}-${b}`),d.fillOpacity=1);return{id:b,line:f,fill:d}}function I(a,c){a=new a.amCharts4Index.am4charts.LineSeries;a.id=c;a.showOnInit=!1;a.simplifiedProcessing=!0;a.minDistance=.5;a.excludeFromTotal=!0;a.clickable=!1;a.contextMenuDisabled=
!0;a.cursorHoverEnabled=!1;a.cursorTooltipEnabled=!1;a.connect=!1;a.fill=null;a.stroke=null;a.dataFields.valueX="distance";a.dataFields.valueY="elevation";return a}function Z(a,c){const {amChart:b,xAxis:f,yAxis:d}=a;let e=!1;const g=()=>{const {data:n}=a;if(e&&!m.isNone(n)&&n.uniformScaling){e=!1;var {minX:l,maxX:q,minY:p,maxY:u}=G({data:a.data,bounds:{minX:f.minZoomed,maxX:f.maxZoomed,minY:d.minZoomed,maxY:d.maxZoomed},pixelWidth:f.pixelWidth,pixelHeight:d.pixelHeight,centered:!0});f.zoomToValues(l,
q,!0);d.zoomToValues(p,u,!0);b.validate();r(a)}},k=()=>{c(a.xAxis.zoomFactor,a.yAxis.zoomFactor)},h=[b.events.on("down",()=>{a.zooming=!0;r(a)}),b.events.on("up",()=>{a.zooming=!1;r(a)}),b.cursor.events.on("zoomended",()=>{e=!0}),f.events.on("startendchanged",g),d.events.on("startendchanged",g),f.events.on("rangechangeended",k),d.events.on("rangechangeended",k)];return v.makeHandle(()=>{h.forEach(n=>n.dispose())})}function ba({xAxis:a,yAxis:c}){const b=d=>()=>{d.renderer.grid.each(e=>{e.visible="none"!==
e.dataItem.label.dom.getAttribute("display")})},f=[a.events.on("rangechangeended",b(a)),a.events.on("validated",b(a)),c.events.on("rangechangeended",b(c)),c.events.on("validated",b(c))];return v.makeHandle(()=>{f.forEach(d=>d.dispose())})}function aa(a,c){const {amChart:b,xAxis:f,yAxis:d}=a,{cursor:e,events:g}=b,k=()=>{a.pointerIsOver=!1;r(a);c(null,null)},h=[e.events.on("cursorpositionchanged",()=>{if(a.pointerIsOver){r(a);var n=f.toAxisPosition(e.xPosition),l=d.toAxisPosition(e.yPosition);c(n,l)}}),
g.on("over",()=>{a.pointerIsOver=!0;r(a)}),g.on("out",k),g.on("blur",k)];return v.makeHandle(()=>{h.forEach(n=>n.dispose())})}function r(a){const {amChart:c,xAxis:b,data:f,theme:d,zooming:e,pointerIsOver:g}=a;a.amChart.tooltip.hide();a.xAxis.hideTooltip();if(g&&!e&&!m.isNone(f)&&f.refined){var k=ja(a);if(m.isSome(k)){const {cursor:n,tooltip:l}=c;n.show(0);n.validate();l.text=k.text;l.show(0);l.validate();l.pointerOrientation=30>k.y-l.contentHeight-d.seriesTooltipSpacing?"up":"down";l.pointTo(k,!0);
l.validate();k=b.tooltip;{const {data:q,messages:p}=a;if(m.isNone(q)||m.isNone(p))a="";else{var h=q.lines[0];a=h?J(a,h):null;a=m.isSome(a)?x.formatDecimal(p,a.distance,q.effectiveUnits.distance,t.FORMAT_PRECISION):"-"}}k.text=a;k.show(0);k.validate()}}}function ja(a){const {amChart:c,yAxis:b,data:f}=a;if(m.isNone(f))return null;const d=f.lines.map(n=>({line:n,y:m.applySome(J(a,n),l=>l.elevation)})).sort(ka),e=d.length?d[0].y:null;if(m.isNone(e))return null;const g=c.cursor,k=b.measuredHeight,h=k+
c.pixelPaddingTop;return{text:d.map(({y:n,line:l})=>{{const {data:q,messages:p}=a;m.isNone(q)||m.isNone(p)?l="":(n=S.substitute(p.chartTooltip,{name:O.getTranslatedLineTitle(l,p),elevation:m.isSome(n)?x.formatDecimal(p,n,q.effectiveUnits.elevation,t.FORMAT_PRECISION):t.NOT_AVAILABLE}),l=`[${l.color.toHex()}]\u25cf[/] ${n}`)}return l}).join("\n"),x:g.point.x+g.parent.pixelX+c.pixelPaddingLeft,y:h-b.valueToPosition(e)*k}}function ka({y:a},{y:c}){return m.isNone(a)?1:m.isNone(c)?-1:c-a}function D(a,
c){const b=a.xAxis.numberFormatter.clone();b.format=(f,d,e)=>{const {messages:g,data:k}=a;return m.isNone(g)||m.isNone(k)||"string"===typeof f?"":`${T.formatNumber(f,{maximumFractionDigits:e})} ${x.unitName(g,k.effectiveUnits[c],"abbr")}`};return b}function J({amChart:a,xAxis:c},b){b=m.unwrapOr(b.samples,[]);if(0===b.length)return null;a=c.toAxisPosition(a.cursor.xPosition);c=c.positionToValue(a);return L.binaryFindClosest(b,c,f=>f.distance)}const B={sideSpacing:15,paddingBottom:0,paddingLeft:0,paddingRight:0,
paddingTop:0,axisFontSize:9,axisFontWeight:"400",axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:"#a9a9a9",axisTooltipFontSize:12,axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",axisTooltipPaddingTop:3,axisTooltipPaddingBottom:3,axisTooltipPaddingHorizontal:4,xAxisMinGridDistance:50,xAxisLabelsSpacing:6,xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:4,yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,
seriesTooltipFontSize:12,seriesTooltipBackgroundColor:"#f8f8f8",seriesTooltipLabelColor:"#323232",seriesFillLighten:.9,seriesTooltipSpacing:6,seriesTooltipPaddingVertical:4,seriesTooltipPaddingHorizontal:4,tooltipBorderRadius:0},U={...B,axisGridStroke:"#323232",axisLabelsColor:"#a9a9a9",axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",seriesTooltipBackgroundColor:"#323232",seriesTooltipLabelColor:"#f8f8f8",seriesFillLighten:-.75},F={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};
w.createChart=function(a){return z.apply(this,arguments)};w.getAdjustedBounds=E;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});