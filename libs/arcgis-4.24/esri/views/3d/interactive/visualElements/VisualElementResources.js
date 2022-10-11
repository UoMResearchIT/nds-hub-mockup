// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/reactiveUtils ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/ContentObjectType ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Texture ../../webgl-engine/lib/WebGLLayer".split(" "),function(l,p,e,m,q,r,t,u,v){let x=function(){function k(a){this.resourceFactory=a;this._resources=null;this._visible=!0;this._attached=!1}var d=k.prototype;d.destroy=function(){this._destroyResources()};
d.recreate=function(){this.attached&&this._createResources()};d.recreateGeometry=function(){if(this.resourceFactory.recreateGeometry){var a=this.resourceFactory.view._stage;if(!e.isNone(this._resources)&&a){var b=this._resources.object;this._resources.external.forEach(c=>{c.type===r.ContentObjectType.Geometry&&a.remove(c)});b.removeAllGeometries();b=this.resourceFactory.recreateGeometry(this._resources.external,b,this._resources.layer);a.addMany(b)}}else this.recreate()};d._createOrDestroyResources=
function(){this._attached?this._resources||this._createResources():this._destroyResources()};d._createResources=function(){this._destroyResources();const a=this.resourceFactory,b=a.view,c=b._stage;if(c){var g=new v.WebGLLayer({isPickable:!1,updatePolicy:q.UpdatePolicy.SYNC});c.add(g);var h=new t.Object3D({castShadow:!1}),n=a.createResources(h,g);n.forEach(f=>{c.add(f);f instanceof u.Texture&&c.loadImmediate(f)});c.add(h);g.add(h);var w=a.cameraChanged?m.watch(()=>b.state.camera,f=>a.cameraChanged(f),
m.initial):null;this._resources={layer:g,object:h,external:n,cameraHandle:w};this._syncVisible()}};d._destroyResources=function(){if(!e.isNone(this._resources)){var a=this.resourceFactory.view._stage;null==a?void 0:a.remove(this._resources.object);null==a?void 0:a.remove(this._resources.layer);this._resources.external.forEach(b=>{null==a?void 0:a.remove(b);"dispose"in b&&b.dispose()});this._resources.object.dispose();this._resources.cameraHandle&&this._resources.cameraHandle.remove();this._resources=
null}};d._syncVisible=function(){e.isNone(this._resources)||this._resources.object.setVisible(this._visible)};p._createClass(k,[{key:"object",get:function(){return e.isSome(this._resources)?this._resources.object:null}},{key:"resources",get:function(){return e.isSome(this._resources)?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this._syncVisible())}},{key:"attached",get:function(){return this._attached},set:function(a){a!==
this._attached&&(this._attached=a,this._createOrDestroyResources())}}]);return k}();l.VisualElementResources=x;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});