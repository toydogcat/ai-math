const CACHE_NAME = 'ai-math-pwa-v1';
const ASSETS_TO_CACHE = [
  '/ai-math/',
  '/ai-math/index.html',
  '/ai-math/manifest.json',
  '/ai-math/assets/img/favicons/android-chrome-192x192.png',
  '/ai-math/assets/img/favicons/android-chrome-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Optional fallback can be provided here
      });
    })
  );
});
