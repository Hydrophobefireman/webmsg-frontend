const { assets } = serviceWorkerOption;
const CACHE_NAME = +new Date();
const assetsToCache = [...assets, "./"];
self.addEventListener("install", event => {
  console.log("[SW] Installed");
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(assetsToCache))
      .catch(console.error)
  );
});

self.addEventListener("activate", event => {
  console.log("[SW]Active");
  event.waitUntil(
    caches.keys().then(cacheMap => {
      cacheMap.map(cacheName => {
        if (cacheName !== CACHE_NAME) {
          return caches.delete(cacheName);
        }
        return;
      });
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(
      (response = response || fetch(event.request)).catch(() => {
        if (event.request.mode === "navigate") {
          return caches.match("./");
        }
      })
    )
  );
  //   const request = event.request;
  //   // Ignore not GET request.
  //   if (request.method !== "GET") {
  //     console.log(`[SW] Ignore non GET request-> ${request.method}`);
  //     return;
  //   }
  //   const reqURL = new URL(request.url);
  //   if (reqURL.hostname !== self.location.hostname) {
  //     return;
  //   }
  //   if (reqURL.pathname === "/api/gen_204/" && !self.navigator.onLine) {
  //     event.respondWith(new Response("", { status: 200 }));
  //   }
  //   const resource = global.caches.match(request).then(response => {
  //     if (response) {
  //       console.log(`[SW] fetch URL ${reqURL.href} from cache`);
  //       return response;
  //     }
  //     // Load and cache known assets.
  //     return fetch(request)
  //       .then(resp => {
  //         if (!resp || !resp.ok) {
  //           console.log(
  //             `[SW] URL [${reqURL.href}] wrong responseNetwork: ${resp.status} ${
  //               resp.type
  //             }`
  //           );
  //           return resp;
  //         }
  //         console.log(`[SW] Fetched: ${reqURL.href}`);
  //         return resp;
  //       })
  //       .catch(() => {
  //         // User is landing on our page.
  //         if (event.request.mode === "navigate") {
  //           console.log("navigation");
  //           event.respondWith(global.caches.match("./"));
  //         }
  //         return null;
  //       });
  //   });
  //   event.respondWith(resource);
});
