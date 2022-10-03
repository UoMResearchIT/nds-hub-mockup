// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/ObjectPool ../../../../core/PooledArray ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/frustum ../../../../geometry/support/ray ../../../../chunks/sphere ./Util".split(" "),function(ba,N,ca,E,x,p,I,U,m,V){function J(f,e,a){a[0]=f[0]+e;a[1]=f[1]+e;a[2]=f[2]+e}function W(f,e,a,b){if(1===e)f=a(f[0]),m.copy(f,b);else{t[0]=Infinity;t[1]=Infinity;t[2]=Infinity;u[0]=-Infinity;u[1]=
-Infinity;u[2]=-Infinity;for(let g=0;g<e;g++){var c=a(f[g]);if(F(c[3])){var d=t,h=c;d[0]=Math.min(d[0],h[0]-h[3]);d[1]=Math.min(d[1],h[1]-h[3]);d[2]=Math.min(d[2],h[2]-h[3]);d=u;d[0]=Math.max(d[0],c[0]+c[3]);d[1]=Math.max(d[1],c[1]+c[3]);d[2]=Math.max(d[2],c[2]+c[3])}}x.lerp(b,t,u,.5);b[3]=Math.max(u[0]-t[0],u[1]-t[1],u[2]-t[2])/2}}function da(f,e,a){if(!C.length)for(var b=0;8>b;++b)C.push({index:0,distance:0});for(b=0;8>b;++b){const c=X[b];C.data[b].index=b;C.data[b].distance=z(f,e,c)}C.sort((c,
d)=>c.distance-d.distance);for(f=0;8>f;++f)a[f]=C.data[f].index}function O(f,e){let a=Infinity,b=null;for(let c=0;8>c;++c){const d=z(f,e,Y[c]);d<a&&(a=d,b=Y[c])}return b}function z(f,e,a){return e*(f[0]*a[0]+f[1]*a[1]+f[2]*a[2])}function F(f){return!isNaN(f)&&-Infinity!==f&&Infinity!==f&&0<f}let T=function(){function f(a,b){this._objectToBoundingSphere=a;this._maximumObjectsPerNode=10;this._maximumDepth=20;this._degenerateObjects=new Set;this._root=new n;this._objectCount=0;b&&(void 0!==b.maximumObjectsPerNode&&
(this._maximumObjectsPerNode=b.maximumObjectsPerNode),void 0!==b.maximumDepth&&(this._maximumDepth=b.maximumDepth))}var e=f.prototype;e.destroy=function(){this._degenerateObjects.clear();n.clearPool();P[0]=null;D.prune();C.prune()};e.add=function(a,b=a.length){this._objectCount+=b;this._grow(a,b);const c=n.acquire();for(let d=0;d<b;d++){const h=a[d];this._isDegenerate(h)?this._degenerateObjects.add(h):(c.init(this._root),this._add(h,c))}n.release(c)};e.remove=function(a,b=null){this._objectCount-=
a.length;const c=n.acquire();for(const d of a)a=N.isSome(b)?b:m.copy(this._objectToBoundingSphere(d),ea),F(a[3])?(c.init(this._root),this._remove(d,a,c)):this._degenerateObjects.delete(d);n.release(c);this._shrink()};e.update=function(a,b){if(F(b[3])||!this._isDegenerate(a))P[0]=a,a=P,this.remove(a,b),this.add(a)};e.forEachAlongRay=function(a,b,c){const d=U.wrap(a,b);this._forEachNode(this._root,h=>{if(!this._intersectsNode(d,h))return!1;h=h.node;h.terminals.forAll(g=>{this._intersectsObject(d,g)&&
c(g)});null!==h.residents&&h.residents.forAll(g=>{this._intersectsObject(d,g)&&c(g)});return!0})};e.forEachAlongRayWithVerticalOffset=function(a,b,c,d){const h=U.wrap(a,b);this._forEachNode(this._root,g=>{if(!this._intersectsNodeWithOffset(h,g,d))return!1;g=g.node;g.terminals.forAll(k=>{this._intersectsObjectWithOffset(h,k,d)&&c(k)});null!==g.residents&&g.residents.forAll(k=>{this._intersectsObjectWithOffset(h,k,d)&&c(k)});return!0})};e.forEach=function(a){this._forEachNode(this._root,b=>{b=b.node;
b.terminals.forAll(a);null!==b.residents&&b.residents.forAll(a);return!0});this._degenerateObjects.forEach(a)};e.forEachDegenerateObject=function(a){this._degenerateObjects.forEach(a)};e.findClosest=function(a,b,c,d=()=>!0,h=Infinity){let g=Infinity,k=Infinity,l=null;const A=O(a,b),H=r=>{--h;if(d(r)){var v=this._objectToBoundingSphere(r);if(I.intersectsSphere(c,v)){var K=z(a,b,m.getCenter(v)),G=K-v[3];v=K+v[3];G<g&&(g=G,k=v,l=r)}}};this._forEachNodeDepthOrdered(this._root,r=>{if(0>=h||!I.intersectsSphere(c,
r.bounds))return!1;x.scale(w,A,r.halfSize);x.add(w,w,r.bounds);if(z(a,b,w)>k)return!1;r=r.node;r.terminals.forAll(v=>H(v));null!==r.residents&&r.residents.forAll(v=>H(v));return!0},a,b);return l};e.forEachInDepthRange=function(a,b,c,d,h,g,k){let l=-Infinity,A=Infinity;const H={setRange:q=>{c===f.DepthOrder.FRONT_TO_BACK?(l=Math.max(l,q.near),A=Math.min(A,q.far)):(l=Math.max(l,-q.far),A=Math.min(A,-q.near))}};H.setRange(d);const r=z(b,c,a),v=O(b,c),K=O(b,-c),G=q=>{if(k(q)){var B=this._objectToBoundingSphere(q),
L=m.getCenter(B);L=z(b,c,L)-r;var fa=L+B[3];L-B[3]>A||fa<l||!I.intersectsSphere(g,B)||h(q,H)}};this._forEachNodeDepthOrdered(this._root,q=>{if(!I.intersectsSphere(g,q.bounds))return!1;x.scale(w,v,q.halfSize);x.add(w,w,q.bounds);if(z(b,c,w)-r>A)return!1;x.scale(w,K,q.halfSize);x.add(w,w,q.bounds);if(z(b,c,w)-r<l)return!1;q=q.node;q.terminals.forAll(B=>G(B));null!==q.residents&&q.residents.forAll(B=>G(B));return!0},b,c)};e.forEachNode=function(a){this._forEachNode(this._root,b=>a(b.node,b.bounds,b.halfSize))};
e.forEachNeighbor=function(a,b){const c=m.getRadius(b),d=m.getCenter(b),h=g=>{const k=this._objectToBoundingSphere(g);var l=m.getRadius(k);l=c+l;0>=x.squaredDistance(m.getCenter(k),d)-l*l&&a(g)};this._forEachNode(this._root,g=>{var k=m.getRadius(g.bounds);k=c+k;if(0<x.squaredDistance(m.getCenter(g.bounds),d)-k*k)return!1;g=g.node;g.terminals.forAll(l=>h(l));null!==g.residents&&g.residents.forAll(l=>h(l));return!0});this.forEachDegenerateObject(h)};e._intersectsNode=function(a,b){J(b.bounds,2*-b.halfSize,
t);J(b.bounds,2*b.halfSize,u);return V.rayBoxTest(a.origin,a.direction,t,u)};e._intersectsNodeWithOffset=function(a,b,c){J(b.bounds,2*-b.halfSize,t);J(b.bounds,2*b.halfSize,u);c.applyToMinMax(t,u);return V.rayBoxTest(a.origin,a.direction,t,u)};e._intersectsObject=function(a,b){b=this._objectToBoundingSphere(b);return 0<b[3]?m.intersectsRay(b,a):!0};e._intersectsObjectWithOffset=function(a,b,c){b=this._objectToBoundingSphere(b);return 0<b[3]?m.intersectsRay(c.applyToBoundingSphere(b),a):!0};e._forEachNode=
function(a,b){a=n.acquire().init(a);const c=[a];for(;0!==c.length;){a=c.pop();if(b(a)&&!a.isLeaf())for(let d=0;d<a.node.children.length;d++)a.node.children[d]&&c.push(n.acquire().init(a).advance(d));n.release(a)}};e._forEachNodeDepthOrdered=function(a,b,c,d=f.DepthOrder.FRONT_TO_BACK){a=n.acquire().init(a);const h=[a];for(da(c,d,Z);0!==h.length;){a=h.pop();if(b(a)&&!a.isLeaf())for(c=7;0<=c;--c)d=Z[c],a.node.children[d]&&h.push(n.acquire().init(a).advance(d));n.release(a)}};e._remove=function(a,b,
c){D.clear();b=c.advanceTo(b,(d,h)=>{D.push(d.node);D.push(h)})?c.node.terminals:c.node.residents;b.removeUnordered(a);if(0===b.length)for(a=D.length-2;0<=a&&this._purge(D.data[a],D.data[a+1]);a-=2);};e._nodeIsEmpty=function(a){if(0!==a.terminals.length)return!1;if(null!==a.residents)return 0===a.residents.length;for(let b=0;b<a.children.length;b++)if(a.children[b])return!1;return!0};e._purge=function(a,b){0<=b&&(a.children[b]=null);return this._nodeIsEmpty(a)?(null===a.residents&&(a.residents=new E({shrink:!0})),
!0):!1};e._add=function(a,b){b.advanceTo(this._objectToBoundingSphere(a))?b.node.terminals.push(a):(b.node.residents.push(a),b.node.residents.length>this._maximumObjectsPerNode&&b.depth<this._maximumDepth&&this._split(b))};e._split=function(a){const b=a.node.residents;a.node.residents=null;for(let c=0;c<b.length;c++){const d=n.acquire().init(a);this._add(b.getItemAt(c),d);n.release(d)}};e._grow=function(a,b){0!==b&&(W(a,b,c=>this._objectToBoundingSphere(c),y),F(y[3])&&!this._fitsInsideTree(y)&&(this._nodeIsEmpty(this._root.node)?
(m.copy(y,this._root.bounds),this._root.halfSize=1.25*y[3]):(a=this._rootBoundsForRootAsSubNode(y),this._placingRootViolatesMaxDepth(a)?this._rebuildTree(y,a):this._growRootAsSubNode(a),n.release(a))))};e._rebuildTree=function(a,b){x.copy(Q,b.bounds);Q[3]=b.halfSize;W([a,Q],2,c=>c,R);a=n.acquire().init(this._root);this._root.initFrom(null,R,1.25*R[3]);this._forEachNode(a,c=>{this.add(c.node.terminals.data,c.node.terminals.length);null!==c.node.residents&&this.add(c.node.residents.data,c.node.residents.length);
return!0});n.release(a)};e._placingRootViolatesMaxDepth=function(a){const b=Math.log(a.halfSize/this._root.halfSize)*Math.LOG2E;let c=0;this._forEachNode(this._root,d=>{c=Math.max(c,d.depth);return c+b<=this._maximumDepth});return c+b>this._maximumDepth};e._rootBoundsForRootAsSubNode=function(a){var b=a[3];let c=-Infinity;const d=this._root.bounds,h=this._root.halfSize;for(var g=0;3>g;g++){var k=Math.max(0,Math.ceil((d[g]-h-(a[g]-b))/(2*h)));const l=Math.max(0,Math.ceil((a[g]+b-(d[g]+h))/(2*h)))+
1;c=Math.max(c,2**Math.ceil(Math.log(k+l)*Math.LOG2E));M[g].min=k;M[g].max=l}for(a=0;3>a;a++)b=M[a].min,g=M[a].max,k=(c-(b+g))/2,b+=Math.ceil(k),g+=Math.floor(k),S[a]=d[a]-h-b*h*2+(g+b)*h;S[3]=c*h*aa;return n.acquire().initFrom(null,S,c*h,0)};e._growRootAsSubNode=function(a){const b=this._root.node;x.copy(y,this._root.bounds);y[3]=this._root.halfSize;this._root.init(a);a.advanceTo(y,null,!0);a.node.children=b.children;a.node.residents=b.residents;a.node.terminals=b.terminals};e._shrink=function(){for(;;){const a=
this._findShrinkIndex();if(-1===a)break;this._root.advance(a);this._root.depth=0}};e._findShrinkIndex=function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let a=null;const b=this._root.node.children;let c=0,d=0;for(;d<b.length&&null==a;)c=d++,a=b[c];for(;d<b.length;)if(b[d++])return-1;return c};e._isDegenerate=function(a){a=this._objectToBoundingSphere(a)[3];return!F(a)};e._fitsInsideTree=function(a){const b=this._root.bounds,c=this._root.halfSize;return a[3]<=c&&a[0]>=
b[0]-c&&a[0]<=b[0]+c&&a[1]>=b[1]-c&&a[1]<=b[1]+c&&a[2]>=b[2]-c&&a[2]<=b[2]+c};ba._createClass(f,[{key:"bounds",get:function(){return this._root.bounds}},{key:"halfSize",get:function(){return this._root.halfSize}},{key:"root",get:function(){return this._root.node}},{key:"maximumObjectsPerNode",get:function(){return this._maximumObjectsPerNode}},{key:"maximumDepth",get:function(){return this._maximumDepth}},{key:"objectCount",get:function(){return this._objectCount}}]);return f}(),n=function(){function f(){this.bounds=
m.create();this.halfSize=0;this.initFrom(null,null,0,0)}var e=f.prototype;e.init=function(a){return this.initFrom(a.node,a.bounds,a.halfSize,a.depth)};e.initFrom=function(a,b,c,d=this.depth){this.node=N.isSome(a)?a:f.createEmptyNode();N.isSome(b)&&m.copy(b,this.bounds);this.halfSize=c;this.depth=d;return this};e.advance=function(a){let b=this.node.children[a];b||(b=f.createEmptyNode(),this.node.children[a]=b);this.node=b;this.halfSize/=2;this.depth++;a=X[a];this.bounds[0]+=a[0]*this.halfSize;this.bounds[1]+=
a[1]*this.halfSize;this.bounds[2]+=a[2]*this.halfSize;this.bounds[3]=this.halfSize*aa;return this};e.advanceTo=function(a,b,c=!1){for(;;){if(this.isTerminalFor(a))return b&&b(this,-1),!0;if(this.isLeaf()){if(!c)return b&&b(this,-1),!1;this.node.residents=null}const d=this._childIndex(a);b&&b(this,d);this.advance(d)}};e.isLeaf=function(){return null!=this.node.residents};e.isTerminalFor=function(a){return a[3]>this.halfSize/2};e._childIndex=function(a){const b=this.bounds;return(b[0]<a[0]?1:0)+(b[1]<
a[1]?2:0)+(b[2]<a[2]?4:0)};f.createEmptyNode=function(){return{children:[null,null,null,null,null,null,null,null],terminals:new E({shrink:!0}),residents:new E({shrink:!0})}};f.acquire=function(){return f._pool.acquire()};f.release=function(a){f._pool.release(a)};f.clearPool=function(){f._pool.prune()};return f}();n._pool=new ca(n);(function(f){f=f.DepthOrder||(f.DepthOrder={});f[f.FRONT_TO_BACK=1]="FRONT_TO_BACK";f[f.BACK_TO_FRONT=-1]="BACK_TO_FRONT"})(T||(T={}));const X=[p.fromValues(-1,-1,-1),p.fromValues(1,
-1,-1),p.fromValues(-1,1,-1),p.fromValues(1,1,-1),p.fromValues(-1,-1,1),p.fromValues(1,-1,1),p.fromValues(-1,1,1),p.fromValues(1,1,1)],Y=[p.fromValues(-1,-1,-1),p.fromValues(-1,-1,1),p.fromValues(-1,1,-1),p.fromValues(-1,1,1),p.fromValues(1,-1,-1),p.fromValues(1,-1,1),p.fromValues(1,1,-1),p.fromValues(1,1,1)],aa=Math.sqrt(3),P=[null],S=m.create(),w=p.create(),t=p.create(),u=p.create(),D=new E,ea=m.create(),y=m.create(),Q=m.create(),R=m.create(),M=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],C=new E,
Z=[0,0,0,0,0,0,0,0];return T});