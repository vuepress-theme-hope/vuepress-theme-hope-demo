if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-5fbcd7da"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"article/index.html",revision:"e99844d0d9546a4cf8077ecb61bca504"},{url:"assets/css/0.styles.5c055907.css",revision:"a09da9d7cafff5a2be0e79f5437a6f89"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/24.3b6a628d.js",revision:"c16caf44cedb8861d4fa6f3fecbe9061"},{url:"assets/js/app.7e66b2a8.js",revision:"e3618dbb3a366610f560a2653f9c4041"},{url:"assets/js/layout-BlogEntry.f65d30d4.js",revision:"602364c9aa11ff40f02143d69d6266db"},{url:"assets/js/layout-BlogEntry~layout-Layout.3a873b6e.js",revision:"726b7b405a9d332706422b5271ae3638"},{url:"assets/js/layout-Layout.a2c6c7dc.js",revision:"55dbc33aea9915ff15c6bcba4398cb21"},{url:"assets/js/layout-NotFound.337989a1.js",revision:"ed2520442a4585780b064b6e122ae0d1"},{url:"assets/js/page-Home.d040d1a6.js",revision:"2da0d6e61515c1f86ba5546cdd4023d9"},{url:"assets/js/page-Markdown 增强.101ee0dc.js",revision:"1aa986e8bfc8243bf573f1ec3cefced3"},{url:"assets/js/page-个人介绍.1c6996bb.js",revision:"f484613f704f7ebe0bfe7a4ab2b87486"},{url:"assets/js/page-内部链接页脚.32ea824a.js",revision:"5f83e7b6841000c4a726139446bbdb3e"},{url:"assets/js/page-外部链接页脚.ac019145.js",revision:"b0f00b1efadea3f733bbb2601821d970"},{url:"assets/js/page-密码测试.622db4cd.js",revision:"e014b1e974e39df6ce89d473d92c1e7a"},{url:"assets/js/page-文字页脚.6fac499a.js",revision:"bb4bbfa0fae7b4870de6a485b912dd4c"},{url:"assets/js/page-无页脚.edec846c.js",revision:"0d8ee8622f551568a63e917f5ed37210"},{url:"assets/js/page-组件测试.788abab7.js",revision:"3920236eb90f0223b7352e7b44190eb4"},{url:"assets/js/page-组件禁用.75a18d3d.js",revision:"77a9cdc085e7bcc225128c842ae84f93"},{url:"assets/js/page-置顶文章.8242c09c.js",revision:"fd1371071a316860829feb037b025647"},{url:"assets/js/page-自定义页脚.1b6ef19b.js",revision:"64a92d20ee2c3d3da65397d9642fb4f3"},{url:"assets/js/page-页面信息.10b6457e.js",revision:"588c89367fb45f7b573f390607ad0cc9"},{url:"assets/js/page-页面布局.4d5c78e5.js",revision:"83643f6159077c22a98137aabc773fd8"},{url:"assets/js/page-页面配置.3eca25cb.js",revision:"ff23860ee50a2f7510ddf83a4ee30bf3"},{url:"assets/js/page-默认页脚.b7530070.js",revision:"b0ca56d64bfcb4f4d001763a56f79fbc"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.429709e7.js",revision:"d06b3f1a3c14d295f4bc37bca80944da"},{url:"assets/js/vendors~layout-Layout.cf73b6ce.js",revision:"dc84871c70abc1e5c80006fa0cb5dceb"},{url:"category/component/index.html",revision:"5f562a537e12049d40f458d1462aa5e2"},{url:"category/index.html",revision:"0d985864a9e096bee4cc7c44edd7e896"},{url:"category/layout/index.html",revision:"13c1b6ad80668e671efa0ef1401459b5"},{url:"component/disable.html",revision:"ecbec5202c10937a0e910003c6fdaee8"},{url:"component/footer/default.html",revision:"590713489b13ed364ce496aee52985e2"},{url:"component/footer/diy.html",revision:"6967c1dc47099f696a42cfe948a579b4"},{url:"component/footer/index.html",revision:"e819fb7ff203a440a9f774fc9e0764a5"},{url:"component/footer/link.html",revision:"bd9d6c0fd8fdf4476afa92b8f0ca57bc"},{url:"component/footer/outlink.html",revision:"52f585e592189dd077da15a9a2c2be41"},{url:"component/footer/text.html",revision:"50a84d755fc4a78bd53a43d8449c1d08"},{url:"component/index.html",revision:"61e3d91ad80fb31c7bc401e47b1d1743"},{url:"component/pageInfo.html",revision:"fb45758e07400c8dd879ec56fe74d01e"},{url:"en/index.html",revision:"fa3c6120267d6ccaf743d193004daba7"},{url:"en/test/detail/markdown.html",revision:"1aa47781d233a2fc0b65df61bb0ba328"},{url:"en/test/detail/page.html",revision:"7b0cd76d35bd23c8d400ef7e40ef009a"},{url:"en/test/footer/default.html",revision:"45d1979708c8c823c8748b3e09f6a238"},{url:"en/test/footer/diy.html",revision:"a8bc3a4ebde817ecd4b73588277e51e9"},{url:"en/test/footer/index.html",revision:"f916ff8f0d27891fc5e040739d480c94"},{url:"en/test/footer/link.html",revision:"321dc3a0bd243c7bd9543ad7fbd7cd05"},{url:"en/test/footer/outlink.html",revision:"253bfd60ac5330a21a929ac1ff910fdb"},{url:"en/test/footer/text.html",revision:"d5de70be89c7e6f0478626ef941ada4f"},{url:"en/test/index.html",revision:"8a01b9a499ae18184754b921cc4b401a"},{url:"encrypt/index.html",revision:"6f888d849dd2ca3e57decd58214103b7"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"6e23ff5a6dba47040f37b84d380b65a7"},{url:"intro.html",revision:"44be379dfacf6b86f1dbcb73a286c7b6"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"39c338d19ac09bd01da2770df3e8f003"},{url:"sticky.html",revision:"5ca53b996ca5cf1130b76db5e5f09121"},{url:"tag/footer/index.html",revision:"c52adc230ddead15ee858fbd1d559a22"},{url:"tag/index.html",revision:"88442b07f351d9f6b3973a9fd3c63685"},{url:"tag/layout/index.html",revision:"3d00817f508065509bdd759cfb188854"},{url:"tag/markdown/index.html",revision:"94b780f667835befc8b580a8c5520ba1"},{url:"test/index.html",revision:"f74d1f8ea36dc11d13fbce459d4e93d0"}],{})}));
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
