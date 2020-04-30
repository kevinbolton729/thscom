importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4959fc7849c2a71057f5.js",
    "revision": "53287641bd56b9dfe61ad359019a97a1"
  },
  {
    "url": "/_nuxt/72612560780133e8e830.js",
    "revision": "fb9330c49127e21d6e4dd1c6e42838ba"
  },
  {
    "url": "/_nuxt/7ea322838e270741f49d.js",
    "revision": "d03715c74aa3901672012113de83f61f"
  },
  {
    "url": "/_nuxt/cd080fd6667a87d5f1b1.js",
    "revision": "80af71d5af52c09d9882c30589fa9497"
  },
  {
    "url": "/_nuxt/e9f7478ad5c8ce9f59cc.js",
    "revision": "0c5a81bee1493af196caa1afb65421f0"
  }
], {
  "cacheId": "example-nuxtjs",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
