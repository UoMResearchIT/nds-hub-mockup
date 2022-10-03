// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/handleUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../support/elevationInfoUtils ../Manipulator3D ./GrabbingState ./ManipulatorState ./ManipulatorType ./settings ../visualElements/ExtendedLineVisualElement ../visualElements/LaserlineVisualElement ../visualElements/OutlineVisualElement ../../layers/graphics/GraphicState ../../webgl-engine/lib/Material".split(" "),function(v,
l,E,u,w,x,F,z,G,A,H,I,g,J,K,L,M,N){function B(a,b){const {view:d,graphic:e}=a,c=new L.OutlineVisualElement({view:d,geometry:y(e)?e.geometry:null,elevationInfo:z.getGraphicEffectiveElevationInfo(e),attached:!1});g.settings.visualElements.lineGraphics.shadowStyle.apply(c);g.settings.visualElements.lineGraphics.outline.apply(c);const k=[w.watch(()=>b.displaying,()=>{c.attached=b.displaying}),w.watch(()=>b.isDraped,h=>{c.isDraped=h}),b.on("changed",()=>c.geometry=y(e)?e.geometry:null),l.destroyHandle(c)];
c.attached=b.displaying;return{visualElement:c,remove:()=>l.handlesGroup(k).remove()}}function O(a,b,d){const {graphic:e,view:c}=a,k=[];var h=z.getGraphicEffectiveElevationInfo(e);const P="on-the-ground"===h.mode||!h.offset&&"absolute-height"!==h.mode,m=new H.ManipulatorState,n=new J.ExtendedLineVisualElement({view:c,extensionType:g.settings.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:N.RenderOccludedFlag.OccludeAndTransparent});g.settings.visualElements.pointGraphics.shadowStyle.apply(n);
h=E.deg2rad(g.settings.visualElements.heightPlaneAngleCutoff);const r=new K.LaserlineVisualElement({view:c,attached:!1,angleCutoff:h});g.settings.visualElements.heightPlane.apply(r);let C=1,D=1;const q=()=>{m.update(a);if(d.displaying&&(!P||!d.isDraped&&y(e)&&e.geometry.hasZ)){b.laserlineEnabled=!0;var f=m.grabbingState&A.GrabbingState.XY?g.settings.visualElements.laserlineAlphaMultiplier:1;f!==C&&(C=f,g.settings.visualElements.lineGraphics.shadowStyle.apply(b,f),g.settings.visualElements.pointGraphics.shadowStyle.apply(n,
f));f=m.grabbingState&A.GrabbingState.Z?g.settings.visualElements.laserlineAlphaMultiplier:1;f!==D&&(D=f,g.settings.visualElements.heightPlane.apply(r,f));f=1===m.numSelected?m.firstSelected:1<m.numSelected&&u.isSome(m.firstGrabbedXY)?m.firstGrabbedXY:null;u.isSome(f)?(n.setStartEndFromWorldDownAtLocation(f.renderLocation),n.attached=!0):n.attached=!1;Q(a,b,r,m)}else b.laserlineEnabled=!1,n.attached=!1,r.attached=!1};g.settings.visualElements.zVerticalLine.apply(n);k.push(d.on("changed",q),w.watch(()=>
d.displaying,q),b.events.on("attachment-origin-changed",q),l.destroyHandle(n),l.destroyHandle(r));const t=[];h=()=>{l.handlesGroup(t).remove();t.length=0;a.forEachManipulator(f=>t.push(f.events.on("grab-changed",q)));a.forEachManipulator(f=>t.push(f.events.on("select-changed",q)));q()};h();k.push(a.onManipulatorsChanged(h),l.refHandle(()=>l.handlesGroup(t)));return l.handlesGroup(k)}function Q(a,b,d,e){if(0<e.numSelected){x.set(p,0,0,0);let c=0;a.forEachManipulator((k,h)=>{h===I.ManipulatorType.TRANSLATE_XY&&
k.selected&&k instanceof G.Manipulator3D&&(x.add(p,p,k.renderLocation),c++)});0<c?(d.heightManifoldTarget=x.scale(p,p,1/c),d.attached=!0):d.attached=!1}else b=b.attachmentOrigin,u.isSome(b)&&a.view.renderCoordsHelper.toRenderCoords(b,p)?(d.heightManifoldTarget=p,d.attached=!0):d.attached=!1}function y(a){return u.isSome(a.geometry)&&("polygon"===a.geometry.type||"polyline"===a.geometry.type)}const p=F.create();v.createGeometryRepresentationVisualElement=B;v.createVisualElements=function(a){const {view:b,
graphic:d}=a,e=new M.GraphicState({graphic:d}),c=B(a,e);a=O(a,c.visualElement,e);const k=[c,a,b.maskOccludee(d),b.trackGraphicState(e)];return{visualElement:c.visualElement,remove:()=>l.handlesGroup(k).remove()}};Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});