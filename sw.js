importScripts('/thscom/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/thscom/_nuxt/3eb3da3218c72bda91d5.js",
    "revision": "57e48f6735609364f8ce4ea915246537"
  },
  {
    "url": "/thscom/_nuxt/5cb8ec743413ddf27e20.js",
    "revision": "78a75a9662e96913ac8d352f4e52635e"
  },
  {
    "url": "/thscom/_nuxt/7e2e11cfffd7e4a0221a.js",
    "revision": "ac69e7876156a083f95b2bbd6ee7ed73"
  },
  {
    "url": "/thscom/_nuxt/b67452d2542ca7c7e0aa.js",
    "revision": "022d93a8ccd412e1e9d9066046abb2ea"
  },
  {
    "url": "/thscom/_nuxt/d3aa9f1d9ecb5118a811.js",
    "revision": "a32b240a21b87881cbd2061835ce57b0"
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
