// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(p){var n={exports:{}};(function(q){(function(h){h=h();void 0!==h&&(q.exports=h)})(function(){function h(a,c,d,e,k){for(;e>d;){if(600<e-d){var f=e-d+1,g=c-d+1,l=Math.log(f),b=.5*Math.exp(2*l/3);l=.5*Math.sqrt(l*b*(f-b)/f)*(0>g-f/2?-1:1);h(a,c,Math.max(d,Math.floor(c-g*b/f+l)),Math.min(e,Math.floor(c+(f-g)*b/f+l)),k)}f=a[c];g=d;b=e;m(a,d,c);for(0<k(a[e],f)&&m(a,d,e);g<b;){m(a,g,b);g++;for(b--;0>k(a[g],f);)g++;for(;0<k(a[b],f);)b--}0===k(a[d],f)?m(a,d,b):(b++,m(a,b,e));b<=
c&&(d=b+1);c<=b&&(e=b-1)}}function m(a,c,d){var e=a[c];a[c]=a[d];a[d]=e}function r(a,c){return a<c?-1:a>c?1:0}return function(a,c,d,e,k){h(a,c,d||0,e||a.length-1,k||r)}})})(n);p.quickselect=n.exports});