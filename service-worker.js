if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.728add80.css",revision:"6df9ada004bdac81cd90891b539c63eb"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/33.f798db66.js",revision:"91581917bf6954f614a09dfb4f1ec249"},{url:"assets/js/34.4e0faa97.js",revision:"28f1f45876e55e0d193bb2f8ed899f68"},{url:"assets/js/35.78eebfce.js",revision:"86cda758bfaa018641cb120914c8a479"},{url:"assets/js/36.454b134c.js",revision:"4600085a7066330d53457a115ffc7898"},{url:"assets/js/37.bf8fddd9.js",revision:"683ef6801eeadcc79907f2b4bafa68ea"},{url:"assets/js/app.b609e6ce.js",revision:"625f55e101b36c35a8340c4e09ccfcc6"},{url:"assets/js/flowchart.4ea3c318.js",revision:"ab3dcbd85bd0c62f784bbfd8f1417205"},{url:"assets/js/layout-Blog.75f84287.js",revision:"a01e91fa8269c59adc2ad7d7ddf21dc9"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.25b9ab8f.js",revision:"cc87247b2e625e3fdc710227e1edaf64"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.8a3e0baf.js",revision:"5813c7a3315d9e4eb32783d6ef21b2cf"},{url:"assets/js/layout-Layout.559d517d.js",revision:"7c71b6008e451be1d0a9083433bdc824"},{url:"assets/js/layout-NotFound.313a8271.js",revision:"c3de74424ddf81d441dd556689ec0e38"},{url:"assets/js/layout-Slide.cdfb118f.js",revision:"3d827950cb2b9a6432e41f01d7fa848e"},{url:"assets/js/page-BlogHome.7ce9a5f9.js",revision:"20ed4d4c8d51cbb3ec22636b546b51e0"},{url:"assets/js/page-Componentdisabled.97ed79d1.js",revision:"7f09be2b4859f7571c17ae6deaecef88"},{url:"assets/js/page-Encryptionarticle.2b41143f.js",revision:"c0a5a733e13f8a2f946bb43a1e4ee399"},{url:"assets/js/page-Guides.b70e4b89.js",revision:"39e0222840caf0d6ed4ccddd8d2c48d5"},{url:"assets/js/page-IntroPage.16a0efdc.js",revision:"edc7ec8201f8c95f335b01ebdbcaf622"},{url:"assets/js/page-MarkdownEnhance.09daf050.js",revision:"04f7fa720283874a60b6b785d3886d7f"},{url:"assets/js/page-Markdown增强.231fe406.js",revision:"78f7ad7d84bbf0dfc074e0fdf313984f"},{url:"assets/js/page-pageconfig.fb31e89d.js",revision:"904ed22bff520b2bfa578932979c8695"},{url:"assets/js/page-Projecthome.088f27c9.js",revision:"ac32294fca0451870debcaf55b1346e6"},{url:"assets/js/page-Slidepage.74aca7f0.js",revision:"3e2b598c05d877c0220946b2382ba66f"},{url:"assets/js/page-主要功能与配置演示.048cc6db.js",revision:"14c9cbd29094fbee6b570406bde76539"},{url:"assets/js/page-博客主页.739f0c2c.js",revision:"fa80935180ffaf00157663f26979f04c"},{url:"assets/js/page-密码加密的文章.31a8661b.js",revision:"9e18f9207d59bea0b5b697faf8e39a88"},{url:"assets/js/page-幻灯片页.ac994110.js",revision:"1c820775b592b32df5b64d7ccc4adbfe"},{url:"assets/js/page-组件禁用.d7dd7262.js",revision:"a8c374d3b9637e5388bccbf24ea508b0"},{url:"assets/js/page-页面配置.529f3f87.js",revision:"89da3af007c7df41204d97c91f8453b0"},{url:"assets/js/page-项目主页.10e2e701.js",revision:"395476eada726709aede12f7340a28e9"},{url:"assets/js/presentation.db112b23.js",revision:"db1be0a6f0b4ca488d4033254709a4e1"},{url:"assets/js/valine.5aa98cc0.js",revision:"487509d7bafc225fea47c4afcaaad48e"},{url:"assets/js/vendors~flowchart.fef9d589.js",revision:"b01b6b6934ec8b8744ca581852ca762f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.dfcc1951.js",revision:"d43214cd2bcc1db9f4491766390818f9"},{url:"assets/js/vendors~photo-swipe.a21461f0.js",revision:"88153369a2a98e81670e6bf6fd0b7ccc"},{url:"assets/js/vendors~reveal.9df5485b.js",revision:"97e32d1e36dc3e309d17ebc0c17429d9"},{url:"assets/js/vendors~valine.58873f31.js",revision:"8055cdf4ddc324b7b7b6cc71348bc31d"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"51cd53719fe4d69fa05401389ae98be9"},{url:"article/index.html",revision:"321b482715f3e9b3e7ff95941886c210"},{url:"category/Guide/index.html",revision:"cdca63712bd4b97ff7534067649a6e8b"},{url:"category/index.html",revision:"76b217c6fff9f81d0bcecf44fdd1ad5d"},{url:"category/使用指南/index.html",revision:"5284cb41a820a0f0e20cff3ba97ccf72"},{url:"encrypt/index.html",revision:"f2b77b3c0518e24886d5c2706f740f15"},{url:"guide/disable/index.html",revision:"0acc8e66fc23c7ede49432cce4917cb3"},{url:"guide/encrypt/index.html",revision:"5689df3fdcea5041fb420934ff0c7444"},{url:"guide/index.html",revision:"33141adfd14b2202a5af99f4ac2a9590"},{url:"guide/markdown/index.html",revision:"63b533b3c2012ae8e14912b28a2d0e54"},{url:"guide/page/index.html",revision:"00a561b75f013ed9c6093ab9c8a04074"},{url:"home/index.html",revision:"29fdd65ed496d084843b27a9ea119440"},{url:"index.html",revision:"e6b98c6883bfb327398360522ca4cadf"},{url:"intro/index.html",revision:"12e08dada9383d67fc673d0f457a09f4"},{url:"slide/index.html",revision:"e8323f7142dcc96e66dad053d3b0e199"},{url:"slides/index.html",revision:"1a005ee9d16aa483cf773d2bb6bfe02d"},{url:"star/index.html",revision:"3e91f7d763865a8a33dc274e87d1f23d"},{url:"tag/encryption/index.html",revision:"8245bff8914abf33858122f639a9e8e3"},{url:"tag/Guide/index.html",revision:"5120f96ac73a93c937a47617a46d8148"},{url:"tag/index.html",revision:"cdb1948b89e03c3462ffb49947d65fc6"},{url:"tag/markdown/index.html",revision:"da4e37dd17aa8bd36673846b8f61b49d"},{url:"tag/Page config/index.html",revision:"ec47ebf9007ceba710d1a0d696506d85"},{url:"tag/使用指南/index.html",revision:"ce8d4a455613448b1319ad9088223fc5"},{url:"tag/文章加密/index.html",revision:"af469c96741fa4a2a2641a8e99b6f594"},{url:"tag/页面配置/index.html",revision:"c9c2c84195be335483a9d9259179311d"},{url:"timeline/index.html",revision:"9324bb9b13b81b7cdf6d2389a0e32726"},{url:"zh/guide/disable/index.html",revision:"0267ddce4a8f0c4a9fcf9b241e76bd14"},{url:"zh/guide/encrypt/index.html",revision:"29cc83b53aedf1af17b619f5fed82998"},{url:"zh/guide/index.html",revision:"1487aaf4297f07c91449583e56d0f214"},{url:"zh/guide/markdown/index.html",revision:"eb63e67a3ba93654ee46aa7f844afb95"},{url:"zh/guide/page/index.html",revision:"a833df469c1fc7d1784878a750cdd394"},{url:"zh/home/index.html",revision:"f2e609e30f89fb00c078a387a3419658"},{url:"zh/index.html",revision:"7fa2f295b28b7d85cf0f9c2e99054a47"},{url:"zh/slides/index.html",revision:"5d8269100f16065aba5c0cb80287d3a0"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
