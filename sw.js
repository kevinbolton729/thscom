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
    "url": "/thscom/_nuxt/909373fe4b60fb6d070b.js",
    "revision": "6c5b114bc02a04437f71f3b34c2fd3c8"
  },
  {
    "url": "/thscom/_nuxt/b89fc585cb660d2afd80.js",
    "revision": "d9217c694aea4ca3733f715c9125e3c0"
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
