if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-6020d9a6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.362ab53e.css",revision:"12090307c1759397fc5d55e20f28cce2"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.93b70ff0.js",revision:"3758271202920a7c10302ec9078ba7b2"},{url:"assets/js/31.05871f9d.js",revision:"4e9a9466dfac8be1a5653047abe7f9fc"},{url:"assets/js/32.b4fcf85b.js",revision:"1ba92bbb04bb47b93d12cee778693edf"},{url:"assets/js/33.b5dc0537.js",revision:"3a2461e5a3acbcce3269f162c4ff343c"},{url:"assets/js/34.8bc889fd.js",revision:"b24043b8d8e9e09ff9b3940891240ee2"},{url:"assets/js/app.ec5cc6ac.js",revision:"1688b7ff5a02dfbc37be08ce068e308d"},{url:"assets/js/layout-Blog.b0294f30.js",revision:"ed3c89f24759aba414792771691c69e5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.1c8deb69.js",revision:"fa0daaf04e7bb296706adf8416191a72"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.481b4251.js",revision:"52d85c9d2b41cf55dbe1b4ef3e2c03c4"},{url:"assets/js/layout-Layout.e1323fc7.js",revision:"d5ca2395b55f41a7ba4a022ddc852f9f"},{url:"assets/js/layout-NotFound.acc5d0e9.js",revision:"f52974c626982cc57017c063e3cd644a"},{url:"assets/js/layout-Slide.5437c1b6.js",revision:"0dfa0cc70079e894c63726802777d161"},{url:"assets/js/page-BlogHome.bc6620ec.js",revision:"0959a93c0cfb8d754852aff8b408cfef"},{url:"assets/js/page-Componentdisabled.fbca4f5d.js",revision:"c624cb704603c5befa857295a18d4172"},{url:"assets/js/page-Encryptionarticle.7e72d059.js",revision:"8cb1eb073524394eb86b95f0dfe572e5"},{url:"assets/js/page-Guides.bee81f4c.js",revision:"c33be6180f59b3b4ba5277f2e0e3917c"},{url:"assets/js/page-IntroPage.7519860c.js",revision:"784bc4622f9aa83ca165964949955084"},{url:"assets/js/page-MarkdownEnhance.08607bce.js",revision:"1609ca3473d6d5214f8af5f94072579a"},{url:"assets/js/page-Markdown增强.ca4a474e.js",revision:"1c451b15e86ced5863199129837e26b8"},{url:"assets/js/page-pageconfig.c0733359.js",revision:"aab23053df4da706c1b8d896a5a6d909"},{url:"assets/js/page-Projecthome.9c10d55c.js",revision:"2d3cca3d3492a65ed4d974c34883bc5d"},{url:"assets/js/page-Slidepage.00b68c37.js",revision:"a138a5efeb4edb2bc087571912b54c97"},{url:"assets/js/page-主要功能与配置演示.ff2009a2.js",revision:"7bc906642d4eb33207749870932a531f"},{url:"assets/js/page-博客主页.d5437fd2.js",revision:"18bb26a1c5cc5cf6ba978c35fa5bd608"},{url:"assets/js/page-密码加密的文章.55afef20.js",revision:"bf70a54652a96767b6347b7c7aa1106e"},{url:"assets/js/page-幻灯片页.4e767972.js",revision:"1241236de02e6bfd377d63a196d24972"},{url:"assets/js/page-组件禁用.e1a97c99.js",revision:"b46853d4e92ad5ba166ed8259a5f6ab7"},{url:"assets/js/page-页面配置.4b831072.js",revision:"1fc532ed011bae141d3296255e726eaa"},{url:"assets/js/page-项目主页.288ed898.js",revision:"b1b35127915591e4d68defe97f77fbc3"},{url:"assets/js/vendors~flowchart.fce37362.js",revision:"be93285a14a0fc8ed2f36349d829a695"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7929f9b0.js",revision:"b15b5333e5d30ffa1c6ea0d455efaae6"},{url:"assets/js/vendors~photo-swipe.7451d116.js",revision:"1da72d678360840a1026ca5a1f673125"},{url:"assets/js/vendors~reveal.834060aa.js",revision:"17d0fe949668f27f4fa9daedf186355b"},{url:"assets/js/vendors~valine.5c32b451.js",revision:"8fdf9701588e083a6f18b5ad998831ad"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"cd0d95915b13f622d2d728d08ad73142"},{url:"article/index.html",revision:"cd88c59f7f5b237e65d99a32ceec00ec"},{url:"category/Guide/index.html",revision:"265d3877d6e8969b45ee5bd824f76a38"},{url:"category/index.html",revision:"6d8a9853f3ff0bda0f2ba67b6af3f013"},{url:"category/使用指南/index.html",revision:"6444fe75bbc5cf72a7ab1bbd5ed0eb80"},{url:"encrypt/index.html",revision:"75c7209c6bb52e3dcdacccaed9b43ff0"},{url:"guide/disable/index.html",revision:"1bd9a59afa703d685f837fcf0be69c10"},{url:"guide/encrypt/index.html",revision:"b56e380a9a5dec7ade3bd1f4449340a2"},{url:"guide/index.html",revision:"68d0242b9c969aa987ca42549261d246"},{url:"guide/markdown/index.html",revision:"2645a093fc5b20de7118e942d880880b"},{url:"guide/page/index.html",revision:"35643ee76e39f6f08484a3a040e7aed4"},{url:"home/index.html",revision:"33300b8ae212b1e909e8150b6cfc0361"},{url:"index.html",revision:"ced09f5a617bce0350d69d3e8608bfab"},{url:"intro/index.html",revision:"3f19b5810df91f971f393cf306e4c6db"},{url:"slide/index.html",revision:"74079d772036d70420f1e4c8d9ba2d28"},{url:"slides/index.html",revision:"544983961837f2698df4b8345d7ff991"},{url:"tag/encryption/index.html",revision:"0110a0729663110a4e16c7e9f5f0367a"},{url:"tag/Guide/index.html",revision:"a484a6566fac5e6bf91a0c0d5410fec1"},{url:"tag/index.html",revision:"d9a5646f06697b9efadf3cf128755d3e"},{url:"tag/markdown/index.html",revision:"de3d785ac994739c95a807fea87e4c0c"},{url:"tag/Page config/index.html",revision:"d06823dd3b2bcabddf888f46879777ec"},{url:"tag/使用指南/index.html",revision:"cdeb290e1f04ff28d74093fd3d401049"},{url:"tag/文章加密/index.html",revision:"d1447971ab35fa3f1a98e8a045ad706a"},{url:"tag/页面配置/index.html",revision:"a04b18cd6fbaf4313d67928209494e9a"},{url:"timeline/index.html",revision:"2bb9350481d1b6f014c37969abab8a10"},{url:"zh/guide/disable/index.html",revision:"387166893e002cd915b84e1a3702114c"},{url:"zh/guide/encrypt/index.html",revision:"4df771319b6beb0a822b4994a7707340"},{url:"zh/guide/index.html",revision:"e02757a8952c3853ed62f6e245a99a2d"},{url:"zh/guide/markdown/index.html",revision:"a726b4f5941c1f48a88507e73db6e50a"},{url:"zh/guide/page/index.html",revision:"544ad5e4bb0049e1406bf937ad13dc0f"},{url:"zh/home/index.html",revision:"063cdefe3a034d78c243fea4239ed60a"},{url:"zh/index.html",revision:"6ff94e11b21ac1655c295faf37c20a13"},{url:"zh/slides/index.html",revision:"071f2e47d282bbaf784702d295a4140e"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
