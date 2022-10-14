// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../EditGeometry"],function(g,k,l){let m=function(){function h(b,a,d=0){this.editGeometry=b;this.vertices=a;this.minNumberOfVertices=d;this.removedVertices=null}var f=h.prototype;f.apply=function(){let b="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach(a=>{a=this._removeVertex(a);k.isSome(a)&&this.removedVertices.push(a)}),b="apply"):this.removedVertices.forEach(a=>{this._removeVertex(a.removedVertex)});this.editGeometry.notifyChanges({operation:b,
removedVertices:this.vertices})};f.undo=function(){this.removedVertices.forEach(b=>{this._undoRemoveVertex(b)});this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices})};f.accumulate=function(){return!1};f._removeVertex=function(b){const a=b.component;if(a.vertices.length<=this.minNumberOfVertices)return null;const d={removedVertex:b,createdEdge:null},e=b.leftEdge,c=b.rightEdge;a.vertices.splice(a.vertices.indexOf(b),1);e&&(a.edges.splice(a.edges.indexOf(e),1),e.leftVertex.rightEdge=
null);c&&(a.edges.splice(a.edges.indexOf(c),1),c.rightVertex.leftEdge=null);0===b.index&&c&&0<this.vertices.length&&a.swapVertices(a.vertices.indexOf(c.rightVertex),0);e&&c&&(d.createdEdge=new l.Edge(a,e.leftVertex,c.rightVertex),a.edges.push(d.createdEdge));c&&a.updateVertexIndex(c.rightVertex,c.rightVertex.index-1);return d};f._undoRemoveVertex=function(b){const a=b.removedVertex,d=b.removedVertex.component,e=a.leftEdge,c=a.rightEdge;b.createdEdge&&d.edges.splice(d.edges.indexOf(b.createdEdge),
1);d.vertices.push(a);e&&(d.edges.push(e),e.leftVertex.rightEdge=e);c&&(d.edges.push(c),c.rightVertex.leftEdge=c);d.updateVertexIndex(a,a.index)};return h}();g.RemoveVertices=m;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});