if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-5fbcd7da"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"article/index.html",revision:"c25392f8af5a063237b2bda9a4540508"},{url:"assets/css/0.styles.6b948419.css",revision:"0e8eb14f7b7f30d7f8cde1d70b95d5fb"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/24.6099dbaa.js",revision:"4c893764c2ac77af3b1cc6c799840391"},{url:"assets/js/app.23daea75.js",revision:"577370892bf201d436444f833609d51e"},{url:"assets/js/layout-BlogEntry.12194801.js",revision:"f1da4fdfa2bf1b27b3d701caf04c638a"},{url:"assets/js/layout-BlogEntry~layout-Layout.c46900ca.js",revision:"fc0a253bd1dce116339359a36bae69fb"},{url:"assets/js/layout-Layout.140aa612.js",revision:"afc8bea029e7e4d25db358d4bb61bb53"},{url:"assets/js/layout-NotFound.c82386df.js",revision:"567e7384bc54f996c20425584059d69a"},{url:"assets/js/page-Home.c6277b86.js",revision:"3a85ab3c79d29925e00e243396943b06"},{url:"assets/js/page-Markdown 增强.6651f8b7.js",revision:"5a280e141936a479a18353ac676be2ae"},{url:"assets/js/page-个人介绍.2522ca02.js",revision:"725bd4666e2d98a861efea1d9917bf69"},{url:"assets/js/page-内部链接页脚.afde32a8.js",revision:"13627c4687c4e598e910bd3999d3c5af"},{url:"assets/js/page-外部链接页脚.d821c7e2.js",revision:"4c5e30e6dfe73d414e8da681889bb1ac"},{url:"assets/js/page-密码测试.4872f04d.js",revision:"8441270eda52b504327260f3ec2a8434"},{url:"assets/js/page-文字页脚.12e9d228.js",revision:"aac2324aa619d381bb0c775a3a06b918"},{url:"assets/js/page-无页脚.9c3b9c44.js",revision:"fcde2411778f8e1e701b365b5428e49d"},{url:"assets/js/page-组件测试.d39d6bef.js",revision:"0ded65a1a836ec811cc3c35fe5b8a79d"},{url:"assets/js/page-组件禁用.7aa6e2a9.js",revision:"01d21a5cdddae23dbc48deaec6fc6efc"},{url:"assets/js/page-置顶文章.dbb6d95a.js",revision:"2df46f4f32d1198483363430c9a38cd4"},{url:"assets/js/page-自定义页脚.583b3011.js",revision:"31f4aabb30421becf41dbed3dcf1bbb4"},{url:"assets/js/page-页面信息.4f02d992.js",revision:"fa0945bec1ee24344c58d0acb4fbbe02"},{url:"assets/js/page-页面布局.ad95542a.js",revision:"4cd5d5685edc279f25b04756139caf27"},{url:"assets/js/page-页面配置.3d91da41.js",revision:"d806cd4f7090fba58b245f47d2a66539"},{url:"assets/js/page-默认页脚.efdfaf1f.js",revision:"ef4fec5205f9f4a0f025b1a895763d33"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.0b584163.js",revision:"d0dd22e8a3467bd0681e95d7a9aab819"},{url:"assets/js/vendors~layout-Layout.1caf1f55.js",revision:"ee276ef0e9f1973305f156b8c3467f4c"},{url:"category/component/index.html",revision:"c1c1e13c48dad9f8f802099baf714df0"},{url:"category/index.html",revision:"dfd9e3487b220ad6c1baccc676d6bcd4"},{url:"category/layout/index.html",revision:"69a1f2b4776720b35fdb3528367af72b"},{url:"component/disable.html",revision:"c74310349e66a48463c32331393242cc"},{url:"component/footer/default.html",revision:"a95cf1d2b7c9041b0f57082053c79ef2"},{url:"component/footer/diy.html",revision:"b20e1b70dbcd26276a387566edca6c33"},{url:"component/footer/index.html",revision:"7df4a59afcfb7f9f53a34661844e9221"},{url:"component/footer/link.html",revision:"c21a4ea052d38afcb6fa2d6258034a10"},{url:"component/footer/outlink.html",revision:"2c2447a17d41beeeeb0d6d4622d806e9"},{url:"component/footer/text.html",revision:"3139ce5a995f2d1f93c65568b757fff5"},{url:"component/index.html",revision:"3911eb5a43d66d314d5c7a2cd84e3e35"},{url:"component/pageInfo.html",revision:"5b5a677bc68aad5e313484b1477e8050"},{url:"en/index.html",revision:"41f0ea49fba147e53c545f40207d4df4"},{url:"en/test/detail/markdown.html",revision:"cf2bf195a69393b3b8802816fba631d3"},{url:"en/test/detail/page.html",revision:"4f20163f5bb80a00b43648ce4be2f412"},{url:"en/test/footer/default.html",revision:"513ff557785090da3b6bd4982375cb31"},{url:"en/test/footer/diy.html",revision:"aa1d5320eb4b50923ccf8a2a0d4751f4"},{url:"en/test/footer/index.html",revision:"f433c9e33fdaa2ad5d8c73d61891e506"},{url:"en/test/footer/link.html",revision:"226fc6c8c3a48b2806d7e5764066ae66"},{url:"en/test/footer/outlink.html",revision:"b24deafdd43d5452759a1197c9670009"},{url:"en/test/footer/text.html",revision:"3eeee46dabf2f2efa6b10cb6d0c00636"},{url:"en/test/index.html",revision:"7c75a91bcc3c56b0262c2886763e8d99"},{url:"encrypt/index.html",revision:"fbf4ce0a627c97d0a3fb5e08f46c977b"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"b29a6dc197dafd4297991c8915437255"},{url:"intro.html",revision:"3a7a513db8033f32e81f1dbf046ea081"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"6eca731791ceda88b9b00f53140626c8"},{url:"sticky.html",revision:"5570f40298504baaeb016674d6195146"},{url:"tag/footer/index.html",revision:"82f31d601a5700b9d1d57b90a563d673"},{url:"tag/index.html",revision:"ce7d355213f6b3f45415b4c8687f2bbf"},{url:"tag/layout/index.html",revision:"c69a188195153b3a825408a37bea6001"},{url:"tag/markdown/index.html",revision:"603297ef797ec0b4ed3e8c41d0bfa569"},{url:"test/index.html",revision:"636bf5478684795942083c1673a950cf"}],{})}));
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
