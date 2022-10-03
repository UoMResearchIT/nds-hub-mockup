// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../core/queryUtils ../geometry/support/normalizeUtils ./networkService ./utils ./support/ServiceAreaSolveResult".split(" "),function(n,q,r,t,u,c,v,w){function l(){l=q._asyncToGenerator(function*(d,a,e){const m=[];var f=[],b={};const h={},p=v.parseUrl(d);({path:d}=p);a.facilities&&a.facilities.features&&c.collectGeometries(a.facilities.features,f,"facilities.features",b);a.pointBarriers&&a.pointBarriers.features&&c.collectGeometries(a.pointBarriers.features,
f,"pointBarriers.features",b);a.polylineBarriers&&a.polylineBarriers.features&&c.collectGeometries(a.polylineBarriers.features,f,"polylineBarriers.features",b);a.polygonBarriers&&a.polygonBarriers.features&&c.collectGeometries(a.polygonBarriers.features,f,"polygonBarriers.features",b);f=yield u.normalizeCentralMeridian(f);for(const g in b){const k=b[g];m.push(g);h[g]=f.slice(k[0],k[1])}if(c.isInputGeometryZAware(h,m)){b=null;try{b=yield c.fetchServiceDescription(d,a.apiKey,e)}catch{}b&&!b.hasZ&&c.dropZValuesOffInputGeometry(h,
m)}for(const g in h)h[g].forEach((k,x)=>{a.get(g)[x].geometry=k});e={...e,query:{...p.query,...y.toQueryParams(a),f:"json"}};({data:e}=yield r(`${d}/solveServiceArea`,e));return w.fromJSON(e)});return l.apply(this,arguments)}const y=t.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:d=>d.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,
restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});n.solve=function(d,a,e){return l.apply(this,arguments)};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});