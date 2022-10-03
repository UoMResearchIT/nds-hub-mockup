// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/promiseUtils ../../../statistics/support/predominanceUtils ../../utils ../../../../statistics/utils".split(" "),function(m,w,x,y,p,z){function q(){q=w._asyncToGenerator(function*(a,c,b){const d=[];if(c)for(const e of c)c=a.getField(e),"availableFields"in b&&!b.availableFields.includes(c.name)&&d.push(c.name);return d});return q.apply(this,arguments)}function u(a){const {field:c,normalizationType:b,normalizationField:d,normalizationTotal:e,
layer:h}=a;a=p.isIntegerField(h,c);let k=c;"percent-of-total"===b?k=`((${a?p.castIntegerFieldToFloat(c):c} / ${e}) * 100)`:"log"===b?k=`(log(${c}) * ${A})`:"field"===b?k=`(${a?p.castIntegerFieldToFloat(c):c} / ${d})`:"natural-log"===b?k=`(log(${a?p.castIntegerFieldToFloat(c):c}))`:"square-root"===b&&(k=`(power(${a?p.castIntegerFieldToFloat(c):c}, 0.5))`);return k}function v(a,c){let b;c=c.toLowerCase();if(a)for(const d in a)if(d.toLowerCase()!==c){b=a[d];break}return b}function r(a,c){let b;c=c.toLowerCase();
if(a)for(const d in a)if(d.toLowerCase()===c){b=a[d];break}return b}function t(a,c){if(c)for(const b in a)a[b].label=c[b];return{count:a}}const B=/_value$/i,A=Math.LOG10E;m.ensureFeaturesJSON=function(a){return a.map(c=>c.toJSON())};m.generateBinParams=function(a){const c=[],b=a.classBreaks,d=b[0].minValue,e=b[b.length-1].maxValue;b.forEach(h=>{c.push([h.minValue,h.maxValue])});return{min:d,max:e,intervals:c,sqlExpr:u({field:a.field,normalizationType:a.normalizationType,normalizationField:a.normalizationField,
normalizationTotal:a.normalizationTotal,layer:a.layer}),excludeZerosExpr:a.where,normTotal:a.normalizationTotal}};m.getFieldExpr=u;m.getHistogramFromFeatureSet=function(a,c,b,d,e){const h={};a&&a.features&&a.features.forEach(f=>{var l=f.attributes;f=v(l,"countOFExpr");l=r(l,"countOFExpr");0!==f&&(h[f]=l)});const k=[];z.getEqualIntervalBins(c,b,d).forEach((f,l)=>{l=(l+1).toString();k.push({minValue:f[0],maxValue:f[1],count:h.hasOwnProperty(l)?h[l]:0})});return{bins:k,minValue:c,maxValue:b,normalizationTotal:e}};
m.getMissingFields=function(a,c,b){return q.apply(this,arguments)};m.getPredominantCategoriesFromUVInfos=function(a,c){const b=a.map(e=>e.value),d=c.filter(e=>!b.includes(e));for(const e of d)a.push({value:e,count:0});a.sort((e,h)=>c.indexOf(e.value)-c.indexOf(h.value));for(const e of a)e.value===y.noDominantCategoryField&&(e.value=null);return{predominantCategoryInfos:a}};m.getSummaryStatisticsFromFeatureSet=function(a,c){a=(a=a&&a.features)&&a[0]&&a[0].attributes;const b={};for(const d in a)b[d.replace(B,
"").toLowerCase()]=a[d];null!=b.totalcount&&b.totalcount>=b.count&&(b.nullcount=b.totalcount-b.count);delete b.totalcount;b.min===b.max&&null!=b.min&&null==b.stddev&&(b.stddev=b.variance=0);c&&("min max avg stddev sum variance".split(" ").forEach(d=>{null!=b[d]&&(b[d]=Math.ceil(b[d]))}),b.min===b.max&&null!=b.min&&(b.avg=b.min,b.stddev=b.variance=0));return b};m.getUniqueValuesFromFeatureSet=function(a,c,b,d,e,h){const k="countOF"+(b||"Expr"),f={};let l=!1;(a&&a.features).forEach(n=>{var g=n.attributes;
n=r(g,k);g=b?r(g,b):v(g,k);null===g&&0===n&&(l=!0);if(null==g||"string"===typeof g&&""===g.trim())g=null;null==f[g]?f[g]={count:n,data:g}:f[g].count+=n});return b&&l?c.queryFeatureCount({whereClause:b+" is NULL",view:d,signal:h}).then(n=>{f["null"].count+=n||0;return t(f,e)}).catch(()=>{x.throwIfAborted(h);return t(f,e)}):Promise.resolve(t(f,e))};m.getViewInfoParams=function(a){var c;return{viewingMode:"2d"===a.type?"map":a.viewingMode,scale:a.scale,spatialReference:null==(c=a.spatialReference)?void 0:
c.toJSON()}};m.msSinceUnixEpochSQL=function(a,c){return p.getDateDiffSQL(a,new Date(0),c,"milliseconds").sqlExpression};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});