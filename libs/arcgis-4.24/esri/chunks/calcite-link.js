// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom","./interactive","./icon"],function(d,b,e,h,k){function f(){"undefined"!==typeof customElements&&["calcite-link","calcite-icon"].forEach(a=>{switch(a){case "calcite-link":customElements.get(a)||customElements.define(a,g);break;case "calcite-icon":customElements.get(a)||k.defineCustomElement()}})}const g=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.download=this.disabled=!1;this.storeTagRef=
a=>{this.childEl=a}}componentDidRender(){h.updateHostInteraction(this)}render(){const {download:a,el:l}=this,m=e.getElementDir(l),c=this.href?"a":"span",n=b.h("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),p=b.h("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return b.h(b.Host,{role:"presentation"},b.h(c,
{class:{[e.CSS_UTILITY.rtl]:"rtl"===m},download:"a"!==c||""!==a&&!a?null:a,href:"a"===c&&this.href,ref:this.storeTagRef,rel:"a"===c&&this.rel,role:"span"===c?"link":null,tabIndex:"span"===c?0:null,target:"a"===c&&this.target},this.iconStart?n:null,b.h("slot",null),this.iconEnd?p:null))}async setFocus(){e.focusElement(this.childEl)}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline}:host a,:host span{position:relative;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-icon{width:1em;height:1em;min-width:unset;min-height:unset}.calcite-link--icon{vertical-align:text-top;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;margin-top:0.125rem}:host .calcite-link--icon.icon-start{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-ui-text-link);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;line-height:inherit;white-space:initial;background-image:-webkit-gradient(linear, left top, left bottom, from(currentColor), to(currentColor)), -webkit-gradient(linear, left top, left bottom, from(var(--calcite-link-blue-underline)), to(var(--calcite-link-blue-underline)));background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position:0% 100%, 100% 100%;background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"}},
[1,"calcite-link",{disabled:[516],download:[520],href:[513],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],rel:[1],target:[1],setFocus:[64]}]);f();d.CalciteLink=g;d.defineCustomElement=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});