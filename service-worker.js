if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-7c50a1e6"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"87ab53c1eadb2b73db3b75fe948f1ba7"},{url:"assets/css/0.styles.59549a6d.css",revision:"d455c6a115c5edd34e372857b27eb91c"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.a5bcd499.js",revision:"90c51bea899116de1a63e6d6e9a246b7"},{url:"assets/js/24.b26ddfda.js",revision:"ac498c36706756302e8a8e4a1692db9d"},{url:"assets/js/app.8ef786cc.js",revision:"1ad10f4000235c37cc595ee03d609876"},{url:"assets/js/layout-BlogEntry.9981e056.js",revision:"2307eb49f492f358128bb677db3738d9"},{url:"assets/js/layout-BlogEntry~layout-Layout.33d61b59.js",revision:"05568c2d2beefff703df577ea0e449bd"},{url:"assets/js/layout-Category.fcf95603.js",revision:"7ef9dc37ed2e854cf4dd585fcf724b40"},{url:"assets/js/layout-Layout.85d73c15.js",revision:"7fddf5741f04069ebb85976ec33be835"},{url:"assets/js/layout-NotFound.c9d6680f.js",revision:"8be0f5eae818ceaf320f9a64407c6347"},{url:"assets/js/layout-Tag.ef1a5fe7.js",revision:"4d383541ffb3e150719461347fd286b9"},{url:"assets/js/page-Home.4d40a2ef.js",revision:"612a95827a5f0151136221eb4508e9e5"},{url:"assets/js/page-Markdown 增强.684ea9d7.js",revision:"32a8ef9d9ef63f5035447bc8417db44e"},{url:"assets/js/page-内部链接页脚.456a8c6c.js",revision:"f517099af78035eb35f17d3b7aab5896"},{url:"assets/js/page-外部链接页脚.417e611e.js",revision:"b71e1bab881c470eb0886380973129ae"},{url:"assets/js/page-密码测试.6e2174d0.js",revision:"f4eec0ce83eabbadccbc5cc9a29356dc"},{url:"assets/js/page-文字页脚.708e3a9a.js",revision:"b87b0433f6e66e0214401f78252ac901"},{url:"assets/js/page-无页脚.929537eb.js",revision:"d6eb15e0819dad1cf13570104bde33ba"},{url:"assets/js/page-组件测试.965b17bf.js",revision:"3a8acc717b5ec3fd914e750c2d6d52e8"},{url:"assets/js/page-组件禁用.0e16e9fb.js",revision:"3e91249a8ad4589d758784d891a42db2"},{url:"assets/js/page-自定义页脚.254d67cc.js",revision:"a87ed317f149e6bb740ea610dffaf342"},{url:"assets/js/page-页面信息.0e847c6c.js",revision:"05bc384caf458d2bf441ec795073e307"},{url:"assets/js/page-页面布局.4e416699.js",revision:"7b5d73a4013d1cac2f9e9ca621d22407"},{url:"assets/js/page-页面配置.58d2a808.js",revision:"72a527f99b00640be510eb05d7d3d1c0"},{url:"assets/js/page-默认页脚.93993038.js",revision:"1bc21f7251c79e8eff702697dba0cb8b"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.6433e7a0.js",revision:"2bb4da8d45b4552a6c27aaf6e40c4585"},{url:"category/component/index.html",revision:"c6576769d41fe8a9ea6a66a0b6122c22"},{url:"category/index.html",revision:"22b99c8fdab49c2ee5f6e491593af748"},{url:"category/layout/index.html",revision:"5813eb5004e79e7514290d7c55174364"},{url:"component/disable.html",revision:"6627b3348c9977862b19cf08939e35e0"},{url:"component/footer/default.html",revision:"626575ea9ac93b3f2d79361e1a1c5ef1"},{url:"component/footer/diy.html",revision:"5a5b74ccba980acc33a79dc0d7591b38"},{url:"component/footer/index.html",revision:"4b796a10947ac5a9cce550291aad8abf"},{url:"component/footer/link.html",revision:"a2846c15fed4e559a755ab382ec29fc2"},{url:"component/footer/outlink.html",revision:"b3a859dc11a823732efefa061db0b44a"},{url:"component/footer/text.html",revision:"ec3d892f17e313a24736b877b6688131"},{url:"component/index.html",revision:"6cd4e48cb8c65745260175e8268419d1"},{url:"component/pageInfo.html",revision:"2578694d946ada73d2f62ca6823bf9c8"},{url:"en/index.html",revision:"73d9bf57520d07229ef2418beb1e4501"},{url:"en/test/detail/markdown.html",revision:"ec7612584914e1ebe4ea58739163674b"},{url:"en/test/detail/page.html",revision:"c4364c66404fa5df628545ac9b8577aa"},{url:"en/test/footer/default.html",revision:"d43b12e0f1932c021f610b45c4cc951f"},{url:"en/test/footer/diy.html",revision:"5b12dbd8751b39fe774591a976b535ed"},{url:"en/test/footer/index.html",revision:"5efb0437c394d52bd7cfec1b271dbf71"},{url:"en/test/footer/link.html",revision:"8f3e89e112bb6967d8a1ce15e30ce4e1"},{url:"en/test/footer/outlink.html",revision:"5259f99e8046aaec0eed7b81003ca75b"},{url:"en/test/footer/text.html",revision:"c625d404d314c827f5c775d0c37beecc"},{url:"en/test/index.html",revision:"3bc6b30d1750c85378036070e1b37fca"},{url:"encrypt/index.html",revision:"d5d9049c104af8efab98e4a89c921b7f"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"cc505a58d81d395939ab4d9a37527ac9"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"89517788b8ff8081107669c118a0502f"},{url:"tag/footer/index.html",revision:"430e48fceacecc37fdcae45c7b8b7bca"},{url:"tag/index.html",revision:"ff5349d53300bfe2b716d3470df22576"},{url:"tag/layout/index.html",revision:"729d7d2a2502dcfd13c6614fb2c72103"},{url:"tag/markdown/index.html",revision:"341293e166be070ae7e6a82f4da576f2"},{url:"test/index.html",revision:"7912e79704177efa985844f01b8f0512"}],{})}));
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
