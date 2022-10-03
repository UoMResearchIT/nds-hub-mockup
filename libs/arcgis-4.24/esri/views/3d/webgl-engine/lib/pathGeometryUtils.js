// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../chunks/mat2 ../../../../chunks/mat2f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/plane ../../../../geometry/support/ray ./GeometryUtil ./VertexAttribute ../materials/internal/MaterialUtil".split(" "),function(v,C,L,T,U,M,N,r,t,h,u,H,V,O,w,W){function E(){return{up:u.create(),
right:u.create()}}let X=function(){function k(){this.pos=u.create();this.posES=u.create();this.posGS=u.create();this.vRight=u.create();this.vLeft=u.create();this.frame=E();this.rotationFrame=E();this.rotationRight=t.create();this.rotationAngle=0;this.miterStretch=U.create()}var g=k.prototype;g.setFrameFromUpVector=function(a){h.copy(this.frame.up,a);h.add(y,this.vLeft,this.vRight);h.normalize(y,y);h.scale(z,this.frame.up,h.dot(y,this.frame.up));h.subtract(F,y,z);h.normalize(F,F);h.cross(this.frame.right,
F,this.frame.up)};g.computeRotationAxisAndAngleFromUpVector=function(){h.copy(this.rotationFrame.up,this.frame.up);h.copy(this.rotationFrame.right,this.frame.right);r.set(this.rotationRight,1,0);h.scale(z,this.frame.up,h.dot(this.frame.up,this.vLeft));h.subtract(z,this.vLeft,z);h.negate(z,z);h.normalize(z,z);h.scale(y,this.frame.up,h.dot(this.frame.up,this.vRight));h.subtract(y,this.vRight,y);h.normalize(y,y);h.cross(I,this.rotationFrame.up,this.vLeft);this.rotationAngle=Math.sign(h.dot(I,this.vRight))*
(Math.PI-L.acosClamped(h.dot(z,y)));if(0<Math.abs(this.rotationAngle)){const a=L.reciprocalClamped(Math.cos(.5*this.rotationAngle));T.set(this.miterStretch,1+(a-1),0,0,1)}this.maxStretchDistance=Math.abs(Math.min(this.vLeftLength,this.vRightLength)/Math.cos(.5*(Math.PI-this.rotationAngle)))};return k}(),Y=function(){function k(){this.vertices=[];this.vertexIndices=[];this.vertexNormals=[];this.poles=[];this.poleIndices=[];this.uvIndices=this.uvs=null}var g=k.prototype;g.addVertex=function(a,b){this.vertices.push(t.clone(a));
this.vertexNormals.push(t.clone(b));return this.vertices.length-1};g.addUV=function(a){this.uvs||(this.uvs=[],this.uvIndices=[]);this.uvs.push(a);return this.uvs.length-1};g.addPole=function(a,b=null){this.poles.push({position:t.clone(a),normal:b?t.clone(b):null});return this.poles.length-1};g.addSegment=function(a,b=null,c=null){this.vertexIndices.push(a.v0);this.vertexIndices.push(a.v1);b&&(this.uvIndices.push(b.v0),this.uvIndices.push(b.v1));c&&(this.poleIndices.push(c.v0),this.poleIndices.push(c.v1))};
g.hasUV=function(){return null!=this.uvs};g.translate=function(a,b){for(const c of this.vertices)c[0]+=a,c[1]+=b;for(const c of this.poles)c.position[0]+=a,c.position[1]+=b};k.circle=function(a=20){const b=new k,c={v0:0,v1:0};b.addPole(t.fromValues(0,0));for(var e=0;e<a;++e){var d=2*e*Math.PI/a,f=Math.cos(d);const m=Math.sin(d);d=t.fromValues(.5*f,.5*m);f=t.fromValues(f,m);b.addVertex(d,f);b.addUV(e/a)}b.addUV(1);for(e=0;e<a-1;++e)f={v0:e,v1:e+1},b.addSegment(f,f,c);b.addSegment({v0:a-1,v1:0},{v0:a-
1,v1:a},c);return b};k.rect=function(){const a=new k,b=t.fromValues(-.5,-.5),c=t.fromValues(.5,-.5),e=t.fromValues(.5,.5),d=t.fromValues(-.5,.5),f=t.fromValues(0,-1),m=t.fromValues(1,0),l=t.fromValues(0,1),p=t.fromValues(-1,0);a.addUV(0);a.addUV(1);a.addPole(t.fromValues(0,.5),l);a.addPole(t.fromValues(0,.5));a.addPole(t.fromValues(0,-.5));a.addPole(t.fromValues(0,-.5),f);const n={v0:0,v1:1};a.addVertex(b,f);a.addVertex(c,f);a.addSegment({v0:0,v1:1},n,{v0:3,v1:3});a.addVertex(c,m);a.addVertex(e,m);
a.addSegment({v0:2,v1:3},n,{v0:2,v1:1});a.addVertex(e,l);a.addVertex(d,l);a.addSegment({v0:4,v1:5},n,{v0:0,v1:0});a.addVertex(d,p);a.addVertex(b,p);a.addSegment({v0:6,v1:7},n,{v0:1,v1:2});return a};C._createClass(k,[{key:"numSegments",get:function(){return this.vertexIndices.length/2}}]);return k}(),Z=function(){function k(g){this.vertices=[];this.offset=u.create();this.xform=N.create();this.vertices=g;h.copy(this.offset,this.vertices[Math.floor((g.length-1)/2)].pos);for(const a of this.vertices)h.subtract(a.pos,
a.pos,this.offset);M.translate(this.xform,this.xform,this.offset);this.updatePathVertexInformation()}k.prototype.updatePathVertexInformation=function(){const g=this.vertices.length;let a=this.vertices[0];a.index=0;h.set(a.vLeft,0,0,0);a.vLeftLength=0;h.subtract(a.vRight,this.vertices[1].pos,a.pos);a.vRightLength=h.length(a.vRight);h.normalize(a.vRight,a.vRight);let b=a;for(let c=1;c<g;++c)a=this.vertices[c],a.index=c,h.copy(a.vLeft,b.vRight),a.vLeftLength=b.vRightLength,c<g-1?(h.subtract(a.vRight,
this.vertices[c+1].pos,a.pos),a.vRightLength=h.length(a.vRight),h.normalize(a.vRight,a.vRight)):(h.copy(a.vRight,a.vLeft),a.vRightLength=a.vLeftLength),b=a};return k}(),aa=function(){function k(){}var g=k.prototype;g.numProfilesPerJoin=function(){return 1};g.extrude=function(a,b,c){for(let e=0;e<b.vertices.length;++e)c(a.index,a.frame,b.vertices[e],b.vertexNormals[e],!1)};return k}(),ca=function(){function k(a=.8*Math.PI,b=1){this.cutoffAngle=a;this.numBendSubdivisions=b}var g=k.prototype;g.numProfilesPerJoin=
function(){return this.numBendSubdivisions+1};g.extrude=function(a,b,c){var e=ba;if(Math.abs(a.rotationAngle)>=this.cutoffAngle)for(var d=0;d<this.numBendSubdivisions+1;++d){M.fromRotation(P,.5*-a.rotationAngle+d*a.rotationAngle/this.numBendSubdivisions,a.rotationFrame.up);var f=e,m=a.frame,l=P;h.transformMat4(f.up,m.up,l);h.transformMat4(f.right,m.right,l);for(f=0;f<b.vertices.length;++f)0<=r.dot(b.vertices[f],a.rotationRight)*a.rotationAngle?c(a.index,e,b.vertices[f],b.vertexNormals[f],!1):(r.transformMat2(D,
b.vertices[f],a.miterStretch),c(a.index,a.frame,D,b.vertexNormals[f],!0))}else for(e=0;e<this.numBendSubdivisions+1;++e)for(d=0;d<b.vertices.length;++d)f=0<=r.dot(b.vertices[d],a.rotationRight)*a.rotationAngle,r.transformMat2(D,b.vertices[d],a.miterStretch),c(a.index,a.frame,D,b.vertexNormals[d],f?!1:!0)};return k}();const da={generateUV:!1};let G=function(){function k(){}k.prototype.rebuildConnectingProfileGeometry=function(g,a,b){for(let c=0;c<a.vertices.length;++c)b(g.index,g.frame,a.vertices[c],
a.vertexNormals[c],0,0)};return k}(),ea=function(k){function g(){return k.call(this)||this}C._inheritsLoose(g,k);var a=g.prototype;a.getNumVertices=function(){return 0};a.getNumIndices=function(){return 0};a.rebuildCapGeometry=function(){};a.buildTopology=function(){};return g}(G),fa=function(k){function g(b,c=0,e=!1){var d=k.call(this)||this;d.profile=b;d.profilePlaneOffset=c;d.flip=e;return d}C._inheritsLoose(g,k);var a=g.prototype;a.getNumVertices=function(){return this.profile.vertices.length};
a.getNumIndices=function(){return 3*this.profile.numSegments};a.rebuildConnectingProfileGeometry=function(b,c,e){for(let d=0;d<c.vertices.length;++d)e(b.index,b.frame,c.vertices[d],c.vertexNormals[d],this.profilePlaneOffset,0)};a.rebuildCapGeometry=function(b,c){const e=J;r.set(e,0,0);const d=this.flip?1:-1;for(let f=0;f<this.profile.vertices.length;++f)c(b.index,b.frame,this.profile.vertices[f],e,this.profilePlaneOffset,d)};a.buildTopology=function(b,c){b=this.vertexBufferStart+this.profile.vertexIndices[0];
for(let e=1;e<this.profile.numSegments;++e){const d=this.vertexBufferStart+this.profile.vertexIndices[2*e],f=this.vertexBufferStart+this.profile.vertexIndices[2*e+1];this.flip?c(f,d,b):c(b,d,f)}};return g}(G),ha=function(k){function g(b){var c=k.call(this)||this;c.flip=!1;c.sign=0;c.breakNormals=!1;c.numSegments=3;c.profile=b.profile;c.flip=b.flip;c.sign=c.flip?1:-1;c.breakNormals=b.breakNormals;c.numSegments=b.subdivisions;return c}C._inheritsLoose(g,k);var a=g.prototype;a.getNumVertices=function(){let b=
0;b=this.profile.vertices.length*(this.numSegments-1);this.breakNormals&&(b+=this.profile.vertices.length);return b+=this.profile.poles.length};a.getNumIndices=function(){let b;b=2*this.profile.numSegments*(this.numSegments-1);for(let c=0;c<this.profile.numSegments;++c)b=this.profile.poleIndices[this.profile.vertexIndices[2*c]]===this.profile.poleIndices[this.profile.vertexIndices[2*c+1]]?b+1:b+2;return 3*b};a.rebuildCapGeometry=function(b,c){const e=b.frame,d=.5*this.sign,f=D,m=J;r.set(m,0,0);for(var l=
0;l<this.profile.poles.length;++l){var p=this.profile.poles[l];p.normal?c(b.index,e,p.position,p.normal,d,0):c(b.index,e,p.position,m,d,this.sign)}if(this.breakNormals)for(l=0;l<this.profile.vertices.length;++l)c(b.index,e,this.profile.vertices[l],this.profile.vertexNormals[l],0,0);for(l=0;l<this.numSegments-1;++l){var n=(1-(l+1)/this.numSegments)*Math.PI*.5;p=Math.sin(n);n=Math.cos(n);for(let q=0;q<this.profile.vertices.length;++q){const x=this.profile.poles[this.profile.poleIndices[q]];r.subtract(f,
this.profile.vertices[q],x.position);r.scale(f,f,p);x.normal?(r.add(f,f,x.position),c(b.index,e,f,x.normal,d*n,0)):(r.normalize(m,f),r.scale(m,m,p),r.add(f,f,x.position),c(b.index,e,f,m,d*n,this.sign*n))}}};a.buildTopology=function(b,c){b=this.breakNormals?this.vertexBufferStart+this.profile.poles.length:this.firstProfileVertexIndex;const e=this.breakNormals?this.vertexBufferStart+this.profile.poles.length+this.profile.vertices.length:this.vertexBufferStart+this.profile.poles.length;for(let d=0;d<
this.profile.numSegments;++d){const f=this.profile.vertexIndices[2*d],m=this.profile.vertexIndices[2*d+1],l=this.vertexBufferStart+this.profile.poleIndices[f],p=this.vertexBufferStart+this.profile.poleIndices[m];let n=b+f,q=b+m;for(let x=0;x<this.numSegments-1;++x){const A=e+x*this.profile.vertices.length+f,B=e+x*this.profile.vertices.length+m;this.flip?(c(A,q,n),c(q,A,B)):(c(n,q,A),c(B,A,q));n=A;q=B}this.flip?(c(l,q,n),l!==p&&c(l,p,q)):(c(n,q,l),l!==p&&c(q,p,l))}};return g}(G),ia=function(){function k(a,
b,c,e,d,f=da){this.options=f;this.numUVTotal=this.numNormalsTotal=this.numVerticesTotal=this.numExtrusionProfiles=this._triangleCount=this._extrusionVertexCount=0;this.profile=b;this.path=a;this.extruder=c;this.startCap=e;this.endCap=d;a=this.path.vertices.length-2;this.numExtrusionProfiles=c.numProfilesPerJoin()*a+2;this.numNormalsTotal=this.numVerticesTotal=b.vertices.length*this.numExtrusionProfiles;this.startCap.vertexBufferStart=this.numVerticesTotal;b=this.startCap.getNumVertices();this.numVerticesTotal+=
b;this.numNormalsTotal+=b;this.endCap.vertexBufferStart=this.numVerticesTotal;b=this.endCap.getNumVertices();this.numVerticesTotal+=b;this.numNormalsTotal+=b;this.pathVertexData=new Float32Array(1*this.numVerticesTotal);this.profileRightAxisData=new Float32Array(4*this.numVerticesTotal);this.profileUpAxisData=new Float32Array(4*this.numVerticesTotal);this.profileVertexAndNormalData=new Float32Array(4*this.numVerticesTotal);this.profile.hasUV()&&this.options.generateUV&&(this.numUVTotal=this.profile.uvs.length,
this.uvData=new Float32Array(2*this.numUVTotal));this.originData=new Float32Array(3*this.path.vertices.length);this._rebuildGeometry();this.buildTopology()}var g=k.prototype;g.emitVertex=function(a,b,c,e,d){this.profileRightAxisData[4*this._extrusionVertexCount]=b.right[0];this.profileRightAxisData[4*this._extrusionVertexCount+1]=b.right[1];this.profileRightAxisData[4*this._extrusionVertexCount+2]=b.right[2];this.profileUpAxisData[4*this._extrusionVertexCount]=b.up[0];this.profileUpAxisData[4*this._extrusionVertexCount+
1]=b.up[1];this.profileUpAxisData[4*this._extrusionVertexCount+2]=b.up[2];this.profileVertexAndNormalData[4*this._extrusionVertexCount]=c[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+1]=c[1];this.profileVertexAndNormalData[4*this._extrusionVertexCount+2]=e[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+3]=e[1];this.pathVertexData[this._extrusionVertexCount]=a;d?(a=this.path.vertices[a],this.profileRightAxisData[4*this._extrusionVertexCount+3]=a.rotationRight[0]*
a.maxStretchDistance,this.profileUpAxisData[4*this._extrusionVertexCount+3]=a.rotationRight[1]*a.maxStretchDistance):(this.profileRightAxisData[4*this._extrusionVertexCount+3]=0,this.profileUpAxisData[4*this._extrusionVertexCount+3]=0);++this._extrusionVertexCount};g.emitCapVertex=function(a,b,c,e,d,f){this.profileRightAxisData[4*this._extrusionVertexCount]=b.right[0];this.profileRightAxisData[4*this._extrusionVertexCount+1]=b.right[1];this.profileRightAxisData[4*this._extrusionVertexCount+2]=b.right[2];
this.profileUpAxisData[4*this._extrusionVertexCount]=b.up[0];this.profileUpAxisData[4*this._extrusionVertexCount+1]=b.up[1];this.profileUpAxisData[4*this._extrusionVertexCount+2]=b.up[2];this.profileVertexAndNormalData[4*this._extrusionVertexCount]=c[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+1]=c[1];this.profileVertexAndNormalData[4*this._extrusionVertexCount+2]=e[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+3]=e[1];this.pathVertexData[this._extrusionVertexCount]=
a;this.profileRightAxisData[4*this._extrusionVertexCount+3]=d;this.profileUpAxisData[4*this._extrusionVertexCount+3]=f;++this._extrusionVertexCount};g.emitTriangle=function(a,b,c){this.vertexIndices[3*this._triangleCount]=a;this.vertexIndices[3*this._triangleCount+1]=b;this.vertexIndices[3*this._triangleCount+2]=c;this.pathVertexIndices[3*this._triangleCount]=this.pathVertexData[a];this.pathVertexIndices[3*this._triangleCount+1]=this.pathVertexData[b];this.pathVertexIndices[3*this._triangleCount+
2]=this.pathVertexData[c];this.normalIndices[3*this._triangleCount]=a;this.normalIndices[3*this._triangleCount+1]=b;this.normalIndices[3*this._triangleCount+2]=c;++this._triangleCount};g._rebuildGeometry=function(){var a=(e,d,f,m,l)=>this.emitVertex(e,d,f,m,l);const b=(e,d,f,m,l,p)=>this.emitCapVertex(e,d,f,m,l,p);this._extrusionVertexCount=0;for(var c of this.path.vertices)this.originData[3*c.index]=c.pos[0],this.originData[3*c.index+1]=c.pos[1],this.originData[3*c.index+2]=c.pos[2];this.startCap.rebuildConnectingProfileGeometry(this.path.vertices[0],
this.profile,b);for(c=1;c<this.path.vertices.length-1;++c)this.extruder.extrude(this.path.vertices[c],this.profile,a);this.endCap.rebuildConnectingProfileGeometry(this.path.vertices[this.path.vertices.length-1],this.profile,b);this.startCap.rebuildCapGeometry(this.path.vertices[0],b);this.endCap.rebuildCapGeometry(this.path.vertices[this.path.vertices.length-1],b);if(this.profile.hasUV()&&this.options.generateUV)for(a=0;a<this.profile.uvs.length;++a)this.uvData[2*a]=this.profile.uvs[a],this.uvData[2*
a+1]=0};g.buildTopology=function(){const a=(f,m,l)=>this.emitTriangle(f,m,l);this._triangleCount=0;const b=this.profile.vertices.length,c=this.profile.numSegments,e=this.numExtrusionProfiles-1;var d=c*e*6;this.startCap.indexBufferStart=d;this.startCap.firstProfileVertexIndex=0;d+=this.startCap.getNumIndices();this.endCap.indexBufferStart=d;this.endCap.firstProfileVertexIndex=b*(this.numExtrusionProfiles-1);d+=this.endCap.getNumIndices();this.vertexIndices=new Uint32Array(d);this.normalIndices=new Uint32Array(d);
this.pathVertexIndices=new Uint32Array(d);this.profile.hasUV()&&this.options.generateUV&&(this.uvIndices=new Uint32Array(d));for(d=0;d<c;++d){const f=this.profile.vertexIndices[2*d],m=this.profile.vertexIndices[2*d+1];for(let l=0;l<e;++l){const p=l*b+f,n=(l+1)*b+m,q=l*b+m;a(p,(l+1)*b+f,n);a(p,n,q)}}this.startCap.buildTopology(this.path.vertices[0],a);this.endCap.buildTopology(this.path.vertices[this.path.vertices.length-1],a)};g.onPathChanged=function(){this._rebuildGeometry()};return k}(),K=function(){function k(g){this.builder=
g}k.prototype.onPathChanged=function(){this.builder.onPathChanged()};C._createClass(k,[{key:"xform",get:function(){return this.builder.path.xform}}]);return k}(),S=function(k){function g(b){b=k.call(this,b)||this;b.vertexAttributePosition=null;b.vertexAttributeNormal=null;b.vertexAttributeColor=null;b.vertexAttributePosition=new Float32Array(3*b.builder.numVerticesTotal);b.vertexAttributeNormal=new Float32Array(3*b.builder.numNormalsTotal);b.vertexAttributeColor=new Uint8Array(4);b.vertexAttributeColor[0]=
255;b.vertexAttributeColor[1]=255;b.vertexAttributeColor[2]=255;b.vertexAttributeColor[3]=255;return b}C._inheritsLoose(g,k);var a=g.prototype;a.bakeVertexColors=function(b){this.vertexAttributeColor[0]=255*b[0];this.vertexAttributeColor[1]=255*b[1];this.vertexAttributeColor[2]=255*b[2];this.vertexAttributeColor[3]=255*(3<b.length?b[3]:1)};a.bake=function(b){this.size=b;for(let f=0;f<this.builder.numVerticesTotal;++f){var c=this.builder.pathVertexData[f],e=0===c||c===this.builder.path.vertices.length-
1;c*=3;var d=ja;h.set(d,this.builder.originData[c++],this.builder.originData[c++],this.builder.originData[c]);c=4*f;const m=z,l=D,p=y,n=I,q=ka;let x=0,A=0;h.set(n,this.builder.profileRightAxisData[c],this.builder.profileRightAxisData[c+1],this.builder.profileRightAxisData[c+2]);h.set(q,this.builder.profileUpAxisData[c],this.builder.profileUpAxisData[c+1],this.builder.profileUpAxisData[c+2]);r.set(l,this.builder.profileVertexAndNormalData[c]*b[0],this.builder.profileVertexAndNormalData[c+1]*b[1]);
if(e)h.cross(p,q,n),x=this.builder.profileRightAxisData[c+3]*b[0],A=this.builder.profileUpAxisData[c+3];else{e=J;const B=la;r.set(e,this.builder.profileRightAxisData[c+3],this.builder.profileUpAxisData[c+3]);const Q=r.length(e);r.normalize(e,e);const R=r.dot(l,e);if(Math.abs(R)>Q){r.set(B,-e[1],e[0]);const ma=r.dot(l,B);r.scale(e,e,Q*Math.sign(R));r.scale(B,B,ma);r.add(l,e,B)}h.set(p,0,0,0)}h.set(m,n[0]*l[0]+q[0]*l[1],n[1]*l[0]+q[1]*l[1],n[2]*l[0]+q[2]*l[1]);this.vertexAttributePosition[3*f]=d[0]+
m[0]+p[0]*x;this.vertexAttributePosition[3*f+1]=d[1]+m[1]+p[1]*x;this.vertexAttributePosition[3*f+2]=d[2]+m[2]+p[2]*x;d=D;r.set(d,this.builder.profileVertexAndNormalData[c+2],this.builder.profileVertexAndNormalData[c+3]);this.vertexAttributeNormal[3*f]=n[0]*d[0]+q[0]*d[1]+p[0]*A;this.vertexAttributeNormal[3*f+1]=n[1]*d[0]+q[1]*d[1]+p[1]*A;this.vertexAttributeNormal[3*f+2]=n[2]*d[0]+q[2]*d[1]+p[2]*A}};a.createGeometryData=function(){const b=[[w.VertexAttribute.POSITION,this.builder.vertexIndices],
[w.VertexAttribute.NORMAL,this.builder.normalIndices]],c=[[w.VertexAttribute.POSITION,{size:3,data:this.vertexAttributePosition,exclusive:!0}],[w.VertexAttribute.NORMAL,{size:3,data:this.vertexAttributeNormal,exclusive:!0}]];this.vertexAttributeColor&&(b.push([w.VertexAttribute.COLOR,new Uint32Array(this.builder.vertexIndices.length)]),c.push([w.VertexAttribute.COLOR,{size:4,data:this.vertexAttributeColor}]));return{vertexAttributes:c,indices:b}};a.onPathChanged=function(){k.prototype.onPathChanged.call(this);
this.bake(this.size)};a.intersect=function(b,c,e){const d=this.builder.vertexIndices;W.intersectTriangles(b,c,0,d.length/3,d,{size:3,data:this.vertexAttributePosition},void 0,void 0,e)};return g}(K),na=function(k){function g(a,b,c,e){var d=k.call(this,a)||this;d.sizeAttributeValue=b;d.colorAttributeValue=c;d.opacityAttributeValue=e;d.vvData=null;d.baked=new S(a);d.vvData=new Float32Array(4*d.builder.path.vertices.length);for(a=0;a<d.builder.path.vertices.length;++a)d.vvData[4*a]=b,d.vvData[4*a+1]=
c,d.vvData[4*a+2]=e,d.vvData[4*a+3]=0===a||a===d.builder.path.vertices.length-1?1:0;return d}C._inheritsLoose(g,k);g.prototype.createGeometryData=function(){return{vertexAttributes:[[w.VertexAttribute.POSITION,{size:3,data:this.builder.originData,exclusive:!0}],[w.VertexAttribute.PROFILERIGHT,{size:4,data:this.builder.profileRightAxisData,exclusive:!0}],[w.VertexAttribute.PROFILEUP,{size:4,data:this.builder.profileUpAxisData,exclusive:!0}],[w.VertexAttribute.PROFILEVERTEXANDNORMAL,{size:4,data:this.builder.profileVertexAndNormalData,
exclusive:!0}],[w.VertexAttribute.FEATUREVALUE,{size:4,data:this.vvData,exclusive:!0}]],indices:[[w.VertexAttribute.POSITION,this.builder.pathVertexIndices],[w.VertexAttribute.PROFILERIGHT,this.builder.vertexIndices],[w.VertexAttribute.PROFILEUP,this.builder.vertexIndices],[w.VertexAttribute.PROFILEVERTEXANDNORMAL,this.builder.vertexIndices],[w.VertexAttribute.FEATUREVALUE,this.builder.pathVertexIndices]]}};return g}(K);const ja=u.create(),D=t.create(),J=t.create(),la=t.create(),z=u.create(),y=u.create(),
I=u.create(),ka=u.create(),F=u.create(),ba=E(),P=N.create();v.Builder=ia;v.CapBuilder=G;v.Extruder=function(){};v.FastUpdatePathGeometry=na;v.MiterExtruder=ca;v.NoCapBuilder=ea;v.Path=Z;v.PathGeometryData=K;v.PathVertex=X;v.Profile=Y;v.RoundCapBuilder=ha;v.SimpleExtruder=aa;v.StaticPathGeometry=S;v.TriangulationCapBuilder=fa;v.computeMinimumRotationTangentFrame=function(k,g){let a=null;const b=k.vertices.length,c=u.create(),e=u.create(),d=u.create(),f=u.create(),m=u.create(),l=u.create(),p=H.create();
let n=k.vertices[0];h.copy(e,g);h.set(c,0,1,0);O.makeOrthoBasisDirUpFallback(n.vRight,e,c,c,d,e,.99619469809);h.copy(n.frame.up,e);h.copy(n.frame.right,d);a=n;for(g=1;g<b;++g){n=k.vertices[g];h.add(m,n.vLeft,n.vRight);let q=h.length(m);0<q?(q=1/Math.sqrt(q),m[0]*=q,m[1]*=q,m[2]*=q):(m[0]=n.vRight[0],m[1]=n.vRight[1],m[2]=n.vRight[2]);h.add(l,a.pos,a.frame.up);H.fromPositionAndNormal(n.pos,m,p);H.intersectRay(p,V.wrap(l,n.vLeft),f)?(h.subtract(f,f,n.pos),h.normalize(e,f),h.cross(d,m,e),h.normalize(d,
d)):O.makeOrthoBasisDirUpFallback(m,a.frame.up,a.frame.right,c,d,e,.99619469809);h.copy(n.frame.up,e);h.copy(n.frame.right,d);a=n}};v.makeFrame=E;v.profileSpaceToVertexSpace=function(k,g,a){k[0]=a[0]*g.right[0]+a[1]*g.up[0];k[1]=a[0]*g.right[1]+a[1]*g.up[1];k[2]=a[0]*g.right[2]+a[1]*g.up[2]};v.vertexSpaceToProfileSpace=function(k,g,a){r.set(k,h.dot(a,g.right),h.dot(a,g.up))};Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});