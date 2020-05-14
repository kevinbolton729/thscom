importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/0c065e9fd108e999b972.js",
    "revision": "6d30fe881972081c5853dc2bbe88a9aa"
  },
  {
    "url": "/thscom/_nuxt/1e33e29a3f39ff9d9006.js",
    "revision": "74cc73da0c0468651d1908f6462fc736"
  },
  {
    "url": "/thscom/_nuxt/4011844c5ca1c43eca59.js",
    "revision": "d5259d52a56820476313a2e259f88ccf"
  },
  {
    "url": "/thscom/_nuxt/7c0ad2dbe02448135ca2.js",
    "revision": "c4cd2d03825352ba717b783ea6dd4d3a"
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
