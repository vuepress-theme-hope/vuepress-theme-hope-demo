if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"00bb8c1c6ad91291ecf8fb67346c5c95"},{url:"article/index.html",revision:"d1e1f6415f6f72a15c5d9e4eceffb40a"},{url:"assets/css/0.styles.bd1db64f.css",revision:"2696f59a004f34867c2c9cb5a23672ef"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"assets/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"assets/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"assets/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.b19b6424.js",revision:"aa41061e2c8134dd1d07b86fc4cb29ad"},{url:"assets/js/layout-Blog.b4866ee2.js",revision:"e67ab93b62604f16cbe0f1f7c1ba506f"},{url:"assets/js/layout-Blog~layout-Layout.59694b66.js",revision:"e52dc9bbc2102af13637e8b7c92695c7"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.c09951ea.js",revision:"01b0686f9b577d2075b0da156ce86dc8"},{url:"assets/js/layout-Layout.b0bcaa88.js",revision:"a8ec07949bcef4dbd15a7baea757f73b"},{url:"assets/js/layout-NotFound.aec68f50.js",revision:"0e61814890d877a8ca7cbf080aed9fa6"},{url:"assets/js/page-Home--145768b6.d4008240.js",revision:"162fd7d70af25cc0882d2b393a25d576"},{url:"assets/js/page-Home--5dacd635.fa397ca5.js",revision:"44d59d785347949f274653d227450157"},{url:"assets/js/page-Markdown增强--4d787654.7f64b602.js",revision:"7653136aa092fac246413264e1ce7412"},{url:"assets/js/page-Markdown增强--87b26038.a89fc0c1.js",revision:"5821df38e8f92f3e7230609b75400688"},{url:"assets/js/page-个人介绍--f358bcd4.793076bb.js",revision:"11501fd143c2ebf31e5b118a6e080ed1"},{url:"assets/js/page-侧边栏auto--3a90cf96.4f9a6294.js",revision:"6c7497fc5aea14bc7c991b072f4de30b"},{url:"assets/js/page-内部链接页脚--31f3a4f6.64b75270.js",revision:"c66c2b03b5b907f4464ef38c6ff8e946"},{url:"assets/js/page-外部链接页脚--0f1c0bec.6ae39894.js",revision:"3518b14c3778edcd72da3c67bd7bc8a9"},{url:"assets/js/page-密码测试--1d89700e.c9fa1187.js",revision:"3fdc21280a20f540e39bbae8053e6b7b"},{url:"assets/js/page-文字页脚--5ea4d836.c7e62b20.js",revision:"59ef6042deef5dff6f4b228305d1512e"},{url:"assets/js/page-文字页脚--854e1b54.5ceb263a.js",revision:"917fd064d8ab4207c9ff913c3bac54cf"},{url:"assets/js/page-无页脚--727687b5.17a3a1d1.js",revision:"cabd7e5c1a987d24c00005024cbca662"},{url:"assets/js/page-无页脚--c5727fd6.603ef52d.js",revision:"1ee8216938280c033dc910527da072c6"},{url:"assets/js/page-笔记列表--13847be8.f074696f.js",revision:"d3ba3c538f2c9c9c25c2d3ae3e160cb7"},{url:"assets/js/page-笔记列表--253f1d56.7894ab64.js",revision:"d769b875fc9b07d0bccd15034dc76990"},{url:"assets/js/page-笔记列表--36afc214.32647e6a.js",revision:"bbbc6203bfcdbc24384ece94b740b3f4"},{url:"assets/js/page-笔记列表--3706d596.9394ff96.js",revision:"863ac087343f84dec54d6c323577bf83"},{url:"assets/js/page-笔记列表--4395057e.12c58eed.js",revision:"a8e44cb9f4cfdf0999c1641b4f8f5fbe"},{url:"assets/js/page-笔记列表--48777a54.07c54167.js",revision:"9c8f349755add8ca563db057b3939a8c"},{url:"assets/js/page-笔记列表--4c6992b4.82f1bd41.js",revision:"9921004ade7974e9752fd77085406598"},{url:"assets/js/page-笔记列表--5a3f3294.cb62ca59.js",revision:"9b516e5f8598b0cdabc4ce5383bafd4a"},{url:"assets/js/page-笔记列表--779dd3f6.1529f332.js",revision:"de10344ca89bc356999216bbdd12c2e1"},{url:"assets/js/page-笔记列表--bfdc1d38.f30413e6.js",revision:"e6b8bc28436c247fb227084218db1c1c"},{url:"assets/js/page-笔记列表--ed34e794.89055695.js",revision:"3b43b254a8188da0d0a1bdafbab44202"},{url:"assets/js/page-笔记列表--fefc9fd4.030eb8e1.js",revision:"85e2febeca81353a0052138a0e031049"},{url:"assets/js/page-组件测试--33a9d46e.3c6a7d6a.js",revision:"2acff6e59f08370f39137fb43921af52"},{url:"assets/js/page-组件禁用--412a7956.2b2eb6ee.js",revision:"3e0d7e5da8f41408d9530102e9d6bdcd"},{url:"assets/js/page-置顶文章--bbc4e3a0.385a5a76.js",revision:"a81e41e5f569011854a9007e80883645"},{url:"assets/js/page-自定义页脚--638ce0d4.e7e83846.js",revision:"ffb7b10b951cd5fbd4b912f768def985"},{url:"assets/js/page-自定义页脚--76fb1e1e.8691e4b9.js",revision:"74ee804ecdc574be2d2151b0089718ca"},{url:"assets/js/page-页面信息--41bbd7b8.7af1828a.js",revision:"8c0b8af6a2c3a2f9f0b8d3d5bdad1242"},{url:"assets/js/page-页面布局--0f63db56.a0170e10.js",revision:"9a12e48dc1f347cc8b65bb9ee60ea3f2"},{url:"assets/js/page-页面布局--c006385a.9b3c6093.js",revision:"a0b0acfe6a2081c8b7c284eb0b515604"},{url:"assets/js/page-页面配置--36b78854.4ab1dbee.js",revision:"ff70c0fb995134d5c3d78ad9fc5f4030"},{url:"assets/js/page-默认页脚--9df0770c.b009d161.js",revision:"49f28ecc63c13e6d45ea150c7c398461"},{url:"assets/js/page-默认页脚--d5d7bcf8.6ba19cb3.js",revision:"ea97204a07ecabb054fbd7173e6ee837"},{url:"assets/js/vendors~layout-Layout.26206812.js",revision:"77ed792d2c2c1b8bd3ea2287405afe74"},{url:"category/component/index.html",revision:"d33f9406847abda0d04f5b34ac5daab9"},{url:"category/index.html",revision:"7a113e52db8d0e8a28541558e5829d68"},{url:"category/layout/index.html",revision:"9335b2b1816fd6a572350996d87da8ae"},{url:"category/note/index.html",revision:"7ccb8da034de77776ec5192405f4c786"},{url:"category/note/page/2/index.html",revision:"857d560b8929179c1cc1b2af496c2713"},{url:"component/disable/index.html",revision:"a0493434a10255387aa3afc0954b6246"},{url:"component/footer/default/index.html",revision:"39207bd24144d17ac50e33eea9610196"},{url:"component/footer/diy/index.html",revision:"d0d92304c45520347e07a6d84d902ef9"},{url:"component/footer/index.html",revision:"1a409165c6d78af0c8de42e311752846"},{url:"component/footer/text/index.html",revision:"3c1bd65915c61382a94b43b4df64a7a0"},{url:"component/index.html",revision:"3798a4c3e0e8b01cc928bdae412458ef"},{url:"component/pageInfo/index.html",revision:"ffbe31ec0d4e425406d5ab99b0df74f6"},{url:"en/index.html",revision:"1ab23e547e92fcb4110009422b9b85f6"},{url:"en/test/detail/markdown/index.html",revision:"b402135fcc088cd19ec04fca357ee480"},{url:"en/test/detail/page/index.html",revision:"93a7af93232ef0f41705a5e2a11b12ee"},{url:"en/test/footer/default/index.html",revision:"8fdeb452edb898d71bdd78575c2c152f"},{url:"en/test/footer/diy/index.html",revision:"100cba6f2e6fa4e989bd78be85771871"},{url:"en/test/footer/index.html",revision:"eecc509aee691074b053d303ef7c0aba"},{url:"en/test/footer/link/index.html",revision:"575d395e2abffbbc918b0c22aa31f3bc"},{url:"en/test/footer/outlink/index.html",revision:"04daefe9a69b4d6c34ccfce83fd64965"},{url:"en/test/footer/text/index.html",revision:"cbb8ffea63bf0dc1198aba5d74d4a242"},{url:"en/test/index.html",revision:"4166c0796957b37315fb53d82469485f"},{url:"encrypt/index.html",revision:"3a6c54fd825d9c49a13cf2d762974b85"},{url:"index.html",revision:"63848c9b849ae3fb139dcd977383e3cd"},{url:"intro/index.html",revision:"7d786669d0789de091a8293f294ba075"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"5217936d898f2bae59cb6dfe5bbb653f"},{url:"notes/1/index.html",revision:"386fd0054964e94b756fbf6fc577761a"},{url:"notes/10/index.html",revision:"07a61fc1354d022436a5811c76f23b81"},{url:"notes/11/index.html",revision:"140a92f7ff3307581d8a6a964383327a"},{url:"notes/12/index.html",revision:"ec9736a9e0ec9c9726843f058f7d0e6c"},{url:"notes/2/index.html",revision:"e21ae37e685a4c1279f27ec3cacef277"},{url:"notes/3/index.html",revision:"8dda959459df47864581350b5def5f2a"},{url:"notes/4/index.html",revision:"a0093ae17507f0d92039f470df88c75f"},{url:"notes/6/index.html",revision:"c85813be2aadd5550d130d1067b0d337"},{url:"notes/7/index.html",revision:"51e13c4fb567cc9833cd2fc4d08d90a8"},{url:"notes/8/index.html",revision:"c9366f553f00cf44d1bf868bb12ab5a8"},{url:"notes/9/index.html",revision:"81f18a2fb162fbf0d1ae597f9e51355e"},{url:"notes/index.html",revision:"568efb93cd8a635d6d7d9c996e838b08"},{url:"sticky/index.html",revision:"efade1bf050eb884d5671b35a3a7c045"},{url:"tag/footer/index.html",revision:"a28f58cb80aa1079758b78e0fe2b7455"},{url:"tag/index.html",revision:"18aef4d80614cd8da0b235c311ee22e6"},{url:"tag/layout/index.html",revision:"225d22ca5c806021e8ee4d8139070da9"},{url:"tag/markdown/index.html",revision:"a0034315044afd67c7cdd9bdaff25290"},{url:"tag/note/index.html",revision:"2947cf0ec4a95fe96320c48a71fbe092"},{url:"tag/note/page/2/index.html",revision:"b9484881a5f172ca32df39054c010573"},{url:"test/auto/index.html",revision:"58f89e9dc1ffe38ad0bfb0ab835c413a"},{url:"test/index.html",revision:"3852c3e71fab4ec2fa47c94a67fe8b23"},{url:"timeline/index.html",revision:"c70b34ea0ee55d0b9c4f3bd7a8288edc"}],{})}));
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
