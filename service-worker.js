if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-5fbcd7da"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"article/index.html",revision:"711ea1f85b4228162c1b158db201fe6c"},{url:"assets/css/0.styles.ad53138a.css",revision:"ddb13e312e04e37d46dc16541399e538"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/24.6099dbaa.js",revision:"4c893764c2ac77af3b1cc6c799840391"},{url:"assets/js/app.1af248a5.js",revision:"9aeb60219997e85e402250ad66bf27a9"},{url:"assets/js/layout-BlogEntry.c0fd084c.js",revision:"fec439869dc2a37f3366e1ca07b4bfda"},{url:"assets/js/layout-BlogEntry~layout-Layout.64dfc6b2.js",revision:"6c3faebafebef9228e657f6673255a27"},{url:"assets/js/layout-Layout.837cae07.js",revision:"4226fc1934d822502f80cbdcdf143341"},{url:"assets/js/layout-NotFound.38227b24.js",revision:"f9790346a93cfdb3b45dae7bb36f2c2a"},{url:"assets/js/page-Home.2a6a202c.js",revision:"6e19464651ada9cb71ad710801cc62e1"},{url:"assets/js/page-Markdown 增强.929b4ad3.js",revision:"e2b13a31a8292a183523af27e0110de1"},{url:"assets/js/page-个人介绍.c29a1ec4.js",revision:"9daece1261ed735c2a18dccd4b3bfbc5"},{url:"assets/js/page-内部链接页脚.8158cd0d.js",revision:"1070fa27b3247b303e35a22336541bee"},{url:"assets/js/page-外部链接页脚.986c7a15.js",revision:"e13af1e44b93e377f949f8f10696ff4e"},{url:"assets/js/page-密码测试.3d2625d7.js",revision:"306178f1864b6cc6b685301053475328"},{url:"assets/js/page-文字页脚.7afc9829.js",revision:"e07c2cf416d7ea00b54031615d9ac7dd"},{url:"assets/js/page-无页脚.5e8eaee0.js",revision:"034f7fab51e922eff2b010575d34e144"},{url:"assets/js/page-组件测试.7097b0b3.js",revision:"0713f99a6a2a7e99fac920d54fdc2d22"},{url:"assets/js/page-组件禁用.b5b1ae5d.js",revision:"42ea66c71ba67bb7e5fdd29751c6fb7f"},{url:"assets/js/page-置顶文章.b6d1ef2d.js",revision:"860b00c076a51c0d5953a99580100bd3"},{url:"assets/js/page-自定义页脚.69897fb7.js",revision:"094af31485f4894c0049508f67083173"},{url:"assets/js/page-页面信息.d9de557a.js",revision:"803d6fe94d1976dab4b5ddc7df989b65"},{url:"assets/js/page-页面布局.a1ff9b85.js",revision:"affea41fd5b23a15a9deb06c473035ea"},{url:"assets/js/page-页面配置.f1caafc7.js",revision:"9b072b13abe5e2068c1fc0f41b129fef"},{url:"assets/js/page-默认页脚.5cf07acc.js",revision:"73d94285f002d0653f56f823867920c3"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.b0545b88.js",revision:"1eb6ee42471da9d79583e358201d6e12"},{url:"assets/js/vendors~layout-Layout.fa121f1a.js",revision:"aa9450c4de509022c98ee48606c5cf82"},{url:"category/component/index.html",revision:"13c4e004e4124c5244a10ae176564010"},{url:"category/index.html",revision:"7a3189377e5f2b667d580e37a75a56b3"},{url:"category/layout/index.html",revision:"fd9364a2c475c7978d18794c35946f14"},{url:"component/disable.html",revision:"5e43d89f5b8105a5d654f7323afd782d"},{url:"component/footer/default.html",revision:"952d72abf3158ec5a1f7f4ee6404c962"},{url:"component/footer/diy.html",revision:"2c11efab53869c39b25c6a8cb1b13dfa"},{url:"component/footer/index.html",revision:"d7c3274d3dd6c8bb9552bb349297ab64"},{url:"component/footer/link.html",revision:"15665c0291c03ea814199ee663eec680"},{url:"component/footer/outlink.html",revision:"91ea0e915deac222141adedd9e5e1ad1"},{url:"component/footer/text.html",revision:"c1cb96bdd9d562ba4d27d131dfecb632"},{url:"component/index.html",revision:"ef48fdca22dec48bbba93e68436c41af"},{url:"component/pageInfo.html",revision:"6d2ecbf92adecd070375e1a6aca0dcc9"},{url:"en/index.html",revision:"1fe5819184d1deaf0727a597e15c5556"},{url:"en/test/detail/markdown.html",revision:"c5595726074abc74afa8a1ea0882984d"},{url:"en/test/detail/page.html",revision:"661d9cb4dda71a0960ba163e125cee57"},{url:"en/test/footer/default.html",revision:"1d00faadbc91e49f841ec52019537603"},{url:"en/test/footer/diy.html",revision:"2a93a17da512b94c510ffad3681e4b17"},{url:"en/test/footer/index.html",revision:"a4c9e2956c0e1978ba6e040fc6149e3a"},{url:"en/test/footer/link.html",revision:"d3e2e5f3c77c021eb6ecc5c3f90573ce"},{url:"en/test/footer/outlink.html",revision:"38e9b1622a3dd79e822d1eab8dcef11f"},{url:"en/test/footer/text.html",revision:"b87ee1373ab8ca48e95cb21f3b2337cf"},{url:"en/test/index.html",revision:"73e7bdc7eee81e4ef1b1f819ecb81ed1"},{url:"encrypt/index.html",revision:"b158c3e5a34b8282908ead47c9cd8427"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"076a17ffd0b5293a938c4d65321bc886"},{url:"intro.html",revision:"5d28e924cedd5e490d3ae000fee0d71b"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"b9e2cf89aaf9ecd040c2904d9e2ce924"},{url:"sticky.html",revision:"4b9371361a1159159e20e981bee25627"},{url:"tag/footer/index.html",revision:"04c5c5c015ddd5c2753d90bdf79fa23b"},{url:"tag/index.html",revision:"f2e88fb34ab5152a3f1680fb3cfbca0a"},{url:"tag/layout/index.html",revision:"bc9a25130eafa0e791665f5f1556561b"},{url:"tag/markdown/index.html",revision:"0956f6a3791a1d69ac391c0977dd4345"},{url:"test/index.html",revision:"ee1a05235e41d6e3c4e7895f6f9d03d6"}],{})}));
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
