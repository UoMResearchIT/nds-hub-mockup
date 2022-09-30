// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","./byteStreamUtils"],function(r,q){function t(h){var b=h.fields;h=h.records;const c=b.some(a=>"oid"===a.name.toLowerCase())?"OBJECTID":"OID";b=[{name:c,type:"esriFieldTypeOID",alias:"OID"}].concat(b.map(a=>({name:a.name,type:"esriFieldType"+a.typeName,alias:a.name})));const d=b.map(a=>a.name),k=[];let l=0,e=0;h.forEach(a=>{const f={};f[c]=l++;for(e=1;e<d.length;e++)f[d[e]]=a[e-1];k.push({attributes:f})});return{displayFieldName:"",fields:b,features:k}}
return function(){function h(){}h.parse=function(b){var c=new DataView(b),d=c.getUint8(0)&3;if(3!==d)return{header:{version:d},recordSet:null};const k=c.getUint32(4,!0);var l=c.getUint16(8,!0);const e=c.getUint16(10,!0);l={version:d,recordCount:k,headerByteCount:l,recordByteCount:e};let a=32;const f=[],n=[];if(3===d){for(;13!==c.getUint8(a);)d=String.fromCharCode(c.getUint8(a+11)).trim(),f.push({name:q.bytesToUTF8(new Uint8Array(b,a,11)),type:d,typeName:"String Date Double Boolean String Integer".split(" ")["CDFLMN".split("").indexOf(d)],
length:c.getUint8(a+16)}),a+=32;a+=1;if(0<f.length)for(;n.length<k&&b.byteLength-a>e;){const m=[];32===c.getUint8(a)?(a+=1,f.forEach(g=>{if("C"===g.type)m.push(q.bytesToUTF8(new Uint8Array(b,a,g.length)).trim());else if("N"===g.type)m.push(parseInt(String.fromCharCode.apply(null,new Uint8Array(b,a,g.length)).trim(),10));else if("F"===g.type)m.push(parseFloat(String.fromCharCode.apply(null,new Uint8Array(b,a,g.length)).trim()));else if("D"===g.type){const p=String.fromCharCode.apply(null,new Uint8Array(b,
a,g.length)).trim();m.push(new Date(parseInt(p.substring(0,4),10),parseInt(p.substring(4,6),10)-1,parseInt(p.substring(6,8),10)))}a+=g.length}),n.push(m)):a+=e}}c=t({fields:f,records:n});return{header:l,fields:f,records:n,recordSet:c}};r._createClass(h,null,[{key:"supportedVersions",get:function(){return[5]}}]);return h}()});