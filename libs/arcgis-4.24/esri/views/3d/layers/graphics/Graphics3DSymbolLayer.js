// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../core/has ../../../../core/Logger ../../../../core/maybe ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ./elevationAlignmentUtils ./ElevationContext ./featureExpressionInfoUtils ./graphicUtils ./interfaces ./Loadable ./symbolComplexity".split(" "),function(p,t,H,u,I,l,J,K,q,L,M,r,N,O,P){function m(g,h){g=null!=g?h.attributes[g]:0;return null!=g&&isFinite(g)?g:0}function v(g){const h={color:!1,opacity:!1,
opacityAlwaysOpaque:!0,size:!1};g&&"visualVariables"in g&&g.visualVariables&&g.visualVariables.forEach(c=>{switch(c.type){case "color":h.color=!0;if(c.stops)for(let a=0;a<c.stops.length;a++){const b=c.stops[a].color;b&&(h.opacity=!0,1>b.a&&(h.opacityAlwaysOpaque=!1))}break;case "opacity":h.opacity=!0;h.opacityAlwaysOpaque=!1;break;case "size":h.size=!0}});return h}const n=I.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");u=function(g){function h(a,b,d,f){var e=g.call(this,d.schedule)||
this;e._context=d;e._elevationInfoOverride=null;e._ignoreDrivers=!1;e._drivenProperties={color:!1,opacity:!1,opacityAlwaysOpaque:!0,size:!1};e.complexity=null;e.logger=n;e._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0};e.symbol=a;e.symbolLayer=b;e._renderPriority=f.renderPriority;e._renderPriorityStep=f.renderPriorityStep;e._elevationContext=new L.ElevationContext;e.complexity=e.computeComplexity();e._ignoreDrivers=f.ignoreDrivers;e._ignoreDrivers||(e._drivenProperties=v(e._context.renderer));
e._updateElevationContext();return e}t._inheritsLoose(h,g);var c=h.prototype;c.getCachedSize=function(){return null};c._drivenPropertiesChanged=function(a){if(this._ignoreDrivers)return!1;const b=this._drivenProperties;a=v(a);return a.color!==b.color||a.opacity!==b.opacity||a.opacityAlwaysOpaque!==b.opacityAlwaysOpaque||a.size!==b.size};c._logGeometryCreationWarnings=function(a,b,d,f){const e="polygons"in a?a.polygons:null;f=`${f} geometry failed to be created`;let k=null;a.projectionSuccess?!b.length||
1===b.length&&!b[0].length?k=`${f} (no ${d} were defined)`:Array.isArray(b)&&Array.isArray(b[0])?e&&0===e.length&&"rings"===d&&0<b.length&&2<b[0].length&&(k=`${f} (filled rings should use clockwise winding - try reversing the order of vertices)`):k=`${f} (${d} should be defined as a 2D array)`:k=`${f} (failed to project geometry to view spatial reference)`;k&&n.warnOncePerTick(k)};c._validateGeometry=function(a,b=null,d=null){return l.isSome(b)&&!b.includes(a.type)?(this.logger.warn("unsupported geometry type for "+
d+` symbol: ${a.type}`),!1):"point"!==a.type||isFinite(a.x)&&isFinite(a.y)?!0:(n.warn("point coordinate is not a valid number, graphic skipped"),!1)};c._defaultElevationInfoNoZ=function(){return Q};c._defaultElevationInfoZ=function(){return R};c._updateElevationContext=function(){l.isSome(this._elevationInfoOverride)?(this._elevationContext.setFromElevationInfo(this._elevationInfoOverride),this._elevationContext.updateFeatureExpressionInfoContext(null)):this._context.layer.elevationInfo?(this._elevationContext.setFromElevationInfo(this._context.layer.elevationInfo),
this._elevationContext.updateFeatureExpressionInfoContext(this._context.featureExpressionInfoContext)):this._elevationContext.reset()};c.getDefaultElevationInfo=function(a){return a.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ()};c.getGeometryElevationMode=function(a,b=this.getDefaultElevationInfo(a)){return this._elevationContext.mode||b.mode};c.setElevationInfoOverride=function(a){this._elevationInfoOverride=a;this._updateElevationContext()};c.setGraphicElevationContext=function(a,
b){var d=l.unwrap(a.geometry);const f=this.getDefaultElevationInfo(d);b.unit=null!=this._elevationContext.unit?this._elevationContext.unit:f.unit;b.mode=this.getGeometryElevationMode(d,f);b.offsetMeters=l.unwrapOr(this._elevationContext.meterUnitOffset,l.unwrapOr(f.offset,0));if(d=!this._elevationOptions.supportsOnTheGround&&"on-the-ground"===b.mode)b.mode="relative-to-ground",b.offsetMeters=0;b.updateFeatureExpressionInfoContext(d?M.zeroContext:this._elevationContext.featureExpressionInfoContext,
a,this._context.layer);return b};c.prepareSymbolLayerPatch=function(a){};c.updateGeometry=function(a,b){return!1};c.onRemoveGraphic=function(a){};c._getLayerOpacity=function(){if(this._context.graphicsCoreOwner&&"fullOpacity"in this._context.graphicsCoreOwner)return this._context.graphicsCoreOwner.fullOpacity;const a=this._context.layer.opacity;return null==a?1:a};c._getCombinedOpacity=function(a,b=w){let d=1;this.draped||(d*=this._getLayerOpacity());if(this._drivenProperties.opacity)return d;l.isSome(a)?
d*=a.a:b.hasIntrinsicColor||(d=0);return d};c._getCombinedOpacityAndColor=function(a,b=w){b=this._getCombinedOpacity(a,b);if(this._drivenProperties.color)return r.mixinColorAndOpacity(null,b);a=l.isSome(a)?H.toUnitRGB(a):J.ONES;return r.mixinColorAndOpacity(a,b)};c._getVertexOpacityAndColor=function(a,b=null){a=r.mixinColorAndOpacity(this._drivenProperties.color?a.color:null,this._drivenProperties.opacity?a.opacity:null);l.isSome(b)&&(a[0]*=b,a[1]*=b,a[2]*=b,a[3]*=b);return a};c.isFastUpdatesEnabled=
function(){return this._fastUpdates&&this._fastUpdates.enabled};c.computeComplexity=function(){return P.defaultSymbolLayerComplexity(this.symbol,this.symbolLayer)};c.globalPropertyChanged=function(a,b,d){switch(a){case "opacity":return this.layerOpacityChanged(b,d);case "elevationInfo":return a=this._elevationContext.mode,this._updateElevationContext(),this.layerElevationInfoChanged(b,d,a)===q.SymbolUpdateType.RECREATE?!1:!0;case "slicePlaneEnabled":return this.slicePlaneEnabledChanged(b,d);case "physicalBasedRenderingEnabled":return this.physicalBasedRenderingChanged();
case "pixelRatio":return this.pixelRatioChanged();default:return!1}};c.updateGraphics3DGraphicElevationInfo=function(a,b,d){let f=q.SymbolUpdateType.UPDATE;a.forEach(e=>{const k=b(e);l.isSome(k)?(this.setGraphicElevationContext(e.graphic,k.elevationContext),k.needsElevationUpdates=d(k.elevationContext.mode)):f=q.SymbolUpdateType.RECREATE});return f};c.applyRendererDiff=function(a,b){return N.ApplyRendererDiffResult.Recreate_Symbol};c.getFastUpdateAttrValues=function(a){if(!this._fastUpdates.enabled)return null;
const b=this._fastUpdates.visualVariables,d=b.size?m(b.size.field,a):0,f=b.color?m(b.color.field,a):0;a=b.opacity?m(b.opacity.field,a):0;return K.fromValues(d,f,a,0)};c.ensureDrapedStatus=function(a){if(null==this._draped)return this._draped=a,!0;a!==this.draped&&n.warnOnce("A symbol can only produce either draped or non-draped visualizations. Use two separate symbol instances for draped and non-draped graphics if necessary.");return!1};c.test=function(){return{drivenProperties:this._drivenProperties,
getVisVarFields:()=>{var a,b,d,f,e,k,x,y,z,A,B,C,D,E,F,G;return{size:null!=(a=null==(b=this._fastUpdates)?void 0:null==(d=b.visualVariables)?void 0:null==(f=d.size)?void 0:f.field)?a:null,color:null!=(e=null==(k=this._fastUpdates)?void 0:null==(x=k.visualVariables)?void 0:null==(y=x.color)?void 0:y.field)?e:null,opacity:null!=(z=null==(A=this._fastUpdates)?void 0:null==(B=A.visualVariables)?void 0:null==(C=B.opacity)?void 0:C.field)?z:null,rotation:null!=(D=null==(E=this._fastUpdates)?void 0:null==
(F=E.visualVariables)?void 0:null==(G=F.rotation)?void 0:G.field)?D:null}}}};t._createClass(h,[{key:"extentPadding",get:function(){return 0}},{key:"needsDrivenTransparentPass",get:function(){return this._drivenProperties.opacity&&!this._drivenProperties.opacityAlwaysOpaque}},{key:"draped",get:function(){return this._draped}}]);return h}(O.Loadable);const Q={mode:"on-the-ground",offset:0,unit:"meters"},R={mode:"absolute-height",offset:0,unit:"meters"},w={hasIntrinsicColor:!1};p.Graphics3DSymbolLayer=
u;p.getAttributeValue=m;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});