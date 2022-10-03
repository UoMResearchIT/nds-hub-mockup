// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ./SnappingAlgorithm ./snappingUtils ./candidates/RightAngleTriangleSnappingCandidate ../support/viewUtils ../../support/geometry2dUtils".split(" "),function(n,u,v,p,q,g,w,x,r,y){g=function(t){function h(){return t.apply(this,arguments)||this}u._inheritsLoose(h,t);var k=h.prototype;k.snapNewVertex=function(d,c){const b=c.editGeometryOperations.data.components[0],a=[],e=b.vertices.length;
if("polygon"!==c.editGeometryOperations.data.type||2>e)return a;this._processCandidateProposal(b.vertices[0].pos,b.vertices[e-1].pos,d,c,a);return a};k.snapExistingVertex=function(d,c){const b=[],a=v.unwrap(c.vertexHandle),e=a.component;if(2>e.edges.length||"polyline"===c.editGeometryOperations.data.type&&(0===a.index||a.index===e.vertices.length-1))return b;this._processCandidateProposal(a.leftEdge.leftVertex.pos,a.rightEdge.rightVertex.pos,d,c,b);return b};k._processCandidateProposal=function(d,
c,b,a,e){if(this.exceedsShortLineThreshold(d,c,a)){var l=p.lerp(q.create(),d,c,.5),z=.5*p.distance(d,c);l=y.projectPointToCircle(q.create(),b,l,z);var {coordinateHelper:f,elevationInfo:m,pointer:A}=a;a=f.fromXYZ(l,f.getZ(b,0));b=r.anyMapPointToScreenPoint(b,f,m,this.view);w.squareDistance(b,r.anyMapPointToScreenPoint(a,f,m,this.view))<this.squaredProximityTreshold(A)&&e.push(new x.RightAngleTriangleSnappingCandidate({coordinateHelper:f,targetPoint:a,point1:d,point2:c,elevationInfo:m}))}};return h}(g.SnappingAlgorithm);
n.RightAngleTriangleSnapper=g;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});