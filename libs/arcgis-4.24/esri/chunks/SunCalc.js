// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(P){var A={exports:{}};(function(Q){(function(h){h=h();void 0!==h&&(Q.exports=h)})(function(){function h(a){return new Date(864E5*(a+.5-2440588))}function B(a,b){return t(d(a)*f(p)-u(b)*d(p),f(a))}function v(a,b){return C(d(b)*f(p)+f(b)*d(p)*d(a))}function D(a,b,c){return t(d(a),f(a)*d(b)-u(c)*f(b))}function E(a,b,c){return C(d(b)*d(c)+f(b)*f(c)*f(a))}function F(a){return e*(1.9148*d(a)+.02*d(2*a)+3E-4*d(3*a))}function G(a,b){a=e*(357.5291+.98560028*a);var c=F(a);a=a+c+
102.9372*e+m;b||(b={dec:0,ra:0});b.dec=v(a,0);b.ra=B(a,0);return b}function H(a,b,c){return 2451545+a+.0053*d(b)-.0069*d(2*c)}function I(a){var b=e*(134.963+13.064993*a),c=e*(93.272+13.22935*a);a=e*(218.316+13.176396*a)+6.289*e*d(b);c=5.128*e*d(c);b=385001-20905*f(b);return{ra:B(a,c),dec:v(a,c),dist:b}}var m=Math.PI,d=Math.sin,f=Math.cos,u=Math.tan,C=Math.asin,t=Math.atan2,J=Math.acos,e=m/180,R={dec:0,ra:0},p=23.4397*e,k={PolarException:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(a,
b,c,g){c=e*-c;b*=e;var n=a.valueOf()/864E5-.5+2440588-2451545;a=G(n,R);c=e*(280.16+360.9856235*n)-c-a.ra;g||(g={azimuth:0,altitude:0});g.azimuth=D(c,b,a.dec);g.altitude=E(c,b,a.dec);return g}},q=[[-.83,"sunrise","sunset"]];k.addTime=function(a,b,c){q.push([a,b,c])};k.getTimes=function(a,b,c){function g(l){var K=w,L=x;l=J((d(l)-d(K)*d(L))/(f(K)*f(L)));return H(9E-4+(l+n)/(2*m)+M,r,y)}var n=e*-c,w=e*b,M=Math.round(a.valueOf()/864E5-.5+2440588-2451545-9E-4-n/(2*m));a=9E-4+(0+n)/(2*m)+M;var r=e*(357.5291+
.98560028*a);b=F(r);var y=r+b+102.9372*e+m,x=v(y,0);a=H(a,r,y);b={solarNoon:h(a),nadir:h(a-.5),polarException:k.PolarException.NORMAL};var N;c=0;for(N=q.length;c<N;c+=1){var z=q[c];var O=g(z[0]*e);var S=a-(O-a);b[z[1]]=h(S);b[z[2]]=h(O)}b.polarException=function(l){l=(d(l)-d(w)*d(x))/(f(w)*f(x));return-1>l?k.PolarException.MIDNIGHT_SUN:1<l?k.PolarException.POLAR_NIGHT:k.PolarException.NORMAL}(q[0][0]*e);return b};k.getMoonPosition=function(a,b,c){c=e*-c;b*=e;var g=a.valueOf()/864E5-.5+2440588-2451545;
a=I(g);c=e*(280.16+360.9856235*g)-c-a.ra;g=E(c,b,a.dec);g+=.017*e/u(g+10.26*e/(g+5.1*e));return{azimuth:D(c,b,a.dec),altitude:g,distance:a.dist}};k.getMoonFraction=function(a){var b=a.valueOf()/864E5-.5+2440588-2451545;a=G(b);b=I(b);a=J(d(a.dec)*d(b.dec)+f(a.dec)*f(b.dec)*f(a.ra-b.ra));a=t(149598E3*d(a),b.dist-149598E3*f(a));return(1+f(a))/2};return k})})(A);P.SunCalc=A.exports});