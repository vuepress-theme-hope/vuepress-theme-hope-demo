if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"20225e7c8157218f093300fa8d00044d"},{url:"article/index.html",revision:"2c3eeb4995dee8dc69e03c5df494684d"},{url:"assets/css/0.styles.c9ef85de.css",revision:"84e4bc45760a9c38e2a7caa45bfa0be6"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/25.d30f8a5d.js",revision:"d4039827f1e8c4c533c750bb7701053f"},{url:"assets/js/app.90b55dcf.js",revision:"50e5b110a1140ec829863e6a45af615e"},{url:"assets/js/layout-Blog.0cc7d912.js",revision:"cfc347d40e617c553dcf924b19f133d3"},{url:"assets/js/layout-Blog~layout-Layout.bdd8d3de.js",revision:"862cc93f9d51328deb8c72bd39b17169"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.7080ca37.js",revision:"e50390af469142114d5635fe4f511eda"},{url:"assets/js/layout-Layout.6535b7c7.js",revision:"d28fbbcab3021db05e568634a88020a8"},{url:"assets/js/layout-NotFound.b4be3e3a.js",revision:"38701cf6bed02db807016b2f56c71b07"},{url:"assets/js/page-Home.eb24a45a.js",revision:"c1c5a18c82d4551434ca2fdbb6d88f6f"},{url:"assets/js/page-Markdown 增强.2351240d.js",revision:"84cad5fc123525e06b2cda1755e02b1e"},{url:"assets/js/page-个人介绍.2e341e51.js",revision:"393f56b9458b0bd08ee1ef0be32ea75d"},{url:"assets/js/page-内部链接页脚.d1b286a0.js",revision:"a5028b77cf925bf61c7aaa08fa379bee"},{url:"assets/js/page-外部链接页脚.6972d265.js",revision:"338c7aac1ab7223aa55a54c3e0a80ce7"},{url:"assets/js/page-密码测试.7ddb35b3.js",revision:"ac203f69a9bdee3f3e0a9f22082bcbd7"},{url:"assets/js/page-文字页脚.ca49ee28.js",revision:"f271dd4a553a0f331fa184b0d12ba3a8"},{url:"assets/js/page-无页脚.471bdcb2.js",revision:"b4ddb081baea4d645f053beae5e523e5"},{url:"assets/js/page-笔记列表.315f28ca.js",revision:"9ecc1b41c4f482bcd855f9bfce5a4919"},{url:"assets/js/page-组件测试.8f0b9a1a.js",revision:"85fd3c7bcb1c81f5a7e6b3df6d888abf"},{url:"assets/js/page-组件禁用.793618e9.js",revision:"b692f2c211f8ce81cb585e2d0327dccf"},{url:"assets/js/page-置顶文章.f1556341.js",revision:"bd93c41a1c6a7715faf7527e1cace5fa"},{url:"assets/js/page-自定义页脚.eb3bbd51.js",revision:"0f9e8f274f4326fb0be65cf971931c08"},{url:"assets/js/page-页面信息.67dde7b2.js",revision:"66151bca5856e83b81a24a56091e2911"},{url:"assets/js/page-页面布局.b7327424.js",revision:"cd9989c20b8672073c86bf05808ba992"},{url:"assets/js/page-页面配置.0ea8a7d4.js",revision:"0aaaf5ca45c5715aab53312d0ba51245"},{url:"assets/js/page-默认页脚.34b513b2.js",revision:"3c29185eeb1d636afc5ac1e9411db225"},{url:"assets/js/vendors~layout-Layout.313dc57e.js",revision:"f36cabfdc31591b1be751a8f097756c5"},{url:"category/component/index.html",revision:"5f3498964dccdda40d058940be536383"},{url:"category/index.html",revision:"9186d03cac8e32bcc738a66ae02d1fc9"},{url:"category/layout/index.html",revision:"acefd49027c4d5b44722064e3e608b1d"},{url:"category/note/index.html",revision:"66a7698b768efa1627e63e12a15bac30"},{url:"category/note/page/2/index.html",revision:"40ba4295e3bf17c46adb878f14e08f71"},{url:"component/disable.html",revision:"b0746f29accc3daaa259ca8785d5f759"},{url:"component/footer/default.html",revision:"b23ea49d4f22b974a929e85386ce8d03"},{url:"component/footer/diy.html",revision:"919f1d183bd9f0de7e5e51364c1aa45a"},{url:"component/footer/index.html",revision:"ab8068eb8fd8f3ac2a0de5d7a8811f9c"},{url:"component/footer/text.html",revision:"3e8707ffa87ceceb40b98d270f5017d2"},{url:"component/index.html",revision:"1a3a1d814f2c37737ef338dacf4745c6"},{url:"component/pageInfo.html",revision:"bd6d94558294d35f1562931259a44167"},{url:"en/index.html",revision:"721e1097bf8f6f6d870694861acee5d8"},{url:"en/test/detail/markdown.html",revision:"c85f1087b6c6023f12f204355e665726"},{url:"en/test/detail/page.html",revision:"f50c998f6e3820b5f6d8fcde0d7ce0d6"},{url:"en/test/footer/default.html",revision:"46cde649e9fe30ea3ac1ef6bd3112ac3"},{url:"en/test/footer/diy.html",revision:"b8c9fa9a0bca57e519abaa4e402b7420"},{url:"en/test/footer/index.html",revision:"5f2b4e2587470142c6461ae04e41ab18"},{url:"en/test/footer/link.html",revision:"9df8be62c7055673f4a9df0b45604489"},{url:"en/test/footer/outlink.html",revision:"3f807bd8fde3c8d3182e1f82006126b5"},{url:"en/test/footer/text.html",revision:"ec8963f50c575ee674dd24947412f440"},{url:"en/test/index.html",revision:"b0313efe6cc0e11041ab4212ea4bbed4"},{url:"encrypt/index.html",revision:"7c4d77f8735ee6f6e1338d36a61cfbd2"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"914de78d438dc5867e63b4c67a5c3002"},{url:"intro.html",revision:"efc1ac107971994f097c9951d43cf22d"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"8bd9d712886dbd47c6213c2ed6d51467"},{url:"notes/1.html",revision:"081c68ef4392c3e22ccd1f6af516ae1a"},{url:"notes/10.html",revision:"d2d98dbb1edabd704fdfbe084dd0e101"},{url:"notes/11.html",revision:"ceb62e2d0672a39198af33b2ac06009f"},{url:"notes/12.html",revision:"054a287725d8bc0d5036068d433437a5"},{url:"notes/2.html",revision:"159d0b8908fcc160558638f5ca9fc9c3"},{url:"notes/3.html",revision:"be863d969ddc12186600e73a3d4bcd86"},{url:"notes/4.html",revision:"ed67321d8a317c406393544dbe500c65"},{url:"notes/6.html",revision:"bbdcf5cd9130b11ec30424c9e3b85fa1"},{url:"notes/7.html",revision:"bbb7acc9d6707387116870926098eeeb"},{url:"notes/8.html",revision:"261287513c5bf53165a00d8e62e7d999"},{url:"notes/9.html",revision:"f4ddd2d116a58a790db67861ea737f31"},{url:"notes/index.html",revision:"8931cddc522d4e2ac25a4c1f5e8101a5"},{url:"sticky.html",revision:"c0d55f87e41f4258b3e4e9df74c36b8a"},{url:"tag/footer/index.html",revision:"2eab9f2eb71048980442296d2b19bbd8"},{url:"tag/index.html",revision:"ab100aa2cdb9b1230fc62ed8da8ce55b"},{url:"tag/layout/index.html",revision:"b067df84b51df7b6d6bf89edec5e8f0c"},{url:"tag/markdown/index.html",revision:"63e647d28449969c1954f43456b0c3b5"},{url:"tag/note/index.html",revision:"fbe81ca90673fcf9c690a50eb1a90770"},{url:"tag/note/page/2/index.html",revision:"a830edfaed00a52ac19280029df6f890"},{url:"test/index.html",revision:"1337a320e2a1cf477f0eb830b2eeeb61"},{url:"timeline/index.html",revision:"e2cafd0c24ebb717fb1458526bf0b1a2"}],{})}));
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
