// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3f64 ../../../ViewAnimation ../../animation/pointToPoint/Animation ./AnimationController ../../webgl-engine/lib/Camera ../../webgl-engine/lib/Intersector ../../../animation/easing".split(" "),
function(b,k,h,l,y,z,A,n,p,q,r,t,u,v,w){b.PointToPointAnimationController=function(e){function f(a){a=e.call(this,a)||this;a.view=null;a.mode="interaction";a.hasTarget=!1;return a}k._inheritsLoose(f,e);var c=f.prototype;c.initialize=function(){this.animation=new r.Animation(this.view.state.viewingMode);this.viewAnimation="interaction"===this.mode?null:new q};c.begin=function(a,d){this.hasTarget=!0;d=this.animationSettings(d);g.copyFrom(this.view.state.camera);const x=v.newIntersector(this.view.state.viewingMode);
this.intersectionHelper.intersectRay(g.ray,x,m)&&(g.center=m);this.animation.update(g,a,d);this.animation.finished&&this.finish()};c.finish=function(){this.animation.currentTime=this.animation.time;e.prototype.finish.call(this)};c.stepController=function(a,d){this.hasTarget&&this.animation.step(a,d)};c.onControllerEnd=function(a){this.hasTarget&&(this.animation.cameraAt(this.animation.currentTime/this.animation.time,a),this.animation.currentTime=this.animation.time);e.prototype.onControllerEnd.call(this,
a)};c.animationSettings=function(a={}){return{apex:{maximumDistance:this.view.state.constraints.clampAltitude(Infinity)/6,ascensionFactor:void 0,descensionFactor:void 0},...a,easing:"string"===typeof a.easing?w.EasingFunctions[a.easing]:a.easing}};k._createClass(f,[{key:"intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}},{key:"isInteractive",get:function(){return"interaction"===this.mode}},{key:"steppingFinished",get:function(){return this.hasTarget&&this.animation.finished}}]);
return f}(t.AnimationController);h.__decorate([l.property({constructOnly:!0})],b.PointToPointAnimationController.prototype,"view",void 0);h.__decorate([l.property({constructOnly:!0})],b.PointToPointAnimationController.prototype,"mode",void 0);b.PointToPointAnimationController=h.__decorate([n.subclass("esri.views.3d.state.controllers.PointToPointAnimationController")],b.PointToPointAnimationController);const g=new u.Camera,m=p.create();Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});