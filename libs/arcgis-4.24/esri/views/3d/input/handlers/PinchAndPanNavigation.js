// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../state/controllers/global/PinchAndPanController ../../state/controllers/local/PinchAndPanController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(g,k,l,m,e,n){e=function(h){function f(a,b,p){var c=h.call(this,!0)||this;c.view=a;c.pointerAction=b;c.lastEndTimestamp=0;c.lastTimestamp=0;c.registerIncoming("drag",p,q=>c._handleDrag(q));return c}k._inheritsLoose(f,h);var d=f.prototype;d._handleDrag=function(a){if("mouse"!==
a.data.pointerType||n.eventMatchesMousePointerAction(a.data,this.pointerAction)){var b=a.timestamp-this.lastEndTimestamp;b=this.momentum&&this.momentum.active&&40>b;switch(a.data.action){case "start":case "update":if(b)break;this.controller&&this.controller.active?2<a.data.timestamp-this.lastTimestamp&&(this.controller.update(a.data),this.lastTimestamp=a.timestamp):this._startController(a);break;case "end":case "removed":this._endController(a,!0);break;case "added":this._endController(a,!1),this._startController(a)}a.stopPropagation()}};
d._endController=function(a,b){this.controller&&this.controller.active&&(this.lastEndTimestamp=a.timestamp,a=this.controller.end(a.data),b&&a&&(this.momentum=a,this.view.state.switchCameraController(this.momentum)));this.controller=null};d._startController=function(a){this.controller=this._createController();this.view.state.switchCameraController(this.controller);this.controller.begin(a.data);this.lastTimestamp=a.timestamp};d._createController=function(){return this.view.state.isGlobal?new l.PinchAndPanController({view:this.view}):
new m.PinchAndPanController({view:this.view})};return f}(e.InputHandler);g.PinchAndPanNavigation=e;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});