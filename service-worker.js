if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"b73ef4479ced5f99541f94ec3a247dec"},{url:"article/index.html",revision:"888d2f3a1160e396f65ec775351c6c7d"},{url:"assets/css/0.styles.57b12191.css",revision:"fc99a52dce61de9cfb8849ca0c2268ea"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/25.d30f8a5d.js",revision:"d4039827f1e8c4c533c750bb7701053f"},{url:"assets/js/app.125a35b1.js",revision:"43290c1238bc4ee16d177eca3b960af2"},{url:"assets/js/layout-Blog.0cc7d912.js",revision:"cfc347d40e617c553dcf924b19f133d3"},{url:"assets/js/layout-Blog~layout-Layout.4b6fb9ab.js",revision:"712799c46979d767176b18af4ad5b7a6"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.740a73b2.js",revision:"5b192a8fb8e0d20ac8d5c466324a93c8"},{url:"assets/js/layout-Layout.af706e21.js",revision:"65af5b893d820c7a717a37b799af6946"},{url:"assets/js/layout-NotFound.b4be3e3a.js",revision:"38701cf6bed02db807016b2f56c71b07"},{url:"assets/js/page-Home.7c34aef8.js",revision:"054c7afeedbb690f5e1eda58c99d6c3c"},{url:"assets/js/page-Markdown 增强.2351240d.js",revision:"84cad5fc123525e06b2cda1755e02b1e"},{url:"assets/js/page-个人介绍.2e341e51.js",revision:"393f56b9458b0bd08ee1ef0be32ea75d"},{url:"assets/js/page-内部链接页脚.d1b286a0.js",revision:"a5028b77cf925bf61c7aaa08fa379bee"},{url:"assets/js/page-外部链接页脚.6972d265.js",revision:"338c7aac1ab7223aa55a54c3e0a80ce7"},{url:"assets/js/page-密码测试.4fe24a9c.js",revision:"7e868cdc4c0a01cb54f792217e30a1c1"},{url:"assets/js/page-文字页脚.4adb3b95.js",revision:"7024172ca4c076e2d0d940772635ce16"},{url:"assets/js/page-无页脚.471bdcb2.js",revision:"b4ddb081baea4d645f053beae5e523e5"},{url:"assets/js/page-笔记列表.a0d02e08.js",revision:"3df696ff1141c45de022376164609e60"},{url:"assets/js/page-组件测试.8f0b9a1a.js",revision:"85fd3c7bcb1c81f5a7e6b3df6d888abf"},{url:"assets/js/page-组件禁用.793618e9.js",revision:"b692f2c211f8ce81cb585e2d0327dccf"},{url:"assets/js/page-置顶文章.f1556341.js",revision:"bd93c41a1c6a7715faf7527e1cace5fa"},{url:"assets/js/page-自定义页脚.eb3bbd51.js",revision:"0f9e8f274f4326fb0be65cf971931c08"},{url:"assets/js/page-页面信息.67dde7b2.js",revision:"66151bca5856e83b81a24a56091e2911"},{url:"assets/js/page-页面布局.43ec0569.js",revision:"e7d4ab8c2e69ebc3643ffeef3b6c783f"},{url:"assets/js/page-页面配置.0ea8a7d4.js",revision:"0aaaf5ca45c5715aab53312d0ba51245"},{url:"assets/js/page-默认页脚.34b513b2.js",revision:"3c29185eeb1d636afc5ac1e9411db225"},{url:"assets/js/vendors~layout-Layout.313dc57e.js",revision:"f36cabfdc31591b1be751a8f097756c5"},{url:"category/component/index.html",revision:"893c24f0d2a3e8577c7a3f32f064a412"},{url:"category/index.html",revision:"b3561ea6286918d4ed35bc8114d68fbf"},{url:"category/layout/index.html",revision:"15f3084486a7fef2f0ba8d6ea567ec6d"},{url:"category/note/index.html",revision:"71deaeae4d77511d00998fab76680159"},{url:"category/note/page/2/index.html",revision:"878cfe08d3cc6960f0a3b549e25a382e"},{url:"component/disable.html",revision:"189cc73944b4f04e9216bee0df1d58fd"},{url:"component/footer/default.html",revision:"4b0bb2d674ee94dd859b18657882b282"},{url:"component/footer/diy.html",revision:"eaf39034cfee5e5ce3b45a290441df4a"},{url:"component/footer/index.html",revision:"05a5ac679d6e21020600fc1832346791"},{url:"component/footer/text.html",revision:"17d3ac0e355d957f849e5b479aa64fcb"},{url:"component/index.html",revision:"2dc3f40ddecccfb8db9c18be3c22048a"},{url:"component/pageInfo.html",revision:"6c3fc899152c5079046abec0735030f1"},{url:"en/index.html",revision:"0695f503f26ddc63020ad5a072cf84fa"},{url:"en/test/detail/markdown.html",revision:"27363937cb4f6b31ca7a96634c2a7f44"},{url:"en/test/detail/page.html",revision:"8ac3efac6bcc9932126d39e836d0adaf"},{url:"en/test/footer/default.html",revision:"697bc7201faf301adbb1d11a8c44c2b7"},{url:"en/test/footer/diy.html",revision:"7fa494b16ed780463b7df1f0ada422c2"},{url:"en/test/footer/index.html",revision:"2238a1402a313e918d2d0038e3d81617"},{url:"en/test/footer/link.html",revision:"e5b47d4c7a667ce234f1c580d6712735"},{url:"en/test/footer/outlink.html",revision:"683ea3b13528771441a450b0789b6397"},{url:"en/test/footer/text.html",revision:"e8d3107db0b320a3f0c73a6559178935"},{url:"en/test/index.html",revision:"136e6e4e36c8dc7a7f0d7ff514c8f587"},{url:"encrypt/index.html",revision:"0b911783b9c6b1825d6b13261a053667"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"7dcb0eb935acaaa54d8ac1150a456e21"},{url:"intro.html",revision:"2200652a9af2a9b7d47c166b95ae8d0c"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"568f95e533b18eddd93bfa3d599031a7"},{url:"notes/1.html",revision:"4a15b85abbd96071269a3f0e336eae60"},{url:"notes/10.html",revision:"a05c28613c698b3567cd5870b7a05cb8"},{url:"notes/11.html",revision:"bfb07d369705136be7543907a00e809b"},{url:"notes/12.html",revision:"585fa55ff49ea0d182e06e21db34389d"},{url:"notes/2.html",revision:"dad251ec7031c1006f14811c139e280e"},{url:"notes/3.html",revision:"64a1f743587d4eff64f19b9ad3600805"},{url:"notes/4.html",revision:"1829c067e62f0756a1777b1916382770"},{url:"notes/6.html",revision:"edf6b53a1717f670850c5c7a6c517491"},{url:"notes/7.html",revision:"69949105306b36792d1ab1508bd6d5fd"},{url:"notes/8.html",revision:"5b213dd870af35c965293b0d575f0f11"},{url:"notes/9.html",revision:"d0db2e7653d439bc968a06d4d1bafc20"},{url:"notes/index.html",revision:"8fad414fd8768a2e4454e8cadaca9b2c"},{url:"sticky.html",revision:"ee1b8db4bdc7a515f0b21f28b60c1a8e"},{url:"tag/footer/index.html",revision:"da024edf65cf6b26291bf99de0e2ad23"},{url:"tag/index.html",revision:"e126facfb2e59061ca115b55bbe5ee48"},{url:"tag/layout/index.html",revision:"3c4883cbf9b9ade64e58cd827717e1bf"},{url:"tag/markdown/index.html",revision:"b880434c70b8591d180e3cbf42de4197"},{url:"tag/note/index.html",revision:"740b509b1e62e4ef21199dcd657bf9af"},{url:"tag/note/page/2/index.html",revision:"100e9642e9a8339b508d64032e4def2c"},{url:"test/index.html",revision:"cf9957f333cdf082f8d82f3534e63a64"},{url:"timeline/index.html",revision:"9eddc65d3b0500d5ce928ae75ca1168b"}],{})}));
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
