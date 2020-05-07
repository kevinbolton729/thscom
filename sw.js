importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/40201ab4b303f8f3bcbf.js",
    "revision": "e34673c5c27df89245fdb7033646a3ba"
  },
  {
    "url": "/thscom/_nuxt/66dfa406addc2eff8834.js",
    "revision": "74082e7834805be61e0d524f6f9af6e2"
  },
  {
    "url": "/thscom/_nuxt/859c03f944538b504b4c.js",
    "revision": "88bd558bf2ad6afa83b041586a643f88"
  },
  {
    "url": "/thscom/_nuxt/8a42b509a9e912426bd5.js",
    "revision": "1d36608bbf6b7326ab2fda0e4033bae9"
  },
  {
    "url": "/thscom/_nuxt/cbc3a9097b49690f5578.js",
    "revision": "0cfd45bf37ed0f4bef10695da6bb8f26"
  }
], {
  "cacheId": "example-nuxtjs",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/thscom/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/thscom/.*'), workbox.strategies.networkFirst({}), 'GET')
