// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe"],function(e,f){let h=function(){function c(a,d,g){this.editGeometry=a;this.vertex=d;this.pos=g}var b=c.prototype;b.apply=function(){const a=f.isNone(this.originalPosition);a&&(this.originalPosition=this.vertex.pos);this._apply(a?"apply":"redo")};b.undo=function(){this.vertex.pos=f.unwrap(this.originalPosition);this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})};b.accumulate=function(a){return a instanceof c&&a.vertex===this.vertex?
(this.pos=a.pos,this._apply("apply"),!0):!1};b._apply=function(a){this.vertex.pos=this.pos;this.editGeometry.components.forEach(d=>d.unnormalizeVertexPositions());this.editGeometry.notifyChanges({operation:a,updatedVertices:[this.vertex]})};return c}();e.SetVertexPosition=h;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});