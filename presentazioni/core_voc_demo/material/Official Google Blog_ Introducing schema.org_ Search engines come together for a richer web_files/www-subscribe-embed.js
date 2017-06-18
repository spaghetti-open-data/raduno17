(function(){var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
ca("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
ca("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=da(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var m=this;function ea(a){return void 0!==a}
function p(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function r(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ga(){}
function ha(a){a.da=void 0;a.A=function(){return a.da?a.da:a.da=new a}}
function ia(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ja(a){var b=ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function la(a){return"function"==ia(a)}
function ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function na(a){return a[oa]||(a[oa]=++pa)}
var oa="closure_uid_"+(1E9*Math.random()>>>0),pa=0;function qa(a,b,c){return a.call.apply(a.bind,arguments)}
function ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=qa:t=ra;return t.apply(null,arguments)}
function sa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var ta=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&ea(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function w(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Tb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var ua=window,va=document,wa=ua.location;function xa(){}
var ya=/\[native code\]/;function x(a,b,c){return a[b]=a[b]||c}
function za(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Aa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Ba(){var a;if((a=Object.create)&&ya.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ca=x(ua,"gapi",{});var y;y=x(ua,"___jsl",Ba());x(y,"I",0);x(y,"hel",10);function Da(){var a=wa.href;if(y.dpo)var b=y.h;else{b=y.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ea(a){var b=x(y,"PQ",[]);y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Fa(a){return x(x(y,"H",Ba()),a,Ba())}
;var Ga=x(y,"perf",Ba());x(Ga,"g",Ba());var Ha=x(Ga,"i",Ba());x(Ga,"r",[]);Ba();Ba();function Ia(a,b,c){b&&0<b.length&&(b=Ja(b),c&&0<c.length&&(b+="___"+Ja(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=x(Ha,"_p",Ba()),x(b,c,Ba())[a]=(new Date).getTime(),b=Ga.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Ja(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Ka=Ba(),La=[];function Ma(a){throw Error("Bad hint"+(a?": "+a:""));}
La.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?y[b]=x(y,b,[]).concat(c):x(y,b,c)}if(b=a.u)a=x(y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Na=/^(\/[a-zA-Z0-9_\-]+)+$/,Oa=[/\/amp\//,/\/amp$/,/^\/amp$/],Pa=/^[a-zA-Z0-9\-_\.,!]+$/,Qa=/^gapi\.loaded_[0-9]+$/,Ra=/^[a-zA-Z0-9,._-]+$/;function Sa(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ka[f],h=null;g?h=g(e,b,c,d):Ma("no hint processor for: "+f);h||Ma("failed to generate load url");b=h;c=b.match(Ta);(d=b.match(Ua))&&1===d.length&&Va.test(b)&&c&&1===c.length||Ma("failed sanity: "+a);return h}
function Wa(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Xa(a);Qa.test(c)||Ma("invalid_callback");b=Ya(b);d=d&&d.length?Ya(d):null;return[encodeURIComponent(a.Bb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ma?"/am="+e(a.ma):"",a.Ga?"/rs="+e(a.Ga):"",a.Qa?"/t="+e(a.Qa):"","/cb=",e(c)].join("")}
function Xa(a){"/"!==a.charAt(0)&&Ma("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Ma("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Na.test(b)||Ma("invalid_prefix");c=0;for(d=Oa.length;c<d;++c)Oa[c].test(b)&&Ma("invalid_prefix");c=Za(a,
"k",!0);d=Za(a,"am");e=Za(a,"rs");a=Za(a,"t");return{Bb:b,version:c,ma:d,Ga:e,Qa:a}}
function Ya(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Ra.test(e)&&b.push(e)}return b.join(",")}
function Za(a,b,c){a=a[b];!a&&c&&Ma("missing: "+b);if(a){if(Pa.test(a))return a;Ma("invalid: "+b)}return null}
var Va=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ua=/\/cb=/g,Ta=/\/\//g;function $a(){var a=Da();if(!a)throw Error("Bad hint");return a}
Ka.m=function(a,b,c,d){(a=a[0])||Ma("missing_hint");return"https://apis.google.com"+Wa(a,b,c,d)};
var ab=decodeURI("%73cript"),bb=/^[-+_0-9\/A-Za-z]+={0,2}$/;function cb(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>za.call(b,e)&&c.push(e)}return c}
function db(){var a=y.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(bb)?a:y.nonce=null;var b=x(y,"us",[]);if(!b||!b.length)return y.nonce=null;for(var c=va.getElementsByTagName(ab),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(bb))return y.nonce=a}}return null}
function eb(a){if("loading"!=va.readyState)fb(a);else{var b=db(),c="";null!==b&&(c=' nonce="'+b+'"');va.write("<"+ab+' src="'+encodeURI(a)+'"'+c+"></"+ab+">")}}
function fb(a){var b=va.createElement(ab);b.setAttribute("src",a);a=db();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=va.getElementsByTagName(ab)[0])?a.parentNode.insertBefore(b,a):(va.head||va.body||va.documentElement).appendChild(b)}
function gb(a,b){var c=b&&b._c;if(c)for(var d=0;d<La.length;d++){var e=La[d][0],f=La[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function hb(a,b,c){ib(function(){var c=b===Da()?x(Ca,"_",Ba()):Ba();c=x(Fa(b),"_",c);a(c)},c)}
function jb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);gb(a,c);var d=a?a.split(":"):[],e=c.h||$a(),f=x(y,"ah",Ba());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g.length&&g[g.length-1]||null,q=n;n&&n.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(h)}var R=g.length;if(1<R){var P=c.callback;P&&(c.callback=function(){0==--R&&P()})}for(;d=g.shift();)kb(d.features,c,d.hint)}else kb(d||[],c,e)}
function kb(a,b,c){function d(a,b){if(R)return 0;ua.clearTimeout(q);P.push.apply(P,u);var d=((Ca||{}).config||{}).update;d?d(f):f&&x(y,"cu",[]).push(f);if(b){Ia("me0",a,E);try{hb(b,c,n)}finally{Ia("me1",a,E)}}return 1}
a=Aa(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var q=null,R=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=x(Fa(c),"r",[]).sort(),P=x(Fa(c),"L",[]).sort(),E=[].concat(l);0<g&&(q=ua.setTimeout(function(){R=!0;h()},g));
var u=cb(a,P);if(u.length){var u=cb(a,l),ka=x(y,"CP",[]),S=ka.length;ka[S]=function(a){function b(){var a=ka[S+1];a&&a()}
function c(b){ka[S]=null;d(u,a)&&Ea(function(){e&&e();b()})}
if(!a)return 0;Ia("ml1",u,E);0<S&&ka[S-1]?ka[S]=function(){c(b)}:c(b)};
if(u.length){var ic="loaded_"+y.I++;Ca[ic]=function(a){ka[S](a);Ca[ic]=null};
a=Sa(c,u,"gapi."+ic,l);l.push.apply(l,u);Ia("ml0",u,E);b.sync||ua.___gapisync?eb(a):fb(a)}else ka[S](xa)}else d(u)&&e&&e()}
function ib(a,b){if(y.hee&&0<y.hel)try{return a()}catch(c){b&&b(c),y.hel--,jb("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ca.load=function(a,b){return ib(function(){return jb(a,b)})};function lb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,lb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(lb,Error);lb.prototype.name="CustomError";var mb;var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ob=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function pb(a){a=ea(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return ob("0",Math.max(0,2-b))+a}
function qb(a,b){return a<b?-1:a>b?1:0}
function rb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function sb(a){var b=p(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var tb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ub=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},vb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},wb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function xb(a,b){a:{var c=a.length;for(var d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:p(a)?a.charAt(c):a[c]}
function yb(a,b){return 0<=tb(a,b)}
function zb(a){return Array.prototype.concat.apply([],arguments)}
function Ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Cb(a,b,c,d){return Array.prototype.splice.apply(a,Db(arguments,1))}
function Db(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Eb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==ia(d))for(var e=0;e<d.length;e+=8192)for(var f=Eb.apply(null,Db(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function Fb(a,b,c){this.o=c;this.i=a;this.v=b;this.f=0;this.b=null}
Fb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.i();return a};
function Gb(a,b){a.v(b);a.f<a.o&&(a.f++,b.next=a.b,a.b=b)}
;var Hb;a:{var Ib=m.navigator;if(Ib){var Jb=Ib.userAgent;if(Jb){Hb=Jb;break a}}Hb=""}function A(a){return-1!=Hb.indexOf(a)}
;function Kb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Lb(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function Mb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Nb(a){var b=Ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Pb.length;f++)c=Pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Rb(a){m.setTimeout(function(){throw a;},0)}
var Sb;
function Tb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ea(c.next)){c=c.next;var a=c.oa;c.oa=null;a()}};
return function(a){d.next={oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Ub(){this.f=this.b=null}
var Wb=new Fb(function(){return new Vb},function(a){a.reset()},100);
Ub.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Vb(){this.next=this.scope=this.b=null}
Vb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Vb.prototype.reset=function(){this.next=this.scope=this.b=null};function Xb(a,b){Yb||Zb();$b||(Yb(),$b=!0);var c=ac,d=Wb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Yb;function Zb(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);Yb=function(){a.then(bc)}}else Yb=function(){var a=bc;
!la(m.setImmediate)||m.Window&&m.Window.prototype&&!A("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Sb||(Sb=Tb()),Sb(a)):m.setImmediate(a)}}
var $b=!1,ac=new Ub;function bc(){for(var a;a=ac.remove();){try{a.b.call(a.scope)}catch(b){Rb(b)}Gb(Wb,a)}$b=!1}
;function cc(a){cc[" "](a);return a}
cc[" "]=ga;function dc(a,b){var c=ec;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var fc=A("Opera"),B=A("Trident")||A("MSIE"),gc=A("Edge"),hc=gc||B,jc=A("Gecko")&&!(-1!=Hb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),kc=-1!=Hb.toLowerCase().indexOf("webkit")&&!A("Edge"),lc=A("Windows");function mc(){var a=m.document;return a?a.documentMode:void 0}
var nc;a:{var oc="",pc=function(){var a=Hb;if(jc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(gc)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(kc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
pc&&(oc=pc?pc[1]:"");if(B){var qc=mc();if(null!=qc&&qc>parseFloat(oc)){nc=String(qc);break a}}nc=oc}var rc=nc,ec={};
function sc(a){return dc(a,function(){for(var b=0,c=nb(String(rc)).split("."),d=nb(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=qb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||qb(0==g[2].length,0==h[2].length)||qb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var tc;var uc=m.document;tc=uc&&B?mc()||("CSS1Compat"==uc.compatMode?parseInt(rc,10):5):void 0;function vc(a,b,c){fa(a)?(this.date=wc(a,b||0,c||1),xc(this,c||1)):ma(a)?(this.date=wc(a.getFullYear(),a.getMonth(),a.getDate()),xc(this,a.getDate())):(this.date=new Date(ta()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),xc(this,a))}
function wc(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=vc.prototype;k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
function yc(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+pb(c)+":"+pb(b)}return a}
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.X=function(a,b){return[this.getFullYear(),pb(this.getMonth()+1),pb(this.getDate())].join(a?"-":"")+(b?yc(this):"")};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.X()};
function xc(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function zc(a,b,c,d,e,f,g){this.date=fa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():ta())}
w(zc,vc);zc.prototype.X=function(a,b){var c=vc.prototype.X.call(this,a);return a?c+" "+pb(this.date.getHours())+":"+pb(this.date.getMinutes())+":"+pb(this.date.getSeconds())+(b?yc(this):""):c+"T"+pb(this.date.getHours())+pb(this.date.getMinutes())+pb(this.date.getSeconds())+(b?yc(this):"")};
zc.prototype.equals=function(a){return this.getTime()==a.getTime()};
zc.prototype.toString=function(){return this.X()};function Ac(){this.i=this.i;this.o=this.o}
Ac.prototype.i=!1;Ac.prototype.V=function(){return this.i};
Ac.prototype.dispose=function(){this.i||(this.i=!0,this.aa())};
Ac.prototype.aa=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function Bc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Cc=!jc&&!B||B&&9<=Number(tc)||jc&&sc("1.9.1"),Dc=B&&!sc("9");function Ec(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}
function C(a,b){return a.classList?a.classList.contains(b):yb(Ec(a),b)}
function D(a,b){a.classList?a.classList.add(b):C(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Fc(a,b){if(a.classList)z(b,function(b){D(a,b)});
else{var c={};z(Ec(a),function(a){c[a]=!0});
z(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function F(a,b){a.classList?a.classList.remove(b):C(a,b)&&(a.className=ub(Ec(a),function(a){return a!=b}).join(" "))}
function Gc(a,b){a.classList?z(b,function(b){F(a,b)}):a.className=ub(Ec(a),function(a){return!yb(b,a)}).join(" ")}
function Hc(a,b,c){c?D(a,b):F(a,b)}
function Ic(a,b,c){C(a,b)&&(F(a,b),D(a,c))}
function Jc(a,b){var c=!C(a,b);Hc(a,b,c)}
;var Kc=!B&&!(A("Safari")&&!((A("Chrome")||A("CriOS"))&&!A("Edge")||A("Coast")||A("Opera")||A("Edge")||A("Silk")||A("Android")));function Lc(a,b){return Kc&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Mc(){this.b="";this.f=Nc}
Mc.prototype.ca=!0;Mc.prototype.ba=function(){return this.b};
var Oc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nc={};function Pc(a){var b=new Mc;b.b=a;return b}
Pc("about:blank");function Qc(){this.b="";this.f=Rc}
Qc.prototype.ca=!0;Qc.prototype.ba=function(){return this.b};
function Sc(a){if(a instanceof Qc&&a.constructor===Qc&&a.f===Rc)return a.b;ia(a);return"type_error:SafeHtml"}
var Rc={};function Tc(a){var b=new Qc;b.b=a;return b}
Tc("<!DOCTYPE html>");Tc("");Tc("<br>");function G(a,b){this.j=ea(a)?a:0;this.l=ea(b)?b:0}
G.prototype.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function Uc(a,b){return new G(a.j-b.j,a.l-b.l)}
G.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
G.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
G.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};function Vc(a,b){this.width=a;this.height=b}
k=Vc.prototype;k.hb=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.hb()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Wc(a){return a?new Xc(Yc(a)):mb||(mb=new Xc)}
function H(a){return p(a)?document.getElementById(a):a}
function Zc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):$c(document,"*",a,b)}
function I(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else var c=document,d=b||c,c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):$c(c,"*",a,b)[0]||null;return c||null}
function $c(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){d=a.getElementsByClassName(c);if(e){a={};for(var f=b=0,g;g=d[f];f++)e==g.nodeName&&(a[b++]=g);a.length=b;return a}return d}d=a.getElementsByTagName(e||"*");if(c){a={};for(f=b=0;g=d[f];f++)e=g.className,"function"==typeof e.split&&yb(e.split(/\s+/),c)&&(a[b++]=g);a.length=b;return a}return d}
function ad(a,b){Kb(b,function(b,d){b&&b.ca&&(b=b.ba());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:bd.hasOwnProperty(d)?a.setAttribute(bd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var bd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function cd(a){a=a.document;a=dd(a)?a.documentElement:a.body;return new Vc(a.clientWidth,a.clientHeight)}
function ed(a){var b=fd(a);a=gd(a);return B&&sc("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function fd(a){return a.scrollingElement?a.scrollingElement:!kc&&dd(a)?a.documentElement:a.body||a.documentElement}
function gd(a){return a.parentWindow||a.defaultView}
function dd(a){return"CSS1Compat"==a.compatMode}
function hd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function id(a){return Cc&&void 0!=a.children?a.children:ub(a.childNodes,function(a){return 1==a.nodeType})}
function jd(a){return ma(a)&&1==a.nodeType}
function kd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Yc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ld(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Yc(a).createTextNode(String(b)))}}
function md(a,b){var c=[];return nd(a,b,c,!0)?c[0]:void 0}
function nd(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||nd(a,b,c,d))return!0;a=a.nextSibling}return!1}
var od={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},pd={IMG:" ",BR:"\n"};function qd(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!rd(a)||sd(a)):rd(a)&&sd(a))&&B){var c;!la(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function rd(a){return B&&!sc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function sd(a){a=a.tabIndex;return fa(a)&&0<=a&&32768>a}
function td(a){if(Dc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ud(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Dc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ud(a,b,c){if(!(a.nodeName in od))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in pd)b.push(pd[a.nodeName]);else for(a=a.firstChild;a;)ud(a,b,c),a=a.nextSibling}
function vd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return wd(a,function(a){return(!e||a.nodeName==e)&&(!c||p(a.className)&&yb(a.className.split(/\s+/),c))},!0,d)}
function J(a,b){return vd(a,null,b,void 0)}
function wd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Xc(a){this.b=a||m.document||document}
Xc.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Xc.prototype.createElement=function(a){return this.b.createElement(String(a))};
Xc.prototype.appendChild=function(a,b){a.appendChild(b)};
Xc.prototype.isElement=jd;var xd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function yd(){}
yd.prototype.next=function(){throw xd;};
yd.prototype.S=function(){return this};
function zd(a){if(a instanceof yd)return a;if("function"==typeof a.S)return a.S(!1);if(ja(a)){var b=0,c=new yd;c.next=function(){for(;;){if(b>=a.length)throw xd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ad(a,b){if(ja(a))try{z(a,b,void 0)}catch(c){if(c!==xd)throw c;}else{a=zd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==xd)throw c;}}}
function Bd(a){if(ja(a))return Ab(a);a=zd(a);var b=[];Ad(a,function(a){b.push(a)});
return b}
;function Cd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Cd.prototype.getHeight=function(){return this.bottom-this.top};
Cd.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Cd.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Cd.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Dd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Dd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Dd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Dd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ed(a,b,c){if(p(b))(b=Fd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Fd(c,d);f&&(c.style[f]=e)}}
var Gd={};function Fd(a,b){var c=Gd[b];if(!c){var d=rb(b),c=d;void 0===a.style[d]&&(d=(kc?"Webkit":jc?"Moz":B?"ms":fc?"O":null)+sb(d),void 0!==a.style[d]&&(c=d));Gd[b]=c}return c}
function Hd(a,b){var c=Yc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Id(a,b){return Hd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Jd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Kd(a){if(B&&!(8<=Number(tc)))return a.offsetParent;var b=Yc(a),c=Id(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Id(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Ld(a){for(var b=new Cd(0,Infinity,Infinity,0),c=Wc(a),d=c.b.body,e=c.b.documentElement,f=fd(c.b);a=Kd(a);)if(!(B&&0==a.clientWidth||kc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Id(a,"overflow")){var g=Md(a),h=new G(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
cd(gd(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Md(a){var b=Yc(a),c=new G(0,0);var d=b?Yc(b):document;d=!B||9<=Number(tc)||dd(Wc(d).b)?d.documentElement:d.body;if(a==d)return c;a=Jd(a);b=ed(Wc(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function Nd(a){a=Jd(a);return new G(a.left,a.top)}
function Od(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Pd(a){var b=Qd;if("none"!=Id(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Qd(a){var b=a.offsetWidth,c=a.offsetHeight,d=kc&&!b&&!c;return ea(b)&&!d||!a.getBoundingClientRect?new Vc(b,c):(a=Jd(a),new Vc(a.right-a.left,a.bottom-a.top))}
function Rd(a){var b=Md(a);a=Pd(a);return new Dd(b.j,b.l,a.width,a.height)}
function Sd(a){return"rtl"==Id(a,"direction")}
function Td(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Ud(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Td(a,c):0}
var Vd={thin:2,medium:4,thick:6};function Wd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Vd?Vd[c]:Td(a,c)}
;function Xd(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=Id(h,"position")){var n=Md(h);l||(l=(l=Sd(h))&&jc?-h.scrollLeft:!l||hc&&sc("8")||"visible"==Id(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft,n=Uc(n,new G(l,h.scrollTop)))}}h=n||new G;n=Rd(a);if(l=Ld(a)){var q=new Dd(l.left,l.top,l.right-l.left,l.bottom-l.top),l=Math.max(n.left,q.left),R=Math.min(n.left+n.width,q.left+q.width);if(l<=R){var P=Math.max(n.top,q.top),
q=Math.min(n.top+n.height,q.top+q.height);P<=q&&(n.left=l,n.top=P,n.width=R-l,n.height=q-P)}}l=Wc(a);P=Wc(c);if(l.b!=P.b){var R=l.b.body;var P=gd(P.b),q=new G(0,0);var E=(E=Yc(R))?gd(E):window;b:{try{cc(E.parent);var u=!0;break b}catch(ic){}u=!1}if(u){u=R;do{var ka=E==P?Md(u):Nd(u);q.j+=ka.j;q.l+=ka.l}while(E&&E!=P&&E!=E.parent&&(u=E.frameElement)&&(E=E.parent))}u=Uc(q,Md(R));!B||9<=Number(tc)||dd(l.b)||(u=Uc(u,ed(l.b)));n.left+=u.j;n.top+=u.l}a=Yd(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);
b=new G(b,n.top+(a&1?n.height:0));b=Uc(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var S;g&&(S=Ld(c))&&(S.top-=h.l,S.right-=h.j,S.bottom-=h.l,S.left-=h.j);return Zd(b,c,d,f,S,g,void 0)}
function Zd(a,b,c,d,e,f,g){a=new G(a.j,a.l);var h=Yd(b,c);c=Pd(b);g=g?new Vc(g.width,g.height):new Vc(c.width,c.height);a=new G(a.j,a.l);g=new Vc(g.width,g.height);var l=0;if(d||0!=h)h&4?a.j-=g.width+(d?d.right:0):h&2?a.j-=g.width/2:d&&(a.j+=d.left),h&1?a.l-=g.height+(d?d.bottom:0):d&&(a.l+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.j<e.left||d.j>=e.right)&&(f&=-2);132==(f&132)&&(d.l<e.top||d.l>=e.bottom)&&(f&=-5);d.j<e.left&&f&1&&(d.j=e.left,l|=1);if(f&16){var n=d.j;d.j<e.left&&(d.j=e.left,l|=
4);d.j+h.width>e.right&&(h.width=Math.min(e.right-d.j,n+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.j+h.width>e.right&&f&1&&(d.j=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.j<e.left?16:0)|(d.j+h.width>e.right?32:0));d.l<e.top&&f&4&&(d.l=e.top,l|=2);f&32&&(n=d.l,d.l<e.top&&(d.l=e.top,l|=8),d.l+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.l,n+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.l+h.height>e.bottom&&f&4&&(d.l=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.l<
e.top?64:0)|(d.l+h.height>e.bottom?128:0));e=l}else e=256;l=e}f=new Dd(0,0,0,0);f.left=a.j;f.top=a.l;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new G(f.left,f.top);g instanceof G?(a=g.j,g=g.l):(a=g,g=void 0);b.style.left=Od(a,!1);b.style.top=Od(g,!1);g=new Vc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=dd(Wc(Yc(b)).b),!B||sc("10")||g&&sc("8")?(b=b.style,jc?b.MozBoxSizing="border-box":kc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(B?(h=Ud(b,"paddingLeft"),d=Ud(b,"paddingRight"),f=Ud(b,"paddingTop"),g=Ud(b,"paddingBottom"),g=new Cd(f,d,g,h)):(h=Hd(b,"paddingLeft"),d=Hd(b,"paddingRight"),f=Hd(b,"paddingTop"),g=Hd(b,"paddingBottom"),g=new Cd(parseFloat(f),parseFloat(d),parseFloat(g),parseFloat(h))),!B||9<=Number(tc)?(h=Hd(b,"borderLeftWidth"),d=Hd(b,"borderRightWidth"),f=Hd(b,"borderTopWidth"),b=Hd(b,"borderBottomWidth"),b=new Cd(parseFloat(f),parseFloat(d),parseFloat(b),
parseFloat(h))):(h=Wd(b,"borderLeft"),d=Wd(b,"borderRight"),f=Wd(b,"borderTop"),b=Wd(b,"borderBottom"),b=new Cd(f,d,b,h)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function Yd(a,b){return(b&8&&Sd(a)?b^4:b)&-9}
;function $d(a,b){this.b=0;this.B=void 0;this.o=this.f=this.i=null;this.v=this.w=!1;if(a!=ga)try{var c=this;a.call(b,function(a){ae(c,2,a)},function(a){ae(c,3,a)})}catch(d){ae(this,3,d)}}
function be(){this.next=this.context=this.f=this.i=this.b=null;this.o=!1}
be.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.o=!1};
var ce=new Fb(function(){return new be},function(a){a.reset()},100);
function de(a,b,c){var d=ce.get();d.i=a;d.f=b;d.context=c;return d}
$d.prototype.then=function(a,b,c){return ee(this,la(a)?a:null,la(b)?b:null,c)};
$d.prototype.then=$d.prototype.then;$d.prototype.$goog_Thenable=!0;$d.prototype.cancel=function(a){0==this.b&&Xb(function(){var b=new fe(a);ge(this,b)},this)};
function ge(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.o||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?ge(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):he(c),ie(c,e,3,b)))}a.i=null}else ae(a,3,b)}
function je(a,b){a.f||2!=a.b&&3!=a.b||ke(a);a.o?a.o.next=b:a.f=b;a.o=b}
function ee(a,b,c,d){var e=de(null,null,null);e.b=new $d(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!ea(e)&&b instanceof fe?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;je(a,e);return e.b}
$d.prototype.J=function(a){this.b=0;ae(this,2,a)};
$d.prototype.R=function(a){this.b=0;ae(this,3,a)};
function ae(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.J,f=a.R;if(d instanceof $d){je(d,de(e||ga,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ma(d))try{var l=d.then;if(la(l)){le(d,l,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.B=c,a.b=b,a.i=null,ke(a),3!=b||c instanceof fe||me(a,c))}}
function le(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function ke(a){a.w||(a.w=!0,Xb(a.F,a))}
function he(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
$d.prototype.F=function(){for(var a;a=he(this);)ie(this,a,this.b,this.B);this.w=!1};
function ie(a,b,c,d){if(3==c&&b.f&&!b.o)for(;a&&a.v;a=a.i)a.v=!1;if(b.b)b.b.i=null,ne(b,c,d);else try{b.o?b.i.call(b.context):ne(b,c,d)}catch(e){oe.call(null,e)}Gb(ce,b)}
function ne(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function me(a,b){a.v=!0;Xb(function(){a.v&&oe.call(null,b)})}
var oe=Rb;function fe(a){lb.call(this,a)}
w(fe,lb);fe.prototype.name="cancel";function K(a){Ac.call(this);this.B=1;this.v=[];this.w=0;this.b=[];this.f={};this.F=!!a}
w(K,Ac);k=K.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
function pe(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.P(d),b.apply(void 0,arguments))},a)}
function qe(a,b,c){if(b=a.f[b]){var d=a.b;(b=xb(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.P(b)}}
k.P=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.w)this.v.push(a),this.b[a+1]=ga;else{if(c){var d=tb(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.H=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];re(this.b[g+1],this.b[g+2],d)}else{this.w++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.w--,0<this.v.length&&0==this.w)for(;g=this.v.pop();)this.P(g)}}return 0!=e}return!1};
function re(a,b,c){Xb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(z(b,this.P,this),delete this.f[a])}else this.b.length=0,this.f={}};
function se(a,b){if(b){var c=a.f[b];return c?c.length:0}var c=0,d;for(d in a.f)c+=se(a,d);return c}
k.aa=function(){K.D.aa.call(this);this.clear();this.v.length=0};function te(){}
;function ue(){}
w(ue,te);ue.prototype.clear=function(){var a=Bd(this.S(!0)),b=this;z(a,function(a){b.remove(a)})};function ve(a){this.b=a}
w(ve,ue);k=ve.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!p(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.S=function(a){var b=0,c=this.b,d=new yd;d.next=function(){if(b>=c.length)throw xd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!p(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function we(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(we,ve);function xe(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(xe,ve);var ye=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(a){return a?decodeURI(a):a}
function Ae(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Be(a,b,c){if("array"==ia(b))for(var d=0;d<b.length;d++)Be(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ce(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Be(a[d],a[d+1],c);return c.join("&")}
function De(a){var b=[],c;for(c in a)Be(c,a[c],b);return b.join("&")}
function Ee(a,b){var c=2==arguments.length?Ce(arguments[1],0):Ce(arguments,1);return Ae(a,c)}
function Fe(a,b){var c=De(b);return Ae(a,c)}
;var Ge=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",Ge);function He(a){var b=arguments;if(1<b.length)Ge[b[0]]=b[1];else{var b=b[0],c;for(c in b)Ge[c]=b[c]}}
function L(a,b){return a in Ge?Ge[a]:b}
;function Ie(a){var b=r("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),He("ERRORS",b))}
function Je(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ie(b)}}:a}
;function M(a,b){la(a)&&(a=Je(a));return window.setTimeout(a,b)}
;var Ke=r("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.P;K.prototype.publish=K.prototype.H;K.prototype.clear=K.prototype.clear;v("ytPubsubPubsubInstance",Ke);var Le=r("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",Le);var Me=r("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",Me);var Ne=r("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",Ne);
function Oe(a,b,c){var d=Pe();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){Le[e]&&b.apply(c||window,d)};
try{Ne[a]?g():M(g,0)}catch(h){Ie(h)}},c);
Le[e]=!0;Me[a]||(Me[a]=[]);Me[a].push(e);return e}return 0}
function Pe(){return r("ytPubsubPubsubInstance")}
function N(a,b){var c=Pe();return c?c.publish.apply(c,arguments):!1}
function Qe(a,b){Ne[a]=!0;var c=Pe();c&&c.publish.apply(c,arguments);Ne[a]=!1}
function Re(a){var b=Pe();b&&(fa(a)?a=[a]:p(a)&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete Le[a]}))}
;function Se(a,b){return a?a.dataset?a.dataset[Te(b)]:a.getAttribute("data-"+b):null}
var Ue={};function Te(a){return Ue[a]||(Ue[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function Ve(a,b){a&&(a.dataset?delete a.dataset[Te(b)]:a.removeAttribute("data-"+b))}
function We(a,b,c){a&&(a.dataset?a.dataset[Te(b)]=String(c):a.setAttribute("data-"+b,c))}
;function O(a,b){this.version=a;this.args=b}
function Xe(a,b){if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!a.La){var c=new a;a.La=c.version}var d=a.La}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{return Reflect.construct(a,Ab(b.args))}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
O.prototype.Db=function(){return{version:this.version,args:this.args}};function Q(a,b){this.topic=a;this.T=b}
Q.prototype.toString=function(){return this.topic};function Ye(a){var b=void 0;isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():M(a,b||0)}
;var Ze=r("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.P;K.prototype.publish=K.prototype.H;K.prototype.clear=K.prototype.clear;v("ytPubsub2Pubsub2Instance",Ze);var $e=r("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",$e);var af=r("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",af);var bf=r("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",bf);
v("ytPubsub2Pubsub2SkipSubKey",null);function T(a,b){var c=cf();return c?c.publish.call(c,a.toString(),a,b):!1}
function U(a,b,c){var d=cf();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=r("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if($e[e])try{if(g&&a instanceof Q&&a!=d)try{g=Xe(a.T,g)}catch(l){throw l.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){Ie(l)}},bf[a.toString()]?r("yt.scheduler.instance")?Ye(f):M(f,0):f())});
$e[e]=!0;af[a.toString()]||(af[a.toString()]=[]);af[a.toString()].push(e);return e}
function cf(){return r("ytPubsub2Pubsub2Instance")}
function df(a,b,c){window.ytPubsub2Pubsub2SkipSubKey=a;T.call(null,b,c);window.ytPubsub2Pubsub2SkipSubKey=null}
function ef(a){var b=cf();b&&(fa(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete $e[a]}))}
;var ff=0;function gf(a,b){var c=$c(document,a,null,b);return c.length?c[0]:null}
var hf=r("ytDomDomGetNextId")||function(){return++ff};
v("ytDomDomGetNextId",hf);function jf(){var a=document,b;wb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function kf(a){var b=a.__yt_uid_key;b||(b=hf(),a.__yt_uid_key=b);return b}
function lf(a,b){a=H(a);b=H(b);return!!wd(a,function(a){return a===b},!0,void 0)}
function mf(){Hc(document.body,"hide-players",!1);z(Zc("preserve-players"),function(a){F(a,"preserve-players")})}
;var nf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function of(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in nf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
of.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
of.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
of.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ob=r("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",Ob);var pf=r("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",pf);function qf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nb(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=qf(a,b,c,d);if(e)return e;var e=++pf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new of(d);if(!wd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new of(b);
b.currentTarget=a;return c.call(a,b)};
g=Je(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ob[e]=[a,b,c,g,d];return e}
function rf(a,b,c){var d=a||document;return V(d,"click",function(a){var e=wd(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function sf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function tf(a,b,c){return rf(a,b,function(a){return C(a,c)})}
function uf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in Ob){var b=Ob[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ob[a]}}))}
;var vf={},wf="ontouchstart"in document;function xf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return wd(c,function(a){return C(a,b)},!0,d)}
function yf(a){var b,c="mouseover"==a.type&&"mouseenter"in vf||"mouseout"==a.type&&"mouseleave"in vf,d=a.type in vf||c;if("HTML"!=a.target.tagName&&d){if(c){var c="mouseover"==a.type?"mouseenter":"mouseleave",d=vf[c],e;for(e in d.f)(b=xf(c,e,a.target))&&!wd(a.relatedTarget,function(a){return a==b},!0)&&d.H(e,b,c,a)}if(c=vf[a.type])for(e in c.f)(b=xf(a.type,e,a.target))&&c.H(e,b,a.type,a)}}
V(document,"blur",yf,!0);V(document,"change",yf,!0);V(document,"click",yf);V(document,"focus",yf,!0);V(document,"mouseover",yf);V(document,"mouseout",yf);V(document,"mousedown",yf);V(document,"keydown",yf);V(document,"keyup",yf);V(document,"keypress",yf);V(document,"cut",yf);V(document,"paste",yf);wf&&(V(document,"touchstart",yf),V(document,"touchend",yf),V(document,"touchcancel",yf));function zf(a){this.v=a;this.B={};this.J=[];this.F=[]}
k=zf.prototype;k.C=function(a){return J(a,X(this))};
function X(a,b){return"yt-uix"+(a.v?"-"+a.v:"")+(b?"-"+b:"")}
k.unregister=function(){Re(this.J);this.J.length=0;ef(this.F);this.F.length=0};
k.init=ga;k.dispose=ga;function Af(a,b,c){a.J.push(Oe(b,c,a))}
function Bf(a,b,c){a.F.push(U(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=t(c,a);b in vf||(vf[b]=new K);vf[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in vf){var e=vf[b];qe(e,X(a,d),a.B[c]);0>=se(e)&&(e.dispose(),delete vf[b])}delete a.B[c]}
k.N=function(a,b,c){var d=this.g(a,b);if(d&&(d=r(d))){var e=Db(arguments,2);Cb(e,0,0,a);d.apply(null,e)}};
k.g=function(a,b){return Se(a,b)};
function Cf(a,b){We(a,"tooltip-text",b)}
;var Df=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",Df);function Ef(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ia(b[f])?Bb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Ff(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Ef(d[1]||""),e;for(e in b)d[e]=b[e];return Fe(a,d)+c}
;function Gf(a){a=void 0===a?{}:a;la(a)&&(a={callback:a});if(a.gapiHintOverride||L("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Ef(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&Qb(a,{_c:{jsl:{h:b}}})}jb("gapi.iframes:gapi.iframes.style.common",a)}
;function Hf(){return r("gapi.iframes.getContext")()}
function If(){return Hf().getParentIframe()}
function Jf(a,b){var c=c||Hf();c.addOnConnectHandler("yt",a,void 0,b)}
function Kf(a){var b=Hf(),b=b||Hf();b.connectIframes(a)}
;ta();var Lf=ea(XMLHttpRequest)?function(){return new XMLHttpRequest}:ea(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Mf(){if(!Lf)return null;var a=Lf();return"open"in a?a:null}
;var Nf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function Of(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(ye)[1]||null,e=ze(a.match(ye)[3]||null);d&&e?(d=c,c=a.match(ye),d=d.match(ye),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ze(c.match(ye)[3]||null)==e&&(Number(c.match(ye)[4]||null)||null)==(Number(a.match(ye)[4]||null)||null):!0;for(var f in Nf){if((e=d=L(Nf[f]))&&!(e=c)){var g=a,e=f,h=L("CORS_HEADER_WHITELIST")||{};e=(g=ze(g.match(ye)[3]||null))?(h=h[g])?yb(h,e):!1:!0}e&&(b[f]=d)}return b}
function Pf(a,b){var c=L("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Vb&&(!ze(a.match(ye)[3]||null)||b.withCredentials||ze(a.match(ye)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.L&&b.L[c])}
function Qf(a,b){var c=b.format||"JSON";b.Wb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=L("XSRF_FIELD_NAME",void 0),e=L("XSRF_TOKEN",void 0),f=b.Ka;f&&(f[d]&&delete f[d],a=Ff(a,f||{}));var g=b.postBody||"",f=b.L;Pf(a,b)&&(f||(f={}),f[d]=e);f&&p(g)&&(d=Ef(g),Qb(d,f),g=b.Cb&&"JSON"==b.Cb?JSON.stringify(d):De(d));var h=!1,l,n=Rf(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Sf(c,a,b.Ub);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.ea&&b.ea.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.zb&&0<b.timeout&&(l=M(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.zb.call(b.context||m,n))},b.timeout))}
function Sf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Tf(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=Uf(a)})}c&&Vf(d);
return d}
function Vf(a){if(ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Tc(a[b]);a[c]=d}else Vf(a[b])}}
function Tf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Uf(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Rf(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Je(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Mf();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=Of(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var Wf={},Xf=0;function Yf(a){var b=new Image,c=""+Xf++;Wf[c]=b;b.onload=b.onerror=function(){delete Wf[c]};
b.src=a}
;function Zf(a){O.call(this,1,arguments);this.b=a}
w(Zf,O);function $f(a){O.call(this,1,arguments);this.b=a}
w($f,O);function ag(a,b,c){O.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
w(ag,O);function bg(a,b,c,d,e){O.call(this,2,arguments);this.f=a;this.b=b;this.o=c||null;this.i=d||null;this.source=e||null}
w(bg,O);function cg(a,b,c){O.call(this,1,arguments);this.b=a;this.f=b}
w(cg,O);function dg(a,b,c,d,e,f,g){O.call(this,1,arguments);this.f=a;this.v=b;this.b=c;this.w=d||null;this.o=e||null;this.i=f||null;this.source=g||null}
w(dg,O);
var eg=new Q("subscription-batch-subscribe",Zf),fg=new Q("subscription-batch-unsubscribe",Zf),gg=new Q("subscription-subscribe",bg),hg=new Q("subscription-subscribe-loading",$f),ig=new Q("subscription-subscribe-loaded",$f),jg=new Q("subscription-subscribe-success",cg),kg=new Q("subscription-subscribe-external",bg),lg=new Q("subscription-unsubscribe",dg),mg=new Q("subscription-unsubscirbe-loading",$f),ng=new Q("subscription-unsubscribe-loaded",$f),og=new Q("subscription-unsubscribe-success",$f),pg=
new Q("subscription-external-unsubscribe",dg),qg=new Q("subscription-enable-ypc",$f),rg=new Q("subscription-disable-ypc",$f),sg=new Q("subscription-prefs",ag),tg=new Q("subscription-prefs-success",ag),ug=new Q("subscription-prefs-failure",ag);var vg="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),wg=[hg,ig,jg,mg,ng,og,kg,pg],xg=[hg,ig,jg,mg,ng,og,qg,rg];function yg(){var a=jf();return a?a:null}
;function zg(a,b){(a=H(a))&&a.style&&(a.style.display=b?"":"none",Hc(a,"hid",!b))}
function Ag(a){return(a=H(a))?"none"!=a.style.display&&!C(a,"hid"):!1}
function Bg(a){z(arguments,function(a){!ja(a)||a instanceof Element?zg(a,!0):z(a,function(a){Bg(a)})})}
function Cg(a){z(arguments,function(a){!ja(a)||a instanceof Element?zg(a,!1):z(a,function(a){Cg(a)})})}
;function Dg(){zf.call(this,"tooltip");this.b=0;this.f={}}
w(Dg,zf);ha(Dg);k=Dg.prototype;k.register=function(){Y(this,"mouseover",this.W);Y(this,"mouseout",this.K);Y(this,"focus",this.sa);Y(this,"blur",this.na);Y(this,"click",this.K);Y(this,"touchstart",this.Ja);Y(this,"touchend",this.Y);Y(this,"touchcancel",this.Y)};
k.unregister=function(){Z(this,"mouseover",this.W);Z(this,"mouseout",this.K);Z(this,"focus",this.sa);Z(this,"blur",this.na);Z(this,"click",this.K);Z(this,"touchstart",this.Ja);Z(this,"touchend",this.Y);Z(this,"touchcancel",this.Y);this.dispose();Dg.D.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.K(this.f[a]);this.f={}};
k.W=function(a){if(!(this.b&&1E3>ta()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(Ve(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Eg(this,a);Ve(a,"tooltip-show-timer")},this),c=parseInt(this.g(a,"tooltip-show-delay"),10)||0,b=M(b,c);
We(a,"tooltip-show-timer",b.toString());a.title&&(Cf(a,Fg(this,a)),a.title="");b=na(a).toString();this.f[b]=a}};
k.K=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Ve(a,"tooltip-show-timer"));b=t(function(){if(a){var b=H(Gg(this,a));b&&(Hg(b),hd(b),Ve(a,"content-id"));b=H(Gg(this,a,"arialabel"));hd(b)}Ve(a,"tooltip-hide-timer")},this);
b=M(b,50);We(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=na(a).toString();delete this.f[b]};
k.sa=function(a){this.b=0;this.W(a)};
k.na=function(a){this.b=0;this.K(a)};
k.Ja=function(a,b,c){c.changedTouches&&(this.b=0,(a=xf(b,X(this),c.changedTouches[0].target))&&this.W(a))};
k.Y=function(a,b,c){c.changedTouches&&(this.b=ta(),(a=xf(b,X(this),c.changedTouches[0].target))&&this.K(a))};
function Ig(a,b,c){Cf(b,c);a=a.g(b,"content-id");(a=H(a))&&ld(a,c)}
function Fg(a,b){return a.g(b,"tooltip-text")||b.title}
function Eg(a,b){if(b){var c=Fg(a,b);if(c){var d=H(Gg(a,b));if(!d){d=document.createElement("div");d.id=Gg(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=Jg(a,b),l=Gg(a,b,"content");g.id=l;We(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=td(b);l=Gg(a,b,"arialabel");f=document.createElement("div");D(f,X(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;ld(f,n);b.setAttribute("aria-labelledby",l);l=yg()||document.body;l.appendChild(f);l.appendChild(d);Ig(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",D(g,X(a,"normal-wrap")));g=C(b,X(a,"reverse"));Kg(a,b,d,e,h,g)||Kg(a,b,d,e,h,!g);var q=X(a,"tip-visible");
M(function(){D(d,q)},0)}}}}
function Kg(a,b,c,d,e,f){Hc(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Pd(b);f=new G((h.width-10)/2,f?h.height:0);var l=Md(b);Zd(new G(l.j+f.j,l.l+f.l),c,g);f=cd(window);if(1==c.nodeType)var n=Nd(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new G(c.clientX,c.clientY);c=Pd(d);var q=Math.floor(c.width/2),g=!!(f.height<n.l+h.height),h=!!(n.l<h.height),l=!!(n.j<q);f=!!(f.width<n.j+q);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||l)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Gg(a,b,c){a=X(a)+kf(b);c&&(a+="-"+c);return a}
function Jg(a,b){var c=null;lc&&C(b,X(a,"masked"))&&((c=H("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Bg(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function Hg(a){var b=H("yt-uix-tooltip-shared-mask"),c=b&&wd(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Cg(b),document.body.appendChild(b))}
;function Lg(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=Ee(b,"mode","subscribe"),b=Ee("/signin?context=popup","next",b),b=Ee(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Oe("LOGGED_IN",function(b){Re(L("LOGGED_IN_PUBSUB_KEY",void 0));He("LOGGED_IN",!0);a(b)});
He("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
v("yt.pubsub.publish",N);var Mg=Object.create(null);Mg.log_event="GENERIC_EVENT_LOGGING";Mg.log_interaction="INTERACTION_LOGGING";var Ng=r("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",Ng);var Og=r("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",Og);var Pg=r("ytLoggingTransportDispatchedStats_")||{};v("ytLoggingTransportDispatchedStats_",Pg);var Qg=r("ytLoggingTransportCapturedTime_")||{};v("ytytLoggingTransportCapturedTime_",Qg);(new we).isAvailable();(new xe).isAvailable();function Rg(){zf.call(this,"button");this.b=null;this.i=[];this.f={}}
w(Rg,zf);ha(Rg);k=Rg.prototype;k.register=function(){Y(this,"click",this.Ma);Y(this,"keydown",this.wa);Y(this,"keypress",this.xa);Af(this,"page-scroll",this.nb)};
k.unregister=function(){Z(this,"click",this.Ma);Z(this,"keydown",this.wa);Z(this,"keypress",this.xa);Sg(this);this.f={};Rg.D.unregister.call(this)};
k.Ma=function(a){a&&!a.disabled&&(Tg(this,a),this.click(a))};
k.wa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=Ug(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=md(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ub;else"table"==e&&(f=this.tb);f&&Vg(this,a,b,c,t(f,this))}}};
k.nb=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=J(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Wg(this,d,b,!0)}};
function Vg(a,b,c,d,e){var f=Ag(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Xg(a,c)){if(ea(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var l=void 0===l?"":l;var n=void 0===n?window:n;n=n.location;h=Fe(b.href,h)+l;h instanceof Mc||h instanceof Mc||(h=h.ca?h.ba():String(h),Oc.test(h)||(h="about:invalid#zClosurez"),h=Pc(h));h instanceof Mc&&h.constructor===Mc&&h.f===Nc?h=h.b:
(ia(h),h="type_error:SafeUrl");n.href=h}else uf(b)}else g&&Yg(a,b);else f?27==d.keyCode?(Xg(a,c),Yg(a,b)):e(b,c,d):(h=C(b,X(a,"reverse"))?38:40,d.keyCode==h&&(uf(b),d.preventDefault()))}
k.xa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=Ug(this,a),Ag(a)&&c.preventDefault())};
function Xg(a,b){var c=X(a,"menu-item-highlight"),d=I(c,b);d&&F(d,c);return d}
function Zg(a,b,c){D(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+na(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.tb=function(a,b,c){var d=Xg(this,b);if(d){var e=gf("table",b);b=$c(document,"td",null,e);d=$g(d,b,$c(document,"td",null,gf("tr",e)).length,c);-1!=d&&(Zg(this,a,b[d]),c.preventDefault())}};
k.ub=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Xg(this,b);d&&(b=ub($c(document,"li",null,b),Ag),Zg(this,a,b[$g(d,b,1,c)]),c.preventDefault())}};
function $g(a,b,c,d){var e=b.length;a=tb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function ah(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),Cg(c),b.iframeMask=c);return c}
function Wg(a,b,c,d){var e=J(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=Rd(b);if(C(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(q){}}C(b,"flip")&&(C(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.g(b,"button-has-sibling-menu")?l=Kd(e):a.g(b,"button-menu-root-container")&&(l=bh(a,b));B&&!sc("8")&&(l=null);if(l){var n=Rd(l);n=new Cd(-n.top,n.left,n.top,-n.left)}l=new G(0,1);C(b,X(a,"center-menu"))&&(l.j-=Math.round((Pd(c).width-Pd(b).width)/
2));d&&(l.l+=ed(document).l);if(a=ah(a,b))b=Pd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Xd(e,f,a,g,l,n,197),d&&Ed(a,"position","fixed");Xd(e,f,c,g,l,n,197)}
function bh(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return J(b,c)}return document.body}
k.Oa=function(a){if(a){var b=Ug(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=bh(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=ah(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[kf(a).toString()]=b);Wg(this,a,b,c);Qe("yt-uix-button-menu-before-show",a,b);Bg(b);d&&Bg(d);
this.N(a,"button-menu-action",!0);D(a,X(this,"active"));b=t(this.Na,this,a,!1);d=t(this.Na,this,a,!0);c=t(this.Fb,this,a,void 0);this.b&&Ug(this,this.b)==Ug(this,a)||Sg(this);N("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function Yg(a,b){if(b){var c=Ug(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Cg(c);a.N(b,"button-menu-action",!1);var d=ah(a,b),e=kf(c).toString();delete a.f[e];M(function(){d&&d.parentNode&&(Cg(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=J(b,X(a,"group")),f=[X(a,"active")];
e&&f.push(X(a,"group-active"));Gc(b,f);N("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
k.Fb=function(a,b){var c=Ug(this,a);if(c){b&&(b instanceof Qc?c.innerHTML=Sc(b):ld(c,b));var d=!!this.g(a,"button-menu-fixed");Wg(this,a,c,d)}};
k.Na=function(a,b,c){c=sf(c);var d=J(c,X(this));if(d){var d=Ug(this,d),e=Ug(this,a);if(d==e)return}var d=J(c,X(this,"menu")),e=d==Ug(this,a),f=C(c,X(this,"menu-item")),g=C(c,X(this,"menu-close"));if(!d||e&&(f||g))Yg(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=I(X(this,"content"),a))&&ld(a,td(c)),ch(this,d,c))};
function ch(a,b,c){var d=X(a,"menu-item-selected");z(Zc(d,b),function(a){F(a,d)});
D(c.parentNode,d)}
function Ug(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id"),c=c&&H(c),d=X(a,"menu");c?Fc(c,[d,X(a,"menu-external")]):c=I(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return C(a,X(this,"toggled"))};
function Tg(a,b){if(a.g(b,"button-toggle")){var c=J(b,X(a,"group")),d=X(a,"toggled"),e=C(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");z(Zc(X(a),c),function(a){a!=b||"optional"==f&&e?(F(a,d),a.removeAttribute("aria-pressed")):(D(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Jc(b,d)}}
k.click=function(a){if(Ug(this,a)){var b=Ug(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Yg(this,c),M(t(this.Oa,this,a),1)):Ag(b)?Yg(this,a):this.Oa(a)}a.focus()}this.N(a,"button-action")};
function Sg(a){a.b&&Yg(a,a.b)}
;function dh(a){zf.call(this,a);this.i=null}
w(dh,zf);k=dh.prototype;k.C=function(a){var b=zf.prototype.C.call(this,a);return b?b:a};
k.register=function(){Af(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
k.dispose=function(){dh.D.dispose.call(this);eh(this)};
k.g=function(a,b){var c=dh.D.g.call(this,a,b);return c?c:(c=dh.D.g.call(this,a,"card-config"))&&(c=r(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.C(a);if(b){D(b,X(this,"active"));var c=fh(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;gh(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.N(b,"card-action",a);this.i=a;Cg(c);M(t(function(){e||(Bg(c),N("yt-uix-card-show",b,a,c));hh(c);D(c,d);N("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function fh(a,b,c){var d=c||b,e=X(a,"card");c=ih(a,d);var f=H(X(a,"card")+kf(d));if(f)return a=I(X(a,"card-body"),f),kd(a,c)||(hd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+kf(d);f.className=e;(d=a.g(d,"card-class"))&&Fc(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;hd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function gh(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=I(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&l){var q=13;var R=8}else n&&!l?(q=12,R=9):!n&&l?(q=9,R=12):(q=8,R=13);var P=Sd(document.body),f=Sd(b);P!=f&&(q^=4);if(d){f=b.offsetHeight/2-12;var E=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,E=new G(b.offsetWidth+6,-12);var u=Pd(c),f=Math.min(f,
(d?u.height:u.width)-24-6);6>f&&(f=6,d?E.l+=12-b.offsetHeight/2:E.j+=12-b.offsetWidth/2);u=null;g||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");Hc(c,b,n);Hc(c,a,l);u=Xd(e,q,c,R,E,null,u);!g&&u&&(u&48&&(n=!n,q^=4,R^=4),u&192&&(l=!l,q^=1,R^=1),Hc(c,b,n),Hc(c,a,l),Xd(e,q,c,R,E));h&&(e=parseInt(c.style.top,10),g=ed(document).l,Ed(c,"position","fixed"),Ed(c,"top",e-g+"px"));P&&(c.style.right="",e=Rd(c),e.left=e.left||parseInt(c.style.left,10),g=cd(window),c.style.left="",c.style.right=g.width-e.left-
e.width+"px");e=I("yt-uix-card-body-arrow",c);g=I("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!P&&n||P&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=I("yt-uix-card-arrow",c);n=I("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Pd(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
k.hide=function(a){if(a=this.C(a)){var b=H(X(this,"card")+kf(a));b&&(F(a,X(this,"active")),F(b,X(this,"card-visible")),Cg(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(hd(b.cardMask),b.cardMask=null))}};
function eh(a){a.i&&a.hide(a.i)}
k.Eb=function(a,b){var c=this.C(a);if(c){if(b){var d=ih(this,c);if(!d)return;b instanceof Qc?d.innerHTML=Sc(b):ld(d,b)}C(c,X(this,"active"))&&(c=fh(this,a,c),gh(this,a,c),Bg(c),hh(c))}};
k.isActive=function(a){return(a=this.C(a))?C(a,X(this,"active")):!1};
function ih(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?H(c):I(d,b))||(c=document.createElement("div"));var f=c;F(f,d);D(f,e);b.cardContentNode=c}return c}
function hh(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Fc(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function jh(){zf.call(this,"kbd-nav")}
var kh;w(jh,zf);ha(jh);k=jh.prototype;k.register=function(){Y(this,"keydown",this.ua);Af(this,"yt-uix-kbd-nav-move-in",this.Ca);Af(this,"yt-uix-kbd-nav-move-in-to",this.vb);Af(this,"yt-uix-kbd-move-next",this.Da);Af(this,"yt-uix-kbd-nav-move-to",this.U)};
k.unregister=function(){Z(this,"keydown",this.ua);W(kh)};
k.ua=function(a,b,c){var d=c.keyCode;if(a=J(a,X(this)))switch(d){case 13:case 32:this.Ca(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Lc(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,X(this));if(!c)break a;c=Lc(c,"kbdNavMoveOut")}c=H(c);this.U(c);N("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&C(a,X(this,"list")))switch(d){case 40:this.Da(b,a);break;case 38:d=document.activeElement==a,a=lh(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),mh(this,a[b]))}c.preventDefault()}};
k.Ca=function(a){var b=Lc(a,"kbdNavMoveIn"),b=H(b);nh(this,a,b);this.U(b)};
k.vb=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}nh(this,c,a);this.U(a)};
k.U=function(a){if(a)if(qd(a))a.focus();else{var b=md(a,function(a){return jd(a)?qd(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function nh(a,b,c){b&&c&&(D(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Kc&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
k.Da=function(a,b){var c=document.activeElement==b,d=lh(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),mh(this,d[c]))};
function mh(a,b){if(b){var c=vd(b,"LI");c&&(D(c,X(a,"highlight")),kh=V(b,"blur",t(function(a){F(a,X(this,"highlight"));W(kh)},a,c)))}}
function lh(a){if("UL"!=a.tagName.toUpperCase())return[];a=ub(id(a),function(a){return"LI"==a.tagName.toUpperCase()});
return ub(vb(a,function(a){return Ag(a)?md(a,function(a){return jd(a)?qd(a):!1}):!1}),function(a){return!!a})}
;function oh(){zf.call(this,"menu");this.f=this.b=null;this.i={};this.w={};this.o=null}
w(oh,zf);ha(oh);function ph(a){var b=oh.A();if(C(a,X(b)))return a;var c=b.C(a);return c?c:J(a,X(b,"content"))==b.b?b.f:null}
k=oh.prototype;k.register=function(){Y(this,"click",this.ta);Y(this,"mouseenter",this.lb);Af(this,"page-scroll",this.ob);Af(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);qh(this,a)});
this.o=new K};
k.unregister=function(){Z(this,"click",this.ta);this.f=this.b=null;W(Eb(Mb(this.i)));this.i={};Kb(this.w,function(a){hd(a)},this);
this.w={};Bc(this.o);this.o=null;oh.D.unregister.call(this)};
k.ta=function(a,b,c){a&&(b=rh(this,a),!b.disabled&&lf(c.target,b)&&sh(this,a))};
k.lb=function(a,b,c){a&&C(a,X(this,"hover"))&&lf(c.target,rh(this,a))&&sh(this,a,!0)};
k.ob=function(){this.b&&this.f&&th(this,this.f,this.b)};
function th(a,b,c){var d=uh(a,b);if(d){var e=Pd(c);if(e instanceof Vc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Od(e,!0);d.style.height=Od(f,!0)}c==a.b&&(e=9,f=8,C(b,X(a,"reversed"))&&(e^=1,f^=1),C(b,X(a,"flipped"))&&(e^=4,f^=4),a=new G(0,1),d&&Xd(b,e,d,f,a,null,197),Xd(b,e,c,f,a,null,197))}
function sh(a,b,c){vh(a,b)&&!c?qh(a,b):(wh(a,b),!a.b||lf(b,a.b)?a.Pa(b):pe(a.o,t(a.Pa,a,b)))}
k.Pa=function(a){if(a){var b=xh(this,a);if(b){Qe("yt-uix-menu-before-show",a,b);this.b?lf(a,this.b)||qh(this,this.f):(this.f=a,this.b=b,C(a,X(this,"sibling-content"))||(hd(b),document.body.appendChild(b)),b.style.minWidth=rh(this,a).offsetWidth-2+"px");var c=uh(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);F(b,X(this,"content-hidden"));th(this,a,b);Fc(rh(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);N("yt-uix-menu-show",a);yh(b);zh(this,a);N("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.Gb,this,a),e=t(this.rb,this,a),c=na(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];C(a,X(this,"indicate-selected"))&&(d=t(this.sb,this,a),this.i[c].push(V(b,"click",d)));C(a,X(this,"hover"))&&(a=t(this.mb,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
k.mb=function(a,b){var c=sf(b);c&&(lf(c,rh(this,a))||Ah(this,c)||Bh(this,a))};
k.Gb=function(a,b){var c=sf(b);if(c){if(Ah(this,c)){var d=J(c,X(this,"content"));var e=vd(c,"LI");e&&d&&kd(d,e)&&Qe("yt-uix-menu-item-clicked",c);c=J(c,X(this,"close-on-select"));if(!c)return;d=ph(c)}qh(this,d||a)}};
function wh(a,b){if(b){var c=J(b,X(a,"content"));c&&z(Zc(X(a),c),function(a){!lf(a,b)&&vh(this,a)&&Bh(this,a)},a)}}
function qh(a,b){if(b){var c=[];c.push(b);var d=xh(a,b);d&&(d=Zc(X(a),d),d=Ab(d),c=c.concat(d),z(c,function(a){vh(this,a)&&Bh(this,a)},a))}}
function Bh(a,b){if(b){var c=xh(a,b);Gc(rh(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);D(c,X(a,"content-hidden"));var d=xh(a,b);d&&ad(d,{"aria-expanded":"false"});(d=uh(a,b))&&d.parentNode&&hd(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.o&&a.o.H("ROOT_MENU_REMOVED"));N("yt-uix-menu-hide",b);c=na(b).toString();W(a.i[c]);delete a.i[c]}}
k.rb=function(a,b){var c=sf(b);c&&Ch(this,a,c)};
k.sb=function(a,b){var c=sf(b);if(c){var d=rh(this,a);if(d&&(c=vd(c,"LI")))if(c=td(c).trim(),d.hasChildNodes()){var e=Rg.A();(d=I(X(e,"content"),d))&&ld(d,c)}else ld(d,c)}};
function zh(a,b){var c=xh(a,b);if(c){z(c.children,function(a){"LI"==a.tagName&&ad(a,{role:"menuitem"})});
ad(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+na(c),c.id=d);(c=rh(a,b))&&ad(c,{"aria-controls":d})}}
function Ch(a,b,c){var d=xh(a,b);d&&C(b,X(a,"checked"))&&(a=vd(c,"LI"))&&(a=I("yt-ui-menu-item-checked-hid",a))&&(z(Zc("yt-ui-menu-item-checked",d),function(a){Ic(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Ic(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function vh(a,b){var c=xh(a,b);return c?!C(c,X(a,"content-hidden")):!1}
function yh(a){z($c(document,"UL",null,a),function(a){a.tabIndex=0;var b=jh.A();Fc(a,[X(b),X(b,"list")])})}
function xh(a,b){var c=Se(b,"menu-content-id");return c&&(c=H(c))?(Fc(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:I(X(a,"content"),b)}
function uh(a,b){var c=na(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(Ec(b),function(a){e.push(a+"-mask")});
Fc(d,e);a.w[c]=d}return d||null}
function rh(a,b){return I(X(a,"trigger"),b)}
function Ah(a,b){return lf(b,a.b)||lf(b,a.f)}
;function Dh(){dh.call(this,"clickcard");this.b={};this.f={}}
w(Dh,dh);ha(Dh);k=Dh.prototype;k.register=function(){Dh.D.register.call(this);Y(this,"click",this.qa,"target");Y(this,"click",this.pa,"close")};
k.unregister=function(){Dh.D.unregister.call(this);Z(this,"click",this.qa,"target");Z(this,"click",this.pa,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
k.qa=function(a,b,c){c.preventDefault();b=vd(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=p(b)?a.getElementById(b):b;b=this.C(a);this.g(b,"disabled")||(C(b,X(this,"active"))?(this.hide(a),F(b,X(this,"active"))):(this.show(a),D(b,X(this,"active"))))}};
k.show=function(a){Dh.D.show.call(this,a);var b=this.C(a),c=na(a).toString();if(!Se(b,"click-outside-persists")){if(this.b[c])return;var b=V(document,"click",t(this.ra,this,a)),d=V(window,"blur",t(this.ra,this,a));this.b[c]=[b,d]}a=V(window,"resize",t(this.Eb,this,a,void 0));this.f[c]=a};
k.hide=function(a){Dh.D.hide.call(this,a);a=na(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
k.ra=function(a,b){var c="yt-uix"+(this.v?"-"+this.v:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(ph(b.target),c));(d=d||J(document.activeElement,c)||J(ph(document.activeElement),c))||this.hide(a)};
k.pa=function(a){(a=J(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Eh(){dh.call(this,"hovercard")}
w(Eh,dh);ha(Eh);k=Eh.prototype;k.register=function(){Y(this,"mouseenter",this.ya,"target");Y(this,"mouseleave",this.Aa,"target");Y(this,"mouseenter",this.za,"card");Y(this,"mouseleave",this.Ba,"card")};
k.unregister=function(){Z(this,"mouseenter",this.ya,"target");Z(this,"mouseleave",this.Aa,"target");Z(this,"mouseenter",this.za,"card");Z(this,"mouseleave",this.Ba,"card")};
k.ya=function(a){if(Fh!=a){Fh&&(this.hide(Fh),Fh=null);var b=t(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10),b=M(b,-1<c?c:200);We(a,"card-timer",b.toString());Fh=a;a.alt&&(We(a,"card-alt",a.alt),a.alt="");a.title&&(We(a,"card-title",a.title),a.title="")}};
k.Aa=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.C(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;M(t(this.pb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
k.pb=function(a){this.C(a).isCardHidable&&(this.hide(a),Fh=null)};
k.za=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.Ba=function(a){a&&this.hide(a.cardTargetNode)};
var Fh=null;function Gh(a,b,c,d,e,f){this.b=a;this.B=null;this.i=I("yt-dialog-fg",this.b)||this.b;if(a=I("yt-dialog-title",this.i)){var g="yt-dialog-title-"+na(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.R=I("yt-dialog-focus-trap",this.b);this.ha=!1;this.o=new K;this.F=[];this.F.push(tf(this.b,t(this.wb,this),"yt-dialog-dismiss"));this.F.push(V(this.R,"focus",t(this.kb,this),!0));Hh(this);this.Ta=b;this.ab=c;this.Za=d;this.J=e;this.bb=f;this.w=
this.v=null}
var Ih={LOADING:"loading",Lb:"content",Sb:"working"};function Jh(a,b){a.V()||a.o.subscribe("post-all",b)}
function Hh(a){a=I("yt-dialog-fg-content",a.b);var b=[];Kb(Ih,function(a){b.push("yt-dialog-show-"+a)});
Gc(a,b);D(a,"yt-dialog-show-content")}
k=Gh.prototype;
k.show=function(){if(!this.V()){this.B=document.activeElement;if(!this.Za){this.f||(this.f=H("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=cd(a).height,dd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Bg(this.f)}this.va();c=Kh(this);Lh(c);this.v=V(document,"keydown",t(this.qb,this));c=this.b;d=Oe("player-added",this.va,this);We(c,"player-ready-pubsub-key",d);this.ab&&(this.w=V(document,"click",t(this.Ab,this)));Bg(this.b);this.i.setAttribute("tabindex","0");Mh(this);this.J||D(document.body,"yt-dialog-active");Sg(Rg.A());eh(Dh.A());eh(Eh.A());N("yt-ui-dialog-show-complete",this)}};
function Nh(){return wb(Zc("yt-dialog"),function(a){return Ag(a)})}
k.va=function(){if(!this.bb){var a=this.b;Hc(document.body,"hide-players",!0);a&&Hc(a,"preserve-players",!0)}};
function Kh(a){var b=$c(document,"iframe",null,a.b);z(b,function(a){var b=Se(a,"onload");b&&(b=r(b))&&V(a,"load",b);if(b=Se(a,"src"))a.src=b},a);
return Ab(b)}
function Lh(a){z(document.getElementsByTagName("iframe"),function(b){-1==tb(a,b)&&D(b,"iframe-hid")})}
function Oh(){z(Zc("iframe-hid"),function(a){F(a,"iframe-hid")})}
k.wb=function(a){a=a.currentTarget;a.disabled||(a=Se(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.V()){this.o.H("pre-all");this.o.H("pre-"+a);Cg(this.b);eh(Dh.A());eh(Eh.A());this.i.setAttribute("tabindex","-1");Nh()||(Cg(this.f),this.J||F(document.body,"yt-dialog-active"),mf(),Oh());this.v&&(W(this.v),this.v=null);this.w&&(W(this.w),this.w=null);var b=this.b;if(b){var c=Se(b,"player-ready-pubsub-key");c&&(Re(c),Ve(b,"player-ready-pubsub-key"))}this.o.H("post-all");N("yt-ui-dialog-hide-complete",this);"cancel"==a&&N("yt-ui-dialog-cancelled",this);this.o&&this.o.H("post-"+
a);this.B&&this.B.focus()}};
k.setTitle=function(a){ld(I("yt-dialog-title",this.b),a)};
k.qb=function(a){M(t(function(){this.Ta||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&C(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.Ab=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.V=function(){return this.ha};
k.dispose=function(){Ag(this.b)&&this.dismiss("dispose");W(this.F);this.F.length=0;M(t(function(){this.B=null},this),0);
this.R=this.i=null;this.o.dispose();this.o=null;this.ha=!0};
k.kb=function(a){a.stopPropagation();Mh(this)};
function Mh(a){M(t(function(){this.i&&this.i.focus()},a),0)}
v("yt.ui.Dialog",Gh);function Ph(){zf.call(this,"overlay");this.o=this.f=this.i=this.b=null}
w(Ph,zf);ha(Ph);k=Ph.prototype;k.register=function(){Y(this,"click",this.fa,"target");Y(this,"click",this.hide,"close");Qh(this)};
k.unregister=function(){Ph.D.unregister.call(this);Z(this,"click",this.fa,"target");Z(this,"click",this.hide,"close");this.o&&(Re(this.o),this.o=null);this.f&&(W(this.f),this.f=null)};
k.fa=function(a){if(!this.b||!Ag(this.b.b)){var b=this.C(a);a=Rh(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new Gh(a,c);this.i=b;var e=I("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Fc(e,f)}this.b.show();N("yt-uix-kbd-nav-move-to",e||a);Qh(this);c||
d||(c=t(function(a){C(a.target,"yt-dialog-base")&&Sh(this)},this),this.f=V(I("yt-dialog-base",a),"click",c));
this.N(b,"overlay-shown");N("yt-uix-overlay-shown",b)}}};
function Qh(a){a.o||(a.o=Oe("yt-uix-overlay-hide",Th));a.b&&Jh(a.b,function(){var a=Ph.A();a.i=null;a.b.dispose();a.b=null})}
function Sh(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.N(b,"overlay-hidden");a.i=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function Rh(a,b){var c;if(a)if(c=I("yt-dialog",a)){var d=H("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
function Uh(){var a=Ph.A();if(a.i)a=I("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Zc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if(Ag(c)){a=a[b];break a}}a=null}return a}
k.hide=function(a){a&&a.disabled||N("yt-uix-overlay-hide")};
function Th(){Sh(Ph.A())}
k.show=function(a){this.fa(a)};var Vh={},Wh=[];function Xh(a){a=J(a,"yt-uix-button-subscription-container");return I("yt-dialog",I("unsubscribe-confirmation-overlay-container",a))}
function Yh(a,b){W(Wh);Wh.length=0;Vh[b]||(Vh[b]=Xh(a));Ph.A().show(Vh[b]);var c=Uh();return new $d(function(a){Wh.push(tf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Zh(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function $h(){zf.call(this,"subscription-button");this.b=this.f=!1}
w($h,zf);ha($h);$h.prototype.register=function(){Y(this,"click",this.ga);Bf(this,hg,this.Fa);Bf(this,ig,this.Ea);Bf(this,jg,this.Hb);Bf(this,mg,this.Fa);Bf(this,ng,this.Ea);Bf(this,og,this.Ib);Bf(this,qg,this.yb);Bf(this,rg,this.xb)};
$h.prototype.unregister=function(){Z(this,"click",this.ga);$h.D.unregister.call(this)};
$h.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var ai={ia:"hover-enabled",Ra:"yt-uix-button-subscribe",Sa:"yt-uix-button-subscribed",Jb:"ypc-enabled",Ua:"yt-uix-button-subscription-container",Va:"yt-subscription-button-disabled-mask-container"},bi={Kb:"channel-external-id",Wa:"subscriber-count-show-when-subscribed",Xa:"subscriber-count-tooltip",Ya:"subscriber-count-title",Mb:"href",Nb:"insecure",ja:"is-subscribed",Ob:"parent-url",Pb:"clicktracking",cb:"show-unsub-confirm-dialog",Qb:"show-unsub-confirm-time-frame",eb:"style-type",ka:"subscribed-timestamp",
la:"subscription-id",Rb:"target",fb:"ypc-enabled"};k=$h.prototype;
k.ga=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=Zh(),e=!(this.f&&d),c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=ci(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new dg(b,f,e,a,d,c);di(this,a)?Yh(a,b).then(function(){T(lg,g)}):T(lg,g)}else T(gg,new bg(b,e,d,c));
else ei(this,a)};
k.Fa=function(a){this.M(a.b,this.Ha,!0)};
k.Ea=function(a){this.M(a.b,this.Ha,!1)};
k.Hb=function(a){this.M(a.b,this.Ia,!0,a.f)};
k.Ib=function(a){this.M(a.b,this.Ia,!1)};
k.yb=function(a){this.M(a.b,this.jb)};
k.xb=function(a){this.M(a.b,this.ib)};
k.Ia=function(a,b,c){b?(We(a,bi.ja,"true"),c&&We(a,bi.la,c),this.g(a,bi.cb)&&(b=new zc,We(a,bi.ka,(b.getTime()/1E3).toString()))):(Ve(a,bi.ja),Ve(a,bi.ka),Ve(a,bi.la));fi(this,a)};
function ci(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.Ha=function(a,b){var c=J(a,ai.Ua);Hc(c,ai.Va,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function fi(a,b){var c=a.g(b,bi.eb),d=!!a.g(b,"is-subscribed"),c="-"+c,e=ai.Sa+c;Hc(b,ai.Ra+c,!d);Hc(b,e,d);a.g(b,bi.Xa)&&!a.g(b,bi.Wa)&&(c=X(Dg.A()),Hc(b,c,!d),b.title=d?"":a.g(b,bi.Ya));d?M(function(){D(b,ai.ia)},1E3):F(b,ai.ia)}
k.jb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(D(a,"ypc-enabled"),We(a,bi.fb,"true"))};
k.ib=function(a){this.g(a,"ypc-enabled")&&(F(a,"ypc-enabled"),Ve(a,"ypc-enabled"))};
function gi(a,b){return ub(Zc(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
k.gb=function(a,b,c){var d=Db(arguments,2);z(a,function(a){b.apply(this,zb(a,d))},this)};
k.M=function(a,b,c){var d=gi(this,a);this.gb.apply(this,zb([d],Db(arguments,1)))};
function ei(a,b){var c=t(function(a){a.discoverable_subscriptions&&He("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ga(b)},a);
Lg(c)}
function di(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new zc).getTime()<1E3*(c+600))?!0:!1}
;function hi(a){this.b=a;this.G=null;L("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(ii(this),V(this.b,"mouseover",t(this.o,this)),V(this.b,"mouseout",t(this.Z,this)),V(this.b,"click",t(this.Z,this)),U(jg,sa(this.f,!0),this),U(og,sa(this.f,!1),this),ji(this))}
function ii(a){var b={url:L("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.i,a);Hf().open(b,a)}
function ji(a){Zh()||Oe("LOGGED_IN",function(){this.G&&(this.Z(),this.G.close(),this.G=null,ii(this))},a)}
hi.prototype.i=function(a){this.G=a;a=$h.A().i(this.b);this.f(a)};
hi.prototype.o=function(){this.G&&this.G.restyle({show:!0})};
hi.prototype.Z=function(){this.G&&this.G.restyle({show:!1})};
hi.prototype.f=function(a){if(this.G){a={isSubscribed:a};try{var b=r("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.G.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};function ki(a){if(ja(a))return li(a);if(ma(a)&&!la(a)&&!(ma(a)&&0<a.nodeType))return mi(a);try{return m.JSON.stringify(a),a}catch(b){}}
function mi(a){return Lb(a,function(a){return ki(a)})}
function li(a){return vb(a,function(a){return ki(a)})}
;function ni(a){this.f=null;this.b=a;a=If();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ta()).toString(36);a&&(Kf({role:"ytsubscribe",iframe:a,data:{id:b}}),Jf(t(function(a){this.f=a},this),this.b))}
ni.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);Jf(c,this.b)}};
ni.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);Jf(c,this.b)}};function oi(){this.b=this.f=null}
function pi(a,b){var c=r("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||qi(a),e=If();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
oi.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function qi(a){if(!a.f){var b=r("gapi.iframes.makeWhiteListIframesFilter")(vg);a.f=b}return a.f}
;function ri(){this.b=new oi;this.i=!1;this.f={}}
function si(a){z(wg,function(a){if(!this.f[a.toString()]){var b=U(a,function(b){var c=b?b.Db():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:ki(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
ri.prototype.o=function(a,b){var c=xb(xg,function(b){return b.toString()==a});
if(c&&(!c.T||b)){if(c.T)try{var d=Xe(c.T,b)}catch(f){return}var e=this.f[c.toString()];e?df(e,c,d):T(c,d)}};
ri.prototype.v=function(a){ti(this)&&pi(this.b,{eventType:"subscribe",channelExternalId:a.b})};
ri.prototype.w=function(a){ti(this)&&pi(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function ti(a){return a.i||!!L("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function ui(){Gf(function(){var a=Pd(H("yt-subscribe"));a={width:a.width,height:a.height};var b=vi;Hf().ready(a,null,b)})}
function vi(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=H("yt-subscribe"),d=$h.A(),c=I(X(d),c);a&&c&&($h.A(),We(c,"parent-url",a));wi()?($h.A().b=!0,b&&($h.A().f=!0)):c&&new hi(c);a=new ri;U(jg,a.v,a);U(og,a.w,a);if(wi()){b=a.b;b.b=new ni(qi(b));si(a);b=a.b;c=t(a.o,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",sa(b.i,c))}catch(e){}a.i=!0}}}
function wi(){var a=If().getOrigin();return yb(vg,a)}
;function xi(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Rf(c,void 0):Yf(c))}}
;function yi(a){O.call(this,1,arguments);this.b=a}
w(yi,O);function zi(a,b){O.call(this,2,arguments);this.f=a;this.b=b}
w(zi,O);function Ai(a,b,c,d){O.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(Ai,O);function Bi(a,b){O.call(this,1,arguments);this.f=a;this.b=b||null}
w(Bi,O);function Ci(a){O.call(this,1,arguments)}
w(Ci,O);var Di=new Q("ypc-core-load",yi),Ei=new Q("ypc-guide-sync-success",zi),Fi=new Q("ypc-purchase-success",Ai),Gi=new Q("ypc-subscription-cancel",Ci),Hi=new Q("ypc-subscription-cancel-success",Bi),Ii=new Q("ypc-init-subscription",Ci);var Ji=!1,Ki=[];function Li(a){a.b?Ji?T(kg,a):T(Di,new yi(function(){T(Ii,new Ci(a.b))})):Mi(a.f,a.o,a.i,a.source)}
function Ni(a){a.b?Ji?T(pg,a):T(Di,new yi(function(){T(Gi,new Ci(a.b))})):Oi(a.f,a.v,a.o,a.i,a.source)}
function Pi(a){Qi(Ab(a.b))}
function Ri(a){Si(Ab(a.b))}
function Ti(a){Ui(a.i,a.f,a.b)}
function Vi(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(jg,new cg(b,c,a.b.channelInfo))}
function Wi(a){var b=a.b;Kb(a.f,function(a,d){T(jg,new cg(d,a,b[d]))})}
function Xi(a){T(og,new $f(a.f.itemId));a.b&&a.b.length&&(Yi(a.b,og),Yi(a.b,qg))}
function Mi(a,b,c,d){var e=new $f(a);T(hg,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);b&&Zi(b,c);Qf("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ka:f,L:c,O:function(b,c){var d=c.response;T(jg,new cg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&N("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&xi(d.actions)},
ea:function(){T(ig,e)}})}
function Oi(a,b,c,d,e){var f=new $f(a);T(mg,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&Zi(c,d);Qf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ka:g,L:d,O:function(a,b){var c=b.response;T(og,f);c.actions&&xi(c.actions)},
ea:function(){T(ng,f)}})}
function Ui(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new ag(a,b,c);Qf("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",L:d,onError:function(){T(ug,e)},
O:function(){T(tg,e)}})}}
function Qi(a){if(a.length){var b=Cb(a,0,40);T("subscription-batch-subscribe-loading");Yi(b,hg);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");Yi(b,ig)};
Qf("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",L:c,O:function(c,f){d();var e=f.response,h=e.id;if("array"==ia(h)&&h.length==b.length){var l=e.channel_info_map;z(h,function(a,c){var d=b[c];T(jg,new cg(d,a,l[d]))});
a.length?Qi(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Si(a){if(a.length){var b=Cb(a,0,40);T("subscription-batch-unsubscribe-loading");Yi(b,mg);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");Yi(b,ng)};
Qf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",L:c,O:function(){d();Yi(b,og);a.length&&Si(a)},
onError:function(){d()}})}}
function Yi(a,b){z(a,function(a){T(b,new $f(a))})}
function Zi(a,b){var c=Ef(a),d;for(d in c)b[d]=c[d]}
;v("yt.setConfig",He);v("yt.config.set",He);v("ytbin.www.subscribeembed.init",function(){Ji=!0;Ki.push(U(gg,Li),U(lg,Ni));Ji||Ki.push(U(kg,Li),U(pg,Ni),U(eg,Pi),U(fg,Ri),U(sg,Ti),U(Fi,Vi),U(Hi,Xi),U(Ei,Wi));var a=$h.A(),b=X(a);b in Df||(a.register(),Af(a,"yt-uix-init-"+b,a.init),Af(a,"yt-uix-dispose-"+b,a.dispose),Df[b]=a);ui()});}).call(this);
