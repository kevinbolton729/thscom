importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/017f37aac7263697e632.js",
    "revision": "346b4fcd58c42d2a7246b746bf40f358"
  },
  {
    "url": "/thscom/_nuxt/0c065e9fd108e999b972.js",
    "revision": "6d30fe881972081c5853dc2bbe88a9aa"
  },
  {
    "url": "/thscom/_nuxt/2bbe7c20c1476027a7b8.js",
    "revision": "cfcb011feb2257b3911470aa40529316"
  },
  {
    "url": "/thscom/_nuxt/98a991df91c8e64a136c.js",
    "revision": "1bd26e90b696b54c4e60c4b30f884e9a"
  },
  {
    "url": "/thscom/_nuxt/a44116e7f8434be6db48.js",
    "revision": "69204630ce33d360629490459ac8cd42"
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
