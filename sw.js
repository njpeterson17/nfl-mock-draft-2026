/**
 * NFL Mock Draft 2026 - Enhanced Service Worker
 * Implements cache-first strategy for images, versioning, and offline support
 */

const CACHE_VERSION = 'v2';
const CACHE_NAME = `nfl-mock-draft-2026-${CACHE_VERSION}`;
const IMAGE_CACHE_NAME = `nfl-mock-draft-images-${CACHE_VERSION}`;

// Core files to cache on install
const CORE_ASSETS = [
  '/nfl-mock-draft-2026/',
  '/nfl-mock-draft-2026/index.html',
  '/nfl-mock-draft-2026/manifest.json',
  '/nfl-mock-draft-2026/draft-grades.js',
  '/nfl-mock-draft-2026/js/analytics.js',
  '/nfl-mock-draft-2026/js/search-index.js'
];

// Player images to cache
const PLAYER_IMAGES = [
  '/nfl-mock-draft-2026/images/players/placeholder.jpg',
  '/nfl-mock-draft-2026/images/players/fernando-mendoza.jpg',
  '/nfl-mock-draft-2026/images/players/ty-simpson.jpg',
  '/nfl-mock-draft-2026/images/players/francis-mauigoa.jpg',
  '/nfl-mock-draft-2026/images/players/carnell-tate.jpg',
  '/nfl-mock-draft-2026/images/players/peter-woods.jpg',
  '/nfl-mock-draft-2026/images/players/trinidad-chambliss.jpg',
  '/nfl-mock-draft-2026/images/players/rueben-bain-jr.jpg',
  '/nfl-mock-draft-2026/images/players/jordyn-tyson.jpg',
  '/nfl-mock-draft-2026/images/players/david-bailey.jpg',
  '/nfl-mock-draft-2026/images/players/jermod-mccoy.jpg',
  '/nfl-mock-draft-2026/images/players/cj-allen.jpg',
  '/nfl-mock-draft-2026/images/players/kaleb-johnson.jpg',
  '/nfl-mock-draft-2026/images/players/jihaad-campbell.jpg',
  '/nfl-mock-draft-2026/images/players/treveyon-henderson.jpg',
  '/nfl-mock-draft-2026/images/players/denzel-boston.jpg',
  '/nfl-mock-draft-2026/images/players/will-johnson.jpg',
  '/nfl-mock-draft-2026/images/players/caleb-downs.jpg',
  '/nfl-mock-draft-2026/images/players/omarion-hampton.jpg',
  '/nfl-mock-draft-2026/images/players/jayden-higgins.jpg',
  '/nfl-mock-draft-2026/images/players/shemar-stewart.jpg',
  '/nfl-mock-draft-2026/images/players/emeka-egbuka.jpg',
  '/nfl-mock-draft-2026/images/players/carson-schwesinger.jpg',
  '/nfl-mock-draft-2026/images/players/mason-taylor.jpg',
  '/nfl-mock-draft-2026/images/players/xavier-restrepo.jpg',
  '/nfl-mock-draft-2026/images/players/tyleik-williams.jpg',
  '/nfl-mock-draft-2026/images/players/jack-sawyer.jpg',
  '/nfl-mock-draft-2026/images/players/keldric-faulk.jpg',
  '/nfl-mock-draft-2026/images/players/jeremiyah-love.jpg',
  '/nfl-mock-draft-2026/images/players/kayden-mcdonald.jpg',
  '/nfl-mock-draft-2026/images/players/princely-umanmielen.jpg',
  '/nfl-mock-draft-2026/images/players/carson-beck.jpg',
  '/nfl-mock-draft-2026/images/players/drew-allar.jpg',
  '/nfl-mock-draft-2026/images/players/kenneth-grant.jpg',
  '/nfl-mock-draft-2026/images/players/malaki-starks.jpg',
  '/nfl-mock-draft-2026/images/players/landon-jackson.jpg',
  '/nfl-mock-draft-2026/images/players/deone-walker.jpg',
  '/nfl-mock-draft-2026/images/players/cole-payton.jpg',
  '/nfl-mock-draft-2026/images/players/maxwell-hairston.jpg',
  '/nfl-mock-draft-2026/images/players/luther-burden-iii.jpg',
  '/nfl-mock-draft-2026/images/players/makai-lemon.jpg',
  '/nfl-mock-draft-2026/images/players/khalil-benson.jpg',
  '/nfl-mock-draft-2026/images/players/aireontae-ersery.jpg',
  '/nfl-mock-draft-2026/images/players/darien-porter.jpg',
  '/nfl-mock-draft-2026/images/players/tacario-davis.jpg',
  '/nfl-mock-draft-2026/images/players/jonah-savaiinaea.jpg',
  '/nfl-mock-draft-2026/images/players/spencer-fano.jpg',
  '/nfl-mock-draft-2026/images/players/dillon-thieneman.jpg',
  '/nfl-mock-draft-2026/images/players/zachariah-branch.jpg',
  '/nfl-mock-draft-2026/images/players/mansoor-delane.jpg',
  '/nfl-mock-draft-2026/images/players/sonny-styles.jpg',
  '/nfl-mock-draft-2026/images/players/akheem-mesidor.jpg',
  '/nfl-mock-draft-2026/images/players/kevin-winston-jr.jpg',
  '/nfl-mock-draft-2026/images/players/arvell-reese.jpg',
  '/nfl-mock-draft-2026/images/players/kenyon-sadiq.jpg',
  '/nfl-mock-draft-2026/images/players/dani-dennis-sutton.jpg',
  '/nfl-mock-draft-2026/images/players/oluwafemi-oladejo.jpg',
  '/nfl-mock-draft-2026/images/players/daylen-everette.jpg',
  '/nfl-mock-draft-2026/images/players/caleb-lomu.jpg',
  '/nfl-mock-draft-2026/images/players/rod-moore.jpg',
  '/nfl-mock-draft-2026/images/players/donovan-jackson.jpg',
  '/nfl-mock-draft-2026/images/players/olaivavega-ioane.jpg',
  '/nfl-mock-draft-2026/images/players/jc-latham.jpg',
  '/nfl-mock-draft-2026/images/players/jahdae-barron.jpg'
];

