// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Widget ../support/LayerTreeNode ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(u,k,n,l,f,z,A,v,w,x,r,g){var p;const y={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",
showSublayer:"showSublayer"},c={base:"esri-building-disciplines-tree-node",root:"esri-building-disciplines-tree-node--root",leaf:"esri-building-disciplines-tree-node--leaf",label:"esri-building-disciplines-tree-node__label",checkbox:"esri-building-disciplines-tree-node__checkbox",checkboxChecked:"esri-building-disciplines-tree-node__checkbox--checked esri-icon-check-mark",checkboxIndeterminate:"esri-building-disciplines-tree-node__checkbox--indeterminate esri-icon-minus",collapseToggle:"esri-building-disciplines-tree-node__collapse-toggle esri-icon-right",
collapseToggleCollapsed:"esri-building-disciplines-tree-node__collapse-toggle--collapsed",children:"esri-building-disciplines-tree-node__children",level:m=>`${"esri-building-disciplines-tree-node"}--level-${m}`};f=p=function(m){function q(a){var b=m.call(this,a)||this;b.messages=y;b.toggleSiblingsVisibility=!1;b._childWidgets=[];b._updateChildWidgets=()=>{b._destroyChildWidgets();b._childWidgets=b.node.children.toArray().reverse().map(d=>new p({node:d,messages:b.messages,toggleSiblingsVisibility:b.toggleSiblingsVisibility}))};
return b}u._inheritsLoose(q,m);var e=q.prototype;e.initialize=function(){this.own([n.on(()=>this.node.children,"after-changes",this._updateChildWidgets,{onListenerAdd:this._updateChildWidgets,onListenerRemove:this._updateChildWidgets}),n.watch(()=>[this.messages,this.toggleSiblingsVisibility],this._updateChildWidgets,n.initial)])};e.destroy=function(){this._destroyChildWidgets()};e.render=function(){const a=this.node,b=a.isRoot,d=a.isLeaf;return a.isDiscipline&&d?null:g.tsx("div",{key:a.id,class:this.classes(c.base,
c.level(a.level),{[c.root]:b,[c.leaf]:d}),bind:this,onkeydown:this._onKeydown,tabIndex:d?null:0,role:"treeitem","aria-expanded":a.collapsed?"false":"true"},g.tsx("label",{bind:this,class:c.label,onclick:this._onCheckboxToggle},this._renderCollapseToggle(),this._renderCheckbox(),g.tsx("span",null,a.title)),this._renderChildren(a))};e._renderCheckbox=function(){var a,b;const d=this.node.visible,h=!0===d,t=h?null==(a=this.messages)?void 0:a.hideSublayer:null==(b=this.messages)?void 0:b.showSublayer;
return g.tsx("button",{bind:this,class:this.classes(c.checkbox,{[c.checkboxChecked]:h,[c.checkboxIndeterminate]:null===d}),onclick:this._onCheckboxToggle,role:"checkbox","aria-checked":h?"true":"false","aria-label":t,title:t,type:"button"})};e._renderCollapseToggle=function(){var a,b;if(!this.node.hasChildren)return null;const d=this.node.collapsed,h=d?null==(a=this.messages)?void 0:a.expand:null==(b=this.messages)?void 0:b.collapse;return g.tsx("div",{bind:this,class:this.classes(c.collapseToggle,
{[c.collapseToggleCollapsed]:d}),onclick:this._onCollapseToggle,"aria-label":h,title:h})};e._renderChildren=function(a){return!a.hasChildren||a.collapsed?null:g.tsx("div",{class:c.children},this._childWidgets.map(b=>b.render()))};e._onKeydown=function(a){switch(a.key){case "Space":case "Enter":if(!a.target.classList.contains(c.base))break;a.stopPropagation();this.node.toggleVisibility();break;case "ArrowLeft":a.stopPropagation();this.node.toggleCollapsed(r.isRTL(this.container)?!1:!0);break;case "ArrowRight":a.stopPropagation(),
this.node.toggleCollapsed(r.isRTL(this.container)?!0:!1)}};e._onCheckboxToggle=function(a){a.preventDefault();a.stopPropagation();(a.metaKey||a.ctrlKey)&&this.toggleSiblingsVisibility?this.node.toggleAllSiblingsVisibility():this.node.toggleVisibility()};e._onCollapseToggle=function(a){a.preventDefault();a.stopPropagation();this.node.toggleCollapsed()};e._destroyChildWidgets=function(){this._childWidgets.forEach(a=>a.destroy());this._childWidgets=[]};return q}(w);k.__decorate([l.property({type:x.LayerTreeNode})],
f.prototype,"node",void 0);k.__decorate([l.property()],f.prototype,"messages",void 0);k.__decorate([l.property({nonNullable:!0})],f.prototype,"toggleSiblingsVisibility",void 0);k.__decorate([l.property()],f.prototype,"_childWidgets",void 0);return f=p=k.__decorate([v.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesNode")],f)});