var serviceWorkerOption = {
  "assets": [
    "/main-6e0accd11d68fd642cf6.js",
    "/vendors~main-6e0accd11d68fd642cf6.js",
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
        
        !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var o=n(3),r=n(4),c=n(5);e.exports=function(e){return o(e)||r(e)||c()}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),o=n.n(t),r=serviceWorkerOption.assets,c=+new Date,i=[].concat(o()(r),["./"]);self.addEventListener("install",function(e){console.log("[SW] Installed"),self.skipWaiting(),e.waitUntil(caches.open(c).then(function(e){return e.addAll(i)}).catch(console.error))}),self.addEventListener("activate",function(e){console.log("[SW]Active"),e.waitUntil(caches.keys().then(function(e){e.map(function(e){if(e!==c)return caches.delete(e)})}))}),self.addEventListener("fetch",function(t){var n=t.request;if("GET"===n.method){var o=new URL(n.url);if(o.hostname===self.location.hostname){"/api/gen_204/"!==o.pathname||self.navigator.onLine||t.respondWith(new Response("",{status:200}));var r=e.caches.match(n).then(function(r){return r?(console.log("[SW] fetch URL ".concat(o.href," from cache")),r):fetch(n).then(function(e){return e&&e.ok?(console.log("[SW] Fetched: ".concat(o.href)),e):(console.log("[SW] URL [".concat(o.href,"] wrong responseNetwork: ").concat(e.status," ").concat(e.type)),e)}).catch(function(){return"navigate"===t.request.mode&&(console.log("navigation"),t.respondWith(e.caches.match("./"))),null})});t.respondWith(r)}}else console.log("[SW] Ignore non GET request-> ".concat(n.method))})}.call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);