// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3f64 ../../../../../geometry/support/lineSegment ../../../analysis/interfaces ../../../analysis/DirectLineMeasurement/interfaces ../../manipulatorUtils ../../visualElements/LaserlineVisualElement".split(" "),
function(c,t,d,w,x,e,m,f,E,F,G,y,r,z,A,u,B,C){const D={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5};var n;(function(p){p.Manipulators="manipulators";p.AnalysisViewDestroyed="analysis-view-destroyed";p.AnalysisView="analysis-view"})(n||(n={}));c.DirectLineMeasurement3DView=function(p){function q(a){a=p.call(this,a)||this;a.params=D;a.analysisViewData=
null;a.cursorPoint=null;a._visible=!1;a._laserLine=null;a.laserLineEnabled=!0;a._handles=new x;a._lastDraggedHandle=null;return a}t._inheritsLoose(q,p);var l=q.prototype;l.initialize=function(){this._laserLine=new C.LaserlineVisualElement({view:this.view,attached:!0});this._updateVisibility(this._visible);this._connectToAnalysisView()};l.destroy=function(){this._handles=e.destroyMaybe(this._handles);this._laserLine=e.destroyMaybe(this._laserLine)};l.createManipulators=function(){var a=()=>{const g=
B.createSphereManipulator(this.view,this.params.handleColor,this.params.handleOpacity);g.available=!1;g.radius=this.params.handleRadius;return g};const b=a(),h=a();e.isSome(this.analysis.startPoint)&&(b.location=this.analysis.startPoint,b.available=!0);e.isSome(this.analysis.endPoint)&&(h.location=this.analysis.endPoint,h.available=!0);var k=()=>{let g=this._lastDraggedHandle;b.grabbing&&!h.grabbing&&(g="start");h.grabbing&&!b.grabbing&&(g="end");b.grabbing||h.grabbing||(g=null);this._lastDraggedHandle=
g};a=b.events.on("grab-changed",k);k=h.events.on("grab-changed",k);this._handles.add([a,k],n.Manipulators);return{start:b,end:h}};l.show=function(){this.destroyed||this._visible||this._updateVisibility(!0)};l.hide=function(){!this.destroyed&&this._visible&&this._updateVisibility(!1)};l._connectToAnalysisView=function(){this._handles.remove(n.AnalysisView);this._handles.add([m.watch(()=>e.applySome(this.analysisViewData,a=>a.destroyed),a=>{a&&this._handles.remove(n.AnalysisView)},m.initial),m.watch(()=>
["measured"===this.toolState.lineState,this.analysisViewData],([a,b])=>{e.isSome(b)&&!b.destroyed&&(b.allowVisualElementsOrientationChange=!a)},m.initial),m.watch(()=>this._laserLineParams,a=>{const b=this._laserLine;b.heightManifoldTarget=a.heightManifoldTarget;b.pointDistanceLine=a.pointDistanceLine;b.lineVerticalPlaneSegment=a.lineVerticalPlaneSegment},m.initial)],n.AnalysisView)};l._updateVisibility=function(a){this.constructed&&((this._visible=a)?this._laserLine.style={innerColor:this.params.laserLineInnerColor,
innerWidth:this.params.laserLineInnerWidth,glowColor:this.params.laserLineGlowColor,glowWidth:this.params.laserLineGlowWidth,glowFalloff:this.params.laserLineGlowFalloff,globalAlpha:this.params.laserLineGlobalAlpha}:this.view.cursor=null,this._laserLine.visible=a)};t._createClass(q,[{key:"visible",get:function(){return this._visible},set:function(a){a?this.show():this.hide()}},{key:"testData",get:function(){const a=this._laserLine.testData,b=this.analysisViewData.testData;return{labels:null==b?void 0:
b.labels,stripeLength:null==b?void 0:b.stripeLength,laserLineRenderer:{heightManifoldEnabled:e.isSome(a)?a.heightManifoldEnabled:!1,heightManifoldTarget:e.isSome(a)?a.heightManifoldTarget:null,pointDistanceEnabled:e.isSome(a)?a.pointDistanceEnabled:!1,pointDistanceOrigin:e.isSome(a)?a.pointDistanceOrigin:null,pointDistanceTarget:e.isSome(a)?a.pointDistanceTarget:null,lineVerticalPlaneEnabled:e.isSome(a)?a.lineVerticalPlaneEnabled:!1}}}},{key:"_cursorPosition",get:function(){const a=r.create();e.applySome(this.cursorPoint,
b=>this.view.renderCoordsHelper.toRenderCoords(b,a));return a}},{key:"_startPosition",get:function(){const a=r.create();e.applySome(this.analysis.startPoint,b=>this.view.renderCoordsHelper.toRenderCoords(b,a));return a}},{key:"_endPosition",get:function(){const a=r.create();e.applySome(this.analysis.endPoint,b=>this.view.renderCoordsHelper.toRenderCoords(b,a));return a}},{key:"_laserLineParams",get:function(){const a=this._focusPosition,{active:b,lineState:h}=this.toolState,k=this.analysisViewData,
g=this.laserLineEnabled&&!!a&&"measured"!==h&&b;if(!g||!this.visible||e.isNone(k)||k.destroyed)return{heightManifoldTarget:null,pointDistanceLine:null,lineVerticalPlaneSegment:null};const v=k.actualVisualizedMeasurement;return{heightManifoldTarget:"euclidean"===v?a:null,pointDistanceLine:"local"!==this.view.viewingMode&&g&&this.analysis.startPoint&&"geodesic"===v?this._pointDistanceLine:null,lineVerticalPlaneSegment:g&&k.viewMode===u.ViewMode.Triangle?z.fromPoints(this._startPosition,this._endPosition):
null}}},{key:"_focusPosition",get:function(){const {lineState:a}=this.toolState;var b=this.analysisViewData;b=e.isSome(b)&&!b.destroyed&&b.measurementMode===A.MeasurementMode.Euclidean&&b.viewMode===u.ViewMode.Direct;switch(a){case "drawing":return b?this._startPosition:this.analysis.endPoint?this._endPosition:this._startPosition;case "editing":return b?"start"===this._lastDraggedHandle?this._endPosition:this._startPosition:"start"===this._lastDraggedHandle?this._startPosition:this._endPosition;default:return e.isSome(this.cursorPoint)?
this._cursorPosition:null}}},{key:"_pointDistanceLine",get:function(){return{origin:"drawing"===this.toolState.lineState||"end"===this._lastDraggedHandle?this._startPosition:this._endPosition,target:this._focusPosition}}}]);return q}(w);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"view",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"params",void 0);d.__decorate([f.property({constructOnly:!0})],c.DirectLineMeasurement3DView.prototype,"analysis",
void 0);d.__decorate([f.property({constructOnly:!0})],c.DirectLineMeasurement3DView.prototype,"analysisViewData",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"cursorPoint",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"toolState",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"visible",null);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"testData",null);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,
"_visible",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"_laserLine",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"laserLineEnabled",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"_cursorPosition",null);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"_startPosition",null);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"_endPosition",null);d.__decorate([f.property()],
c.DirectLineMeasurement3DView.prototype,"_lastDraggedHandle",void 0);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"_laserLineParams",null);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"_focusPosition",null);d.__decorate([f.property()],c.DirectLineMeasurement3DView.prototype,"_pointDistanceLine",null);c.DirectLineMeasurement3DView=d.__decorate([y.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DView")],
c.DirectLineMeasurement3DView);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});