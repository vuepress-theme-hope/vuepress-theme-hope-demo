if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-7c50a1e6"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/css/0.styles.76d74767.css",revision:"d05b2423f8cac75aaf6b71ebb742bbc4"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/25.ea60c9c9.js",revision:"d74fb4ac45c2d8a40cb868a8662e568d"},{url:"assets/js/26.d636ce3f.js",revision:"c86e9411ea82d262d4b9ef1864c11647"},{url:"assets/js/app.06d79c36.js",revision:"6d9124dec4c938a56dae3a8b12f0e6b3"},{url:"assets/js/layout-BlogEntry.f2dc1722.js",revision:"9c901e240e85cb533aa1a53b5dbbd550"},{url:"assets/js/layout-BlogEntry~layout-Category~layout-Layout~layout-Tag.2df1eb92.js",revision:"f234973fc100057b5db764cefae3b588"},{url:"assets/js/layout-BlogEntry~layout-Layout.deb780b6.js",revision:"9b1c9f7fb7d1617ae8e844da682a68c4"},{url:"assets/js/layout-Category.a7d8cbce.js",revision:"18f515ac796b5a40f03d5e99e48a08e2"},{url:"assets/js/layout-Layout.719d9bbf.js",revision:"b4969bffab75a3267c0d496835655b97"},{url:"assets/js/layout-NotFound.e2ce6bcf.js",revision:"130e9d3d39745494d7720f488852b245"},{url:"assets/js/layout-Tag.6322b097.js",revision:"c012cbecddca8df22d260269ac66e133"},{url:"assets/js/page-Home.eb58a8a1.js",revision:"8bc454b0ef2c8a4eb03354ab886dc2b3"},{url:"assets/js/page-Markdown 增强.982ffa05.js",revision:"b35f22b8b183d17cd2eacae0e2b0e63e"},{url:"assets/js/page-内部链接页脚.1ac48f01.js",revision:"82197cea73f570a41f26baf860a3712d"},{url:"assets/js/page-外部链接页脚.b2e65516.js",revision:"0c085926e64901518ca2f8d924f762db"},{url:"assets/js/page-密码测试.f5cd6d68.js",revision:"844f7878a31dd0d0ecb62dfccd1d0fea"},{url:"assets/js/page-文字页脚.c556f6c2.js",revision:"171986b44998f042d46b361eb6643f4d"},{url:"assets/js/page-无页脚.ceb2b03b.js",revision:"72a0168cb74dcb77573859070681cbe4"},{url:"assets/js/page-组件测试.57de3423.js",revision:"200258c467176525b6f244e7b0aa7f3a"},{url:"assets/js/page-组件禁用.46ebac76.js",revision:"994aeb13785cb49c9b62a3a868328838"},{url:"assets/js/page-置顶文章.b429de21.js",revision:"3693ecf70e26a6dc80847f2986d73751"},{url:"assets/js/page-自定义页脚.4279cc0f.js",revision:"fd83dc00115375d0caa0d7e3154d94dc"},{url:"assets/js/page-页面信息.016f7291.js",revision:"64a645c1e2de4a73f8724487b0bca99d"},{url:"assets/js/page-页面布局.62af1130.js",revision:"757de049d240265b87d908bd652e6278"},{url:"assets/js/page-页面配置.54cd4fd4.js",revision:"4be74f0a102872271476b1aed61d8253"},{url:"assets/js/page-默认页脚.384340d2.js",revision:"f5bbf3b71b8c9eca98cc782c75aa2df2"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.0330e74b.js",revision:"7c9153af5cf694bd90901f64f5e434c6"},{url:"category/component/index.html",revision:"00dcf2339a847e49b9de1e3da7baab96"},{url:"category/index.html",revision:"965538ba46cc5f54bf402cb9b7665147"},{url:"category/layout/index.html",revision:"09e633f93daf9239bed9a619c652a3be"},{url:"component/disable.html",revision:"15423a29435f9a1d07597d5ec4589742"},{url:"component/footer/default.html",revision:"c937710f23e34b93f4d69c90b7d26aa8"},{url:"component/footer/diy.html",revision:"2ca5aa636f3a18e36a5d0d6414480818"},{url:"component/footer/index.html",revision:"6f9a586af111458c62f2c0d7259ea82d"},{url:"component/footer/link.html",revision:"ad2c2a4907a092f6bf56dbd925785f54"},{url:"component/footer/outlink.html",revision:"c33cf9a05fbcbd5bc715169b8f1cbff8"},{url:"component/footer/text.html",revision:"605276f58706b7fd3247ef96e8010cf3"},{url:"component/index.html",revision:"b29e7a642b1f61d395debc8cde80740e"},{url:"component/pageInfo.html",revision:"33e09a08dce2560b69faf55f19b823ea"},{url:"en/index.html",revision:"21aecbb528d8c4e2d2210b81883181c1"},{url:"en/test/detail/markdown.html",revision:"6786eea19fc353addc46e791a56372e4"},{url:"en/test/detail/page.html",revision:"27febcd2eab71f746082e7951323101f"},{url:"en/test/footer/default.html",revision:"ebbc751fa890951787210e15dd85deae"},{url:"en/test/footer/diy.html",revision:"75e57cb35e70c89f03360beb60cdc63d"},{url:"en/test/footer/index.html",revision:"77a3ddd8253a48d5a035a0e12cfc2f3d"},{url:"en/test/footer/link.html",revision:"bc068a284436ecdd366e7b15dc7faa46"},{url:"en/test/footer/outlink.html",revision:"e16acf330cd2d9b25534733a6c196727"},{url:"en/test/footer/text.html",revision:"b9b9b7ae56319afb7672a0bbe6d8901e"},{url:"en/test/index.html",revision:"924ff0e7c393aa72632305f1fb294466"},{url:"encrypt/index.html",revision:"09e4020f68d6f5e029b4b1fefb982f97"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"47fdadf20932583924e49704636073a3"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"f425ed3d50b15be4fb61f9717de34cc6"},{url:"sticky.html",revision:"2f63079cfc3419ac97baf25cd95d5189"},{url:"tag/footer/index.html",revision:"ec6cb0ad5df65edad2e27e0dd614924a"},{url:"tag/index.html",revision:"7f97d31ce3499258d9c201c24863b3c7"},{url:"tag/layout/index.html",revision:"63342110d07bc82de47f607bca2a3946"},{url:"tag/markdown/index.html",revision:"d06e61bc4e3eae561b83453bae1cb523"},{url:"test/index.html",revision:"c7ee7dc9afe33634a131584364111d23"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