// Install event - cache core assets and images
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    Promise.all([
      // Cache core assets
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[SW] Caching core assets...');
        return cache.addAll(CORE_ASSETS);
      }),
      // Cache images separately
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        console.log('[SW] Caching player images...');
        return cache.addAll(PLAYER_IMAGES);
      })
    ])
    .then(() => {
      console.log('[SW] All assets cached successfully');
      return self.skipWaiting();
    })
    .catch((error) => {
      console.error('[SW] Error during install:', error);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old versioned caches
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[SW] Old caches cleaned up');
      return self.clients.claim();
    })
  );
});

// Helper: Check if a request is for an image
function isImageRequest(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)(\?.*)?$/i);
}

// Helper: Check if a request is for a player image
function isPlayerImage(request) {
  return request.url.includes('/images/players/');
}

// Helper: Check if request is for an external resource (CDN, etc.)
function isExternalRequest(request) {
  return !request.url.includes(self.location.origin);
}

// Fetch event - handle requests with appropriate strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle image requests with cache-first strategy
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
    return;
  }
  
  // Handle external requests (CDNs, etc.) with stale-while-revalidate
  if (isExternalRequest(request)) {
    event.respondWith(handleExternalRequest(request));
    return;
  }
  
  // Handle local requests with network-first strategy
  event.respondWith(handleLocalRequest(request));
});

/**
 * Cache-first strategy for images
 * Fast loading and works offline
 */
async function handleImageRequest(request) {
  const cacheName = isPlayerImage(request) ? IMAGE_CACHE_NAME : CACHE_NAME;
  
  try {
    // Try cache first
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Return cached image
      console.log('[SW] Serving image from cache:', request.url);
      
      // Refresh cache in background (stale-while-revalidate)
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
        })
        .catch(() => {
          // Silently fail for background refresh
        });
      
      return cachedResponse;
    }
    
    // Not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache the new image
      cache.put(request, networkResponse.clone());
      console.log('[SW] Cached new image:', request.url);
    }
    
    return networkResponse;
    
  } catch (error) {
    console.error('[SW] Error fetching image:', error);
    
    // Return placeholder for failed image requests
    if (isPlayerImage(request)) {
      const cache = await caches.open(IMAGE_CACHE_NAME);
      const placeholder = await cache.match('/nfl-mock-draft-2026/images/players/placeholder.jpg');
      if (placeholder) {
        console.log('[SW] Serving placeholder for failed image');
        return placeholder;
      }
    }
    
    // Return a simple error response
    return new Response('Image not available offline', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

/**
 * Stale-while-revalidate for external resources
 */
async function handleExternalRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Start network fetch in background
  const networkFetch = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch((error) => {
      console.error('[SW] External request failed:', error);
      throw error;
    });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Otherwise wait for network
  try {
    return await networkFetch;
  } catch (error) {
    // If network fails and we have nothing cached, return offline page
    return new Response('Resource not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

/**
 * Network-first strategy for local requests
 * Get fresh content when possible, fallback to cache
 */
async function handleLocalRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Update cache with fresh content
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    throw new Error('Network response not OK');
    
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    // Network failed, try cache
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      console.log('[SW] Serving from cache:', request.url);
      return cachedResponse;
    }
    
    // Nothing cached, return offline fallback
    console.log('[SW] Not in cache, serving offline page');
    const offlineResponse = await cache.match('/nfl-mock-draft-2026/');
    if (offlineResponse) {
      return offlineResponse;
    }
    
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>NFL Mock Draft 2026 - Offline</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Inter', sans-serif;
              background: #0a0a0f;
              color: #fff;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              padding: 2rem;
              text-align: center;
            }
            h1 { color: #00d4ff; font-size: 2rem; }
            p { color: #8b8b9a; max-width: 400px; }
            .icon { font-size: 4rem; margin-bottom: 1rem; }
            button {
              background: #00d4ff;
              color: #0a0a0f;
              border: none;
              padding: 1rem 2rem;
              border-radius: 8px;
              font-size: 1rem;
              cursor: pointer;
              margin-top: 1rem;
            }
          </style>
        </head>
        <body>
          <div class="icon">📡</div>
          <h1>You're Offline</h1>
          <p>The NFL Mock Draft 2026 requires an internet connection to load fresh content. Cached content may still be available.</p>
          <button onclick="window.location.reload()">Try Again</button>
        </body>
      </html>`,
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }
}

// Message handling from main thread
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
  
  if (event.data === 'getCacheStats') {
    Promise.all([
      caches.open(CACHE_NAME),
      caches.open(IMAGE_CACHE_NAME)
    ]).then(([coreCache, imageCache]) => {
      return Promise.all([
        coreCache.keys(),
        imageCache.keys()
      ]);
    }).then(([coreKeys, imageKeys]) => {
      event.ports[0].postMessage({
        coreAssets: coreKeys.length,
        images: imageKeys.length,
        version: CACHE_VERSION
      });
    });
  }
});

// Background sync for analytics (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    console.log('[SW] Syncing analytics...');
    // Analytics sync logic would go here
  }
});

// Periodic background sync to update content
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-update') {
    console.log('[SW] Periodic content update...');
    // Content update logic would go here
  }
});

console.log('[SW] Service Worker script loaded');
