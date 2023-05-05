var CACHENAME = "cachestore";
var FILES = [
  "/img/male.png",
  "/banner1.JPG",
  "/index.html",
  "/recursos/flow.css",
  "/recursos/filesaver.js",
  "/recursos/flow.js",
  "/recursos/jszip.js",
  "/recursos/xml.js"
];
// Cached core static resources 
self.addEventListener("install",e=>{
    e.waitUntil(
      caches.open(CACHENAME).then(cache=>{
        return cache.addAll(FILES);
      })
    );
  });
  
  // Fatch resources
  self.addEventListener("fetch",e=>{
    e.respondWith(
      caches.match(e.request).then(response=>{
        return response||fetch(e.request);
      })
    );
  });