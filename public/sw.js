/* eslint-disable no-restricted-globals */

const CACHE_NAME = "my-cache";
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["./", "/.App.js"]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .match(event.request, { ignoreVary: true })
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
    })
  );
});
