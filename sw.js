importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/3fdd2b54b614d82ac6c9.js",
    "revision": "fc30e30a9e124ca0b63e73fb100f2170"
  },
  {
    "url": "/thscom/_nuxt/4959fc7849c2a71057f5.js",
    "revision": "53287641bd56b9dfe61ad359019a97a1"
  },
  {
    "url": "/thscom/_nuxt/7ea322838e270741f49d.js",
    "revision": "d03715c74aa3901672012113de83f61f"
  },
  {
    "url": "/thscom/_nuxt/d9737b71e1d6be3a6859.js",
    "revision": "4a1fbd6c34b6fd74c66328d09f3b3183"
  },
  {
    "url": "/thscom/_nuxt/e9f7478ad5c8ce9f59cc.js",
    "revision": "0c5a81bee1493af196caa1afb65421f0"
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
