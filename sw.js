importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/1bb5346362623877aca1.js",
    "revision": "9c4453b8fb01541d5c5805e203f80a09"
  },
  {
    "url": "/thscom/_nuxt/6a3a43a647811102e385.js",
    "revision": "70a0e8bce1b70d4e33197b7b284f718b"
  },
  {
    "url": "/thscom/_nuxt/83d9044d68287f292f08.js",
    "revision": "47de8d6caadbbf5b00329c3441c2cb15"
  },
  {
    "url": "/thscom/_nuxt/bede91b189c40a3d7a7b.js",
    "revision": "63f3c892ddad3858735135d0037036b4"
  },
  {
    "url": "/thscom/_nuxt/f13f3db24624b52502fa.js",
    "revision": "60d9e4e8365b84d386d7e662e01bf457"
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
