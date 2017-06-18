(function(){for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l=["Reflect",
"apply"],n=0;n<l.length-1;n++){var ba=l[n];ba in k||(k[ba]={});k=k[ba]}var ca=l[l.length-1],da=k[ca],ea=function(){if(da)return da;var a=Function.prototype.apply;return function(b,c,d){return a.call(b,c,d)}}();
ea!=da&&null!=ea&&aa(k,ca,{configurable:!0,writable:!0,value:ea});var p=this;function q(a){return"string"==typeof a}
function fa(a){a=a.split(".");for(var b=p,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ha(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
var ia=Date.now||function(){return+new Date};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var t=window,u=document,ja=t.location;function ka(){}
var la=/\[native code\]/;function x(a,b,c){return a[b]=a[b]||c}
function ma(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function na(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function y(){var a;if((a=Object.create)&&la.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var z=x(t,"gapi",{});var A;A=x(t,"___jsl",y());x(A,"I",0);x(A,"hel",10);function oa(){var a=ja.href;if(A.dpo)var b=A.h;else{b=A.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function pa(a){var b=x(A,"PQ",[]);A.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function qa(a){return x(x(A,"H",y()),a,y())}
;var B=x(A,"perf",y());x(B,"g",y());var ra=x(B,"i",y());x(B,"r",[]);y();y();function C(a,b,c){b&&0<b.length&&(b=sa(b),c&&0<c.length&&(b+="___"+sa(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=x(ra,"_p",y()),x(b,c,y())[a]=(new Date).getTime(),b=B.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function sa(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var ta=y(),G=[];function H(a){throw Error("Bad hint"+(a?": "+a:""));}
G.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?A[b]=x(A,b,[]).concat(c):x(A,b,c)}if(b=a.u)a=x(A,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ua=/^(\/[a-zA-Z0-9_\-]+)+$/,va=[/\/amp\//,/\/amp$/,/^\/amp$/],wa=/^[a-zA-Z0-9\-_\.,!]+$/,xa=/^gapi\.loaded_[0-9]+$/,ya=/^[a-zA-Z0-9,._-]+$/;function za(a,b,c,d){var e=a.split(";"),f=e.shift(),g=ta[f],h=null;g?h=g(e,b,c,d):H("no hint processor for: "+f);h||H("failed to generate load url");b=h;c=b.match(Aa);(d=b.match(Ba))&&1===d.length&&Ca.test(b)&&c&&1===c.length||H("failed sanity: "+a);return h}
function Da(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Ea(a);xa.test(c)||H("invalid_callback");b=Fa(b);d=d&&d.length?Fa(d):null;return[encodeURIComponent(a.g).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.c?"/rs="+e(a.c):"",a.f?"/t="+e(a.f):"","/cb=",e(c)].join("")}
function Ea(a){"/"!==a.charAt(0)&&H("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))H("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");ua.test(b)||H("invalid_prefix");c=0;for(d=va.length;c<d;++c)va[c].test(b)&&H("invalid_prefix");c=I(a,"k",
!0);d=I(a,"am");e=I(a,"rs");a=I(a,"t");return{g:b,version:c,a:d,c:e,f:a}}
function Fa(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ya.test(e)&&b.push(e)}return b.join(",")}
function I(a,b,c){a=a[b];!a&&c&&H("missing: "+b);if(a){if(wa.test(a))return a;H("invalid: "+b)}return null}
var Ca=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ba=/\/cb=/g,Aa=/\/\//g;function Ga(){var a=oa();if(!a)throw Error("Bad hint");return a}
ta.m=function(a,b,c,d){(a=a[0])||H("missing_hint");return"https://apis.google.com"+Da(a,b,c,d)};
var J=decodeURI("%73cript"),Ha=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Ia(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>ma.call(b,e)&&c.push(e)}return c}
function Ja(){var a=A.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Ha)?a:A.nonce=null;var b=x(A,"us",[]);if(!b||!b.length)return A.nonce=null;for(var c=u.getElementsByTagName(J),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Ha))return A.nonce=a}}return null}
function Ka(a){if("loading"!=u.readyState)La(a);else{var b=Ja(),c="";null!==b&&(c=' nonce="'+b+'"');u.write("<"+J+' src="'+encodeURI(a)+'"'+c+"></"+J+">")}}
function La(a){var b=u.createElement(J);b.setAttribute("src",a);a=Ja();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=u.getElementsByTagName(J)[0])?a.parentNode.insertBefore(b,a):(u.head||u.body||u.documentElement).appendChild(b)}
function Ma(a,b){var c=b&&b._c;if(c)for(var d=0;d<G.length;d++){var e=G[d][0],f=G[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Na(a,b,c){Oa(function(){var c=b===oa()?x(z,"_",y()):y();c=x(qa(b),"_",c);a(c)},c)}
function Pa(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ma(a,c);var d=a?a.split(":"):[],e=c.h||Ga(),f=x(A,"ah",y());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var m=h.split("."),m=f[h]||f[m[1]&&"ns:"+m[0]||""]||e,D=g.length&&g[g.length-1]||null,E=D;D&&D.hint==m||(E={hint:m,b:[]},g.push(E));E.b.push(h)}var L=g.length;if(1<L){var F=c.callback;F&&(c.callback=function(){0==--L&&F()})}for(;d=g.shift();)Qa(d.b,c,d.hint)}else Qa(d||[],c,e)}
function Qa(a,b,c){function d(a,b){if(L)return 0;t.clearTimeout(E);F.push.apply(F,r);var d=((z||{}).config||{}).update;d?d(f):f&&x(A,"cu",[]).push(f);if(b){C("me0",a,V);try{Na(b,c,D)}finally{C("me1",a,V)}}return 1}
a=na(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,D=void 0;"function"==typeof m&&(D=m);var E=null,L=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=x(qa(c),"r",[]).sort(),F=x(qa(c),"L",[]).sort(),V=[].concat(m);0<g&&(E=t.setTimeout(function(){L=!0;h()},g));
var r=Ia(a,F);if(r.length){var r=Ia(a,m),v=x(A,"CP",[]),w=v.length;v[w]=function(a){function b(){var a=v[w+1];a&&a()}
function c(b){v[w]=null;d(r,a)&&pa(function(){e&&e();b()})}
if(!a)return 0;C("ml1",r,V);0<w&&v[w-1]?v[w]=function(){c(b)}:c(b)};
if(r.length){var ga="loaded_"+A.I++;z[ga]=function(a){v[w](a);z[ga]=null};
a=za(c,r,"gapi."+ga,m);m.push.apply(m,r);C("ml0",r,V);b.sync||t.___gapisync?Ka(a):La(a)}else v[w](ka)}else d(r)&&e&&e()}
function Oa(a,b){if(A.hee&&0<A.hel)try{return a()}catch(c){b&&b(c),A.hel--,Pa("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
z.load=function(a,b){return Oa(function(){return Pa(a,b)})};var Ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Sa(a,b){return a<b?-1:a>b?1:0}
;var Ta=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ua=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];
b.call(c,m,h,a)&&(e[f++]=m)}return e};
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=ha(d);if("array"==e||"object"==e&&"number"==typeof d.length){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var K;a:{var Wa=p.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){K=Xa;break a}}K=""};var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function $a(a,b){var c=ab;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var bb=-1!=K.indexOf("Opera"),M=-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"),cb=-1!=K.indexOf("Edge"),db=-1!=K.indexOf("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"))&&!(-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"))&&-1==K.indexOf("Edge"),eb=-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge");function fb(){var a=p.document;return a?a.documentMode:void 0}
var gb;a:{var hb="",ib=function(){var a=K;if(db)return/rv\:([^\);]+)(\)|;)/.exec(a);if(cb)return/Edge\/([\d\.]+)/.exec(a);if(M)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(eb)return/WebKit\/(\S+)/.exec(a);if(bb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ib&&(hb=ib?ib[1]:"");if(M){var jb=fb();if(null!=jb&&jb>parseFloat(hb)){gb=String(jb);break a}}gb=hb}var kb=gb,ab={};
function lb(a){$a(a,function(){for(var b=0,c=Ra(String(kb)).split("."),d=Ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Sa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Sa(0==g[2].length,0==h[2].length)||Sa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var mb;var nb=p.document;mb=nb&&M?fb()||("CSS1Compat"==nb.compatMode?parseInt(kb,10):5):void 0;var ob;if(!(ob=!db&&!M)){var pb;if(pb=M)pb=9<=Number(mb);ob=pb}ob||db&&lb("1.9.1");M&&lb("9");function qb(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function rb(a,b){if(a.classList)var c=a.classList.contains(b);else c=qb(a),c=0<=Ta(c,b);return c}
function sb(a,b){a.classList?a.classList.add(b):rb(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function tb(a,b){a.classList?a.classList.remove(b):rb(a,b)&&(a.className=Ua(qb(a),function(a){return a!=b}).join(" "))}
;function N(a,b){this.width=a;this.height=b}
N.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
N.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
N.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ub(){var a=document;return q("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;function vb(a){var b=a.offsetWidth,c=a.offsetHeight,d=eb&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){a:{try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}M&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new N(e.right-e.left,e.bottom-e.top)}return new N(b,c)}
;var O=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{},P=["yt","config_"],Q=p;P[0]in Q||!Q.execScript||Q.execScript("var "+P[0]);for(var R;P.length&&(R=P.shift());)P.length||void 0===O?Q[R]&&Q[R]!==Object.prototype[R]?Q=Q[R]:Q=Q[R]={}:Q[R]=O;function wb(){return fa("gapi.iframes.getContext")()}
function xb(){return fa("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;ia();function yb(a){try{var b=xb();a.register("msg-hovercard-subscription",zb,b)}catch(c){}}
function zb(a){if(a){a=!!a.isSubscribed;var b=ub();a?tb(b,"subscribe"):sb(b,"subscribe");a?sb(b,"subscribed"):tb(b,"subscribed")}}
;function S(){var a=ub();b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=vb(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=vb(a);b.display=c;b.position=e;b.visibility=d}a={width:a.width,
height:a.height};wb().ready(a,null,void 0);a=xb();wb().addOnOpenerHandler(yb,null,a)}
var T=S,T=void 0===T?{}:T;"function"==ha(T)&&(T={callback:T});var S=T,Ab;(Ab=S.gapiHintOverride)||(Ab="GAPI_HINT_OVERRIDE"in O?O.GAPI_HINT_OVERRIDE:void 0);
if(Ab){var Bb;var U=document.location.href;if(-1!=U.indexOf("?")){var U=(U||"").split("#")[0],Cb=U.split("?",2),W=1<Cb.length?Cb[1]:Cb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var Db=W.split("&"),X={},Eb=0,Fb=Db.length;Eb<Fb;Eb++){var Y=Db[Eb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),Gb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==ha(X[Z])?Va(X[Z],Gb):X[Z]=[X[Z],Gb]:X[Z]=Gb}}Bb=X}else Bb={};var Hb=Bb.gapi_jsh;Hb&&Za(S,
{_c:{jsl:{h:Hb}}})}Pa("gapi.iframes:gapi.iframes.style.common",S);}).call(this);
