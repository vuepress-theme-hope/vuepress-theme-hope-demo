if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-2d2248bf"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.3421c593.css",revision:"aef528acb4d40d61c84a14ab48adec8d"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/30.c34f17f5.js",revision:"4cac492ba281c4d42a951bbb82f9f77c"},{url:"assets/js/31.ce93b67a.js",revision:"dfc8a40e8a516f6e4118ad26c21f0f72"},{url:"assets/js/32.099f0bc4.js",revision:"7a1abe3f176557f67269a5b51a963245"},{url:"assets/js/33.e8dab78d.js",revision:"229e3ca822de2a0d794900569a6ec2b3"},{url:"assets/js/34.b0eff179.js",revision:"047032adaa69df945536aadb7ad46e68"},{url:"assets/js/app.ede25c94.js",revision:"524a6e6333402e3a6e0296bb2efeff61"},{url:"assets/js/layout-Blog.69011d41.js",revision:"f150cf16563d97d0c80b628ae856a410"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.665d1c6f.js",revision:"20a0690ec39118154cf24ddccca18306"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.492dd244.js",revision:"ff1e8cde30a0b13b87cf6c70bf61a70e"},{url:"assets/js/layout-Layout.e80a9595.js",revision:"f406ac45988691a7e716df9c665cf09a"},{url:"assets/js/layout-NotFound.f20be848.js",revision:"81167967ef96870570b3eafc8b74c60d"},{url:"assets/js/layout-Slide.2bca0022.js",revision:"c29bcbaa9828330941b5366dba558193"},{url:"assets/js/page-BlogHome.652d1d9d.js",revision:"4afd745b8804aaa876ef5b3cbd77034a"},{url:"assets/js/page-Componentdisabled.e3376a07.js",revision:"6799a4b6ead93810032e1057f6e3036d"},{url:"assets/js/page-Encryptionarticle.56ca01af.js",revision:"f6b39c54eaf209d2d5c36b1f6b68fc9b"},{url:"assets/js/page-Guides.b3d6be19.js",revision:"9875d8c045f32144270ea02c1d4e7ed6"},{url:"assets/js/page-IntroPage.55ebf1bf.js",revision:"bda3a536fdebf04df6ad3f26a190dc01"},{url:"assets/js/page-MarkdownEnhance.6d960c57.js",revision:"838c4aa6bcf912c7361ffd448d32dbd9"},{url:"assets/js/page-Markdown增强.2c247c35.js",revision:"87ea8db45b3e340d39d0708753e59798"},{url:"assets/js/page-pageconfig.5c71e92c.js",revision:"001c7dc8f8f3ad8a76532f12be974a89"},{url:"assets/js/page-Projecthome.4959eaba.js",revision:"f5185b9ae908714dc0fda115f36b3157"},{url:"assets/js/page-Slidepage.361b2634.js",revision:"7fa1fb870a0935996e574344eb8698fa"},{url:"assets/js/page-主要功能与配置演示.f1adecbd.js",revision:"ae0ded73c41d3398c923abfd91dff868"},{url:"assets/js/page-博客主页.2fe5e2bf.js",revision:"00a23e08e4a0463c83b8a1413e1df733"},{url:"assets/js/page-密码加密的文章.50808f0d.js",revision:"2f951a7c039e71fd126a7e13ccee30d0"},{url:"assets/js/page-幻灯片页.a6430e03.js",revision:"b906c07316523744aae730305b05f119"},{url:"assets/js/page-组件禁用.dbf471d2.js",revision:"855077ccf242c233695658427ceee966"},{url:"assets/js/page-页面配置.6d9d818d.js",revision:"0ffb3acae4be21b43855ba42eaa7700a"},{url:"assets/js/page-项目主页.19494332.js",revision:"160e03a92e42a064854fa035753b8bd0"},{url:"assets/js/vendors~flowchart.ca41b43d.js",revision:"94ce9c9cc95d1766311c92b151fe2263"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.07fc34c4.js",revision:"c348115fa557e6a792c590b6106838f4"},{url:"assets/js/vendors~photo-swipe.cd654892.js",revision:"09ff864c712a58f1e8f00d2d7d01c670"},{url:"assets/js/vendors~reveal.4913f373.js",revision:"b7993ed7b005a686909d7b629115e5de"},{url:"assets/js/vendors~valine.5e8071b0.js",revision:"de48b70448d838165c21fcaae42d07f7"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"5eb0f8831404552df9fa399a33f87566"},{url:"article/index.html",revision:"7368f1471aaf909b09ed343ae75b2605"},{url:"category/Guide/index.html",revision:"05f227d4e73b28e6886e3f28e8088bfc"},{url:"category/index.html",revision:"b5f8e0a4993b11f05f87403f5489f1e6"},{url:"category/使用指南/index.html",revision:"d075d242dc1078a74551e6a50fff7cda"},{url:"encrypt/index.html",revision:"02cea4e8f38f556b56929fbec4d67293"},{url:"guide/disable/index.html",revision:"1856a99cd7bc1346b9ecebe596d1ab3c"},{url:"guide/encrypt/index.html",revision:"e4d602966a7c8502a640c69e0bfdbb7d"},{url:"guide/index.html",revision:"46cba8770c167e09bd04bd699be6bf3e"},{url:"guide/markdown/index.html",revision:"73b5d8ec82e944c18f106e6f7d6bf4c9"},{url:"guide/page/index.html",revision:"f9a3ea12a6b0eec9424c9b2166ca9a55"},{url:"home/index.html",revision:"47b24f8a8e6c8dfd2c777ae16ced4dff"},{url:"index.html",revision:"c1a4cc27a67f483b298b1628bea5f552"},{url:"intro/index.html",revision:"957f38721a77c2053aeb2ebe017d591a"},{url:"slide/index.html",revision:"c81866031a92a99105cd51c70887c593"},{url:"slides/index.html",revision:"35d577580973d87f2951698ba2c4bfc2"},{url:"star/index.html",revision:"3e87c196e9ff18ec5fb6f78fa62e55b1"},{url:"tag/encryption/index.html",revision:"2b28ac51dba4b256218f81178a38a55a"},{url:"tag/Guide/index.html",revision:"34e8fbd48b3af012af0ef0f8ac15036d"},{url:"tag/index.html",revision:"1d15855aaf8c2cf5eb11cb9c12ed52b1"},{url:"tag/markdown/index.html",revision:"2c3fd90f8df5ad7c9ebd9f555d5157fb"},{url:"tag/Page config/index.html",revision:"1af08c64b44ae26cccc3e70a4c68ebc0"},{url:"tag/使用指南/index.html",revision:"e50f6206c8aa2f8ca66d852a8afb1c07"},{url:"tag/文章加密/index.html",revision:"4911a2458ae0a719d4f20bf353438d15"},{url:"tag/页面配置/index.html",revision:"3496fb0c11ec2ced99c7fe85056a9bee"},{url:"timeline/index.html",revision:"3f6df810ed500fdc9a2452b60a74285e"},{url:"zh/guide/disable/index.html",revision:"23a103889a8593b5458490e5413ffd13"},{url:"zh/guide/encrypt/index.html",revision:"a12521984c4a138bc766bb9a55a93589"},{url:"zh/guide/index.html",revision:"66c4b0b1beae32cc560196003c9e1e88"},{url:"zh/guide/markdown/index.html",revision:"e7c1d6405798d45d33be5248bd9487f6"},{url:"zh/guide/page/index.html",revision:"7ec868af20abf813a578140c34161eef"},{url:"zh/home/index.html",revision:"fd3a61b9cc058d705c0361f9fa71bb9e"},{url:"zh/index.html",revision:"9e986108fd091967ef6465d94ffcd346"},{url:"zh/slides/index.html",revision:"1a8ec62a6b33e0e1649d7dec9bbf8c66"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
