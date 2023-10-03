


let CACHE_NAME = 'codePwa';

var urlCache = [
  "/static/js/bundle.js",
  "/asset-manifest.json",
  "/manifest.json",
  "/logo192.png",
  '/main.a266c4da3a143831ed06.hot-update.json',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/logo.png',
  "/",
  "/cat",

];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((name) => {
            // Filter out old cache versions
            return name !== CACHE_NAME;
          }).map((name) => {
            // Delete old cache versions
            return caches.delete(name);
          })
        );
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        // Offline fallback
        if (!navigator.onLine) {
          return caches.match('/');
        }
        // Make a network request for non-cached resources
        return fetch(event.request);
      })
  );
});




// let CACHE_NAME = 'codePwa';

// var urlCache = [
//   "/static/js/bundle.js",
//   "/asset-manifest.json",
//   "/manifest.json",
//   "/logo192.png",
//   '/main.a266c4da3a143831ed06.hot-update.json',
//   '/index.html',
//   '/styles.css',
//   '/app.js',
//   '/logo.png',
//   "/",
//   "/cat",
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         return cache.addAll(urlCache);
//       })
//   );
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys()
//       .then((cacheNames) => {
//         return Promise.all(
//           cacheNames.filter((name) => {
//             // Filter out old cache versions
//             return name !== CACHE_NAME;
//           }).map((name) => {
//             // Delete old cache versions
//             return caches.delete(name);
//           })
//         );
//       })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         if (response) {
//           return response;
//         }
//         // Offline fallback
//         if (!navigator.onLine) {
//           return caches.match('/index.html');
//         }
//         // Make a network request for non-cached resources
//         return fetch(event.request);
//       })
//   );
// });
