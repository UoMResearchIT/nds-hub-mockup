// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey ../techniques/utils ../../../../webgl/enums".split(" "),function(z,q,r,A,B,C,D,b){const E={shader:"materials/icon",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:b.DataType.SHORT},{location:1,name:"a_vertexOffset",count:2,type:b.DataType.SHORT},{location:2,name:"a_texCoords",count:2,type:b.DataType.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",
count:2,type:b.DataType.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:b.DataType.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:b.DataType.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:b.DataType.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};return function(u){function t(){return u.apply(this,
arguments)||this}z._inheritsLoose(t,u);var h=t.prototype;h.dispose=function(){};h.getGeometryType=function(){return r.WGLGeometryType.MARKER};h.supportsSymbology=function(d){return d!==r.WGLSymbologyType.HEATMAP&&d!==r.WGLSymbologyType.PIE_CHART};h.drawGeometry=function(d,l,e,a){const {context:f,painter:m,rendererInfo:n,state:v,passOptions:w,requestRender:x}=d;var c=C.MarkerMaterialKey.load(e.materialKey),p=D.getTechniqueFromMaterialKey(c.data);const k=q.isSome(w)&&"hittest"===w.type,{shader:F,vertexLayout:G,
hittestAttributes:H}=q.unwrapOr(p.programSpec,E);p=b.PrimitiveType.TRIANGLES;var g=A.createProgramDescriptor(c.data,G);k&&(g=this._getTriangleDesc(e.materialKey,g,H),p=b.PrimitiveType.POINTS);const {attributes:y,bufferLayouts:I}=g;a=m.materialManager.getMaterialProgram(d,c,F,y,a);!q.isSome(x)||k||a.isCompiled?(f.useProgram(a),c.textureBinding&&m.textureManager.bindTextures(f,a,c,!0),this._setSharedUniforms(a,d,l),a.setUniformMatrix3fv("u_displayMat3",c.vvRotation?v.displayViewMat3:v.displayMat3),
this._setSizeVVUniforms(c,a,n,l),this._setColorAndOpacityVVUniforms(c,a,n),this._setRotationVVUniforms(c,a,n),c=e.target.getVAO(f,I,y,k),g=e.indexCount,e=e.indexFrom*Uint32Array.BYTES_PER_ELEMENT,k&&(g/=3,e/=3),f.bindVAO(c),this._drawMarkers(d,l,a,p,g,e,k),f.bindVAO(null)):x()};h._drawMarkers=function(d,l,e,a,f,m,n){d.context.drawElements(a,f,b.DataType.UNSIGNED_INT,m)};return t}(B)});