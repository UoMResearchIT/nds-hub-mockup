// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){const e=/^devext.arcgis.com$/,f=/^qaext.arcgis.com$/,g=/^[\w-]*\.mapsdevext.arcgis.com$/,h=/^[\w-]*\.mapsqa.arcgis.com$/,k=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,e,f,/^jsapps.esri.com$/,g,h];d.adjustStaticAGOUrl=function(a,b){return a?(b=b||globalThis.location.hostname)?null!=b.match(e)||null!=b.match(g)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=b.match(f)||null!=b.match(h)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a:a};d.isDevEnvironment=
function(a){a=a||globalThis.location.hostname;return k.some(b=>{var c;return null!=(null==(c=a)?void 0:c.match(b))})};d.isTelemetryDevEnvironment=function(a){a=a||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(k).some(b=>{var c;return null!=(null==(c=a)?void 0:c.match(b))})};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});