self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Biarkan kosong untuk PWA dasar, ini cukup untuk memicu tombol install
});
