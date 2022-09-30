// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../geometry/support/aaBoundingRect","./TileCache","./TileCoverage","./TileKey"],function(x,F,B,G){const m=new G(0,0,0,0),e=new Map,n=[],t=[];return function(){function C(a){this._previousScale=Number.POSITIVE_INFINITY;this.cachePolicy="keep";this.coveragePolicy="closest";this.resampling=!0;this.tileIndex=new Map;this.tiles=[];this.buffer=192;this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;this.resampling=null==a.resampling||!!a.resampling;
a.cachePolicy&&(this.cachePolicy=a.cachePolicy);a.coveragePolicy&&(this.coveragePolicy=a.coveragePolicy);null!=a.buffer&&(this.buffer=a.buffer);a.cacheSize&&(this._tileCache=new F(a.cacheSize,this.tileInfoView,d=>{this.releaseTile(d)}))}var p=C.prototype;p.destroy=function(){this.tileIndex.clear()};p.update=function(a){const {resampling:d,tileIndex:b}=this,f=this.tileInfoView.getTileCoverage(a.state,this.buffer,this.coveragePolicy);t.length=0;n.length=0;e.clear();if(f){var {minScale:u,maxScale:H}=
this.tileInfoView.tileInfo,{spans:D,lodInfo:y}=f,{level:q}=y,{scale:v,center:I,resolution:J}=a.state,z=!a.stationary&&v>this._previousScale;this._previousScale=v;this.tiles.length=0;if(!d&&(v>u||v<H))return this.tiles.length=0,e.clear(),b.forEach(c=>{this.releaseTile(c)}),b.clear(),t.length=0,n.length=0,e.clear(),B.pool.release(f),!0;b.forEach(c=>c.visible=!0);var A=a=0;if(0<D.length)for(const {row:c,colFrom:h,colTo:w}of D)for(let k=h;k<=w;k++){a++;const g=m.set(q,c,y.normalizeCol(k),y.getWorldForColumn(k)).id;
if(b.has(g)){var l=b.get(g);l.isReady?(e.set(g,l),A++):z||this._addParentTile(g,e)}else{if(this._tileCache&&this._tileCache.has(g)){if(l=this._tileCache.pop(g),this.tileIndex.set(g,l),l.isReady){e.set(g,l);A++;continue}}else l=this.acquireTile(m),this.tileIndex.set(g,l);z||this._addParentTile(g,e)}}var E=A===a;b.forEach((c,h)=>{m.set(h);if(!e.has(h)){var w=this.tileInfoView.intersects(f,m),k="purge"===this.cachePolicy?m.level!==q:m.level>q;!w||!z&&E?!k&&w||n.push(h):c.isReady?k&&"purge"===this.cachePolicy&&
this._hasReadyAncestor(m,q)?n.push(h):t.push(h):k&&n.push(h)}});for(var r of t)(a=b.get(r))&&a.isReady&&e.set(r,a);for(const c of n)r=b.get(c),this._tileCache?this._tileCache.add(r):this.releaseTile(r),b.delete(c);e.forEach(c=>this.tiles.push(c));b.forEach(c=>{e.has(c.key.id)||(c.visible=!1)});this._tileCache&&this._tileCache.prune(q,I,J);B.pool.release(f);e.clear();return E}};p.clear=function(a=!0){const {tileIndex:d}=this;a&&d.forEach(b=>{this.releaseTile(b)});d.clear()};p.updateCacheSize=function(a){this._tileCache&&
(this._tileCache.maxSize=a)};p._addParentTile=function(a,d){let b=null;for(;;){a=this.tileInfoView.getTileParentId(a);if(!a)break;if(this.tileIndex.has(a)){if((b=this.tileIndex.get(a))&&b.isReady){d.has(b.key.id)||d.set(b.key.id,b);break}}else if(this._tileCache&&this._tileCache.has(a)&&(b=this._tileCache.pop(a),this.tileIndex.set(a,b),b&&b.isReady)){d.has(b.key.id)||d.set(b.key.id,b);break}}};p._hasReadyAncestor=function(a,d){const b=x.create();this.tileInfoView.getTileBounds(b,a,!0);for(const f of this.tileIndex.values())if(f.isReady&&
f.key.level>=d&&f.key.level<a.level){const u=x.create();this.tileInfoView.getTileBounds(u,f.key,!0);if(x.contains(u,b))return!0}return!1};return C}()});