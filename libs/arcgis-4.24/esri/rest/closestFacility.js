// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../core/queryUtils ../geometry/support/normalizeUtils ./networkService ./utils ./support/ClosestFacilitySolveResult".split(" "),function(n,q,r,t,u,c,v,w){function l(){l=q._asyncToGenerator(function*(e,a,f){const m=[];var d=[],b={};const h={},p=v.parseUrl(e);({path:e}=p);a.incidents&&a.incidents.features&&c.collectGeometries(a.incidents.features,d,"incidents.features",b);a.facilities&&a.facilities.features&&c.collectGeometries(a.facilities.features,
d,"facilities.features",b);a.pointBarriers&&a.pointBarriers.features&&c.collectGeometries(a.pointBarriers.features,d,"pointBarriers.features",b);a.polylineBarriers&&a.polylineBarriers.features&&c.collectGeometries(a.polylineBarriers.features,d,"polylineBarriers.features",b);a.polygonBarriers&&a.polygonBarriers.features&&c.collectGeometries(a.polygonBarriers.features,d,"polygonBarriers.features",b);d=yield u.normalizeCentralMeridian(d);for(const g in b){const k=b[g];m.push(g);h[g]=d.slice(k[0],k[1])}if(c.isInputGeometryZAware(h,
m)){b=null;try{b=yield c.fetchServiceDescription(e,a.apiKey,f)}catch{}b&&!b.hasZ&&c.dropZValuesOffInputGeometry(h,m)}for(const g in h)h[g].forEach((k,x)=>{a.get(g)[x].geometry=k});f={...f,query:{...p.query,...y.toQueryParams(a),f:"json"}};({data:f}=yield r(`${e}/solveClosestFacility`,f));return w.fromJSON(f)});return l.apply(this,arguments)}const y=t.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},
impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});n.solve=function(e,a,f){return l.apply(this,arguments)};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});