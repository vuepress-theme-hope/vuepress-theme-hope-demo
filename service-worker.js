if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!a[e]&&(await new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}),!a[e]))throw new Error(`Module ${e} didn’t register its module`);return a[e]},s=async(s,a)=>{const i=await Promise.all(s.map(e));a(1===i.length?i[0]:i)};s.toUrl=e=>`./${e}`;const a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=new Promise(async a=>{let d={};const f={uri:location.origin+s.slice(1)},o=await Promise.all(i.map(s=>"exports"===s?d:"module"===s?f:e(s))),c=r(...o);d.default||(d.default=c),a(d)}))}}define("./service-worker.js",["./workbox-7c50a1e6"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"7de8b95ca143f8969dbc7519a5d3fe6d"},{url:"assets/css/0.styles.cb105d6c.css",revision:"d455c6a115c5edd34e372857b27eb91c"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.76445128.js",revision:"90c51bea899116de1a63e6d6e9a246b7"},{url:"assets/js/24.5b09acc2.js",revision:"ac498c36706756302e8a8e4a1692db9d"},{url:"assets/js/app.46bbde83.js",revision:"82071904f58a898b424728472bbbf85a"},{url:"assets/js/layout-BlogEntry.16ffa9bf.js",revision:"214d2ec1ea7a9df23bd91e80dff0a195"},{url:"assets/js/layout-BlogEntry~layout-Layout.d3cc4791.js",revision:"ee9c4a00b8477b090bec6b0736b33112"},{url:"assets/js/layout-Category.cd2e1e48.js",revision:"2ae64ac811c9a3dade2d110a583fa10f"},{url:"assets/js/layout-Layout.efd6252a.js",revision:"5140d16bca721b88095de0a30360bee6"},{url:"assets/js/layout-NotFound.55f987b2.js",revision:"4dda37e47b33806da63504e2830e935a"},{url:"assets/js/layout-Tag.53c694c2.js",revision:"039d8e3b8540a08d48455f01cd8e502d"},{url:"assets/js/page-Home.9f5e9717.js",revision:"612a95827a5f0151136221eb4508e9e5"},{url:"assets/js/page-Markdown 增强.4d1be13b.js",revision:"32a8ef9d9ef63f5035447bc8417db44e"},{url:"assets/js/page-内部链接页脚.65e52dc0.js",revision:"f517099af78035eb35f17d3b7aab5896"},{url:"assets/js/page-外部链接页脚.31c4617f.js",revision:"b71e1bab881c470eb0886380973129ae"},{url:"assets/js/page-密码测试.14274136.js",revision:"f4eec0ce83eabbadccbc5cc9a29356dc"},{url:"assets/js/page-文字页脚.823c0015.js",revision:"b87b0433f6e66e0214401f78252ac901"},{url:"assets/js/page-无页脚.e2871ea2.js",revision:"d6eb15e0819dad1cf13570104bde33ba"},{url:"assets/js/page-组件测试.ba5bf8c9.js",revision:"3a8acc717b5ec3fd914e750c2d6d52e8"},{url:"assets/js/page-组件禁用.269f370f.js",revision:"3e91249a8ad4589d758784d891a42db2"},{url:"assets/js/page-自定义页脚.78067d23.js",revision:"a87ed317f149e6bb740ea610dffaf342"},{url:"assets/js/page-页面信息.fb40500f.js",revision:"05bc384caf458d2bf441ec795073e307"},{url:"assets/js/page-页面布局.2dbe5300.js",revision:"7b5d73a4013d1cac2f9e9ca621d22407"},{url:"assets/js/page-页面配置.25b3543d.js",revision:"72a527f99b00640be510eb05d7d3d1c0"},{url:"assets/js/page-默认页脚.3996c016.js",revision:"1bc21f7251c79e8eff702697dba0cb8b"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.1a6713c9.js",revision:"aae53d51286925941926796ff7c35143"},{url:"category/component/index.html",revision:"66aefdff08530363149fa8ae5368c95f"},{url:"category/index.html",revision:"fcc989e8d7c3cfe12f209c2132c0b82d"},{url:"category/layout/index.html",revision:"32776fb494a51122ca129a66d40665b1"},{url:"component/disable.html",revision:"f6f2aa70e3a51fa309f16fc33cfa763a"},{url:"component/footer/default.html",revision:"3c0117e0a3ae022c12aee22e73699794"},{url:"component/footer/diy.html",revision:"a3bd0f7e15746606d997d2b6ed618264"},{url:"component/footer/index.html",revision:"30d08485dd0f33d4d16fe6fb3eb3de64"},{url:"component/footer/link.html",revision:"86b52f2bbeae5c4f40700b6b121bb996"},{url:"component/footer/outlink.html",revision:"126810d2cb51332bd35576dcccae753a"},{url:"component/footer/text.html",revision:"ba8e4b28a0e3dbc60743dbfe4be3ce64"},{url:"component/index.html",revision:"0c1fd9080f6893b38169675c67e0b623"},{url:"component/pageInfo.html",revision:"d8d6dfb87583abf8ef54d750279ca0d3"},{url:"en/index.html",revision:"7d2ffc774b5f7006b708f702444b7efc"},{url:"en/test/detail/markdown.html",revision:"d925db80faa9e4e455f64447cdb742b9"},{url:"en/test/detail/page.html",revision:"85dcd58d969b4e5d39335786df6d3505"},{url:"en/test/footer/default.html",revision:"3ab449be5045d18f2d60e7c44e6c7cb8"},{url:"en/test/footer/diy.html",revision:"9e8e9c2aed02536de9608a1ab7560a0b"},{url:"en/test/footer/index.html",revision:"d637ba7b44c8a260d9e385583e1385a2"},{url:"en/test/footer/link.html",revision:"e0f132ec2a5d32fb9c6bba2ccde70093"},{url:"en/test/footer/outlink.html",revision:"e5a47e7c60f3e212e9fb348df698e69c"},{url:"en/test/footer/text.html",revision:"e3ab5a4fe3fcc6c89429f17bb2b5be1f"},{url:"en/test/index.html",revision:"7d78bb8f22cd0404587b4998217f41f5"},{url:"encrypt/index.html",revision:"13c2e936fc22ee4dea76a1e4777d7204"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"c76b4f5fd0bbabdfc04863b41980cc72"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"a72f8c041653342136e6fad7b4f3e626"},{url:"tag/footer/index.html",revision:"87327cfe6b37a38a883dbe715a3608e4"},{url:"tag/index.html",revision:"a6f67b95c59eb8dcf5e7f1ede08238fc"},{url:"tag/layout/index.html",revision:"469c88d325d6cdf0aa22b24a6b44e7ee"},{url:"tag/markdown/index.html",revision:"9661d3d248eb7bf6d60dbb493f361f59"},{url:"test/index.html",revision:"dc262ecdeec1f2936725091fc9014256"}],{})}));
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
