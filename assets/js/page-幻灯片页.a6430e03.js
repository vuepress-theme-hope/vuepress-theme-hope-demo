(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{521:function(n,e,t){"use strict";t.r(e);var a=t(1),s=function(n){n.options.__data__block__={presentation_1a96284b:'\n\x3c!-- .slide: data-transition="slide" --\x3e\n\n## 幻灯片演示\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n一个简单的幻灯片演示与各种小贴士。\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n> 作者 Mr.Hope. 请滚动鼠标滚轮进入下一页\n\n---\n\n## 标注幻灯片\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n[👇](#/1/1)\n\n--\n\n## 标注幻灯片\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n使用 `---` 标注水平幻灯片\n\n\x3c!-- .element: class="fragment fade-in" --\x3e\n\n在水平幻灯片中使用 `--` 分割垂直幻灯片\n\n\x3c!-- .element: class="fragment fade-in" --\x3e\n\n使用 `\x3c!-- .slide: ... --\x3e` 在幻灯片上添加属性\n\n\x3c!-- .element: class="fragment fade-in" --\x3e\n\n使用 `\x3c!-- .element: ... --\x3e` 在前一个 HTML 元素上添加属性\n\n\x3c!-- .element: class="fragment fade-in" --\x3e\n\n---\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## Markdown\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n你可以在幻灯片中使用 markdown 语法的各种标记.\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## Markdown\n\n你可以在幻灯片中使用 markdown 语法的各种标记.\n\n### 这是一个 H3\n\n标题默认会自动转换为大写。\n\n这是一个有着 **粗体**, _斜体_, ~~删除线~~ 文字并包含 [一个链接](https://mrhope.site) 的段落，并且它会自动换行。所以你无需担心它的长度。\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## Markdown\n\n你可以在幻灯片中使用 markdown 语法的各种标记.\n\n列表默认为 `inline-block`\n\n- 项目\n- 项目\n- 项目\n\n1. 项目 1\n1. 项目 2\n1. 项目 3\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## Markdown\n\n你可以在幻灯片中使用 markdown 语法的各种标记.\n\n在你启用 `highlight` 插件后，代码块会自动高亮。\n\n```js\nconst a = 1;\n```\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## Markdown\n\n你可以在幻灯片中使用 markdown 语法的各种标记.\n\n在你启用 `math` 插件后，你也可以使用 TEX 格式使用数学公式。\n\n$$\nJ(\\theta_0,\\theta_1) = \\sum_{i=0}\n$$\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## Markdown\n\n你可以在幻灯片中使用 markdown 语法的各种标记.\n\n⚠**请注意**: 表格和分割线，以及所有不在 markdown 标准语法中的内容均不受支持。\n\n---\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 布局\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n--\n\n\x3c!-- .slide: data-auto-animate  --\x3e\n\n## 布局\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n👆 `r-fit-text` class 会让文字在不超出幻灯片范围的情况下尽可能大。\n\n--\n\n\x3c!-- .slide: data-auto-animate  --\x3e\n\n## 布局\n\n![Logo](/logo.svg)\n\n\x3c!-- .element: class="r-stretch" --\x3e\n\n👆 `r-stretch` class 帮助你控制注入图片或视频的大小，使它们填充满幻灯片垂直方向上的剩余空间。\n\n--\n\n\x3c!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" --\x3e\n\n## 布局\n\n### 背景\n\n你可以通过向特定幻灯片添加 `data-background` 属性自定义幻灯片背景.\n\n---\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## 动画片段\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## 动画片段\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n动画片段用于高亮或显隐幻灯片中的元素。\n\n你需要在元素上添加 `fragment` 和动画 class。\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## 动画片段\n\n### 动画 class\n\n- `fade-in`\n\x3c!-- .element: class="fragment fade-in" --\x3e\n\n- `fade-out`\n\x3c!-- .element: class="fragment fade-out" --\x3e\n\n- `fade-up`\n\x3c!-- .element: class="fragment fade-up" --\x3e\n\n\x3c!-- list break --\x3e\n\n- `fade-down`\n\x3c!-- .element: class="fragment fade-down" --\x3e\n\n- `fade-left`\n\x3c!-- .element: class="fragment fade-left" --\x3e\n\n- `fade-right`\n\x3c!-- .element: class="fragment fade-right" --\x3e\n\n\x3c!-- list break --\x3e\n\n- `fade-in-then-out`\n\x3c!-- .element: class="fragment fade-in-then-out" --\x3e\n\n- `fade-in-then-semi-out`\n\x3c!-- .element: class="fragment fade-in-then-semi-out" --\x3e\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## 动画片段\n\n### 动画 class\n\n- `grow`\n\x3c!-- .element: class="fragment grow" --\x3e\n\n- `shrink`\n\x3c!-- .element: class="fragment shrink" --\x3e\n\n- `strike`\n\x3c!-- .element: class="fragment strike" --\x3e\n\n\x3c!-- list break --\x3e\n\n- `highlight-red`\n\x3c!-- .element: class="fragment highlight-red" --\x3e\n\n- `highlight-green`\n\x3c!-- .element: class="fragment highlight-green" --\x3e\n\n- `highlight-blue`\n\x3c!-- .element: class="fragment highlight-blue" --\x3e\n\n\x3c!-- list break --\x3e\n\n- `highlight-current-red`\n\x3c!-- .element: class="fragment highlight-current-red" --\x3e\n\n- `highlight-current-green`\n\x3c!-- .element: class="fragment highlight-current-green" --\x3e\n\n- `highlight-current-blue`\n\x3c!-- .element: class="fragment highlight-current-blue" --\x3e\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## 动画片段\n\n### 多个动画片段\n\n你可以按照顺序包裹一个 HTML 元素使其拥有多个动画片段\n\n<span class="fragment fade-in">\n  <span class="fragment highlight-red">\n    <span class="fragment fade-out">\n      渐入 > 变红 > 渐出\n    </span>\n  </span>\n</span>\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## 动画片段\n\n### 顺序\n\n你可以使用 `data-fragment-index` 属性改变元素的动画顺序。\n\n不同元素可以有相同的动画顺序。\n\n- 最后显示\n\x3c!-- .element: class="fragment" data-fragment-index="3"--\x3e\n\n- 第二个显示\n\x3c!-- .element: class="fragment" data-fragment-index="2"--\x3e\n\n\x3c!-- list break --\x3e\n\n- 第一个显示\n\x3c!-- .element: class="fragment" data-fragment-index="1"--\x3e\n\n- 第二个显示\n\x3c!-- .element: class="fragment" data-fragment-index="2"--\x3e\n\n---\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 渐变\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n--\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 渐变\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\nTransition 可以通过配置中的 `transition` 选项全局设置，也可以通过在特定幻灯片添加 `data-transition` 属性局部设置.\n\n可能的值:\n\n- none\n- fade\n- slide\n\n\x3c!-- list break --\x3e\n\n- convex\n- concave\n- zoom\n\n--\n\n\x3c!-- .slide: data-auto-animate --\x3e\n\n## 渐变\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n### 过渡动画\n\n你可以在相邻的幻灯片上添加 `data-auto-animate` 使相同的 HTML 元素产生过渡动画效果。\n\n---\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 功能\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n--\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 功能\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n### 代码\n\n通过启用 `highlight` 插件，你可以对代码块进行高亮。\n\n你可以使用 `[a-b|c-d]` 语法来分布高亮特定行。\n\n```js [1-2|3|4]\nlet a = 1;\nlet b = 2;\nlet c = (x) => 1 + 2 + x;\nc(3);\n```\n\n--\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 功能\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n### 预览模式\n\n按下 `Esc` 或 `O` 即可在幻灯片获得焦点时进入预览模式。\n\n--\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 功能\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n### 全屏模式\n\n按下 `F` 或 `F11` 即可在幻灯片获得焦点时进入全屏模式。\n\n--\n\n\x3c!-- .slide: data-transition="slide" data-auto-animate --\x3e\n\n## 功能\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n### 缩放\n\n按下 `alt` (Linux 上使用 `ctrl`) 的同时点击幻灯片的任何元素，即可以向此元素进行放大。\n\n再次点击即可缩小。\n\n---\n\n\x3c!-- .element: class="r-fit-text" --\x3e\n\n## 结束\n'}},i=Object(a.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("Presentation",{key:"presentation_1a96284b",attrs:{id:"presentation_1a96284b",code:this.$dataBlock.presentation_1a96284b,theme:"auto"}})],1)}),[],!1,null,null,null);"function"==typeof s&&s(i);e.default=i.exports}}]);