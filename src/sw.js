if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!i[e]&&(await new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}),!i[e]))throw new Error(`Module ${e} didn’t register its module`);return i[e]},s=async(s,i)=>{const r=await Promise.all(s.map(e));i(1===r.length?r[0]:r)};s.toUrl=e=>`./${e}`;const i={require:Promise.resolve(s)};self.define=(s,r,n)=>{i[s]||(i[s]=new Promise(async i=>{let o={};const c={uri:location.origin+s.slice(1)},a=await Promise.all(r.map(s=>"exports"===s?o:"module"===s?c:e(s))),t=n(...a);o.default||(o.default=t),i(o)}))}}define("./sw.js",["./workbox-fcb5d774"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/css/style.css",revision:"dc2f05e228ed9a8e4f75bf02e6b3b4a1"},{url:"assets/images/bomb.png",revision:"0c15e7fa1ccf7eca194b0cb7b506070d"},{url:"assets/images/time.png",revision:"d2c27c9afbddd337523af3bcaa5e3e5d"},{url:"components/game-manager.js",revision:"58d4e71b340914728ab54650f1d54b77"},{url:"components/tile.js",revision:"80d5a759d3e1a0e962798f119f25e235"},{url:"index.html",revision:"b84ea81bdb293d34f3bd23a017cc4896"},{url:"index.js",revision:"0df5d0674a3c76174b6be51c114e59cf"}],{})}));
//# sourceMappingURL=sw.js.map
