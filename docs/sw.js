var serviceWorkerOption = {
  "assets": [
    "/main-005e9aec7da84550eb35.js",
    "/vendors~main-005e9aec7da84550eb35.js",
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
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var r=n(2),o=n(3),c=n(4);e.exports=function(e){return r(e)||o(e)||c()}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=serviceWorkerOption.assets,i=+new Date,u=[].concat(o()(c),["./"]);self.addEventListener("install",function(e){console.log("[SW] Installed"),e.waitUntil(caches.open(i).then(function(e){return e.addAll(u)}).catch(console.error))}),self.addEventListener("activate",function(e){console.log("[SW]Active"),e.waitUntil(caches.keys().then(function(e){e.map(function(e){if(e!==i)return caches.delete(e)})}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}).catch(function(){if("navigate"===e.request.mode)return e.respondWith(caches.match("./"))}))})},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);