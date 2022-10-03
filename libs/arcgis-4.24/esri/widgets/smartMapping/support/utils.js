// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../Color ../../../core/maybe ../../../intl/date ../../../intl/number ../../../renderers/support/utils ../../../renderers/visualVariables/SizeVariable".split(" "),function(k,r,t,v,w,x,u){k.formatDateLabel=function(a){return v.formatDate(new Date(a),x.timelineDateFormatOptions)};k.formatNumberLabel=function(a){const b=Math.floor(Math.log10(Math.abs(a)))+1;return w.formatNumber(a,{notation:1E6<=Math.abs(a)?"compact":"standard",minimumSignificantDigits:2,maximumSignificantDigits:4>
b||6<b?4:b})};k.getDeviationValues=function(a,b,d){if(t.isNone(b)||t.isNone(a))return[];const g=[];for(let c=-1*d;c<=d;c++)0!==c&&g.push(b+c*a);return g};k.getDynamicPathForSizeStops=function(a){const {max:b,min:d,padding:g,pathHeight:c,pathWidth:e,stops:f}=a,m=b-d;let h=`M0 0 L${e} 0 `,l;a=3===f.length?[f[0],f[1],f[2]]:[f[0],f[2],f[4]];const n=Math.min.apply(Math,a.map(p=>p.size)),y=Math.max(Math.abs(a[0].size-a[1].size),Math.abs(a[2].size-a[1].size));a.reverse();a.forEach(({size:p,value:q},z)=>
{q=Math.round(c-(q-d)/m*c);l=Math.round((p-n)/y*100)/100*e;0===l&&(l=g*e);0===z&&(h+=`L${l} 0 `);h+=`L${l} ${q} `});return h+=`L${l} ${c} L0 ${c} L0 0 Z`};k.getFillFromColor=function(a){return a instanceof r?a.toCss(!0):r.fromString(a).toCss(!0)};k.getPathForSizeStops=function(a){const {bottomValue:b,bottomWidth:d,max:g,min:c,pathHeight:e,pathWidth:f,topValue:m,topWidth:h}=a;a=h*f;const l=d*f,n=g-c;return`M${a} 0 L${a} ${Math.round(e-(m-c)/n*e)} L${l} ${Math.round(e-(b-c)/n*e)} L${l} ${e} L0 ${e} L0 0 Z`};
k.getSizesFromVariable=function(a){let b=a.maxSize;a=a.minSize;b instanceof u&&(b=b.stops[0].size);a instanceof u&&(a=a.stops[0].size);return[b,a]};k.getStopChanges=function(a,b,d){const g=d.length-1,c=d[0],e=d[g]-c,f=b-a,m=[];for(let h=1;h<g;h++)m.push({index:h,value:(d[h]-c)/e*f+a});m.unshift({index:0,value:a});m.push({index:g,value:b});return m};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});