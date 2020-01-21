(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github-oauth-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-oauth-app"}},[t._v("#")]),t._v(" GitHub OAuth App")]),t._v(" "),s("blockquote",[s("p",[t._v("Vssue can also work with self-hosted GitHub Enterprise Server. Set the "),s("code",[t._v("baseURL")]),t._v(" options to your Github URL. See "),s("router-link",{attrs:{to:"/docs/comment/src/en/options/#baseurl"}},[t._v("Options Reference - baseURL")])],1)]),t._v(" "),s("blockquote",[s("p",[t._v("GitHub requires "),s("code",[t._v("clientSecret")]),t._v(" because "),s("a",{attrs:{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub does not support implicit grant type"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"/assets/img/oauth-app-github-00.png",alt:"Set up OAuth App - Github 00"}})])]),t._v(" "),s("h2",{attrs:{id:"create-a-new-oauth-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-oauth-app"}},[t._v("#")]),t._v(" Create a new OAuth App")]),t._v(" "),s("ul",[s("li",[t._v("Go to "),s("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings - Developer Settings - OAuth Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Click "),s("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("New OAuth App"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-01.png",alt:"Set up OAuth App - Github 01"}}),t._v("<-\n->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-02.png",alt:"Set up OAuth App - Github 02"}}),t._v("<-\n->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-03.png",alt:"Set up OAuth App - Github 03"}}),t._v("<-")]),t._v(" "),s("ul",[s("li",[t._v("Set the "),s("code",[t._v("Homepage URL")]),t._v(" and "),s("code",[t._v("Authorization callback URL")]),t._v(" to your website URL (Here we take "),s("code",[t._v("localhost:8080")]),t._v(" for example)")])]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-04.png",alt:"Set up OAuth App - Github 04"}}),t._v("<-")]),t._v(" "),s("h2",{attrs:{id:"get-the-client-id-and-secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-client-id-and-secret"}},[t._v("#")]),t._v(" Get the Client ID and Secret")]),t._v(" "),s("p",[t._v("Then you've created a new OAuth App, and here is your "),s("code",[t._v("Client ID")]),t._v(" and "),s("code",[t._v("Client Secret")]),t._v(".")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-05.png",alt:"Set up OAuth App - Github 05"}}),t._v("<-")]),t._v(" "),s("h2",{attrs:{id:"config-and-start-your-vssue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-and-start-your-vssue"}},[t._v("#")]),t._v(" Config and start your Vssue")]),t._v(" "),s("p",[t._v("Copy the "),s("code",[t._v("Client ID")]),t._v(" and "),s("code",[t._v("Client Secret")]),t._v(", and set "),s("code",[t._v("owner")]),t._v(" and "),s("code",[t._v("repo")]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[t._v("The URL pattern of github repo is "),s("code",[t._v("https://github.com/${owner}/${repo}")])])]),t._v(" "),s("p",[t._v("Here we take "),s("code",[t._v("https://github.com/meteorlxy/vssue-demo")]),t._v(" for example, and set the "),s("code",[t._v("title")]),t._v(" of issue to "),s("code",[t._v("Vssue Demo")]),t._v(".")]),t._v(" "),s("p",[t._v("Then run "),s("code",[t._v("anywhere -h localhost 8080")]),t._v(" to serve the "),s("code",[t._v("index.html")]),t._v(" on "),s("code",[t._v("localhost:8080")]),t._v(".")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-06.png",alt:"Set up OAuth App - Github 06"}}),t._v("<-")]),t._v(" "),s("h2",{attrs:{id:"try-out-vssue-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-out-vssue-locally"}},[t._v("#")]),t._v(" Try out Vssue locally")]),t._v(" "),s("p",[t._v("Vssue has already run here. Click "),s("code",[t._v("Login")]),t._v(" to login with github account.")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-07.png",alt:"Set up OAuth App - Github 07"}}),t._v("<-")]),t._v(" "),s("p",[t._v("Redirect to Github Authorization page. Click "),s("code",[t._v("Authorize ${your account}")]),t._v(" to login.")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-08.png",alt:"Set up OAuth App - Github 08"}}),t._v("<-")]),t._v(" "),s("p",[t._v("Leave a comment on this page ~")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-09.png",alt:"Set up OAuth App - Github 09"}}),t._v("<-")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-10.png",alt:"Set up OAuth App - Github 10"}}),t._v("<-")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("You can go to the repo "),s("a",{attrs:{href:"https://github.com/meteorlxy/vssue-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("meteorlxy/vssue-demo"),s("OutboundLink")],1),t._v(" to get the demo code. Check the "),s("a",{attrs:{href:"https://github.com/meteorlxy/vssue-demo/issues/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1 issue"),s("OutboundLink")],1),t._v(" of that repo to see what happened.")])])])}),[],!1,null,null,null);e.default=r.exports},217:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github-oauth-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-oauth-app"}},[t._v("#")]),t._v(" GitHub OAuth App")]),t._v(" "),s("blockquote",[s("p",[t._v("Vssue 同样可以配合自己搭建的 GitHub Enterprise Server 使用。只需要将 "),s("code",[t._v("baseURL")]),t._v(" 设置为你的 Github URL 即可。查看 "),s("router-link",{attrs:{to:"/docs/comment/src/options/#baseurl"}},[t._v("配置参考 - baseURL")])],1)]),t._v(" "),s("blockquote",[s("p",[t._v("GitHub 需要设置 "),s("code",[t._v("clientSecret")]),t._v("，因为 "),s("a",{attrs:{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 目前还不支持 implicit grant type"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"/assets/img/oauth-app-github-00.png",alt:"Set up OAuth App - Github 00"}})])]),t._v(" "),s("h2",{attrs:{id:"创建一个新的-oauth-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的-oauth-app"}},[t._v("#")]),t._v(" 创建一个新的 OAuth App")]),t._v(" "),s("ul",[s("li",[t._v("前往 "),s("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings - Developer Settings - OAuth Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("点击 "),s("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("New OAuth App"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-01.png",alt:"配置 OAuth App - Github 01"}}),t._v("<-\n->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-02.png",alt:"配置 OAuth App - Github 02"}}),t._v("<-\n->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-03.png",alt:"配置 OAuth App - Github 03"}}),t._v("<-")]),t._v(" "),s("ul",[s("li",[t._v("将 "),s("code",[t._v("Homepage URL")]),t._v(" 和 "),s("code",[t._v("Authorization callback URL")]),t._v(" 设置为你的网站 URL （这里我们用 "),s("code",[t._v("localhost:8080")]),t._v(" 作为示例）")])]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-04.png",alt:"配置 OAuth App - Github 04"}}),t._v("<-")]),t._v(" "),s("h2",{attrs:{id:"获取-client-id-和-secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-client-id-和-secret"}},[t._v("#")]),t._v(" 获取 Client ID 和 Secret")]),t._v(" "),s("p",[t._v("现在你已经创建了一个新的 OAuth App，并得到了相应的 "),s("code",[t._v("Client ID")]),t._v(" 和 "),s("code",[t._v("Client Secret")]),t._v("。")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-05.png",alt:"配置 OAuth App - Github 05"}}),t._v("<-")]),t._v(" "),s("h2",{attrs:{id:"配置并启动你的-vssue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置并启动你的-vssue"}},[t._v("#")]),t._v(" 配置并启动你的 Vssue")]),t._v(" "),s("p",[t._v("复制 "),s("code",[t._v("Client ID")]),t._v(" 和 "),s("code",[t._v("Client Secret")]),t._v(", 并设置 "),s("code",[t._v("owner")]),t._v(" 和 "),s("code",[t._v("repo")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("Github repository 的 URL 模式为 "),s("code",[t._v("https://github.com/${owner}/${repo}")])])]),t._v(" "),s("p",[t._v("这里我们以 "),s("code",[t._v("https://github.com/meteorlxy/vssue-demo")]),t._v(" 为例，并把 issue 的 "),s("code",[t._v("title")]),t._v(" 设置为 "),s("code",[t._v("Vssue Demo")]),t._v("。")]),t._v(" "),s("p",[t._v("然后运行 "),s("code",[t._v("anywhere -h localhost 8080")]),t._v("，在 "),s("code",[t._v("localhost:8080")]),t._v(" 监听一个 http server 并返回 "),s("code",[t._v("index.html")]),t._v("。")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-06.png",alt:"配置 OAuth App - Github 06"}}),t._v("<-")]),t._v(" "),s("h2",{attrs:{id:"在本地尝试-vssue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在本地尝试-vssue"}},[t._v("#")]),t._v(" 在本地尝试 Vssue")]),t._v(" "),s("p",[t._v("Vssue 已经成功运行。点击 "),s("code",[t._v("Login")]),t._v(" 使用 Github 帐号登录。")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-07.png",alt:"配置 OAuth App - Github 07"}}),t._v("<-")]),t._v(" "),s("p",[t._v("重定向到 Github 授权页面。点击 "),s("code",[t._v("Authorize ${你的帐号}")]),t._v(" 来登录。")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-08.png",alt:"配置 OAuth App - Github 08"}}),t._v("<-")]),t._v(" "),s("p",[t._v("在当前页面写下评论吧 ~")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-09.png",alt:"配置 OAuth App - Github 09"}}),t._v("<-")]),t._v(" "),s("p",[t._v("->"),s("img",{attrs:{src:"/assets/img/oauth-app-github-10.png",alt:"配置 OAuth App - Github 10"}}),t._v("<-")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("你可以前往 "),s("a",{attrs:{href:"https://github.com/meteorlxy/vssue-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("meteorlxy/vssue-demo"),s("OutboundLink")],1),t._v(" 来获取 demo 代码。前往该仓库的 "),s("a",{attrs:{href:"https://github.com/meteorlxy/vssue-demo/issues/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1 issue"),s("OutboundLink")],1),t._v(" 看看发生了什么。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);