// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../Graphic ../symbols ../core/Collection ../core/Error ../core/lang ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/Warning ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../geometry/projection ../geometry/support/normalizeUtils ../geometry/support/spatialReferenceUtils ./FeatureLayer ./GraphicsLayer ./Layer ./graphics/objectIdUtils ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./support/Field ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../symbols/TextSymbol ../geometry/Extent ../geometry/SpatialReference".split(" "),
function(w,d,e,N,ha,E,O,F,r,P,Q,I,k,ia,t,J,R,z,S,T,U,V,W,X,Y,Z,aa,ba,K,ca,da,L,ea,G,x){function A(u){return u.layers.some(q=>null!=q.layerDefinition.visibilityField)}const M=new K({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),fa=new K({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let v=function(u){function q(f){f=u.call(this,f)||this;f.visibilityMode="inherited";return f}w._inheritsLoose(q,u);q.prototype.initialize=function(){for(const f of this.graphics)f.sourceLayer=
this.layer;this.graphics.on("after-add",f=>{f.item.sourceLayer=this.layer});this.graphics.on("after-remove",f=>{f.item.sourceLayer=null})};w._createClass(q,[{key:"sublayers",get:function(){return this.graphics}}]);return q}(V);d.__decorate([k.property({readOnly:!0})],v.prototype,"sublayers",null);d.__decorate([k.property()],v.prototype,"layer",void 0);d.__decorate([k.property()],v.prototype,"layerId",void 0);d.__decorate([k.property({readOnly:!0})],v.prototype,"visibilityMode",void 0);v=d.__decorate([J.subclass("esri.layers.MapNotesLayer.MapNotesSublayer")],
v);const H=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new ca).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new da).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new L).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",
id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new L).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new ea).toJSON()}];e=function(u){function q(b){var a=u.call(this,b)||this;a.capabilities={operations:{supportsMapNotesEditing:!0}};a.featureCollections=null;a.featureCollectionJSON=null;a.featureCollectionType="notes";a.legendEnabled=!1;a.minScale=0;a.maxScale=0;a.spatialReference=x.WGS84;a.sublayers=new E(H.map(c=>
new v({id:c.id,layerId:c.layerId,title:c.title,layer:w._assertThisInitialized(a)})));a.title="Map Notes";a.type="map-notes";a.visibilityMode="inherited";return a}w._inheritsLoose(q,u);var f=q.prototype;f.readCapabilities=function(b,a,c){return{operations:{supportsMapNotesEditing:!A(a)&&"portal-item"!==(null==c?void 0:c.origin)}}};f.readFeatureCollections=function(b,a,c){if(!A(a))return null;b=a.layers.map(g=>{const h=new U;h.read(g,c);return h});return new E({items:b})};f.readLegacyfeatureCollectionJSON=
function(b,a){return A(a)?F.clone(a.featureCollection):null};f.readFullExtent=function(b,a){if(!a.layers.length||a.layers.every(c=>!c.layerDefinition.extent))return new G({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:x.WGS84});b=x.fromJSON(a.layers[0].layerDefinition.spatialReference);return a.layers.reduce((c,g)=>(g=g.layerDefinition.extent)?G.fromJSON(g).union(c):c,new G({spatialReference:b}))};f.readMinScale=function(b,a){for(const c of a.layers)if(null!=c.layerDefinition.minScale)return c.layerDefinition.minScale;
return 0};f.readMaxScale=function(b,a){for(const c of a.layers)if(null!=c.layerDefinition.maxScale)return c.layerDefinition.maxScale;return 0};f.readSpatialReference=function(b,a){return a.layers.length?x.fromJSON(a.layers[0].layerDefinition.spatialReference):x.WGS84};f.readSublayers=function(b,a,c){if(A(a))return null;b=[];c=a.layers.reduce((l,m)=>{var n;return Math.max(l,null!=(n=m.layerDefinition.id)?n:-1)},-1)+1;for(const {layerDefinition:l,featureSet:m}of a.layers){var g,h;const n=null!=(g=l.geometryType)?
g:m.geometryType;a=null!=(h=l.id)?h:c++;const p=H.find(y=>{var B,C,D;return n===y.geometryTypeJSON&&(null==(B=l.drawingInfo)?void 0:null==(C=B.renderer)?void 0:null==(D=C.symbol)?void 0:D.type)===y.identifyingSymbol.type});p&&(a=new v({id:p.id,title:l.name,layerId:a,layer:this,graphics:m.features.map(({geometry:y,symbol:B,attributes:C,popupInfo:D})=>N.fromJSON({attributes:C,geometry:y,symbol:B,popupTemplate:D}))}),b.push(a))}return new E(b)};f.writeSublayers=function(b,a,c,g){const {minScale:h,maxScale:l}=
this;if(!r.isNone(b))if(c=b.some(p=>0<p.graphics.length),this.capabilities.operations.supportsMapNotesEditing){var m=[];c=this.spatialReference.toJSON();a:for(var n of b)for(const p of n.graphics)if(r.isSome(p.geometry)){c=p.geometry.spatialReference.toJSON();break a}for(const p of H)n=b.find(y=>p.id===y.id),this._writeMapNoteSublayer(m,n,p,h,l,c,g);Q.setDeepValue("featureCollection.layers",m,a)}else c&&(null==g?void 0:null==(m=g.messages)?void 0:m.push(new O("map-notes-layer:editing-not-supported",
"New map notes cannot be added to this layer")))};f.load=function(b){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},b));return Promise.resolve(this)};f.read=function(b,a){"featureCollection"in b&&(b=F.clone(b),Object.assign(b,b.featureCollection));u.prototype.read.call(this,b,a)};f.beforeSave=function(){var b=w._asyncToGenerator(function*(){if(!r.isNone(this.sublayers)){var a=null,c=[];for(const h of this.sublayers)for(const l of h.graphics)if(r.isSome(l.geometry)){const m=
l.geometry;a?T.equals(m.spatialReference,a)||(z.canProjectWithoutEngine(m.spatialReference,a)||z.isLoaded()||(yield z.load()),l.geometry=z.project(m,a)):a=m.spatialReference;c.push(l)}var g=yield S.normalizeCentralMeridian(c.map(h=>h.geometry));c.forEach((h,l)=>h.geometry=g[l])}});return function(){return b.apply(this,arguments)}}();f._findSublayer=function(b){var a,c;return r.isNone(this.sublayers)?null:null!=(a=null==(c=this.sublayers)?void 0:c.find(g=>g.id===b))?a:null};f._writeMapNoteSublayer=
function(b,a,c,g,h,l,m){const n=[];if(!r.isNone(a)){for(const p of a.graphics)this._writeMapNote(n,p,c.geometryType,m);this._normalizeObjectIds(n,M);b.push({layerDefinition:{name:a.title,drawingInfo:{renderer:{type:"simple",symbol:F.clone(c.identifyingSymbol)}},id:a.layerId,geometryType:c.geometryTypeJSON,minScale:g,maxScale:h,objectIdField:"OBJECTID",fields:[M.toJSON(),fa.toJSON()],spatialReference:l},featureSet:{features:n,geometryType:c.geometryTypeJSON}})}};f._writeMapNote=function(b,a,c,g){if(!r.isNone(a)){var {geometry:h,
symbol:l,popupTemplate:m}=a;if(!r.isNone(h))if(h.type!==c){var n;null==g?void 0:null==(n=g.messages)?void 0:n.push(new I("map-notes-layer:invalid-geometry-type",`Geometry "${h.type}" cannot be saved in "${c}" layer`,{graphic:a}))}else if(r.isNone(l)){var p;null==g?void 0:null==(p=g.messages)?void 0:p.push(new I("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:a}))}else a={attributes:{...a.attributes},geometry:h.toJSON(),symbol:l.toJSON()},r.isSome(m)&&(a.popupInfo=m.toJSON()),
b.push(a)}};f._normalizeObjectIds=function(b,a){a=a.name;let c=X.findLastObjectIdFromFeatures(a,b)+1;const g=new Set;for(const h of b){h.attributes||(h.attributes={});({attributes:b}=h);if(null==b[a]||g.has(b[a]))b[a]=c++;g.add(b[a])}};w._createClass(q,[{key:"multipointLayer",get:function(){return this._findSublayer("multipointLayer")}},{key:"pointLayer",get:function(){return this._findSublayer("pointLayer")}},{key:"polygonLayer",get:function(){return this._findSublayer("polygonLayer")}},{key:"polylineLayer",
get:function(){return this._findSublayer("polylineLayer")}},{key:"textLayer",get:function(){return this._findSublayer("textLayer")}}]);return q}(Y.BlendLayer(ba.ScaleRangeLayer(Z.OperationalLayer(aa.PortalLayer(P.MultiOriginJSONMixin(W))))));d.__decorate([k.property({readOnly:!0})],e.prototype,"capabilities",void 0);d.__decorate([t.reader(["portal-item","web-map"],"capabilities",["layers"])],e.prototype,"readCapabilities",null);d.__decorate([k.property({readOnly:!0})],e.prototype,"featureCollections",
void 0);d.__decorate([t.reader(["web-map","portal-item"],"featureCollections",["layers"])],e.prototype,"readFeatureCollections",null);d.__decorate([k.property({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],e.prototype,"featureCollectionJSON",void 0);d.__decorate([t.reader(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],e.prototype,"readLegacyfeatureCollectionJSON",null);d.__decorate([k.property({readOnly:!0,json:{read:!1,write:{enabled:!0,
ignoreOrigin:!0}}})],e.prototype,"featureCollectionType",void 0);d.__decorate([k.property({json:{write:!1}})],e.prototype,"fullExtent",void 0);d.__decorate([t.reader(["web-map","portal-item"],"fullExtent",["layers"])],e.prototype,"readFullExtent",null);d.__decorate([k.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],e.prototype,"legendEnabled",void 0);d.__decorate([k.property({type:["show",
"hide"]})],e.prototype,"listMode",void 0);d.__decorate([k.property({type:Number,nonNullable:!0,json:{write:!1}})],e.prototype,"minScale",void 0);d.__decorate([t.reader(["web-map","portal-item"],"minScale",["layers"])],e.prototype,"readMinScale",null);d.__decorate([k.property({type:Number,nonNullable:!0,json:{write:!1}})],e.prototype,"maxScale",void 0);d.__decorate([t.reader(["web-map","portal-item"],"maxScale",["layers"])],e.prototype,"readMaxScale",null);d.__decorate([k.property({readOnly:!0})],
e.prototype,"multipointLayer",null);d.__decorate([k.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],e.prototype,"operationalLayerType",void 0);d.__decorate([k.property({readOnly:!0})],e.prototype,"pointLayer",null);d.__decorate([k.property({readOnly:!0})],e.prototype,"polygonLayer",null);d.__decorate([k.property({readOnly:!0})],e.prototype,"polylineLayer",null);d.__decorate([k.property({type:x})],e.prototype,"spatialReference",void 0);d.__decorate([t.reader(["web-map","portal-item"],
"spatialReference",["layers"])],e.prototype,"readSpatialReference",null);d.__decorate([k.property({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],e.prototype,"sublayers",void 0);d.__decorate([t.reader("web-map","sublayers",["layers"])],e.prototype,"readSublayers",null);d.__decorate([R.writer("web-map","sublayers")],e.prototype,"writeSublayers",null);d.__decorate([k.property({readOnly:!0})],e.prototype,"textLayer",null);d.__decorate([k.property()],e.prototype,"title",void 0);d.__decorate([k.property({readOnly:!0,
json:{read:!1}})],e.prototype,"type",void 0);return e=d.__decorate([J.subclass("esri.layers.MapNotesLayer")],e)});