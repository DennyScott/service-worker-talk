* Consists of a script
* Acts as a proxy between client (browser) and network.
* It can:
  * define and handle offline experiences
  * improve online web performance

## Web Worker

A service worker is a web worker, which is:

* An object created from within a context
* consists of a js file
* The code in that js file is run in a worker thread
* a web worker has a different global context

In our execution thread, our global scope is window
In our worker thread, our global scope is ServiceWorkerGlobalScope

We can use the Channel Message API to communicate between these two contexts

## Rules with Service Worker

* Has to be https
* Async Only

## Platforms

* Across all platforms

## 01-Register our service worker

## 02-Call a fetch request

## 03-Watch for a failed fetch request

## 04-Caching our data

We are going to cache some data that we receive from an api, so incase our internet goes down, we can retract that info from our stage.

Any caches which we create, are managed through the CacheStorage system. It exists in our ServiceWorkerGlobalScope.

### Network first strategy

Network first strategy means we are going to attempt to find that data over the network first. If we find it, cache it, and return it. If we error, return what is in our cache.

We can even do things like, host specific pages if the user is offline, and cache those pages.

### Cache first strategy
