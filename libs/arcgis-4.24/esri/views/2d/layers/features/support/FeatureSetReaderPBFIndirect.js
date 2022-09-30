// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./FeatureSetReader"],function(f,g,h){let n=function(k){function d(b,c){var e=k.call(this,h.FeatureSetReader.createInstance(),b.fullSchema())||this;e._currentIndex=-1;e._reader=b;e._indices=c;return e}g._inheritsLoose(d,k);d.from=function(b,c){return new d(b.copy(),c)};var a=d.prototype;a.getSize=function(){return this._indices.length};a.getCursor=function(){return this.copy()};a.copy=function(){const b=new d(this._reader.copy(),
this._indices);b._currentIndex=this._currentIndex;return b};a.next=function(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length};a._nextIndex=function(){return++this._currentIndex<this._indices.length?(this._reader.setIndex(this._indices[this._currentIndex]),!0):!1};a.setArcadeSpatialReference=function(b){this._reader.setArcadeSpatialReference(b)};a.attachStorage=function(b){this._reader.attachStorage(b)};a.getStorage=function(){return this._reader.getStorage()};
a.getComputedNumeric=function(b){return this._reader.getComputedNumericAtIndex(0)};a.setComputedNumeric=function(b,c){return this._reader.setComputedNumericAtIndex(c,0)};a.getComputedString=function(b){return this._reader.getComputedStringAtIndex(0)};a.setComputedString=function(b,c){return this._reader.setComputedStringAtIndex(0,c)};a.getComputedNumericAtIndex=function(b){return this._reader.getComputedNumericAtIndex(b)};a.setComputedNumericAtIndex=function(b,c){this._reader.setComputedNumericAtIndex(b,
c)};a.getComputedStringAtIndex=function(b){return this._reader.getComputedStringAtIndex(b)};a.setComputedStringAtIndex=function(b,c){return this._reader.setComputedStringAtIndex(b,c)};a.transform=function(b,c,e,m){const l=this.copy();l._reader=this._reader.transform(b,c,e,m);return l};a.readAttribute=function(b,c=!1){return this._reader.readAttribute(b,c)};a.readAttributes=function(){return this._reader.readAttributes()};a.joinAttributes=function(b){return this._reader.joinAttributes(b)};a.readArcadeFeature=
function(){return this._reader.readArcadeFeature()};a.geometry=function(){return this._reader.geometry()};a.field=function(b){return this.readAttribute(b,!0)};a.hasField=function(b){return this._reader.hasField(b)};a.setField=function(b,c){return this._reader.setField(b,c)};a.keys=function(){return this._reader.keys()};a.castToText=function(){return this._reader.castToText()};a.getQuantizationTransform=function(){return this._reader.getQuantizationTransform()};a.getFieldNames=function(){return this._reader.getFieldNames()};
a.getAttributeHash=function(){return this._reader.getAttributeHash()};a.getObjectId=function(){return this._reader.getObjectId()};a.getDisplayId=function(){return this._reader.getDisplayId()};a.setDisplayId=function(b){return this._reader.setDisplayId(b)};a.getGroupId=function(){return this._reader.getGroupId()};a.setGroupId=function(b){return this._reader.setGroupId(b)};a.getXHydrated=function(){return this._reader.getXHydrated()};a.getYHydrated=function(){return this._reader.getYHydrated()};a.getX=
function(){return this._reader.getX()};a.getY=function(){return this._reader.getY()};a.setIndex=function(b){return this._reader.setIndex(b)};a.getIndex=function(){return this._reader.getIndex()};a.readLegacyFeature=function(){return this._reader.readLegacyFeature()};a.readOptimizedFeature=function(){return this._reader.readOptimizedFeature()};a.readLegacyPointGeometry=function(){return this._reader.readLegacyPointGeometry()};a.readLegacyGeometry=function(){return this._reader.readLegacyGeometry()};
a.readLegacyCentroid=function(){return this._reader.readLegacyCentroid()};a.readGeometryArea=function(){return this._reader.readGeometryArea()};a.readUnquantizedGeometry=function(){return this._reader.readUnquantizedGeometry()};a.readHydratedGeometry=function(){return this._reader.readHydratedGeometry()};a.readGeometry=function(){return this._reader.readGeometry()};a.readCentroid=function(){return this._reader.readCentroid()};a._readAttribute=function(b,c){throw Error("Error: Should not be called. Underlying _reader should be used instead");
};a._readAttributes=function(){throw Error("Error: Should not be called. Underlying _reader should be used instead");};g._createClass(d,[{key:"hasNext",get:function(){return this._currentIndex+1<this._indices.length}},{key:"geometryType",get:function(){return this._reader.geometryType}},{key:"hasFeatures",get:function(){return this._reader.hasFeatures}},{key:"exceededTransferLimit",get:function(){return this._reader.exceededTransferLimit}},{key:"hasZ",get:function(){return this._reader.hasZ}},{key:"hasM",
get:function(){return this._reader.hasM}}]);return d}(h.FeatureSetReader);f.FeatureSetReaderIndirect=n;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});