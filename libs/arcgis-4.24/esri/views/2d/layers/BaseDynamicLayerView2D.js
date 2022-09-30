// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/BitmapContainer ./LayerView2D ./support/ExportStrategy ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),function(g,e,b,l,h,w,x,y,m,n,p,q,r,t){const u=b.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");
b=function(k){function f(){return k.apply(this,arguments)||this}g._inheritsLoose(f,k);var a=f.prototype;a.update=function(c){this.strategy.update(c).catch(d=>{l.isAbortError(d)||u.error(d)});this.notifyChange("updating")};a.attach=function(){this._bitmapContainer=new n.BitmapContainer;this.container.addChild(this._bitmapContainer);this.strategy=new q({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})};a.detach=function(){this.strategy.destroy();
this.strategy=null;this.container.removeChild(this._bitmapContainer);this._bitmapContainer.removeAllChildren()};a.moveStart=function(){};a.viewChange=function(){};a.moveEnd=function(){this.requestUpdate()};a.fetchBitmapData=function(c,d,v){return this.layer.fetchImage(c,d,v)};a.doRefresh=function(){var c=g._asyncToGenerator(function*(){this.requestUpdate()});return function(){return c.apply(this,arguments)}}();a.isUpdating=function(){return this.strategy.updating||this.updateRequested};return f}(t(p.LayerView2DMixin(r)));
e.__decorate([h.property()],b.prototype,"strategy",void 0);e.__decorate([h.property()],b.prototype,"updating",void 0);return b=e.__decorate([m.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],b)});