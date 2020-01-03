!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("assert")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("http-errors")},function(e,t){e.exports=require("any-promise")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("koa2")},function(e,t,n){"use strict";const r=n(5)("koa-static"),{resolve:i}=n(2),a=n(4),o=n(16);e.exports=function(e,t){t=Object.assign({},t),a(e,"root directory is required to serve files"),r('static "%s" %j',e,t),t.root=i(e),!1!==t.index&&(t.index=t.index||"index.html");if(!t.defer)return async function(e,n){let r=!1;if("HEAD"===e.method||"GET"===e.method)try{r=await o(e,e.path,t)}catch(e){if(404!==e.status)throw e}r||await n()};return async function(e,n){if(await n(),("HEAD"===e.method||"GET"===e.method)&&null==e.body&&404===e.status)try{await o(e,e.path,t)}catch(e){if(404!==e.status)throw e}}}},function(e,t){e.exports={wdsPort:9002,nodeServerPort:9001,asyncComponentKey:"__IS_ASYNC_COMP_FLAG__"}},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("constants")},function(e,t,n){e.exports=function(){let e=["libs.js","main.js"],t=["main.css"];const r={js:[],css:[]};{const i=n(15);e.forEach(e=>{i[e]&&r.js.push(`<script type="text/javascript"  src="${i[e]}"><\/script>`)}),t.forEach(e=>{i[e]&&r.css.push(`<link rel="stylesheet" type="text/css" href="${i[e]}" />`)})}return r}},function(e){e.exports=JSON.parse('{"libs.js":"/js/libs.00849470.js","main.css":"/css/main.ca28e53a.css","main.js":"/js/main.c75edf3a.js","img/img.f9bd91f4.jpg":"/img/img.f9bd91f4.jpg"}')},function(e,t,n){const r=n(5)("koa-send"),i=n(17),a=n(6),o=n(4),s=n(19),{normalize:c,basename:l,extname:u,resolve:p,parse:d,sep:f}=n(2);e.exports=async function(e,t,n={}){o(e,"koa context required"),o(t,"pathname required"),r('send "%s" %j',t,n);const m=n.root?c(p(n.root)):"",g="/"===t[t.length-1];t=t.substr(d(t).root.length);const h=n.index,w=n.maxage||n.maxAge||0,b=n.immutable||!1,x=n.hidden||!1,y=!1!==n.format,v=!!Array.isArray(n.extensions)&&n.extensions,_=!1!==n.brotli,k=!1!==n.gzip,q=n.setHeaders;if(q&&"function"!=typeof q)throw new TypeError("option setHeaders must be function");if(-1===(t=function(e){try{return decodeURIComponent(e)}catch(e){return-1}}(t)))return e.throw(400,"failed to decode");h&&g&&(t+=h);if(t=i(m,t),!x&&function(e,t){t=t.substr(e.length).split(f);for(let e=0;e<t.length;e++)if("."===t[e][0])return!0;return!1}(m,t))return;let E,j="";"br"===e.acceptsEncodings("br","identity")&&_&&await s.exists(t+".br")?(t+=".br",e.set("Content-Encoding","br"),e.res.removeHeader("Content-Length"),j=".br"):"gzip"===e.acceptsEncodings("gzip","identity")&&k&&await s.exists(t+".gz")&&(t+=".gz",e.set("Content-Encoding","gzip"),e.res.removeHeader("Content-Length"),j=".gz");if(v&&!/\.[^/]*$/.exec(t)){const e=[].concat(v);for(let n=0;n<e.length;n++){let r=e[n];if("string"!=typeof r)throw new TypeError("option extensions must be array of strings or false");if(/^\./.exec(r)||(r="."+r),await s.exists(t+r)){t+=r;break}}}try{if(E=await s.stat(t),E.isDirectory()){if(!y||!h)return;t+="/"+h,E=await s.stat(t)}}catch(e){if(["ENOENT","ENAMETOOLONG","ENOTDIR"].includes(e.code))throw a(404,e);throw e.status=500,e}q&&q(e.res,t,E);e.set("Content-Length",E.size),e.response.get("Last-Modified")||e.set("Last-Modified",E.mtime.toUTCString());if(!e.response.get("Cache-Control")){const t=["max-age="+(w/1e3|0)];b&&t.push("immutable"),e.set("Cache-Control",t.join(","))}e.type||(e.type=($=t,V=j,u(""!==V?l($,V):$)));var $,V;return e.body=s.createReadStream(t),t}},function(e,t,n){"use strict";
/*!
 * resolve-path
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2018 Douglas Christopher Wilson
 * MIT Licensed
 */var r=n(6),i=n(2).join,a=n(2).normalize,o=n(18),s=n(2).resolve,c=n(2).sep;e.exports=function(e,t){var n=t,u=e;1===arguments.length&&(n=e,u=process.cwd());if(null==u)throw new TypeError("argument rootPath is required");if("string"!=typeof u)throw new TypeError("argument rootPath must be a string");if(null==n)throw new TypeError("argument relativePath is required");if("string"!=typeof n)throw new TypeError("argument relativePath must be a string");if(-1!==n.indexOf("\0"))throw r(400,"Malicious Path");if(o.posix(n)||o.win32(n))throw r(400,"Malicious Path");if(l.test(a("."+c+n)))throw r(403);return a(i(s(u),n))};var l=/(?:^|[\\/])\.\.(?:[\\/]|$)/},function(e,t){e.exports=require("path-is-absolute")},function(e,t,n){var r,i=n(7);try{r=n(20)}catch(e){r=n(21)}var a=["appendFile","chmod","chown","close","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchown","link","lstat","mkdir","open","read","readFile","readdir","readlink","realpath","rename","rmdir","stat","symlink","truncate","unlink","utimes","write","writeFile"];"function"==typeof r.access&&a.push("access"),"function"==typeof r.copyFile&&a.push("copyFile"),"function"==typeof r.mkdtemp&&a.push("mkdtemp"),n(22).withCallback(r,t,a),t.exists=function(e,t){return"function"==typeof t?r.stat(e,(function(e){t(null,!e)})):new i((function(t){r.stat(e,(function(e){t(!e)}))}))}},function(e,t){e.exports=require("graceful-fs")},function(e,t){e.exports=require("fs")},function(e,t,n){var r=n(23);function i(e,t,n){return a(e,t,n,r)}function a(e,t,n,r){return t||(t={},n=Object.keys(e)),Array.isArray(t)&&(n=t,t={}),n||(n=Object.keys(e)),"function"==typeof e&&(t=r(e)),n.forEach((function(n){"function"==typeof e[n]&&(t[n]=r(e[n]))})),Object.keys(e).forEach((function(n){(function(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return!(!n||!n.get)&&"deprecated"===n.get.name})(e,n)||t[n]||(t[n]=e[n])})),t}e.exports=i,i.withCallback=function(e,t,n){return a(e,t,n,r.withCallback)},i.thenify=r},function(module,exports,__webpack_require__){var Promise=__webpack_require__(7),assert=__webpack_require__(4);function thenify($$__fn__$$,options){return assert("function"==typeof $$__fn__$$),eval(createWrapper($$__fn__$$.name,options))}function createCallback(e,t,n){return function(r,i){if(r)return t(r);var a=arguments.length;if(a<=2||!n)return e(i);if(Array.isArray(n)){for(var o={},s=1;s<a;s++)o[n[s-1]]=arguments[s];return e(o)}for(o=new Array(a-1),s=1;s<a;++s)o[s-1]=arguments[s];e(o)}}function createWrapper(e,t){e=(e||"").replace(/\s|bound(?!$)/g,"");var n=void 0===(t=t||{}).multiArgs||t.multiArgs;return"(function "+e+"() {\nvar self = this\nvar len = arguments.length\n"+(n="var multiArgs = "+JSON.stringify(n)+"\n")+(t.withCallback?'var lastType = typeof arguments[len - 1]\nif (lastType === "function") return $$__fn__$$.apply(self, arguments)\n':"")+"var args = new Array(len + 1)\nfor (var i = 0; i < len; ++i) args[i] = arguments[i]\nvar lastIndex = i\nreturn new Promise(function (resolve, reject) {\nargs[lastIndex] = createCallback(resolve, reject, multiArgs)\n$$__fn__$$.apply(self, args)\n})\n})"}module.exports=thenify,thenify.withCallback=function($$__fn__$$,options){return assert("function"==typeof $$__fn__$$),options=options||{},options.withCallback=!0,void 0===options.multiArgs&&(options.multiArgs=!0),eval(createWrapper($$__fn__$$.name,options))}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(8),o=n(3),s=(n(12),n(1));class c extends i.a.Component{constructor(e){super(e)}render(){return i.a.createElement("div",{className:"layout-box"},i.a.createElement("h1",null,"koa+react+ssr"),i.a.createElement(s.NavLink,{to:"/index",style:{marginLeft:"10px"}},"首页"),i.a.createElement(s.NavLink,{style:{marginLeft:"10px"},to:"/list"},"列表页"),this.props.children)}}var l=Object(o.withRouter)(c),u="/img/img.f9bd91f4.jpg";class p extends i.a.Component{constructor(e){super(e);let t=null;t=e.staticContext.initialData||{},this.state={page:t.page,fetchData:t.fetchData}}static async getInitialProps(){return console.log("fetch data index"),{page:{tdk:{title:"首页 - react ssr",keywords:"前端技术江湖",description:"关键词"}}}}componentDidMount(){this.state.fetchData||p.getInitialProps().then(e=>{this.setState({fetchData:e.fetchData||[],page:e.page}),document.title=e.page.tdk.title}),this.state.page&&this.state.page.tdk&&(document.title=this.state.page.tdk.title)}render(){return i.a.createElement("div",{className:"page-index-box"},i.a.createElement("p",null,"首页"),i.a.createElement("img",{src:u}))}}var d=[{title:"深入浅出TypeScript：从基础知识到类型编程",desc:"Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。",img:"https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"SVG 动画开发实战手册",desc:"从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。",img:"https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"预售JavaScript 设计模式核⼼原理与应⽤实践",desc:"通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。",img:"https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"从入门到深入：IM聊天系统前端开发实践",desc:"IM聊天为案例，系统性讲解前端核心知识点",img:"https://user-gold-cdn.xitu.io/2019/5/27/16af958d3adcf362?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"你不知道的 Chrome 调试技巧",desc:"熟练掌握 Chrome 调试技巧，直接提升工作效率。",img:"https://user-gold-cdn.xitu.io/2019/1/31/168a1fa41cd01af2?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"WebGL 入门与实践",desc:"介绍 WebGL 与 CSS 3D 开发的点点滴滴，详细阐述 3D 数学库的实现原理与使用，演示 3D 数学库对于 WebGL 开发和普通网页开发的重要作用，助力每个前端开发者轻松掌握 3D 开发的关键技术。",img:"https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"基于 ThreeJS 框架的魔方微信小游戏实践",desc:"从 0 到 1，一步步带你基于 ThreeJS 实现一个炫酷的魔方微信小游戏",img:"https://user-gold-cdn.xitu.io/2019/2/25/16922a9c5a3527fa?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"前端面试之道",desc:"助你建立起完整的前端知识架构体系，探究知识的原理，深入了解大厂常考知识点",img:"https://user-gold-cdn.xitu.io/2018/12/25/167e14942f2dcf44?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"Vue.js 组件精讲",desc:"iView 作者 3 年的 Vue.js 组件开源积累，Vue.js 组件知识深入剖析",img:"https://user-gold-cdn.xitu.io/2018/12/18/167c119a41e444d5?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"React 实战：设计模式和最佳实践",desc:"深入了解 React 应用中的设计模式，总结业界验证的最佳实践，更进一步，了解React 未来新功能 Suspense 和 Hooks。",img:"https://user-gold-cdn.xitu.io/2018/12/4/16779ed4b21a9fa5?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"Vue 项目构建与开发入门",desc:"从构建到开发，帮助 Vue 开发者提升项目构建与开发能力，基于 Vue CLI 3",img:"https://user-gold-cdn.xitu.io/2018/11/27/16754380a4c1a096?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"Taro 多端开发实现原理与项目实战",desc:"剖析 Taro 多端开发框架的实现原理，并通过电商核心的项目实战，帮助开发者快速上手多端项目。",img:"https://user-gold-cdn.xitu.io/2018/11/12/16706202cc6428df?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"前端性能优化原理与实践",desc:"毫秒必争！深入理解前端性能原理，将晦涩的知识转化为可爱的生产力，建立你自己的优化技能索引目录",img:"https://user-gold-cdn.xitu.io/2018/10/23/166a0387b91066b9?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"微信小游戏开发入门：从 0 到 1 实现井字棋游戏",desc:"构建自己的第一个微信小游戏，让你的社交和游戏创意变为现实",img:"https://user-gold-cdn.xitu.io/2018/9/18/165eb6f3cb9eb04f?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"基于 hapi 的 Node.js 小程序后端开发实践指南",desc:"基于 Node.js 搭建敏捷高效的 RESTful 接口服务，走上小程序开发的全栈之路",img:"https://user-gold-cdn.xitu.io/2018/9/11/165c7a188e490e48?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"微信小程序开发入门：从 0 到 1 实现天气小程序",desc:"从基础到实战，从开发环境搭建到开发、调试、上线，打通小程序开发全流程",img:"https://user-gold-cdn.xitu.io/2018/8/29/16584f1faa1c4262?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"React 组合式开发实践：打造企业管理系统五大核心模块",desc:"基于 React 的企业管理系统开发经验，带你学习如何抽象复杂业务逻辑，帮助团队实现效能提升",img:"https://user-gold-cdn.xitu.io/2018/9/5/165a8a3d93f6ca7d?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"区块链开发入门：从 0 到 1 构建基于以太坊智能合约的 ICO DApp",desc:"写给前端开发者的第一本区块链开发入门指南，通过 DApp 开发实战（基于以太坊创始人 V 神的 DAICO 设计思想），深入掌握区块链及以太坊技术",img:"https://user-gold-cdn.xitu.io/2018/5/17/1636d772f3d23cf1?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"基于 JavaScript 开发灵活的数据应用",desc:"使用 JavaScript、ECharts、Vue.js 等开发工具，完成各种数据结构的处理、转换、动态过滤以及数据可视化的开发。",img:"https://user-gold-cdn.xitu.io/2018/4/9/162a9c24e48d274b?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"Web 前端面试指南与高频考题解析",desc:"找工作面试是门技术活，掌握一定技巧可以让你事半功倍",img:"https://user-gold-cdn.xitu.io/2018/3/5/161f664af48f2400?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"大厂 H5 开发实战手册",desc:"京东、腾讯等大厂 H5 开发或 UI 开发工程师的真实实战技巧",img:"https://user-gold-cdn.xitu.io/2018/5/9/16342f9666cf9b8f?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"使用 webpack 定制前端开发环境",desc:"基于 4.x 版本，从细节和深度上弄懂 webpack，随心所欲定制前端开发环境",img:"https://user-gold-cdn.xitu.io/2018/3/2/161e5a0aebdab5ed?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"剖析 Vue.js 内部运行机制",desc:"把原理抽象为小 Demo，以一种对新手友好的方式带领读者漫游 Vue.js 的世界",img:"https://user-gold-cdn.xitu.io/2018/1/16/160fdc404b36a1a0?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"Git 原理详解及实用指南",desc:"让你不仅用上、更用明白的 Git 实用指南",img:"https://user-gold-cdn.xitu.io/2017/11/27/15ffbb05174a57f8?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"用 npm script 打造超溜的前端工作流",desc:"抛弃笨重的构建工具，拥抱轻巧而不失强大的 npm script，随小册赠送视频版教程。",img:"https://user-gold-cdn.xitu.io/2017/11/20/15fd699517c3c6a4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"如何使用 Canvas 制作出炫酷的网页背景特效",desc:"从零开始学习 Canvas 相关知识，分析其特效，最终制作出炫酷的网页背景",img:"https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"}];n(13);class f extends i.a.Component{constructor(e){super(e);let t=null;t=e.staticContext.initialData||{},this.state={page:t.page,fetchData:t.fetchData}}static async getInitialProps(){console.log("fetch data");return{fetchData:await new Promise(e=>{setTimeout(()=>{e({code:0,data:d})},100)}),page:{tdk:{title:"列表页 - react ssr",keywords:"前端技术江湖",description:"关键词"}}}}componentDidMount(){this.state.fetchData||f.getInitialProps().then(e=>{this.setState({fetchData:e.fetchData||[],page:e.page}),document.title=e.page.tdk.title}),this.state.page&&this.state.page.tdk&&(document.title=this.state.page.tdk.title)}render(){const{code:e,data:t}=this.state.fetchData||{};return i.a.createElement("div",null,t&&t.map((e,t)=>i.a.createElement("div",{key:t},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.desc))),!t&&i.a.createElement("div",null,"暂无数据"))}}var m=[{path:"/",component:p,exact:!0},{path:"/index",component:p,exact:!0},{path:"/list",component:f,exact:!0},{path:"*",component:function(){return React.createElement("div",null,"404页面")},exact:!0}];i.a.createContext({});i.a.Component;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){return i.a.createElement("div",null,"404拉 ")}var w=function({routeList:e}){return i.a.createElement(l,null,i.a.createElement(s.Switch,null,e.map(e=>e.initialData?i.a.createElement(s.Route,{key:e.path,exact:e.exact,path:e.path,render:t=>(t.initialData=e.initialData,i.a.createElement(e.component,t))}):i.a.createElement(s.Route,g({key:e.path},e))),i.a.createElement(s.Route,{to:"*",component:h})))};const b=n(14);var x=n(9),y=n.n(x),v=n(10),_=n.n(v),k=(n(2),n(11));const q=n.n(k).a.nodeServerPort||Object({NODE_ENV:"production"}).PORT,E=new y.a;E.use(_()("./dist/static")),E.use(async(e,t)=>{console.log("production"),console.log("string"),console.log(!0),console.log("boolean"),console.log("====");const n=e.request.path;if(n.indexOf(".")>-1)return e.body=null,t();console.log("ctx.request.path",e.request.path);let r=((e,t)=>{let n,r;for(var i of t)if(r=Object(o.matchPath)(e,i),r){n=i;break}return{targetRoute:n,targetMatch:r}})(n,m),{targetRoute:s,targetMatch:c}=r,l=s.component.getInitialProps,u={};l&&(u=await l());let{page:p}=u||{},d={title:"默认标题 - my react ssr",keywords:"默认关键词",description:"默认描述"};p&&p.tdk&&(d=p.tdk);const f={initialData:u},g=Object(a.renderToString)(i.a.createElement(o.StaticRouter,{location:n,context:f},i.a.createElement(w,{routeList:m}))),h=b();e.body=`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>${d.title}</title>\n    <meta name="keywords" content="${d.keywords}" />\n    <meta name="description" content="${d.description}" />\n     ${h.css.join("")}\n</head>\n<body>\n    <div id="root">\n       ${g}\n    </div>\n    <textarea id="ssrTextInitData" style="display:none;">\n    ${JSON.stringify(u)}\n    </textarea>\n</body>\n</html>\n</body>\n ${h.js.join("")}\n`,await t()}),E.listen(q),console.log("server is start .",`http://localhost:${q}`)}]);