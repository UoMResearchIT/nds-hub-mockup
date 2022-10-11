// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../intl/messages ../../../intl/substitute ../../../layers/support/fieldUtils ../../../popup/content/AttachmentsContent ../../../popup/content/Content ../../../popup/content/CustomContent ../../../popup/content/ExpressionContent ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/TextContent ../../../popup/ExpressionInfo ../../../popup/FieldInfo ../../../renderers/support/utils ../../../renderers/visualVariables/support/visualVariableUtils".split(" "),
function(m,v,w,x,p,A,I,J,K,L,B,M,C,D,y,E,F){function z(a){return"hasVisualVariables"in a&&a.hasVisualVariables()?a.visualVariables.filter(b=>F.viewScaleRE.test(b.valueExpression)||"target"in b&&"outline"===b.target?!1:!0):[]}function n(a,b){let k=null;"popupTemplate"in a&&a.popupTemplate&&(k=a.popupTemplate.fieldInfos);const c=a.getField(b);let f=null;k&&k.some(e=>e&&e.fieldName.toLowerCase()===c.name.toLowerCase()?(f=e.clone(),!0):!1);f||(a=A.numericTypes.includes(c.type),b="integer"===c.type||"small-integer"===
c.type,f=new y({fieldName:c.name,isEditable:c.editable,visible:!0,format:a?{places:b?0:2,digitSeparator:!0}:null}));f.label||(f.label=c.alias);return f}function q(a){const {expression:b,title:k,returnType:c}=a;return new D({name:`expr${G++}`,expression:b,title:k,returnType:c})}function r(a){return new y({fieldName:`${"expression/"}${a.name}`,visible:!0,format:"number"===a.returnType?{places:2,digitSeparator:!0}:null})}function t(){t=v._asyncToGenerator(function*(a){const b=yield x.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),
{renderer:k,layer:c,normFieldExpressionTemplate:f}=a;a=[];const e=[];var g=E.getAttributes(k,z);for(const d of g)if("field"===d.type)a.push(n(c,d.field));else if("normalized-field"===d.type){var h=c.getField(d.field);const l=c.getField(d.normalizationField);g=`\n      $feature["${h.name}"];\n      $feature["${l.name}"];\n      ${"percentage"===f?`($feature["${h.name}"] / $feature["${l.name}"]) * 100;`:`$feature["${h.name}"] / $feature["${l.name}"];`}\n      `;h="percentage"===f?p.substitute(b.normFieldLabelAsPercent,
{expression1:h.alias,expression2:l.alias}):p.substitute(b.normFieldLabel,{expression1:h.alias,expression2:l.alias});g=q({type:"expression",expression:g,title:h,returnType:"number"});a.push(r(g),n(c,d.field),n(c,d.normalizationField));e.push(g)}else"expression"===d.type&&(g=q(d),a.push(r(g)),e.push(g));return{fieldInfos:w.unique(a,(d,l)=>d.fieldName===l.fieldName),expressionInfos:w.unique(e,(d,l)=>d.expression===l.expression)}});return t.apply(this,arguments)}function u(){u=v._asyncToGenerator(function*(a,
b){const {fieldInfos:k,expressionInfos:c}=b;b=yield x.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");if(2<k.length)return[new B({fieldInfos:k})];const f=[];for(const g of k){const h=g.fieldName;let d=g.label;if(!d){var e=a.getField(h);if(e)d=e.alias||h;else if(c){const l=h.split("expression/")[1];(e=c[c.findIndex(H=>H.name===l)])&&(d=e.title||e.name)}}f.push(new C({text:p.substitute(b.fieldInfo,{fieldLabel:d,fieldValue:`{${h}}`})}))}return f});return u.apply(this,arguments)}let G=0;m.expressionFieldPrefix=
"expression/";m.getContentFromFieldInfos=function(a,b){return u.apply(this,arguments)};m.getExpressionInfo=q;m.getFieldAndExpressionInfos=function(a){return t.apply(this,arguments)};m.getFieldInfo=n;m.getFieldInfoFromExpressionInfo=r;m.getPrimaryVisualVariables=z;m.hasNormalizedField=function(a){return"normalizationField"in a&&a.normalizationField?!0:"hasVisualVariables"in a&&a.hasVisualVariables()&&a.visualVariables.some(b=>!!("normalizationField"in b&&b.normalizationField))};Object.defineProperties(m,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});