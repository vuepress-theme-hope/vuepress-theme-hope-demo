if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"ab79f92fcb9c9400b740022ee141962c"},{url:"article/index.html",revision:"a9788403e1f70ecf4fafaab25f8be00a"},{url:"assets/css/0.styles.30cdd2fa.css",revision:"480ef74a572d8a66c40e1ca83cefa4d3"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/26.dbe474c9.js",revision:"3e26f70163f0062968379e5fcf8d83c9"},{url:"assets/js/app.4f835879.js",revision:"a196f8d8e38d924b6dd731768ce679c6"},{url:"assets/js/layout-BlogEntry.a1c86d11.js",revision:"25820af7e4c7b1d150e7d50b58aca774"},{url:"assets/js/layout-BlogEntry~layout-Common~layout-Layout~layout-Timeline.b02a54ef.js",revision:"5866e6e8eaa23f21fd670cfa544e77a5"},{url:"assets/js/layout-BlogEntry~layout-Layout.5e3bc0d1.js",revision:"c0443caac9bd15407a1ed8ff7f266284"},{url:"assets/js/layout-Common.ec0a6324.js",revision:"b7f33fa6843092de963bc82678af02f3"},{url:"assets/js/layout-Layout.40a54f3e.js",revision:"59d067f8956c8179559228a2be69030b"},{url:"assets/js/layout-NotFound.6bbc0143.js",revision:"b5a8dab0e4c0d942c4a29d74d569dc00"},{url:"assets/js/layout-Timeline.8dc4ff80.js",revision:"b2c54b457628029d5e8cee20afb8ccc2"},{url:"assets/js/page-Home.d143c3b1.js",revision:"8a539870cca37daca567fab82211c0e1"},{url:"assets/js/page-Markdown 增强.3a71f159.js",revision:"2d0b980474105bf70b2690bee0286fba"},{url:"assets/js/page-个人介绍.bca68e2b.js",revision:"0c0c5d181afcf4a88cf85a2b5b6b300b"},{url:"assets/js/page-内部链接页脚.42cbb2f1.js",revision:"79c74fa3c2e8ac481cc7393bcc073ddc"},{url:"assets/js/page-外部链接页脚.62b9d581.js",revision:"573ad0d978fc0f358cd0821ed4d3195a"},{url:"assets/js/page-密码测试.cac20629.js",revision:"2a2dc08c366b4ce2dc94c2d57bc266cd"},{url:"assets/js/page-文字页脚.162d7052.js",revision:"51c4b705915d575e090fc4f0a8d4e6bf"},{url:"assets/js/page-无页脚.e284cb21.js",revision:"67cea99ae4ff1eceb99eb36f3602f4ad"},{url:"assets/js/page-组件测试.9a726ce4.js",revision:"2c4763d1d7ea96d83bb5a53333bd7579"},{url:"assets/js/page-组件禁用.d690cef9.js",revision:"4b71258d1a01267d4bfbae6433ac7cdc"},{url:"assets/js/page-置顶文章.cd1953b8.js",revision:"dcd372de19466b400d9aa02c961b03d0"},{url:"assets/js/page-自定义页脚.4c683e05.js",revision:"f15801aa99c18d3d81f88991a3d5d8f6"},{url:"assets/js/page-页面信息.cb1809ae.js",revision:"9034b5203f042dfb940308672388128c"},{url:"assets/js/page-页面布局.cf2fbc36.js",revision:"040872be30c087dc5dd59507a8962f57"},{url:"assets/js/page-页面配置.8ddd92bd.js",revision:"02b2a8af1cab10806608d7bf5eead4ce"},{url:"assets/js/page-默认页脚.726c067a.js",revision:"72c2e8334c9013d92cdca33c72b8fa40"},{url:"assets/js/vendors~layout-Layout.5f1a29ad.js",revision:"2d42b737c4dd2779f592668c54d959f8"},{url:"category/component/index.html",revision:"4889a6e1548157909327c5727212aaad"},{url:"category/index.html",revision:"dc6d3c4df20318fcb4ae935c32ae2a9f"},{url:"category/layout/index.html",revision:"4add73ff4b58ec5662dc02ba5388e62f"},{url:"component/disable.html",revision:"397d75f9da78b5607b6ab0f9336a1dd0"},{url:"component/footer/default.html",revision:"5dbe4e4cd5a2570e11039b47e35c11eb"},{url:"component/footer/diy.html",revision:"d769445a12f8505e2fac7301915e43cb"},{url:"component/footer/index.html",revision:"f956de31f9880df53aaccdacdfca949d"},{url:"component/footer/link.html",revision:"69c3dfcab4af73c485daf48010d75ea0"},{url:"component/footer/outlink.html",revision:"be98409ac6b9e4af7163da1d9161fc09"},{url:"component/footer/text.html",revision:"754b3c7502871a57d47b2bbcdeec1c50"},{url:"component/index.html",revision:"c70b87c1c1aca266ddfdc3bcb5cb7726"},{url:"component/pageInfo.html",revision:"f10276ba73feb96f882db7d3bda6b07d"},{url:"en/index.html",revision:"2d7bbb1c14914a22c36fb57d753e2aab"},{url:"en/test/detail/markdown.html",revision:"93db41bae30f6b3c366aad574b80dae2"},{url:"en/test/detail/page.html",revision:"607cd6318a3ca8a869892ffe6fbc48ef"},{url:"en/test/footer/default.html",revision:"d9d75b7a8e73adf021e5d58ca55b196d"},{url:"en/test/footer/diy.html",revision:"91345cb4157cbe4c29f7d93d008bc43e"},{url:"en/test/footer/index.html",revision:"026d15636edc74d92721c018a092f603"},{url:"en/test/footer/link.html",revision:"593698e3df7b992b739ec467226f60a1"},{url:"en/test/footer/outlink.html",revision:"2d990219fdc236780749b10b5e42c2c1"},{url:"en/test/footer/text.html",revision:"f271230f3505c4ef95af470d126a5569"},{url:"en/test/index.html",revision:"75918042f7a08fb970705a0a2f34350a"},{url:"encrypt/index.html",revision:"e53b2579e8f9bf6675c6cd1b007a523f"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"f88c8cce10a5f26b52ba9c38d0ecee40"},{url:"intro.html",revision:"a8a86e346ea81939600ea713b579e533"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"37441a173e7278dfd0ac215f60774e24"},{url:"sticky.html",revision:"92a0cc9cb142e6ffdab7cd99707c69db"},{url:"tag/footer/index.html",revision:"ff07b783f1fc9b600ae96619f8a0d085"},{url:"tag/index.html",revision:"9650cfc0542d832f3bd838be74b459e9"},{url:"tag/layout/index.html",revision:"41f9467d7b02f7acdc19b55c4650239e"},{url:"tag/markdown/index.html",revision:"0eb70926ea4e035fcb70837fa0a348b4"},{url:"test/index.html",revision:"c417bd2e2aad2ae3c33fd63231932cfc"},{url:"timeline/index.html",revision:"b9b191ec253248891e57d78c4fb17ae5"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
