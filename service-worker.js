const networkFirstStrategy = event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        console.log("in response");
        const store = response.clone();
        if (!event.request.url.includes("chrome-extension")) {
          caches
            .open(event.request.url)
            .then(cache => cache.put(event.request, store));
        }
        return response;
      })
      .catch(error => {
        console.log("in catch");
        return caches.match(event.request);
      })
  );
};

const cacheFirstStrategy = event => {
  console.log("cache first strategy");
  event.respondWith(
    caches.match(event.request).then(response => {
      console.log(response);
      if (!response.ok) {
        console.log("no previous cache");
        return fetch(event.request.url).then(fetchResponse => {
          console.log("cache the data");
          console.log(fetchResponse);
          caches
            .open(event.request.url)
            .then(cache => cache.put(event.request, fetchResponse.clone()));
          return fetchResponse;
        });
      } else {
        console.log("Found offline");
        return response;
      }
    })
  );
};

self.addEventListener("fetch", event => {
  console.log("listening");
  console.log(event);
  if (
    event.request.headers.get("Accept").indexOf("image") !== -1 &&
    !event.request.url.includes("localhost")
  ) {
    cacheFirstStrategy(event);
  } else {
    networkFirstStrategy(event);
  }
});
