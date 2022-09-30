// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Error ../../../../core/has ../../../../core/Logger ../../../../core/maybe ../../../../core/MD5 ../../../../renderers/visualVariables/SizeVariable ../../../../renderers/visualVariables/support/SizeStop ../../engine/LevelDependentSizeVariable".split(" "),function(h,p,q,z,r,n,A,l,B){function C(b,a,c){switch(b){case "avg":case "avg_angle":return`cluster_avg_${a}`;case "mode":return`cluster_type_${a}`;case "norm":return b=a.toLowerCase()+",norm:field,"+c.toLowerCase(),
"cluster_avg_"+n.createMD5Hash(b)}}function t(b,a){const {name:c,outStatistic:g}=a,{onStatisticField:e,onStatisticValueExpression:f,statisticType:d}=g;f?(a=n.createMD5Hash(f.toLowerCase()),b.push({name:c,outStatistic:{onStatisticField:a,onStatisticValueExpression:f,statisticType:d}})):e?b.push({name:c,outStatistic:{onStatisticField:e,statisticType:d}}):u.error(new p("mapview-unsupported-field","Unable to handle field",{field:a}))}function m(b,a,c){const g=n.createMD5Hash(a),e="mode"===c?`cluster_type_${g}`:
`cluster_avg_${g}`;b.some(f=>f.name===e)||b.push({name:e,outStatistic:{onStatisticField:g,onStatisticValueExpression:a,statisticType:c}});return e}function k(b,a,c,g){if("cluster_count"===a||b.some(f=>f.name===a))return a;const e=C(c,a,g);b.some(f=>f.name===e)||("norm"===c?b.push({name:e,outStatistic:{onStatisticField:a,onStatisticNormalizationField:g,statisticType:c}}):b.push({name:e,outStatistic:{onStatisticField:a,statisticType:c}}));return e}const u=z.getLogger("esri.views.2d.layers.support.clusterUtils");
q.add("esri-cluster-arcade-enabled",!0);const D=q("esri-cluster-arcade-enabled"),v=b=>{for(const a of b)if("size"===a.type)return a;return null},w=b=>{for(const a of b)if("cluster_count"===a.field)return!0;return!1},x=(b,a)=>{const c=[new l({value:0,size:0}),new l({value:1})];if(r.isNone(a))return new A({field:"cluster_count",stops:[...c,new l({value:2,size:0})]});const g=Object.keys(a).reduce((e,f)=>({...e,[f]:[...c,new l({value:Math.max(2,a[f].minValue),size:b.clusterMinSize}),new l({value:Math.max(3,
a[f].maxValue),size:b.clusterMaxSize})]}),{});return new B.LevelDependentSizeVariable({field:"cluster_count",levels:g})},y=b=>{const a=c=>u.error(new p("Unsupported-renderer",c,{renderer:b}));if("unique-value"===b.type){if(b.field2||b.field3)return a("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===b.type){if(b.normalizationField){const c=b.normalizationType;if("field"!==c)return a(`FeatureReductionCluster does not support a normalizationType of ${c}`),
!1}}else if("simple"!==b.type)return a(`FeatureReductionCluster does not support renderers of type ${b.type}`),!1;if(!D){if("valueExpression"in b&&b.valueExpression)return a("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in b&&b.visualVariables||[]).some(c=>!!("valueExpression"in c&&c.valueExpression)))return a("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),
!1}return!0};h.convertAggregateFieldFromPublic=t;h.createClusterCountSizeVariable=x;h.createClusterRenderer=(b,a,c,g)=>{a=a.clone();if(!y(a))return a;if(c.fields)for(var e of c.fields)t(b,e);if("visualVariables"in a){e=(a.visualVariables||[]).filter(d=>"$view.scale"!==d.valueExpression);const f=v(e);e.forEach(d=>{"rotation"===d.type?d.field?d.field=k(b,d.field,"avg_angle"):d.valueExpression&&(d.field=m(b,d.valueExpression,"avg_angle"),d.valueExpression=null):d.normalizationField?(d.field=k(b,d.field,
"norm",d.normalizationField),d.normalizationField=null):d.field?d.field=k(b,d.field,"avg"):(d.field=m(b,d.valueExpression,"avg"),d.valueExpression=null)});r.isNone(f)&&!w(e)&&(e.push(x(c,g)),a.dynamicClusterSize=!0);a.visualVariables=e}switch(a.type){case "unique-value":a.field?a.field=k(b,a.field,"mode"):a.valueExpression&&(a.field=m(b,a.valueExpression,"mode"),a.valueExpression=null);break;case "class-breaks":a.normalizationField?(a.field=k(b,a.field,"norm",a.normalizationField),a.normalizationField=
null):a.field?a.field=k(b,a.field,"avg"):(a.field=m(b,a.valueExpression,"avg"),a.valueExpression=null)}return a};h.findSizeVV=v;h.hasClusterCountVV=w;h.isClusterCompatibleRenderer=y;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});