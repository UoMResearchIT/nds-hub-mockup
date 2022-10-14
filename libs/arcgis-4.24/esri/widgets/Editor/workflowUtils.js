// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../Graphic ../../core/has ../../core/handleUtils ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/screenUtils ../../core/accessorSupport/diffUtils ../../renderers/support/clickToleranceUtils ../../renderers/support/lengthUtils ../../renderers/visualVariables/support/sizeVariableUtils ../../renderers/visualVariables/support/visualVariableUtils ../../symbols/support/symbolConversion ../../symbols/support/symbolUtils ../../views/3d/layers/graphics/GraphicState ../../views/support/drapedUtils ../../views/support/hitTestSelectUtils".split(" "),
function(X,u,p,ha,za,ia,n,y,C,F,ja,ka,la,Y,Z,ma,G,na,oa,H){function aa(b){const a=b.sourceLayer;var c;if(!(c="feature"!==a.type)){a:switch(a.renderer.type){case "class-breaks":case "simple":case "unique-value":case "dot-density":case "dictionary":case "pie-chart":c=!0;break a;default:c=!1}c=!c}if(c)return{rotation:null,size:null};let d=c=null;var h=a.renderer.getVisualVariablesForType("rotation").filter(f=>(!f.axis||"heading"===f.axis)&&f.field&&!f.valueExpression&&n.isSome(Z.getRotationAngle(f,b)));
1===h.length&&(c=pa(h[0],a));h=a.renderer.getVisualVariablesForType("size").filter(f=>f.field&&!f.useSymbolValue&&!f.valueExpression&&Y.getTransformationType(f)===Y.TransformationType.RealWorldSize&&n.isSome(Z.getSize(f,b)));1===h.length&&(d=qa(h[0],a));return{rotation:c,size:d}}function pa(b,a){var c;const d="heading"===(b.axis||"heading")&&"arithmetic"===b.rotationType?-1:1,h=b.field,f=(a=a.fields&&a.fields.filter(m=>m.name===h))&&1===a.length?a[0].type:"double";var e=0,g=0;return{field:h,fieldType:f,
getDefault:()=>Promise.resolve(0),getValue:m=>{g=e-d*m;return I((g+360)%360,f)},initValue:m=>{e=null!=m?m:g;g=0},isUpdatingInteractively:!1,rotationType:null!=(c=b.rotationType)?c:"geographic"}}function ra(b,a){switch(a){case "width":return b[0];case "depth":return b[1];case "height":return b[2];default:return b[2]||b[1]||b[0]}}function sa(b,a,c){return J.apply(this,arguments)}function J(){J=p._asyncToGenerator(function*(b,a,c){if(n.isNone(a))return 0;({symbol:a}=ma.to3D(a));if(n.isNone(a)||"web-style"===
a.type||"cim"===a.type)return 0;a=a.symbolLayers.getItemAt(0);if(!a)return 0;switch(a.type){case "icon":return{computeIconLayerResourceSize:c}=yield new Promise((d,h)=>X(["../../symbols/support/symbolLayerUtils"],d,h)),a.size||Math.min(x.icon,(yield c(a,x.icon))[0])||x.icon;case "text":return a.size||x.text;case "line":return a.size||x.line;case "object":{const {computeObjectLayerResourceSize:d}=yield new Promise((h,f)=>X(["../../symbols/support/symbolLayerUtils"],h,f));b=yield d(a,b.scale/x.viewScaleSizeFactor);
return ra(b,c)}case "path":return(null!=a.width?a.width:a.height)||b.scale/x.viewScaleSizeFactor;case "extrude":return a.size||b.scale/x.viewScaleSizeFactor;case "fill":case "water":return 0;default:return 0}});return J.apply(this,arguments)}function qa(b,a){var c;const d=b.field,h=b.axis,f=(a=a.fields&&a.fields.filter(k=>k.name===d))&&1===a.length?a[0].type:"double";var e=0,g=0;const m=null!=(c=la.meterIn[b.valueUnit])?c:1;let l;l="area"===b.valueRepresentation?k=>(k*m/2)**2*Math.PI:"radius"===b.valueRepresentation||
"distance"===b.valueRepresentation?k=>k*m/2:k=>k*m;return{field:d,fieldType:f,getDefault:function(){var k=p._asyncToGenerator(function*(q,r){return I(l(yield sa(r,q,h)),f)});return function(q,r){return k.apply(this,arguments)}}(),getValue:(k,q)=>{e||(e=q.pixelSizeAt(q.center));g=e*k;return I(g,f)},initValue:k=>{e=null!=k?k:g;g=0},isUpdatingInteractively:!1,displayUnit:ba(b.valueUnit),axis:b.axis}}function I(b,a){switch(a){case "small-integer":case "integer":case "long":return Math.round(b);case "double":case "single":return b;
default:return 0}}function z(b,a){return K.apply(this,arguments)}function K(){K=p._asyncToGenerator(function*(b,a){a=yield G.getDisplayedSymbol(b,{useSourceLayer:!0,ignoreGraphicSymbol:!0,webStyleCache:a});const c=ja.diff(b.symbol,a);n.isSome(c)&&(b.symbol=a)});return K.apply(this,arguments)}function ta(b){if("mesh"===b||"multipatch"===b)throw Error("Mesh and Multipatch not supported");return b}function L(){L=p._asyncToGenerator(function*(b,a,c,d){yield M(b,a,d);const h=b.on("create",function(){var f=
p._asyncToGenerator(function*(e){if("cancel"===e.state)return M(b,a,d);"complete"===e.state&&(e=e.graphic,e.sourceLayer||(e.sourceLayer=a.layer),e.attributes||(e.attributes={...a.template.prototype.attributes}),yield z(e,d),c(e))});return function(e){return f.apply(this,arguments)}}());return{remove:()=>{h.remove();b.cancel()}}});return L.apply(this,arguments)}function M(b,a,c){return N.apply(this,arguments)}function N(){N=p._asyncToGenerator(function*(b,a,c){const d=a.layer;a={...a.template.prototype.attributes};
yield ua(b,d,a,c);c={graphicProperties:{attributes:a,sourceLayer:d},hasZ:d.capabilities.data.supportsZ};b.layer.elevationInfo=d.elevationInfo;return b.create(ta(d.geometryType),c)});return N.apply(this,arguments)}function ua(b,a,c,d){return O.apply(this,arguments)}function O(){O=p._asyncToGenerator(function*(b,a,c,d){var h;a=new ha({sourceLayer:a,attributes:c});const {rotation:f,size:e}=aa(a);let g=yield G.getDisplayedSymbol(a,{useSourceLayer:!0,webStyleCache:d}),m=!1;for(const l of[e,f])n.isNone(l)||
null!=c[l.field]||(c[l.field]=yield l.getDefault(g,b.view),m=!0);m&&(g=yield G.getDisplayedSymbol(a,{useSourceLayer:!0,webStyleCache:d}));switch(null==(h=g)?void 0:h.type){case "simple-fill":case "polygon-3d":b.polygonSymbol=g;break;case "simple-line":case "line-3d":b.polylineSymbol=g;break;case "simple-marker":case "picture-marker":case "point-3d":case "cim":b.pointSymbol=g}ca(b.tooltipOptions,e,f)});return O.apply(this,arguments)}function ca(b,a,c){if(n.isSome(a)||n.isSome(c)){var d;b.visualVariables=
{size:n.isSome(a)?{unit:a.displayUnit,axis:a.axis,valueType:a.fieldType}:null,rotation:n.isSome(c)?{valueType:c.fieldType,rotationType:null!=(d=c.rotationType)?d:"geographic"}:null}}else b.visualVariables=null}function va(b,a,c,d){return P.apply(this,arguments)}function P(){P=p._asyncToGenerator(function*(b,a,c,d){if(0===b.length)return[];const {updatable:h,graphicsByLayer:f}=yield c.async(p._asyncToGenerator(function*(){var {results:e}=yield y.whenOrAbort(H.hitTestSelectSimilarDistance(a,c),d);const g=
new Map,m=({layer:l})=>{var k=g.get(l);return k?k:(k=[],g.set(l,k),k)};H.filterGraphicHits(e).forEach(({graphic:l})=>m(l).push(l));e=b.filter(({supports:l,layer:k})=>l.includes("update")&&g.has(k));0!==e.length&&c.stopPropagation();return{updatable:e,graphicsByLayer:g}}));return y.whenOrAbort(y.eachAlways(h.map(function(){var e=p._asyncToGenerator(function*({layer:g}){const {objectIdField:m,displayField:l}=g,k=[m];g.fieldsIndex.has(l)&&k.push(l);const q=f.get(g);if(q.some(r=>k.some(w=>!(w in r.attributes)))){const r=
g.createQuery();r.outFields=k;r.returnGeometry=!1;r.objectIds=q.map(w=>w.getObjectId());return g.queryFeatures(r,{signal:d}).then(({features:w})=>w)}return q});return function(g){return e.apply(this,arguments)}}())),d)});return P.apply(this,arguments)}function wa(b,a,c,d){return Q.apply(this,arguments)}function Q(){Q=p._asyncToGenerator(function*(b,a,c,d){if(0===b.length)return[];let h=null;const f=yield c.async(p._asyncToGenerator(function*(){var {results:e}=yield y.whenOrAbort(a.hitTest(c),d);if(0===
e.length)return[];const g=new Set;h=H.filterGraphicHits(e);h.forEach(({graphic:m})=>m&&g.add(m.layer));e=b.items.filter(({layer:m,supports:l})=>l.includes("update")&&g.has(m));0<e.length&&c.stopPropagation();return e}));return y.whenOrAbort(y.eachAlways(f.map(({layer:e})=>{const {objectIdField:g,displayField:m}=e;var l=[g];e.fieldsIndex.has(m)&&l.push(m);const k=e.createQuery();k.outFields=l;k.returnGeometry=!1;l="renderer"in e?ka.calculateTolerance({renderer:e.renderer,event:c}):0;k.geometry=oa.createQueryGeometry(c.mapPoint,
l,a);k.outSpatialReference=a.spatialReference;return e.queryFeatures(k,{signal:d}).then(({features:q})=>{h.forEach(({graphic:r})=>{r.layer===e&&(q.find(w=>w.attributes[g]===r.attributes[e.objectIdField])||q.push(r))});return q})})),d)});return Q.apply(this,arguments)}function R(){R=p._asyncToGenerator(function*(b,a,c,d){switch(a.type){case "3d":return va(b,a,c,d);case "2d":return wa(b,a,c,d)}});return R.apply(this,arguments)}function S(){S=p._asyncToGenerator(function*(b,a,c){const d=b.layer,h=d.createQuery();
h.objectIds=[b.getAttribute(d.objectIdField)];h.outFields=["*"];h.outSpatialReference=a.spatialReference;h.returnM=d.capabilities.data.supportsM;h.returnZ=d.capabilities.data.supportsZ;return(yield d.queryFeatures(h,{signal:c})).features[0]});return S.apply(this,arguments)}function T(b,a,c,d,h){return U.apply(this,arguments)}function U(){U=p._asyncToGenerator(function*(b,a,c,d,h){let f=!1;const {rotation:e,size:g}=d;[e,g].forEach(function(){var m=p._asyncToGenerator(function*(l){if(!n.isNone(l)){var k=
a.attributes[l.field];n.isSome(k)?l.initValue(k):(k=yield l.getDefault(a.symbol,b.view),l.initValue(k),a.setAttribute(l.field,k),f=!0)}});return function(l){return m.apply(this,arguments)}}());f&&(yield z(a,h));d={multipleSelectionEnabled:!1};"point"===c.geometryType&&(d.enableRotation=n.isSome(e),d.enableScaling=n.isSome(g));ca(b.tooltipOptions,g,e);b.layer.elevationInfo=c.elevationInfo;return b.update(a,d)});return U.apply(this,arguments)}function da(b,a,c,d,h){return V.apply(this,arguments)}function V(){V=
p._asyncToGenerator(function*(b,a,c,d,h){var f;if(n.isSome(a.geometry)&&"point"===(null==(f=a.geometry)?void 0:f.type)){f=d.rotation;var e=c.toolEventInfo;e=!e||"rotate-start"!==e.type&&"rotate"!==e.type&&"rotate-stop"!==e.type?null:e;if(n.isSome(f)&&n.isSome(e))if("rotate-stop"===e.type)f.isUpdatingInteractively=!1,f.initValue();else{f.isUpdatingInteractively=!0;const {field:g,getValue:m}=f;a.attributes[g]=m(e.angle,b)}d=d.size;c=c.toolEventInfo;c=!c||"scale-start"!==c.type&&"scale"!==c.type&&"scale-stop"!==
c.type?null:c;if(n.isSome(d)&&n.isSome(c))if("scale-stop"===c.type)d.isUpdatingInteractively=!1,d.initValue();else{d.isUpdatingInteractively=!0;const {field:g,getValue:m}=d;a.attributes[g]=m(c.xScale,b)}yield z(a,h)}});return V.apply(this,arguments)}function W(){W=p._asyncToGenerator(function*(b,a,c,d,h,f){const e=b.clone();yield z(e,f);d.map.add(c.layer);c.layer.add(e);const g=b.sourceLayer,m=d.whenLayerView(g),l=()=>{const v=b.attributes[b.layer.objectIdField];m.then(t=>t.setVisibility(v,!1),()=>
{});return{remove(){m.then(t=>t.setVisibility(v,!0),()=>{})}}};let k=null,q=null;if("3d"===d.type){const v=new na.GraphicState({graphic:e});k=ia.handlesGroup([d.trackGraphicState(v),C.watch(()=>v.displaying,t=>{q=t?l():n.removeMaybe(q)},C.initial)])}else q=l();yield T(c,e,g,a,f);let r=null;m.then(v=>r=v,()=>{});const w=a.size,D=a.rotation,ea=C.watch(()=>b.attributes,function(){var v=p._asyncToGenerator(function*(t){let A=!1;for(const B in t){const E=t[B];E!==e.attributes[B]&&(e.setAttribute(B,E),
n.isSome(w)&&!w.isUpdatingInteractively&&w.field===B&&w.initValue(E),n.isSome(D)&&!D.isUpdatingInteractively&&D.field===B&&D.initValue(E),n.isNone(r)||r.requiredFields.includes(B))&&(A=!0)}A&&(yield z(e,f))});return function(t){return v.apply(this,arguments)}}()),xa=c.on("update",function(){var v=p._asyncToGenerator(function*(t){const A=t.graphics[0];if("complete"===t.state)return T(c,A,g,a,f);yield da(d,A,t,a,f);h(A.clone())});return function(t){return v.apply(this,arguments)}}()),ya=c.on(["undo",
"redo"],function(){var v=p._asyncToGenerator(function*(t){h(t.graphics[0].clone())});return function(t){return v.apply(this,arguments)}}()),fa=()=>{};return{interactive:{remove(){ya.remove();xa.remove();c.cancel();ea&&ea.remove();this.remove=fa}},visual:{remove(){n.removeMaybe(q);d.whenLayerView(g).then(v=>C.whenOnce(()=>!v.updating)).then(()=>{n.removeMaybe(k);c.layer.remove(e);this.remove=fa})}}}});return W.apply(this,arguments)}function ba(b){switch(b){case "unknown":case "decimal-degrees":return null;
default:return b}}const x={icon:F.px2pt(24),text:F.px2pt(12),line:F.px2pt(1),viewScaleSizeFactor:100};u.avoidFeatureTemplateSelectionWithOnlyOneItem=function(b,a){b.viewModel.refreshCreationTemplates();if("awaiting-feature-creation-info"===a[0].id){var c=b.viewModel.featureTemplatesViewModel.items;1!==c.length?c=null:(c=c[0],c="items"in c?1===c.items.length?c.items[0]:null:c);n.isSome(c)&&(b.creationInfo={layer:c.layer,template:c.template},a.shift())}return a};u.createWorkflowSteps=function(b,a,c){let d=
!1;return b.filter(h=>d?!0:d=h===a).map(h=>c[h]())};u.fetchCandidates=function(b,a,c,d){return R.apply(this,arguments)};u.fetchFullFeature=function(b,a,c){return S.apply(this,arguments)};u.findLayerInfo=function(b,a){return b&&b.find(c=>c.layer===a)};u.getVisualVariableAttributes=aa;u.setUpFeatureAdd=function(b,a,c,d){return L.apply(this,arguments)};u.setUpGeometryUpdate=function(b,a,c,d,h,f){return W.apply(this,arguments)};u.sizeDefaults=x;u.sizeVariableUnitToLengthUnit=ba;u.startCreatingNewFeature=
M;u.startUpdatingFeature=T;u.updateGraphicSymbolWhenRequired=z;u.visualVariableInteractiveUpdate=da;Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});