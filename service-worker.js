if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.728add80.css",revision:"6df9ada004bdac81cd90891b539c63eb"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/33.f798db66.js",revision:"91581917bf6954f614a09dfb4f1ec249"},{url:"assets/js/34.4e0faa97.js",revision:"28f1f45876e55e0d193bb2f8ed899f68"},{url:"assets/js/35.78eebfce.js",revision:"86cda758bfaa018641cb120914c8a479"},{url:"assets/js/36.454b134c.js",revision:"4600085a7066330d53457a115ffc7898"},{url:"assets/js/37.bf8fddd9.js",revision:"683ef6801eeadcc79907f2b4bafa68ea"},{url:"assets/js/app.90cc5437.js",revision:"5ed618eb61f1ca25caa96405aeb61aba"},{url:"assets/js/flowchart.4ea3c318.js",revision:"ab3dcbd85bd0c62f784bbfd8f1417205"},{url:"assets/js/layout-Blog.75f84287.js",revision:"a01e91fa8269c59adc2ad7d7ddf21dc9"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.25b9ab8f.js",revision:"cc87247b2e625e3fdc710227e1edaf64"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.8a3e0baf.js",revision:"5813c7a3315d9e4eb32783d6ef21b2cf"},{url:"assets/js/layout-Layout.559d517d.js",revision:"7c71b6008e451be1d0a9083433bdc824"},{url:"assets/js/layout-NotFound.313a8271.js",revision:"c3de74424ddf81d441dd556689ec0e38"},{url:"assets/js/layout-Slide.cdfb118f.js",revision:"3d827950cb2b9a6432e41f01d7fa848e"},{url:"assets/js/page-BlogHome.7ce9a5f9.js",revision:"20ed4d4c8d51cbb3ec22636b546b51e0"},{url:"assets/js/page-Componentdisabled.97ed79d1.js",revision:"7f09be2b4859f7571c17ae6deaecef88"},{url:"assets/js/page-Encryptionarticle.2b41143f.js",revision:"c0a5a733e13f8a2f946bb43a1e4ee399"},{url:"assets/js/page-Guides.b70e4b89.js",revision:"39e0222840caf0d6ed4ccddd8d2c48d5"},{url:"assets/js/page-IntroPage.16a0efdc.js",revision:"edc7ec8201f8c95f335b01ebdbcaf622"},{url:"assets/js/page-MarkdownEnhance.09daf050.js",revision:"04f7fa720283874a60b6b785d3886d7f"},{url:"assets/js/page-Markdown增强.231fe406.js",revision:"78f7ad7d84bbf0dfc074e0fdf313984f"},{url:"assets/js/page-pageconfig.fb31e89d.js",revision:"904ed22bff520b2bfa578932979c8695"},{url:"assets/js/page-Projecthome.088f27c9.js",revision:"ac32294fca0451870debcaf55b1346e6"},{url:"assets/js/page-Slidepage.74aca7f0.js",revision:"3e2b598c05d877c0220946b2382ba66f"},{url:"assets/js/page-主要功能与配置演示.048cc6db.js",revision:"14c9cbd29094fbee6b570406bde76539"},{url:"assets/js/page-博客主页.739f0c2c.js",revision:"fa80935180ffaf00157663f26979f04c"},{url:"assets/js/page-密码加密的文章.31a8661b.js",revision:"9e18f9207d59bea0b5b697faf8e39a88"},{url:"assets/js/page-幻灯片页.ac994110.js",revision:"1c820775b592b32df5b64d7ccc4adbfe"},{url:"assets/js/page-组件禁用.d7dd7262.js",revision:"a8c374d3b9637e5388bccbf24ea508b0"},{url:"assets/js/page-页面配置.529f3f87.js",revision:"89da3af007c7df41204d97c91f8453b0"},{url:"assets/js/page-项目主页.10e2e701.js",revision:"395476eada726709aede12f7340a28e9"},{url:"assets/js/presentation.db112b23.js",revision:"db1be0a6f0b4ca488d4033254709a4e1"},{url:"assets/js/valine.5aa98cc0.js",revision:"487509d7bafc225fea47c4afcaaad48e"},{url:"assets/js/vendors~flowchart.fef9d589.js",revision:"b01b6b6934ec8b8744ca581852ca762f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.dfcc1951.js",revision:"d43214cd2bcc1db9f4491766390818f9"},{url:"assets/js/vendors~photo-swipe.a21461f0.js",revision:"88153369a2a98e81670e6bf6fd0b7ccc"},{url:"assets/js/vendors~reveal.9df5485b.js",revision:"97e32d1e36dc3e309d17ebc0c17429d9"},{url:"assets/js/vendors~valine.58873f31.js",revision:"8055cdf4ddc324b7b7b6cc71348bc31d"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"d6ae37176fedd40589f88072dddb504c"},{url:"article/index.html",revision:"07ac54c368237ef5aa4a726c8145aea8"},{url:"category/Guide/index.html",revision:"f816dae085ab5ec5f7d35026c92b8f83"},{url:"category/index.html",revision:"ce3599cae4af3687f533ad95c67a5189"},{url:"category/使用指南/index.html",revision:"28a88acdd1776c439a2e44a4e42c7a80"},{url:"encrypt/index.html",revision:"a6c68e5e96c33f49be2a792e40b6e67e"},{url:"guide/disable/index.html",revision:"f95495d58391f28fbddab567c7e744c8"},{url:"guide/encrypt/index.html",revision:"d9594c86eb2b82eb2f9d8677ad1b1e4c"},{url:"guide/index.html",revision:"bf4faa909857d39e732e88baae11694b"},{url:"guide/markdown/index.html",revision:"4dfe2d955cd9d98d4d3274f27bd6df68"},{url:"guide/page/index.html",revision:"ef0898c82507417476eb057f6e8f6da6"},{url:"home/index.html",revision:"26adfbd5fedf0d0e59ca238686f74027"},{url:"index.html",revision:"f743ef4406c9af22c4df887f841a81eb"},{url:"intro/index.html",revision:"871fca06fe896b74a13816c0c938c782"},{url:"slide/index.html",revision:"de5922e0ea2463104cf591e0ecb4a7c7"},{url:"slides/index.html",revision:"3d61ae0f6e3aec4d7288e7834f026578"},{url:"star/index.html",revision:"b26d47cdb900775ef65b06b21ed63266"},{url:"tag/encryption/index.html",revision:"3e5a78d1871a304cd0ab77f73938b1d4"},{url:"tag/Guide/index.html",revision:"510dcb68aad8bb6bfd79ad79805eda81"},{url:"tag/index.html",revision:"117aa538985cc05172444df158c4a882"},{url:"tag/markdown/index.html",revision:"56240cc6f5690a9a52c6a423a0fd24b7"},{url:"tag/Page config/index.html",revision:"1814af5169a6fe9317a3f65f4f360c60"},{url:"tag/使用指南/index.html",revision:"17f88e185f6d1a1d30873ad26781ee05"},{url:"tag/文章加密/index.html",revision:"fb001f45e219c10f7288d2329999449d"},{url:"tag/页面配置/index.html",revision:"f517602a969579d8dcf78be17b581e68"},{url:"timeline/index.html",revision:"88da26e3aa4cfc420546b21b2a8c9782"},{url:"zh/guide/disable/index.html",revision:"6c652f86fc4220ed371e0b998c8381f5"},{url:"zh/guide/encrypt/index.html",revision:"da0196b48db6be8d3a2110c0b44e98e3"},{url:"zh/guide/index.html",revision:"9aced70616cf77b692b6482f24de66b4"},{url:"zh/guide/markdown/index.html",revision:"6882869de381d17f7b434380ffbcb578"},{url:"zh/guide/page/index.html",revision:"bf815036c5e4bda85efd03341574eb08"},{url:"zh/home/index.html",revision:"dd7d64b2c4e6ea59f8e79272e5f0874f"},{url:"zh/index.html",revision:"7b2d8762402f03a0d2aa148ac56e0f86"},{url:"zh/slides/index.html",revision:"f2674a8afb39e7201e319f83b2f55cc2"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
