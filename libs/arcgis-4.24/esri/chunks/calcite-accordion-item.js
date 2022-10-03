// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom","./guid","./icon"],function(e,a,c,k,l){function f(){"undefined"!==typeof customElements&&["calcite-accordion-item","calcite-icon"].forEach(b=>{switch(b){case "calcite-accordion-item":customElements.get(b)||customElements.define(b,g);break;case "calcite-icon":customElements.get(b)||l.defineCustomElement()}})}const g=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteAccordionItemKeyEvent=
a.createEvent(this,"calciteAccordionItemKeyEvent",7);this.calciteAccordionItemSelect=a.createEvent(this,"calciteAccordionItemSelect",7);this.calciteAccordionItemClose=a.createEvent(this,"calciteAccordionItemClose",7);this.calciteAccordionItemRegister=a.createEvent(this,"calciteAccordionItemRegister",7);this.active=!1;this.guid=k.guid();this.iconPosition="end";this.itemHeaderClickHandler=()=>this.emitRequestedItem()}connectedCallback(){this.parent=this.el.parentElement;this.selectionMode=c.getElementProp(this.el,
"selection-mode","multi");this.iconType=c.getElementProp(this.el,"icon-type","chevron");this.iconPosition=c.getElementProp(this.el,"icon-position",this.iconPosition)}componentDidLoad(){this.itemPosition=this.getItemPosition();this.calciteAccordionItemRegister.emit({parent:this.parent,position:this.itemPosition})}render(){const b=c.getElementDir(this.el),m=a.h("calcite-icon",{class:"accordion-item-icon",icon:this.icon,scale:"s"});var {guid:d}=this;const h=`${d}-region`;d=`${d}-button`;return a.h(a.Host,
{tabindex:"0"},a.h("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},a.h("div",{"aria-controls":h,class:{"accordion-item-header":!0,[c.CSS_UTILITY.rtl]:"rtl"===b},id:d,onClick:this.itemHeaderClickHandler,role:"button"},this.icon?m:null,a.h("div",{class:"accordion-item-header-text"},a.h("span",{class:"accordion-item-title"},this.itemTitle),this.itemSubtitle?a.h("span",{class:"accordion-item-subtitle"},this.itemSubtitle):null),a.h("calcite-icon",{class:"accordion-item-expand-icon",
icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.active?"minus":"plus",scale:"s"})),a.h("div",{"aria-expanded":c.toAriaBoolean(this.active),"aria-labelledby":d,class:"accordion-item-content",id:h,role:"region"},a.h("slot",null))))}keyDownHandler(b){if(b.target===this.el)switch(b.key){case " ":case "Enter":this.emitRequestedItem();b.preventDefault();break;case "ArrowUp":case "ArrowDown":case "Home":case "End":this.calciteAccordionItemKeyEvent.emit({parent:this.parent,
item:b}),b.preventDefault()}}updateActiveItemOnChange(b){this.requestedAccordionItem=b.detail.requestedAccordionItem;this.el.parentNode===this.requestedAccordionItem.parentNode&&this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case "multi":this.el===this.requestedAccordionItem&&(this.active=!this.active);break;case "single":this.active=this.el===this.requestedAccordionItem?!this.active:!1;break;case "single-persist":this.active=this.el===this.requestedAccordionItem}}emitRequestedItem(){this.calciteAccordionItemSelect.emit({requestedAccordionItem:this.el})}getItemPosition(){return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"),
this.el)}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .accordion-item-header{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .accordion-item-header{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction)}:host .accordion-item-icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-end);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .accordion-item-content{display:none;padding-top:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .accordion-item-expand-icon{color:var(--calcite-ui-text-3);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-end);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active]) .calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{margin-top:0px;margin-bottom:0px;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;padding-top:0px;padding-bottom:0px;text-align:initial;-webkit-margin-end:auto;margin-inline-end:auto}:host .accordion-item-title,:host .accordion-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .accordion-item-subtitle{margin-top:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:hover) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:hover) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:focus) .accordion-item-title,:host(:active) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:active) .accordion-item-icon,:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:active) .accordion-item-expand-icon,:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:active) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}"}},
[1,"calcite-accordion-item",{active:[1540],itemTitle:[1,"item-title"],itemSubtitle:[1,"item-subtitle"],icon:[513]},[[0,"keydown","keyDownHandler"],[16,"calciteAccordionChange","updateActiveItemOnChange"]]]);f();e.CalciteAccordionItem=g;e.defineCustomElement=f;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});