// A version number for your cache
const CACHE_VERSION = 4; // Incremented version to ensure update
const CACHE_NAME = `money-monitor-cache-v${CACHE_VERSION}`;

// The essential files your app needs to function offline
const APP_SHELL_URLS = [
    './index.html',
    './manifest.json',
    './icons/icon-192x192.jpg',
    './icons/icon-512x512.jpg'
];

// Install Event: Caches the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching app shell');
        return cache.addAll(APP_SHELL_URLS);
      })
  );
});

// Activate Event: Cleans up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event: Serves content from cache, falling back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // If the response is in the cache, return it
        if (cachedResponse) {
          return cachedResponse;
        }

        // If it's not in the cache, fetch it from the network
        return fetch(event.request).then(
          networkResponse => {
            // After fetching, add the response to the cache for next time
            return caches.open(CACHE_NAME).then(cache => {
              // We can only cache GET requests
              if (event.request.method === 'GET') {
                 cache.put(event.request, network-response.clone());
              }
              return networkResponse;
            });
          }
        ).catch(error => {
            // Handle network errors for offline fallback if needed
            console.error('Fetch failed:', error);
            // You could return an offline fallback page here if you had one
        });
      })
  );
});

