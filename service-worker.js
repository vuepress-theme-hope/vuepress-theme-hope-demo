if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"e9cacaada94e7d070c45625f65effb31"},{url:"article/index.html",revision:"d0b3c7a51e5c5a789cff94e5e791258e"},{url:"assets/css/0.styles.c7c582a3.css",revision:"8e3d6e0263d26f404a2b06b2fff107e1"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/25.d30f8a5d.js",revision:"d4039827f1e8c4c533c750bb7701053f"},{url:"assets/js/app.38cfb3bd.js",revision:"6314fc82a58f8bcacc5730c9b3ef0b6a"},{url:"assets/js/layout-Blog.1d522e31.js",revision:"cfc347d40e617c553dcf924b19f133d3"},{url:"assets/js/layout-Blog~layout-Layout.7d1f1f9f.js",revision:"712799c46979d767176b18af4ad5b7a6"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.a5d860a8.js",revision:"7d378f2e3234c26a69dfa95d72fea4bd"},{url:"assets/js/layout-Layout.e63511b8.js",revision:"19f4dfc5d496be7b5bd02064e67cbdfc"},{url:"assets/js/layout-NotFound.bf72c24e.js",revision:"38701cf6bed02db807016b2f56c71b07"},{url:"assets/js/page-Home.eb24a45a.js",revision:"c1c5a18c82d4551434ca2fdbb6d88f6f"},{url:"assets/js/page-Markdown 增强.2351240d.js",revision:"84cad5fc123525e06b2cda1755e02b1e"},{url:"assets/js/page-个人介绍.2e341e51.js",revision:"393f56b9458b0bd08ee1ef0be32ea75d"},{url:"assets/js/page-内部链接页脚.d1b286a0.js",revision:"a5028b77cf925bf61c7aaa08fa379bee"},{url:"assets/js/page-外部链接页脚.6972d265.js",revision:"338c7aac1ab7223aa55a54c3e0a80ce7"},{url:"assets/js/page-密码测试.4fe24a9c.js",revision:"7e868cdc4c0a01cb54f792217e30a1c1"},{url:"assets/js/page-文字页脚.4adb3b95.js",revision:"7024172ca4c076e2d0d940772635ce16"},{url:"assets/js/page-无页脚.471bdcb2.js",revision:"b4ddb081baea4d645f053beae5e523e5"},{url:"assets/js/page-笔记列表.315f28ca.js",revision:"9ecc1b41c4f482bcd855f9bfce5a4919"},{url:"assets/js/page-组件测试.8f0b9a1a.js",revision:"85fd3c7bcb1c81f5a7e6b3df6d888abf"},{url:"assets/js/page-组件禁用.793618e9.js",revision:"b692f2c211f8ce81cb585e2d0327dccf"},{url:"assets/js/page-置顶文章.f1556341.js",revision:"bd93c41a1c6a7715faf7527e1cace5fa"},{url:"assets/js/page-自定义页脚.eb3bbd51.js",revision:"0f9e8f274f4326fb0be65cf971931c08"},{url:"assets/js/page-页面信息.67dde7b2.js",revision:"66151bca5856e83b81a24a56091e2911"},{url:"assets/js/page-页面布局.43ec0569.js",revision:"e7d4ab8c2e69ebc3643ffeef3b6c783f"},{url:"assets/js/page-页面配置.0ea8a7d4.js",revision:"0aaaf5ca45c5715aab53312d0ba51245"},{url:"assets/js/page-默认页脚.34b513b2.js",revision:"3c29185eeb1d636afc5ac1e9411db225"},{url:"assets/js/vendors~layout-Layout.313dc57e.js",revision:"f36cabfdc31591b1be751a8f097756c5"},{url:"category/component/index.html",revision:"3e185c3860c9a8ed6a2a3ef6ac562b59"},{url:"category/index.html",revision:"00cd7295b9b085ca9437aa8092b55703"},{url:"category/layout/index.html",revision:"9ef9cdb6f3080b3bc94eca4c71cf2d89"},{url:"category/note/index.html",revision:"8ee3341a247f0b77267484e8bb1956d7"},{url:"category/note/page/2/index.html",revision:"3694e6655349ab2231c9af87a572041c"},{url:"component/disable.html",revision:"35a21661335d837a7e2cc6668319f8ed"},{url:"component/footer/default.html",revision:"81d98896021ebde665e4c9692ffbc349"},{url:"component/footer/diy.html",revision:"0ec2617ef1c28f5ce643100fc19896f0"},{url:"component/footer/index.html",revision:"e5892831215287a72cf03a4bf0afd451"},{url:"component/footer/text.html",revision:"ef1384a08480d71835f669537c198b3d"},{url:"component/index.html",revision:"ceaacdcc5b4fdc8cc6e0716ad1f7e6de"},{url:"component/pageInfo.html",revision:"8d58677de7a0ab51167783ae8b481edb"},{url:"en/index.html",revision:"e07d1547c4f884e152f93ee2262e2f24"},{url:"en/test/detail/markdown.html",revision:"bfe78f7afead159996cb39cadebca61a"},{url:"en/test/detail/page.html",revision:"1adcb5280c53e9c7d9ff848c6ad2bcd6"},{url:"en/test/footer/default.html",revision:"f30e535d2023bb044658e99eae55e27d"},{url:"en/test/footer/diy.html",revision:"cd4f98c46aa0921bc9462631e500e245"},{url:"en/test/footer/index.html",revision:"c4e8d865064d7d7d22634bdb0f80b1a4"},{url:"en/test/footer/link.html",revision:"dc2c8d6260db8ad2850e493da147b0a0"},{url:"en/test/footer/outlink.html",revision:"9c0ec779659a3d355c9eb0802e8bfe46"},{url:"en/test/footer/text.html",revision:"dd10e104f4709496484f82744bf925f0"},{url:"en/test/index.html",revision:"3df5b5364ac4255a94d936938f5c1aac"},{url:"encrypt/index.html",revision:"6b66c3a65918dd644c5658cfd8e69d25"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"25feffc443f6039b8f2f948cc4cbd31f"},{url:"intro.html",revision:"1b1a898bf4362d2fda9fcf395329b8cc"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"cbc37a3f64abb71c113ed76be10d016a"},{url:"notes/1.html",revision:"7afa5006925354ed70eea1e2acd38660"},{url:"notes/10.html",revision:"576a1748a8327086e6ff5ae159995035"},{url:"notes/11.html",revision:"80a0ce56d22d6fca6bcd906114066823"},{url:"notes/12.html",revision:"6613dfd228298d2907666bbd3190d87d"},{url:"notes/2.html",revision:"8784d182b8b9be814d2d2b3863f54d63"},{url:"notes/3.html",revision:"404cb232a214065ced7ff3b835f1bd5f"},{url:"notes/4.html",revision:"95ad289951586ca04e81af4a5194f662"},{url:"notes/6.html",revision:"58ee1ded8826b28889c82525c3004517"},{url:"notes/7.html",revision:"6cf96ca05e210d1b04ef5e853ee8764c"},{url:"notes/8.html",revision:"2b47fda16835382b8520f9873631e7ef"},{url:"notes/9.html",revision:"8f223131bd987abff453b4e64d8d2bf8"},{url:"notes/index.html",revision:"11be2738166a284325e1eaf11ad8d4d9"},{url:"sticky.html",revision:"be4c977afde5b80b04636df08b9a6d81"},{url:"tag/footer/index.html",revision:"79e72b8763b43b55947d4c3a8b558734"},{url:"tag/index.html",revision:"1e844327d69f8ca3b6b9e6fd382d221c"},{url:"tag/layout/index.html",revision:"f10c44a8ec20025545fdbbb256a2bc08"},{url:"tag/markdown/index.html",revision:"4217c31b8a29124c927006cea6b74e79"},{url:"tag/note/index.html",revision:"a6fb5d853ad8a4bf0899cc34c0178a59"},{url:"tag/note/page/2/index.html",revision:"55ffc83312b45fba66bf17420cd9f70b"},{url:"test/index.html",revision:"cc7637fe5a34fe205dcc429db003cfc2"},{url:"timeline/index.html",revision:"3b57acb74f74bc8fdd093cd48302edb8"}],{})}));
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
