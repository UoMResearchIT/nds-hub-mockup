// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.IntersectorType=void 0;(function(a){a[a.OBJECT=0]="OBJECT";a[a.HUD=1]="HUD";a[a.TERRAIN=2]="TERRAIN";a[a.OVERLAY=3]="OVERLAY";a[a.I3S=4]="I3S";a[a.PCL=5]="PCL";a[a.LOD=6]="LOD";a[a.VOXEL=7]="VOXEL"})(b.IntersectorType||(b.IntersectorType={}));b.StoreResults=void 0;(function(a){a[a.MIN=0]="MIN";a[a.MINMAX=1]="MINMAX";a[a.ALL=2]="ALL"})(b.StoreResults||(b.StoreResults={}));b.IntersectorOptions=function(){this.verticalOffset=0;this.selectionMode=!1;this.selectOpaqueTerrainOnly=
this.hud=!0;this.invisibleTerrain=!1;this.backfacesTerrain=!0;this.isFiltered=!1;this.store=b.StoreResults.ALL};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});