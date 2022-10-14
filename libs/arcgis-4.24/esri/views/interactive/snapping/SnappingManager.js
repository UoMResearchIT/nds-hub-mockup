// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/HandleOwner ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec2 ./snappingFactory ./SnappingOptions ./snappingUtils ./candidates/IntersectionSnappingCandidate ../support/viewUtils".split(" "),
function(h,r,k,A,B,t,C,p,m,I,J,K,D,E,F,G,x,u,v){h.SnappingManager=function(y){function w(a){a=y.call(this,a)||this;a.options=new G;a.snappingEnginesFactory=F.defaultSnappingEnginesFactory;a._engines=[];a._currentMainCandidate=null;a._currentOtherActiveCandidates=[];return a}r._inheritsLoose(w,y);var g=w.prototype;g.initialize=function(){this.handles.add([p.watch(()=>{const {effectiveFeatureEnabled:a,effectiveSelfEnabled:b,touchSensitivityMultiplier:d,distance:c}=this.options;return{effectiveFeatureEnabled:a,
effectiveSelfEnabled:b,touchSensitivityMultiplier:d,distance:c}},()=>{this.doneSnapping();this.emit("changed")},p.sync),p.watch(()=>this.options,a=>{for(const b of this._engines)b.options=a},p.sync),p.watch(()=>({viewReady:this.view.ready,viewSpatialReference:this.view.spatialReference,snappingEnginesFactory:this.snappingEnginesFactory}),({viewReady:a,snappingEnginesFactory:b})=>this._recreateEngines(a,b),p.syncAndInitial)])};g.destroy=function(){this._destroyEngines()};g._recreateEngines=function(a,
b){this._destroyEngines();if(a){var {view:d,options:c}=this;this._engines=b(d,c)}};g._destroyEngines=function(){for(const a of this._engines)a.destroy();this._engines=[]};g.snap=function(){var a=r._asyncToGenerator(function*(b,d,c){const e=d.coordinateHelper.pointToVector(b),f=yield this._fetchCandidates(e,d,c);return{get valid(){return!C.isAborted(c)},apply:()=>{const {snappedPoint:n,hints:l}=this._processCandidates(e,f,d);this._removeVisualization();t.isSome(d.visualizer)&&this.handles.add(d.visualizer.draw(l,
{coordinateHelper:d.coordinateHelper,elevationInfo:d.elevationInfo,view:this.view}),"visualization-handle");return n}}});return function(b,d,c){return a.apply(this,arguments)}}();g.update=function(a,b){this._removeVisualization();let d=a;const c=[];if(t.isSome(this._currentMainCandidate)){const e=b.coordinateHelper;a=e.pointToVector(a);const f=this._currentMainCandidate.constraint.closestTo(a);if(x.squareDistance(v.anyMapPointToScreenPoint(a,e,b.elevationInfo,this.view),v.anyMapPointToScreenPoint(f,
e,b.elevationInfo,this.view))<this._squaredPointProximityThreshold(b.pointer)){d=e.vectorToDehydratedPoint(f);this._currentMainCandidate.targetPoint=f;c.push(...this._currentMainCandidate.hints);for(const n of this._currentOtherActiveCandidates)n.targetPoint=f,c.push(...n.hints)}else this._currentMainCandidate=null,this._currentOtherActiveCandidates=[]}t.isSome(b.visualizer)&&this.handles.add(b.visualizer.draw(c,{coordinateHelper:b.coordinateHelper,elevationInfo:b.elevationInfo,view:this.view}),"visualization-handle");
return d};g.doneSnapping=function(){this._removeVisualization();this._currentMainCandidate=null;this._currentOtherActiveCandidates=[]};g._removeVisualization=function(){this.handles.remove("visualization-handle")};g._fetchCandidates=function(){var a=r._asyncToGenerator(function*(b,d,c){return(yield Promise.all(this._engines.map(e=>e.fetchCandidates(b,d,c)))).flat()});return function(b,d,c){return a.apply(this,arguments)}}();g._processCandidates=function(a,b,d){if(1>b.length)return this.doneSnapping(),
{snappedPoint:d.coordinateHelper.vectorToDehydratedPoint(a),hints:[]};x.sortCandidatesInPlace(a,b);const c=this._currentMainCandidate;if(t.isSome(c)){const e=this._findOldConstraintInNewCandidates(c,b);if(0<=e)if(b[e]instanceof u.IntersectionSnappingCandidate){if(E.squaredDistance(a,c.targetPoint)<this._squaredPointProximityThreshold(d.pointer))return this._updateSnappingCandidate(c,b,d)}else return this._intersectWithOtherCandidates(e,b,a,d)}return this._intersectWithOtherCandidates(0,b,a,d)};g._findOldConstraintInNewCandidates=
function(a,b){return a instanceof u.IntersectionSnappingCandidate?0<=this._findOldCandidateIndex(b,a.first)&&0<=this._findOldCandidateIndex(b,a.second)?0:-1:this._findOldCandidateIndex(b,a)};g._intersectWithOtherCandidates=function(a,b,d,c){const e=b[a],f=[],n=c.coordinateHelper;for(let l=0;l<b.length;++l){if(l===a)continue;const q=b[l];for(const H of e.constraint.intersect(q.constraint)){const z=n.fromXYZ(H.intersection,e.targetPoint[2]);f.push([new u.IntersectionSnappingCandidate(n,z,e,q,q.elevationInfo),
x.squareDistance(v.anyMapPointToScreenPoint(d,c.coordinateHelper,c.elevationInfo,this.view),v.anyMapPointToScreenPoint(z,c.coordinateHelper,c.elevationInfo,this.view))])}}return 0<f.length&&(f.sort((l,q)=>l[1]-q[1]),f[0][1]<this._squaredPointProximityThreshold(c.pointer))?this._updateSnappingCandidate(f[0][0],b,c):this._updateSnappingCandidate(e,b,c)};g._updateSnappingCandidate=function(a,b,d){this.doneSnapping();this._currentMainCandidate=a;const c=this._currentMainCandidate.targetPoint,e=[];e.push(...a.hints);
for(const f of b){if(a instanceof u.IntersectionSnappingCandidate){if(f.constraint.objectEqual(a.first.constraint)||f.constraint.objectEqual(a.second.constraint))continue}else if(f.constraint.objectEqual(a.constraint))continue;f.constraint.check(c)&&(f.targetPoint=c,this._currentOtherActiveCandidates.push(f),e.push(...f.hints))}return{snappedPoint:d.coordinateHelper.vectorToDehydratedPoint(c),hints:e}};g._squaredPointProximityThreshold=function(a){return"touch"===a?this.squaredTouchProximityThreshold:
this.squaredMouseProximityTreshold};g._findOldCandidateIndex=function(a,b){let d=-1;for(let c=0;c<a.length;++c)if(b.constraint.objectEqual(a[c].constraint)){d=c;break}return d};r._createClass(w,[{key:"updating",get:function(){return this._engines.some(a=>a.updating)}},{key:"squaredMouseProximityTreshold",get:function(){return this.options.distance*this.options.distance}},{key:"squaredTouchProximityThreshold",get:function(){const {distance:a,touchSensitivityMultiplier:b}=this.options,d=a*b;return d*
d}},{key:"test",get:function(){return{visualizationsActive:this.handles.has("visualization-handle"),engines:this._engines}}}]);return w}(A.EventedMixin(B.HandleOwner));k.__decorate([m.property({constructOnly:!0})],h.SnappingManager.prototype,"view",void 0);k.__decorate([m.property()],h.SnappingManager.prototype,"options",void 0);k.__decorate([m.property({readOnly:!0})],h.SnappingManager.prototype,"updating",null);k.__decorate([m.property()],h.SnappingManager.prototype,"snappingEnginesFactory",void 0);
k.__decorate([m.property()],h.SnappingManager.prototype,"_engines",void 0);k.__decorate([m.property()],h.SnappingManager.prototype,"squaredMouseProximityTreshold",null);k.__decorate([m.property()],h.SnappingManager.prototype,"squaredTouchProximityThreshold",null);h.SnappingManager=k.__decorate([D.subclass("esri.views.interactive.snapping.SnappingManager")],h.SnappingManager);Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});