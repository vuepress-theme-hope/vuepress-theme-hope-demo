if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},a=async(a,s)=>{const i=await Promise.all(a.map(e));s(1===i.length?i[0]:i)};a.toUrl=e=>`./${e}`;const s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=new Promise(async s=>{let o={};const c={uri:location.origin+a.slice(1)},d=await Promise.all(i.map(a=>"exports"===a?o:"module"===a?c:e(a))),t=r(...d);o.default||(o.default=t),s(o)}))}}define("./service-worker.js",["./workbox-7c50a1e6"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"ddf244f50148669331b38a5b9a440512"},{url:"assets/css/0.styles.cb105d6c.css",revision:"d455c6a115c5edd34e372857b27eb91c"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.76445128.js",revision:"90c51bea899116de1a63e6d6e9a246b7"},{url:"assets/js/24.5b09acc2.js",revision:"ac498c36706756302e8a8e4a1692db9d"},{url:"assets/js/app.b1e1b002.js",revision:"64d1dc09095c842a49d8de97fcec48cf"},{url:"assets/js/layout-BlogEntry.16ffa9bf.js",revision:"214d2ec1ea7a9df23bd91e80dff0a195"},{url:"assets/js/layout-BlogEntry~layout-Layout.d3cc4791.js",revision:"ee9c4a00b8477b090bec6b0736b33112"},{url:"assets/js/layout-Category.cd2e1e48.js",revision:"2ae64ac811c9a3dade2d110a583fa10f"},{url:"assets/js/layout-Layout.efd6252a.js",revision:"5140d16bca721b88095de0a30360bee6"},{url:"assets/js/layout-NotFound.55f987b2.js",revision:"4dda37e47b33806da63504e2830e935a"},{url:"assets/js/layout-Tag.53c694c2.js",revision:"039d8e3b8540a08d48455f01cd8e502d"},{url:"assets/js/page-Home.9f5e9717.js",revision:"612a95827a5f0151136221eb4508e9e5"},{url:"assets/js/page-Markdown 增强.4d1be13b.js",revision:"32a8ef9d9ef63f5035447bc8417db44e"},{url:"assets/js/page-内部链接页脚.65e52dc0.js",revision:"f517099af78035eb35f17d3b7aab5896"},{url:"assets/js/page-外部链接页脚.31c4617f.js",revision:"b71e1bab881c470eb0886380973129ae"},{url:"assets/js/page-密码测试.14274136.js",revision:"f4eec0ce83eabbadccbc5cc9a29356dc"},{url:"assets/js/page-文字页脚.823c0015.js",revision:"b87b0433f6e66e0214401f78252ac901"},{url:"assets/js/page-无页脚.e2871ea2.js",revision:"d6eb15e0819dad1cf13570104bde33ba"},{url:"assets/js/page-组件测试.ba5bf8c9.js",revision:"3a8acc717b5ec3fd914e750c2d6d52e8"},{url:"assets/js/page-组件禁用.269f370f.js",revision:"3e91249a8ad4589d758784d891a42db2"},{url:"assets/js/page-自定义页脚.78067d23.js",revision:"a87ed317f149e6bb740ea610dffaf342"},{url:"assets/js/page-页面信息.fb40500f.js",revision:"05bc384caf458d2bf441ec795073e307"},{url:"assets/js/page-页面布局.2dbe5300.js",revision:"7b5d73a4013d1cac2f9e9ca621d22407"},{url:"assets/js/page-页面配置.25b3543d.js",revision:"72a527f99b00640be510eb05d7d3d1c0"},{url:"assets/js/page-默认页脚.3996c016.js",revision:"1bc21f7251c79e8eff702697dba0cb8b"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.1a6713c9.js",revision:"aae53d51286925941926796ff7c35143"},{url:"category/component/index.html",revision:"114bb488c680fa05bb864f87176d9e0d"},{url:"category/index.html",revision:"5cab00946554faeb39a96ee00a682cd9"},{url:"category/layout/index.html",revision:"130edd0f9c386dcd1a6698fd2a3920e0"},{url:"component/disable.html",revision:"dc8692ec50f6e44d26c00d3989740738"},{url:"component/footer/default.html",revision:"c61164f8ab6cd0a5abba0313918d20a2"},{url:"component/footer/diy.html",revision:"c07dfb453526d66b69a6dfc233c60517"},{url:"component/footer/index.html",revision:"6883f93562cf4265328c8fc87b403bf4"},{url:"component/footer/link.html",revision:"c3a906c1314b005860e901f882cc026b"},{url:"component/footer/outlink.html",revision:"7a428ea615127972627333e4eba16b19"},{url:"component/footer/text.html",revision:"76de3af032af117a8dee0773a355aa05"},{url:"component/index.html",revision:"c8366b8de61f44e86addee79516e9486"},{url:"component/pageInfo.html",revision:"1d282cbed441c5600c41f800fac502d3"},{url:"en/index.html",revision:"54d0157e519b00bef029f4e1fda8b2b9"},{url:"en/test/detail/markdown.html",revision:"fd62ab4999fd0dfce5f86843b6a1aea7"},{url:"en/test/detail/page.html",revision:"f3a7989fae6d61b0b21c2a415ae6c9bc"},{url:"en/test/footer/default.html",revision:"7fdc8eca789442f5857d5d0caa50b0f6"},{url:"en/test/footer/diy.html",revision:"34ad61214a9d698d668d5b294dc6209a"},{url:"en/test/footer/index.html",revision:"53114a387c496f149e6f070976103651"},{url:"en/test/footer/link.html",revision:"17f013ccb05362b15aa5e84d330bc358"},{url:"en/test/footer/outlink.html",revision:"9f08f8f2a8c23da765ae3f74448b836d"},{url:"en/test/footer/text.html",revision:"79ef733b3415bd135d3eb726f1954d27"},{url:"en/test/index.html",revision:"c1b97aaf8a7b5a3f994b16f505b1de85"},{url:"encrypt/index.html",revision:"074f0720445da9265bc674a5d6cc0239"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"3316b358b874ec1c176321929ae1b892"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"180172466158d2190cc79e5c2b3b0a9c"},{url:"tag/footer/index.html",revision:"da7a4f652fe6cba8590951e3ad329ee0"},{url:"tag/index.html",revision:"1eaed562cb19c0785c2b5eb462bb9c67"},{url:"tag/layout/index.html",revision:"3fcb6be992274e03a9d79b438e3597c0"},{url:"tag/markdown/index.html",revision:"473ae89e3e39760b20efc76aeeaf90f0"},{url:"test/index.html",revision:"bd7a1354d22a301c2f2bfc6053bdf71c"}],{})}));
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
