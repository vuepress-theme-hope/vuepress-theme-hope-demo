if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.8b2b4e7d.css",revision:"381bf0b08a5c5473eebb770fc0ebbd8d"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.c09d7a0d.js",revision:"738c722a369f9ebce059bc6da8cbf812"},{url:"assets/js/35.9543e794.js",revision:"b7b4e0046568da8dc3d97d7b0a95171c"},{url:"assets/js/36.1cc22fe2.js",revision:"587261e80ad31c80b3e1c2127f2eb372"},{url:"assets/js/37.d8532859.js",revision:"f1d6ae37867a91d6e8a4ead81e4ac843"},{url:"assets/js/38.1313f7b2.js",revision:"af686387217c29bd8d04e4312a9bb4a1"},{url:"assets/js/39.4f04bd43.js",revision:"946db846ca5b7ba492b41e6e1ddfd5d6"},{url:"assets/js/app.5ab7fd04.js",revision:"3310addeec8f2049d20eac41ac605f44"},{url:"assets/js/layout-Blog.f2c52d4a.js",revision:"b5052cb41f93c77279d9fe04faa5cf29"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.07844d7e.js",revision:"b484f337a54d4d4439ac162153985550"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.914a6b15.js",revision:"5c6fc341013c59794e82ab4488fa495a"},{url:"assets/js/layout-Layout.3d11e467.js",revision:"c94d83d855a3fd9635288f882e64fa6b"},{url:"assets/js/layout-NotFound.e348e9b0.js",revision:"5e1e7b551a6d9dd0f0abcd08546e24ba"},{url:"assets/js/layout-Slide.caf2a5da.js",revision:"768534a8ac11ccb93f5fc611cd327d24"},{url:"assets/js/mermaid.deeb4d96.js",revision:"beaf8c7aaf5b1123514918aa70da84ce"},{url:"assets/js/page-BlogHome.a333bc35.js",revision:"59310b4a4f87d0bfb9042fc585278058"},{url:"assets/js/page-Componentdisabled.958a177b.js",revision:"f86cc66e5143e4cbb225e6e6fceef146"},{url:"assets/js/page-CustomLayout.30cf7a2d.js",revision:"ec25c3316f4608dbc9caecd80dfb15d9"},{url:"assets/js/page-Encryptionarticle.daa5b2ec.js",revision:"ed243c8ed1df5573a64fd60f12cd72c8"},{url:"assets/js/page-Guides.c2e35be3.js",revision:"ed1499499b672978e869cd5f73250384"},{url:"assets/js/page-IntroPage.bd57f368.js",revision:"78d0b3bc93c636e1fe6766bc76d2e26e"},{url:"assets/js/page-MarkdownEnhance.bac82294.js",revision:"04e0d016c4d4da8bae39e90a7f46c197"},{url:"assets/js/page-Markdown增强.7312068f.js",revision:"ac0b286a44ee0d537b6229c76895bf7c"},{url:"assets/js/page-pageconfig.b0630f7d.js",revision:"068de31a9ecce8ddfbdf3f8b98a16797"},{url:"assets/js/page-Projecthome.d1b3de7f.js",revision:"b9a02381da200e7699c2685c554224b4"},{url:"assets/js/page-Slidepage.cdc41e12.js",revision:"967cf581e0dd4695200243eaaaade2e9"},{url:"assets/js/page-主要功能与配置演示.760303c3.js",revision:"4a555453060bb970483f51301e3aece1"},{url:"assets/js/page-博客主页.6c329d24.js",revision:"eaf3bb5f41adb526da23b9d9278c35cf"},{url:"assets/js/page-密码加密的文章.211497ad.js",revision:"2236fdee4d8a98a8c2d27ad39577e247"},{url:"assets/js/page-幻灯片页.e7ef67e0.js",revision:"b185e157e2c57e4b5b03d0d94663597b"},{url:"assets/js/page-组件禁用.9d86f55a.js",revision:"fedca58032499c47e55d9f40bb812862"},{url:"assets/js/page-自定义布局.d806e06d.js",revision:"915ddaf4a3fe01b4ebd58e7eb560b39e"},{url:"assets/js/page-页面配置.4535a652.js",revision:"ea9da2bb59cfc68a9bb85f220b3ac4da"},{url:"assets/js/page-项目主页.ee4a40ff.js",revision:"48f1e7b93e878837c859bccfce340a47"},{url:"assets/js/vendors~flowchart.7097eef5.js",revision:"a6c2d16a9175693b6c44fa41e5e037f7"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.487a746e.js",revision:"c4a43b772d8a89d603195355c870583f"},{url:"assets/js/vendors~mermaid.7ef1ec1e.js",revision:"40471b13dec99483c949e6bff7660cdf"},{url:"assets/js/vendors~photo-swipe.d3c35dd7.js",revision:"7787d14ab77b19056e1aaa15c4aced01"},{url:"assets/js/vendors~reveal.ddced913.js",revision:"8f4ee73b66167330c2c420557824d7cf"},{url:"assets/js/vendors~waline.43618c17.js",revision:"0fcbce32a0b9d8bdd6fd054b4c78997a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"522ae9072fd885f947a5cc0feb0ec28c"},{url:"article/index.html",revision:"1a8b37af2b79c5ad6756730c9fe19ca6"},{url:"category/Guide/index.html",revision:"083ba61278866f9cb3c3171a4bbe7e60"},{url:"category/index.html",revision:"25a8cfd7fd413788bcded54494c25883"},{url:"category/使用指南/index.html",revision:"d42991e86d65bb30aafb8968e245ca4f"},{url:"encrypt/index.html",revision:"cd962cf25a5d85d283db489b70449c53"},{url:"guide/disable/index.html",revision:"ea4b6d0d04e32b6b1a7a8afeb5bd73be"},{url:"guide/encrypt/index.html",revision:"447b1a56bfb75c557256fa020c39226d"},{url:"guide/index.html",revision:"a32d028fab61f4b47b2ced827a02a7f8"},{url:"guide/markdown/index.html",revision:"8adf44c19dc82922f360238283b302a5"},{url:"guide/page/index.html",revision:"466d20c63781493474a114ccb5134f1a"},{url:"home/index.html",revision:"5092856df457b86ead155b40e62c58f6"},{url:"index.html",revision:"f2cb9c9f6e01ac44c92d3c38b8b38ef0"},{url:"intro/index.html",revision:"0065d1b869e83e99e8be76543dda6204"},{url:"layout/index.html",revision:"5bd99e1b5aadf0732db7599a8ea2c460"},{url:"slide/index.html",revision:"da66d195bcbffb115861c9aceb824c74"},{url:"slides/index.html",revision:"495a2c82822a33cfdfa24674bba6c9eb"},{url:"star/index.html",revision:"292a2eee455a58f177b388bd3ffed7e2"},{url:"tag/encryption/index.html",revision:"981dc5e54cfd93f61d4b8471b49ed7c5"},{url:"tag/Guide/index.html",revision:"bff6c7ea72680fd210500699799de83b"},{url:"tag/index.html",revision:"c915d6c75583506daa64ab419c35cd1f"},{url:"tag/markdown/index.html",revision:"62d6bc57843edb97930d66837e91c2ac"},{url:"tag/Page config/index.html",revision:"5920275625f96b353e458906480f5d53"},{url:"tag/使用指南/index.html",revision:"07f3f5c6d7be2a0f33ce36482c49f307"},{url:"tag/文章加密/index.html",revision:"4bb2a21c2b34880ad912de3a8d908fd0"},{url:"tag/页面配置/index.html",revision:"992326986da9f4b1cfad631e1e065cb6"},{url:"timeline/index.html",revision:"bc9f9e038258b81921675e5f7fab94db"},{url:"zh/guide/disable/index.html",revision:"d0303245dcb0c10668a906340299c1df"},{url:"zh/guide/encrypt/index.html",revision:"6e056eb4bf96f883893988c566117173"},{url:"zh/guide/index.html",revision:"9120d08548ddede20458c6f7b8af24bb"},{url:"zh/guide/markdown/index.html",revision:"94d7d16d76d500b9e6d838443df437c7"},{url:"zh/guide/page/index.html",revision:"c72f0feac6d36bf52ff4cb742269567c"},{url:"zh/home/index.html",revision:"07987a9e23d1ad328fdf70f5e803b352"},{url:"zh/index.html",revision:"b6a92d808587fcbcec2d722de952921a"},{url:"zh/layout/index.html",revision:"318f6216fe770a8e6e8f4e28bf2363fa"},{url:"zh/slides/index.html",revision:"0107a16f1038738fbeb119b17fd3898c"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
