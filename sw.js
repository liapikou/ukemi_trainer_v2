/* Ukemi Sonification Trainer — service worker
   Cache-first for the app shell; runtime caching for the MediaPipe
   model + wasm so the Live Trainer works offline after first use. */
const CACHE = 'ukemi-v3';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = e.request.url;
  // runtime-cache the pose model + wasm (first online use makes it offline-capable)
  const isModel = url.includes('cdn.jsdelivr.net') || url.includes('storage.googleapis.com') || url.includes('fonts.g');
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if ((isModel || url.startsWith(self.location.origin)) && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => hit))
  );
});
