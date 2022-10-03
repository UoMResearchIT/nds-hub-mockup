// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/shaderModules/interfaces"],function(b,c){b.VertexDiscardMode=void 0;(function(a){a[a.None=0]="None";a[a.Transparent=1]="Transparent";a[a.Opaque=2]="Opaque";a[a.COUNT=3]="COUNT"})(b.VertexDiscardMode||(b.VertexDiscardMode={}));b.VertexDiscardByOpacity=function(a,d){a=a.vertex;a.code.add(c.glsl`#define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)`);switch(d.vertexDiscardMode){case b.VertexDiscardMode.None:a.code.add(c.glsl`#define vertexDiscardByOpacity(_opacity_) {}`);
break;case b.VertexDiscardMode.Opaque:a.code.add(c.glsl`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`);break;case b.VertexDiscardMode.Transparent:a.code.add(c.glsl`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`)}};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});