// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers","./maybe","./ObjectPool"],function(f,g,h,d){d=function(b){function e(){var a=b.apply(this,arguments)||this;a._set=new Set;return a}g._inheritsLoose(e,b);var c=e.prototype;c.destroy=function(){b.prototype.destroy.call(this);this._set=h.nullifyNonnullableForDispose(this._set)};c.acquire=function(...a){a=b.prototype.acquire.call(this,...a);this._set.delete(a);return a};c.release=function(a){a&&!this._set.has(a)&&(b.prototype.release.call(this,a),
this._set.add(a))};c._dispose=function(a){this._set.delete(a);b.prototype._dispose.call(this,a)};return e}(d);f.ReentrantObjectPool=d;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});