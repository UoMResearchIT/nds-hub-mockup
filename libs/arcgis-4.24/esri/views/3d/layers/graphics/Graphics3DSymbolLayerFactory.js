// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Logger ./Graphics3DExtrudeSymbolLayer ./Graphics3DIconSymbolLayer ./Graphics3DLineSymbolLayer ./Graphics3DMeshFillSymbolLayer ./Graphics3DObjectSymbolLayer ./Graphics3DPathSymbolLayer ./Graphics3DPolygonFillSymbolLayer ./Graphics3DTextSymbolLayer ./Graphics3DWaterSymbolLayer".split(" "),function(c,g,h,k,l,m,n,p,q,r,t){const u=g.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory"),d={icon:k.Graphics3DIconSymbolLayer,object:n.Graphics3DObjectSymbolLayer,
line:l.Graphics3DLineSymbolLayer,path:p.Graphics3DPathSymbolLayer,fill:q.Graphics3DPolygonFillSymbolLayer,extrude:h.Graphics3DExtrudeSymbolLayer,text:r.Graphics3DTextSymbolLayer,water:t.Graphics3DWaterSymbolLayer},e={"mesh-3d":{fill:m.Graphics3DMeshFillSymbolLayer}};c.make=function(b,a,v,w){const f=e[b.type]&&e[b.type][a.type]||d[a.type];return f?new f(b,a,v,w):(u.error("GraphicsLayerFactory#make",`unknown symbol type ${a.type}`),null)};c.setSymbolClass=function(b,a){d[b]=a};Object.defineProperties(c,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});