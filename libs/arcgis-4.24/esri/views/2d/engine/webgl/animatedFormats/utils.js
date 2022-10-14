// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/time","../../../../../symbols/cim/enums","../grouping"],function(g,f,h,q){function n(a){return f.Milliseconds(a.frameDurations.reduce((b,d)=>b+d,0))}function r(a){const {width:b,height:d}=a;return{frameDurations:a.frameDurations.reverse(),selectFrame:c=>{a.selectFrame(a.frameDurations.length-1-c)},width:b,height:d}}function t(a,b){const {width:d,height:c,selectFrame:e}=a,k=n(a),l=b/k;return{frameDurations:a.frameDurations.map(m=>f.Milliseconds(m*l)),selectFrame:e,
width:d,height:c}}function u(a,b){const {width:d,height:c,selectFrame:e}=a;a=a.frameDurations.slice();const k=a.shift();a.unshift(f.Milliseconds(k+b));return{frameDurations:a,selectFrame:e,width:d,height:c}}function p(a,b){const {width:d,height:c,selectFrame:e}=a;a=a.frameDurations.slice();const k=a.pop();a.push(f.Milliseconds(k+b));return{frameDurations:a,selectFrame:e,width:d,height:c}}function v(a,b,d){let {repeatType:c}=b;null==c&&(c=h.AnimatedSymbolRepeatType.Loop);!0===b.reverseAnimation&&(a=
r(a));null!=b.duration&&(a=t(a,f.Milliseconds(1E3*b.duration)));if(null!=b.repeatDelay){const e=1E3*b.repeatDelay;c===h.AnimatedSymbolRepeatType.Loop?a=p(a,f.Milliseconds(e)):c===h.AnimatedSymbolRepeatType.Oscillate&&(a=u(p(a,f.Milliseconds(e/2)),f.Milliseconds(e/2)))}null!=b.startTimeOffset?b=f.Milliseconds(1E3*b.startTimeOffset):null!=b.randomizeStartTime?(d=q.getMaterialGroup(d),b=q.getRandomValue(d,null!=b.randomizeStartSeed?b.randomizeStartSeed:82749913),b=f.Milliseconds(b*n(a))):b=f.Milliseconds(0);
return new w(a,b,c)}let w=function(){function a(b,d,c){this._animation=b;this._repeatType=c;this._direction=1;this._currentFrame=0;this.timeToFrame=this._animation.frameDurations[this._currentFrame];for(b=0;d>b;)b+=this.timeToFrame,this.nextFrame();this._animation.selectFrame(this._currentFrame)}a.prototype.nextFrame=function(){this._currentFrame+=this._direction;if(0<this._direction){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case h.AnimatedSymbolRepeatType.None:this._currentFrame-=
this._direction;break;case h.AnimatedSymbolRepeatType.Loop:this._currentFrame=0;break;case h.AnimatedSymbolRepeatType.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case h.AnimatedSymbolRepeatType.None:this._currentFrame-=this._direction;break;case h.AnimatedSymbolRepeatType.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case h.AnimatedSymbolRepeatType.Oscillate:this._currentFrame-=this._direction,this._direction=
1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];this._animation.selectFrame(this._currentFrame)};return a}();g.Player=w;g.adjustDuration=t;g.appendDelay=p;g.createPlayer=v;g.getDuration=n;g.play=function(a,b,d){function c(){m=e&&setTimeout(()=>{k.nextFrame();l=k.timeToFrame;c()},l)}const e=null!=b.playAnimation?b.playAnimation:!0,k=v(a,b,d);let l=k.timeToFrame,m;c();return{remove:()=>{e&&clearTimeout(m)}}};g.prependDelay=u;g.reverse=r;Object.defineProperties(g,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});