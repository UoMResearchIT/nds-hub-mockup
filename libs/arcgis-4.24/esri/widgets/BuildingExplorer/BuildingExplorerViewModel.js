// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/BuildingSceneLayer ../../layers/support/BuildingFilter ./BuildingDisciplinesViewModel ./BuildingLevel ./BuildingPhase ./support/buildingLayerUtils ./support/filterUtils ./support/layerUtils".split(" "),
function(l,e,c,n,w,x,y,p,z,g,f,G,H,I,A,B,C,q,r,t,D,h,E){const F=y.getLogger("esri.widgets.BuildingExplorer.BuildingExplorerViewModel");c=function(u){function k(a){a=u.call(this,a)||this;a.view=null;a.state="disabled";a.level=new r;a.phase=new t;a.disciplines=new q;a._handles=new x;a._loadLayers=E.createLoadLayersFunction();a.layers=new n;return a}l._inheritsLoose(k,u);var m=k.prototype;m.initialize=function(){this._handles.add([this.layers.on("change",()=>this._onLayersChange()),g.watch(()=>({state:this.state,
layers:this.layers,filter:this._filter}),({state:a,layers:b,filter:d})=>{"ready"===a&&h.setFilterOnLayers(b,d)},{initial:!0})]);this._onLayersChange()};m.destroy=function(){this._handles.destroy();this.level.destroyed||this.level.destroy();this.phase.destroyed||this.phase.destroy();this.disciplines.destroyed||this.disciplines.destroy()};m._onLayersChange=function(){var a=l._asyncToGenerator(function*(){const b=this.layers;this.level.layers=b;this.phase.layers=b;this.disciplines.layers=b;if(0===b.length)this._set("state",
"disabled");else{this._set("state","loading");try{yield this._loadLayers(b),yield Promise.all([g.whenOnce(()=>"ready"===this.level.state),g.whenOnce(()=>"ready"===this.phase.state),g.whenOnce(()=>"ready"===this.disciplines.state)]),b.forEach(D.showFullModel),this._set("state","ready")}catch(d){z.isAbortError(d)||this._set("state","failed")}}});return function(){return a.apply(this,arguments)}}();l._createClass(k,[{key:"isSupported",get:function(){var a;return"3d"===(null==(a=this.view)?void 0:a.type)}},
{key:"layers",set:function(a){const b=a.filter(d=>d instanceof B);b.length!==a.length&&F.error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget.");this._set("layers",w.referenceSetter(b,this._get("layers")))}},{key:"_filter",get:function(){var a=this.level.filterExpressions;const b=this.phase.filterExpressions,d=[],v=h.getFilterBlockSolid([a.solid,b.solid]);p.isSome(v)&&d.push(v);a=h.getFilterBlockXRay([a.xRay,b.xRay]);p.isSome(a)&&d.push(a);return 0===
d.length?null:new C({id:h.generateFilterId(),name:"Building Explorer Filter",filterBlocks:d})}}]);return k}(c);e.__decorate([f.property({value:null})],c.prototype,"view",void 0);e.__decorate([f.property()],c.prototype,"isSupported",null);e.__decorate([f.property({type:n,nonNullable:!0})],c.prototype,"layers",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"state",void 0);e.__decorate([f.property({readOnly:!0,type:r})],c.prototype,"level",void 0);e.__decorate([f.property({readOnly:!0,type:t})],
c.prototype,"phase",void 0);e.__decorate([f.property({readOnly:!0,type:q})],c.prototype,"disciplines",void 0);e.__decorate([f.property()],c.prototype,"_filter",null);return c=e.__decorate([A.subclass("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],c)});