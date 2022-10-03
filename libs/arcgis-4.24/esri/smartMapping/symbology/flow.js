// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../Color","./color","./support/colors","./support/symbologyUtils"],function(e,k,c,x,g){function p(a){const d=g.getRawSchemes({basemap:a.basemap,basemapTheme:a.basemapTheme,theme:r.get(a.theme||"flow-line")});if(d){var {schemesInfo:b,basemapId:h,basemapTheme:f}=d,l=b.common;return{primaryScheme:t(a,b.primary,l),secondarySchemes:b.secondary.map(q=>t(a,q,l)).filter(Boolean),basemapId:h,basemapTheme:f}}}function t(a,d,b){const h=a.theme||"flow-line",f=x[d];if(f){var l=f.stops;return{id:`${h}/${a.basemap}/${d}`,
name:f.name,tags:[...f.tags],theme:h,color:new k(b.color),colors:l.map(q=>new k(q)),density:b.density,flowSpeed:b.flowSpeed,trailLength:"wave-front"===h&&a.hasSizeVariable?2*b.trailLength:b.trailLength,trailWidth:b.trailWidth,trailCap:b.trailCap,layerEffect:b.layerEffect,minSize:b.minSize,maxSize:b.maxSize,minOpacity:.25,maxOpacity:1}}}var m=c.seqColorSets2021.concat(c.seqColorSets2019).concat(c.seqColorSetsFromPortal).concat("seq-yellow-red-purple seq-orange-red-light seq-yellow-orange-red seq-yellow-pink-purple seq-yellow-purple-blue seq-teal-lightgreen-bright seq-green-lightgray-bright seq-red-lightgray-bright seq-blue-lightgray-bright seq-orange-lightgray-bright seq-blue-red-yellow-bright seq-blue-tan-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" "));
c=c.seqColorSets2021.concat(c.seqColorSets2019).concat(c.seqColorSetsFromPortal).concat("seq-blue-lightgray-bright seq-gray-lightgreen-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-teal-lightgreen-bright seq-lightred-darkgray-bright seq-lightmagenta-darkgray-bright seq-lightblue-darkgray-bright".split(" "));
const u={color:"#4c64c9",density:.8,layerEffect:"drop-shadow(1px, 1px, 3px, rgba(0,0,0,0.75))"},v={color:"#00ffff",density:.8,layerEffect:"bloom(1.4, 0.6px, 0)"};var n={flowSpeed:10,trailLength:100,trailWidth:1,trailCap:"butt",minSize:1,maxSize:4};const w={flowSpeed:3,trailLength:.7,trailWidth:8,trailCap:"butt",minSize:4,maxSize:16};n={light:{common:{...n,...u},primary:"seq-lines-purple-brown",secondary:m.filter(a=>"seq-lines-purple-brown"!==a)},dark:{common:{...n,...v},primary:"seq-mentone-beach",
secondary:c.filter(a=>"seq-mentone-beach"!==a)}};m={light:{common:{...w,...u},primary:"seq-lines-purple-brown",secondary:m.filter(a=>"seq-lines-purple-brown"!==a)},dark:{common:{...w,...v},primary:"seq-mentone-beach",secondary:c.filter(a=>"seq-mentone-beach"!==a)}};const r=g.createThemes({themeDictionary:{"flow-line":{name:"flow-line",label:"TODO",description:"TODO",schemes:{default:n}},"wave-front":{name:"wave-front",label:"TODO",description:"TODO",schemes:{default:m}}}});e.cloneScheme=function(a){if(a)return a=
{...a},a.colors=a.colors.map(d=>new k(d)),a.tags=[...a.tags],a.color&&(a.color=new k(a.color)),a};e.getSchemeByName=function(a){return g.filterSchemesByName(a.name,p(a))};e.getSchemes=p;e.getSchemesByTag=function(a){return g.filterSchemesByTag(a.includedTags,a.excludedTags,p(a))};e.getThemes=function(a){return g.getThemesforBasemap(r,a)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});