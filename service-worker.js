if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7ca43e00"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.a147d790.css",revision:"de3c34591043e061b3acd2afbe077c7a"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/30.a4213f1d.js",revision:"9f8ff161b6b2f31a804a488f7cc9f162"},{url:"assets/js/31.47426dfc.js",revision:"ba76b5405c91b88d6e1585f6a9c9644e"},{url:"assets/js/32.5922ca09.js",revision:"36f264866ca573c7dd3179fb68e16fea"},{url:"assets/js/33.d204cbe6.js",revision:"6f75b458ff4e2ddda6b4bae730e07950"},{url:"assets/js/34.2de40b8f.js",revision:"aaf7debe5652779256a26b226af38b64"},{url:"assets/js/app.eb97b52d.js",revision:"4b1a0892a0f42f604185b440a1751e88"},{url:"assets/js/layout-Blog.f1d6be38.js",revision:"9e72f8ac680be60b3c96a5e2847bc5be"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.e40d1ecc.js",revision:"90283c9e4362bf4c393a905d6c349095"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2c25add7.js",revision:"c326eb0f2873fef96ff9c9626f43c02d"},{url:"assets/js/layout-Layout.3a61de10.js",revision:"3c9b64d5c0e7c4bc2b23bd5791addcd2"},{url:"assets/js/layout-NotFound.725d99d2.js",revision:"07948c4e4cc837105bb867f6bb5395ab"},{url:"assets/js/layout-Slide.8eb3cba6.js",revision:"2658b02bec58735b57ab02d5f53272f7"},{url:"assets/js/page-BlogHome.759b5d0e.js",revision:"5d42791dea92fcb14653108a90a41b92"},{url:"assets/js/page-Componentdisabled.0ea14506.js",revision:"9270e48c855a598a3c021555f93868d3"},{url:"assets/js/page-Encryptionarticle.3b8cf2e7.js",revision:"ef590640bdb0c125f3c96f653bcdac1b"},{url:"assets/js/page-Guides.3d28b45c.js",revision:"65d46706aef05a0bca5f7ccee6e759a8"},{url:"assets/js/page-IntroPage.c76e146e.js",revision:"a66a38b423c10bf96b535c8a3a7ba73c"},{url:"assets/js/page-MarkdownEnhance.dd4c9f65.js",revision:"9c7f425758d3f3ff97377471e21cfbf7"},{url:"assets/js/page-Markdown增强.45f2517a.js",revision:"19aee0ea6afd1f8b84360a304af79aff"},{url:"assets/js/page-pageconfig.3c88087f.js",revision:"235639965c8d76830bf32c461fc11d82"},{url:"assets/js/page-Projecthome.a660dcb9.js",revision:"aa9f300b40548fd85df36c040a82ea20"},{url:"assets/js/page-Slidepage.bf67cdbc.js",revision:"71d9525e716f2bdb82ce2db81c9f139b"},{url:"assets/js/page-主要功能与配置演示.16a36390.js",revision:"161a7a5a8d6224cc0155d446362df86b"},{url:"assets/js/page-博客主页.2ef5330e.js",revision:"3fc28320866de1e82df894cb7f95eea3"},{url:"assets/js/page-密码加密的文章.8b502fdd.js",revision:"60bebcc87650df1287866ac754d79945"},{url:"assets/js/page-幻灯片页.2b0baac5.js",revision:"40680d2fe6b21dde890dd030283b11bd"},{url:"assets/js/page-组件禁用.6e5b52a8.js",revision:"6590bfbb041453c7adbb979b24834614"},{url:"assets/js/page-页面配置.90e91f54.js",revision:"6fd1895cdbd4e41dc36c0da0c3ee2353"},{url:"assets/js/page-项目主页.b183302c.js",revision:"ba9040b1c6ad9d4d659ec8f63df5e432"},{url:"assets/js/vendors~flowchart.107fcfaf.js",revision:"c25384eb24fa86e93b849f97803c72e8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ee86847d.js",revision:"0ad0fea2ac4f273b5020cfc8eedb0477"},{url:"assets/js/vendors~photo-swipe.313578f8.js",revision:"14c8bfb91a8ea2c3f9cf158bea41fa2b"},{url:"assets/js/vendors~reveal.ced4d693.js",revision:"9a4960cda998c1928689986e75328f42"},{url:"assets/js/vendors~valine.e4887529.js",revision:"08c737dd51bd915718ad737174da62ee"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"b66ac3ea46aa4c2f8bcb99f9931caed4"},{url:"article/index.html",revision:"4614f5c0ba7f58b4d61088f3f994d00b"},{url:"category/Guide/index.html",revision:"31f7f887f238a75ddbe7ee3af214e602"},{url:"category/index.html",revision:"1333589c3d56b6dfe1d287771b05dc0b"},{url:"category/使用指南/index.html",revision:"e210d83b510b4a3304c5930d3b8a4079"},{url:"encrypt/index.html",revision:"6dedfc1d6763a292371a35b7cf09cafa"},{url:"guide/disable/index.html",revision:"2c34125b65ef4fdd88cc47d5db990526"},{url:"guide/encrypt/index.html",revision:"db96ecf4e926708e99170614fe857519"},{url:"guide/index.html",revision:"3a6484da4bd1e7c8c28b2ad5d32a9dd3"},{url:"guide/markdown/index.html",revision:"3e4fb5306a65d2e55e30e6c5600119a6"},{url:"guide/page/index.html",revision:"b0542929d3b099a5c932fa4474b57fb5"},{url:"home/index.html",revision:"329a3224ff1657d3b08c69c3fc6539a3"},{url:"index.html",revision:"88823841be6fbf8aa6d5c9eaadf98c48"},{url:"intro/index.html",revision:"c1a40f1e04d4089cbf6e8463231c1d36"},{url:"slide/index.html",revision:"d3add10d6d955d66b7c05b7e07d30a75"},{url:"slides/index.html",revision:"066ea9162e06a97422558f0256550065"},{url:"star/index.html",revision:"7f8ff0f982b2422695d98ab2355fb7a8"},{url:"tag/encryption/index.html",revision:"b401b97b29fa6a1a8038da0af47e8f3b"},{url:"tag/Guide/index.html",revision:"442da5c7b8c4e22856162c3eb105e9c4"},{url:"tag/index.html",revision:"33fedca68165373a02b5fd3562accec4"},{url:"tag/markdown/index.html",revision:"0575ec22032c816d873893c52328d63d"},{url:"tag/Page config/index.html",revision:"0e3dff3ae601b778eec903afd535374f"},{url:"tag/使用指南/index.html",revision:"6cb0e869e9d3d2567b4830c87dd64d73"},{url:"tag/文章加密/index.html",revision:"06a4239b1b21afbb2e0ed476986a4442"},{url:"tag/页面配置/index.html",revision:"87bcaf327577b2b5c50c841f6ba2e907"},{url:"timeline/index.html",revision:"08d03e6c108ef7684d56dd46037c912a"},{url:"zh/guide/disable/index.html",revision:"a02d99bb6b333dc19fb8f8d0c21dfa69"},{url:"zh/guide/encrypt/index.html",revision:"59264806f7673c397b09e1e218514ee8"},{url:"zh/guide/index.html",revision:"97d67a5e60437100bf3ffbeefee30271"},{url:"zh/guide/markdown/index.html",revision:"7757493d6f91403dd8d7c2b7fe61742e"},{url:"zh/guide/page/index.html",revision:"52635c92b978b40d385d5fb4e2abb5fd"},{url:"zh/home/index.html",revision:"28acd1b7ac3e95a5471fc8f108bdc791"},{url:"zh/index.html",revision:"f0e73fefe5e4c30853b6327b5a9bec63"},{url:"zh/slides/index.html",revision:"bbc1ed9c2c183162138ca14d51eda162"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.1978d2de.jpg",revision:"1978d2de0ac3638c255ff70aa8a0d32d"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
