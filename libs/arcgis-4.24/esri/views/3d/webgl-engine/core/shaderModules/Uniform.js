// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe","../shaderTechnique/BindType"],function(b,c,d){let l=function(){function e(a,h,f,g,k=null){this.name=a;this.type=h;this.arraySize=k;this.bind={[d.BindType.Pass]:null,[d.BindType.Draw]:null};c.isSome(f)&&c.isSome(g)&&(this.bind[f]=g)}e.prototype.equals=function(a){return this.type===a.type&&this.name===a.name&&this.arraySize===a.arraySize};return e}();b.Uniform=l;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});