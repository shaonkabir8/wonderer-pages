const CACHE = "echoes-shell-v1";
const scopeUrl = new URL(self.registration.scope);

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const page = await fetch(scopeUrl, { cache: "reload" });
    if (page.ok) {
      await cache.put(scopeUrl, page.clone());
      const html = await page.clone().text();
      const paths = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
        .map((match) => match[1])
        .filter((path) => !/^(?:https?:|data:|#)/i.test(path))
        .map((path) => new URL(path, scopeUrl).href);
      await Promise.allSettled(paths.map(async (path) => {
        const response = await fetch(path);
        if (response.ok) await cache.put(path, response);
      }));
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith("echoes-shell-") && key !== CACHE)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(request);
      if (response.ok) cache.put(request, response.clone());
      return response;
    } catch (_) {
      const cached = await cache.match(request, { ignoreSearch: true });
      if (cached) return cached;
      if (request.mode === "navigate") return (await cache.match(scopeUrl)) || Response.error();
      return Response.error();
    }
  })());
});
