const { assets } = serviceWorkerOption;
const CACHE_NAME = `CACHE-V${new Date().getTime()}`;
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
/**
 *
 * @param {Request} _req
 */
function IsApiOrNone(_req) {
  const req = _req.clone();
  const url = new URL(req.url);
  if (!navigator.onLine) {
    console.log(url);
    if (url.pathname === "/api/gen_204") {
      return new Response("sw cached", {
        headers: { "content-type": "text/plain" }
      });
    } else if (url.pathname.includes("/api/chat-stats/")) {
      return new Response(JSON.stringify({ $$serviceWorker$$: true }), {
        headers: {
          "content-type": "application/json",
          "x-service-worker": true
        }
      });
    }
    return fetch(_req);
  } else {
    return fetch(_req);
  }
}
self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || IsApiOrNone(event.request))
      .catch(() => {
        if (event.request.mode === "navigate") {
          return caches.match("./");
        }
      })
  );
});
