if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"e4e490578485039ba4ba7f34e2e9061e"},{url:"404.html",revision:"42bb51f6119bebc4bd5376dd91c08250"},{url:"assets/css/0.styles.c91fed6a.css",revision:"c8188bdc86f03970e4137e93ffed9666"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/48.de151169.js",revision:"ec06ae4e9554882308f910e6b0896534"},{url:"assets/js/49.82059621.js",revision:"0d23a78c6117f0c62cc6800ded931f3b"},{url:"assets/js/50.122f3aef.js",revision:"feb0cf09b9e4823f29713387ccb20349"},{url:"assets/js/51.58d5450e.js",revision:"ba2560e3ec8a776cf201d628086f1791"},{url:"assets/js/app.e71acfae.js",revision:"9f6ebaecf73079d8c06c560c1dd36065"},{url:"assets/js/layout-Blog.07159fab.js",revision:"4732e7e683ec3078de85e2be7e19af0e"},{url:"assets/js/layout-Blog~layout-Layout.18835e9e.js",revision:"d40d78ae4ce848dd3323da8f0eb088b1"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.f925ce0d.js",revision:"46b9cf91b6d86860139c0b24dcfae16e"},{url:"assets/js/layout-Layout.b693995a.js",revision:"3ff4de7c36402d74292c68b3be5ba754"},{url:"assets/js/layout-NotFound.b7e4b268.js",revision:"d57bcd6ae3c85da8d96ae0579177a21c"},{url:"assets/js/page-Markdown增强--4d787654.d21570c0.js",revision:"052e2095d640fb20a95f7d2443ea505d"},{url:"assets/js/page-Markdown增强--87b26038.af56e788.js",revision:"afb925d2fd2b50ac0239a547c507acf5"},{url:"assets/js/page-vuepress-theme-hope--145768b6.224144e8.js",revision:"e312a6d696179f0300b1ab849a9e81d4"},{url:"assets/js/page-vuepress-theme-hope--5dacd635.f503fb10.js",revision:"417b70decf850ff07bc5ac56c14c4279"},{url:"assets/js/page-个人介绍--f358bcd4.7f9f68a4.js",revision:"4c8e2166afae1ab8756f1919479411cd"},{url:"assets/js/page-侧边栏auto--3a90cf96.835981d3.js",revision:"ab5673b8f9406d94c242b9b612661be7"},{url:"assets/js/page-内部链接页脚--31f3a4f6.74df9fae.js",revision:"1d9d77e600bdb69247466f0c8cb277ce"},{url:"assets/js/page-外部链接页脚--0f1c0bec.e05153f6.js",revision:"83b68b6aa1910365c2aefe14eb766842"},{url:"assets/js/page-密码测试--1d89700e.5b60369f.js",revision:"450cc244407bd4cfaf9db0a167ff0094"},{url:"assets/js/page-文字页脚--5ea4d836.49a3bcfc.js",revision:"e18171bb9252c78ea0e4de713a5b6c32"},{url:"assets/js/page-文字页脚--854e1b54.1e292020.js",revision:"60201d71daa7daf48df6d37381f72b23"},{url:"assets/js/page-无页脚--727687b5.3a32fe47.js",revision:"b632151f31524d4e2884fe54c5e5d9e4"},{url:"assets/js/page-无页脚--c5727fd6.8073ad1f.js",revision:"b59a17b7cc7d8942836f85e3dee01ae1"},{url:"assets/js/page-笔记列表--13847be8.7181ac9d.js",revision:"b1051f4b7b7f2d923319d7be4d003660"},{url:"assets/js/page-笔记列表--253f1d56.af7c76f8.js",revision:"d0a22b163b61505f9560d7ea531e0a09"},{url:"assets/js/page-笔记列表--36afc214.982b15e6.js",revision:"2d28991ece4261973dca0f49ec6e8951"},{url:"assets/js/page-笔记列表--3706d596.04edad50.js",revision:"42de2e8ea14b6e11170a8ae7da26a3fe"},{url:"assets/js/page-笔记列表--4395057e.c0ac5788.js",revision:"7947e4dd622025244322a5ffe0ede237"},{url:"assets/js/page-笔记列表--48777a54.379708e3.js",revision:"71d65a84999c7f6d7c8d3a4df2c8b061"},{url:"assets/js/page-笔记列表--4c6992b4.16243554.js",revision:"b0e4bd8b7c6b9747b666ab9c9fc2e590"},{url:"assets/js/page-笔记列表--5a3f3294.3a7c521a.js",revision:"f31a0a5d998fbcee65c34272a97e4bf7"},{url:"assets/js/page-笔记列表--779dd3f6.0e83d091.js",revision:"30f36f3ca558fabbfac1315f36b78734"},{url:"assets/js/page-笔记列表--bfdc1d38.ad1a1d2f.js",revision:"df77754343893b768b984c3ee769beb6"},{url:"assets/js/page-笔记列表--ed34e794.7c185a84.js",revision:"927bb72ac0f2ff13b63b44479c53557b"},{url:"assets/js/page-笔记列表--fefc9fd4.2026e278.js",revision:"b72521c2b3f35695f02d606f42d9e7a7"},{url:"assets/js/page-组件测试--33a9d46e.3e752aaa.js",revision:"f75c150ff759fcf24ad29c6bb872c572"},{url:"assets/js/page-组件禁用--412a7956.6dec2c6a.js",revision:"1775e2412602929a94e342e5ca5128f3"},{url:"assets/js/page-置顶文章--bbc4e3a0.793d90c9.js",revision:"959391bb99f011194362d35f473e2baa"},{url:"assets/js/page-自定义页脚--638ce0d4.dbcaa620.js",revision:"a3c5bbd33d9564e38b5e00a0684de960"},{url:"assets/js/page-自定义页脚--76fb1e1e.c1ec7603.js",revision:"68924a15d45e25117011acb4eb387f8c"},{url:"assets/js/page-页面信息--41bbd7b8.8e1aa7ff.js",revision:"881a058a952aaaf96951c35e099ce159"},{url:"assets/js/page-页面布局--0f63db56.80e683e3.js",revision:"6f697c1e90d746da1464fe8813c1bb21"},{url:"assets/js/page-页面布局--c006385a.d9415cf2.js",revision:"5213227cbd67b44b7244fff6d391bde3"},{url:"assets/js/page-页面配置--36b78854.fa02e348.js",revision:"711a8869485b186c1bebf2a5f719bb04"},{url:"assets/js/page-默认页脚--9df0770c.e7d2b3a1.js",revision:"d57133083fb3d59aa1b03f4ceefb83b2"},{url:"assets/js/page-默认页脚--d5d7bcf8.f80f473d.js",revision:"12fec07ca33a1fd531757753da1622a5"},{url:"assets/js/vendors~flowchart.4fd54fec.js",revision:"81fb8787737df17cf25a456b186002d1"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.bc5a3190.js",revision:"19a9a8483b684dca4b2b585da70c8ea0"},{url:"assets/js/vendors~photo-swipe.7f59911d.js",revision:"372c0d8a96af4fc8c594752419373f6f"},{url:"assets/js/vendors~reveal.d0ec694a.js",revision:"014e50d893823b69c08f8f1b6e330a7b"},{url:"assets/js/vendors~valine.b104df21.js",revision:"9e0fc804d1b21868becb1a8cc231285e"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"b7e5624b79274476de7918063a1fe438"},{url:"assets/icon/chrome-512.png",revision:"f18ca8f2135aa886be9a972bb29951fc"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
