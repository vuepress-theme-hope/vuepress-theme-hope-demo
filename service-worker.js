if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"d4c4d3bb4c78b39a5664d476547b619e"},{url:"article/index.html",revision:"acaef0f175818e6d1ae576db03d3b563"},{url:"assets/css/0.styles.ee8f8dd5.css",revision:"4454554a3de01ae40ec4d54c4f4b2183"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.f830eac4.js",revision:"d5368efdc65ea3d2d34bcb0a593e3ea2"},{url:"assets/js/layout-Blog.c714f09b.js",revision:"7219b785757a1b876f03f4bda98914be"},{url:"assets/js/layout-Blog~layout-Layout.948f1701.js",revision:"40f2054382e998a9d5a7c22134941d5a"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.578baa17.js",revision:"d6ca0564277e24680de3836f4eebe537"},{url:"assets/js/layout-Layout.01c64d6c.js",revision:"f75e992b9bd4fa97388378d30edac188"},{url:"assets/js/layout-NotFound.78343210.js",revision:"825dd905ad3be7336d3c9c59e350adee"},{url:"assets/js/page-Home.90594504.js",revision:"b66c5e35f8902999cce074a5581aed2a"},{url:"assets/js/page-Markdown 增强.76f39bef.js",revision:"8d0f4bc0bb7a34fc6f67eb3d22d3ed8a"},{url:"assets/js/page-个人介绍.31c92645.js",revision:"e62bdfb6a0c54933995e9e781ffd1679"},{url:"assets/js/page-内部链接页脚.2bb9e8b0.js",revision:"779ce90e45105e0c2b17433f1ca9fc55"},{url:"assets/js/page-外部链接页脚.bced73c3.js",revision:"5738a87d3020b3e1fdfb13a0b4a0e641"},{url:"assets/js/page-密码测试.125dbf42.js",revision:"ac203f69a9bdee3f3e0a9f22082bcbd7"},{url:"assets/js/page-文字页脚.73380293.js",revision:"46013faf3fceaf5c9ffbf68e6c9e47bb"},{url:"assets/js/page-无页脚.0cd48aea.js",revision:"11e119546f920c29e233a60e512c94ee"},{url:"assets/js/page-笔记列表.6068f457.js",revision:"3323a0b1a5adc54221e87593f259eecd"},{url:"assets/js/page-组件测试.ebc7f4b0.js",revision:"460e7f01342fdb5646bf0b6eb6f83243"},{url:"assets/js/page-组件禁用.d02108a2.js",revision:"ba758fa80ebc1201a574c2c34842364e"},{url:"assets/js/page-置顶文章.e86b5da6.js",revision:"8c45a83bb6085572fa0c3207574a377e"},{url:"assets/js/page-自定义页脚.31280f97.js",revision:"dd46b1b97786dc4cdcec76517baf5f2c"},{url:"assets/js/page-页面信息.04a4b6df.js",revision:"40f4afdd454b8032ef82ac06dc64ef45"},{url:"assets/js/page-页面布局.6cb9328d.js",revision:"9f15bef7bb33aa2bc03807f5395ce583"},{url:"assets/js/page-页面配置.712a2781.js",revision:"0eab484e1f77b6fcf3f77082448848c4"},{url:"assets/js/page-默认页脚.f7363123.js",revision:"c330782e3f90392bbfcce31baf55d5ee"},{url:"assets/js/vendors~layout-Layout.0b90c0cb.js",revision:"92fc47321c37839518b5d535fc1b99ca"},{url:"category/component/index.html",revision:"60e552291968e1bfa28732f8fcbb8ae3"},{url:"category/index.html",revision:"24d69e69359bc5eb93c4e7cb73a480be"},{url:"category/layout/index.html",revision:"a755c9f59bf9a82041866284c9b39812"},{url:"category/note/index.html",revision:"641b3ccc1e723976b2f0a62b34ce4d31"},{url:"category/note/page/2/index.html",revision:"533f62d4f0cd1c829c7235a60f7055e4"},{url:"component/disable.html",revision:"e7a0cd8d63ecc31ed05cf72e43e7b3ad"},{url:"component/footer/default.html",revision:"242712f238fcaf98808c981f71488af9"},{url:"component/footer/diy.html",revision:"2c29a82ec89a2a43e027e40300769ac6"},{url:"component/footer/index.html",revision:"a39296882d178a361c5082274e00d9b6"},{url:"component/footer/text.html",revision:"0aa7caf7e034f77f69df04d39e5c8538"},{url:"component/index.html",revision:"c669d0f5e08c560d76c95606481bc424"},{url:"component/pageInfo.html",revision:"f286473f6bd76276b125243f8cf6c6f5"},{url:"en/index.html",revision:"0e9b3681c18e1450b131c60f63f3322f"},{url:"en/test/detail/markdown.html",revision:"e1852349bc22ff23e3cfd1890ba627d6"},{url:"en/test/detail/page.html",revision:"6f33ac5ff1da6daca4739d167732f536"},{url:"en/test/footer/default.html",revision:"92bc87c45437eee13d2f6b165cb4d73b"},{url:"en/test/footer/diy.html",revision:"db8bddc44a3ca5c5a328ec444f540351"},{url:"en/test/footer/index.html",revision:"1831bd6556b950f240ec7da79426b3f5"},{url:"en/test/footer/link.html",revision:"8521b8ca63e9af57685d7e73973eb7ec"},{url:"en/test/footer/outlink.html",revision:"d0f7e8b0abc9d7f8472dce734a377b84"},{url:"en/test/footer/text.html",revision:"70b3f6a31424c238f9add2554c8d9c12"},{url:"en/test/index.html",revision:"582be5ca774799818fda8c128e1a7009"},{url:"encrypt/index.html",revision:"118fcaafaaae16bd42cf06cdd3301961"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"aad60f39c46e8ea3f6d16b22a7c79ead"},{url:"intro.html",revision:"fa99bec6440ab6057c9ca06d9f30279e"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"e44286f8b60153a36b66194b107d431a"},{url:"notes/1.html",revision:"86cd5138953a4522ace8f5eec3920d0d"},{url:"notes/10.html",revision:"9ca47eac9ce6759f781bb1576d879c84"},{url:"notes/11.html",revision:"028ec74bf5347343944007ee87c34eff"},{url:"notes/12.html",revision:"fde882675f979d92ed4e8c4237462ca3"},{url:"notes/2.html",revision:"f51af52d41acb9cb32ed126e3eb628c6"},{url:"notes/3.html",revision:"2b3700353cacccd88a41d3fb3278bf6e"},{url:"notes/4.html",revision:"330591c04800b19ab518453f9925bcdf"},{url:"notes/6.html",revision:"79bf727c50be205759f21da156b3ed0f"},{url:"notes/7.html",revision:"913e11b07222cca0b667180c5e6d6289"},{url:"notes/8.html",revision:"85298e4df68172c86938cc592911b6a9"},{url:"notes/9.html",revision:"7b6882fd8208d9690f68d5ee8a4a362e"},{url:"notes/index.html",revision:"c3eb12a845bc3b596e16c37b1206f42b"},{url:"sticky.html",revision:"7fdf50d7b789bc3e98fa44bcc4155139"},{url:"tag/footer/index.html",revision:"371e34c4fe6f1b7b101f524b7e252f63"},{url:"tag/index.html",revision:"28b8cf81332c6f6731f5a8c7d1e48572"},{url:"tag/layout/index.html",revision:"b358619ed61ab6db72e5ba4718404983"},{url:"tag/markdown/index.html",revision:"1e3c3e4334ebdeb3cc91cc828bbf68dd"},{url:"tag/note/index.html",revision:"74d7c2d073bcf79f8861b0343bd20498"},{url:"tag/note/page/2/index.html",revision:"f5745aad2c06e4e0e30c8baaba01d189"},{url:"test/index.html",revision:"934ec63292654dd50c192caefc786a9e"},{url:"timeline/index.html",revision:"bc93fd361c23de29a5b2fd12ac59635e"}],{})}));
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
