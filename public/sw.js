const CACHE_NAME = "my-cache";

Window.self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .addAll(["./", "/.App.js"])
        .then(() => Window.self.skipWaiting());
    })
  );
});
