var serviceWorkerOption = {
  "assets": [
    "/chat-route-54d5d0fb76ca225d9d47.js",
    "/loginroute-091d33bfb4a636308e7c.js",
    "/main-cb51558a2233716b25d3.js",
    "/user-page-5e3f6cdd14de6b4927f0.js",
    "/vendors~main-cd427d6625cc4a4a570c.js",
    "/favicon.ico",
    "/index.html",
    "/manifest.6b4773c0fa7d45bcab6ce04539f39fa5.json",
    "/icon_512x512.9f97fcf2350d2fc8e5210c2cca8e0597.png",
    "/icon_384x384.f0328609a2077ab7a755af583c2d9f53.png",
    "/icon_256x256.2ce800b90c5921a81bcaced24997aac5.png",
    "/icon_192x192.969bd6b995e29f54abb97e7ee61a13d5.png",
    "/icon_152x152.32ca3905e70c73a83a59c22cf80d8238.png",
    "/icon_144x144.472ec47bd134bb3ee3f92a5e960325bf.png",
    "/icon_128x128.55a8a4e9259025f077361b32f3f65c97.png",
    "/icon_96x96.ede8a82e16a3194fa90ff39f81936599.png",
    "/icon_72x72.9a0e749da0fb9cce98a4c7d83ff35f7e.png"
  ]
};
        
        !function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=42)}([function(t,n,r){var e=r(27)("wks"),o=r(18),i=r(1).Symbol,c="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=e},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(13),o=r(26);t.exports=r(8)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(1),o=r(2),i=r(15),c=r(18)("src"),u=Function.toString,s=(""+u).split("toString");r(9).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,r,u){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,c)||o(r,c,t[n]?""+t[n]:s.join(String(n)))),t===e?t[n]=r:u?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},function(t,n,r){var e=r(1),o=r(9),i=r(2),c=r(5),u=r(11),s=function(t,n,r){var a,f,l,p,v=t&s.F,h=t&s.G,d=t&s.S,y=t&s.P,x=t&s.B,m=h?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,g=h?o:o[n]||(o[n]={}),_=g.prototype||(g.prototype={});for(a in h&&(r=n),r)l=((f=!v&&m&&void 0!==m[a])?m:r)[a],p=x&&f?u(l,e):y&&"function"==typeof l?u(Function.call,l):l,m&&c(m,a,l,t&s.U),g[a]!=l&&i(g,a,p),y&&_[a]!=l&&(_[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){t.exports=!r(14)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(16);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports={}},function(t,n,r){var e=r(3),o=r(45),i=r(46),c=Object.defineProperty;n.f=r(8)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(4),o=r(1).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=!1},function(t,n,r){var e=r(29),o=r(10);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(22),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(7),o=r(0)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,r){var e=r(13).f,o=r(15),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(27)("keys"),o=r(18);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(9),o=r(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(19)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(20),o=r(21),i=r(48);t.exports=function(t){return function(n,r,c){var u,s=e(n),a=o(s.length),f=i(c,a);if(t&&r!=r){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}}},function(t,n,r){var e=r(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(0)("unscopables"),o=Array.prototype;null==o[e]&&r(2)(o,e,{}),t.exports=function(t){o[e][t]=!0}},function(t,n,r){var e=r(11),o=r(29),i=r(32),c=r(21),u=r(54);t.exports=function(t,n){var r=1==t,s=2==t,a=3==t,f=4==t,l=6==t,p=5==t||l,v=n||u;return function(n,u,h){for(var d,y,x=i(n),m=o(x),g=e(u,h,3),_=c(m.length),S=0,b=r?v(n,_):s?v(n,0):void 0;_>S;S++)if((p||S in m)&&(y=g(d=m[S],S,x),t))if(r)b[S]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return S;case 2:b.push(d)}else if(f)return!1;return l?-1:a||f?f:b}}},function(t,n,r){var e=r(10);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e=r(14);t.exports=function(t,n){return!!t&&e((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n,r){var e,o,i,c=r(11),u=r(65),s=r(35),a=r(17),f=r(1),l=f.process,p=f.setImmediate,v=f.clearImmediate,h=f.MessageChannel,d=f.Dispatch,y=0,x={},m=function(){var t=+this;if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},g=function(t){m.call(t.data)};p&&v||(p=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return x[++y]=function(){u("function"==typeof t?t:Function(t),n)},e(y),y},v=function(t){delete x[t]},"process"==r(7)(l)?e=function(t){l.nextTick(c(m,t,1))}:d&&d.now?e=function(t){d.now(c(m,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=g,e=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(e=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):e="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),m.call(t)}}:function(t){setTimeout(c(m,t,1),0)}),t.exports={set:p,clear:v}},function(t,n,r){var e=r(1).document;t.exports=e&&e.documentElement},function(t,n,r){"use strict";var e=r(16);function o(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)}t.exports.f=function(t){return new o(t)}},function(t,n,r){"use strict";var e=r(19),o=r(6),i=r(5),c=r(2),u=r(12),s=r(75),a=r(24),f=r(79),l=r(0)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,h,d,y,x){s(r,n,h);var m,g,_,S=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},b=n+" Iterator",w="values"==d,j=!1,O=t.prototype,P=O[l]||O["@@iterator"]||d&&O[d],T=P||S(d),A=d?w?S("entries"):T:void 0,L="Array"==n&&O.entries||P;if(L&&(_=f(L.call(new t)))!==Object.prototype&&_.next&&(a(_,b,!0),e||"function"==typeof _[l]||c(_,l,v)),w&&P&&"values"!==P.name&&(j=!0,T=function(){return P.call(this)}),e&&!x||!p&&!j&&O[l]||c(O,l,T),u[n]=T,u[b]=v,d)if(m={values:w?T:S("values"),keys:y?T:S("keys"),entries:A},x)for(g in m)g in O||i(O,g,m[g]);else o(o.P+o.F*(p||j),n,m);return m}},function(t,n,r){var e=r(78),o=r(39);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){"use strict";var e=r(30),o=r(81),i=r(12),c=r(20);t.exports=r(37)(Array,"Array",(function(t,n){this._t=c(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])}),"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e=r(83),o=r(84),i=r(85);t.exports=function(t){return e(t)||o(t)||i()}},function(t,n,r){"use strict";r.r(n);r(43),r(47),r(49),r(53),r(57),r(58),r(73),r(80),r(40),r(82);var e=r(41),o=r.n(e),i=serviceWorkerOption.assets,c="CACHE-V".concat((new Date).getTime()),u=[].concat(o()(i),["./"]);self.addEventListener("install",(function(t){self.skipWaiting(),console.log("[SW] Installed"),t.waitUntil(caches.open(c).then((function(t){return t.addAll(u)})).catch(console.error))})),self.addEventListener("activate",(function(t){console.log("[SW]Activated"),t.waitUntil(caches.keys().then((function(t){return Promise.all(t.filter((function(t){return t!==c})).map((function(t){return caches.delete(t)})))})))})),self.addEventListener("fetch",(function(t){t.respondWith(caches.match(t.request).then((function(n){return n||(r=t.request,e=r.clone(),o=new URL(e.url),navigator.onLine?fetch(r):"/api/gen_204"===o.pathname?new Response("sw cached",{headers:{"content-type":"text/plain"}}):o.pathname.includes("/api/chat-stats/")?new Response(JSON.stringify({$$serviceWorker$$:!0}),{headers:{"content-type":"application/json","x-service-worker":!0}}):fetch(r));var r,e,o})).catch((function(n){if(console.log(n,"<--error"),"navigate"===t.request.mode){var r=t.request.clone();if("/"===new URL(r).pathname)return caches.match("./")}})))}))},function(t,n,r){r(44)("match",1,(function(t,n,r){return[function(r){"use strict";var e=t(this),o=null==r?void 0:r[n];return void 0!==o?o.call(r,e):new RegExp(r)[n](String(e))},r]}))},function(t,n,r){"use strict";var e=r(2),o=r(5),i=r(14),c=r(10),u=r(0);t.exports=function(t,n,r){var s=u(t),a=r(c,s,""[t]),f=a[0],l=a[1];i((function(){var n={};return n[s]=function(){return 7},7!=""[t](n)}))&&(o(String.prototype,t,f),e(RegExp.prototype,s,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,r){t.exports=!r(8)&&!r(14)((function(){return 7!=Object.defineProperty(r(17)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){"use strict";var e=r(6),o=r(28)(!0);e(e.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)("includes")},function(t,n,r){var e=r(22),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){"use strict";var e=r(6),o=r(50);e(e.P+e.F*r(52)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(51),o=r(10);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){var e=r(4),o=r(7),i=r(0)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){var e=r(0)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,r){"use strict";var e=r(6),o=r(31)(2);e(e.P+e.F*!r(33)([].filter,!0),"Array",{filter:function(t){return o(this,t,arguments[1])}})},function(t,n,r){var e=r(55);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(4),o=r(56),i=r(0)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){var e=r(7);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";var e=r(6),o=r(31)(1);e(e.P+e.F*!r(33)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},function(t,n,r){"use strict";var e,o,i,c,u=r(19),s=r(1),a=r(11),f=r(23),l=r(6),p=r(4),v=r(16),h=r(59),d=r(60),y=r(64),x=r(34).set,m=r(66)(),g=r(36),_=r(67),S=r(68),b=r(69),w=s.TypeError,j=s.process,O=j&&j.versions,P=O&&O.v8||"",T=s.Promise,A="process"==f(j),L=function(){},E=o=g.f,M=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[r(0)("species")]=function(t){t(L,L)};return(A||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof n&&0!==P.indexOf("6.6")&&-1===S.indexOf("Chrome/66")}catch(t){}}(),k=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var r=t._c;m((function(){for(var e=t._v,o=1==t._s,i=0,c=function(n){var r,i,c,u=o?n.ok:n.fail,s=n.resolve,a=n.reject,f=n.domain;try{u?(o||(2==t._h&&I(t),t._h=1),!0===u?r=e:(f&&f.enter(),r=u(e),f&&(f.exit(),c=!0)),r===n.promise?a(w("Promise-chain cycle")):(i=k(r))?i.call(r,s,a):s(r)):a(e)}catch(t){f&&!c&&f.exit(),a(t)}};r.length>i;)c(r[i++]);t._c=[],t._n=!1,n&&!t._h&&F(t)}))}},F=function(t){x.call(s,(function(){var n,r,e,o=t._v,i=C(t);if(i&&(n=_((function(){A?j.emit("unhandledRejection",o,t):(r=s.onunhandledrejection)?r({promise:t,reason:o}):(e=s.console)&&e.error&&e.error("Unhandled promise rejection",o)})),t._h=A||C(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},C=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){x.call(s,(function(){var n;A?j.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})}))},N=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},W=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw w("Promise can't be resolved itself");(n=k(t))?m((function(){var e={_w:r,_d:!1};try{n.call(t,a(W,e,1),a(N,e,1))}catch(t){N.call(e,t)}})):(r._v=t,r._s=1,R(r,!1))}catch(t){N.call({_w:r,_d:!1},t)}}};M||(T=function(t){h(this,T,"Promise","_h"),v(t),e.call(this);try{t(a(W,this,1),a(N,this,1))}catch(t){N.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(70)(T.prototype,{then:function(t,n){var r=E(y(this,T));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=A?j.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new e;this.promise=t,this.resolve=a(W,t,1),this.reject=a(N,t,1)},g.f=E=function(t){return t===T||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:T}),r(24)(T,"Promise"),r(71)("Promise"),c=r(9).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var n=E(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!M),"Promise",{resolve:function(t){return b(u&&this===c?T:this,t)}}),l(l.S+l.F*!(M&&r(72)((function(t){T.all(t).catch(L)}))),"Promise",{all:function(t){var n=this,r=E(n),e=r.resolve,o=r.reject,i=_((function(){var r=[],i=0,c=1;d(t,!1,(function(t){var u=i++,s=!1;r.push(void 0),c++,n.resolve(t).then((function(t){s||(s=!0,r[u]=t,--c||e(r))}),o)})),--c||e(r)}));return i.e&&o(i.v),r.promise},race:function(t){var n=this,r=E(n),e=r.reject,o=_((function(){d(t,!1,(function(t){n.resolve(t).then(r.resolve,e)}))}));return o.e&&e(o.v),r.promise}})},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(11),o=r(61),i=r(62),c=r(3),u=r(21),s=r(63),a={},f={};(n=t.exports=function(t,n,r,l,p){var v,h,d,y,x=p?function(){return t}:s(t),m=e(r,l,n?2:1),g=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(i(x)){for(v=u(t.length);v>g;g++)if((y=n?m(c(h=t[g])[0],h[1]):m(t[g]))===a||y===f)return y}else for(d=x.call(t);!(h=d.next()).done;)if((y=o(d,m,h.value,n))===a||y===f)return y}).BREAK=a,n.RETURN=f},function(t,n,r){var e=r(3);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(12),o=r(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){var e=r(23),o=r(0)("iterator"),i=r(12);t.exports=r(9).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n,r){var e=r(3),o=r(16),i=r(0)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(1),o=r(34).set,i=e.MutationObserver||e.WebKitMutationObserver,c=e.process,u=e.Promise,s="process"==r(7)(c);t.exports=function(){var t,n,r,a=function(){var e,o;for(s&&(e=c.domain)&&e.exit();t;){o=t.fn,t=t.next;try{o()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(s)r=function(){c.nextTick(a)};else if(!i||e.navigator&&e.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);r=function(){f.then(a)}}else r=function(){o.call(e,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),r=function(){p.data=l=!l}}return function(e){var o={fn:e,next:void 0};n&&(n.next=o),t||(t=o,r()),n=o}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){var e=r(1).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var e=r(3),o=r(4),i=r(36);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(5);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){"use strict";var e=r(1),o=r(13),i=r(8),c=r(0)("species");t.exports=function(t){var n=e[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],c=i[e]();c.next=function(){return{done:r=!0}},i[e]=function(){return c},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(74)(!0);r(37)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})}))},function(t,n,r){var e=r(22),o=r(10);t.exports=function(t){return function(n,r){var i,c,u=String(o(n)),s=e(r),a=u.length;return s<0||s>=a?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===a||(c=u.charCodeAt(s+1))<56320||c>57343?t?u.charAt(s):i:t?u.slice(s,s+2):c-56320+(i-55296<<10)+65536}}},function(t,n,r){"use strict";var e=r(76),o=r(26),i=r(24),c={};r(2)(c,r(0)("iterator"),(function(){return this})),t.exports=function(t,n,r){t.prototype=e(c,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n,r){var e=r(3),o=r(77),i=r(39),c=r(25)("IE_PROTO"),u=function(){},s=function(){var t,n=r(17)("iframe"),e=i.length;for(n.style.display="none",r(35).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;e--;)delete s.prototype[i[e]];return s()};t.exports=Object.create||function(t,n){var r;return null!==t?(u.prototype=e(t),r=new u,u.prototype=null,r[c]=t):r=s(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(13),o=r(3),i=r(38);t.exports=r(8)?Object.defineProperties:function(t,n){o(t);for(var r,c=i(n),u=c.length,s=0;u>s;)e.f(t,r=c[s++],n[r]);return t}},function(t,n,r){var e=r(15),o=r(20),i=r(28)(!1),c=r(25)("IE_PROTO");t.exports=function(t,n){var r,u=o(t),s=0,a=[];for(r in u)r!=c&&e(u,r)&&a.push(r);for(;n.length>s;)e(u,r=n[s++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(15),o=r(32),i=r(25)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,r){for(var e=r(40),o=r(38),i=r(5),c=r(1),u=r(2),s=r(12),a=r(0),f=a("iterator"),l=a("toStringTag"),p=s.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),d=0;d<h.length;d++){var y,x=h[d],m=v[x],g=c[x],_=g&&g.prototype;if(_&&(_[f]||u(_,f,p),_[l]||u(_,l,x),s[x]=p,m))for(y in e)_[y]||i(_,y,e[y],!0)}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";var e=r(23),o={};o[r(0)("toStringTag")]="z",o+""!="[object z]"&&r(5)(Object.prototype,"toString",(function(){return"[object "+e(this)+"]"}),!0)},function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}},function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);