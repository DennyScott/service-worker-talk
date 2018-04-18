self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        console.log("in response");
        const store = response.clone();
        caches
          .open(event.request.url)
          .then(cache => cache.put(event.request, store));
        return response;
      })
      .catch(error => {
        console.log("in catch");
        return caches.match(event.request);
      })
  );
});
