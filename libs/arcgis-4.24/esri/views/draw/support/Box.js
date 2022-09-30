// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Evented ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/coordsUtils ../../../geometry/support/rotate ../../../symbols/SimpleFillSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover ./HighlightHelper ./layerUtils ./settings ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/Polyline".split(" "),
function(N,u,n,E,r,X,D,v,na,oa,pa,Y,F,O,P,I,Q,Z,G,w,aa,ba,ca,da,y,ea,fa){let ha=function(m,l,d,a){this.graphics=m;this.mover=l;this.dx=d;this.dy=a;this.type="move-start"},ia=function(m,l,d,a){this.graphics=m;this.mover=l;this.dx=d;this.dy=a;this.type="move"},R=function(m,l,d,a){this.graphics=m;this.mover=l;this.dx=d;this.dy=a;this.type="move-stop"},ja=function(m,l,d){this.graphics=m;this.mover=l;this.angle=d;this.type="rotate-start"},ka=function(m,l,d){this.graphics=m;this.mover=l;this.angle=d;this.type=
"rotate"},S=function(m,l,d){this.graphics=m;this.mover=l;this.angle=d;this.type="rotate-stop"},la=function(m,l,d,a){this.graphics=m;this.mover=l;this.xScale=d;this.yScale=a;this.type="scale-start"},ma=function(m,l,d,a){this.graphics=m;this.mover=l;this.xScale=d;this.yScale=a;this.type="scale"},T=function(m,l,d,a){this.graphics=m;this.mover=l;this.xScale=d;this.yScale=a;this.type="scale-stop"};n=da.settings.transformGraphics;const B={centerIndicator:new G({style:"cross",size:n.center.size,color:n.center.color}),
fill:{default:new Q({color:n.fill.color,outline:{color:n.fill.outlineColor,join:"round",width:1}}),active:new Q({color:n.fill.stagedColor,outline:{color:n.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new G({style:"square",size:n.vertex.size,color:n.vertex.color,outline:{color:n.vertex.outlineColor,width:1}}),hover:new G({style:"square",size:n.vertex.hoverSize,color:n.vertex.hoverColor,outline:{color:n.vertex.hoverOutlineColor,width:1}})},rotator:{default:new G({style:"circle",
size:n.vertex.size,color:n.vertex.color,outline:{color:n.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:n.vertex.hoverSize,color:n.vertex.hoverColor,outline:{color:n.vertex.hoverOutlineColor,width:1}})},rotatorLine:new Z({color:n.line.color,width:1})};r=function(m){function l(a){a=m.call(this,a)||this;a._activeHandleGraphic=null;a._graphicAttributes={esriSketchTool:"box"};a._mover=null;a._centerGraphic=null;a._backgroundGraphic=null;a._vertexGraphics=[];a._rotateHandleGraphic=null;
a._rotateGraphicOffset=20;a._angleOfRotation=0;a._rotateLineGraphic=null;a._startInfo=null;a._totalDx=0;a._totalDy=0;a._xScale=1;a._yScale=1;a.type="box";a.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}};a.enableMovement=!0;a.enableRotation=!0;a.enableScaling=!0;a.graphics=[];a.highlightsEnabled=!0;a.layer=null;a.preserveAspectRatio=!1;a.showCenterGraphic=!0;a.symbols=B;a.view=null;
a._getBounds=(()=>{const b=F.create();return(c,e)=>{c[0]=Number.POSITIVE_INFINITY;c[1]=Number.POSITIVE_INFINITY;c[2]=Number.NEGATIVE_INFINITY;c[3]=Number.NEGATIVE_INFINITY;for(const f of e){if(!f)continue;let h,k,g;"point"===f.type?(e=k=f.x,h=g=f.y):"multipoint"===f.type?(e=P.geometryToCoordinates(f),[e,h,k,g]=O.getRingsOrPathsBounds(b,[e])):"extent"===f.type?[e,h,k,g]=[f.xmin,f.ymin,f.xmax,f.ymax]:(e=P.geometryToCoordinates(f),[e,h,k,g]=O.getRingsOrPathsBounds(b,e));c[0]=Math.min(e,c[0]);c[1]=Math.min(h,
c[1]);c[2]=Math.max(k,c[2]);c[3]=Math.max(g,c[3])}return c}})();return a}N._inheritsLoose(l,m);var d=l.prototype;d.initialize=function(){this._highlightHelper=new ba({view:this.view});this._setup();this.own([D.when(()=>{var a;return null==(a=this.view)?void 0:a.ready},()=>{const {layer:a,view:b}=this;ca.addUniqueLayer(b,a)},{once:!0,initial:!0}),D.watch(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())}),D.watch(()=>
{var a;return null==(a=this.view)?void 0:a.scale},()=>{this._updateRotateGraphic();this._updateRotateLineGraphic()}),D.watch(()=>this.graphics,()=>this.refresh()),D.watch(()=>this.layer,(a,b)=>{b&&this._resetGraphics(b);this.refresh()}),D.watch(()=>this.highlightsEnabled,()=>{var a;null==(a=this._highlightHelper)?void 0:a.removeAll();this._setUpHighlights()}),this.on("move-start",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onMoveStart?void 0:b.onMoveStart(a)}),this.on("move",a=>{var b;
return null==(b=this.callbacks)?void 0:null==b.onMove?void 0:b.onMove(a)}),this.on("move-stop",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onMoveStop?void 0:b.onMoveStop(a)}),this.on("rotate-start",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onRotateStart?void 0:b.onRotateStart(a)}),this.on("rotate",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onRotate?void 0:b.onRotate(a)}),this.on("rotate-stop",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onRotateStop?
void 0:b.onRotateStop(a)}),this.on("scale-start",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onScaleStart?void 0:b.onScaleStart(a)}),this.on("scale",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onScale?void 0:b.onScale(a)}),this.on("scale-stop",a=>{var b;return null==(b=this.callbacks)?void 0:null==b.onScaleStop?void 0:b.onScaleStop(a)})])};d.destroy=function(){this._reset()};d.isUIGraphic=function(a){return this._vertexGraphics.includes(a)||a===this._backgroundGraphic||a===
this._centerGraphic||a===this._rotateHandleGraphic||a===this._rotateLineGraphic};d.move=function(a,b){if(this._mover&&this.graphics.length){for(const c of this.graphics){const e=w.cloneMove(c.geometry,a,b,this.view);c.geometry=e}this.refresh();this.emit("move-stop",new R(this.graphics,null,a,b))}};d.scale=function(a,b){if(this._mover&&this.graphics.length){for(const c of this.graphics){const e=w.scale(c.geometry,a,b);c.geometry=e}this.refresh();this.emit("scale-stop",new T(this.graphics,null,a,b))}};
d.rotate=function(a,b){if(this._mover&&this.graphics.length){b||(b=new y(this._vertexGraphics[1].geometry.x,this._vertexGraphics[3].geometry.y,this.view.spatialReference));for(const c of this.graphics){const e=I(c.geometry,a,b);c.geometry=e}this.refresh();this.emit("rotate-stop",new S(this.graphics,null,a))}};d.refresh=function(){this._reset();this._setup()};d.reset=function(){this.graphics=[]};d._setup=function(){"active"===this.state&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),
this._updateGraphics())};d._reset=function(){this._highlightHelper.removeAll();this._resetGraphicStateVars();this._resetGraphics();this._mover&&this._mover.destroy();this._mover=null;this.view.cursor="default"};d._resetGraphicStateVars=function(){this._activeHandleGraphic=this._startInfo=null;this._totalDy=this._totalDx=0;this._yScale=this._xScale=1;this._angleOfRotation=0};d._resetGraphics=function(a){if(a=a||this.layer)a.removeMany(this._vertexGraphics),a.remove(this._backgroundGraphic),a.remove(this._centerGraphic),
a.remove(this._rotateHandleGraphic),a.remove(this._rotateLineGraphic);this._vertexGraphics=[];this._rotateLineGraphic=this._rotateHandleGraphic=this._centerGraphic=this._backgroundGraphic=null};d._setupMover=function(){let a=[];this.enableScaling&&(a=a.concat(this._vertexGraphics));this.enableMovement&&(a=a.concat(this.graphics,this._backgroundGraphic));this.enableRotation&&a.push(this._rotateHandleGraphic);this.showCenterGraphic&&a.push(this._centerGraphic);this._mover=new aa({enableMoveAllGraphics:!1,
highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:a,callbacks:{onGraphicClick:b=>this._onGraphicClickCallback(b),onGraphicMoveStart:b=>this._onGraphicMoveStartCallback(b),onGraphicMove:b=>this._onGraphicMoveCallback(b),onGraphicMoveStop:b=>this._onGraphicMoveStopCallback(b),onGraphicPointerOver:b=>this._onGraphicPointerOverCallback(b),onGraphicPointerOut:b=>this._onGraphicPointerOutCallback(b)}})};d._getStartInfo=function(a){const [b,c,e,f]=this._getBoxBounds(F.create()),h=Math.abs(e-
b),k=Math.abs(f-c),{x:g,y:q}=a.geometry;return{width:h,height:k,centerX:(e+b)/2,centerY:(f+c)/2,startX:g,startY:q,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}};d._getGraphicInfos=function(){return this.graphics.map(a=>this._getGraphicInfo(a))};d._getGraphicInfo=function(a){a=a.geometry;const [b,c,e,f]=this._getBounds(F.create(),[a]);return{width:Math.abs(e-b),height:Math.abs(f-c),centerX:(e+b)/2,centerY:(f+c)/2,geometry:a}};d._onGraphicClickCallback=
function(a){a.viewEvent.stopPropagation();this.emit("graphic-click",a);if(this.callbacks.onGraphicClick)this.callbacks.onGraphicClick(a)};d._onGraphicMoveStartCallback=function(a){const {_angleOfRotation:b,_xScale:c,_yScale:e,_backgroundGraphic:f,_vertexGraphics:h,_rotateHandleGraphic:k,symbols:g}=this,q=a.graphic;this._resetGraphicStateVars();this._hideGraphicsBeforeUpdate();f.symbol=g.fill.active;this._startInfo=this._getStartInfo(q);q===k?(this.view.cursor="grabbing",this.emit("rotate-start",new ja(this.graphics,
q,b))):h.includes(q)?(this._activeHandleGraphic=q,this.emit("scale-start",new la(this.graphics,q,c,e))):this.emit("move-start",new ha(this.graphics,q,a.dx,a.dy))};d._onGraphicMoveCallback=function(a){const b=a.graphic;if(this._startInfo)if(this._vertexGraphics.includes(b))this._scaleGraphic(b),this.emit("scale",new ma(this.graphics,b,this._xScale,this._yScale));else if(b===this._rotateHandleGraphic)this._rotateGraphic(b),this.emit("rotate",new ka(this.graphics,b,this._angleOfRotation));else{const {dx:c,
dy:e}=a;this._totalDx+=c;this._totalDy+=e;this._moveGraphic(b,c,e);this.emit("move",new ia(this.graphics,b,c,e))}};d._onGraphicMoveStopCallback=function(a){a=a.graphic;if(this._startInfo){var {_angleOfRotation:b,_totalDx:c,_totalDy:e,_xScale:f,_yScale:h,_vertexGraphics:k,_rotateHandleGraphic:g}=this;this.refresh();a===g?(this.view.cursor="pointer",this.emit("rotate-stop",new S(this.graphics,a,b))):k.includes(a)?this.emit("scale-stop",new T(this.graphics,a,f,h)):this.emit("move-stop",new R(this.graphics,
a,c,e))}else this.refresh()};d._onGraphicPointerOverCallback=function(a){const {_backgroundGraphic:b,_vertexGraphics:c,graphics:e,_rotateHandleGraphic:f,symbols:h,view:k}=this;var g=a.graphic;if(g===f)f.symbol=h.rotator.hover,k.cursor="pointer";else if(e.includes(g)||g===b)k.cursor="move";else if(c.includes(g)){a.graphic.symbol=h.handles.hover;g=k.rotation;a=a.index;8>a&&(a=0<=g&&45>g?a%8:45<=g&&90>g?(a+1)%8:90<=g&&135>g?(a+2)%8:135<=g&&180>g?(a+3)%8:180<=g&&225>g?(a+4)%8:225<=g&&270>g?(a+5)%8:270<=
g&&315>g?(a+6)%8:(a+7)%8);switch(a){case 0:a="nwse-resize";break;case 1:a="ns-resize";break;case 2:a="nesw-resize";break;case 3:a="ew-resize";break;case 4:a="nwse-resize";break;case 5:a="ns-resize";break;case 6:a="nesw-resize";break;case 7:a="ew-resize";break;default:a="pointer"}k.cursor=a}else k.cursor="pointer"};d._onGraphicPointerOutCallback=function(a){const {_vertexGraphics:b,_rotateHandleGraphic:c,symbols:e,view:f}=this;a.graphic===c?c.symbol=e.rotator.default:b.includes(a.graphic)&&(a.graphic.symbol=
e.handles.default);f.cursor="default"};d._scaleGraphic=function(a){const {_startInfo:b,_vertexGraphics:c,preserveAspectRatio:e,view:f}=this,{centerX:h,centerY:k,startX:g,startY:q}=b,{resolution:z,transform:p}=f.state;var t=c.indexOf(a);1!==t&&5!==t||this._updateX(a,h);3!==t&&7!==t||this._updateY(a,k);const {x:L,y:M}=a.geometry;var C=p[0]*L+p[2]*M+p[4],x=p[1]*L+p[3]*M+p[5];a=b.graphicInfos.map(J=>J.geometry);if(e){this._xScale=this._yScale=w.getScaleRatio(p[0]*h+p[2]*k+p[4],p[1]*h+p[3]*k+p[5],p[0]*
g+p[2]*q+p[4],p[1]*g+p[3]*q+p[5],C,x);for(var A of a){var K=a.indexOf(A);this.graphics[K].geometry=w.scale(A,this._xScale,this._yScale,[h,k])}this._updateBackgroundGraphic()}else{const {width:J,height:U}=b;let H=L-g;x=q-M;if(1===t||5===t)H=0;else if(3===t||7===t)x=0;if(0!==H||0!==x){A=U+(q<k?x:-1*x);C=h+H/2;x=k+x/2;this._xScale=(J+(g>h?H:-1*H))/J||1;this._yScale=A/U||1;if(1===t||5===t)this._xScale=1;else if(3===t||7===t)this._yScale=1;t=(C-h)/z;A=(x-k)/z;C=w.scale(b.box,this._xScale,this._yScale);
this._backgroundGraphic.geometry=w.cloneMove(C,t,A,f,!0);var {centerX:V,centerY:W}=this._getGraphicInfo(this._backgroundGraphic);t=(V-h)/z;A=-1*(W-k)/z;for(K of a)C=a.indexOf(K),x=w.scale(K,this._xScale,this._yScale,[h,k]),this.graphics[C].geometry=w.cloneMove(x,t,A,f,!0);this._centerGraphic.geometry=new y(V,W,f.spatialReference)}}};d._rotateGraphic=function(a){const {centerX:b,centerY:c,startX:e,startY:f,box:h,rotate:k}=this._startInfo;var g=new y(e,f,this.view.spatialReference);const q=new y(b,
c,this.view.spatialReference);this._angleOfRotation=w.getRotationAngle(g,a.geometry,q);a=this._startInfo.graphicInfos.map(z=>z.geometry);for(const z of a){g=a.indexOf(z);const p=I(z,this._angleOfRotation,q);this.graphics[g].geometry=p}this._backgroundGraphic.geometry=I(h,this._angleOfRotation,q);this._rotateHandleGraphic.geometry=I(k,this._angleOfRotation,q)};d._moveGraphic=function(a,b,c){if(this.graphics.includes(a)){this._backgroundGraphic.geometry=w.cloneMove(this._backgroundGraphic.geometry,
b,c,this.view);for(const e of this.graphics)e!==a&&(e.geometry=w.cloneMove(e.geometry,b,c,this.view))}else a===this._centerGraphic&&(this._backgroundGraphic.geometry=w.cloneMove(this._backgroundGraphic.geometry,b,c,this.view));if(a===this._backgroundGraphic||a===this._centerGraphic)for(const e of this.graphics)e.geometry=w.cloneMove(e.geometry,b,c,this.view)};d._setUpHighlights=function(){if(this.highlightsEnabled&&this.graphics.length){var a;null==(a=this._highlightHelper)?void 0:a.add(this.graphics)}};
d._setupGraphics=function(){const {_graphicAttributes:a,symbols:b}=this;this._centerGraphic=new E(null,b.centerIndicator,a);this.showCenterGraphic&&this.layer.add(this._centerGraphic);this._backgroundGraphic=new E(null,b.fill.default,a);this.layer.add(this._backgroundGraphic);this._rotateLineGraphic=new E(null,b.rotatorLine,a);this._rotateHandleGraphic=new E(null,b.rotator.default,a);this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);
for(let c=0;8>c;c++)this._vertexGraphics.push(new E(null,b.handles.default,a));this.enableScaling&&this.layer.addMany(this._vertexGraphics)};d._updateGraphics=function(){this._updateBackgroundGraphic();this._updateHandleGraphics();this._updateCenterGraphic();this._updateRotateGraphic();this._updateRotateLineGraphic()};d._hideGraphicsBeforeUpdate=function(){this._centerGraphic.visible=!1;this._rotateHandleGraphic.visible=!1;this._rotateLineGraphic.visible=!1;this._vertexGraphics.forEach(a=>a.visible=
!1)};d._updateHandleGraphics=function(){const a=this._getCoordinates(!0);this._vertexGraphics.forEach((b,c)=>{const [e,f]=a[c];this._updateXY(b,e,f)})};d._updateBackgroundGraphic=function(){const a=this._getCoordinates();this._backgroundGraphic.geometry=new ea({rings:a,spatialReference:this.view.spatialReference})};d._updateCenterGraphic=function(){const [a,b,c,e]=this._getBoxBounds(F.create());this._centerGraphic.geometry=new y((c+a)/2,(e+b)/2,this.view.spatialReference)};d._updateRotateGraphic=
function(){if(this._vertexGraphics.length){var {x:a,y:b}=this._vertexGraphics[1].geometry;this._rotateHandleGraphic.geometry=new y(a,b+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference)}};d._updateRotateLineGraphic=function(){if(this._vertexGraphics.length&&this._rotateHandleGraphic&&this._rotateHandleGraphic.geometry){var a=this._vertexGraphics[1].geometry,b=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new fa({paths:[[a.x,a.y],[b.x,b.y]],spatialReference:this.view.spatialReference})}};
d._updateXY=function(a,b,c){a.geometry=new y(b,c,this.view.spatialReference)};d._updateX=function(a,b){a.geometry=new y(b,a.geometry.y,this.view.spatialReference)};d._updateY=function(a,b){a.geometry=new y(a.geometry.x,b,this.view.spatialReference)};d._hasExtentGraphic=function(){return this.graphics.some(a=>a&&X.isSome(a.geometry)&&"extent"===a.geometry.type)};d._getBoxBounds=function(a){const b=this.graphics.map(c=>c.geometry);return this._getBounds(a,b)};d._getCoordinates=function(a){const [b,
c,e,f]=this._getBoxBounds(F.create());if(a){a=(b+e)/2;const h=(f+c)/2;return[[b,f],[a,f],[e,f],[e,h],[e,c],[a,c],[b,c],[b,h]]}return[[b,f],[e,f],[e,c],[b,c]]};N._createClass(l,[{key:"state",get:function(){var a,b;const c=null!=(a=null==(b=this.view)?void 0:b.ready)?a:!1;a=this.graphics.length&&this.layer;return c&&a?"active":c?"ready":"disabled"}}]);return l}(r.EventedAccessor);u.__decorate([v.property({readOnly:!0})],r.prototype,"type",void 0);u.__decorate([v.property()],r.prototype,"callbacks",
void 0);u.__decorate([v.property()],r.prototype,"enableMovement",void 0);u.__decorate([v.property()],r.prototype,"enableRotation",void 0);u.__decorate([v.property()],r.prototype,"enableScaling",void 0);u.__decorate([v.property()],r.prototype,"graphics",void 0);u.__decorate([v.property()],r.prototype,"highlightsEnabled",void 0);u.__decorate([v.property()],r.prototype,"layer",void 0);u.__decorate([v.property()],r.prototype,"preserveAspectRatio",void 0);u.__decorate([v.property()],r.prototype,"showCenterGraphic",
void 0);u.__decorate([v.property({readOnly:!0})],r.prototype,"state",null);u.__decorate([v.property({value:B,cast(m){const {centerIndicator:l=B.centerIndicator,fill:d=B.fill,handles:a=B.handles,rotator:b=B.rotator,rotatorLine:c=B.rotatorLine}=m||{};return{centerIndicator:l,fill:d,handles:a,rotator:b,rotatorLine:c}}})],r.prototype,"symbols",void 0);u.__decorate([v.property({constructOnly:!0})],r.prototype,"view",void 0);return r=u.__decorate([Y.subclass("esri.views.draw.support.Box")],r)});