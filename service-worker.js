if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7b2cd3a9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.5303274d.css",revision:"05588f21c773e9733a02a2c3b33872ec"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.93b70ff0.js",revision:"3758271202920a7c10302ec9078ba7b2"},{url:"assets/js/31.05871f9d.js",revision:"4e9a9466dfac8be1a5653047abe7f9fc"},{url:"assets/js/32.b4fcf85b.js",revision:"1ba92bbb04bb47b93d12cee778693edf"},{url:"assets/js/33.b5dc0537.js",revision:"3a2461e5a3acbcce3269f162c4ff343c"},{url:"assets/js/34.8bc889fd.js",revision:"b24043b8d8e9e09ff9b3940891240ee2"},{url:"assets/js/app.ae0186c8.js",revision:"48a1fe8932d7d9cb951ca71a0cb3f130"},{url:"assets/js/layout-Blog.b0294f30.js",revision:"ed3c89f24759aba414792771691c69e5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.203f0e28.js",revision:"2e6f171db7be17b9eb02fee1224d74bb"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.969de606.js",revision:"66ac4c625902be9672c9f40b71b3533a"},{url:"assets/js/layout-Layout.4ea1c6ca.js",revision:"d5ca2395b55f41a7ba4a022ddc852f9f"},{url:"assets/js/layout-NotFound.acc5d0e9.js",revision:"f52974c626982cc57017c063e3cd644a"},{url:"assets/js/layout-Slide.5437c1b6.js",revision:"0dfa0cc70079e894c63726802777d161"},{url:"assets/js/page-BlogHome.1f82bc71.js",revision:"26e91700c4febaf8388ecf447ea8a91f"},{url:"assets/js/page-Componentdisabled.fbca4f5d.js",revision:"c624cb704603c5befa857295a18d4172"},{url:"assets/js/page-Encryptionarticle.7e72d059.js",revision:"8cb1eb073524394eb86b95f0dfe572e5"},{url:"assets/js/page-Guides.13f0a9e5.js",revision:"e02daa6281aa824e91ab5130a6602600"},{url:"assets/js/page-IntroPage.7519860c.js",revision:"784bc4622f9aa83ca165964949955084"},{url:"assets/js/page-MarkdownEnhance.5c52cbe9.js",revision:"4f68e844efde0fd0524e88d00f05959f"},{url:"assets/js/page-Markdown增强.30027005.js",revision:"73311e1fc6809584004f23a71c4fb353"},{url:"assets/js/page-pageconfig.cff9b9fb.js",revision:"95bb23f6698551b9f637cb62164fd0b4"},{url:"assets/js/page-Projecthome.593eed44.js",revision:"bb7e988b41fbed9b40afd237c63ec9a2"},{url:"assets/js/page-Slidepage.f3f20d1c.js",revision:"c3c77b8fda475410af13536a13828173"},{url:"assets/js/page-主要功能与配置演示.62689726.js",revision:"8b0c36a778599c185e788ba15d7b4cb9"},{url:"assets/js/page-博客主页.8e9d7d21.js",revision:"0a6ccad328017e5e53fe87c20e82ec28"},{url:"assets/js/page-密码加密的文章.55afef20.js",revision:"bf70a54652a96767b6347b7c7aa1106e"},{url:"assets/js/page-幻灯片页.b610c1fa.js",revision:"69ee03bd41759a01591c5c574ed20080"},{url:"assets/js/page-组件禁用.e1a97c99.js",revision:"b46853d4e92ad5ba166ed8259a5f6ab7"},{url:"assets/js/page-页面配置.6fa41a96.js",revision:"2db2f8736168c13bdee7e07fcea063f3"},{url:"assets/js/page-项目主页.9b269570.js",revision:"63676585b04d6c91261ed294ea9a1e62"},{url:"assets/js/vendors~flowchart.fce37362.js",revision:"be93285a14a0fc8ed2f36349d829a695"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.6db71f20.js",revision:"a6dc14faa5614931f9dee270e86b6504"},{url:"assets/js/vendors~photo-swipe.7451d116.js",revision:"1da72d678360840a1026ca5a1f673125"},{url:"assets/js/vendors~reveal.834060aa.js",revision:"17d0fe949668f27f4fa9daedf186355b"},{url:"assets/js/vendors~valine.5c32b451.js",revision:"8fdf9701588e083a6f18b5ad998831ad"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"7a04870c40a13d7fb989177c476d8c49"},{url:"article/index.html",revision:"5923be109210fa646288c6b32d1c99fd"},{url:"category/Guide/index.html",revision:"a09583f9a2f96c9b6ebfc3e941cd7d36"},{url:"category/index.html",revision:"fbdf95ede1a02e6e03a604e9c8b80084"},{url:"category/使用指南/index.html",revision:"d08c6458379396dcc4787da641130d2c"},{url:"encrypt/index.html",revision:"c8abdede58e0442ad169e661c752ac54"},{url:"guide/disable/index.html",revision:"168e8cb2edb867918bebc4717d6e2d91"},{url:"guide/encrypt/index.html",revision:"8f20057cdc2ca6c51ef993e166676385"},{url:"guide/index.html",revision:"bb549d2f62a91c10198e8835c941059b"},{url:"guide/markdown/index.html",revision:"b15dba6eab21fdaf476d61f4c80734e4"},{url:"guide/page/index.html",revision:"6548307ed20495c78378e402cd12af0c"},{url:"home/index.html",revision:"a070f119b0b1605531d305d1175b9111"},{url:"index.html",revision:"f4eb1ea9d81d4a8a925abcf04c359f3d"},{url:"intro/index.html",revision:"a551e6727efe8d8d7c9d7251ee25bd70"},{url:"slide/index.html",revision:"7badc5ad2ee6be4a9dc0e551f958805e"},{url:"slides/index.html",revision:"4f40c62e24b960c721c6d9f1076b5a1c"},{url:"tag/encryption/index.html",revision:"0e083693e5988ba4e11806dd5dfa608b"},{url:"tag/Guide/index.html",revision:"593a424303821127b2cd362a116844ce"},{url:"tag/index.html",revision:"06b67515ec51fc1312165d6454daf717"},{url:"tag/markdown/index.html",revision:"4a2ee7621fe9a8e6cffb41135d66ff14"},{url:"tag/Page config/index.html",revision:"eefa0712f84ffed56a55403c1b639871"},{url:"tag/使用指南/index.html",revision:"5a96cce47b83ded4a1535467a0a1c2c4"},{url:"tag/文章加密/index.html",revision:"033895717de8bef269c892a237934c4b"},{url:"tag/页面配置/index.html",revision:"9e36ccd26e869998eb56153937910a96"},{url:"timeline/index.html",revision:"77c4fdf514f5aa1c73fe2e5c701c6eed"},{url:"zh/guide/disable/index.html",revision:"b7618c19e78258162c58784793f51af8"},{url:"zh/guide/encrypt/index.html",revision:"e516baa2c9ea50347215377bb83d7ece"},{url:"zh/guide/index.html",revision:"3719cdac223880867b83196944ab7a15"},{url:"zh/guide/markdown/index.html",revision:"fb6eb06eea119051c7abba951af15047"},{url:"zh/guide/page/index.html",revision:"b611dbf93f84aca3716123e22d7a5e47"},{url:"zh/home/index.html",revision:"1edc46e35d3fe467c1f435aa0ba37ee7"},{url:"zh/index.html",revision:"12a2b4e0e43aa01045642bfe4e30a723"},{url:"zh/slides/index.html",revision:"9c48db96aa0243c0234a175033b8a9c4"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
