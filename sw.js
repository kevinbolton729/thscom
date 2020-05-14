importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/00e4d018b0012cd813f9.js",
    "revision": "74dd19be2c2e7726d4c6ec8d4163fb91"
  },
  {
    "url": "/thscom/_nuxt/017f37aac7263697e632.js",
    "revision": "346b4fcd58c42d2a7246b746bf40f358"
  },
  {
    "url": "/thscom/_nuxt/2bbe7c20c1476027a7b8.js",
    "revision": "cfcb011feb2257b3911470aa40529316"
  },
  {
    "url": "/thscom/_nuxt/755927108ab8780cbe81.js",
    "revision": "2b2ac760b610b3eb158f16f21a95de7a"
  },
  {
    "url": "/thscom/_nuxt/98a991df91c8e64a136c.js",
    "revision": "1bd26e90b696b54c4e60c4b30f884e9a"
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
