importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/40201ab4b303f8f3bcbf.js",
    "revision": "e34673c5c27df89245fdb7033646a3ba"
  },
  {
    "url": "/thscom/_nuxt/8f5399281a912c170ae4.js",
    "revision": "a93ef86e99f39d8efce752007c4ab29f"
  },
  {
    "url": "/thscom/_nuxt/c24b1eae7aa7ec38a961.js",
    "revision": "371698a2eed342ce5560456b28379ebc"
  },
  {
    "url": "/thscom/_nuxt/c7baaf1c6b0eb103e865.js",
    "revision": "b5a71c73571ff66b5c57f5f31d1838d5"
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
