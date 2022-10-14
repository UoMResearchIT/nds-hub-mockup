// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/MapUtils ../../../../../core/maybe ../../../../../core/PooledArray ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../support/buffer/glUtil ../../lib/GLMaterials ../../lib/Material ../../lib/ModelDirtyTypes ../../lib/RenderPass ../../lib/Util ../DrawParameters ../WaterMaterial ./Instance ./MergedGeometryBuffer ./MergedGeometryBufferPool ./utils".split(" "),function(F,G,J,u,A,B,C,K,L,M,w,D,z,N,O,q,P,
Q,R){function S(m,h){const b=new Map;for(const a of m)H(b,a,!0);for(const a of h)H(b,a,!1);return b}function H(m,h,b){const a=h.origin;if(!u.isNone(a)){var c=m.get(a.id);null==c&&(c=new T(a.vec3),m.set(a.id,c));b?c.toAdd.push(h):c.toRemove.push(h)}}function U(m,h){let b;if(!m.some(c=>{if(c.to-c.from<h)return!1;b=c;return!0}))return null;const a=b.from;b.from+=h;b.from>=b.to&&m.removeUnordered(b);return a}function I(m){const h=new Map;m.forAll(a=>h.set(a.from,a));let b=!0;for(;b;)b=!1,m.forEach(a=>
{const c=h.get(a.to);c&&(a.to=c.to,h.delete(c.from),m.removeUnordered(c),b=!0)})}let Z=function(){function m(b,a,c){this._rctx=b;this._materialRepository=a;this._material=c;this.type="MergedRenderer";this._dataByOrigin=new Map;this._renderCommandData=new A;this._hasOccludees=this._hasHighlights=!1;this._glMaterials=new L.GLMaterials(this._material,this._materialRepository);this._bufferWriter=c.createBufferWriter();this._bufferPool=new Q.MergedGeometryBufferPool(b,c.vertexAttributeLocations,K.glLayout(this._bufferWriter.vertexBufferLayout))}
var h=m.prototype;h.dispose=function(){this._glMaterials.destroy();this._dataByOrigin.forEach(b=>b.buffer.dispose());this._dataByOrigin.clear();this._bufferPool.dispose()};h.modify=function(b){this._updateGeometries(b.updates);this._addAndRemoveGeometries(b.adds,b.removes);this._updateRenderCommands()};h._addAndRemoveGeometries=function(b,a){const c=this._bufferWriter,f=c.vertexBufferLayout.stride/4,n=this._dataByOrigin,e=S(b,a);e.forEach((g,d)=>{e.delete(d);var k=g.toAdd.reduce((p,v)=>p+c.elementCount(v.data),
0);let l=n.get(d);if(null==l)z.assert(0===g.toRemove.length),l=new V(g.origin,new P.MergedGeometryBuffer(this._bufferPool,k*f)),n.set(d,l);else if(0===g.toAdd.length&&l.instances.size===g.toRemove.length){l.buffer.dispose();n.delete(d);return}let t=0;l.instances.forEach(p=>t+=p.to-p.from);d=g.toRemove.reduce((p,v)=>p+c.elementCount(v.data),0);d=(t+k-d)*f;k=W;d<l.buffer.size/2?this._removeAndRebuild(l,g.toRemove,f,d,k):0<g.toRemove.length&&this._remove(l,g.toRemove,f,k);0<g.toAdd.length&&(d=X,z.setMatrixTranslation3(d,
-g.origin[0],-g.origin[1],-g.origin[2]),this._add(l,g.toAdd,f,d,k));const r=l.buffer.vao.vertexBuffers.geometry;I(k);k.forAll(({from:p,to:v})=>{p<v&&(p*=4,r.setSubData(l.buffer.array,p,p,4*v))});k.clear();l.drawCommandsDirty=!0})};h._updateGeometries=function(b){const a=this._bufferWriter,c=a.vertexBufferLayout.stride/4;for(const f of b){b=f.renderGeometry;const n=this._dataByOrigin.get(b.origin.id),e=n&&n.instances.get(b.id);if(!e)break;const g=f.updateType;g&w.ModelDirty.State.VISIBILITIES&&(e.isVisible=
b.instanceParameters.visible);if(g&(w.ModelDirty.State.HIGHLIGHTS|w.ModelDirty.State.VISIBILITIES)){const d=b.instanceParameters.visible;e.hasHighlights=!!b.instanceParameters.highlights&&d}g&w.ModelDirty.State.OCCLUDEES&&(e.hasOccludees=!!b.instanceParameters.occludees);if(g&(w.ModelDirty.State.VERTEXATTRS|w.ModelDirty.State.TRANSFORMATION)){const {array:d,vao:k}=n.buffer;R.calculateTransformRelativeToOrigin(b,E,x);a.write({transformation:E,invTranspTransformation:x},b.data,a.vertexBufferLayout.createView(d.buffer),
e.from);z.assert(e.from+a.elementCount(b.data)===e.to,"material VBO layout has changed");k.vertexBuffers.geometry.setSubData(d,e.from*c*4,e.from*c*4,e.to*c*4)}n.drawCommandsDirty=!0}};h._updateRenderCommands=function(){this._hasOccludees=this._hasHighlights=!1;this._dataByOrigin.forEach(a=>{a.hasHiddenInstances=!1;a.hasHighlights=!1;a.hasOccludees=!1;J.someMap(a.instances,c=>{c.isVisible?(c.hasHighlights&&(this._hasHighlights=!0,a.hasHighlights=!0),c.hasOccludees&&(this._hasOccludees=!0,a.hasOccludees=
!0)):a.hasHiddenInstances=!0;return a.hasHiddenInstances&&a.hasHighlights&&a.hasOccludees})});const b=a=>{a.drawCommandsDefault=null;a.drawCommandsHighlight=null;a.drawCommandsOccludees=null;a.drawCommandsShadowHighlightRest=null;if(0!==a.instances.size)if(a.hasOccludees||a.hasHighlights||a.hasHiddenInstances){var c=q.sortInstancesByRange(a.instances);a.drawCommandsDefault=[];a.drawCommandsHighlight=[];a.drawCommandsOccludees=[];a.drawCommandsShadowHighlightRest=[];for(const f of c)f.isVisible&&(f.hasOccludees?
q.addOrMerge(a.drawCommandsOccludees,f):q.addOrMerge(a.drawCommandsDefault,f),f.hasHighlights?q.addOrMerge(a.drawCommandsHighlight,f):q.addOrMerge(a.drawCommandsShadowHighlightRest,f))}else a.drawCommandsDefault=[{first:0,count:4*a.buffer.size/this._bufferWriter.vertexBufferLayout.stride}]};this._dataByOrigin.forEach(a=>{a.drawCommandsDirty&&(b(a),a.drawCommandsDirty=!1)})};h.updateAnimation=function(b){return this._material.update(b)};h.requiresSlot=function(b,a){return null==b||this._material.requiresSlot(b,
a)};h.render=function(b,a){if(!this.requiresSlot(a.slot,b))return!1;const c=b===D.RenderPass.MATERIAL_HIGHLIGHT||b===D.RenderPass.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT;if(c&&!this._hasHighlights)return!1;const f=b===D.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT,n=!(c||f);this._dataByOrigin.forEach(d=>{if(!c||d.hasHighlights){var k=(c?d.drawCommandsHighlight:f&&(d.hasOccludees||d.hasHighlights||d.hasHiddenInstances)?d.drawCommandsShadowHighlightRest:d.drawCommandsDefault)||null,l=n&&d.drawCommandsOccludees||
null;(u.isSome(k)||u.isSome(l))&&this._renderCommandData.push(new Y(d.origin,d.buffer,k,l))}});if(0===this._renderCommandData.length)return!1;const e=this._rctx;b=this._glMaterials.load(e,b);if(u.isNone(b))return this._renderCommandData.clear(),!1;const g=b.beginSlot(a);e.bindTechnique(g,this._material.parameters,a,!1);this._renderCommandData.forAll(d=>{g.bindDraw(d,a);const {buffer:k,renderCommands:l,occludeeCommands:t}=d;g.ensureAttributeLocations(k.vao);e.bindVAO(k.vao);d=g.primitiveType;u.isSome(l)&&
this._renderCommands(e,d,l);u.isSome(t)&&(g.bindPipelineState(e,a.slot,!0),this._renderCommands(e,d,t),g.bindPipelineState(e,a.slot,!1))});this._renderCommandData.clear();return!0};h._renderCommands=function(b,a,c){for(let f=0;f<c.length;f++)b.drawArrays(a,c[f].first,c[f].count)};h._removeAndRebuild=function(b,a,c,f,n){for(var e of a)b.instances.delete(e.id);var g=q.sortInstancesByRange(b.instances);b.instances.clear();a=b.buffer.size;f=b.buffer.alloc(f);e=0;for(const d of g){g=d.from*c;const k=d.to*
c;f.copy(e,g,k);d.from=e/c;e+=k-g;d.to=e/c;b.instances.set(d.id,d)}n.push(new q.BufferRange(0,f.hasNewBuffer?b.buffer.array.length:a));f.dispose();b.buffer.erase(e,n.back().to);b.holes.clear()};h._remove=function(b,a,c,f){for(const n of a){a=n.id;const e=b.instances.get(a),g=e.from*c,d=e.to*c;b.buffer.erase(g,d);b.holes.push(new q.BufferRange(e.from,e.to));b.instances.delete(a);f.push(new q.BufferRange(g,d))}I(b.holes)};h._add=function(b,a,c,f,n){if(0!==a.length){var e=this._bufferWriter,g=e.vertexBufferLayout.createView(b.buffer.array.buffer),
d=0<b.holes.length,k=Number.MAX_SAFE_INTEGER,l=Number.MIN_SAFE_INTEGER;for(const r of a){var t=u.isSome(r.transformation)?B.multiply(E,f,r.transformation):f;B.invert(x,t);const p=B.transpose(x,x);a=e.elementCount(r.data);const v=a*c;let y=U(b.holes,a);u.isNone(y)&&(y=b.buffer.size/c,b.buffer.grow(v),g=e.vertexBufferLayout.createView(b.buffer.array.buffer));e.write({transformation:t,invTranspTransformation:p},r.data,g,y);t=r.instanceParameters.visible;a=new q.Instance(r.id,y,y+a,t,!!r.instanceParameters.highlights&&
t,!!r.instanceParameters.occludees);z.assert(null==b.instances.get(r.id));b.instances.set(r.id,a);d?n.push(new q.BufferRange(a.from*c,a.to*c)):(k=Math.min(a.from,k),l=Math.max(a.to,l))}d||n.push(new q.BufferRange(k*c,l*c))}};G._createClass(m,[{key:"isEmpty",get:function(){return 0===this._dataByOrigin.size}},{key:"hasHighlights",get:function(){return this._hasHighlights}},{key:"hasOccludees",get:function(){return this._hasOccludees}},{key:"hasWater",get:function(){return!this.isEmpty&&this._material instanceof
O.WaterMaterial}},{key:"rendersOccluded",get:function(){return!this.isEmpty&&this._material.renderOccluded!==M.RenderOccludedFlag.Occlude}},{key:"test",get:function(){return{material:this._material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}}]);return m}(),T=function(m){this.origin=m;this.toAdd=[];this.toRemove=[]},V=function(m,h){this.origin=m;this.buffer=h;this.instances=new Map;this.holes=new A({deallocator:null});this.drawCommandsDirty=this.hasOccludees=this.hasHighlights=
this.hasHiddenInstances=!1},Y=function(m){function h(b,a,c,f){b=m.call(this,b)||this;b.buffer=a;b.renderCommands=c;b.occludeeCommands=f;return b}G._inheritsLoose(h,m);return h}(N.DrawParameters);const W=new A({deallocator:null}),X=C.create(),E=C.create(),x=C.create();F.MergedRenderer=Z;Object.defineProperties(F,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});