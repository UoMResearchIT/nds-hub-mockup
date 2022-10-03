// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(H){function I(a,d,b,e,c,f,m){let g;b=0;for(let l=e,n=c-f;l<c;l+=f)b+=(a[n+d*f]-a[l+d*f])*(a[l+1+d*f]+a[n+1+d*f]),n=l;if(m===0<b)for(;e<c;e+=f)g=J(e+d*f,a[e+d*f],a[e+1+d*f],g);else for(c-=f;c>=e;c-=f)g=J(c+d*f,a[c+d*f],a[c+1+d*f],g);g&&v(g,g.next)&&(y(g),g=g.next);return g}function z(a,d=a){if(!a)return a;let b;do if(b=!1,a.steiner||!v(a,a.next)&&0!==q(a.prev,a,a.next))a=a.next;else{y(a);a=d=a.prev;if(a===a.next)break;b=!0}while(b||a!==d);return d}function A(a,d,b,e,c,f,
m,g){if(a){!g&&f&&(a=K(a,e,c,f));for(var l=a;a.prev!==a.next;){var n=a.prev,k=a.next;if(f)var h=N(a,e,c,f);else a:{h=a;var p=h.prev,t=h;const u=h.next;if(0<=q(p,t,u)){h=!1;break a}let r=h.next.next;const C=r;let w=0;for(;r!==h.prev&&(0===w||r!==C);){w++;if(x(p.x,p.y,t.x,t.y,u.x,u.y,r.x,r.y)&&0<=q(r.prev,r,r.next)){h=!1;break a}r=r.next}h=!0}if(h)d.push(n.index/b+m),d.push(a.index/b+m),d.push(k.index/b+m),y(a),l=a=k.next;else if(a=k,a===l){if(!g)A(z(a),d,b,e,c,f,m,1);else if(1===g){g=d;l=b;n=m;k=a;
do h=k.prev,p=k.next.next,!v(h,p)&&L(h,k,k.next,p)&&B(h,p)&&B(p,h)&&(g.push(h.index/l+n),g.push(k.index/l+n),g.push(p.index/l+n),y(k),y(k.next),k=a=p),k=k.next;while(k!==a);a=k;A(a,d,b,e,c,f,m,2)}else if(2===g)a:{g=a;do{for(l=g.next.next;l!==g.prev;){if(n=g.index!==l.index){h=h=h=void 0;n=g;k=l;if(h=n.next.index!==k.index&&n.prev.index!==k.index){b:{h=n;do{if(h.index!==n.index&&h.next.index!==n.index&&h.index!==k.index&&h.next.index!==k.index&&L(h,h.next,n,k)){h=!0;break b}h=h.next}while(h!==n);h=
!1}h=!h}if(h=h&&B(n,k)&&B(k,n)){h=n;p=!1;t=(n.x+k.x)/2;k=(n.y+k.y)/2;do h.y>k!==h.next.y>k&&h.next.y!==h.y&&t<(h.next.x-h.x)*(k-h.y)/(h.next.y-h.y)+h.x&&(p=!p),h=h.next;while(h!==n);h=p}n=h}if(n){a=M(g,l);g=z(g,g.next);a=z(a,a.next);A(g,d,b,e,c,f,m,0);A(a,d,b,e,c,f,m,0);break a}l=l.next}g=g.next}while(g!==a)}break}}}}function N(a,d,b,e){const c=a.prev,f=a.next;if(0<=q(c,a,f))return!1;const m=c.x>a.x?c.x>f.x?c.x:f.x:a.x>f.x?a.x:f.x,g=c.y>a.y?c.y>f.y?c.y:f.y:a.y>f.y?a.y:f.y,l=E(c.x<a.x?c.x<f.x?c.x:
f.x:a.x<f.x?a.x:f.x,c.y<a.y?c.y<f.y?c.y:f.y:a.y<f.y?a.y:f.y,d,b,e);d=E(m,g,d,b,e);b=a.prevZ;for(e=a.nextZ;b&&b.z>=l&&e&&e.z<=d;){if(b!==a.prev&&b!==a.next&&x(c.x,c.y,a.x,a.y,f.x,f.y,b.x,b.y)&&0<=q(b.prev,b,b.next))return!1;b=b.prevZ;if(e!==a.prev&&e!==a.next&&x(c.x,c.y,a.x,a.y,f.x,f.y,e.x,e.y)&&0<=q(e.prev,e,e.next))return!1;e=e.nextZ}for(;b&&b.z>=l;){if(b!==a.prev&&b!==a.next&&x(c.x,c.y,a.x,a.y,f.x,f.y,b.x,b.y)&&0<=q(b.prev,b,b.next))return!1;b=b.prevZ}for(;e&&e.z<=d;){if(e!==a.prev&&e!==a.next&&
x(c.x,c.y,a.x,a.y,f.x,f.y,e.x,e.y)&&0<=q(e.prev,e,e.next))return!1;e=e.nextZ}return!0}function J(a,d,b,e){a=D.create(a,d,b);e?(a.next=e.next,a.prev=e,e.next.prev=a,e.next=a):(a.prev=a,a.next=a);return a}function y(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function O(a){let d=a,b=a;do{if(d.x<b.x||d.x===b.x&&d.y<b.y)b=d;d=d.next}while(d!==a);return b}function P(a,d){let b=d;const e=a.x,c=a.y;let f=-Infinity,m;do{if(c<=b.y&&c>=b.next.y&&
b.next.y!==b.y){var g=b.x+(c-b.y)*(b.next.x-b.x)/(b.next.y-b.y);if(g<=e&&g>f){f=g;if(g===e){if(c===b.y)return b;if(c===b.next.y)return b.next}m=b.x<b.next.x?b:b.next}}b=b.next}while(b!==d);if(!m)return null;if(e===f)return m.prev;d=m;g=m.x;const l=m.y;let n=Infinity,k;for(b=m.next;b!==d;)e>=b.x&&b.x>=g&&e!==b.x&&x(c<l?e:f,c,g,l,c<l?f:e,c,b.x,b.y)&&(k=Math.abs(c-b.y)/(e-b.x),(k<n||k===n&&b.x>m.x)&&B(b,a)&&(m=b,n=k)),b=b.next;return m}function K(a,d,b,e){for(var c;c!==a;c=c.next){c=c||a;null===c.z&&
(c.z=E(c.x,c.y,d,b,e));if(c.prev.next!==c||c.next.prev!==c)return c.prev.next=c,c.next.prev=c,K(a,d,b,e);c.prevZ=c.prev;c.nextZ=c.next}a.prevZ.nextZ=null;a.prevZ=null;a:for(b=1;;){e=a;d=a=null;let f=0;for(;e;){f++;c=e;let m=0;for(;m<b&&c;m++)c=c.nextZ;let g=b;for(;0<m||0<g&&c;){let l;0===m?(l=c,c=c.nextZ,g--):0!==g&&c?e.z<=c.z?(l=e,e=e.nextZ,m--):(l=c,c=c.nextZ,g--):(l=e,e=e.nextZ,m--);d?d.nextZ=l:a=l;l.prevZ=d;d=l}e=c}d.nextZ=null;b*=2;if(2>f)break a}return a}function q(a,d,b){return(d.y-a.y)*(b.x-
d.x)-(d.x-a.x)*(b.y-d.y)}function L(a,d,b,e){return v(a,d)&&v(b,e)||v(a,e)&&v(b,d)?!0:0<q(a,d,b)!==0<q(a,d,e)&&0<q(b,e,a)!==0<q(b,e,d)}function x(a,d,b,e,c,f,m,g){return 0<=(c-m)*(d-g)-(a-m)*(f-g)&&0<=(a-m)*(e-g)-(b-m)*(d-g)&&0<=(b-m)*(f-g)-(c-m)*(e-g)}function B(a,d){return 0>q(a.prev,a,a.next)?0<=q(a,d,a.next)&&0<=q(a,a.prev,d):0>q(a,d,a.prev)||0>q(a,a.next,d)}function E(a,d,b,e,c){a=32767*(a-b)*c;d=32767*(d-e)*c;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;d=(d|d<<8)&16711935;
d=(d|d<<4)&252645135;d=(d|d<<2)&858993459;return(a|a<<1)&1431655765|((d|d<<1)&1431655765)<<1}function v(a,d){return a.x===d.x&&a.y===d.y}function Q(a,d){return a.x-d.x}function M(a,d){const b=D.create(a.index,a.x,a.y),e=D.create(d.index,d.x,d.y),c=a.next,f=d.prev;a.next=d;d.prev=a;b.next=c;c.prev=b;e.next=b;b.prev=e;f.next=e;e.prev=f;return e}let D=function(){function a(){this.y=this.x=this.index=0;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}a.create=function(d,b,e){const c=
F<G.length?G[F++]:new a;c.index=d;c.x=b;c.y=e;c.prev=null;c.next=null;c.z=null;c.prevZ=null;c.nextZ=null;c.steiner=!1;return c};return a}();const G=[];let F=0;for(let a=0;8096>a;a++)G.push(new D);H.bufcut=function(a,d,b,e,c,f,m){F=0;var g=(e-b)*f,l=c&&c.length;const n=l?(c[0]-b)*f:g;var k=I(d,b,e,0,n,f,!0);if(k&&k.next!==k.prev){var h;if(l){l=[];for(let r=0,C=c.length;r<C;r++){const w=I(d,b,e,c[r]*f,r<C-1?c[r+1]*f:e*f,f,!1);w===w.next&&(w.steiner=!0);l.push(O(w))}l.sort(Q);for(var p of l){e=p;c=k;
if(c=P(e,c))e=M(c,e),z(e,e.next);k=z(k,k.next)}}if(g>80*f){var t=g=d[b*f];var u=h=d[1+b*f];for(p=f;p<n;p+=f)e=d[p+b*f],c=d[p+1+b*f],t=Math.min(t,e),u=Math.min(u,c),g=Math.max(g,e),h=Math.max(h,c);h=Math.max(g-t,h-u);h=0!==h?1/h:0}A(k,a,f,t,u,h,m,0)}};Object.defineProperties(H,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});