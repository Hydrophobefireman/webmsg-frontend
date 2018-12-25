const { assets } = serviceWorkerOption;
const CACHE_NAME = `CACHE-V${new Date()}`;
const assetsToCache = [...assets, "./"];
self.addEventListener("install", event => {
  console.log("[SW] Installed");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(assetsToCache))
      .catch(console.error)
  );
  event;
});

self.addEventListener("activate", event => {
  console.log("[SW]Activated");
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        )
      )
  );
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        if (event.request.mode === "navigate") {
          return event.respondWith(caches.match("./"));
        }
      })
  );
});
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
