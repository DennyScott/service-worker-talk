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

## Register our service worker
