// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../core/MultiOriginJSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/support/typeUtils ./Layer ./graphics/sources/OGCFeatureSource ./mixins/APIKeyMixin ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/FeatureEffectLayer ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/commonProperties ./support/featureReductionUtils ./support/FeatureType ./support/Field ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ../rest/support/Query ../support/popupUtils ../geometry/Extent ../geometry/SpatialReference".split(" "),
function(m,c,r,A,X,Y,Z,aa,ba,ca,da,ea,fa,t,b,d,ha,ia,ja,B,u,C,D,E,F,G,H,I,J,K,L,M,N,k,O,P,Q,R,p,S,T,v,U,V,W){r=R.defineFieldProperties();b=function(q){function n(a){a=q.call(this,a)||this;a.collectionId=null;a.copyright=null;a.definitionExpression=null;a.description=null;a.displayField=null;a.elevationInfo=null;a.featureReduction=null;a.fields=null;a.fieldsIndex=null;a.fullExtent=null;a.geometryType=null;a.hasZ=void 0;a.labelingInfo=null;a.labelsVisible=!0;a.legendEnabled=!0;a.objectIdField=null;
a.operationalLayerType="OGCFeatureLayer";a.popupEnabled=!0;a.popupTemplate=null;a.screenSizePerspectiveEnabled=!0;a.source=new D.OGCFeatureSource({layer:m._assertThisInitialized(a)});a.spatialReference=null;a.title=null;a.type="ogc-feature";a.typeIdField=null;a.types=null;a.url=null;return a}m._inheritsLoose(n,q);var f=n.prototype;f.destroy=function(){var a;null==(a=this.source)?void 0:a.destroy()};f.load=function(a){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},
a).then(()=>this._fetchService(a)));return this.when()};f.on=function(a,e){return q.prototype.on.call(this,a,e)};f.createPopupTemplate=function(a){return U.createPopupTemplate(this,a)};f.createQuery=function(){return new v};f.getField=function(a){return this.fieldsIndex.get(a)};f.getFieldDomain=function(a,e){var g;let h,l=!1;e=null==e?void 0:null==(g=e.feature)?void 0:g.attributes;const w=this.typeIdField&&(null==e?void 0:e[this.typeIdField]);null!=w&&this.types&&(l=this.types.some(x=>{if(x.id==w){var y,
z;h=null==(y=x.domains)?void 0:y[a];"inherited"===(null==(z=h)?void 0:z.type)&&(h=this._getLayerDomain(a));return!0}return!1}));l||h||(h=this._getLayerDomain(a));return h};f.queryFeatures=function(a,e){return this.load().then(()=>this.source.queryFeatures(v.from(a)||this.createQuery(),e)).then(g=>{var h;null==g?void 0:null==(h=g.features)?void 0:h.forEach(l=>{l.layer=l.sourceLayer=this});return g})};f.serviceSupportsSpatialReference=function(a){var e,g;return null!=(e=null==(g=this.source)?void 0:
g.serviceSupportsSpatialReference(a))?e:!1};f._fetchService=function(){var a=m._asyncToGenerator(function*(e){yield this.source.load(e);this.read(this.source.featureDefinition,{origin:"service"});p.fixRendererFields(this.renderer,this.fieldsIndex);p.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)});return function(e){return a.apply(this,arguments)}}();f._getLayerDomain=function(a){if(!this.fields)return null;for(const e of this.fields)if(e.name===a&&e.domain)return e.domain;return null};m._createClass(n,
[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"renderer",set:function(a){p.fixRendererFields(a,this.fieldsIndex);this._set("renderer",a)}}]);return n}(E.APIKeyMixin(G.CustomParametersMixin(H.FeatureEffectLayer(F.BlendLayer(J.OrderedLayer(N.TemporalLayer(M.ScaleRangeLayer(I.OperationalLayer(K.PortalLayer(L.RefreshableLayer(b.MultiOriginJSONMixin(C))))))))))));c.__decorate([d.property({readOnly:!0,
json:{origins:{service:{read:!0}}}})],b.prototype,"capabilities",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"collectionId",void 0);c.__decorate([d.property({type:String})],b.prototype,"copyright",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"defaultPopupTemplate",null);c.__decorate([d.property({type:String})],b.prototype,"definitionExpression",void 0);c.__decorate([d.property({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],
b.prototype,"description",void 0);c.__decorate([d.property({type:String})],b.prototype,"displayField",void 0);c.__decorate([d.property(k.elevationInfo)],b.prototype,"elevationInfo",void 0);c.__decorate([d.property(O.featureReductionProperty)],b.prototype,"featureReduction",void 0);c.__decorate([d.property({type:[Q],json:{origins:{service:{name:"layerDefinition.fields"}}}})],b.prototype,"fields",void 0);c.__decorate([d.property(r.fieldsIndex)],b.prototype,"fieldsIndex",void 0);c.__decorate([d.property({readOnly:!0,
type:V,json:{origins:{service:{name:"layerDefinition.extent"}}}})],b.prototype,"fullExtent",void 0);c.__decorate([d.property({type:u.featureGeometryTypeKebabDictionary.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:u.featureGeometryTypeKebabDictionary.read}}}}})],b.prototype,"geometryType",void 0);c.__decorate([d.property({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],b.prototype,"hasZ",void 0);c.__decorate([d.property({type:Boolean,readOnly:!0})],
b.prototype,"isTable",null);c.__decorate([d.property({type:[S],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:T.reader},write:!0}}}})],b.prototype,"labelingInfo",void 0);c.__decorate([d.property(k.labelsVisible)],b.prototype,"labelsVisible",void 0);c.__decorate([d.property(k.legendEnabled)],b.prototype,"legendEnabled",void 0);c.__decorate([d.property({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],b.prototype,"objectIdField",
void 0);c.__decorate([d.property({type:["OGCFeatureLayer"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([d.property(k.popupEnabled)],b.prototype,"popupEnabled",void 0);c.__decorate([d.property({type:A,json:{name:"popupInfo",write:!0}})],b.prototype,"popupTemplate",void 0);c.__decorate([d.property({types:t.rendererTypes,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:t.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:!0}},
name:"layerDefinition.drawingInfo.renderer",write:!0}})],b.prototype,"renderer",null);c.__decorate([d.property(k.screenSizePerspectiveEnabled)],b.prototype,"screenSizePerspectiveEnabled",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"source",void 0);c.__decorate([d.property({readOnly:!0,type:W,json:{origins:{service:{read:!0}}}})],b.prototype,"spatialReference",void 0);c.__decorate([d.property({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],
b.prototype,"title",void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0);c.__decorate([d.property({type:String,readOnly:!0})],b.prototype,"typeIdField",void 0);c.__decorate([d.property({type:[P]})],b.prototype,"types",void 0);c.__decorate([d.property(k.url)],b.prototype,"url",void 0);return b=c.__decorate([B.subclass("esri.layers.OGCFeatureLayer")],b)});