if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7b2cd3a9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.42a22bdd.css",revision:"313f08fa22d6ee4e6bb901100a20f975"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/29.f0451066.js",revision:"ddae402d8f85a9a9f9ebcb3d2f911545"},{url:"assets/js/30.93b70ff0.js",revision:"3758271202920a7c10302ec9078ba7b2"},{url:"assets/js/31.05871f9d.js",revision:"4e9a9466dfac8be1a5653047abe7f9fc"},{url:"assets/js/32.b4fcf85b.js",revision:"1ba92bbb04bb47b93d12cee778693edf"},{url:"assets/js/33.57790a8f.js",revision:"2031132d1c6515ba45283ab8fa2f7497"},{url:"assets/js/app.7093268d.js",revision:"19e9353e5236f454e06d09ec5c24eabc"},{url:"assets/js/layout-Blog.05220573.js",revision:"4f8e1dbc5668a03af6a72e8bfb3cae8c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.8ab3fea4.js",revision:"90b3b96096bcd45a8e124ebb84b8fde4"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a0634126.js",revision:"2ceacdb1ce3c1b4a66a2ca57893dc65a"},{url:"assets/js/layout-Layout.964e75b9.js",revision:"7229481906fca7fb9000a4f29f2f8589"},{url:"assets/js/layout-NotFound.78feaf5b.js",revision:"f84c0e161e290e52746abd3cce1b13e3"},{url:"assets/js/layout-Slide.2f87abf6.js",revision:"9b70eaf714647abf4a945dfea059f80b"},{url:"assets/js/page-Componentdisabled.adf724b9.js",revision:"bed4d9acf37151a516a128fb9273cad5"},{url:"assets/js/page-Encryptionarticle.51e0348c.js",revision:"6f99b15e99116d5c91d4ab83c02b3aa4"},{url:"assets/js/page-Guides.e3db3cb2.js",revision:"e422b366b3414852ab8afaab0b958429"},{url:"assets/js/page-IntroPage.c5e0ab16.js",revision:"6ba31d170da912d7c45d1e18f1717b02"},{url:"assets/js/page-MarkdownEnhance.ca806b22.js",revision:"393fde75da4783907b19792c7348a037"},{url:"assets/js/page-Markdown增强.fe8dc190.js",revision:"8c2c530ced64280ca2b2705b7bbbc556"},{url:"assets/js/page-MrHope.744d1ff2.js",revision:"142952b04e3d1e955a4702cc7d34c97f"},{url:"assets/js/page-pageconfig.68a2fcc2.js",revision:"7a2fb8f9f4d8c9ea14e2febdd102602b"},{url:"assets/js/page-Projecthomepagedemo.7cb9ef6c.js",revision:"183326065c15714c2643383aa2e3bf66"},{url:"assets/js/page-Slidepage.46b9531a.js",revision:"342fac417f62993c0e9019512fcdf4c6"},{url:"assets/js/page-主要功能与配置演示.ff2009a2.js",revision:"7bc906642d4eb33207749870932a531f"},{url:"assets/js/page-密码加密的文章.14035c7b.js",revision:"3534f13d9c064d8985d2a0501a914230"},{url:"assets/js/page-幻灯片页.703ec65c.js",revision:"3a051779c3887a00ddb7eedf6f358215"},{url:"assets/js/page-组件禁用.9da6ed29.js",revision:"02a801c60820318e199c5cc8031b9c7a"},{url:"assets/js/page-页面配置.df7ceb7e.js",revision:"9267f3a95ff03ebb663440f06df3cee4"},{url:"assets/js/page-项目主页展示.ef40a810.js",revision:"5813eac8573a3998648e26c33b71349a"},{url:"assets/js/vendors~flowchart.3fdee010.js",revision:"ff41299c4724f38f48b9db644f7f1dfb"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.57548f3b.js",revision:"66eca1e130bc6c008a69b1556c7b4ebe"},{url:"assets/js/vendors~photo-swipe.33860e35.js",revision:"f1636dada37e179839a62019b43e0e1c"},{url:"assets/js/vendors~reveal.79efd656.js",revision:"8f8e6191b1eb50d5e1e5e16f10287494"},{url:"assets/js/vendors~valine.2bd97252.js",revision:"2ce2564ba596c44783cf0f0dd5faa126"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"dcdf8c613c138e716e86b0ae68eebee0"},{url:"article/index.html",revision:"2ed1d6df75c28692d8970f9b28ecabc9"},{url:"category/Guide/index.html",revision:"5fd45c06c6050b35c7d1eaccc38f5776"},{url:"category/index.html",revision:"b65de144e39d989bc6973bd3c60bbfda"},{url:"category/使用指南/index.html",revision:"e0494191cfe681c99ab10d5d7dbd3cab"},{url:"encrypt/index.html",revision:"45a59736b39ea3fede811cfd6b75e4b2"},{url:"guide/disable/index.html",revision:"db486d47b6594155ffe8650dfdd1d606"},{url:"guide/encrypt/index.html",revision:"9efbb75fd7c8669d4f254c23b6465f32"},{url:"guide/index.html",revision:"57f80365f90355658bce84e0d6478f07"},{url:"guide/markdown/index.html",revision:"9912418098cf9b42bbcbfae94166081f"},{url:"guide/page/index.html",revision:"735d110b8bf652dced3e0014e204ad58"},{url:"home/index.html",revision:"1ec5ec29d1ec3a6b5cce80a3a34de109"},{url:"index.html",revision:"57bdc38797d6e17a190427071cdb9bb6"},{url:"intro/index.html",revision:"bd08d4e90e82c752689d6d8d172db4b5"},{url:"slide/index.html",revision:"fbf8a03012ff682b6b74eccf48deb463"},{url:"slides/index.html",revision:"6a38d3e4916da1e91bb431bdc6a0ca88"},{url:"tag/encryption/index.html",revision:"fd5fdb33576cc8b842e3ec160b37b8b1"},{url:"tag/Guide/index.html",revision:"28b8291706cecbff89ee0290e67ef956"},{url:"tag/index.html",revision:"f4c40bfb968c0a518618de7df67d9221"},{url:"tag/markdown/index.html",revision:"b5cea3b9a8986d4698d3085599d7d544"},{url:"tag/Page config/index.html",revision:"d99a3d96d467f8ec5ca3b2a3cdce3c9b"},{url:"tag/使用指南/index.html",revision:"c6a4e0e95cea7f6481a1fe5b9fd16b00"},{url:"tag/文章加密/index.html",revision:"edc4dd1faaf3f18a84c6c3c53d8d192b"},{url:"tag/页面配置/index.html",revision:"3f8761c5f36eae259e1995f490ba0c5f"},{url:"timeline/index.html",revision:"0ba52cc9caa8511252a1784de2aec145"},{url:"zh/guide/disable/index.html",revision:"dbe453676bbe5255bd16cd55463a4e4f"},{url:"zh/guide/encrypt/index.html",revision:"994207e8a03fba5ae1371be4aebd309e"},{url:"zh/guide/index.html",revision:"3ffd5a817613cd8b0a07a3dcc1293050"},{url:"zh/guide/markdown/index.html",revision:"075b688ea76103e2ee3ba60a6971ee2f"},{url:"zh/guide/page/index.html",revision:"7498c31668fab5e8e8d6af94ceb0ca25"},{url:"zh/home/index.html",revision:"907c772e06d14c657b562b3a0989f3fa"},{url:"zh/index.html",revision:"4a5ce492b9840306d03de232fdc7c4be"},{url:"zh/slides/index.html",revision:"94d9568832869d89b81fb858cd1eecd5"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
