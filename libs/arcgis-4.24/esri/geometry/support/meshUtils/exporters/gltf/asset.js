// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/arrayUtils"],function(c,e){let f=function(){function d(){this.copyright="";this.defaultScene=0;this.generator="";this._scenes=[]}var b=d.prototype;b.addScene=function(a){if(this._scenes.includes(a))throw Error("Scene already added");this._scenes.push(a)};b.removeScene=function(a){e.remove(this._scenes,a)};b.forEachScene=function(a){this._scenes.forEach(a)};return d}();c.Asset=f;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});