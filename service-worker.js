if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7b2cd3a9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.8a586b41.css",revision:"7c7e02e850f39c8aacba9866f7ef240b"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.93b70ff0.js",revision:"3758271202920a7c10302ec9078ba7b2"},{url:"assets/js/31.05871f9d.js",revision:"4e9a9466dfac8be1a5653047abe7f9fc"},{url:"assets/js/32.b4fcf85b.js",revision:"1ba92bbb04bb47b93d12cee778693edf"},{url:"assets/js/33.b5dc0537.js",revision:"3a2461e5a3acbcce3269f162c4ff343c"},{url:"assets/js/34.8bc889fd.js",revision:"b24043b8d8e9e09ff9b3940891240ee2"},{url:"assets/js/app.0bcf5018.js",revision:"a69897b3c584e718d813127f51d6c570"},{url:"assets/js/layout-Blog.a22af289.js",revision:"d121b701bab952c5cd8d5bd7645514b4"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.131e88e3.js",revision:"863801aacd9f47e6025e606e5331d90d"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.e20b80ac.js",revision:"5aa25ca7f8a8c0a4f29cc57c302b769e"},{url:"assets/js/layout-Layout.c849a6c9.js",revision:"24e96a64f44d848044d33e3d1cc89722"},{url:"assets/js/layout-NotFound.026f8aea.js",revision:"709ab364523c859a0369d36661e9e4d2"},{url:"assets/js/layout-Slide.4e083ab5.js",revision:"0dfa0cc70079e894c63726802777d161"},{url:"assets/js/page-Componentdisabled--742e8b14.25772965.js",revision:"7cc60947df5c596fe3f637a410ca752a"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.876f54a5.js",revision:"a23a124183f7c788355a5f2f13df3557"},{url:"assets/js/page-Guides--22306cea.f0dc972b.js",revision:"d6b5ab77fee5a68195abb069928323b7"},{url:"assets/js/page-IntroPage--f358bcd4.383b2636.js",revision:"450c5003a198a46b74c9277498b8f763"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.5ff8bd9f.js",revision:"07779f824a27d19003e3524cc692cc2f"},{url:"assets/js/page-Markdown增强--eec60994.fbeff14a.js",revision:"7be7d96d2111024f74d911542a80f2f1"},{url:"assets/js/page-MrHope--145768b6.1b420bf3.js",revision:"15b884fcdd4a0e513b8507f5633d039c"},{url:"assets/js/page-MrHope--79004bd6.efa447ab.js",revision:"30354cbc76df7c8b44b9124d0a0bb1f6"},{url:"assets/js/page-pageconfig--55e15bfe.c25b1c0c.js",revision:"b5e3cf164b052c847ce5e41068332db9"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.e601c96b.js",revision:"d78fbf4b1d045ad86bf4229ef7d3a733"},{url:"assets/js/page-Slidepage--7a2d82be.f0055e27.js",revision:"44d73b6261368474b042673e1fa358e8"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.ccc47bd5.js",revision:"91541012bafda5129201afda7577b02e"},{url:"assets/js/page-密码加密的文章--64e181e0.da691c19.js",revision:"bf70a54652a96767b6347b7c7aa1106e"},{url:"assets/js/page-幻灯片页--f6429394.e3fc954c.js",revision:"69ee03bd41759a01591c5c574ed20080"},{url:"assets/js/page-组件禁用--5650041a.46897a42.js",revision:"6cbaacd0cceced48647f7a86c09fd8ff"},{url:"assets/js/page-页面配置--2847a8b6.0dbc6db0.js",revision:"2db2f8736168c13bdee7e07fcea063f3"},{url:"assets/js/page-项目主页展示--fb8d99d4.1e779203.js",revision:"5537dbbb3c463e1147d78b2f48e7d86e"},{url:"assets/js/vendors~flowchart.bea1943d.js",revision:"39c711595752590fc0c2499bb4ca6487"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.90a5e101.js",revision:"cc4f41158af6682eb2479c3fd02edd07"},{url:"assets/js/vendors~photo-swipe.7451d116.js",revision:"1da72d678360840a1026ca5a1f673125"},{url:"assets/js/vendors~reveal.834060aa.js",revision:"17d0fe949668f27f4fa9daedf186355b"},{url:"assets/js/vendors~valine.5c32b451.js",revision:"8fdf9701588e083a6f18b5ad998831ad"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"fb94ca2947029befe4e8370d16b5b4a3"},{url:"article/index.html",revision:"4891dcbfcf199f9065ff428d5a53e214"},{url:"category/Guide/index.html",revision:"38de178e9ef5e1edc6ef35af498d0f0f"},{url:"category/index.html",revision:"8c23b36edb9c5467c1ec02884de94bad"},{url:"category/使用指南/index.html",revision:"37093a2e5b4533197fc0a7aebb4c7b31"},{url:"encrypt/index.html",revision:"f4a22438a251b92916e8008af1392f62"},{url:"guide/disable/index.html",revision:"7258506f7cea7c6dfcbc50292c823d67"},{url:"guide/encrypt/index.html",revision:"9f386a8db29e8f596906789997e3227d"},{url:"guide/index.html",revision:"5efdc62f1d0ecfde47e352cae57273ad"},{url:"guide/markdown/index.html",revision:"e9ac75b416d88cfb171b5c8f9ecc19e4"},{url:"guide/page/index.html",revision:"43eb872c60504edcd30c6343eed4031d"},{url:"home/index.html",revision:"33db6d7d966021bae3595ac521460a0a"},{url:"index.html",revision:"2324afea3dc16ce06ac1d0cf86807a42"},{url:"intro/index.html",revision:"627a842cff33d6474c6e18f228b97744"},{url:"slide/index.html",revision:"59830d65e9775a3be2627fbd5dd32109"},{url:"slides/index.html",revision:"047e4cec0ac8b53d903cd9b13cce0f7e"},{url:"tag/encryption/index.html",revision:"c9c6f5902473b537a1414c54e56e728f"},{url:"tag/Guide/index.html",revision:"630f193dc46e4f831a15e9e60d81606a"},{url:"tag/index.html",revision:"757f9bfe7fccc40d113caecea3535410"},{url:"tag/markdown/index.html",revision:"8f618ad4ffe13267c92bbfaaa6ff2c25"},{url:"tag/Page config/index.html",revision:"2ee76c75c8e122445886c96b1ed3445a"},{url:"tag/使用指南/index.html",revision:"87a0611552ff765b5b085430c5e86518"},{url:"tag/文章加密/index.html",revision:"f48a149ad60bba47357b9fdbe67e3564"},{url:"tag/页面配置/index.html",revision:"8b0021fa4bcf4b44974cc1f097447324"},{url:"timeline/index.html",revision:"7d3e24168f2835353eb837f44f5135f0"},{url:"zh/guide/disable/index.html",revision:"cb964f898ef9dabd80dc1e18101177f7"},{url:"zh/guide/encrypt/index.html",revision:"3865c683bd78cc75dc594d51db179a13"},{url:"zh/guide/index.html",revision:"ca56041748d01821fca46b4054cc93bd"},{url:"zh/guide/markdown/index.html",revision:"0eb7600db22e158038806371f0b693bb"},{url:"zh/guide/page/index.html",revision:"36da8dfb38a7d7cc306317c35efb5f87"},{url:"zh/home/index.html",revision:"b7bf3b391527b0d3b00b6516469a7221"},{url:"zh/index.html",revision:"aed1b62e2f32754875c00ccfcdb8c398"},{url:"zh/slides/index.html",revision:"51d0001bc07a1ee1e9773a00211ad27c"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
