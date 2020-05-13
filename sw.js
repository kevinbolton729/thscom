importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/40201ab4b303f8f3bcbf.js",
    "revision": "e34673c5c27df89245fdb7033646a3ba"
  },
  {
    "url": "/thscom/_nuxt/62cd1d42a84fd568f5f5.js",
    "revision": "b0947fa83d13b0e9eadafdfbe882b8f4"
  },
  {
    "url": "/thscom/_nuxt/673cf44d5a3d29cbff23.js",
    "revision": "922dfd2a6338c91136059d03cde7b789"
  },
  {
    "url": "/thscom/_nuxt/75fc2a676bf061ce8419.js",
    "revision": "397d89f7c0f283c54fd7db3991505c87"
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
