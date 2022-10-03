// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/promiseUtils","./types","../../../../../views/webgl/enums"],function(k,m,n,f,d){let p=function(){function h(a,b,c,g,l){this.buffer=a;this.componentType=c;this.dataType=g;this.data=[];this.isFinalized=!1;this.accessorIndex=-1;this.accessorMax=this.accessorMin=this.accessorAttribute=null;b.bufferViews||(b.bufferViews=[]);this.index=b.bufferViews.length;this.bufferView={buffer:a.index,byteLength:-1,target:l};a=this._getElementSize();
4<=a&&l!==f.TargetBuffer.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a);b.bufferViews.push(this.bufferView);this.numComponentsForDataType=this._calculateNumComponentsForDataType()}var e=h.prototype;e.push=function(a){var b=this.data.length;this.data.push(a);if(0<=this.accessorIndex){b%=this.numComponentsForDataType;var c=this.accessorMin[b];this.accessorMin[b]="number"!==typeof c?a:Math.min(c,a);c=this.accessorMax[b];this.accessorMax[b]="number"!==typeof c?a:Math.max(c,a)}};e.getByteOffset=
function(){if(!this.isFinalized)throw Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)};e._createTypedArray=function(a,b){switch(this.componentType){case d.DataType.BYTE:return new Int8Array(a,b);case d.DataType.FLOAT:return new Float32Array(a,b);case d.DataType.SHORT:return new Int16Array(a,b);case d.DataType.UNSIGNED_BYTE:return new Uint8Array(a,b);case d.DataType.UNSIGNED_INT:return new Uint32Array(a,b);case d.DataType.UNSIGNED_SHORT:return new Uint16Array(a,
b)}};e.writeOutToBuffer=function(a,b){this._createTypedArray(a,b).set(this.data)};e.writeAsync=function(a){if(this.asyncWritePromise)throw Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=a.then(b=>{b=new Uint8Array(b);for(let c=0;c<b.length;++c)this.data.push(b[c]);delete this.asyncWritePromise})};e.startAccessor=function(a){if(0<=this.accessorIndex)throw Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length;
this.accessorAttribute=a;a=this.numComponentsForDataType;this.accessorMin=Array(a);this.accessorMax=Array(a)};e.endAccessor=function(){if(0>this.accessorIndex)throw Error("An accessor was not started, but was attempted to be ended");var a=this._getElementSize();const b=this.numComponentsForDataType,c=(this.data.length-this.accessorIndex)/b;if(c%1)throw Error("An accessor was ended with missing component values");for(let g=0;g<this.accessorMin.length;++g)"number"!==typeof this.accessorMin[g]&&(this.accessorMin[g]=
0),"number"!==typeof this.accessorMax[g]&&(this.accessorMax[g]=0);a={byteOffset:this.accessorIndex/b*a,componentType:this.componentType,count:c,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case "TEXCOORD_0":case "TEXCOORD_1":case "COLOR_0":case "WEIGHTS_0":switch(this.componentType){case d.DataType.UNSIGNED_BYTE:case d.DataType.UNSIGNED_SHORT:a.normalized=!0}}this.accessorIndex=-1;this.accessorMax=this.accessorMin=this.accessorAttribute=
null;return a};e.finalize=function(){const a=this.bufferView;return(new Promise(b=>{const c=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&c.push(this.asyncWritePromise);b(n.eachAlways(c))})).then(()=>{this.isFinalized=!0;a.byteOffset=this.getByteOffset();a.byteLength=this.dataSize;this.finalizedPromiseResolve&&this.finalizedPromiseResolve()})};e._getElementSize=function(){return this._sizeComponentType()*this.numComponentsForDataType};e._sizeComponentType=function(){switch(this.componentType){case d.DataType.BYTE:case d.DataType.UNSIGNED_BYTE:return 1;
case d.DataType.SHORT:case d.DataType.UNSIGNED_SHORT:return 2;case d.DataType.UNSIGNED_INT:case d.DataType.FLOAT:return 4}};e._calculateNumComponentsForDataType=function(){switch(this.dataType){case f.AttributeType.SCALAR:return 1;case f.AttributeType.VEC2:return 2;case f.AttributeType.VEC3:return 3;case f.AttributeType.VEC4:case f.AttributeType.MAT2:return 4;case f.AttributeType.MAT3:return 9;case f.AttributeType.MAT4:return 16}};m._createClass(h,[{key:"dataSize",get:function(){return this.data.length*
this._sizeComponentType()}},{key:"byteSize",get:function(){return 4*Math.ceil(this.dataSize/4)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"finalized",get:function(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise(a=>this.finalizedPromiseResolve=a)}}]);return h}();k.BufferView=p;Object.defineProperties(k,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});