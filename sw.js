self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-cache').then(function (cache) {
            return cache.addAll([
                '/',
            ]);
        })
    );
});

// respond with fetch but on error catch respond with cache entry
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});