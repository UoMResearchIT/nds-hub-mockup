// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./guid ./utils2 ./conditionalSlot ./interactive ./icon".split(" "),function(e,b,f,m,g,h,n,p){function k(){"undefined"!==typeof customElements&&["calcite-combobox-item","calcite-icon"].forEach(a=>{switch(a){case "calcite-combobox-item":customElements.get(a)||customElements.define(a,l);break;case "calcite-icon":customElements.get(a)||p.defineCustomElement()}})}const l=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();
this.calciteComboboxItemChange=b.createEvent(this,"calciteComboboxItemChange",7);this.active=this.selected=this.disabled=!1;this.guid=m.guid();this.scale="m";this.itemClickHandler=a=>{a.preventDefault();this.disabled||(this.selected=!this.selected)}}selectedWatchHandler(){this.calciteComboboxItemChange.emit(this.el)}connectedCallback(){this.ancestors=g.getAncestors(this.el);this.scale=f.getElementProp(this.el,"scale",this.scale);h.connectConditionalSlotComponent(this)}disconnectedCallback(){h.disconnectConditionalSlotComponent(this)}componentDidRender(){n.updateHostInteraction(this)}async toggleSelected(a){this.disabled||
(this.selected="boolean"===typeof a?a:!this.selected)}renderIcon(a){const {icon:c,disabled:d,selected:q}=this;return!a||c||d?b.h("calcite-icon",{class:{["icon"]:!c,["icon--custom"]:!!c,["icon--active"]:c&&q,["icon--indent"]:!0},icon:c||(d?"circle-disallowed":a?"dot":"check"),scale:"s"}):b.h("span",{class:{["icon"]:!0,["icon--dot"]:!0,["icon--indent"]:!0}})}renderChildren(){return f.getSlotted(this.el)?b.h("ul",{key:"default-slot-container"},b.h("slot",null)):null}render(){const a="single"===f.getElementProp(this.el,
"selection-mode","multi"),c={["label"]:!0,["label--selected"]:this.selected,["label--active"]:this.active,["label--single"]:a},d=g.getDepth(this.el);return b.h(b.Host,{"aria-hidden":"true"},b.h("div",{class:`container scale--${this.scale}`,style:{"--calcite-combobox-item-spacing-indent-multiplier":`${d}`}},b.h("li",{class:c,id:this.guid,onClick:this.itemClickHandler},this.renderIcon(a),b.h("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return this}static get watchers(){return{selected:["selectedWatchHandler"]}}static get style(){return'@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0px;outline:2px solid transparent;outline-offset:2px}.label{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;min-width:100%;cursor:pointer;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;padding:var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.icon{display:-ms-inline-flexbox;display:inline-flex;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{-webkit-padding-start:var(--calcite-combobox-item-indent-value);padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-top:-1px;color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;min-width:var(--calcite-combobox-item-spacing-unit-l)}.icon--dot:before{text-align:start;content:"\u2022"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}'}},
[1,"calcite-combobox-item",{disabled:[516],selected:[1540],active:[4],ancestors:[1040],guid:[1],icon:[1],textLabel:[513,"text-label"],value:[8],constant:[516],toggleSelected:[64]}]);k();e.CalciteComboboxItem=l;e.defineCustomElement=k;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});