if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.c8ff36af.css",revision:"b0ba49d93879fadcac4b512df38ef4e8"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.e1071f46.js",revision:"bdf67be7922d9b4dd191ef5e4c087950"},{url:"assets/js/31.2aea0aa1.js",revision:"a825c226dd92ccf438b8b5a146089d92"},{url:"assets/js/32.91abd33f.js",revision:"2e48a852a04f0a3621eaa870c51a8fa8"},{url:"assets/js/33.b3d3fec9.js",revision:"1bd0fe056031980a19b280081cf49ed3"},{url:"assets/js/34.22ac1dff.js",revision:"80632a5e7a934f240ebd55c008fb0ec8"},{url:"assets/js/app.54c06595.js",revision:"bb3288b734381667095f943fd6957581"},{url:"assets/js/layout-Blog.c6e31dfa.js",revision:"363885c4b0b25e8509dd42c9c6a59a32"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.1bc524c3.js",revision:"2ab3b12e6ef9db664b2b7ff8f8430720"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.bed69f71.js",revision:"2d7667682bb6a6a3bf9da86f3d3baab2"},{url:"assets/js/layout-Layout.63aee34a.js",revision:"afa30e92d53cdba40aa0ba0546ac41a1"},{url:"assets/js/layout-NotFound.dcfcd870.js",revision:"21f8878a89c3bc9a5b1602b66b4f4338"},{url:"assets/js/layout-Slide.5ed64ce0.js",revision:"a5981af3bb68f82d2bbdbc02d19bc311"},{url:"assets/js/page-Componentdisabled--742e8b14.c1eab7e5.js",revision:"3c00df50ffeb7ad4103b82b52e1e040e"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.7725bc0f.js",revision:"8f6f978d24dc6f597d0b9d2362d2c8ab"},{url:"assets/js/page-Guides--22306cea.a9671964.js",revision:"1b22982429c39caa75555d3abb5afedd"},{url:"assets/js/page-IntroPage--f358bcd4.5b90aefe.js",revision:"5b47fb1ca000972d2f263a8c62db3f3c"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.790de04d.js",revision:"9002aedf70909f2f76af78f896c87ab9"},{url:"assets/js/page-Markdown增强--eec60994.d12a1850.js",revision:"325d5f73ac3ac2cfc8e15cfa27ce643b"},{url:"assets/js/page-MrHope--145768b6.fe9b29fe.js",revision:"b53e7df688916f40769d9224b51606d8"},{url:"assets/js/page-MrHope--79004bd6.1c3cc228.js",revision:"29521ab58e88851eca4c74c5bad1ebd8"},{url:"assets/js/page-pageconfig--55e15bfe.471df68d.js",revision:"38c2fced93f129416c9abfd003b6990e"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.e031636e.js",revision:"03d267b1e99caa68d3d4e054b9fd26fd"},{url:"assets/js/page-Slidepage--7a2d82be.9f6c7aa1.js",revision:"b9592485a76ca8ef5d5560a9b91d7b7e"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.c88b0483.js",revision:"f8ec49c191944c340276b9577f20f504"},{url:"assets/js/page-密码加密的文章--64e181e0.9263ac12.js",revision:"777b2102c6507171eecd4a597271f367"},{url:"assets/js/page-幻灯片页--f6429394.6ab326a4.js",revision:"527acdc6ad53afa75ece71cbf2fc73fb"},{url:"assets/js/page-组件禁用--5650041a.99ed7fbd.js",revision:"4dad92a704ee80c560a95cfce2a6191d"},{url:"assets/js/page-页面配置--2847a8b6.39307180.js",revision:"87fc8b38d34f8c7842a99625f110d404"},{url:"assets/js/page-项目主页展示--fb8d99d4.6e453c1b.js",revision:"b97bb5bca465746becf0a7d1458eb63d"},{url:"assets/js/vendors~flowchart.397788d5.js",revision:"ad3bbf86c698bf51dfa0bd7d84668b1a"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7f1cd551.js",revision:"a53429ef476c261ea5ab2e2530558d52"},{url:"assets/js/vendors~photo-swipe.7b1684cb.js",revision:"5527531375ca528908765949afb5143b"},{url:"assets/js/vendors~reveal.5203f0aa.js",revision:"2926b951825116bdbe8cc252fb67ca60"},{url:"assets/js/vendors~valine.3952b2d0.js",revision:"1fd0f6281f7236450e22e1073c739e19"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"097b6dc0f2951a5d25b42399f0731501"},{url:"article/index.html",revision:"477b1e0c64b4114d7b430d06d5ff7d84"},{url:"category/Guide/index.html",revision:"8ef1a9431270a68c99bee53cbf1c60fd"},{url:"category/index.html",revision:"58e02d2ed1de9198b9738646234f688f"},{url:"category/使用指南/index.html",revision:"c98ca75996254c2b0684b9be5929997d"},{url:"encrypt/index.html",revision:"9701f10f80b58e1eaef1838ddc0cce93"},{url:"guide/disable/index.html",revision:"aa7b8a8c542bdc8f58aebebc683a148a"},{url:"guide/encrypt/index.html",revision:"fdd9e4d922aa30335b081475c650a55c"},{url:"guide/index.html",revision:"9efe7669b9d1aa38711c94fafe9a9666"},{url:"guide/markdown/index.html",revision:"b5b575370cd7111a7070e5b3f67f0e8d"},{url:"guide/page/index.html",revision:"281df9e1613f96cab77aa173c968c5c8"},{url:"home/index.html",revision:"12034ae30790cb5b72b572fca9073664"},{url:"index.html",revision:"51fd335296d03dc0b764735ffcd318a3"},{url:"intro/index.html",revision:"ea2a60c69ff90411d19ed2b3ee868ece"},{url:"slide/index.html",revision:"122ec1a41791b23cb2d1f5a1ae42b304"},{url:"slides/index.html",revision:"51aa98525ccc343fd54faec22bbda3ff"},{url:"tag/encryption/index.html",revision:"4eec598817a37e313b6d21bd43740031"},{url:"tag/Guide/index.html",revision:"5284a2dedd4cc6de5c89b60f3fecd795"},{url:"tag/index.html",revision:"466067c8305ee0a22a07edd08f133e0d"},{url:"tag/markdown/index.html",revision:"ca2101b79b393efe923d35a17e34fcc5"},{url:"tag/Page config/index.html",revision:"8e5c29e74f7a607addb2fedd2a61b6d7"},{url:"tag/使用指南/index.html",revision:"a6a80df2a729963f0863e13b6b9ea9a8"},{url:"tag/文章加密/index.html",revision:"b62110d3ff38c7ac5461d3d2776dcca9"},{url:"tag/页面配置/index.html",revision:"6b822593851a0cf1b7f64420b12b980b"},{url:"timeline/index.html",revision:"35f4d8c8240e703b6a937689980a57ca"},{url:"zh/guide/disable/index.html",revision:"8b6f69fcb6e9223afb96b74871a7f558"},{url:"zh/guide/encrypt/index.html",revision:"e258ae59d623b80735ddf8c8ce662d91"},{url:"zh/guide/index.html",revision:"8e924266352858a008a71d61b0989578"},{url:"zh/guide/markdown/index.html",revision:"7e5f3c2a0680826fa5b5415bd7bbd572"},{url:"zh/guide/page/index.html",revision:"a1aba681c4097d03a0a8bb198b843b07"},{url:"zh/home/index.html",revision:"c77e1e25441a449b45e9dfa029ac7c2e"},{url:"zh/index.html",revision:"227544f842781292df0b81cba399d7ac"},{url:"zh/slides/index.html",revision:"36ac418ab20a14dcfdc2234c8b08072c"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
