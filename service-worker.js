if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.19b2399a.css",revision:"ed88322acf37e603dfd393696e549ae2"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.1750ea23.js",revision:"00292fbcb0e667eb86cee525c055ca4a"},{url:"assets/js/31.970ee7d4.js",revision:"7b5a1cb54e2a5b036377fc3b0953590d"},{url:"assets/js/32.14ee1676.js",revision:"e44955675510c2124c3021de92a977e0"},{url:"assets/js/33.0802bedd.js",revision:"a45291ae94b323cf8b92eb0ea8f64a3e"},{url:"assets/js/app.b2ee8059.js",revision:"805d1a7ad2e9c68718b8ce2b31a9f6f3"},{url:"assets/js/layout-Blog.125f7eb1.js",revision:"ac06f4b3bb205d5b30716a42b5140389"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.762fa908.js",revision:"17dd900c397483bb33b966ce2ed58b0d"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.4c1e8643.js",revision:"6dfdfd52b851b61e9fa99d513e683f86"},{url:"assets/js/layout-Layout.020bc795.js",revision:"c3abcec887b8ba3651724c159f33eea4"},{url:"assets/js/layout-NotFound.f48645dd.js",revision:"9a767d6ccd8e9e2420824ba11444843c"},{url:"assets/js/layout-Slide.724e1695.js",revision:"17e5ec52a1504b9a99d0b989858e4ea1"},{url:"assets/js/page-Componentdisabled--742e8b14.1fd94491.js",revision:"d153c6094cf06dffda077bb904920c37"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.4e5e1d15.js",revision:"0a3d684a1fbec3fa1b6068f651c51acf"},{url:"assets/js/page-Guides--22306cea.dee88079.js",revision:"421e927ef834be401ad2197434e244af"},{url:"assets/js/page-IntroPage--f358bcd4.6b91cbed.js",revision:"aadf3715aa5cdd7962806d9cb9a5efa2"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.0c58788a.js",revision:"da651c3d2605ab68c39b4c55de9e18c2"},{url:"assets/js/page-Markdown增强--eec60994.e5e64cda.js",revision:"13d6f9df2f9886c18d8c11697a7efcca"},{url:"assets/js/page-MrHope--145768b6.25de9cf8.js",revision:"2e9bad357dd7abefca8447c454add80b"},{url:"assets/js/page-MrHope--79004bd6.ff3e0ee2.js",revision:"6d234dd675ef6a13263d3502e3c4a967"},{url:"assets/js/page-pageconfig--55e15bfe.2bd52a17.js",revision:"3706f07896ff2f7ac191935ee1a0a3d2"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.c02f69eb.js",revision:"e0ece5bbff497ff527f04260aa14f732"},{url:"assets/js/page-Slidepage--7a2d82be.60e10909.js",revision:"af4fd7194524e035724c0d1e28f362f7"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.c7bfd82e.js",revision:"61dbf9cb3c0e248176074bef71296d45"},{url:"assets/js/page-密码加密的文章--64e181e0.eef5e940.js",revision:"d1c34c885b7ed1f6c9a9f089dc70276d"},{url:"assets/js/page-幻灯片页--f6429394.62f38c8d.js",revision:"77ca276aa397872e1dea0df8fa9d2d78"},{url:"assets/js/page-组件禁用--5650041a.b06250ce.js",revision:"f973aa141c3f9ebc09ae998856524046"},{url:"assets/js/page-页面配置--2847a8b6.c090387d.js",revision:"43ba752520fb832ea243e57f9eac84a1"},{url:"assets/js/page-项目主页展示--fb8d99d4.bfdf47f8.js",revision:"fac3ad1ea2c87bf24e0f9a081ee0086f"},{url:"assets/js/vendors~flowchart.6c6d9d3d.js",revision:"2a6ff5e488ef566aabb82afbfc1c5d0b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.cbc1c6fe.js",revision:"41d35fa673b54fa9c0e8db4ba531f041"},{url:"assets/js/vendors~photo-swipe.3b0eaf1c.js",revision:"f728ffd9cc2d7a5b8df11ac4bc6fb2b5"},{url:"assets/js/vendors~reveal.48c88953.js",revision:"f649053782f4495f13dc7a1cff950cb6"},{url:"assets/js/vendors~valine.15ee9a67.js",revision:"ff67a37bf69ad7e8c205412adc31949b"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"ba7bf5e575f0ee90a0de690d35107d51"},{url:"article/index.html",revision:"a46a207c421d94de579cef78833f196a"},{url:"category/Guide/index.html",revision:"6e3f21e894ff2d1a69030e334a3f088e"},{url:"category/index.html",revision:"ee2616f396f49672c7eeba864d0d29a8"},{url:"category/使用指南/index.html",revision:"eb01df2fdd2fcb0bc167c2bb99652e4c"},{url:"encrypt/index.html",revision:"566e7831ab1336a3586137fab57d859d"},{url:"guide/disable/index.html",revision:"a00b80d2eee420dd0e479aebbb46a7a2"},{url:"guide/encrypt/index.html",revision:"f8cf717aea778af2537fcd9a64159a72"},{url:"guide/index.html",revision:"ca0a0ae0e35b534de1922d1f4ffaac79"},{url:"guide/markdown/index.html",revision:"4f6619e6855a6d76a0a12132dcd82329"},{url:"guide/page/index.html",revision:"9956b874ae509fa990fc949f2d383c98"},{url:"home/index.html",revision:"b755861769a6da31201b554087c2f9cd"},{url:"index.html",revision:"c0b63d71d3b2bf204cc5de0b7e36c235"},{url:"intro/index.html",revision:"4db084335c53b4abe29bd22d9121eb3b"},{url:"slide/index.html",revision:"2cb682023346f2d2ddecc6465c92db66"},{url:"slides/index.html",revision:"2e95c1f0a0741f1758bf0d36cb5c8000"},{url:"tag/encryption/index.html",revision:"da9e611b87fc90754b8871b07a4fb2f0"},{url:"tag/Guide/index.html",revision:"7f1c94b8e957f458addf58dc876c0e8d"},{url:"tag/index.html",revision:"0e0001324d72c61edc537742e7161d3b"},{url:"tag/markdown/index.html",revision:"1b1f0c89fa21401595f1b0a2e6fe2679"},{url:"tag/Page config/index.html",revision:"1b8b857736b454e71220a7e10d560216"},{url:"tag/使用指南/index.html",revision:"49652fb7beedf905554469f2c8a4d7f4"},{url:"tag/文章加密/index.html",revision:"5452b6d8a919226639fe7de09d44309b"},{url:"tag/页面配置/index.html",revision:"bebf174b5c2ba2232a062a623989a04f"},{url:"timeline/index.html",revision:"d71d1236c0483486898dea22104227df"},{url:"zh/guide/disable/index.html",revision:"446902e8ee140af062bca5d1e43d2cb8"},{url:"zh/guide/encrypt/index.html",revision:"fe1b0bdef1c9e8bd8f2cc2a4ddac3838"},{url:"zh/guide/index.html",revision:"b48d1a62f51cdccd061375d27128f704"},{url:"zh/guide/markdown/index.html",revision:"56aa597e88f3732fdc5992d72de80953"},{url:"zh/guide/page/index.html",revision:"b127a1076892edef0191bbe5dd55133a"},{url:"zh/home/index.html",revision:"b21930b80f9d95c10802bcc2668902df"},{url:"zh/index.html",revision:"6fa9bd2ff72bd7010e59ce02bbea2b0b"},{url:"zh/slides/index.html",revision:"6c126b1638210de00bfc1c0245e8cdd1"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
