// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../symbols/support/ObjectSymbol3DLayerResource ../../../../symbols/support/symbolLayerUtils3D ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DLodInstanceGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./interfaces ./Loadable ./lodResourceUtils ./objectResourceUtils ./pointUtils ./primitiveObjectSymbolUtils ./symbolComplexity ../support/FastSymbolUpdates ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/lib/lodRendering/LodRenderer ../../webgl-engine/lib/lodRendering/LodResources ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(V,x,R,h,W,H,X,u,m,A,Y,v,da,I,ea,J,fa,ha,S,E,K,ia,Z,ja,L,aa,ka,B,M,la,ma,y,na){S=function(N){function O(b,a,c,d){b=N.call(this,b,a,c,d)||this;b._resources=null;b._optionalFields=[];b._instanceIndexToGraphicUid=new Map;b.hasLoadedPBRTextures=!1;b._disposeResourceHandles=[];b.ensureDrapedStatus(!1);b.hasLoadedPBRTextures=c.physicalBasedRenderingEnabled;return b}x._inheritsLoose(O,N);var k=O.prototype;k.getCachedSize=function(){const [b,a,c]=h.isSome(this._resources)?this._resources.symbolSize:
[1,1,1];return{width:b,depth:a,height:c}};k.doLoad=function(){var b=x._asyncToGenerator(function*(a){if(!this._drivenProperties.size&&E.validateSymbolLayerSize(this.symbolLayer))throw Error();const c=this.symbolLayer;this._resources=this.isPrimitive?yield this._createResourcesForPrimitive(c.resource?c.resource.primitive:da.defaultPrimitive,a):yield this._createResourcesForUrl(c.resource.href,a);this.layerOpacityChanged();this.slicePlaneEnabledChanged();this.physicalBasedRenderingChanged();this.complexity=
this.computeComplexity()});return function(a){return b.apply(this,arguments)}}();k._setMaterialTransparencyParams=function(b,a=h.get(this.symbolLayer,"material","color")){a=this._getCombinedOpacity(a);const c=1>a||this.needsDrivenTransparentPass;b.transparent=c;b.opacity=a;b.cullFace=c?M.CullFaceOptions.None:M.CullFaceOptions.Back;return b};k._createResourcesForPrimitive=function(){var b=x._asyncToGenerator(function*(a,c){if(!aa.isValidPrimitive(a))throw Error(`Unknown object symbol primitive: ${a}`);
var d=this.symbolLayer;const e=v.create(I.objectSymbolLayerPrimitiveBoundingBox(a)),f=m.fromArray(v.size(e)),g=m.fromArray(I.objectSymbolLayerSizeWithResourceSize(f,d)),n=u.length(g);var l={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,ambient:m.ONES,diffuse:m.ONES,hasSlicePlane:this._context.slicePlaneEnabled,hasSliceHighlight:!1,castShadows:this.symbolLayer.castShadows,offsetTransparentBackfaces:!this.symbolLayer.isPrimitive};const p=l.usePBR;this._setMaterialTransparencyParams(l);
const z=this.symbol;if("point-3d"===z.type&&z.verticalOffset){const {screenLength:w,minWorldLength:r,maxWorldLength:t}=z.verticalOffset;l.verticalOffset={screenLength:W.pt2px(w),minWorldLength:r||0,maxWorldLength:null!=t?t:Infinity};l.castShadows=!1}this._context.screenSizePerspectiveEnabled&&(l.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);this._drivenProperties.color?l.externalColor=A.ONES:(d=h.isSome(d.material)&&d.material.color,d=h.isSome(d)?R.toUnitRGBA(d):
A.ONES,l.externalColor=d);this._fastUpdates=B.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions(e,g,f,h.none));l.instanced=["transformation"];this._fastUpdates.enabled?(Object.assign(l,this._fastUpdates.materialParameters),l.instanced.push("featureAttribute"),this._optionalFields.push("featureAttribute")):this._hasPerInstanceColor()&&(l.instanced.push("color"),this._optionalFields.push("color"));l=new na.DefaultMaterial(l);l=aa.primitiveLodResources(a,l);if(!l)throw Error(`Unknown object symbol primitive: ${a}`);
a=y.materialsFromLodResources(l).map(w=>({opacity:1,transparent:w.parameters.transparent}));d=yield this._createStageResources(l,p);c=yield this._createLodRenderer(l,c);return{lodResources:l,lodRenderer:c,stageResources:d,symbolSize:g,extentPadding:n,isEsriSymbolResource:!1,isWosr:!1,originalMaterialParameters:a,physicalBasedRenderingEnabled:p,resourceBoundingBox:e,resourceSize:f,pivotOffset:h.none}});return function(a,c){return b.apply(this,arguments)}}();k._createResourcesForUrl=function(){var b=
x._asyncToGenerator(function*(a,c){var d=["transformation"],e={materialParamsMixin:{instanced:d,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows},streamDataRequester:this._context.streamDataRequester,cache:this._context.sharedResources.objectResourceCache};this._fastUpdates=B.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions(h.none,h.none,h.none,h.none));this._fastUpdates.enabled?(Object.assign(e.materialParamsMixin,this._fastUpdates.materialParameters),
d.push("featureAttribute"),this._optionalFields.push("featureAttribute")):this._hasPerInstanceColor()&&(d.push("color"),this._optionalFields.push("color"));d=this.symbol;if("point-3d"===d.type&&d.verticalOffset){const {screenLength:q,minWorldLength:C,maxWorldLength:F}=d.verticalOffset;e.materialParamsMixin.verticalOffset={screenLength:W.pt2px(q),minWorldLength:C||0,maxWorldLength:null!=F?F:Infinity};e.materialParamsMixin.castShadows=!1}e.signal=c;e.usePBR=this._context.physicalBasedRenderingEnabled;
d=e.usePBR;const f=yield ja.fetch(a,e);a=f.isEsriSymbolResource;e=f.isWosr;this._addDisposeResource(()=>f.remove());const g=Z.makeLodResources(f.lods);Z.fillEstimatedMinScreenSpaceRadius(g);g.levels.sort((q,C)=>q.minScreenSpaceRadius-C.minScreenSpaceRadius);g.levels[0].minScreenSpaceRadius=Math.min(2,g.levels[0].minScreenSpaceRadius);const n=this._context,l=this._getExternalColorParameters(this.symbolLayer.material);var p=h.get(this.symbolLayer,"material","color");const z=this._getCombinedOpacity(p,
{hasIntrinsicColor:!0}),w=this.needsDrivenTransparentPass;var r=y.materialsFromLodResources(g);p=y.materialsFromLodResources(g).map(q=>({opacity:q.parameters.opacity||1,transparent:q.parameters.transparent}));r.forEach(q=>{const C=q.parameters;q.setParameters(l);const F=C.opacity*z;q.setParameters({opacity:F,transparent:1>F||w||C.transparent});n.screenSizePerspectiveEnabled&&q.setParameters({screenSizePerspective:n.sharedResources.screenSizePerspectiveSettings})});const t=f.referenceBoundingBox,G=
m.fromArray(v.size(t)),ba=m.fromArray(g.levels[0].pivotOffset),T=m.fromArray(I.objectSymbolLayerSizeWithResourceSize(G,this.symbolLayer)),oa=u.length(T);B.updateFastSymbolUpdatesState(this._fastUpdates,this._context.renderer,this._fastVisualVariableConvertOptions(t,T,G,ba))&&r.forEach(q=>q.setParameters(this._fastUpdates.materialParameters));r=yield this._createStageResources(g,d);c=yield this._createLodRenderer(g,c);return{lodResources:g,lodRenderer:c,stageResources:r,symbolSize:T,extentPadding:oa,
isEsriSymbolResource:a,isWosr:e,originalMaterialParameters:p,physicalBasedRenderingEnabled:d,resourceBoundingBox:t,resourceSize:G,pivotOffset:ba}});return function(a,c){return b.apply(this,arguments)}}();k._addDisposeResource=function(b){this._disposeResourceHandles.push(b)};k._createStageResources=function(){var b=x._asyncToGenerator(function*(a,c){const d=this._context.stage,e=y.materialsFromLodResources(a);c!==this._context.physicalBasedRenderingEnabled&&this.physicalBasedRenderingChanged();d.addMany(e);
this._addDisposeResource(()=>d.removeMany(e));const f=y.texturesFromLodResources(a);d.addMany(f);this._addDisposeResource(()=>d.removeMany(f));yield d.load(f);const g=y.geometriesFromLodResources(a);d.addMany(g);this._addDisposeResource(()=>d.removeMany(g));return{materials:e,textures:f,geometries:g}});return function(a,c){return b.apply(this,arguments)}}();k._createLodRenderer=function(){var b=x._asyncToGenerator(function*(a,c){const d=this._context.stage,e=new ma.LodRenderer(a,this._optionalFields,
{layerUid:this._context.layer.uid,graphicUid:f=>this._instanceIndexToGraphicUid.get(f),notifyGraphicGeometryChanged:f=>this._context.notifyGraphicGeometryChanged(this._instanceIndexToGraphicUid.get(f)),notifyGraphicVisibilityChanged:f=>this._context.notifyGraphicVisibilityChanged(this._instanceIndexToGraphicUid.get(f))},this._fastUpdates.enabled?{applyTransform:(f,g,n)=>{f.getFeatureAttribute(g,P);H.copy(n,B.evaluateModelTransform(this._fastUpdates.materialParameters,P,n))},scaleFactor:(f,g,n)=>{g.getFeatureAttribute(n,
P);return B.evaluateModelTransformScale(f,this._fastUpdates.materialParameters,P)}}:null);e.slicePlaneEnabled=this._context.slicePlaneEnabled;this._addDisposeResource(()=>{d.removeRenderPlugin(e)});yield d.addRenderPlugin(e.slots,e,c);return e});return function(a,c){return b.apply(this,arguments)}}();k._getExternalColorParameters=function(b){const a={};this._drivenProperties.color?a.externalColor=A.ONES:h.isSome(b)&&h.isSome(b.color)?a.externalColor=R.toUnitRGBA(b.color):(a.externalColor=A.ONES,a.colorMixMode=
"ignore");return a};k.destroy=function(){N.prototype.destroy.call(this);this._cleanupResources()};k._cleanupResources=function(){this._disposeResourceHandles.forEach(b=>b());this._disposeResourceHandles.length=0;this._resources=null};k.createGraphics3DGraphic=function(b){const a=b.graphic;if(!this._validateGeometry(a.geometry))return null;const c=L.placePointOnGeometry(a.geometry);if(h.isNone(c))return this.logger.warn(`unsupported geometry type for icon symbol: ${a.geometry.type}`),null;const d=
this.setGraphicElevationContext(a,new fa.ElevationContext);return this._createAs3DShape(a,c,b.renderingInfo,d,a.uid)};k.notifyDestroyGraphicLayer=function(b){this._instanceIndexToGraphicUid.delete(b.instanceIndex)};k.graphicLayerToGraphicId=function(){return 0};k.layerOpacityChanged=function(){if(h.isNone(this._resources))return!0;const b=this._drivenProperties.opacity,a=!this.isPrimitive,c=this._resources.stageResources.materials,d=this._resources.originalMaterialParameters;for(let g=0;g<c.length;g++){const n=
c[g];var e=h.get(this.symbolLayer,"material","color"),f=d[g];e=this._getCombinedOpacity(e,{hasIntrinsicColor:a})*f.opacity;f=1>e||b||f.transparent;n.setParameters({opacity:e,transparent:f});this.isPrimitive&&n.setParameters({cullFace:f?M.CullFaceOptions.None:M.CullFaceOptions.Back})}return!0};k.layerElevationInfoChanged=function(b,a){return this.updateGraphics3DGraphicElevationInfo(b,a,J.needsElevationUpdates3D)};k.slicePlaneEnabledChanged=function(){if(h.isNone(this._resources))return!0;this._resources.lodRenderer.slicePlaneEnabled=
this._context.slicePlaneEnabled;for(const b of this._resources.stageResources.materials)b.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});return!0};k.physicalBasedRenderingChanged=function(){if(h.isNone(this._resources))return!0;const {stageResources:b,isWosr:a}=this._resources;for(const c of b.materials)this.isPrimitive?c.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}):a||c.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!1});
return!1===this.hasLoadedPBRTextures&&!0===this._context.physicalBasedRenderingEnabled?(this.hasLoadedPBRTextures=!0,!1):!0};k.pixelRatioChanged=function(){return!0};k.applyRendererDiff=function(b,a){if(h.isNone(this._resources))return K.ApplyRendererDiffResult.Recreate_Symbol;const {stageResources:{materials:c},lodRenderer:d,resourceBoundingBox:e,symbolSize:f,resourceSize:g,pivotOffset:n}=this._resources;for(const l in b.diff)switch(l){case "visualVariables":if(B.updateFastSymbolUpdatesState(this._fastUpdates,
a,this._fastVisualVariableConvertOptions(e,f,g,n))){for(const p of c)p.setParameters(this._fastUpdates.materialParameters);d.notifyShaderTransformationChanged()}else return K.ApplyRendererDiffResult.Recreate_Symbol;break;default:return K.ApplyRendererDiffResult.Recreate_Symbol}return K.ApplyRendererDiffResult.Fast_Update};k.computeComplexity=function(){if(h.isNone(this._resources))return N.prototype.computeComplexity.call(this);const b=y.geometriesFromLodLevelResources(this._resources.lodResources.levels[0]).reduce((c,
d)=>c+d.indices.get(la.VertexAttribute.POSITION).length,0)/3,a=ka.defaultSymbolLayerMemoryComplexity(this.symbol,this.symbolLayer);return{primitivesPerFeature:b,primitivesPerCoordinate:0,drawCallsPerFeature:0,estimated:!1,memory:a}};k._hasLodRenderer=function(){return h.isSome(this._resources)};k._createAs3DShape=function(b,a,c,d,e){if(!this._hasLodRenderer()||h.isNone(this._resources))return null;b=this.getFastUpdateAttrValues(b);const f=!this._fastUpdates.enabled&&this._hasPerInstanceColor()?E.mixinColorAndOpacity(c.color,
c.opacity):null;var g=this._context.clippingExtent;Y.projectPointToVector(a,D,this._context.elevationProvider.spatialReference);if(h.isSome(g)&&!v.containsPoint(g,D))return null;g=this._requiresTerrainElevation(d);const n=this._computeGlobalTransform(a,d,U,Q);c=this._computeLocalTransform(this._resources,this.symbolLayer,c,ca);const l=this._resources.lodRenderer.instanceData,p=l.addInstance();this._instanceIndexToGraphicUid.set(p,e);l.setLocalTransform(p,c,!1);l.setGlobalTransform(p,n);b&&l.setFeatureAttribute(p,
b);f&&l.setColor(p,f);e=new ha(this,p,ea.perLodInstanceElevationAligner,d);g&&(e.alignedSampledElevation=Q.sampledElevation);e.needsElevationUpdates=J.needsElevationUpdates3D(d.mode);L.extendPointGraphicElevationContext(e,a,this._context.elevationProvider);return e};k._computeGlobalTransform=function(b,a,c,d){J.evaluateElevationInfoAtPoint(b,this._context.elevationProvider,a,this._context.renderCoordsHelper,d);D[0]=b.x;D[1]=b.y;D[2]=d.z;Y.computeTranslationToOriginAndRotation(b.spatialReference,D,
c,this._context.renderCoordsHelper.spatialReference);return c};k._computeLocalTransform=function(b,a,c,d){H.identity(d);this._applyObjectRotation(c,!1,d);this._applyObjectRotation(a,!0,d);this._applyObjectScale(b,c,d);this._applyAnchor(b,a,d);return d};k._applyObjectScale=function(b,a,c){this._fastUpdates.enabled&&this._fastUpdates.requiresShaderTransformation||(b=E.computeObjectScale(this._drivenProperties.size&&a.size?a.size:b.symbolSize,b.symbolSize,b.resourceSize,this._context.renderCoordsHelper.unitInMeters),
1===b[0]&&1===b[1]&&1===b[2]||H.scale(c,c,b))};k.prepareSymbolLayerPatch=function(b){if("partial"===b.diff.type){var a=b.diff.diff;this._preparePatchTransform(b,a);this._preparePatchColor(b,a)}};k.updateGeometry=function(b,a){if(h.isNone(this._resources))return!0;const c=a&&L.placePointOnGeometry(a);if(h.isNone(c))return!1;a=this.getGeometryElevationMode(a);if(b.elevationContext.mode!==a)return!1;this._computeGlobalTransform(c,b.elevationContext,U,Q);this._requiresTerrainElevation(b.elevationContext)&&
(b.alignedSampledElevation=Q.sampledElevation);this._resources.lodRenderer.instanceData.setGlobalTransform(b.instanceIndex,U,!0);L.extendPointGraphicElevationContext(b,c,this._context.elevationProvider);return!0};k._preparePatchTransform=function(b,a){if((a.heading||a.tilt||a.roll||a.width||a.height||a.depth||a.anchor||a.anchorPosition)&&!h.isNone(this._resources)){var c=(r,t,G)=>h.unwrapOr(null!=r&&"complete"===r.type?r.newValue:t,G),d=c(a.heading,this.symbolLayer.heading,0),e=c(a.tilt,this.symbolLayer.tilt,
0),f=c(a.roll,this.symbolLayer.roll,0),g=c(a.width,this.symbolLayer.width,void 0),n=c(a.height,this.symbolLayer.height,void 0),l=c(a.depth,this.symbolLayer.depth,void 0),p=c(a.anchor,this.symbolLayer.anchor,void 0);c=c(a.anchorPosition,this.symbolLayer.anchorPosition,void 0);delete a.heading;delete a.tilt;delete a.roll;delete a.width;delete a.height;delete a.depth;delete a.anchor;delete a.anchorPosition;var z={heading:d,tilt:e,roll:f,anchor:p,anchorPosition:c},w=this._resources;this.loadStatus===
ia.LoadStatus.LOADED&&b.symbolLayerStatePatches.push(()=>{w.symbolSize=m.fromArray(I.objectSymbolLayerSizeWithResourceSize(w.resourceSize,{width:g,height:n,depth:l,isPrimitive:this.symbolLayer.isPrimitive}))});b.graphics3DGraphicPatches.push((r,t)=>{t=this._computeLocalTransform(w,z,t,ca);w.lodRenderer.instanceData.setLocalTransform(r.instanceIndex,t,!0)})}};k._preparePatchColor=function(b,a){if(a.material&&"partial"===a.material.type&&(a=a.material.diff,a.color&&"complete"===a.color.type&&null!=
a.color.newValue&&null!=a.color.oldValue)){var c=a.color.newValue,d=h.isSome(c)?R.toUnitRGBA(c):A.ONES;delete a.color;var e=this._resources;h.isNone(e)||b.graphics3DGraphicPatches.push(f=>{this._hasPerInstanceColor()?(e.lodRenderer.instanceData.setColor(f.instanceIndex,d),f=this._setMaterialTransparencyParams({},c)):f=this._setMaterialTransparencyParams({externalColor:d},c);for(const g of e.stageResources.materials)g.setParameters(f)})}};k._requiresTerrainElevation=function(b){return"absolute-height"!==
b.mode};k._applyObjectRotation=function(b,a,c){if(!(this._fastUpdates.enabled&&this._fastUpdates.requiresShaderTransformation&&a))return E.computeObjectRotation(b.heading,b.tilt,b.roll,c)};k._computeAnchor=function(b,a,c){const d=m.create();switch(c.anchor){case "center":u.copy(d,v.center(b));u.negate(d,d);break;case "top":a=v.center(b);u.set(d,-a[0],-a[1],-b[5]);break;case "bottom":a=v.center(b);u.set(d,-a[0],-a[1],-b[2]);break;case "relative":a=v.center(b);b=v.size(b);c=(c=c.anchorPosition)?m.fromValues(c.x,
c.y,c.z):m.ZEROS;u.multiply(d,b,c);u.add(d,d,a);u.negate(d,d);break;default:h.isSome(a)?u.negate(d,a):u.copy(d,m.ZEROS)}return d};k._applyAnchor=function(b,a,c){this._fastUpdates.enabled&&this._fastUpdates.requiresShaderTransformation||(b=this._computeAnchor(b.resourceBoundingBox,b.pivotOffset,a))&&H.translate(c,c,b)};k._hasPerInstanceColor=function(){return this._drivenProperties.color||this._drivenProperties.opacity};k._fastVisualVariableConvertOptions=function(b,a,c,d){const e=h.isSome(b)?m.fromArray(v.size(b)):
m.ONES;b=h.isSome(b)?this._computeAnchor(b,d,this.symbolLayer):m.ZEROS;d=this._context.renderCoordsHelper.unitInMeters;c=E.computeObjectScale(h.isSome(a)?a:void 0,a,c,d);const f=m.fromValues(this.symbolLayer.tilt||0,this.symbolLayer.roll||0,this.symbolLayer.heading||0);return{modelSize:e,symbolSize:h.isSome(a)?a:m.ONES,unitInMeters:d,transformation:{anchor:b,scale:c,rotation:f}}};x._createClass(O,[{key:"extentPadding",get:function(){return h.isSome(this._resources)?this._resources.extentPadding:0}},
{key:"isPrimitive",get:function(){return!(this.symbolLayer.resource&&this.symbolLayer.resource.href)}},{key:"lodRenderer",get:function(){return h.get(this._resources,"lodRenderer")}}]);return O}(S.Graphics3DSymbolLayer);const D=m.create(),ca=X.create(),U=X.create(),P=A.create(),Q=new J.SampleElevationInfo;V.Graphics3DObjectSymbolLayer=S;Object.defineProperties(V,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});