if(!self.define){let e,r={};const c=(c,s)=>(c=new URL(c+".js",s).href,r[c]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=r,document.head.appendChild(e)}else e=c,importScripts(c),r()})).then((()=>{let e=r[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const a=e=>c(e,o),d={module:{uri:o},exports:n,require:a};r[o]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(i(...e),n)))}}define(["./workbox-75db6ee2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"banner1.JPG",revision:"5efee3367478ac0b123554a52eb1ffaf"},{url:"img/ends.webp",revision:"a858ce5283e6b1e01f8331646a497ba0"},{url:"img/logend.png",revision:"732b9cfc4c80289de74d4c47d841c18d"},{url:"img/male.png",revision:"cc4fc62d561fc81d1065c02f02f3e0e3"},{url:"index.html",revision:"02ecc3a012639db84f357dba55844df3"},{url:"index.js",revision:"b6c85a418ef9b27468c32ba131005b4e"},{url:"manifest.json",revision:"40317abe7bcddec7cb5e22a3533e996e"},{url:"recursos/filesaver.js",revision:"455ef724a4d67a67ceb581df80e5490c"},{url:"recursos/flow.css",revision:"3dba95be547c333aa2c483c4800d555c"},{url:"recursos/flow.js",revision:"7cb5b87b727a80df2cf4316a7c6507ea"},{url:"recursos/jszip.js",revision:"64b377caf1ef6a0cd7dcc3391dea1d74"},{url:"recursos/theme.js",revision:"eeb7b83b60e4a4c98ce21044a149a800"},{url:"recursos/xml.js",revision:"774feaabc29bca33c60ebc7d5bcb8ab7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
