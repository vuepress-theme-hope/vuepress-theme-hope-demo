if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"f0acad8fe9fe1b2c2b57b3cc687064c6"},{url:"article/index.html",revision:"276a370e3801017beb5ace4ae0bed31b"},{url:"assets/css/0.styles.290268da.css",revision:"f7f162d24b14988c058d97c8c504a85d"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.6938a3f6.js",revision:"3c3cedb5930794f9cb8e766bb66020e5"},{url:"assets/js/layout-Blog.bb32b699.js",revision:"0cecf95cb2a451a6525c8182517edc38"},{url:"assets/js/layout-Blog~layout-Layout.c4492564.js",revision:"94064f22260a2214b072bc5b178107e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.83e7bbc2.js",revision:"14852536d352d679fb3bc259501502db"},{url:"assets/js/layout-Layout.87afafc9.js",revision:"1d03fbf6badb0393bf8b7bdd5ab1d9ba"},{url:"assets/js/layout-NotFound.69a219f3.js",revision:"599367be3fada65ee8ad3dee535646d7"},{url:"assets/js/page-Home.caf5c7d2.js",revision:"71e44954fd6d72d8faf0f95618766f66"},{url:"assets/js/page-Markdown增强.f44771b6.js",revision:"776b00850c8573bd3e3e038e8c564cd4"},{url:"assets/js/page-个人介绍.5e539198.js",revision:"5168d5aa506851eab4bde3462c373731"},{url:"assets/js/page-侧边栏auto.90eda288.js",revision:"adbe9d8afab2ae0f50f51a89a1cb636f"},{url:"assets/js/page-内部链接页脚.2486906a.js",revision:"f9d43bab8faa76a2def08ad0a1102d10"},{url:"assets/js/page-外部链接页脚.98fd8d9b.js",revision:"672b005efbee1df705a4047777ff6d8d"},{url:"assets/js/page-密码测试.6c1a39dc.js",revision:"0b59bb8b0988631e3acb6a5706481867"},{url:"assets/js/page-文字页脚.dea03bd8.js",revision:"d32c70dc6225a901da8b5ae697381dc9"},{url:"assets/js/page-无页脚.1687be48.js",revision:"4176926a94dee87b1b2993b1b3d4cad9"},{url:"assets/js/page-笔记列表.53830be2.js",revision:"8652403fc2f75b98fd07031ef09f24e7"},{url:"assets/js/page-组件测试.ef8b732d.js",revision:"6f1ef5594082b50d3f43b2cbb5219d04"},{url:"assets/js/page-组件禁用.0119930d.js",revision:"5db691c46df5e5cd888ce9b930485444"},{url:"assets/js/page-置顶文章.a0843eba.js",revision:"b18226acddae810a1ad0c41d26bbc16d"},{url:"assets/js/page-自定义页脚.b069e4f4.js",revision:"d21c5f7b627f888dfeaf217e9549d9a3"},{url:"assets/js/page-页面信息.d3d8f8bf.js",revision:"7c37075ef56394814490c899a4f1cc7b"},{url:"assets/js/page-页面布局.d897ebe9.js",revision:"90d647f580cbbce180f345e05bc65bcd"},{url:"assets/js/page-页面配置.88abe2f4.js",revision:"b88780f5f488ab599ce005b91ee0ce5b"},{url:"assets/js/page-默认页脚.36ba0e1a.js",revision:"5de9955be830a4885fa49b98ba9f1813"},{url:"assets/js/vendors~layout-Layout.c1d4246f.js",revision:"9a1646b1806ca402884a8c47e4e2022f"},{url:"category/component/index.html",revision:"ff6b13d25bdf6781472cc528fb77b8e6"},{url:"category/index.html",revision:"945308bed664f8cf7b5c9a57ce8ec59f"},{url:"category/layout/index.html",revision:"8244b663d818a28ed5e3eea60a12f144"},{url:"category/note/index.html",revision:"aaa58e4565a6fce69374e4d524756575"},{url:"category/note/page/2/index.html",revision:"808ef3d86f3f599d7d9d2078f1180b33"},{url:"component/disable/index.html",revision:"4a3f506bc67e9f15ce6c644eea317393"},{url:"component/footer/default/index.html",revision:"7183898700c45be78dfaec27b4d69e2f"},{url:"component/footer/diy/index.html",revision:"5b9f3877f6ea8ff1f9126619ee9b7472"},{url:"component/footer/index.html",revision:"4fe1b02ae78858514703feaebd402568"},{url:"component/footer/text/index.html",revision:"36fb90c559bd53bb5c0b0e93dde7abed"},{url:"component/index.html",revision:"f3fbd6f1e1b2d4fc3587ae4f9c650cf6"},{url:"component/pageInfo/index.html",revision:"a186cf57e13e5456bf6f4938b5c1c6ec"},{url:"en/index.html",revision:"722752efa3c20b9af97fc774161ccdc6"},{url:"en/test/detail/markdown/index.html",revision:"32163a8db75131abebd64f96814690c2"},{url:"en/test/detail/page/index.html",revision:"4008348a330f936619dac12c70aba0d7"},{url:"en/test/footer/default/index.html",revision:"03492b221b18b211fbd6a83a85e65927"},{url:"en/test/footer/diy/index.html",revision:"cde0bf8fc806235bcf75c631ccaffbe6"},{url:"en/test/footer/index.html",revision:"96bba574c50ed120cd685ec344f477b5"},{url:"en/test/footer/link/index.html",revision:"e141ba5d736b83ebc092d51b331b281b"},{url:"en/test/footer/outlink/index.html",revision:"bc62e7787edd641b8752d70c30f41ab8"},{url:"en/test/footer/text/index.html",revision:"12e482d77c0857580786e8fd415d2675"},{url:"en/test/index.html",revision:"f1ab9c0fcac369bee9c48358bc6c13e3"},{url:"encrypt/index.html",revision:"0fcef8d8abb1d4a9d7a4947f50367c31"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"042b5f073e114bf41c96dd17559f97d5"},{url:"intro/index.html",revision:"2d5b44d7590e4b3156c2a0e809e0bc44"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"7afb25168c8b35c0c2dcd5adda7e727c"},{url:"notes/1/index.html",revision:"b7e6e731882f636668412a0205b71eba"},{url:"notes/10/index.html",revision:"0c74422b5fc8e635e82f6ad2eb2b720c"},{url:"notes/11/index.html",revision:"81e9c9bf5f15630f512273c3a920f34d"},{url:"notes/12/index.html",revision:"10de412ab0cfbbdf2ea88b00b7cfb100"},{url:"notes/2/index.html",revision:"6a80914e876990ae600c41430ea945d1"},{url:"notes/3/index.html",revision:"cbc01b9bfb8fa615a4d42d61b7017805"},{url:"notes/4/index.html",revision:"badec58f5c64f8eeb9a0cbb2740ffdd8"},{url:"notes/6/index.html",revision:"4e3e9ac89386cfe8607267bb48503db3"},{url:"notes/7/index.html",revision:"f377db440d397a6ba3566f8ae3f67f0d"},{url:"notes/8/index.html",revision:"6d98ea9c23cb8bfdb0b210ac6f25ab45"},{url:"notes/9/index.html",revision:"1be67079c91660699fe0b0937921c459"},{url:"notes/index.html",revision:"960db8432bbfcd5f78044404f0174e51"},{url:"sticky/index.html",revision:"f8e8a38a66ac65306e87346619dd67d9"},{url:"tag/footer/index.html",revision:"24f1615c0272d7c4e96eced8a4f31750"},{url:"tag/index.html",revision:"9cc02087d2c4efaba8bec37cac62d2ab"},{url:"tag/layout/index.html",revision:"8a69e6131c154aea41a95c32e6d7bce9"},{url:"tag/markdown/index.html",revision:"ca9a4593933f3e7135e87d4b4f2cd80c"},{url:"tag/note/index.html",revision:"a780f33599be0ac3774ba67f04d509ec"},{url:"tag/note/page/2/index.html",revision:"cdd8815dba1fb209734e78b6b13b6e0b"},{url:"test/auto/index.html",revision:"3e71b18d290c9e1dba6b0d7e29687cee"},{url:"test/index.html",revision:"eb9f2a4e23d4ce6e4f329d07aadb389b"},{url:"timeline/index.html",revision:"f5c3bacf700d6548270a99c0871c7dfb"}],{})}));
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
