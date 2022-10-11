// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../intl/date","../../intl/locale"],function(g,t,l,u){function h(a){const c=[/\u0660/g,/\u0661/g,/\u0662/g,/\u0663/g,/\u0664/g,/\u0665/g,/\u0666/g,/\u0667/g,/\u0668/g,/\u0669/g];for(let b=0;10>b;b++)a=a.replace(c[b],b.toString());return Number(a)}function m(a){return new t(`could not parse date input, expecting the following format: ${l.formatDate(Date.now(),a)}`)}function n(a){a=a.toLowerCase();if(e[a])return e[a];if(v)try{const c=(new Intl.Locale(a)).weekInfo.firstDay;
return e[a]=c}catch{}a=u.getLanguage(a);return e[a]?e[a]:7}const e={ar:6,"ar-dz":6,"ar-kw":6,"ar-ly":6,"ar-ma":1,"ar-sa":7,"ar-tn":1,bg:1,bs:1,ca:1,cs:1,da:1,de:1,"de-at":1,"de-ch":1,el:1,"en-au":1,"en-ca":7,"en-gb":1,"en-ie":1,"en-il":7,"en-in":7,"en-nz":1,"en-sg":7,es:1,"es-do":7,"es-mx":7,"es-us":7,et:1,fi:1,fr:1,"fr-ca":7,"fr-ch":1,he:7,hr:1,hu:1,id:7,it:1,"it-ch":1,ja:7,ko:7,lt:1,lv:1,nb:1,nl:1,"nl-be":1,pl:1,pt:7,"pt-br":7,ro:1,ru:1,sk:1,sl:1,sr:1,"sr-cyrl":1,sv:1,th:7,tr:1,uk:1,vi:1,"zh-cn":7,
"zh-hk":7,"zh-mo":7,"zh-tw":7},v="Locale"in Intl&&"weekInfo"in Intl.Locale.prototype;g.getFirstDayOfWeek=n;g.getLocaleDayOfWeek=function(a,c){return(c+7-n(a))%7};g.parseDateIntoParts=function(a,c){var b=l.getDateTimeFormatter(c),f=Date.now();f=b.formatToParts(f);const p=new Set;f.filter(({type:d})=>"literal"===d).forEach(({value:d})=>p.add(d));let k=0;for(b={};0<f.length;){const {type:d,value:w}=f.shift();for(let q=0;q<w.length;q++,k++){const r=a.charAt(k);if(p.has(r)){k++;break}if("literal"===d)break;
b[d]||(b[d]=[]);b[d].push(r)}}a={};try{a.day=h(b.day.join("")),a.month=h(b.month.join("")),a.year=h((b.year||b.relatedYear).join(""))}catch(d){throw m(c);}if(isNaN(a.day)||isNaN(a.month)||isNaN(a.year))throw m(c);return a};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});