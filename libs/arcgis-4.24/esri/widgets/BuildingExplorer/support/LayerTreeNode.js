// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,n,d,r,p,t,l,k,e,v,w,x,u){function q(f,g){let c=null;for(const a of f.items){f=g(a);if(l.isSome(c)&&
c!==f)return null;c=f}return c}b.LayerTreeNode=function(f){function g(){var a=f.apply(this,arguments)||this;a.id="root";a.parent=null;a.children=new p;a.layers=new p;a.level=0;a.collapsed=!0;a._handles=new t;a._childIds=new Set;a._layerUniqueIds=new Set;return a}n._inheritsLoose(g,f);var c=g.prototype;c.initialize=function(){this._handles.add([this.layers.on("before-add",a=>{this._layerUniqueIds.has(a.item.uid)?a.preventDefault():this._layerUniqueIds.add(a.item.uid)}),this.layers.on("after-add",({item:a})=>
{this._handles.add([k.watch(()=>a.visible,()=>this.notifyChange("visible"),k.initial),k.watch(()=>a.title,()=>this.notifyChange("title"),k.initial)],a.uid)}),this.layers.on("before-remove",({item:a})=>{this._handles.remove(a.uid);this.notifyChange("title");this.notifyChange("visible")}),this.children.on("before-add",a=>{this._childIds.has(a.item.id)?a.preventDefault():(a.item._set("parent",this),this._childIds.add(a.item.id))})])};c.destroy=function(){this._handles.destroy();this.children.forEach(a=>
a.destroy())};c.toggleVisibility=function(a){const h=void 0===a?!this.visible:a;this.layers.forEach(m=>{m.visible=h});h&&l.isSome(this.parent)&&this.parent.toggleVisibility(!0)};c.toggleCollapsed=function(a){this.collapsed=void 0===a?!this.collapsed:a};c.expand=function(){this.collapsed=!1};c.expandAll=function(){this.expand();this.children.forEach(a=>a.expandAll())};c.collapse=function(){this.collapsed=!0};c.collapseAll=function(){this.collapse();this.children.forEach(a=>a.collapseAll())};c.toggleAllSiblingsVisibility=
function(a){const h=void 0===a?!this.visible:a;this.toggleVisibility(h);l.isSome(this.parent)&&(this.parent.toggleVisibility(h),this.parent.children.forEach(m=>m.toggleVisibility(h)))};n._createClass(g,[{key:"hasChildren",get:function(){return 0<this.children.length}},{key:"isRoot",get:function(){return 0===this.level}},{key:"isLeaf",get:function(){return!this.hasChildren}},{key:"isDiscipline",get:function(){return 1===this.level}},{key:"visible",get:function(){return q(this.layers,a=>a.visible)}},
{key:"title",get:function(){return q(this.layers,a=>a.title)||this.layers.items.map(a=>a.title).join(", ")||null}}]);return g}(r);d.__decorate([e.property({nonNullable:!0})],b.LayerTreeNode.prototype,"id",void 0);d.__decorate([e.property()],b.LayerTreeNode.prototype,"parent",void 0);d.__decorate([e.property({nonNullable:!0,readOnly:!0})],b.LayerTreeNode.prototype,"children",void 0);d.__decorate([e.property({nonNullable:!0,readOnly:!0})],b.LayerTreeNode.prototype,"layers",void 0);d.__decorate([e.property({nonNullable:!0})],
b.LayerTreeNode.prototype,"level",void 0);d.__decorate([e.property({nonNullable:!0})],b.LayerTreeNode.prototype,"collapsed",void 0);d.__decorate([e.property({readOnly:!0})],b.LayerTreeNode.prototype,"hasChildren",null);d.__decorate([e.property({readOnly:!0})],b.LayerTreeNode.prototype,"isRoot",null);d.__decorate([e.property({readOnly:!0})],b.LayerTreeNode.prototype,"isLeaf",null);d.__decorate([e.property({readOnly:!0})],b.LayerTreeNode.prototype,"isDiscipline",null);d.__decorate([e.property({readOnly:!0})],
b.LayerTreeNode.prototype,"visible",null);d.__decorate([e.property({readOnly:!0})],b.LayerTreeNode.prototype,"title",null);b.LayerTreeNode=d.__decorate([u.subclass("esri.widgets.BuildingExplorer.support.LayerTreeNode")],b.LayerTreeNode);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});