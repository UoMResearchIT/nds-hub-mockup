// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../layers/graphics/dehydratedFeatures","../../../../layers/graphics/dehydratedFeatureComparison"],function(h,k,l,m){l=function(){function f(a,c){this.highestResolutionVersion=null;this.versions=[];this.ref(a,c)}var g=f.prototype;g.ref=function(a,c){const d=this.feature;b.oldVersion=d;this.feature&&Object.defineProperty(a,"uid",{value:this.feature.uid,configurable:!0});for(var e of this.versions)if(e.resolution===c){e.refCount++;
if((c=this.highestResolutionVersion===e&&!m.equals(a,e.feature))||this.highestResolutionVersion!==e)e.feature=a;b.newVersion=c?a:d;return b}e={feature:a,resolution:c,refCount:1};this.versions.push(e);!this.highestResolutionVersion||c<this.highestResolutionVersion.resolution?(b.newVersion=a,this.highestResolutionVersion=e):b.newVersion=d;return b};g.unref=function(a){for(let c=0;c<this.versions.length;c++){const d=this.versions[c];if(d.resolution===a)return d.refCount--,b.oldVersion=this.feature,0===
d.refCount&&(this.versions[c]=this.versions[this.versions.length-1],this.versions.length--,this.highestResolutionVersion===d&&(this._recalculateHighestResolutionVersion(),b.oldVersion=d.feature)),b.newVersion=this.feature,b}return null};g._recalculateHighestResolutionVersion=function(){if(0===this.versions.length)this.highestResolutionVersion=null;else{var a=this.versions[0];for(let c=1;c<this.versions.length;c++){const d=this.versions[c];d.resolution<a.resolution&&(a=d)}this.highestResolutionVersion=
a}};k._createClass(f,[{key:"isReferenced",get:function(){return 0!==this.versions.length}},{key:"isSingle",get:function(){return 1===this.versions.length&&1===this.versions[0].refCount}},{key:"feature",get:function(){return this.highestResolutionVersion?this.highestResolutionVersion.feature:null}}]);return f}();let n=function(){function f(a){this._feature=a;this.refCount=1}var g=f.prototype;g.ref=function(a){++this.refCount;b.oldVersion=this._feature;this.feature&&Object.defineProperty(a,"uid",{value:this.feature.uid,
configurable:!0});m.equals(this._feature,a)||(this._feature=a);b.newVersion=this._feature;return b};g.unref=function(){b.oldVersion=this._feature;if(0<this.refCount&&(this.refCount--,!this.isReferenced))return b.newVersion=null,b;b.newVersion=this._feature;return b};k._createClass(f,[{key:"isReferenced",get:function(){return 0!==this.refCount}},{key:"isSingle",get:function(){return 1===this.refCount}},{key:"feature",get:function(){return this._feature}}]);return f}();const b={oldVersion:null,newVersion:null};
h.MultiFeatureReference=l;h.SingleFeatureReference=n;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});