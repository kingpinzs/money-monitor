// --- Versioning -------------------------------------------------------------
const CACHE_VERSION = 6;
const CACHE_NAME = `money-monitor-cache-v${CACHE_VERSION}`;

// --- App Shell --------------------------------------------------------------
const APP_SHELL_URLS = [
  './index.html',
  './manifest.json',
  './icons/icon-192x192.jpg',
  './icons/icon-512x512.jpg'
];

// --- Install: pre-cache the shell ------------------------------------------
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(APP_SHELL_URLS);
      // Activate this SW immediately after install
      await self.skipWaiting();
    })()
  );
});

// --- Activate: clean old caches --------------------------------------------
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map(n => (n !== CACHE_NAME ? caches.delete(n) : Promise.resolve()))
      );
      // Take control of open clients/tabs
      await self.clients.claim();
    })()
  );
});

// --- Helpers ----------------------------------------------------------------
const isHttpGet = req =>
  req.method === 'GET' && (req.url.startsWith('http://') || req.url.startsWith('https://'));

const isSameOrigin = url => {
  try {
    const u = new URL(url);
    return u.origin === self.location.origin;
  } catch {
    return false;
  }
};

// --- Fetch Strategy ---------------------------------------------------------
// - Navigations: network-first, fall back to cache, then offline shell (index.html).
// - Static assets (same-origin GET): cache-first, then network, then fail cleanly.
// - Everything else: pass-through fetch.
self.addEventListener('fetch', event => {
  const { request } = event;

  // Only handle HTTP(S) GET
  if (!isHttpGet(request)) {
    return; // Let the browser handle it
  }

  // Handle top-level navigations
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        // Try preload (if enabled), else network
        try {
          const preload = await event.preloadResponse;
          if (preload) return preload;

          const networkResponse = await fetch(request);
          // Optionally cache successful navigations
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          // Fallback to cached index or any cached navigation resource
          const cached = await caches.match('./index.html');
          if (cached) return cached;

          // Last-resort offline response
          return new Response('Offline. Please reconnect and retry.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        }
      })()
    );
    return;
  }

  // Static assets & API GETs: prefer cache for same-origin assets, otherwise try network and cache
  if (isSameOrigin(request.url)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) return cached;

        try {
          const networkResponse = await fetch(request);
          // Store successful GETs (opaque ok too)
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          // Clean failure response for assets
          return new Response('Resource unavailable offline.', {
            status: 504,
            headers: { 'Content-Type': 'text/plain' }
          });
        }
      })()
    );
    return;
  }

  // Cross-origin GET: try network, cache opportunistically if successful; fall back to cache if we have it
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      try {
        const networkResponse = await fetch(request);
        // Cache opaque OK (e.g., CDNs)
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, networkResponse.clone());
        return networkResponse;
      } catch (err) {
        if (cached) return cached;
        return new Response('External resource unavailable offline.', {
          status: 504,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    })()
  );
});

// (Optional) Enable navigation preload for faster first paint on slow networks
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    if ('navigationPreload' in self.registration) {
      try { await self.registration.navigationPreload.enable(); } catch {}
    }
  })());
});
