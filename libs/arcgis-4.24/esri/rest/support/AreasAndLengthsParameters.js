// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Polygon".split(" "),function(h,d,b,k,e,t,u,v,l,m){const n=new b.JSONMap({preserveShape:"preserve-shape",planar:"planar",geodesic:"geodesic"}),p=new b.JSONMap({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",
esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),q=new b.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});b=function(g){function f(a){a=g.call(this,a)||this;a.areaUnit=null;a.calculationType=null;a.lengthUnit=null;a.polygons=null;return a}h._inheritsLoose(f,g);f.prototype.toJSON=function(){const a={};if(this.polygons&&0<this.polygons.length){var c=
this.polygons.map(r=>r.toJSON());a.polygons=JSON.stringify(c);c=this.polygons[0].spatialReference;a.sr=c.wkid?c.wkid:JSON.stringify(c.toJSON())}this.lengthUnit&&(a.lengthUnit=q.toJSON(this.lengthUnit));this.areaUnit&&(c=p.toJSON(this.areaUnit),a.areaUnit="string"===typeof c?JSON.stringify({areaUnit:c}):c);this.calculationType&&(a.calculationType=n.toJSON(this.calculationType));return a};return f}(k.JSONSupport);d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"areaUnit",void 0);
d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"calculationType",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"lengthUnit",void 0);d.__decorate([e.property({type:[m],json:{write:!0}})],b.prototype,"polygons",void 0);return b=d.__decorate([l.subclass("esri.rest.support.AreasAndLengthsParameters")],b)});