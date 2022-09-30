// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(k,h){var d={exports:{}};(function(f,g){(function(a){a=a(h.commonjsRequire,g);void 0!==a&&(f.exports=a)})(function(a,c){Object.defineProperty(c,"__esModule",{value:!0});c.default={_decimalSeparator:",",_thousandSeparator:" ",_big_number_suffix_3:"k",_big_number_suffix_6:"M",_big_number_suffix_9:"G",_big_number_suffix_12:"T",_big_number_suffix_15:"P",_big_number_suffix_18:"E",_big_number_suffix_21:"Z",_big_number_suffix_24:"Y",_small_number_suffix_3:"m",
_small_number_suffix_6:"\u03bc",_small_number_suffix_9:"n",_small_number_suffix_12:"p",_small_number_suffix_15:"f",_small_number_suffix_18:"a",_small_number_suffix_21:"z",_small_number_suffix_24:"y",_byte_suffix_B:"B",_byte_suffix_KB:"KB",_byte_suffix_MB:"MB",_byte_suffix_GB:"GB",_byte_suffix_TB:"TB",_byte_suffix_PB:"PB",_date_millisecond:"mm:ss SSS",_date_second:"HH:mm:ss",_date_minute:"HH:mm",_date_hour:"HH:mm",_date_day:"dd MMM",_date_week:"ww",_date_month:"MMM",_date_year:"yyyy",_duration_millisecond:"SSS",
_duration_millisecond_second:"ss.SSS",_duration_millisecond_minute:"mm:ss SSS",_duration_millisecond_hour:"hh:mm:ss SSS",_duration_millisecond_day:"d'd' mm:ss SSS",_duration_millisecond_week:"d'd' mm:ss SSS",_duration_millisecond_month:"M'm' dd'd' mm:ss SSS",_duration_millisecond_year:"y'y' MM'm' dd'd' mm:ss SSS",_duration_second:"ss",_duration_second_minute:"mm:ss",_duration_second_hour:"hh:mm:ss",_duration_second_day:"d'd' hh:mm:ss",_duration_second_week:"d'd' hh:mm:ss",_duration_second_month:"M'm' dd'd' hh:mm:ss",
_duration_second_year:"y'y' MM'm' dd'd' hh:mm:ss",_duration_minute:"mm",_duration_minute_hour:"hh:mm",_duration_minute_day:"d'd' hh:mm",_duration_minute_week:"d'd' hh:mm",_duration_minute_month:"M'm' dd'd' hh:mm",_duration_minute_year:"y'y' MM'm' dd'd' hh:mm",_duration_hour:"hh'h'",_duration_hour_day:"d'd' hh'h'",_duration_hour_week:"d'd' hh'h'",_duration_hour_month:"M'm' dd'd' hh'h'",_duration_hour_year:"y'y' MM'm' dd'd' hh'h'",_duration_day:"d'd'",_duration_day_week:"d'd'",_duration_day_month:"M'm' dd'd'",
_duration_day_year:"y'y' MM'm' dd'd'",_duration_week:"w'w'",_duration_week_month:"w'w'",_duration_week_year:"w'w'",_duration_month:"M'm'",_duration_month_year:"y'y' MM'm'",_duration_year:"y'y'",_era_ad:"AD",_era_bc:"BC",A:"A",P:"P",AM:"AM",PM:"PM","A.M.":"A.M.","P.M.":"P.M.",January:"Janvier",February:"F\u00e9vrier",March:"Mars",April:"Avril",May:"Mai",June:"Juin",July:"Juillet",August:"Ao\u00fbt",September:"Septembre",October:"Octobre",November:"Novembre",December:"D\u00e9cembre",Jan:"Jan",Feb:"F\u00e9v",
Mar:"Mar",Apr:"Avr","May(short)":"Mai",Jun:"Jui",Jul:"Jul",Aug:"Ao\u00fb",Sep:"Sep",Oct:"Oct",Nov:"Nov",Dec:"D\u00e9c",Sunday:"Dimanche",Monday:"Lundi",Tuesday:"Mardi",Wednesday:"Mercredi",Thursday:"Jeudi",Friday:"Vendredi",Saturday:"Samedi",Sun:"Dim",Mon:"Lun",Tue:"Mar",Wed:"Mer",Thu:"Jeu",Fri:"Ven",Sat:"Sam",_dateOrd:function(b){var e="e";if(11>b||13<b)switch(b%10){case 1:e="er"}return e},"Zoom Out":"Zoom Arri\u00e8re",Play:"Joue",Stop:"Arr\u00eate",Legend:"L\u00e9gende","Click, tap or press ENTER to toggle":"cliquez, appuyez ou appuyez sur entr\u00e9e pour basculer",
Loading:"Charger",Home:"Accueil",Chart:"Graphique","Serial chart":"Graphique s\u00e9rial","X/Y chart":"Graphique X/Y","Pie chart":"Camembert","Gauge chart":"Jauge graphique","Radar chart":"Carte radar","Sankey diagram":"Graphique Sankey","Flow diagram":"repr\u00e9sentation sch\u00e9matique","Chord diagram":"diagramme d'accord","TreeMap chart":"carte de l'arbre","Sliced chart":"graphique en tranches",Series:"S\u00e9ries","Candlestick Series":"S\u00e9ries chandelier","OHLC Series":"S\u00e9ries OHLC",
"Column Series":"S\u00e9ries de colonnes","Line Series":"S\u00e9rie de lignes","Pie Slice Series":"Tarte tranche S\u00e9ries","Funnel Series":"S\u00e9ries d'entonnoir","Pyramid Series":"S\u00e9ries pyramidale","X/Y Series":"S\u00e9ries X/Y",Map:"Mappe","Press ENTER to zoom in":"Appuyez sur ENTER pour zoomer","Press ENTER to zoom out":"Appuyez sur ENTER pour effectuer un zoom arri\u00e8re","Use arrow keys to zoom in and out":"Utilisez les touches fl\u00e9ch\u00e9es pour zoomer et d\u00e9zoomer","Use plus and minus keys on your keyboard to zoom in and out":"Utilisez les touches plus et moins de votre clavier pour effectuer un zoom avant ou arri\u00e8re",
Export:"Exporter",Image:"Image",Data:"Data",Print:"Imprimer","Click, tap or press ENTER to open":"Cliquez, appuyez ou appuyez sur ENTER pour ouvrir","Click, tap or press ENTER to print.":"Cliquez, appuyez ou appuyez sur ENTER pour imprimer","Click, tap or press ENTER to export as %1.":"Cliquez, appuyez ou appuyez sur ENTER pour exporter comme %1",'To save the image, right-click this link and choose "Save picture as..."':"Pour enregistrer l'image, cliquez avec le bouton droit sur ce lien et choisissez 'Enregistrer l'image sous ...'",
'To save the image, right-click thumbnail on the left and choose "Save picture as..."':"'Pour enregistrer l'image, cliquez sur la vignette \u00e0 gauche avec le bouton droit de la souris et choisissez 'Enregistrer l'image sous ...'","(Press ESC to close this message)":"(Appuyez sur ESC pour fermer ce message)","Image Export Complete":"Exportation d'image termin\u00e9e","Export operation took longer than expected. Something might have gone wrong.":"L'exportation a pris plus de temps que pr\u00e9vu. Quelque chose aurait mal tourn\u00e9.",
"Saved from":"Enregistr\u00e9 de",PNG:"",JPG:"",GIF:"",SVG:"",PDF:"",JSON:"",CSV:"",XLSX:"","Use TAB to select grip buttons or left and right arrows to change selection":"Utilisez la touche TAB pour s\u00e9lectionner les boutons des poign\u00e9es ou les fl\u00e8ches gauche et droite pour modifier la s\u00e9lection.","Use left and right arrows to move selection":"Utilisez les fl\u00e8ches gauche et droite pour d\u00e9placer la s\u00e9lection","Use left and right arrows to move left selection":"Utilisez les fl\u00e8ches gauche et droite pour d\u00e9placer la s\u00e9lection gauche",
"Use left and right arrows to move right selection":"Utilisez les fl\u00e8ches gauche et droite pour d\u00e9placer la s\u00e9lection droite","Use TAB select grip buttons or up and down arrows to change selection":"Utilisez les boutons de s\u00e9lection TAB ou les fl\u00e8ches vers le haut et le bas pour modifier la s\u00e9lection.","Use up and down arrows to move selection":"Utilisez les fl\u00e8ches haut et bas pour d\u00e9placer la s\u00e9lection","Use up and down arrows to move lower selection":"Utilisez les fl\u00e8ches haut et bas pour d\u00e9placer la s\u00e9lection inf\u00e9rieure",
"Use up and down arrows to move upper selection":"Utilisez les fl\u00e8ches haut et bas pour d\u00e9placer la s\u00e9lection sup\u00e9rieure","From %1 to %2":"De %1 \u00e0 %2","From %1":"De %1","To %1":"\u00e0 %1","No parser available for file: %1":"Aucun analyseur disponible pour le fichier: %1","Error parsing file: %1":"Erreur d'analyse du fichier: %1","Unable to load file: %1":"Impossible de charger le fichier: %1","Invalid date":"Date invalide"}})})(d,d.exports);d=function(f,g){for(var a=0;a<
g.length;a++){const c=g[a];if("string"!==typeof c&&!Array.isArray(c))for(const b in c)if("default"!==b&&!(b in f)){const e=Object.getOwnPropertyDescriptor(c,b);e&&Object.defineProperty(f,b,e.get?e:{enumerable:!0,get:()=>c[b]})}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:h.getDefaultExportFromCjs(d.exports)},[d.exports]);k.fr_FR=d});