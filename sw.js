importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/24ab14e04a971ba82f79.js",
    "revision": "ccb586eaef5a5dbe5f702107e14a5ae1"
  },
  {
    "url": "/thscom/_nuxt/40201ab4b303f8f3bcbf.js",
    "revision": "e34673c5c27df89245fdb7033646a3ba"
  },
  {
    "url": "/thscom/_nuxt/519799730329612b8fe1.js",
    "revision": "10de8adfc638b55f9173dfd27f0ab19a"
  },
  {
    "url": "/thscom/_nuxt/8f5399281a912c170ae4.js",
    "revision": "a93ef86e99f39d8efce752007c4ab29f"
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
