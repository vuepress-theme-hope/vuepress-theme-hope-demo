if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-e8e31499"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/css/0.styles.14820c78.css",revision:"5b35412f797af25dee0b7403d9b081c0"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/22.079ff694.js",revision:"dd3e82ae0bdb7ec1e8a57dc88c00de44"},{url:"assets/js/app.a92f0513.js",revision:"e8c242ccc20b521c09c4c799b8dc1b09"},{url:"assets/js/layout-BlogEntry.d38c836e.js",revision:"27f45bb658754ac86c118cf788c6794b"},{url:"assets/js/layout-BlogEntry~layout-Layout.2ce6e729.js",revision:"c7657b79154e96d41eebab58139f6b7e"},{url:"assets/js/layout-Layout.0003a638.js",revision:"97b1880d5d53a916e8d990a3956c561b"},{url:"assets/js/layout-NotFound.592269b9.js",revision:"4090749c2de9642599d733bc8bf6b073"},{url:"assets/js/page-Home.f83e45e0.js",revision:"b1e27593a36251e319a8594a4c8a6269"},{url:"assets/js/page-Markdown 增强.8582430f.js",revision:"1016abfa63d0aa2ce657c7b95cb1238f"},{url:"assets/js/page-内部链接页脚.d57067b6.js",revision:"263f17d58691c5085ebe4596f34ccab5"},{url:"assets/js/page-外部链接页脚.0a20b179.js",revision:"1a385c82863f2274c655c3b96e2a4517"},{url:"assets/js/page-密码测试.2b9307ed.js",revision:"c9600daf3c6b9dd7f6b28c24399cafc7"},{url:"assets/js/page-文字页脚.3356dedd.js",revision:"b53d917fa803a1bf3f81ee31ede92f5a"},{url:"assets/js/page-无页脚.1526cb96.js",revision:"57f79b6b61a6683c52dee9c99711122f"},{url:"assets/js/page-组件测试.d2feff21.js",revision:"ba6b04f2eb01fcc5454454768f8c81b0"},{url:"assets/js/page-组件禁用.8024cfba.js",revision:"b5c4352399cf6436fc0f93d930208a89"},{url:"assets/js/page-置顶文章.2ca89663.js",revision:"16d546d58324f76c4621ad8b8ec79ec8"},{url:"assets/js/page-自定义页脚.93e67114.js",revision:"9132200168d0d36b9657069ae617a2d4"},{url:"assets/js/page-页面信息.56cffc05.js",revision:"e169c1929e052232ffe9c2fce09ab0a8"},{url:"assets/js/page-页面布局.13c0daa7.js",revision:"62be0febee0235cb874ffa964435fcae"},{url:"assets/js/page-页面配置.97e86b8b.js",revision:"1ef97d9df971c9e7671ab0a0a7e9b95a"},{url:"assets/js/page-默认页脚.4cca9dc6.js",revision:"01a380d84c57eadd88bda67411f9748d"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.bae9ebcb.js",revision:"9d9e89844e5f60242e58808b60c78b84"},{url:"category/component/index.html",revision:"1039bd5adb44f9bdd69f85e64608fae7"},{url:"category/index.html",revision:"f6ad412515ed4f58755181a122f853a1"},{url:"category/layout/index.html",revision:"59bb13fa0d3921b7138285a5a2974462"},{url:"component/disable.html",revision:"1b82b4d6c35c0213a53bbe67c57021e6"},{url:"component/footer/default.html",revision:"8cb6a815fb2df5619da1204efef187bc"},{url:"component/footer/diy.html",revision:"d952fbabb9699ccf9b9a813fe2e7a0dc"},{url:"component/footer/index.html",revision:"b6fc5ced35cfcf2928ed9f3334cc6e44"},{url:"component/footer/link.html",revision:"2044fb1845691919e2fbb8be104d8fa8"},{url:"component/footer/outlink.html",revision:"6a147c5a0359f00a6d23986e158d475d"},{url:"component/footer/text.html",revision:"5ffbd3f8f1fe7ee41ddcff36e29d63af"},{url:"component/index.html",revision:"df49a16a158a5c37909652c3b4357d7e"},{url:"component/pageInfo.html",revision:"f9acc9cf1458ac32a092c6e2c516e6bd"},{url:"en/index.html",revision:"8e3239da5c636c0db74a0016877464bc"},{url:"en/test/detail/markdown.html",revision:"2b95df32de77787325ea05464fec33f1"},{url:"en/test/detail/page.html",revision:"31c2ca669d1aa4e239e7c29586365ebd"},{url:"en/test/footer/default.html",revision:"efc2812ae0caf1fe09cf3c4db3efd353"},{url:"en/test/footer/diy.html",revision:"5d88ef9464d357234a932a9086dd7c83"},{url:"en/test/footer/index.html",revision:"3623f9a4c7d918df8351ccfb03038ba9"},{url:"en/test/footer/link.html",revision:"4349e49666ef1d052318c5f738805578"},{url:"en/test/footer/outlink.html",revision:"287ae303d3eed33996641131680cc54d"},{url:"en/test/footer/text.html",revision:"f94c066afba75fbe8dac7c2254f96df7"},{url:"en/test/index.html",revision:"6a0e069b53f05c5493c2a3ba14b510da"},{url:"encrypt/index.html",revision:"c89630f7f96f3bfdef644b9643104b5b"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"7447f5a4bc23f539575b085537ca5bf4"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"754ac7ee289d3ba23b853c7f7308d6e9"},{url:"sticky.html",revision:"269375e6195874b1ee16bc7b17328220"},{url:"tag/footer/index.html",revision:"9f887a4c8eb91842189cc792bd607bb1"},{url:"tag/index.html",revision:"52dc4d2694538afa22bde8103ff2874b"},{url:"tag/layout/index.html",revision:"c736b8f4e8a5622e96567f21ff464241"},{url:"tag/markdown/index.html",revision:"73e8383adf9109668ef248d053dcee42"},{url:"test/index.html",revision:"c7edb26e944262e7af8fb3689294028c"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
