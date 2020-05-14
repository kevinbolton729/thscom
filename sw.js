importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/017f37aac7263697e632.js",
    "revision": "346b4fcd58c42d2a7246b746bf40f358"
  },
  {
    "url": "/thscom/_nuxt/287f93c8b666bfb4b74a.js",
    "revision": "7d6204f6307b140a7a83642fc2f1b5cf"
  },
  {
    "url": "/thscom/_nuxt/2bbe7c20c1476027a7b8.js",
    "revision": "cfcb011feb2257b3911470aa40529316"
  },
  {
    "url": "/thscom/_nuxt/395464d168cdd55dff42.js",
    "revision": "e73e8e4d1aa02b22910290d829ff4496"
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
