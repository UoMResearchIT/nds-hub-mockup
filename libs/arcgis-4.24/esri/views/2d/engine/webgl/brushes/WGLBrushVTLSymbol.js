// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec2f32 ../../vectorTiles/decluttering/config ../../vectorTiles/style/StyleDefinition ../definitions ../enums ../GeometryUtils ../number ./WGLBrush ../../../../webgl/enums".split(" "),function(M,R,D,N,O,m,E,H,P,S,I,p){const T=1/65536;I=function(Q){function J(){var e=Q.apply(this,arguments)||this;e._iconProgramOptions={id:!1,sdf:!1};e._sdfProgramOptions={id:!1};e._spritesTextureSize=N.create();
return e}R._inheritsLoose(J,Q);var x=J.prototype;x.dispose=function(){};x.drawMany=function(e,a){const {drawPhase:g,styleLayerUID:k}=e,f=e.styleLayer;let b;g===H.WGLDrawPhase.HITTEST&&(b=S.u32to4Xu8(k+1));this._drawIcons(e,f,a,b);this._drawText(e,f,a,b)};x._drawIcons=function(e,a,g,k){const {context:f,displayLevel:b,drawPhase:r,painter:q,spriteMosaic:K,state:v,styleLayerUID:y,requestRender:t}=e,w=a.iconMaterial;var h=q.vectorTilesMaterialManager,z=!1;for(var n of g)if(n.layerData.has(y)){var d=n.layerData.get(y);
if(0<d.iconPerPageElementsMap.size){z=!0;break}}if(z){z=a.getPaintValue("icon-translate",b);n=a.getPaintValue("icon-translate-anchor",b);var c=a.getLayoutValue("icon-rotation-alignment",b);c===m.RotationAlignment.AUTO&&(c=a.getLayoutValue("symbol-placement",b)===m.SymbolPlacement.POINT?m.RotationAlignment.VIEWPORT:m.RotationAlignment.MAP);var A=c===m.RotationAlignment.MAP;A=a.getLayoutValue("icon-keep-upright",b)&&A;var F=d.isIconSDF;d=r===H.WGLDrawPhase.HITTEST;var C=this._iconProgramOptions;C.id=
d;C.sdf=F;h=h.getMaterialProgram(f,w,C);if(!D.isSome(t)||d||h.isCompiled){f.useProgram(h);h.setUniformMatrix3fv("u_displayViewMat3",c===m.RotationAlignment.MAP?v.displayViewMat3:v.displayMat3);h.setUniformMatrix3fv("u_displayMat3",n===m.TranslateAnchor.VIEWPORT?v.displayMat3:v.displayViewMat3);h.setUniform2fv("u_iconTranslation",z);h.setUniform1f("u_depth",a.z);h.setUniform1f("u_mapRotation",P.degToByte(v.rotation));h.setUniform1f("u_keepUpright",A?1:0);h.setUniform1f("u_level",10*b);h.setUniform1i("u_texture",
E.VTL_TEXTURE_BINDING_UNIT_SPRITES);h.setUniform1f("u_fadeDuration",O.FADE_DURATION/1E3);d&&h.setUniform4fv("u_id",k);k=-1;for(const u of g)if(u.layerData.has(y)&&(u.key.level!==k&&(k=u.key.level,w.setDataUniforms(h,b,a,k,K)),d=u.layerData.get(y),0!==d.iconPerPageElementsMap.size&&(d.prepareForRendering(f),d.updateOpacityInfo(),g=d.iconVertexArrayObject,!D.isNone(g)))){f.bindVAO(g);h.setUniformMatrix3fv("u_dvsMat3",u.transforms.dvs);h.setUniform1f("u_time",(performance.now()-d.lastOpacityUpdate)/
1E3);for(const [L,G]of d.iconPerPageElementsMap)this._renderIconRange(e,h,G,L,u)}}else t()}};x._renderIconRange=function(e,a,g,k,f){const {context:b,spriteMosaic:r}=e;this._spritesTextureSize[0]=r.getWidth(k)/4;this._spritesTextureSize[1]=r.getHeight(k)/4;a.setUniform2fv("u_mosaicSize",this._spritesTextureSize);r.bind(b,p.TextureSamplingMode.LINEAR,k,E.VTL_TEXTURE_BINDING_UNIT_SPRITES);b.setStencilTestEnabled(!0);b.setStencilFunction(p.CompareFunction.GREATER,255,255);b.setStencilWriteMask(0);b.drawElements(p.PrimitiveType.TRIANGLES,
g[1],p.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*g[0]);f.triangleCount+=g[1]/3};x._drawText=function(e,a,g,k){const {context:f,displayLevel:b,drawPhase:r,glyphMosaic:q,painter:K,pixelRatio:v,spriteMosaic:y,state:t,styleLayerUID:w,requestRender:h}=e;e=a.textMaterial;const z=K.vectorTilesMaterialManager;var n=!1;for(var d of g)if(d.layerData.has(w)){var c=d.layerData.get(w);if(0<c.glyphPerPageElementsMap.size){n=!0;break}}if(n&&(c=a.getPaintProperty("text-opacity"),!c||c.isDataDriven||0!==
c.getValue(b))){c=a.getPaintProperty("text-color");var A=!c||c.isDataDriven||0<c.getValue(b)[3];c=a.getPaintProperty("text-halo-width");d=a.getPaintProperty("text-halo-color");var F=(!c||c.isDataDriven||0<c.getValue(b))&&(!d||d.isDataDriven||0<d.getValue(b)[3]);if(A||F){c=a.getLayoutValue("text-rotation-alignment",b);c===m.RotationAlignment.AUTO&&(c=a.getLayoutValue("symbol-placement",b)===m.SymbolPlacement.POINT?m.RotationAlignment.VIEWPORT:m.RotationAlignment.MAP);d=c===m.RotationAlignment.MAP;
d=a.getLayoutValue("text-keep-upright",b)&&d;n=r===H.WGLDrawPhase.HITTEST;var C=.8*3/v;this._glyphTextureSize||(this._glyphTextureSize=N.fromValues(q.width/4,q.height/4));var u=a.getPaintValue("text-translate",b),L=a.getPaintValue("text-translate-anchor",b),G=this._sdfProgramOptions;G.id=n;var l=z.getMaterialProgram(f,e,G);if(!D.isSome(h)||n||l.isCompiled){f.useProgram(l);l.setUniformMatrix3fv("u_displayViewMat3",c===m.RotationAlignment.MAP?t.displayViewMat3:t.displayMat3);l.setUniformMatrix3fv("u_displayMat3",
L===m.TranslateAnchor.VIEWPORT?t.displayMat3:t.displayViewMat3);l.setUniform2fv("u_textTranslation",u);l.setUniform1f("u_depth",a.z+T);l.setUniform2fv("u_mosaicSize",this._glyphTextureSize);l.setUniform1f("u_mapRotation",P.degToByte(t.rotation));l.setUniform1f("u_keepUpright",d?1:0);l.setUniform1f("u_level",10*b);l.setUniform1i("u_texture",E.VTL_TEXTURE_BINDING_UNIT_GLYPHS);l.setUniform1f("u_antialiasingWidth",C);l.setUniform1f("u_fadeDuration",O.FADE_DURATION/1E3);n&&l.setUniform4fv("u_id",k);k=
-1;for(const B of g)B.layerData.has(w)&&(B.key.level!==k&&(k=B.key.level,e.setDataUniforms(l,b,a,k,y)),c=B.layerData.get(w),0!==c.glyphPerPageElementsMap.size&&(c.prepareForRendering(f),c.updateOpacityInfo(),g=c.textVertexArrayObject,D.isNone(g)||(f.bindVAO(g),l.setUniformMatrix3fv("u_dvsMat3",B.transforms.dvs),f.setStencilTestEnabled(!0),f.setStencilFunction(p.CompareFunction.GREATER,255,255),f.setStencilWriteMask(0),g=(performance.now()-c.lastOpacityUpdate)/1E3,l.setUniform1f("u_time",g),c.glyphPerPageElementsMap.forEach((U,
V)=>{this._renderGlyphRange(f,U,V,q,l,F,A,B)}))))}else h()}}};x._renderGlyphRange=function(e,a,g,k,f,b,r,q){k.bind(e,p.TextureSamplingMode.LINEAR,g,E.VTL_TEXTURE_BINDING_UNIT_GLYPHS);b&&(f.setUniform1f("u_halo",1),e.drawElements(p.PrimitiveType.TRIANGLES,a[1],p.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]),q.triangleCount+=a[1]/3);r&&(f.setUniform1f("u_halo",0),e.drawElements(p.PrimitiveType.TRIANGLES,a[1],p.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]),q.triangleCount+=a[1]/
3)};return J}(I);M.WGLBrushVTLSymbol=I;Object.defineProperties(M,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});