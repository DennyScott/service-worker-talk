const data = [
  {
    body: "quia et suscipit↵suscipit recusandae consequuntur expedita et",
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio",
    userId: 1
  }
];

self.addEventListener("fetch", event => {
  console.log("listening for fetch");
  event.respondWith(
    fetch(event.request).catch(error => {
      return new Response(JSON.stringify(data));
    })
  );
});
