if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-5fbcd7da"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"article/index.html",revision:"6218ea23aa15f35c3649ec01d588e03e"},{url:"assets/css/0.styles.104af7de.css",revision:"1e24f7aaa4d295a3e3603ffc64345e8e"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/24.47fff5f2.js",revision:"4e39ca5a778a9a80ac477bb6d77bda73"},{url:"assets/js/app.16c7e665.js",revision:"256619cdc625641d85e07a9786cdfeb6"},{url:"assets/js/layout-BlogEntry.5d04e177.js",revision:"1d2ceae39852bb728632521ca161b531"},{url:"assets/js/layout-BlogEntry~layout-Layout.62f1e313.js",revision:"c51a081383ca1d1e3034c049f94c8f5d"},{url:"assets/js/layout-Layout.7f78012b.js",revision:"ea84ce5354339ee11a485a1173b65a79"},{url:"assets/js/layout-NotFound.6ba6d19c.js",revision:"cb13ef5cd8fb45e7894e0963dfde8662"},{url:"assets/js/page-Home.fea10c11.js",revision:"c4d46cd76039e103a0ce480b44ff2941"},{url:"assets/js/page-Markdown 增强.a3a63fbf.js",revision:"cebd937dde3f8acc1d60f09e46f697b2"},{url:"assets/js/page-个人介绍.58998aba.js",revision:"489a0240106b1486666248145efee54d"},{url:"assets/js/page-内部链接页脚.dae3409c.js",revision:"aaaa002be938d16908d2b78157320c67"},{url:"assets/js/page-外部链接页脚.79f9fef2.js",revision:"dd66462d38af3bd10c55a760e5068e52"},{url:"assets/js/page-密码测试.cc7b1779.js",revision:"1c048585eccb4aa5ad72e980dfd67ded"},{url:"assets/js/page-文字页脚.ac105432.js",revision:"f1f846c2d00038373a481087d5d34578"},{url:"assets/js/page-无页脚.afd45c59.js",revision:"8e52fa46c75f325a57f7b4740a90d77a"},{url:"assets/js/page-组件测试.2f9c03c6.js",revision:"33db05568c2384701ca5b0a93d611ba2"},{url:"assets/js/page-组件禁用.15a774b7.js",revision:"350e6b9cf550e86f7c02e291a3c226d8"},{url:"assets/js/page-置顶文章.0db04fc9.js",revision:"4694bb8207837c875bb4bf6860ced4f5"},{url:"assets/js/page-自定义页脚.c2bed120.js",revision:"fb32ba2e74901723579f82dff530494e"},{url:"assets/js/page-页面信息.7319c252.js",revision:"728a40ecf81960f79ff76f4a6079a0ca"},{url:"assets/js/page-页面布局.57fa6fe0.js",revision:"f6ca952e4bf56a4ce7eaa04a52e64975"},{url:"assets/js/page-页面配置.c80bc24c.js",revision:"68aea51cdc8de43fa63adb2e500566c7"},{url:"assets/js/page-默认页脚.e3cc475d.js",revision:"33e107811a653551cf95869a6e7adfc3"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.7205e17a.js",revision:"02113e9098c25dc2952ec9820935a7a6"},{url:"assets/js/vendors~layout-Layout.c16211e6.js",revision:"75737cc9b351303ae894c57bfdccd81c"},{url:"category/component/index.html",revision:"39d1ec1e6a9e6f84a8be5c0f36d53d99"},{url:"category/index.html",revision:"4e7cabd781b4662713f0df7a43b4d10b"},{url:"category/layout/index.html",revision:"e380798537f5ee97a4fe98a6189fe0de"},{url:"component/disable.html",revision:"29a475ba8a7687d78bfbeaf842ea1697"},{url:"component/footer/default.html",revision:"29a2e2a050f4b08716b84f3212974ec3"},{url:"component/footer/diy.html",revision:"2a226e95735b865817233e586466a8e8"},{url:"component/footer/index.html",revision:"26e04b282b4adac6f724fac7b7e6d841"},{url:"component/footer/link.html",revision:"6a264c6b7a85082e7dbec92e5e24ed78"},{url:"component/footer/outlink.html",revision:"e2c04a22c4ccded23e2c349b5a59ecb5"},{url:"component/footer/text.html",revision:"e6d27d1a991b173788aea947ba6f744a"},{url:"component/index.html",revision:"47b291395cf02dd35d6ae0aec163202c"},{url:"component/pageInfo.html",revision:"c48ab0c8bf7d1d0420185b5d56a9ef6c"},{url:"en/index.html",revision:"ce30e80b3a76f8965d7adebab39ab759"},{url:"en/test/detail/markdown.html",revision:"009217147578951899ecf1fc50a6fb49"},{url:"en/test/detail/page.html",revision:"0f310b0120b37bb057419f217f1b07de"},{url:"en/test/footer/default.html",revision:"b8aba3c84e50091130560544453ac084"},{url:"en/test/footer/diy.html",revision:"eb4de5b34ef85df9058948dda50fe87d"},{url:"en/test/footer/index.html",revision:"e2e549c83919a6a5a657bc57e752aad3"},{url:"en/test/footer/link.html",revision:"e1e74a56ed7e1855beabd24d6a7897f1"},{url:"en/test/footer/outlink.html",revision:"15a940cd30299a32d63764361946d4d9"},{url:"en/test/footer/text.html",revision:"6c4544edab7b8d817c78ab9ce7eee7c1"},{url:"en/test/index.html",revision:"3b74196880cf4c0211e3ede2d1c55b0c"},{url:"encrypt/index.html",revision:"4b8b5298fc56b6d98ec9e755ff1f4171"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"e5b3a23b86053a922edaa93c29611d80"},{url:"intro.html",revision:"914f98e61ec22dfabaf944bd094a6353"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"dac346c2ccbe964385e8d78e69f90aad"},{url:"sticky.html",revision:"ae55a93268350131743ac9402c4c61c7"},{url:"tag/footer/index.html",revision:"51658b1005ad68493b2229f9386e69ec"},{url:"tag/index.html",revision:"10e74a4d72ce2c398731eae996bbe55f"},{url:"tag/layout/index.html",revision:"ea2da1f60047345a5a8241330c4c0d6b"},{url:"tag/markdown/index.html",revision:"055acc061f32c817980c22fb71fc18f1"},{url:"test/index.html",revision:"57ce38378b91d2c0e8705f57e18432cf"}],{})}));
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
