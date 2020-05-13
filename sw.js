importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/1f49b385cf6f1a7ba1d3.js",
    "revision": "6f8f01062e5ef6f61bb12baf4fb4cf11"
  },
  {
    "url": "/thscom/_nuxt/2f432058f891fc3815a6.js",
    "revision": "12046724761f4b2fa676f3774e4bfddb"
  },
  {
    "url": "/thscom/_nuxt/35eb66c942c905819616.js",
    "revision": "3116f535e0800f17e98dc4e5dfe0471c"
  },
  {
    "url": "/thscom/_nuxt/40201ab4b303f8f3bcbf.js",
    "revision": "e34673c5c27df89245fdb7033646a3ba"
  },
  {
    "url": "/thscom/_nuxt/cbc3a9097b49690f5578.js",
    "revision": "0cfd45bf37ed0f4bef10695da6bb8f26"
  }
], {
  "cacheId": "thscd",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/thscom/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/thscom/.*'), workbox.strategies.networkFirst({}), 'GET')
