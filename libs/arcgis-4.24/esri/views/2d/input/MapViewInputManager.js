// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./handlers/DoubleClickZoom ./handlers/DoubleTapDragZoom ./handlers/DragPan ./handlers/DragRotate ./handlers/GamepadNavigation ./handlers/KeyPan ./handlers/KeyRotate ./handlers/KeyZoom ./handlers/MouseWheelZoom ./handlers/PinchAction ../../input/BrowserEventSource ../../input/InputManager ../../input/handlers/PreventContextMenu ../../input/recognizers/DoubleTapDrag ../../input/recognizers/Drag ../../input/recognizers/ImmediateDoubleClick ../../input/recognizers/PointerClickHoldAndDrag ../../input/recognizers/SingleAndDoubleClick".split(" "),
function(m,d,c,r,e,k,N,O,P,t,n,u,v,w,x,y,z,A,B,C,D,l,E,F,G,H,I,J){var K={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},L={zoomIn:["\x3d","+"],zoomOut:["-","_"]},M={clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"};c=function(p){function f(){var a=p.apply(this,arguments)||this;a._handles=new r;return a}m._inheritsLoose(f,p);var g=f.prototype;g.initialize=function(){const a=()=>{var b;return null==
(b=this.view)?void 0:b.ready};this._handles.add([e.when(()=>!a(),()=>this._disconnect()),e.when(a,()=>this._connect())])};g.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this._disconnect()};g._disconnect=function(){this._inputManager&&(this.view.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)};g._connect=function(){const a=new D.BrowserEventSource(this.view.surface,this.view.input);var b=[new H.ImmediateDoubleClick,
new I.PointerClickHoldAndDrag,new J.SingleAndDoubleClick,new G.Drag(this.view.navigation),new F.DoubleTapDrag];b=new l.InputManager({eventSource:a,recognizers:b});b.installHandlers("prevent-context-menu",[new E.PreventContextMenu],l.ViewEventPriorities.INTERNAL);b.installHandlers("navigation",[new C.PinchRotateAndZoom(this.view),new x.GamepadNavigation(this.view),new B.MouseWheelZoom(this.view),new n.DoubleClickZoom(this.view),new n.DoubleClickZoom(this.view,["Ctrl"]),new v.DragPan(this.view,"primary"),
new y.KeyPan(this.view,K),new A.KeyZoom(this.view,L),new z.KeyRotate(this.view,M),new w.DragRotate(this.view,"secondary"),new u.DoubleTapDragZoom(this.view,"touch")],l.ViewEventPriorities.INTERNAL);this.view.viewEvents.connect(b);this._source=a;this._inputManager=b;e.watch(()=>{var h,q;return null==(h=this.view)?void 0:null==(q=h.navigation)?void 0:q.browserTouchPanEnabled},h=>{this._source&&(this._source.browserTouchPanningEnabled=!h)},e.initial)};m._createClass(f,[{key:"latestPointerType",get:function(){var a;
return null==(a=this._inputManager)?void 0:a.latestPointerType}},{key:"latestPointerLocation",get:function(){var a;return null==(a=this._inputManager)?void 0:a.latestPointerLocation}},{key:"test",get:function(){return{inputManager:this._inputManager}}}]);return f}(c);d.__decorate([k.property()],c.prototype,"view",void 0);d.__decorate([k.property()],c.prototype,"latestPointerType",null);d.__decorate([k.property()],c.prototype,"latestPointerLocation",null);return c=d.__decorate([t.subclass("esri.views.2d.input.MapViewInputManager")],
c)});