const networkFirstStrategy = event => {
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
};

const cacheFirstStrategy = event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (!response) {
        return fetch(event.request).then(fetchResponse => {
          caches
            .open(event.request.url)
            .then(cache => cache.put(event.request, fetchResponse.clone));
          return fetchResponse;
        });
      }
      return response;
    })
  );
};

self.addEventListener("fetch", event => {
  if (event.request.headers.get("Accept").indexOf("image") !== -1) {
    cacheFirstStrategy(event);
  } else {
    networkFirstStrategy(event);
  }
});
