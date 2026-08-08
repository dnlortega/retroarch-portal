self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Service Worker Básico apenas para passar no critério de instalação de PWA
  // Não faz cache pesado para não complicar o desenvolvimento local.
});
