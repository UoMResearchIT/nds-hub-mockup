// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../geometry/Extent ../../geometry/Point ../../layers/support/RasterInfo ../../layers/support/RasterStorageInfo ../utils".split(" "),function(l,p,m,q,r,t,u,g){function h(){h=p._asyncToGenerator(function*(c,a,b){var d,e;c=g.parseUrl(c);var k=g.encode({...c.query,f:"json"});b=g.asValidOptions(k,b);c=`${c.path}/${a}/info`;a=m(`${c}`,b);b=m(`${c}/keyProperties`,b);b=yield Promise.allSettled([a,b]);a="fulfilled"===b[0].status?b[0].value.data:
null;b="fulfilled"===b[1].status?b[1].value.data:null;c=null;null!=(d=a.statistics)&&d.length&&(c=a.statistics.map(f=>({min:f[0],max:f[1],avg:f[2],stddev:f[3]})));d=q.fromJSON(a.extent);k=Math.ceil(d.width/a.pixelSizeX-.1);const v=Math.ceil(d.height/a.pixelSizeY-.1),n=d.spatialReference,w=new r({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:n}),x=null!=(e=a.histograms)&&e.length?a.histograms:null;e=new u({origin:a.origin,blockWidth:a.blockWidth,blockHeight:a.blockHeight,firstPyramidLevel:a.firstPyramidLevel,
maximumPyramidLevel:a.maxPyramidLevel});return new t({width:k,height:v,bandCount:a.bandCount,extent:d,spatialReference:n,pixelSize:w,pixelType:a.pixelType.toLowerCase(),statistics:c,histograms:x,keyProperties:b,storageInfo:e})});return h.apply(this,arguments)}l.getCatalogItemRasterInfo=function(c,a,b){return h.apply(this,arguments)};Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});