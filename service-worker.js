if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-5fbcd7da"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"0af94b80e9bd8dd750da091949b6550b"},{url:"article/index.html",revision:"24520154e311ea0ffbc0bfacb76feb32"},{url:"assets/css/0.styles.cd610b06.css",revision:"fb0f94768791523363164cbd2ee20b25"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.4e4c7b81.js",revision:"5a849d037572812d1c946f49972c845c"},{url:"assets/js/app.cb4202d6.js",revision:"0bb513ee319be5a176b5d90e81224125"},{url:"assets/js/layout-BlogEntry.a9ca5058.js",revision:"990b18a566321618c40a569d0f6ef677"},{url:"assets/js/layout-BlogEntry~layout-Layout.d37b3184.js",revision:"5eacc3cb940dfaf2d41d88a15a0b9c39"},{url:"assets/js/layout-Layout.43d686bb.js",revision:"1f2245811686e3ee0acdeda0ddb37a0f"},{url:"assets/js/layout-NotFound.f3892d4a.js",revision:"23dbac38cae0ffd882820b2031eb229a"},{url:"assets/js/page-Home.36e9fcc0.js",revision:"7a7d00a10fcc3bb3ee0cb684ac341b23"},{url:"assets/js/page-Markdown 增强.3da4e95c.js",revision:"a3a385775b2778e63e8f9bab457b9e7e"},{url:"assets/js/page-个人介绍.b0ab8894.js",revision:"8f052ed14409892fe0580b0dd971be69"},{url:"assets/js/page-内部链接页脚.403fe1c7.js",revision:"d67592e1b445921664856e922da5d91e"},{url:"assets/js/page-外部链接页脚.e2b5f476.js",revision:"63f17b59aad070e8160afd85bbad6bf4"},{url:"assets/js/page-密码测试.873a928a.js",revision:"f59bb3eb1d33ce4d470949fd0cbda3f5"},{url:"assets/js/page-文字页脚.21bfd754.js",revision:"6c8114a688aba3c3a25c77c4ea52fc2b"},{url:"assets/js/page-无页脚.c41e4544.js",revision:"054e4cd8033e3d262cd5b7b743ef8bdf"},{url:"assets/js/page-组件测试.dad38252.js",revision:"d5ed34275f870fe2019c123dd0f72120"},{url:"assets/js/page-组件禁用.02ec6cb7.js",revision:"56be5b255ff703b6b3a4d374f4d4f243"},{url:"assets/js/page-置顶文章.e2b5be8b.js",revision:"5ac0a82d55d34e3a8fec2ef5fb5eb5a1"},{url:"assets/js/page-自定义页脚.dbc86d53.js",revision:"f5ff5cfd75c03b0684987d7e1440ad57"},{url:"assets/js/page-页面信息.368b5b27.js",revision:"c42138b33486f85c6e30cc0b0559f17c"},{url:"assets/js/page-页面布局.d13120d7.js",revision:"bed2cbd13c5bee991851d4ac474475fc"},{url:"assets/js/page-页面配置.4788562e.js",revision:"de6ad72829e2a2e1758c9a088a7d0546"},{url:"assets/js/page-默认页脚.f50b7b82.js",revision:"847158f2d14a4c258c47e5ca52f7b158"},{url:"assets/js/vendors~layout-Layout.32c4730b.js",revision:"06c09498a92f486498e6d795d0ad4201"},{url:"category/component/index.html",revision:"311fce068ecae2002d3e2c75ca663d92"},{url:"category/index.html",revision:"87f464e6bc342d1ca22be45b0ff6fc0f"},{url:"category/layout/index.html",revision:"d1003c57d89adbed8f734870ff1dad8a"},{url:"component/disable.html",revision:"14b48bf4758e16efe125b31a99620d44"},{url:"component/footer/default.html",revision:"c7f6d42d873b43057753ebdf68f2c4be"},{url:"component/footer/diy.html",revision:"a967e6505f41e055aba066373cad8e1b"},{url:"component/footer/index.html",revision:"aba84ad9c0c9d627553134e70df3646f"},{url:"component/footer/link.html",revision:"5667c22f463da00f0324b29ac9e94ecc"},{url:"component/footer/outlink.html",revision:"4511d8452cf56f071157a97d807bfc0d"},{url:"component/footer/text.html",revision:"c2860ac393890d90b1728d4181666537"},{url:"component/index.html",revision:"b9112ee60710a30457f942fa3a5548f7"},{url:"component/pageInfo.html",revision:"d03851dba0097fcbba60609d91ee6cff"},{url:"en/index.html",revision:"7a8c3d75c74c71b50bbbb5416c71b4d4"},{url:"en/test/detail/markdown.html",revision:"09b7cfb568eb393a93fffbbd864978fb"},{url:"en/test/detail/page.html",revision:"b34ea9f791567c7c46debb3158d41e1f"},{url:"en/test/footer/default.html",revision:"e1a79f0ed27cadda889b550197b7e78e"},{url:"en/test/footer/diy.html",revision:"eb9903784b4d936f4fb53389a1af56c6"},{url:"en/test/footer/index.html",revision:"8d96fe7409e35036af16c4b7040ce4a6"},{url:"en/test/footer/link.html",revision:"78a4b249223d91b8d1affb3dffc7b930"},{url:"en/test/footer/outlink.html",revision:"ad054f82247f337275421ee0027cc18c"},{url:"en/test/footer/text.html",revision:"31b720886515d8747ac260bef4b70cd4"},{url:"en/test/index.html",revision:"6673757dc7f147752e61e1c94a14eaf8"},{url:"encrypt/index.html",revision:"1d2adc31f1947611dfb96df80af40645"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"aa9205bed3bb265bd99d498c5fcfe613"},{url:"intro.html",revision:"ef243108997c072d9f85066de266347d"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"47f8b8028d7500e2f3a0e99ad386d1f4"},{url:"sticky.html",revision:"d6fdd392fa59ccb38ef820fd66cb0036"},{url:"tag/footer/index.html",revision:"9683efa52229904004da61b57989b7f6"},{url:"tag/index.html",revision:"b7081fc2861ecf60e3271b2563a88cb6"},{url:"tag/layout/index.html",revision:"c8c2c06c07b361a9a2209e9d5cf404d9"},{url:"tag/markdown/index.html",revision:"fc1d20835026ff6fe97621d4f0145c19"},{url:"test/index.html",revision:"f137e76cbb2f4eac87bfcc2f686a12ce"}],{})}));
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
