if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.6a6541a7.css",revision:"03e71d7f20bdf23242c532d6dac046a7"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.93b70ff0.js",revision:"3758271202920a7c10302ec9078ba7b2"},{url:"assets/js/31.05871f9d.js",revision:"4e9a9466dfac8be1a5653047abe7f9fc"},{url:"assets/js/32.b4fcf85b.js",revision:"1ba92bbb04bb47b93d12cee778693edf"},{url:"assets/js/33.b6fced43.js",revision:"07f3cf3f5b76ed6cb2a8a61e53abeadd"},{url:"assets/js/app.ae412fa2.js",revision:"c87629e2bd46fb5d7d51cbb2bdb29888"},{url:"assets/js/layout-Blog.08d8d15a.js",revision:"4aa510c24f817d5448575a2586738a29"},{url:"assets/js/layout-Blog~layout-Layout.42311a3c.js",revision:"27147e6fba559cafc81b47ecb6d6ad19"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.46475f12.js",revision:"1e0ea60e562db76bf979d5d6a798b548"},{url:"assets/js/layout-Layout.597f7cf9.js",revision:"cadf640408beba3ef2b89f568387960f"},{url:"assets/js/layout-NotFound.e21e3ea4.js",revision:"4989f510f8f418f38e6ab0b73d502586"},{url:"assets/js/layout-Slide.a28bf7e4.js",revision:"636b557578fc3ed1cd29c21343860fc2"},{url:"assets/js/page-Componentdisabled--742e8b14.f9fb9cbb.js",revision:"c60eb9ed091b6065261db417c86ba065"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.a9525119.js",revision:"f1f26b03979d1cae4a04505906a626f5"},{url:"assets/js/page-Guides--22306cea.2f650970.js",revision:"6fc2736206f24e88ab2c74060a75a527"},{url:"assets/js/page-IntroPage--f358bcd4.bd6c4353.js",revision:"04c25c0670198ef6b6c0f5b6509896ef"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.98f1a093.js",revision:"0da5dc1387808fd4ac1b58eb0c067856"},{url:"assets/js/page-Markdown增强--eec60994.baeee143.js",revision:"8dc84c540be1573ac1390a56b04c40a0"},{url:"assets/js/page-MrHope--145768b6.06dccaaf.js",revision:"b4a40d968d859c726cd447d500ff266f"},{url:"assets/js/page-MrHope--79004bd6.ba12589d.js",revision:"ebf78314c90cacc2aa010ea780b91174"},{url:"assets/js/page-pageconfig--55e15bfe.2b5f0d2f.js",revision:"70073f86b1d35741e688697dee199cde"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.a368a481.js",revision:"e26af965af7256a559d19d041689cde5"},{url:"assets/js/page-Slidepage--7a2d82be.f7aaf465.js",revision:"ba2099a84f8bbbe153fdb792f701cb34"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.1585454d.js",revision:"a186f71ebeba138130e500385a28aeca"},{url:"assets/js/page-密码加密的文章--64e181e0.8205f4eb.js",revision:"a8e6c5d8494014b1dd1f88fc3913fc85"},{url:"assets/js/page-幻灯片页--f6429394.68fa6cb4.js",revision:"28cc585f508db41a75fa0717f741c873"},{url:"assets/js/page-组件禁用--5650041a.508d519f.js",revision:"53cf49882198474042bf4f12d23f94da"},{url:"assets/js/page-页面配置--2847a8b6.1af00b05.js",revision:"c6b86152a217b52412d2da66ce4a0424"},{url:"assets/js/page-项目主页展示--fb8d99d4.c56ee963.js",revision:"1d7cc25047097abc3ca61ee67d41df61"},{url:"assets/js/vendors~flowchart.ad481226.js",revision:"2da36b2c99775c88b26191313f9db70f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d55f0684.js",revision:"16c09b740c8b91e45c97adb7ec443a81"},{url:"assets/js/vendors~photo-swipe.e50f3a49.js",revision:"afc7a2c8c492625e36f5b8cf0a5db0ad"},{url:"assets/js/vendors~reveal.fe2068e7.js",revision:"0ecd39d223b97b4860b630f18fac821d"},{url:"assets/js/vendors~valine.a612be35.js",revision:"2da074784b2d841a408002941680ff89"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"2b7b6ee4814de047710d90e848798dc9"},{url:"article/index.html",revision:"1bc7f5e2376dd8c584e39895d44b9d05"},{url:"category/Guide/index.html",revision:"353b17b99ee983db9cad3563b0fadf9e"},{url:"category/index.html",revision:"bca056e7645634ade0f8e1308bc93566"},{url:"category/使用指南/index.html",revision:"bfaa90777e963772885efbec0365e35a"},{url:"encrypt/index.html",revision:"6f2529e24e29b0b5470c61b3c198d254"},{url:"guide/disable/index.html",revision:"7e9191b83a29d03e9800538f55cd40f9"},{url:"guide/encrypt/index.html",revision:"de08df8c2831e7d396d16f5369167ae9"},{url:"guide/index.html",revision:"443af815eab3d57cd5b7fe6a32b05530"},{url:"guide/markdown/index.html",revision:"4966d5763a5a06f226b412f76cf1d5d3"},{url:"guide/page/index.html",revision:"ca96b30caccc9c85ede57c94f1f785ab"},{url:"home/index.html",revision:"14faf10925e4577ef6c59e46a1e92ef1"},{url:"index.html",revision:"a41ee1840b50064f9aa22bf49ce52211"},{url:"intro/index.html",revision:"e4e4859afdd0923df555f184234fcb45"},{url:"slide/index.html",revision:"1324ec55fff52c8d516d0517b3197149"},{url:"slides/index.html",revision:"01885af87c2cd1b4766e97eea221168b"},{url:"tag/encryption/index.html",revision:"f03583b97989d5ead67c06f388c5b047"},{url:"tag/Guide/index.html",revision:"60556725dc123b014a194eb7309de551"},{url:"tag/index.html",revision:"ad636d148285a9c7dff2b89e56961611"},{url:"tag/markdown/index.html",revision:"7915d611f24b1a186795b4b3d94f8f8c"},{url:"tag/Page config/index.html",revision:"dc71dfd31adf419c40b6ff56fc465371"},{url:"tag/使用指南/index.html",revision:"c3730af222a8b1a7f904d416cfbf8ed6"},{url:"tag/文章加密/index.html",revision:"8aebfc34f295b4ebc0e56c2d79c8f24d"},{url:"tag/页面配置/index.html",revision:"b58d45177dd6189ae36ca7ed488d6ebf"},{url:"timeline/index.html",revision:"cc84189821e36e760db4ff59b530ef24"},{url:"zh/guide/disable/index.html",revision:"0cd250c3e22494ba2905c169b4f82305"},{url:"zh/guide/encrypt/index.html",revision:"7ba2c95fc10219cac64ff7c74b448e76"},{url:"zh/guide/index.html",revision:"5418f1fefac2def6cc2c2544c4e36681"},{url:"zh/guide/markdown/index.html",revision:"b23636245c07b56e5eb3d6417a734f9d"},{url:"zh/guide/page/index.html",revision:"05f2ac8fc626bb493817f325ecf38bdb"},{url:"zh/home/index.html",revision:"73aeacba741912d7aff763186e613d62"},{url:"zh/index.html",revision:"7d85ce2c6d5f1906bdd89c447532f679"},{url:"zh/slides/index.html",revision:"575412c8b5bcd4feabf5c8317fbf74b4"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
