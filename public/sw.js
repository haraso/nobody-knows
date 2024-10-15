
const CACHE_NAME = 'q-smoke-cache-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const requestPromise = fetch(event.request)
  .then((networkResponse) => {
    return caches.open(CACHE_NAME).then((cache) => {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    })
  })
  .catch(() => {
    return caches.match(event.request);
  });
  event.respondWith(requestPromise);
});
