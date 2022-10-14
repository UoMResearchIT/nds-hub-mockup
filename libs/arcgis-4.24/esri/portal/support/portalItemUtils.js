// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry/projection","../../geometry/SpatialReference","../../geometry/support/webMercatorUtils"],function(d,g,h,l,m){function n(a){return e.apply(this,arguments)}function e(){e=g._asyncToGenerator(function*(a){const b=a.spatialReference;if(b.isWGS84)return a.clone();if(b.isWebMercator)return m.webMercatorToGeographic(a);const c=l.WGS84;yield h.initializeProjection(b,c);return h.project(a,c)});return e.apply(this,arguments)}function k(a,
b){var c;return!(null==(c=a.typeKeywords)||!c.includes(b))}function f(){f=g._asyncToGenerator(function*(a){a=a.clone().normalize();let b;if(1<a.length)for(const c of a)b?c.width>b.width&&(b=c):b=c;else b=a[0];return n(b)});return f.apply(this,arguments)}d.TypeKeyword={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"};d.addTypeKeyword=function(a,b){if(!k(a,b)){const c=a.typeKeywords;c?c.push(b):
a.typeKeywords=[b]}};d.getWGS84ExtentForItem=function(a){return f.apply(this,arguments)};d.hasTypeKeyword=k;d.removeTypeKeyword=function(a,b){if(a=a.typeKeywords)b=a.indexOf(b),-1<b&&a.splice(b,1)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});