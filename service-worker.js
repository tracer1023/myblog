/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "859329ba174502279401490076121580"
  },
  {
    "url": "assets/css/0.styles.9778bb33.css",
    "revision": "eeb9dc1525aa927d18d77854b47dca13"
  },
  {
    "url": "assets/img/bok.1d4bcbac.png",
    "revision": "1d4bcbacb239870ed5bb9370e047c541"
  },
  {
    "url": "assets/img/docker.c5aac84f.png",
    "revision": "c5aac84faa05ecbbc4a2ddec4c9488db"
  },
  {
    "url": "assets/img/gitlab-01.e72aa83f.png",
    "revision": "e72aa83f7e1dd37f64d95e3bfef44d12"
  },
  {
    "url": "assets/img/gitlab-02.0b9cb3dd.png",
    "revision": "0b9cb3dd645b134793954d8de4a0b069"
  },
  {
    "url": "assets/img/jenkins-01.6baabbf6.png",
    "revision": "6baabbf6ec4719c9e3a695cefecf7016"
  },
  {
    "url": "assets/img/jenkins-02.7ff485a6.png",
    "revision": "7ff485a65e375f487c2d95c275c48fab"
  },
  {
    "url": "assets/img/jenkins-03.3a577fb0.png",
    "revision": "3a577fb0c4e8a1ad182cea02dcb70c4c"
  },
  {
    "url": "assets/img/jenkins-04.4b39b913.png",
    "revision": "4b39b913fbe7c4684887bcdd3faf7fd6"
  },
  {
    "url": "assets/img/jenkins-05.665be910.png",
    "revision": "665be910d5561256c6503f021b84da29"
  },
  {
    "url": "assets/img/jenkins.3a7c3b33.png",
    "revision": "3a7c3b3321b3aaed8f1b2397692f06b5"
  },
  {
    "url": "assets/img/nginx-01.12b38502.png",
    "revision": "12b38502e7df71c5dfced2f468e708bf"
  },
  {
    "url": "assets/img/nginx-02.6a46a629.png",
    "revision": "6a46a6296a41dea46e8afa6e0777783c"
  },
  {
    "url": "assets/img/nginx-03.2cca85a5.png",
    "revision": "2cca85a5ac14ad450bd7c3c788c05267"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3766d178.js",
    "revision": "fc1396a532a1de3a6ad60d7bd706da02"
  },
  {
    "url": "assets/js/11.cc192412.js",
    "revision": "9740c06025b2803c69d383b419fdd5d0"
  },
  {
    "url": "assets/js/12.574b973e.js",
    "revision": "06554c6d9d02277b89a72a0e069d997c"
  },
  {
    "url": "assets/js/13.d815cfba.js",
    "revision": "5e4e2c7c24551f784edd349c74836c0b"
  },
  {
    "url": "assets/js/14.2fd90e11.js",
    "revision": "d93f3c0f2912ea79dbb456427d4ec35a"
  },
  {
    "url": "assets/js/15.ca2da1de.js",
    "revision": "f16ccb466f650dad6efb8185ccdc047f"
  },
  {
    "url": "assets/js/16.b162b643.js",
    "revision": "c2b3dfb0c1c92898cbbd38e541f76e72"
  },
  {
    "url": "assets/js/17.2ce33cf6.js",
    "revision": "01840fb1e6726d7af9e3a5725e25c6de"
  },
  {
    "url": "assets/js/18.6dd22f25.js",
    "revision": "0db8f5e9538981600919c77b9c0037a9"
  },
  {
    "url": "assets/js/19.850ecd36.js",
    "revision": "6872aec57f149329132434b653d51fd8"
  },
  {
    "url": "assets/js/2.5b6550c1.js",
    "revision": "b546f99f4fb317498986f06b4d0036d8"
  },
  {
    "url": "assets/js/20.9f1a50fa.js",
    "revision": "38b67fffb47955230368de8fd226b2c4"
  },
  {
    "url": "assets/js/3.46c87e14.js",
    "revision": "e0ff7bcd5915ed687485fcd6e02d65a2"
  },
  {
    "url": "assets/js/4.56d3ef15.js",
    "revision": "86b1cd89c0c98be1d6dc0baa451a86ba"
  },
  {
    "url": "assets/js/5.0a448c8c.js",
    "revision": "fb9247faa0bb693223d8df2e80e804b8"
  },
  {
    "url": "assets/js/6.7507f62f.js",
    "revision": "c0b8b86c687dbe6422bbb13be3ecfa45"
  },
  {
    "url": "assets/js/7.3afd735b.js",
    "revision": "45aa51fde047fa395c3e96d53941b0e1"
  },
  {
    "url": "assets/js/8.7de16033.js",
    "revision": "a87d3d39222840a8f629e90a33152e91"
  },
  {
    "url": "assets/js/9.63604f57.js",
    "revision": "e01d30354cfa9a5bcc3190ad56739ee9"
  },
  {
    "url": "assets/js/app.e2eb2984.js",
    "revision": "528398dcacde465cf3bbce612b4d8a35"
  },
  {
    "url": "img/background.jpeg",
    "revision": "e8b9af9136578a1df519b8ce90c920f9"
  },
  {
    "url": "img/background12.jpeg",
    "revision": "e6b0d6d7b939b834444f01f96377a81f"
  },
  {
    "url": "img/background2.jpeg",
    "revision": "2146ee47f05583621b06d1e84d69c587"
  },
  {
    "url": "img/logo.gif",
    "revision": "214944384d0425fcb27d302739cd1fc6"
  },
  {
    "url": "img/rainbow.gif",
    "revision": "7fc043cfbc9943008da1db2152da0a6f"
  },
  {
    "url": "index.html",
    "revision": "5ab6e685d546d3070d882dd3bc0fdef8"
  },
  {
    "url": "serverDoc/index.html",
    "revision": "ed6f6fbf4d2202f0d8c7692675666ada"
  },
  {
    "url": "webDoc/10-css/001.html",
    "revision": "ec9f5bd45bebae30f0643e7087ed0d97"
  },
  {
    "url": "webDoc/20-html/001.html",
    "revision": "0d23b52ea44d8c8cc7051c8ddb57adb7"
  },
  {
    "url": "webDoc/30-javaScript/001.html",
    "revision": "c1a6cf7e7a458b0c7340c38db05d71fa"
  },
  {
    "url": "webDoc/30-javaScript/002.html",
    "revision": "19033fcccbe9b14d40c0e85aa34d7f49"
  },
  {
    "url": "webDoc/50-tools/001-docker.html",
    "revision": "b78390d5012b1e86c074087635d6d2b7"
  },
  {
    "url": "webDoc/50-tools/002-nginx.html",
    "revision": "960fdc0dfd9e7720f64ee5a8284b1b5f"
  },
  {
    "url": "webDoc/60-interview/001.html",
    "revision": "350f8332c7c871ac8dce0206b931f745"
  },
  {
    "url": "webDoc/70-sourceCode/001.html",
    "revision": "78f606ccb8e314fd9dcc664cbb59e82b"
  },
  {
    "url": "webDoc/80-programBasis/001.html",
    "revision": "8a278960f2ce7796761e5ec06945602a"
  },
  {
    "url": "webDoc/90-about/001.html",
    "revision": "f00281dfbeaf82fdf47bed7e6e6dae3d"
  },
  {
    "url": "webDoc/index.html",
    "revision": "68545f901db3ae36f18c7c3969611dfe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
