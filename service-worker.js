if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"4698125b5719fb1d9c0d982779a003eb"},{url:"article/index.html",revision:"dc9b56d586e5923ec558d52320108872"},{url:"assets/css/0.styles.e6f3ee0f.css",revision:"442e48c86b3a13daabb8dc80625bb523"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/26.dbe474c9.js",revision:"3e26f70163f0062968379e5fcf8d83c9"},{url:"assets/js/app.8fa5c3eb.js",revision:"2167367b8464ebb919cf60a2b099cf50"},{url:"assets/js/layout-BlogEntry.dfa128f7.js",revision:"fb7a34dfa649863629077670df4cf219"},{url:"assets/js/layout-BlogEntry~layout-Common~layout-Layout~layout-Timeline.c96a55d8.js",revision:"a804a598573e8c56b49c45d1ed7afe9d"},{url:"assets/js/layout-BlogEntry~layout-Layout.6eaac56c.js",revision:"063735edd45dfbe0bcec2df7e47e004a"},{url:"assets/js/layout-Common.ec0a6324.js",revision:"b7f33fa6843092de963bc82678af02f3"},{url:"assets/js/layout-Layout.7b0d0ad0.js",revision:"9ec637973cc30ff999e42f5d42edc3bd"},{url:"assets/js/layout-NotFound.9db7602e.js",revision:"6d249daae03a183d41b81d449ab96af8"},{url:"assets/js/layout-Timeline.a0fc27fe.js",revision:"45a841f2e754371b934b1745a26501e4"},{url:"assets/js/page-Home.a069c3f9.js",revision:"378bcb09497741bd278049befacc1c31"},{url:"assets/js/page-Markdown 增强.0dc6dfb6.js",revision:"542fd92709374ee8ff33149280e73046"},{url:"assets/js/page-个人介绍.6c0cc50c.js",revision:"47b823d4c776d8d8a16187fd62d6bf45"},{url:"assets/js/page-内部链接页脚.c7f77d49.js",revision:"10c537bce63b7de5bd420b1e1fd47e68"},{url:"assets/js/page-外部链接页脚.ebd8911c.js",revision:"a1b071dd94010e61a3b59f4b65744246"},{url:"assets/js/page-密码测试.cde51e31.js",revision:"5cab24b44fd604c22d4bd81db1f1427a"},{url:"assets/js/page-文字页脚.c20dfb0d.js",revision:"83bfe21f606b982969a5f5fdf051ffc6"},{url:"assets/js/page-无页脚.f8ee2a0a.js",revision:"218fbb85e1bc2b90b5a85ae94265f7a4"},{url:"assets/js/page-组件测试.e9c5c6f3.js",revision:"a4fedbca1f2c250ef49da13ef976e8c7"},{url:"assets/js/page-组件禁用.42b18465.js",revision:"92ac8cb29dcc97aa6669e0957d0afc13"},{url:"assets/js/page-置顶文章.e1a2c5b9.js",revision:"ff199a806c00c0a02129919e529c64fe"},{url:"assets/js/page-自定义页脚.bcd49b6f.js",revision:"8b2f251d5f0a8bb48a832a056d536ea2"},{url:"assets/js/page-页面信息.a66fa9fa.js",revision:"4b0f9279c581862c4c749e54d1040d08"},{url:"assets/js/page-页面布局.b2920293.js",revision:"00874965e75550375b006cbb9bfdb1dc"},{url:"assets/js/page-页面配置.68ba964d.js",revision:"1f14854eb4e5ae7e5a762d21194211bb"},{url:"assets/js/page-默认页脚.f4df68ef.js",revision:"cd33b5cd138e6ec853d3b0f825b47506"},{url:"assets/js/vendors~layout-Layout.97d2482c.js",revision:"9fb50d171ca0e17d36d5a5c238b83ee3"},{url:"category/component/index.html",revision:"dc7de077bf56cea43a90e66b6072bcee"},{url:"category/index.html",revision:"4e6a6a7603fcefe9d37d5c1a2ff2678f"},{url:"category/layout/index.html",revision:"3a5874554e20fb99ebd4120f3cb54573"},{url:"component/disable.html",revision:"813b3f2e5f0af0c61b5500d57d919a9a"},{url:"component/footer/default.html",revision:"d8780ef67160eb03456c6fea81e66855"},{url:"component/footer/diy.html",revision:"2414ffab009aa83fe30902b8ba38b382"},{url:"component/footer/index.html",revision:"793d88c2977d1924c3af0a7294fda2b8"},{url:"component/footer/link.html",revision:"ec5ea10a6cfd71552ef2caef68a0072a"},{url:"component/footer/outlink.html",revision:"19c722a24365b196ea7a9adad6fd0134"},{url:"component/footer/text.html",revision:"85a0275a2f80d49303470d0a38062ae2"},{url:"component/index.html",revision:"12c509d4054a214d7a515f41d1b7b147"},{url:"component/pageInfo.html",revision:"d44e9133ed29bdfbf01629cbd887e755"},{url:"en/index.html",revision:"1cf2c10d5460d61e385316375c74effd"},{url:"en/test/detail/markdown.html",revision:"5a61dcd67ae121b493abfa191c497e15"},{url:"en/test/detail/page.html",revision:"c887f13481e6bf6c5d0115e990d69654"},{url:"en/test/footer/default.html",revision:"29aaa3f9ec2ec90ede03546081e029b5"},{url:"en/test/footer/diy.html",revision:"0adf9c2ff7ddb1d83d8fce9059d5be22"},{url:"en/test/footer/index.html",revision:"125dda79738f84540cabc4c0bfb2502b"},{url:"en/test/footer/link.html",revision:"694eb0a75caf38efebec7bd3cd3efd1d"},{url:"en/test/footer/outlink.html",revision:"d16d691deb82e510a839f87ee7c33c06"},{url:"en/test/footer/text.html",revision:"fa70e8128254f73f6639a4b64093630c"},{url:"en/test/index.html",revision:"c2ea93767a35c083e93ca5f401267efd"},{url:"encrypt/index.html",revision:"86ff97e7e1ad64d9181fef4c72435b00"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"05e4122df299139150a9fbcec473aef0"},{url:"intro.html",revision:"c73fc38340c57a924805e3abeb64f40e"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"8057066f3a846eb4ebde951403671b09"},{url:"sticky.html",revision:"cd732afc7392f48912e4a2b015ba5ce0"},{url:"tag/footer/index.html",revision:"392f2cb8af7eac5f2be6406574ff9c82"},{url:"tag/index.html",revision:"ea992d6513f7f2083020657eba7a9686"},{url:"tag/layout/index.html",revision:"60936ad4b6daf3fed69ae389f5d9fe9a"},{url:"tag/markdown/index.html",revision:"f023925cb60bf58a0fe0194e776ed141"},{url:"test/index.html",revision:"1c57dab1f3183822ddc02495571adcb6"},{url:"timeline/index.html",revision:"cc67e58e2e03b18e893fb0bc4640bf47"}],{})}));
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
