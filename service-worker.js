if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.293fb99c.css",revision:"4d59d2fd3a40c76719a9c1c602fd9fec"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.0d0352fe.js",revision:"c68c1a763a08740fba573ecd383550eb"},{url:"assets/js/35.21b56bae.js",revision:"2d366ce99cd74fc90b5d8e40cff1e172"},{url:"assets/js/36.4d0e5d29.js",revision:"b13b4e744f82b9bf1c5b2182005b0cb7"},{url:"assets/js/37.ab80de3f.js",revision:"8cb81b295ec0cddaf27112aba49e8310"},{url:"assets/js/38.c8ece0d3.js",revision:"ed5f3da270500122a84cdfddf143c81b"},{url:"assets/js/39.a62dc901.js",revision:"a13442cbad29cccee7f8267dbc91e8d9"},{url:"assets/js/app.49384d40.js",revision:"9e5c34b0151728d78df0bfd2d3aba510"},{url:"assets/js/layout-Blog.11708331.js",revision:"a63d0c0ba8f7ace3cb268f31e957ead0"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.80b04868.js",revision:"35aee63d46fda8b7d3fbac3ed82f9026"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.1a0225cd.js",revision:"fa55e798616fd8232a602afa16a2cc88"},{url:"assets/js/layout-Layout.1e1b8da2.js",revision:"49b0bd54c07952919e8ccc7f7a6ef0da"},{url:"assets/js/layout-NotFound.21b838ac.js",revision:"5bfd38c06e7c4cadbb7ca5816b7fa06b"},{url:"assets/js/layout-Slide.ed26cae0.js",revision:"e87e9be0210464a6ccced3c3598f871e"},{url:"assets/js/mermaid.4440da7c.js",revision:"7d442c3220153e07a431e6f4d0e5f11d"},{url:"assets/js/page-BlogHome.e092421d.js",revision:"dd5d8be0b4cbda254a214ceb91bc3614"},{url:"assets/js/page-Componentdisabled.44a2a417.js",revision:"8bc94b2e7b3e172fe09f2839a86241b4"},{url:"assets/js/page-CustomLayout.23a78ac7.js",revision:"fe49d518f1865e0149ab6e97103a4dbf"},{url:"assets/js/page-Encryptionarticle.7982560f.js",revision:"1944e1204f80e8c8df749abd45fda3e6"},{url:"assets/js/page-Guides.f48ab7fe.js",revision:"ebb7f9c252046c7cd92f0753d5622673"},{url:"assets/js/page-IntroPage.b86ca739.js",revision:"c8a71db113e89f56fabcecad4828ff5e"},{url:"assets/js/page-MarkdownEnhance.5ee18d07.js",revision:"1e723d256bb97afd0722a12b125d69b2"},{url:"assets/js/page-Markdown增强.b55c3595.js",revision:"ec179f4b278468a0d2324564391f932a"},{url:"assets/js/page-pageconfig.08d11bab.js",revision:"008d69bcd3683a34b68472444b055759"},{url:"assets/js/page-Projecthome.3615ea3d.js",revision:"320fd7476937ad77e2f5f82ea01fcde6"},{url:"assets/js/page-Slidepage.07802a70.js",revision:"0e3d91fd9d35d8c57f9287925491868f"},{url:"assets/js/page-主要功能与配置演示.87ae5c38.js",revision:"343195ec7331c1cf9715e3ec1a13af9a"},{url:"assets/js/page-博客主页.373cb077.js",revision:"7720bc269a8d7b7983e367b050c0af28"},{url:"assets/js/page-密码加密的文章.0abcdfa0.js",revision:"c5dcc575c27fd37568f72548655b182c"},{url:"assets/js/page-幻灯片页.83ac0333.js",revision:"ad45aacefeb63c427f84e2ce7b71f62d"},{url:"assets/js/page-组件禁用.8faf89a2.js",revision:"fb8bc847ccbfc7b17dbcaf08f1b7dc7d"},{url:"assets/js/page-自定义布局.595147de.js",revision:"82406b8e24e336d74e2caaa33b0693d6"},{url:"assets/js/page-页面配置.cac31295.js",revision:"59e033eb616a74c91af193fdd580ec7f"},{url:"assets/js/page-项目主页.05624515.js",revision:"d2a897174d2f29c63734f08c8cacd998"},{url:"assets/js/vendors~flowchart.6187c3d0.js",revision:"f77cd977f666d957f7e396f4c83fb043"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ff5d6839.js",revision:"cf76e660d3999c1025bc21de0d46d1a9"},{url:"assets/js/vendors~mermaid.b8f8525c.js",revision:"bf26f0850de7a627bbf99db4cbbb1999"},{url:"assets/js/vendors~photo-swipe.6ecde85e.js",revision:"607704d7bdd3052749fcc3ebfbee490a"},{url:"assets/js/vendors~reveal.278f75f0.js",revision:"792c32c2243cc84c2ce720f0bd94437d"},{url:"assets/js/vendors~waline.e35a3ea4.js",revision:"841b695d64a4400d8b6ab3a831287248"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"69ccf5e780579ef5c0d178dea1036f0c"},{url:"article/index.html",revision:"89026989377f0dd1d6fab8aa2755bd5c"},{url:"category/Guide/index.html",revision:"3444ffc372a8349657ed5a1de14ff71b"},{url:"category/index.html",revision:"f113f9acb1daca842cf07c0b6f4cdc4d"},{url:"category/使用指南/index.html",revision:"2480c9fb5ead722b62ada614f9ed7521"},{url:"encrypt/index.html",revision:"acd3a329600af5f4cd8702222f4fafba"},{url:"guide/disable/index.html",revision:"336411ca8b3412a400bb06e1b676a5aa"},{url:"guide/encrypt/index.html",revision:"bf5f712dcbcbadf0a996cf39aa1327a8"},{url:"guide/index.html",revision:"7714b1278ba0db0af783d9ff55cf0f1d"},{url:"guide/markdown/index.html",revision:"fd23f8e7cb7cc69bf748e0a15f153674"},{url:"guide/page/index.html",revision:"0196feaa1166d9a1c012d08f1d2eea30"},{url:"home/index.html",revision:"bea2989374019f8355cdfa91aaa5dfc4"},{url:"index.html",revision:"1aff12c757b60a74623cf7a69852fe8b"},{url:"intro/index.html",revision:"8e97bff4df22d8c586012087f4ce9a94"},{url:"layout/index.html",revision:"b81fefb1a47273d4dd7b337383134961"},{url:"slide/index.html",revision:"4335e3c35e8e49bc04a01d94e0e05007"},{url:"slides/index.html",revision:"15019b592d4cccb51abb73bf61630e58"},{url:"star/index.html",revision:"1331d787b4b78c0990c4f729efd46d20"},{url:"tag/encryption/index.html",revision:"902c68ef2aac5c23ae6e59689b83b9f9"},{url:"tag/Guide/index.html",revision:"b96854c3ac1bd6d0cd67f99124b30d38"},{url:"tag/index.html",revision:"24f0417626d240f1e6973667f443b5ca"},{url:"tag/markdown/index.html",revision:"ff1ea53f0ffa86f639e87677b77ebdbf"},{url:"tag/Page config/index.html",revision:"e2ae4916124421b0e3ea752ef96dce6c"},{url:"tag/使用指南/index.html",revision:"fb4f8521e1340919ee9649ef3eba7fa3"},{url:"tag/文章加密/index.html",revision:"6aaaf3e575413db88bb5fb0538a05b14"},{url:"tag/页面配置/index.html",revision:"86f5cdc52a3e3f5aed864228c75d0516"},{url:"timeline/index.html",revision:"90cb841eef2684743735a0f408db2ec2"},{url:"zh/guide/disable/index.html",revision:"27c5c3afdbbd21570c7ec40977a6abc0"},{url:"zh/guide/encrypt/index.html",revision:"f592fea7b1f05daf4a735289e8b5112b"},{url:"zh/guide/index.html",revision:"c97bbff5f800b68213ccf215558081b4"},{url:"zh/guide/markdown/index.html",revision:"e5672e81b7ec3fe285c805f2eb1f8d73"},{url:"zh/guide/page/index.html",revision:"32268f76e66725432bdc923cebcb0000"},{url:"zh/home/index.html",revision:"99eba13ba99a31bbe12e5abf08b7d6ee"},{url:"zh/index.html",revision:"dbb6cbc89d3ecb16382bf93afd4605a2"},{url:"zh/layout/index.html",revision:"cdf5f4a4616f0738649670a9a119774d"},{url:"zh/slides/index.html",revision:"66fbfef841154378cfbdd02615a1f9a6"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
