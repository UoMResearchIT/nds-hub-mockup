// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./ReadOnlyMultiOriginJSONSupport ./accessorSupport/PropertyOrigin ./accessorSupport/utils ./accessorSupport/write ./accessorSupport/decorators/subclass".split(" "),function(k,n,p,u,v,f,m,w,q){const x=c=>{c=function(d){function g(...a){return d.call(this,...a)||this}n._inheritsLoose(g,d);var e=g.prototype;e.clear=function(a,b="user"){return m.getProperties(this).store.delete(a,f.nameToId(b))};e.write=function(a={},b){a=
a||{};w.write(this,a,b);return a};e.setAtOrigin=function(a,b,h){m.getProperties(this).setAtOrigin(a,b,f.nameToId(h))};e.removeOrigin=function(a){const b=m.getProperties(this).store;a=f.nameToId(a);const h=b.keys(a);for(const l of h)b.originOf(l)===a&&b.set(l,b.get(l,a),f.OriginId.USER)};e.updateOrigin=function(a,b){const h=m.getProperties(this).store;b=f.nameToId(b);const l=this.get(a);for(let r=b+1;r<f.OriginIdNum;++r)h.delete(a,r);h.set(a,l,b)};e.toJSON=function(a){return this.write({},a)};return g}(c);
c=p.__decorate([q.subclass("esri.core.WriteableMultiOriginJSONSupport")],c);c.prototype.toJSON.isDefaultToJSON=!0;return c},t=c=>{c=function(d){function g(...e){return d.call(this,...e)||this}n._inheritsLoose(g,d);return g}(x(v.ReadOnlyMultiOriginJSONMixin(c)));return c=p.__decorate([q.subclass("esri.core.MultiOriginJSONSupport")],c)};k.MultiOriginJSONSupport=function(c){function d(){return c.apply(this,arguments)||this}n._inheritsLoose(d,c);return d}(t(u));k.MultiOriginJSONSupport=p.__decorate([q.subclass("esri.core.MultiOriginJSONSupport")],
k.MultiOriginJSONSupport);k.MultiOriginJSONMixin=t;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});