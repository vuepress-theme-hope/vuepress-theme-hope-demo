if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"cc16fecdd10ef9a8a5a7b44389421e1c"},{url:"article/index.html",revision:"d8fe85bfeb06b08a6c7afb9659641a04"},{url:"assets/css/0.styles.be17cd1e.css",revision:"868da01301ee4dc15c44fce62b06f27c"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"assets/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"assets/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"assets/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.8eceb0a8.js",revision:"3f3bfd0667585923db5ddf9b611883a5"},{url:"assets/js/layout-Blog.5b24068d.js",revision:"e67ab93b62604f16cbe0f1f7c1ba506f"},{url:"assets/js/layout-Blog~layout-Layout.852c4fae.js",revision:"e52dc9bbc2102af13637e8b7c92695c7"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.e520de24.js",revision:"01b0686f9b577d2075b0da156ce86dc8"},{url:"assets/js/layout-Layout.c8218756.js",revision:"a8ec07949bcef4dbd15a7baea757f73b"},{url:"assets/js/layout-NotFound.64de382b.js",revision:"0e61814890d877a8ca7cbf080aed9fa6"},{url:"assets/js/page-Markdown增强--4d787654.5b7748ea.js",revision:"a0dc28cd66b030fb33c80ea41fdb3160"},{url:"assets/js/page-Markdown增强--87b26038.70dba297.js",revision:"a4649e1cd6eb5c2416b3206464e7530a"},{url:"assets/js/page-vuepress-theme-hope--145768b6.c8314927.js",revision:"aabb1af95567d1ebdf0e27f9ce2160e7"},{url:"assets/js/page-vuepress-theme-hope--5dacd635.5a954162.js",revision:"bd69182040b3165fc210deb7653364f4"},{url:"assets/js/page-个人介绍--f358bcd4.6515b78a.js",revision:"11501fd143c2ebf31e5b118a6e080ed1"},{url:"assets/js/page-侧边栏auto--3a90cf96.adaf8230.js",revision:"6c7497fc5aea14bc7c991b072f4de30b"},{url:"assets/js/page-内部链接页脚--31f3a4f6.ea752d0f.js",revision:"c66c2b03b5b907f4464ef38c6ff8e946"},{url:"assets/js/page-外部链接页脚--0f1c0bec.e085f6c4.js",revision:"3518b14c3778edcd72da3c67bd7bc8a9"},{url:"assets/js/page-密码测试--1d89700e.0c2caa8c.js",revision:"3fdc21280a20f540e39bbae8053e6b7b"},{url:"assets/js/page-文字页脚--5ea4d836.81ab8a7e.js",revision:"59ef6042deef5dff6f4b228305d1512e"},{url:"assets/js/page-文字页脚--854e1b54.3b33ae1f.js",revision:"917fd064d8ab4207c9ff913c3bac54cf"},{url:"assets/js/page-无页脚--727687b5.e931bdce.js",revision:"cabd7e5c1a987d24c00005024cbca662"},{url:"assets/js/page-无页脚--c5727fd6.8c5d644a.js",revision:"1ee8216938280c033dc910527da072c6"},{url:"assets/js/page-笔记列表--13847be8.98537a96.js",revision:"d3ba3c538f2c9c9c25c2d3ae3e160cb7"},{url:"assets/js/page-笔记列表--253f1d56.287fc395.js",revision:"d769b875fc9b07d0bccd15034dc76990"},{url:"assets/js/page-笔记列表--36afc214.aa2d179b.js",revision:"bbbc6203bfcdbc24384ece94b740b3f4"},{url:"assets/js/page-笔记列表--3706d596.c1b7f13f.js",revision:"863ac087343f84dec54d6c323577bf83"},{url:"assets/js/page-笔记列表--4395057e.8e8f3749.js",revision:"a8e44cb9f4cfdf0999c1641b4f8f5fbe"},{url:"assets/js/page-笔记列表--48777a54.d4a01797.js",revision:"9c8f349755add8ca563db057b3939a8c"},{url:"assets/js/page-笔记列表--4c6992b4.ee05b538.js",revision:"9921004ade7974e9752fd77085406598"},{url:"assets/js/page-笔记列表--5a3f3294.c236a139.js",revision:"9b516e5f8598b0cdabc4ce5383bafd4a"},{url:"assets/js/page-笔记列表--779dd3f6.04ee521c.js",revision:"de10344ca89bc356999216bbdd12c2e1"},{url:"assets/js/page-笔记列表--bfdc1d38.218ddb6b.js",revision:"e6b8bc28436c247fb227084218db1c1c"},{url:"assets/js/page-笔记列表--ed34e794.f6f0acd2.js",revision:"3b43b254a8188da0d0a1bdafbab44202"},{url:"assets/js/page-笔记列表--fefc9fd4.e3fa1112.js",revision:"85e2febeca81353a0052138a0e031049"},{url:"assets/js/page-组件测试--33a9d46e.9fa862a3.js",revision:"2acff6e59f08370f39137fb43921af52"},{url:"assets/js/page-组件禁用--412a7956.62f0cf9b.js",revision:"3e0d7e5da8f41408d9530102e9d6bdcd"},{url:"assets/js/page-置顶文章--bbc4e3a0.48db158e.js",revision:"a81e41e5f569011854a9007e80883645"},{url:"assets/js/page-自定义页脚--638ce0d4.760725e3.js",revision:"ffb7b10b951cd5fbd4b912f768def985"},{url:"assets/js/page-自定义页脚--76fb1e1e.5f97ff10.js",revision:"74ee804ecdc574be2d2151b0089718ca"},{url:"assets/js/page-页面信息--41bbd7b8.4980b7c9.js",revision:"8c0b8af6a2c3a2f9f0b8d3d5bdad1242"},{url:"assets/js/page-页面布局--0f63db56.750bdf98.js",revision:"9a12e48dc1f347cc8b65bb9ee60ea3f2"},{url:"assets/js/page-页面布局--c006385a.ca8d71e5.js",revision:"a0b0acfe6a2081c8b7c284eb0b515604"},{url:"assets/js/page-页面配置--36b78854.65a2021f.js",revision:"ff70c0fb995134d5c3d78ad9fc5f4030"},{url:"assets/js/page-默认页脚--9df0770c.39b09bc9.js",revision:"49f28ecc63c13e6d45ea150c7c398461"},{url:"assets/js/page-默认页脚--d5d7bcf8.711bedb2.js",revision:"ea97204a07ecabb054fbd7173e6ee837"},{url:"assets/js/vendors~layout-Layout.ad4c9f7c.js",revision:"77ed792d2c2c1b8bd3ea2287405afe74"},{url:"category/component/index.html",revision:"9e166f187e200b434d0f646d2cc79870"},{url:"category/index.html",revision:"44b6eebd67dae270c97598c8d9a4631b"},{url:"category/layout/index.html",revision:"1d75e90df01a908fca737f579df1fdc7"},{url:"category/note/index.html",revision:"4db3aa599173c4d75d21ba9ee5d3ce63"},{url:"category/note/page/2/index.html",revision:"8ab5b3ac7c17898acfbde5f8b8c2ff26"},{url:"component/disable/index.html",revision:"bf5765c37d1e94836f855c9bf7cb58c9"},{url:"component/footer/default/index.html",revision:"c7c4295cb4edd11beb24c7304187ea78"},{url:"component/footer/diy/index.html",revision:"d2173d848639e426aa60c6b62f20ae2b"},{url:"component/footer/index.html",revision:"59bd65c30a0159a48a30d6ff28c2c72a"},{url:"component/footer/text/index.html",revision:"0ac95d2b179441a6d53d02f7b6735862"},{url:"component/index.html",revision:"176f66dea557ef7c7ba4015e6fdab127"},{url:"component/pageInfo/index.html",revision:"b842380c4ec18878439539515816525c"},{url:"en/index.html",revision:"55651ffac411ccb6ca47f98693681521"},{url:"en/test/detail/markdown/index.html",revision:"09a928262bebaf998b21f35329dcd9b4"},{url:"en/test/detail/page/index.html",revision:"c9c42adaed3bca597b9e2b6a734b06d0"},{url:"en/test/footer/default/index.html",revision:"57085f570310ce8e7ed5ebfd8a093e89"},{url:"en/test/footer/diy/index.html",revision:"5943d1126fdbe555c8d747705f58f46a"},{url:"en/test/footer/index.html",revision:"43c138a79f556c315ab3181955c9e98a"},{url:"en/test/footer/link/index.html",revision:"17c76f5d89b2aa85963118b1a3176176"},{url:"en/test/footer/outlink/index.html",revision:"ba7801e49a8e4d970dcc22f840518b31"},{url:"en/test/footer/text/index.html",revision:"464ab31b5508c5ce886deed2441858f5"},{url:"en/test/index.html",revision:"f86b2413d05093988ed777459bc8a6c4"},{url:"encrypt/index.html",revision:"41d56ac2f854fa9675249113b875400e"},{url:"index.html",revision:"e0efd4e7c5bd4d3bc032eafde6934c96"},{url:"intro/index.html",revision:"c581c9d2c8b3e08932ced6bb24d10b6b"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"15583efbd91ac513db928f6a98aa86e8"},{url:"notes/1/index.html",revision:"a857141dea9b003123ba3a12ae2aaa56"},{url:"notes/10/index.html",revision:"c7ed89b92716b3c7495ce29907f8d3e1"},{url:"notes/11/index.html",revision:"588ac0a728c9aa90207b29823d702dfc"},{url:"notes/12/index.html",revision:"88fb10667dccc025682e307c8795a130"},{url:"notes/2/index.html",revision:"7e82c6e933d23801007889d440fb70d3"},{url:"notes/3/index.html",revision:"894cb476659c263bcccb8281e311cf2c"},{url:"notes/4/index.html",revision:"5804d7fd80a241bc657871890e479fce"},{url:"notes/6/index.html",revision:"e67efe9aebc30c0f89308815a3816af9"},{url:"notes/7/index.html",revision:"71cf2ed31360c6493ff9e49eb4730965"},{url:"notes/8/index.html",revision:"dadb9c8a0cb7d3b64e0e2dea2c184f9a"},{url:"notes/9/index.html",revision:"9d590422386b5d4073786cdd98744966"},{url:"notes/index.html",revision:"d8a38cbcc20b2e7780e57ce923e8bfda"},{url:"sticky/index.html",revision:"74b8e076dbc0fb2ff131e0c914a29cff"},{url:"tag/footer/index.html",revision:"f9e8addedecd0be093c43dbbbf9391fd"},{url:"tag/index.html",revision:"0c0b1f2d423610561ec2a634644aeb67"},{url:"tag/layout/index.html",revision:"cfdb1a69c373f0ddcfa20331a3d83288"},{url:"tag/markdown/index.html",revision:"e2540dec026f115fe6aa65142fcf11ca"},{url:"tag/note/index.html",revision:"27c33a708c14ba02a3e847d2c7a4f282"},{url:"tag/note/page/2/index.html",revision:"e1d69d63a217f8a83bc8d43d78cb22f7"},{url:"test/auto/index.html",revision:"086f6373df5827697bfc05165db36739"},{url:"test/index.html",revision:"8e9b94637af5dc3168a6747b3efbb5b6"},{url:"timeline/index.html",revision:"dcddf5a7cf98fea960ebe1cfca68df95"}],{})}));
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
