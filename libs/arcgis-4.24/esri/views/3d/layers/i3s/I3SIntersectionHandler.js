// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../ViewingMode ./I3SUtil ../../support/orientedBoundingBox ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/verticalOffsetUtils".split(" "),function(w,h,C,x,y,D,z,E){function F(d,e,a,f=0){f=d[3]+f;const g=e[0]-d[0],k=e[1]-d[1];d=e[2]-d[2];e=a[0];const c=a[1];a=a[2];const m=e*g+c*k+a*d;return 0<=m*m-(e*e+c*c+a*a)*(g*g+k*k+d*d-f*f)}let J=function(){function d(a){this.type=z.IntersectorType.I3S;this._needVerticalOffset=
!1;this.layerUid=a.layerUid;this.sublayerUid=a.sublayerUid;this.collection=a.collection;this.traverseNodeHierarchy=a.traverseNodeHierarchy;this.slicePlaneEnabled=a.slicePlaneEnabled;this.isGround=a.isGround}var e=d.prototype;e.updateElevationAlignState=function(a,f){this._needVerticalOffset=a&&f===C.ViewingMode.Global};e.intersect=function(a,f,g,k){const c=a.results,m=a.options.store===z.StoreResults.ALL,t=a.ray.direction,n=a.tolerance;let A=b=>b,u=b=>b;const p=E.getVerticalOffsetI3S(h.isSome(a.verticalOffset)?
a.verticalOffset:this._needVerticalOffset?0:null);h.isSome(a.verticalOffset)&&h.isSome(p)&&(A=b=>p.applyToMbs(b),u=b=>p.applyToObb(b));this.traverseNodeHierarchy((b,B)=>{if(0===b.childrenLoaded)return!1;const v=h.isSome(b.serviceObbInRenderSR)&&x.isValidObb(b.serviceObbInRenderSR)?b.serviceObbInRenderSR:null;if(h.isSome(v)&&!y.intersectLine(u(v),g,t,n))return!1;B&&(h.isSome(v)||!x.isValidMbs(b.renderMbs)||F(A(b.renderMbs),g,t,n))&&(h.isNone(b.geometryObb)||y.intersectLine(u(b.geometryObb),g,t,n))&&
this.collection.intersect(B,g,k,n,p,(G,l,H,I)=>{if(0<=l&&(null==f||f(g,k,l))){var r=q=>{q.set(this.type,{layerUid:this.layerUid,sublayerUid:this.sublayerUid,nodeIndex:b.index,componentIndex:G,triangleNr:I},l,H)};this.isGround&&(null==c.ground.dist||l<c.ground.dist)&&r(c.ground);if(!a.options.isFiltered&&((null==c.min.dist||l<c.min.dist)&&r(c.min),(null==c.max.dist||l>c.max.dist)&&r(c.max),m)){const q=D.newIntersectorResult(a.ray);r(q);a.results.all.push(q)}}});return!0})};return d}();w.I3SIntersectionHandler=
J;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});