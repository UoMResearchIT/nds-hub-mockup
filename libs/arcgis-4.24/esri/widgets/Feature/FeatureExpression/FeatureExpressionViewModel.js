// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../chunks/languageUtils ../../../core/Accessor ../../../core/HandleOwner ../../../core/reactiveUtils ../../../core/throttle ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../popup/content/AttachmentsContent ../../../popup/content/Content ../../../popup/content/CustomContent ../../../popup/content/ExpressionContent ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/TextContent ../../../popup/ElementExpressionInfo ../FeatureContent/FeatureContentViewModel ../FeatureFields/FeatureFieldsViewModel ../FeatureMedia/FeatureMediaViewModel ../support/arcadeFeatureUtils".split(" "),
function(h,f,w,x,d,y,m,z,g,J,K,L,A,M,N,O,P,B,C,D,E,F,G,H,q){d=function(r){function n(b){var a=r.call(this,b)||this;a._abortController=null;a.expressionInfo=null;a.graphic=null;a.contentElement=null;a.contentElementViewModel=null;a.interceptor=null;a.view=null;a._cancelQuery=()=>{const {_abortController:c}=h._assertThisInitialized(a);c&&c.abort();a._abortController=null};a._createVM=()=>{var c,k;const l=null==(c=a.contentElement)?void 0:c.type;null==(k=a.contentElementViewModel)?void 0:k.destroy();
c="fields"===l?new G:"media"===l?new H:"text"===l?new F:null;a._set("contentElementViewModel",c)};a._compile=h._asyncToGenerator(function*(){a._cancelQuery();const c=new AbortController;a._abortController=c;yield a._compileExpression();a._abortController===c&&(a._abortController=null)});a._compileThrottled=z.throttle(a._compile,1,h._assertThisInitialized(a));a._compileExpression=h._asyncToGenerator(function*(){const {expressionInfo:c,graphic:k,interceptor:l,spatialReference:t,map:u,view:I,_abortController:v}=
h._assertThisInitialized(a);if(c&&k&&t&&u){var e=yield q.loadArcadeUtils();if(v===a._abortController)if((e=yield q.createCompiledExpression({arcadeUtils:e,expressionInfo:c,graphic:k,interceptor:l,map:u,spatialReference:t,view:I}))&&"esri.arcade.Dictionary"===e.declaredClass){e=yield x.castAsJsonAsync(e,v.signal);var p=null==e?void 0:e.type;e="media"===p?C.fromJSON(e):"text"===p?D.fromJSON(e):"fields"===p?B.fromJSON(e):null;a._set("contentElement",e)}else a._set("contentElement",null)}else a._set("contentElement",
null)});a.handles.add([m.watch(()=>[a.expressionInfo,a.graphic,a.map,a.spatialReference,a.view],()=>a._compileThrottled(),m.initial),m.watch(()=>[a.contentElement],()=>a._createVM(),m.initial)]);return a}h._inheritsLoose(n,r);n.prototype.destroy=function(){var b;this._cancelQuery();null==(b=this.contentElementViewModel)?void 0:b.destroy();this._set("contentElementViewModel",null);this._set("contentElement",null)};h._createClass(n,[{key:"spatialReference",get:function(){var b;return(null==(b=this.view)?
void 0:b.spatialReference)||null},set:function(b){void 0===b?this._clearOverride("spatialReference"):this._override("spatialReference",b)}},{key:"state",get:function(){const {_abortController:b,contentElement:a,contentElementViewModel:c}=this;return b?"loading":a||c?"ready":"disabled"}},{key:"map",get:function(){var b;return(null==(b=this.view)?void 0:b.map)||null},set:function(b){void 0===b?this._clearOverride("map"):this._override("map",b)}}]);return n}(y.HandleOwnerMixin(d));f.__decorate([g.property()],
d.prototype,"_abortController",void 0);f.__decorate([g.property({type:E})],d.prototype,"expressionInfo",void 0);f.__decorate([g.property({type:w})],d.prototype,"graphic",void 0);f.__decorate([g.property({readOnly:!0})],d.prototype,"contentElement",void 0);f.__decorate([g.property({readOnly:!0})],d.prototype,"contentElementViewModel",void 0);f.__decorate([g.property()],d.prototype,"interceptor",void 0);f.__decorate([g.property()],d.prototype,"spatialReference",null);f.__decorate([g.property({readOnly:!0})],
d.prototype,"state",null);f.__decorate([g.property()],d.prototype,"map",null);f.__decorate([g.property()],d.prototype,"view",void 0);return d=f.__decorate([A.subclass("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")],d)});