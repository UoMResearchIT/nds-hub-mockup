// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./popper ./guid ./dom ./Heading ./action ./icon ./loader".split(" "),function(n,d,f,t,l,u,v,w,x){function p(){"undefined"!==typeof customElements&&["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(a=>{switch(a){case "calcite-popover":customElements.get(a)||customElements.define(a,q);break;case "calcite-action":customElements.get(a)||v.defineCustomElement();break;case "calcite-icon":customElements.get(a)||w.defineCustomElement();break;case "calcite-loader":customElements.get(a)||
x.defineCustomElement()}})}class y{constructor(){this.registeredElements=new WeakMap;this.registeredElementCount=0;this.queryPopover=a=>{const {registeredElements:b}=this;a=a.find(c=>b.has(c));return b.get(a)};this.clickHandler=a=>{const b=a.composedPath(),c=this.queryPopover(b);c?c.toggle():l.queryElementsRoots(a.target,"calcite-popover").filter(e=>e.autoClose&&e.open&&!b.includes(e)).forEach(e=>e.toggle(!1))}}registerElement(a,b){this.registeredElementCount++;this.registeredElements.set(a,b);1===
this.registeredElementCount&&this.addListeners()}unregisterElement(a){this.registeredElements.delete(a)&&this.registeredElementCount--;0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0})}}const r=new y,q=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calcitePopoverClose=
d.createEvent(this,"calcitePopoverClose",7);this.calcitePopoverOpen=d.createEvent(this,"calcitePopoverOpen",7);this.disablePointer=this.disableFlip=this.dismissible=this.closeButton=this.autoClose=!1;this.offsetDistance=f.defaultOffsetDistance;this.offsetSkidding=0;this.open=!1;this.overlayPositioning="absolute";this.placement="auto";this.intlClose="Close";this.guid=`calcite-popover-${t.guid()}`;this.activeTransitionProp="opacity";this.setFilteredPlacements=()=>{const {el:a,flipPlacements:b}=this;
this.filteredFlipPlacements=b?f.filterComputedPlacements(b,a):null};this.setUpReferenceElement=()=>{this.removeReferences();this.effectiveReferenceElement=this.getReferenceElement();const {el:a,referenceElement:b,effectiveReferenceElement:c}=this;b&&!c&&console.warn(`${a.tagName}: reference-element id "${b}" was not found.`,{el:a});this.addReferences();this.createPopper()};this.getId=()=>this.el.id||this.guid;this.setExpandedAttr=()=>{const {effectiveReferenceElement:a,open:b}=this;a&&a.setAttribute("aria-expanded",
l.toAriaBoolean(b))};this.addReferences=()=>{const {effectiveReferenceElement:a}=this;if(a){var b=this.getId();a.setAttribute("aria-controls",b);r.registerElement(a,this.el);this.setExpandedAttr()}};this.removeReferences=()=>{const {effectiveReferenceElement:a}=this;a&&(a.removeAttribute("aria-controls"),a.removeAttribute("aria-expanded"),r.unregisterElement(a))};this.hide=()=>{this.open=!1};this.transitionEnd=a=>{a.propertyName===this.activeTransitionProp&&(this.open?this.calcitePopoverOpen.emit():
this.calcitePopoverClose.emit())}}flipPlacementsHandler(){this.setFilteredPlacements()}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition();this.setExpandedAttr()}placementHandler(){this.reposition()}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setFilteredPlacements()}componentWillLoad(){this.setUpReferenceElement()}componentDidLoad(){this.reposition()}disconnectedCallback(){this.removeReferences();
this.destroyPopper()}async reposition(){const {popper:a,el:b,placement:c}=this,e=this.getModifiers();a?await f.updatePopper({el:b,modifiers:e,placement:c,popper:a}):this.createPopper()}async setFocus(a){var b;const {closeButtonEl:c}=this;"close-button"===a&&c?(d.forceUpdate(c),c.setFocus()):null===(b=this.el)||void 0===b?void 0:b.focus()}async toggle(a=!this.open){this.open=a}getReferenceElement(){const {referenceElement:a,el:b}=this;return("string"===typeof a?l.queryElementRoots(b,{id:a}):a)||null}getModifiers(){const {arrowEl:a,
disableFlip:b,disablePointer:c,offsetDistance:e,offsetSkidding:g,filteredFlipPlacements:h}=this,k={name:"flip",enabled:!b};h&&(k.options={fallbackPlacements:h});const m={name:"arrow",enabled:!c};a&&(m.options={element:a});return[m,k,{name:"offset",enabled:!0,options:{offset:[g,e]}},{name:"eventListeners",enabled:this.open}]}createPopper(){this.destroyPopper();const {el:a,placement:b,effectiveReferenceElement:c,overlayPositioning:e}=this,g=this.getModifiers();this.popper=f.createPopper({el:a,modifiers:g,
overlayPositioning:e,placement:b,referenceEl:c})}destroyPopper(){const {popper:a}=this;a&&a.destroy();this.popper=null}renderCloseButton(){const {dismissible:a,closeButton:b,intlClose:c}=this;return a||b?d.h("div",{class:"close-button-container"},d.h("calcite-action",{class:"close-button",onClick:this.hide,ref:e=>this.closeButtonEl=e,text:c},d.h("calcite-icon",{icon:"x",scale:"m"}))):null}renderHeader(){const {heading:a,headingLevel:b}=this,c=a?d.h(u.Heading,{class:"heading",level:b||2},a):null;return c?
d.h("div",{class:"header"},c,this.renderCloseButton()):null}render(){const {effectiveReferenceElement:a,heading:b,label:c,open:e,disablePointer:g}=this,h=a&&e,k=!h,m=g?null:d.h("div",{class:"arrow",ref:z=>this.arrowEl=z});return d.h(d.Host,{"aria-hidden":l.toAriaBoolean(k),"aria-label":c,"calcite-hydrated-hidden":k,id:this.getId(),role:"dialog"},d.h("div",{class:{[f.CSS.animation]:!0,[f.CSS.animationActive]:h},onTransitionEnd:this.transitionEnd},m,d.h("div",{class:{["has-header"]:!!b,["container"]:!0}},
this.renderHeader(),d.h("div",{class:"content"},d.h("slot",null)),b?null:this.renderCloseButton())))}get el(){return this}static get watchers(){return{flipPlacements:["flipPlacementsHandler"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^\x3dbottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^\x3dtop]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^\x3dleft]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^\x3dright]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([data-popper-placement][data-popper-reference-hidden]){pointer-events:none;opacity:0}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^\x3dtop]) .arrow{bottom:-4px}:host([data-popper-placement^\x3dbottom]) .arrow{top:-4px}:host([data-popper-placement^\x3dleft]) .arrow{right:-4px}:host([data-popper-placement^\x3dright]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;white-space:normal;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{-ms-flex-direction:column;flex-direction:column}.content{display:-ms-flexbox;display:flex;height:100%;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-item-align:center;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex:0 0 auto;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}'}},
[1,"calcite-popover",{autoClose:[516,"auto-close"],closeButton:[516,"close-button"],dismissible:[516],disableFlip:[516,"disable-flip"],disablePointer:[516,"disable-pointer"],flipPlacements:[16],heading:[1],headingLevel:[2,"heading-level"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[1,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],intlClose:[1,"intl-close"],effectiveReferenceElement:[32],reposition:[64],
setFocus:[64],toggle:[64]}]);p();n.Popover=q;n.defineCustomElement=p});