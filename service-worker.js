if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.8b4ce2fa.css",revision:"c1b504c78d0e897f9883627bc2e95884"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/48.e09be98d.js",revision:"db6e3d59cc8b6579c1edd7dede44b7b2"},{url:"assets/js/49.402699af.js",revision:"15fb3e34e1a1c520a2f9293d0c398ef5"},{url:"assets/js/50.750cb95b.js",revision:"b76ed27e4434705e9f312e56e4694116"},{url:"assets/js/51.2c30588e.js",revision:"9bebe0d01a2f5b2901fd93c97a6658a6"},{url:"assets/js/app.0df9b56f.js",revision:"e9b0ccedaf012f48548df0b724c161f8"},{url:"assets/js/layout-Blog.412e3d70.js",revision:"5f05fb860445c0e3d33feed627cd0080"},{url:"assets/js/layout-Blog~layout-Layout.d1e20c63.js",revision:"e30e8a7dabf4a61a41fd46c833d33a26"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.17855a53.js",revision:"e9e6f52a82c03d034de1fdc2ae16a31f"},{url:"assets/js/layout-Layout.53ccafe1.js",revision:"f743ad75cca851b9e713047000342c4d"},{url:"assets/js/layout-NotFound.2d42accb.js",revision:"6623e7b1f7d03615bd378ef7763cc109"},{url:"assets/js/page-Markdown增强--4d787654.bc805751.js",revision:"b919e3a9f1ca06a734ed885ee39c3c52"},{url:"assets/js/page-Markdown增强--87b26038.a21e403f.js",revision:"cba69c7babee8ceb177c503995ff5172"},{url:"assets/js/page-vuepress-theme-hope--145768b6.25f63c9a.js",revision:"a79d214268afb8df3274535c72cdf428"},{url:"assets/js/page-vuepress-theme-hope--5dacd635.315ad4f2.js",revision:"e04eae90cde8eb1d9a3aa482ff4ef0e8"},{url:"assets/js/page-个人介绍--f358bcd4.e6934bb1.js",revision:"ce1619a4037ae0db0ab614fc941f9f47"},{url:"assets/js/page-侧边栏auto--3a90cf96.1f39da05.js",revision:"d3b6a2e1362d41d45dfb422b23687426"},{url:"assets/js/page-内部链接页脚--31f3a4f6.e3fb9a1a.js",revision:"799dc1d1a5e08b1c5651434a54292ddb"},{url:"assets/js/page-外部链接页脚--0f1c0bec.d01ccf8d.js",revision:"b70d7b5b6109328f15244712d4555984"},{url:"assets/js/page-密码测试--1d89700e.6c164ed6.js",revision:"907a04e849c65385954195ca0b2bc872"},{url:"assets/js/page-文字页脚--5ea4d836.881ebb55.js",revision:"7b115e6c78a17f9e297618e415431eed"},{url:"assets/js/page-文字页脚--854e1b54.0d52a9e8.js",revision:"2c326b6e7dd6ac1d84490c03fad951fb"},{url:"assets/js/page-无页脚--727687b5.ab7273e4.js",revision:"e2d8028d5f40e24fa26929e9859d5ff9"},{url:"assets/js/page-无页脚--c5727fd6.28cfe16a.js",revision:"968bf77db8acee9ead19258dc42b55eb"},{url:"assets/js/page-笔记列表--13847be8.fcd8c765.js",revision:"3bf45b2b6608784402f35d7171794ad6"},{url:"assets/js/page-笔记列表--253f1d56.2583e83e.js",revision:"a377a754a40302b8a700eff8d795a3d0"},{url:"assets/js/page-笔记列表--36afc214.e3f84b5b.js",revision:"05d55319e6f1d4be10d12e51a1bf105b"},{url:"assets/js/page-笔记列表--3706d596.1398f979.js",revision:"c02c5c22c6a9595c5a4a59b7793b8e45"},{url:"assets/js/page-笔记列表--4395057e.09aa7a97.js",revision:"77e61f3694e5284c6447a019cb564c6e"},{url:"assets/js/page-笔记列表--48777a54.dd08db18.js",revision:"275a0424cf989c55f976bce1ba4cf03e"},{url:"assets/js/page-笔记列表--4c6992b4.16d896e4.js",revision:"a4a4ad958a9e6f9571ff41d9288fe43d"},{url:"assets/js/page-笔记列表--5a3f3294.e35db3a5.js",revision:"f88a59c2de11b8bdc3f0347da1bd97ac"},{url:"assets/js/page-笔记列表--779dd3f6.28058164.js",revision:"70034775cd19b9a3c09e561d98971ce0"},{url:"assets/js/page-笔记列表--bfdc1d38.0d52ca84.js",revision:"1b61ff87c7a45752559800542598c81b"},{url:"assets/js/page-笔记列表--ed34e794.6ee1e903.js",revision:"e199ef6e428a547dd87a94ab5026ecc8"},{url:"assets/js/page-笔记列表--fefc9fd4.b82a6f74.js",revision:"cbde4f7fd86b9dc1d3fc92938cc854ef"},{url:"assets/js/page-组件测试--33a9d46e.1d5d88f5.js",revision:"15f6a849564228fe07473c5af07e6471"},{url:"assets/js/page-组件禁用--412a7956.aacf92fb.js",revision:"6d8bc2f18aad0e2186e94a791406908d"},{url:"assets/js/page-置顶文章--bbc4e3a0.babfd422.js",revision:"393c9d407f88c2b612eeed105b7e3bfa"},{url:"assets/js/page-自定义页脚--638ce0d4.9d296f4b.js",revision:"54d47cff8191cb768934d22b36f44c98"},{url:"assets/js/page-自定义页脚--76fb1e1e.6e6de116.js",revision:"ac0b147988b2c3b0dc48f1524b60c1a7"},{url:"assets/js/page-页面信息--0dfadc56.62dc5150.js",revision:"d3404cb5a82aab65895fb8628f603c87"},{url:"assets/js/page-页面布局--0f63db56.966e7186.js",revision:"9c0c1a276cc310964813915b2492bd36"},{url:"assets/js/page-页面布局--c006385a.4a5f0f4a.js",revision:"6ffde70b7e038cef3add971a74d2dd14"},{url:"assets/js/page-页面配置--36b78854.837d4280.js",revision:"b434aef53946ff0832c7273537e6d512"},{url:"assets/js/page-默认页脚--9df0770c.32f79e1a.js",revision:"11fba1ff991986dbb69866f323f7186e"},{url:"assets/js/page-默认页脚--d5d7bcf8.972d445f.js",revision:"698c3140a9867f72af18b1f1410578ed"},{url:"assets/js/vendors~flowchart.9e02b723.js",revision:"fcd11e06efc67d15f710091ed82d601c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7b132460.js",revision:"6c0bbc9a8a140fcee0f6c1ab1a3dba91"},{url:"assets/js/vendors~photo-swipe.19572636.js",revision:"6c23ad3ba88f30e375d879077b00635c"},{url:"assets/js/vendors~reveal.8ea402ea.js",revision:"a4152e684a2381fb43258dc59a865b2b"},{url:"assets/js/vendors~valine.24837a63.js",revision:"065e6cdcfef2e6f773651e8056dc88fa"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"31c3ac5328f751b0285e2ef6a369d8da"},{url:"article/index.html",revision:"e1707855af759c6cbed1dd1f15ab5d90"},{url:"category/component/index.html",revision:"2e323c843c63d3a535293b3c869150ab"},{url:"category/index.html",revision:"a3d004a7c198cf220bdf179faeae3969"},{url:"category/layout/index.html",revision:"ff7c9326364f5557c3f1565ae7877507"},{url:"category/note/index.html",revision:"d16d457c194df02f2d7adbcbd0a82aad"},{url:"category/note/page/2/index.html",revision:"7c37ae6efa83398be9b7341b7f5cefe5"},{url:"component/disable/index.html",revision:"c95cbe556ff832cf08858d5f986d5d84"},{url:"component/footer/default/index.html",revision:"d74cdcfbbc82dd92ae23891761fa8912"},{url:"component/footer/diy/index.html",revision:"234276bdf53fc5d165b2ce27475f6b13"},{url:"component/footer/index.html",revision:"4251677d9671b0ddc78f68ea8674b9b0"},{url:"component/footer/text/index.html",revision:"7d3d0752bd5a2168fa69ebef4c2c3b20"},{url:"component/index.html",revision:"87ba73e13f180735c7f781444bbee1b4"},{url:"component/page-info/index.html",revision:"16a28c2b6d7922a3e84fb211a28432d8"},{url:"en/index.html",revision:"38a4c9e491ad8f21d9ea82f29fa170b9"},{url:"en/test/detail/markdown/index.html",revision:"88f1c011a5c2c540764ffd38acbf8335"},{url:"en/test/detail/page/index.html",revision:"a05b43113052bca12609c6d61d397b73"},{url:"en/test/footer/default/index.html",revision:"35b380d65c25a014a4eec6749d7d6b25"},{url:"en/test/footer/diy/index.html",revision:"815651a07522372cec37aa7c9ba56bd7"},{url:"en/test/footer/index.html",revision:"d9b8422c7c2140e3bf3405d56fabe9a2"},{url:"en/test/footer/link/index.html",revision:"8bd22a7576d569dcad15fca059337143"},{url:"en/test/footer/outlink/index.html",revision:"253816e98352825f2f741ef03f59c37a"},{url:"en/test/footer/text/index.html",revision:"c8cff0241ba511aba89e190a65dd043f"},{url:"en/test/index.html",revision:"08da770d60ff75e39396de6ef63ae9c0"},{url:"encrypt/index.html",revision:"5d4de11368a99ecb4d4e5d86c265c2a0"},{url:"index.html",revision:"5ad60400a6371e2103f5271352b7796c"},{url:"intro/index.html",revision:"b319d7f291a044741997446ee205bc67"},{url:"markdown/index.html",revision:"517f9d229c72934d87e91ab034861b5c"},{url:"notes/1/index.html",revision:"6e7ad3cd60e417e95f751273c04a0a31"},{url:"notes/10/index.html",revision:"5da744cfaf72f02539a02b0bbc44457b"},{url:"notes/11/index.html",revision:"800ebd0433a746519c6df99ba2e18d4c"},{url:"notes/12/index.html",revision:"e1d024c2bbc2dbec70993a66b2db3413"},{url:"notes/2/index.html",revision:"c903e4202e8babef451c83b9d004883b"},{url:"notes/3/index.html",revision:"e96c2ee361a7611df45cdd41cce301f3"},{url:"notes/4/index.html",revision:"ef54414f9eea5dac901ad382e54d4a70"},{url:"notes/6/index.html",revision:"1a21d515bfa620b1025a29f82ed4b6ed"},{url:"notes/7/index.html",revision:"2b84893aff9201febed9a797c7757c62"},{url:"notes/8/index.html",revision:"a545d01c87a537c3f85f9af385c1d1ff"},{url:"notes/9/index.html",revision:"818838fc7a95373467ea0824bc3e448d"},{url:"notes/index.html",revision:"6cb1d9b3943b912e3005d2a8b8d80897"},{url:"sticky/index.html",revision:"452d27406a23fbe04ff873e0ff7a8966"},{url:"tag/footer/index.html",revision:"8d198135906522616a6037f97c122c9a"},{url:"tag/index.html",revision:"541e60b04aed994b4660b193793b9f4e"},{url:"tag/layout/index.html",revision:"ec3a3b595cc29aa0db75fdf954171643"},{url:"tag/markdown/index.html",revision:"f7dda78d60d93dbb3db7a281c24c11ce"},{url:"tag/note/index.html",revision:"af605e4d1a3a05ef43169ecb40c384e0"},{url:"tag/note/page/2/index.html",revision:"a60b845a10ac0a19fdc67755e67a6a37"},{url:"test/auto/index.html",revision:"7852b6841748eea4ec55a5b33cdb9050"},{url:"test/index.html",revision:"60927d99d802f00817f4c56fa85c0d56"},{url:"timeline/index.html",revision:"d9ac7a7b39363faaf58b26a142d2d50f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
