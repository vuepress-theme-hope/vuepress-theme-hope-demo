(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,n){"use strict";n.r(e);var r=n(182),s=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=s.a},182:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var s,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});const s=n(2),o=n(5);let i=class extends s.Vue{constructor(){super(...arguments),this.title="404",this.msgs=[""],this.linkText="带我回家"}mounted(){const t=o.i18n.getLocale(this.$lang).error404;this.msgs=t.text,this.linkText=t.link}get msg(){return this.msgs[Math.floor(Math.random()*this.msgs.length)]}};i=r([s.Component],i),e.default=i},370:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container"},[n("div",{staticClass:"theme-default-content"},[n("h1",[t._v("404")]),t._v(" "),n("blockquote",{domProps:{textContent:t._s(t.msg)}}),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.linkText))])],1)])},s=[]},396:function(t,e,n){"use strict";n.r(e);var r=n(370),s=n(181);for(var o in s)"default"!==o&&function(t){n.d(e,t,(function(){return s[t]}))}(o);var i=n(0),c=Object(i.a)(s.default,r.a,r.b,!1,null,null,null);e.default=c.exports}}]);