// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../Graphic ../../../request ../../Attachment ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../support/stats ../../../core/MD5 ../../../kernel ../../../geometry/support/jsonUtils ../../../layers/FeatureLayer ../../../layers/graphics/featureConversionUtils ../../../core/Error ../../../core/has ../../../core/Logger ../../../layers/support/source/DataLayerSource ../../../rest/query/executeQueryJSON ../../../core/arrayUtils ../../../core/urlUtils ../../../core/unitUtils ../../../geometry/support/spatialReferenceUtils ../../../rest/query/operations/query ../../../rest/support/FeatureSet ../../../rest/support/Query ../../../rest/query/support/AttachmentInfo ../../../rest/support/AttachmentQuery ../../../rest/query/executeForCount ../../../geometry ../../../rest/query/executeForIds ../../../rest/support/RelationshipQuery ../../../geometry/support/normalizeUtils ../../../rest/support/TopFeaturesQuery ../../../rest/query/operations/pbfOptimizedFeatureSet ../../../rest/support/StatisticDefinition ../../Dictionary".split(" "),
function(n,A,B,H,I,y,w,t,J,C,D,K,L,M,T,U,V,W,E,X,Y,Z,aa,N,O,v,ba,ca,P,da,Q,ea,fa,ha,R,F,S){return function(G){function x(c){var a=G.call(this,c)||this;a.declaredClass="esri.arcade.featureset.sources.FeatureLayerDynamic";a._removeGeometry=!1;a._overrideFields=null;a.formulaCredential=null;a._pageJustIds=!1;a._requestStandardised=!1;a._useDefinitionExpression=!0;c.spatialReference&&(a.spatialReference=c.spatialReference);a._transparent=!0;a._maxProcessing=1E3;a._layer=c.layer;a._wset=null;void 0!==
c.outFields&&(a._overrideFields=c.outFields);void 0!==c.includeGeometry&&(a._removeGeometry=!1===c.includeGeometry);return a}n._inheritsLoose(x,G);var k=x.prototype;k._maxQueryRate=function(){return w.defaultMaxRecords};k.end=function(){return this._layer};k.optimisePagingFeatureQueries=function(c){this._pageJustIds=c};k.convertQueryToLruCacheKey=function(c){c=w.stableStringify(c.toJSON());return C.createMD5Hash(c,C.outputTypes.String)};k.loadImpl=function(){var c=n._asyncToGenerator(function*(){if(!0===
this._layer.loaded)return this._initialiseFeatureSet(),this;yield this._layer.load();this._initialiseFeatureSet();return this});return function(){return c.apply(this,arguments)}}();k._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this._layer.geometryType;this.fields=this._layer.fields.slice(0);if(this._layer.outFields&&(1!==this._layer.outFields.length||"*"!==this._layer.outFields[0])){var c=[];for(var a of this.fields)if("oid"===
a.type)c.push(a);else for(const e of this._layer.outFields)if(e.toLowerCase()===a.name.toLowerCase()){c.push(a);break}this.fields=c}if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{c=[];a=[];for(var b of this.fields)if("oid"===b.type)c.push(b),a.push(b.name);else for(const e of this._overrideFields)if(e.toLowerCase()===b.name.toLowerCase()){c.push(b);a.push(b.name);break}this.fields=c;this._overrideFields=a}this._layer.source&&
this._layer.source.sourceJSON&&(b=this._layer.source.sourceJSON.currentVersion,!0===this._layer.source.sourceJSON.useStandardizedQueries?(this._databaseType=w.FeatureServiceDatabaseType.StandardisedNoInterval,void 0!==b&&null!==b&&10.61<=b&&(this._databaseType=w.FeatureServiceDatabaseType.Standardised)):void 0!==b&&null!==b&&(10.5<=b&&(this._databaseType=w.FeatureServiceDatabaseType.StandardisedNoInterval,this._requestStandardised=!0),10.61<=b&&(this._databaseType=w.FeatureServiceDatabaseType.Standardised)));
this.objectIdField=this._layer.objectIdField;for(const e of this.fields)"global-id"===e.type&&(this.globalIdField=e.name);this.hasM=this._layer.supportsM;this.hasZ=this._layer.supportsZ;this.typeIdField=this._layer.typeIdField;this.types=this._layer.types};k._isInFeatureSet=function(){return w.IdState.InFeatureSet};k._refineSetBlock=function(){var c=n._asyncToGenerator(function*(a){return a});return function(a){return c.apply(this,arguments)}}();k._candidateIdTransform=function(c){return c};k._getSet=
function(){var c=n._asyncToGenerator(function*(a){return null===this._wset?(yield this._ensureLoaded(),this._wset=a=yield this._getFilteredSet("",null,null,null,a)):this._wset});return function(a){return c.apply(this,arguments)}}();k._runDatabaseProbe=function(){var c=n._asyncToGenerator(function*(a){yield this._ensureLoaded();const b=new v;b.where=a.replace("OBJECTID",this._layer.objectIdField);try{return yield this._layer.queryObjectIds(b),!0}catch(e){return!1}});return function(a){return c.apply(this,
arguments)}}();k._canUsePagination=function(){return this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsPagination?!0:!1};k._cacheableFeatureSetSourceKey=function(){return this._layer.url};k.pbfSupportedForQuery=function(c){return!c.outStatistics&&this._layer&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsFormatPBF&&!0===this._layer.capabilities.query.supportsQuantizationEditMode};k.queryPBF=
function(){var c=n._asyncToGenerator(function*(a){a.quantizationParameters={mode:"edit"};a=yield N.executeQueryPBF(this._layer.parsedUrl,a,new R.OptimizedFeatureSetParserContext({}));return O.fromJSON(M.convertToFeatureSet(a.data)).unquantize()});return function(a){return c.apply(this,arguments)}}();k.nativeCapabilities=function(){return{title:this._layer.title,source:this,canQueryRelated:!0,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:this._requestStandardised}};
k.executeQuery=function(c,a){const b="execute"===a?E.executeQueryJSON:"executeForCount"===a?P.executeForCount:Q.executeForIds,e="execute"===a&&this.pbfSupportedForQuery(c);let d=null;if(this.recentlyUsedQueries){const f=this.convertQueryToLruCacheKey(c);d=this.recentlyUsedQueries.getFromCache(f);null===d&&(d=!0!==e?b(this._layer.parsedUrl.path,c):this.queryPBF(c),this.recentlyUsedQueries.addToCache(f,d),d=d.catch(g=>{this.recentlyUsedQueries.removeFromCache(f);throw g;}))}this.featureSetQueryInterceptor&&
this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:c,method:a});null===d&&(d=!0!==e?b(this._layer.parsedUrl.path,c):this.queryPBF(c));return d};k._getFilteredSet=function(){var c=n._asyncToGenerator(function*(a,b,e,d,f){const g=yield this.databaseType();if(this.isTable()&&b&&null!==a&&""!==a)return new y([],[],!0,null);if(this._canUsePagination())return this._getFilteredSetUsingPaging(a,b,e,d,f);let l="",h=!1;null!==d&&this._layer.capabilities&&this._layer.capabilities.query&&
!0===this._layer.capabilities.query.supportsOrderBy&&(l=d.constructClause(),h=!0);d=new v;d.where=null===e?null===b?"1\x3d1":"":t.toWhereClause(e,g);this._requestStandardised&&(d.sqlFormat="standard");d.spatialRelationship=this._makeRelationshipEnum(a);d.outSpatialReference=this.spatialReference;d.orderByFields=""!==l?l.split(","):null;d.geometry=null===b?null:b;d.relationParameter=this._makeRelationshipParam(a);a=yield this.executeQuery(d,"executeForIds");null===a&&(a=[]);this._checkCancelled(f);
return new y([],a,h,null)});return function(a,b,e,d,f){return c.apply(this,arguments)}}();k._expandPagedSet=function(c,a,b,e,d){return this._expandPagedSetFeatureSet(c,a,b,e,d)};k._getFilteredSetUsingPaging=function(){var c=n._asyncToGenerator(function*(a,b,e,d,f){let g="",l=!1;null!==d&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(g=d.constructClause(),l=!0);d=yield this.databaseType();e=null===e?null===b?"1\x3d1":"":t.toWhereClause(e,
d);this._layer.definitionExpression&&this._useDefinitionExpression&&(e=""!==e?"(("+this._layer.definitionExpression+") AND ("+e+"))":this._layer.definitionExpression);d=this._maxQueryRate();var h=this._layer.capabilities.query.maxRecordCount;void 0!==h&&h<d&&(d=h);h=null;if(!0===this._pageJustIds)h=new y([],["GETPAGES"],l,{spatialRel:this._makeRelationshipEnum(a),relationParam:this._makeRelationshipParam(a),outFields:this._layer.objectIdField,resultRecordCount:d,resultOffset:0,geometry:null===b?null:
b,where:e,orderByFields:g,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}});else{h=!0;!0===this._removeGeometry&&(h=!1);const q=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._layer.outFields?this._layer.outFields:["*"]);h=new y([],["GETPAGES"],l,{spatialRel:this._makeRelationshipEnum(a),relationParam:this._makeRelationshipParam(a),outFields:q.join(","),resultRecordCount:d,resultOffset:0,geometry:null===b?null:
b,where:e,orderByFields:g,returnGeometry:h,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}yield this._expandPagedSet(h,d,0,1,f);return h});return function(a,b,e,d,f){return c.apply(this,arguments)}}();k._clonePageDefinition=function(c){return null===c?null:!0!==c.groupbypage?{groupbypage:!1,spatialRel:c.spatialRel,relationParam:c.relationParam,outFields:c.outFields,resultRecordCount:c.resultRecordCount,resultOffset:c.resultOffset,geometry:c.geometry,where:c.where,
orderByFields:c.orderByFields,returnGeometry:c.returnGeometry,returnIdsOnly:c.returnIdsOnly,internal:c.internal}:{groupbypage:!0,spatialRel:c.spatialRel,relationParam:c.relationParam,outFields:c.outFields,resultRecordCount:c.resultRecordCount,useOIDpagination:c.useOIDpagination,generatedOid:c.generatedOid,groupByFieldsForStatistics:c.groupByFieldsForStatistics,resultOffset:c.resultOffset,outStatistics:c.outStatistics,geometry:c.geometry,where:c.where,orderByFields:c.orderByFields,returnGeometry:c.returnGeometry,
returnIdsOnly:c.returnIdsOnly,internal:c.internal}};k._getPhysicalPage=function(){var c=n._asyncToGenerator(function*(a,b,e){b=a.pagesDefinition.internal.lastRetrieved;const d=a.pagesDefinition.internal.lastPage;var f=new v;this._requestStandardised&&(f.sqlFormat="standard");f.spatialRelationship=a.pagesDefinition.spatialRel;f.relationParameter=a.pagesDefinition.relationParam;f.outFields=a.pagesDefinition.outFields.split(",");f.num=a.pagesDefinition.resultRecordCount;f.start=a.pagesDefinition.internal.lastPage;
f.geometry=a.pagesDefinition.geometry;f.where=a.pagesDefinition.where;f.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;f.returnGeometry=a.pagesDefinition.returnGeometry;f.outSpatialReference=this.spatialReference;f=yield this.executeQuery(f,"execute");this._checkCancelled(e);if(a.pagesDefinition.internal.lastPage!==d)return"done";for(e=0;e<f.features.length;e++)a.pagesDefinition.internal.set[b+e]=f.features[e].attributes[this._layer.objectIdField];
if(!1===this._pageJustIds)for(e=0;e<f.features.length;e++)this._featureCache[f.features[e].attributes[this._layer.objectIdField]]=f.features[e];if(void 0===f.exceededTransferLimit&&f.features.length!==a.pagesDefinition.resultRecordCount||!1===f.exceededTransferLimit)a.pagesDefinition.internal.fullyResolved=!0;a.pagesDefinition.internal.lastRetrieved=b+f.features.length;a.pagesDefinition.internal.lastPage+=a.pagesDefinition.resultRecordCount;return"done"});return function(a,b,e){return c.apply(this,
arguments)}}();k._fieldsIncludingObjectId=function(c){if(null===c)return[this.objectIdField];c=c.slice(0);if(c.includes("*"))return c;let a=!1;for(const b of c)if(b.toUpperCase()===this.objectIdField.toUpperCase()){a=!0;break}!1===a&&c.push(this.objectIdField);return c};k._getFeatures=function(){var c=n._asyncToGenerator(function*(a,b,e,d){var f=[];-1!==b&&void 0===this._featureCache[b]&&f.push(b);if(!0===this._checkIfNeedToExpandKnownPage(a,this._maxProcessingRate()))return yield this._expandPagedSet(a,
this._maxProcessingRate(),0,0,d),this._getFeatures(a,b,e,d);let g=0;for(let h=a._lastFetchedIndex;h<a._known.length;h++){a._lastFetchedIndex+=1;g++;if(void 0===this._featureCache[a._known[h]]){let q=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){var l=this._layer._mode;void 0!==l._featureMap[a._known[h]]&&(l=l._featureMap[a._known[h]],null!==l&&(q=!0,this._featureCache[a._known[h]]=l))}if(!1===q&&(a._known[h]!==b&&f.push(a._known[h]),f.length>=this._maxProcessingRate()-1))break}if(g>=
e&&0===f.length)break}if(0===f.length)return"success";a=new v;this._requestStandardised&&(a.sqlFormat="standard");a.objectIds=f;a.outFields=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._layer.outFields?this._layer.outFields:["*"]);a.returnGeometry=!0;!0===this._removeGeometry&&(a.returnGeometry=!1);a.outSpatialReference=this.spatialReference;f=yield this.executeQuery(a,"execute");this._checkCancelled(d);if(void 0!==f.error)throw Error(f.error);for(d=0;d<f.features.length;d++)this._featureCache[f.features[d].attributes[this._layer.objectIdField]]=
f.features[d];return"success"});return function(a,b,e,d){return c.apply(this,arguments)}}();k._getDistinctPages=function(){var c=n._asyncToGenerator(function*(a,b,e,d,f,g,l,h,q){yield this._ensureLoaded();var p=yield this.databaseType();let u=e.parseTree.column;for(var m=0;m<this._layer.fields.length;m++)if(this._layer.fields[m].name.toLowerCase()===u.toLowerCase()){u=this._layer.fields[m].name;break}m=new v;this._requestStandardised&&(m.sqlFormat="standard");p=null===g?null===f?"1\x3d1":"":t.toWhereClause(g,
p);this._layer.definitionExpression&&this._useDefinitionExpression&&(p=""!==p?"(("+this._layer.definitionExpression+") AND ("+p+"))":this._layer.definitionExpression);m.where=p;m.spatialRelationship=this._makeRelationshipEnum(d);m.relationParameter=this._makeRelationshipParam(d);m.geometry=null===f?null:f;m.returnDistinctValues=!0;m.returnGeometry=!1;m.outFields=[u];p=yield this.executeQuery(m,"execute");this._checkCancelled(q);if(!p.hasOwnProperty("features"))throw Error("Unnexected Result querying statistics from layer");
m=!1;for(var r=0;r<this._layer.fields.length;r++)if(this._layer.fields[r].name===u){"date"===this._layer.fields[r].type&&(m=!0);break}for(r=0;r<p.features.length;r++){if(m){const z=p.features[r].attributes[u];null!==z?h.push(new Date(z)):h.push(z)}else h.push(p.features[r].attributes[u]);if(h.length>=l)break}return 0===p.features.length?h:p.features.length===this._layer.capabilities.query.maxRecordCount&&h.length<l?{calculated:!0,result:yield this._getDistinctPages(a+p.features.length,b,e,d,f,g,l,
h,q)}:h});return function(a,b,e,d,f,g,l,h,q){return c.apply(this,arguments)}}();k._distinctStat=function(){var c=n._asyncToGenerator(function*(a,b,e,d,f,g,l){return{calculated:!0,result:yield this._getDistinctPages(0,a,b,e,d,f,g,[],l)}});return function(a,b,e,d,f,g,l){return c.apply(this,arguments)}}();k.isTable=function(){return this._layer.isTable||null===this._layer.geometryType||"table"===this._layer.type||""===this._layer.geometryType};k._countstat=function(){var c=n._asyncToGenerator(function*(a,
b,e,d){const f=yield this.databaseType();a=new v;this._requestStandardised&&(a.sqlFormat="standard");if(this.isTable()&&e&&null!==b&&""!==b)return{calculated:!0,result:0};d=null===d?null===e?"1\x3d1":"":t.toWhereClause(d,f);this._layer.definitionExpression&&this._useDefinitionExpression&&(d=""!==d?"(("+this._layer.definitionExpression+") AND ("+d+"))":this._layer.definitionExpression);a.where=d;a.where=d;a.spatialRelationship=this._makeRelationshipEnum(b);a.relationParameter=this._makeRelationshipParam(b);
a.geometry=null===e?null:e;a.returnGeometry=!1;return{calculated:!0,result:yield this.executeQuery(a,"executeForCount")}});return function(a,b,e,d){return c.apply(this,arguments)}}();k._stats=function(){var c=n._asyncToGenerator(function*(a,b,e,d,f,g,l){yield this._ensureLoaded();const h=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsSqlExpression,q=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsStatistics,
p=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsDistinct;if("count"===a)return p?this._countstat(a,e,d,f):{calculated:!1};if(!1===q||!1===t.isSingleField(b)&&!1===h||!1===b.isStandardized)return""!==e||null!==f?{calculated:!1}:this._manualStat(a,b,g,l);if("distinct"===a)return!1===p?""!==e||null!==f?{calculated:!1}:this._manualStat(a,b,g,l):this._distinctStat(a,b,e,d,f,g,l);l=yield this.databaseType();if(this.isTable()&&d&&null!==e&&""!==e)return{calculated:!0,
result:null};g=new v;this._requestStandardised&&(g.sqlFormat="standard");f=null===f?null===d?"1\x3d1":"":t.toWhereClause(f,l);this._layer.definitionExpression&&this._useDefinitionExpression&&(f=""!==f?"(("+this._layer.definitionExpression+") AND ("+f+"))":this._layer.definitionExpression);g.where=f;g.spatialRelationship=this._makeRelationshipEnum(e);g.relationParameter=this._makeRelationshipParam(e);g.geometry=null===d?null:d;e=new F;e.statisticType=J.decodeStatType(a);e.onStatisticField=t.toWhereClause(b,
l);e.outStatisticFieldName="ARCADE_STAT_RESULT";g.returnGeometry=!1;a="ARCADE_STAT_RESULT";g.outStatistics=[e];b=yield this.executeQuery(g,"execute");if(!b.hasOwnProperty("features")||0===b.features.length)throw Error("Unnexected Result querying statistics from layer");e=!1;for(d=0;d<b.fields.length;d++)if("ARCADE_STAT_RESULT"===b.fields[d].name.toUpperCase()){a=b.fields[d].name;"date"===b.fields[d].type&&(e=!0);break}return e?(e=b.features[0].attributes[a],null!==e&&(e=new Date(b.features[0].attributes[a])),
{calculated:!0,result:e}):{calculated:!0,result:b.features[0].attributes[a]}});return function(a,b,e,d,f,g,l){return c.apply(this,arguments)}}();k._stat=function(c,a,b,e,d,f,g){return this._stats(c,a,b,e,d,f,g)};k._canDoAggregates=function(){var c=n._asyncToGenerator(function*(a,b){yield this._ensureLoaded();a=!1;const e=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsSqlExpression;void 0!==this._layer.capabilities&&null!==this._layer.capabilities.query&&
!0===this._layer.capabilities.query.supportsStatistics&&!0===this._layer.capabilities.query.supportsOrderBy&&(a=!0);if(a)for(let d=0;d<b.length-1;d++)null!==b[d].workingexpr&&(!1===b[d].workingexpr.isStandardized?a=!1:!1===t.isSingleField(b[d].workingexpr)&&!1===e&&(a=!1));return!1===a?!1:!0});return function(a,b){return c.apply(this,arguments)}}();k._makeRelationshipEnum=function(c){if(c.includes("esriSpatialRelRelation"))return"relation";switch(c){case "esriSpatialRelRelation":return"relation";
case "esriSpatialRelIntersects":return"intersects";case "esriSpatialRelContains":return"contains";case "esriSpatialRelOverlaps":return"overlaps";case "esriSpatialRelWithin":return"within";case "esriSpatialRelTouches":return"touches";case "esriSpatialRelCrosses":return"crosses";case "esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return c};k._makeRelationshipParam=function(c){return c.includes("esriSpatialRelRelation")?c.split(":")[1]:""};k._getAggregatePagesDataSourceDefinition=function(){var c=
n._asyncToGenerator(function*(a,b,e,d,f,g,l){yield this._ensureLoaded();const h=yield this.databaseType();let q="",p=!1,u=!1;null!==g&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(q=g.constructClause(),u=!0);this._layer.capabilities&&this._layer.capabilities.query&&!1===this._layer.capabilities.query.supportsPagination&&(u=!1,p=!0,q=this._layer.objectIdField);g=[];for(var m=0;m<b.length;m++){const r=new F;r.onStatisticField=null!==
b[m].workingexpr?t.toWhereClause(b[m].workingexpr,h):"";r.outStatisticFieldName=b[m].field;r.statisticType=b[m].toStatisticsName();g.push(r)}""===q&&(q=a.join(","));b=this._maxQueryRate();m=this._layer.capabilities.query.maxRecordCount;void 0!==m&&m<b&&(b=m);f=null===f?null===d?"1\x3d1":"":t.toWhereClause(f,h);this._layer.definitionExpression&&this._useDefinitionExpression&&(f=""!==f?"(("+this._layer.definitionExpression+") AND ("+f+"))":this._layer.definitionExpression);return new y([],["GETPAGES"],
u,{groupbypage:!0,spatialRel:this._makeRelationshipEnum(e),relationParam:this._makeRelationshipParam(e),outFields:["*"],useOIDpagination:p,generatedOid:l,resultRecordCount:b,resultOffset:0,groupByFieldsForStatistics:a,outStatistics:g,geometry:null===d?null:d,where:f,orderByFields:q,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})});return function(a,b,e,d,f,g,l){return c.apply(this,arguments)}}();k._getAgregagtePhysicalPage=function(){var c=
n._asyncToGenerator(function*(a,b,e){var d=a.pagesDefinition.where;!0===a.pagesDefinition.useOIDpagination&&(d=""!==d?"("+d+") AND ("+a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString()+")":a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString());b=a.pagesDefinition.internal.lastRetrieved;var f=a.pagesDefinition.internal.lastPage;const g=new v;this._requestStandardised&&(g.sqlFormat="standard");g.where=d;g.spatialRelationship=a.pagesDefinition.spatialRel;
g.relationParameter=a.pagesDefinition.relationParam;g.outFields=a.pagesDefinition.outFields;g.outStatistics=a.pagesDefinition.outStatistics;g.geometry=a.pagesDefinition.geometry;g.groupByFieldsForStatistics=a.pagesDefinition.groupByFieldsForStatistics;g.num=a.pagesDefinition.resultRecordCount;g.start=a.pagesDefinition.internal.lastPage;g.returnGeometry=a.pagesDefinition.returnGeometry;g.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;if(this.isTable()&&
g.geometry&&g.spatialRelationship)return[];d=yield this.executeQuery(g,"execute");this._checkCancelled(e);if(!d.hasOwnProperty("features"))throw Error("Unnexected Result querying aggregates from layer");e=[];if(a.pagesDefinition.internal.lastPage!==f)return[];for(f=0;f<d.features.length;f++)a.pagesDefinition.internal.set[b+f]=d.features[f].attributes[a.pagesDefinition.generatedOid];for(f=0;f<d.features.length;f++)e.push(new A({attributes:d.features[f].attributes,geometry:null}));if(!0===a.pagesDefinition.useOIDpagination)0===
d.features.length?a.pagesDefinition.internal.fullyResolved=!0:a.pagesDefinition.internal.lastMaxId=d.features[d.features.length-1].attributes[a.pagesDefinition.generatedOid];else if(void 0===d.exceededTransferLimit&&d.features.length!==a.pagesDefinition.resultRecordCount||!1===d.exceededTransferLimit)a.pagesDefinition.internal.fullyResolved=!0;a.pagesDefinition.internal.lastRetrieved=b+d.features.length;a.pagesDefinition.internal.lastPage+=a.pagesDefinition.resultRecordCount;return e});return function(a,
b,e){return c.apply(this,arguments)}}();x.create=function(c,a,b,e,d){c=new L({url:c,outFields:null===a?["*"]:a});return new x({layer:c,spatialReference:b,lrucache:e,interceptor:d})};k.relationshipMetaData=function(){return this._layer&&this._layer.source&&this._layer.source.sourceJSON&&this._layer.source.sourceJSON.relationships?this._layer.source.sourceJSON.relationships:[]};k.serviceUrl=function(){return w.extractServiceUrl(this._layer.parsedUrl.path)};k.queryAttachments=function(){var c=n._asyncToGenerator(function*(a,
b,e,d,f){if(this._layer.capabilities.data.supportsAttachment&&this._layer.capabilities.operations.supportsQueryAttachments){const g={objectIds:[a],returnMetadata:f};if(b&&0<b||e&&0<e)g.size=[b&&0<b?b:0,e&&0<e?e:b+1];d&&0<d.length&&(g.attachmentTypes=d);this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:g,method:"attachments"});b=yield this._layer.queryAttachments(g);const l=[];b&&b[a]&&b[a].forEach(h=>{const q=this._layer.parsedUrl.path+
"/"+a.toString()+"/attachments/"+h.id.toString();let p=null;f&&h.exifInfo&&(p=S.convertJsonToArcade(h.exifInfo,!0));l.push(new H(h.id,h.name,h.contentType,h.size,q,p))});return l}return[]});return function(a,b,e,d,f){return c.apply(this,arguments)}}();k.queryRelatedFeatures=function(){var c=n._asyncToGenerator(function*(a){var b={f:"json",relationshipId:a.relationshipId.toString(),definitionExpression:a.where,outFields:a.outFields.join(","),returnGeometry:a.returnGeometry.toString()};void 0!==a.resultOffset&&
null!==a.resultOffset&&(b.resultOffset=a.resultOffset.toString());void 0!==a.resultRecordCount&&null!==a.resultRecordCount&&(b.resultRecordCount=a.resultRecordCount.toString());a.orderByFields&&(b.orderByFields=a.orderByFields.join(","));0<a.objectIds.length&&(b.objectIds=a.objectIds.join(","));a.outSpatialReference&&(b.outSR=JSON.stringify(a.outSpatialReference.toJSON()));this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preRequestCallback({layer:this._layer,queryPayload:b,method:"relatedrecords",
url:this._layer.parsedUrl.path+"/queryRelatedRecords"});b=yield B(this._layer.parsedUrl.path+"/queryRelatedRecords",{responseType:"json",query:b});if(b.data){a={};if((b=b.data)&&b.relatedRecordGroups){const e=b.spatialReference;for(const d of b.relatedRecordGroups){const f=d.objectId,g=[];for(const l of d.relatedRecords){l.geometry&&(l.geometry.spatialReference=e);const h=new A({geometry:l.geometry?K.fromJSON(l.geometry):null,attributes:l.attributes});g.push(h)}a[f]={features:g,exceededTransferLimit:!0===
b.exceededTransferLimit}}}return a}throw Error("Invalid Request");});return function(a){return c.apply(this,arguments)}}();k.getFeatureByObjectId=function(){var c=n._asyncToGenerator(function*(a,b){const e=new v;e.outFields=b;e.returnGeometry=!1;e.outSpatialReference=this.spatialReference;e.where=this.objectIdField+"\x3d"+a.toString();this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:e,method:"execute"});a=yield E.executeQueryJSON(this._layer.parsedUrl.path,
e);return 1===a.features.length?a.features[0]:null});return function(a,b){return c.apply(this,arguments)}}();k.getIdentityUser=function(){var c=n._asyncToGenerator(function*(){var a;yield this.load();const b=null==(a=D.id)?void 0:a.findCredential(this._layer.url);return b?b.userId:null});return function(){return c.apply(this,arguments)}}();k.getOwningSystemUrl=function(){var c=n._asyncToGenerator(function*(){var a;yield this.load();var b=null==(a=D.id)?void 0:a.findServerInfo(this._layer.url);if(b)return b.owningSystemUrl;
a=this._layer.url;b=a.toLowerCase().indexOf("/rest/services");if(a=-1<b?a.substring(0,b):a)try{const e=yield B(a+"/rest/info",{query:{f:"json"}});a="";e.data&&e.data.owningSystemUrl&&(a=e.data.owningSystemUrl);return a}catch(e){}return""});return function(){return c.apply(this,arguments)}}();k.getDataSourceFeatureSet=function(){const c=new x({layer:this._layer,spatialReference:this.spatialReference,outFields:this._overrideFields,includeGeometry:!this._removeGeometry,lrucache:this.recentlyUsedQueries,
interceptor:this.featureSetQueryInterceptor});c._useDefinitionExpression=!1;return c};n._createClass(x,[{key:"gdbVersion",get:function(){return this._layer&&this._layer.capabilities&&this._layer.capabilities.data&&this._layer.capabilities.data.isVersioned?this._layer.gdbVersion?this._layer.gdbVersion:"SDE.DEFAULT":""}}]);return x}(I)});