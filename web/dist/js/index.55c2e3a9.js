(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={index:0},o={index:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-141f1d87":"6d003a26","chunk-14d2e418":"4a453b10","chunk-20d253c5":"579cd4f2","chunk-22dece4e":"d90f78aa","chunk-26cc1f8f":"1fb61c16","chunk-2d0a4fde":"a1892a24","chunk-2d0afa39":"c1ef3224","chunk-2d0bce73":"4499f935","chunk-2d0c5700":"3d133d9f","chunk-2d0d76a6":"8e1a29a4","chunk-2d0daeb3":"58a4f15e","chunk-2d207759":"e88b37b6","chunk-4fae512a":"cb0504d5","chunk-51b64701":"1821b57c","chunk-5aca0836":"7a3a5f40","chunk-5db82f0c":"e82b051a","chunk-6955f844":"3bc93efb","chunk-77a33456":"1ee007a9","chunk-77b2d504":"cf0bdd9d","chunk-bde9bbc0":"35bb7653","chunk-c39e5b9a":"f9db0cd4","chunk-e11c2bda":"32ad1183","chunk-046e590c":"40f42662","chunk-0e8dbb5f":"9b6b84ce","chunk-2bcfbabe":"7115086a","chunk-2d0e95df":"0118b3f4","chunk-b66bdb3e":"ec92846a","chunk-c35cc142":"f968b023","chunk-e3ab30f8":"78491f1a"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-141f1d87":1,"chunk-14d2e418":1,"chunk-20d253c5":1,"chunk-22dece4e":1,"chunk-26cc1f8f":1,"chunk-4fae512a":1,"chunk-51b64701":1,"chunk-5db82f0c":1,"chunk-6955f844":1,"chunk-77a33456":1,"chunk-77b2d504":1,"chunk-bde9bbc0":1,"chunk-e11c2bda":1,"chunk-046e590c":1,"chunk-0e8dbb5f":1,"chunk-2bcfbabe":1,"chunk-b66bdb3e":1,"chunk-c35cc142":1,"chunk-e3ab30f8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-141f1d87":"09f4af54","chunk-14d2e418":"95c79dda","chunk-20d253c5":"1ee10338","chunk-22dece4e":"1d3af35b","chunk-26cc1f8f":"a0ccf9af","chunk-2d0a4fde":"31d6cfe0","chunk-2d0afa39":"31d6cfe0","chunk-2d0bce73":"31d6cfe0","chunk-2d0c5700":"31d6cfe0","chunk-2d0d76a6":"31d6cfe0","chunk-2d0daeb3":"31d6cfe0","chunk-2d207759":"31d6cfe0","chunk-4fae512a":"09f4af54","chunk-51b64701":"09f4af54","chunk-5aca0836":"31d6cfe0","chunk-5db82f0c":"1d3af35b","chunk-6955f844":"c4257cb3","chunk-77a33456":"e0eb3850","chunk-77b2d504":"439841c9","chunk-bde9bbc0":"6a417862","chunk-c39e5b9a":"31d6cfe0","chunk-e11c2bda":"be282ce8","chunk-046e590c":"c120f90d","chunk-0e8dbb5f":"0d875ebb","chunk-2bcfbabe":"66bfbc46","chunk-2d0e95df":"31d6cfe0","chunk-b66bdb3e":"f01cebc8","chunk-c35cc142":"1579c98c","chunk-e3ab30f8":"8ad46891"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("64a9")},"14ee":function(e,t,n){},1914:function(e,t){e.exports=PhotoSwipe},"2dfc":function(e,t){},"338e":function(e,t,n){},"41cb":function(e,t,n){"use strict";n("7f7f");var a=n("8bbf"),r=n.n(a),o=n("6389"),c=n.n(o),i=n("9225");n("c0d6");r.a.use(c.a);var s=new c.a({mode:"history",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-2bcfbabe")]).then(n.bind(null,"7abe"))}},{path:"*",name:"notfound",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-2d0e95df")]).then(n.bind(null,"8cdb"))}},{path:"/install",name:"installer",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-c35cc142")]).then(n.bind(null,"a25c"))}},{path:"/:sname",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-2bcfbabe")]).then(n.bind(null,"7abe"))},children:[{path:"/",name:"disk",component:function(){return n.e("chunk-20d253c5").then(n.bind(null,"db7e"))}},{path:"pic",name:"pic",component:function(){return n.e("chunk-c39e5b9a").then(n.bind(null,"8a3a"))}},{path:"share",name:"share",component:function(){return n.e("chunk-77b2d504").then(n.bind(null,"e238"))}},{path:"recyclebin",name:"recyclebin",component:function(){return n.e("chunk-6955f844").then(n.bind(null,"4438"))}}]},{path:"/s/:alias",name:"share-info",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-046e590c")]).then(n.bind(null,"ce0d"))}},{path:"/s/:alias/draw",name:"share-draw",component:function(){return n.e("chunk-26cc1f8f").then(n.bind(null,"bc5a"))}},{path:"/f/editor",name:"editor",component:function(){return n.e("chunk-5aca0836").then(n.bind(null,"e9c7"))}},{path:"/viewer/pdf",name:"viewer",component:function(){return n.e("chunk-77a33456").then(n.bind(null,"9b9b"))}},{path:"/settings",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-b66bdb3e")]).then(n.bind(null,"61c2"))},children:[{path:"profile",name:"profile",component:function(){return n.e("chunk-4fae512a").then(n.bind(null,"31bb"))}},{path:"security",name:"security",component:function(){return n.e("chunk-141f1d87").then(n.bind(null,"2fff"))}},{path:"developer",name:"developer",component:function(){return n.e("chunk-51b64701").then(n.bind(null,"acca"))}}]},{path:"/admin",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-e3ab30f8")]).then(n.bind(null,"2953"))},children:[{path:"dashboard",name:"admin",component:function(){return n.e("chunk-2d0a4fde").then(n.bind(null,"0998"))}},{path:"users",name:"users",component:function(){return n.e("chunk-14d2e418").then(n.bind(null,"4da1"))}},{path:"storages",name:"storages",component:function(){return n.e("chunk-bde9bbc0").then(n.bind(null,"6a72"))}},{path:"settings",name:"settings",component:function(){return n.e("chunk-5db82f0c").then(n.bind(null,"c6e4"))}},{path:"settings/email",name:"settings-email",component:function(){return n.e("chunk-22dece4e").then(n.bind(null,"0a01"))}}]},{path:"/u",component:function(){return Promise.all([n.e("chunk-e11c2bda"),n.e("chunk-0e8dbb5f")]).then(n.bind(null,"9ed6"))},children:[{path:"signin",name:"signin",meta:{title:"用户登录"},component:function(){return n.e("chunk-2d0daeb3").then(n.bind(null,"6e3a"))}},{path:"signout",name:"signout",meta:{title:"用户登出"},component:function(){return n.e("chunk-2d0d76a6").then(n.bind(null,"775e"))}},{path:"signin/:token64",name:"activate",meta:{title:"账户激活"},component:function(){return n.e("chunk-2d0afa39").then(n.bind(null,"0ed2"))}},{path:"signup",name:"signup",meta:{title:"用户注册"},component:function(){return n.e("chunk-2d0bce73").then(n.bind(null,"2a5c"))}},{path:"password-reset",name:"reset_apply",meta:{title:"密码找回"},component:function(){return n.e("chunk-2d0c5700").then(n.bind(null,"3ea9"))}},{path:"password-reset/:token64",name:"reset_confirm",meta:{title:"密码找回"},component:function(){return n.e("chunk-2d207759").then(n.bind(null,"a12e"))}}]}]}),u=function(e,t){r.a.zpan.System.optGet("core.site").then((function(t){var n=t.data,a=n.name;e&&(a+="- ".concat(e)),window.document.title=a,i["a"].locale=n.locale})).catch((function(e){e.response&&520==e.response.status&&t({name:"installer"})}))};s.beforeEach((function(e,t,n){u(i["a"].t("title.".concat(e.name)),n),n()})),s.afterEach((function(){window.scrollTo(0,0)})),t["a"]=s},"423e":function(e){e.exports=JSON.parse('{"click-copy-link":"点击复制链接","copy-link":"复制链接","day":"天","op":{"close":"关闭","confirm":"确认","init":"初始化","reset":"重置","cancel":"取消","enable":"启用","disable":"禁用","rename":"重命名","delete":"删除","batch-delete":"批量删除","create-folder":"新建文件夹","create-file":"新建文件"},"msg":{"success":"成功","failed":"失败","batch-delete-success":"批量删除成功","create-success":"创建成功","delete-success":"删除成功","move-success":"移动成功","copy-success":"复制成功","copy-failed":"复制失败","rename-success":"重命名成功","save-success":"保存成功","clean-success":"清理成功","recovery-success":"恢复成功","cancel-success":"取消成功"},"dialog":{"moveto-title":"移动到","outlink-title":"下载外链","share-drawcode":"提取码","share-drawcode-switch":"使用提取码保护链接","share-link-with-pwd":"分享链接自带提取码","share-expire-time":"有效期","share-link":"链接地址","share-title":"分享链接","upload-click":"点击上传","upload-tips":"将文件拖到此处，或","upload-title":"上传队列"},"disk":{"delete":"删除","download":"下载","folder":"新建","upload":"上传"},"ft":{"breadcrumb":"全部文件"},"ftb":{"move":"移动到","remove":"删除","rename":"重命名"},"fth":{"name":"名称","size":"大小","updated":"最近更新"},"leftnav":{"audio":"音频","doc":"文档","files":"全部文件","image":"图片","share":"我的分享","recyclebin":"回收站","storage":"存储空间","video":"视频"},"share":{"auto-download-tips":"您的文件已经开始下载，如果没有开始请点击此处重试","created":"分享时间","drawcode":"提取码","drawcode-placeholder":"请输入提取码","drawfile":"提取文件","expired":"失效时间","link":"链接","name":"名称","cancel":"取消分享"},"recyclebin":{"recovery":"确认恢复？","delete":"彻底删除？","clean":"清空回收站"},"tips":{"batch-delete":"此操作将永久删除所选文件，是否继续？","create-folder":"请输入新的文件夹名称","create-file":"请输入新的文件名称","remove":"此操作将文件移动到回收站, 是否继续?","rename":"请输入新的名称","recyclebin":"提示：回收站也占用网盘空间，请及时清理哦~","share-cancel":"取消分享后，该条分享记录将被删除，好友将无法再访问此分享链接。 您确认要取消分享吗？","recovery":"确认还原选中的文件？","delete":"此操作将彻底删除该文件, 是否继续?","clean":"确认清空回收站？","deleting":"正在删除...","disable":"禁用后将不可用，是否继续？","enable":"确认启用？","secret-reset":"重置后，老的秘钥将无法使用，是否继续？","secret-init":"您尚未开通开发者权限，是否开通？"},"topbar":{"netdisk":"网盘","imghosting":"图床","search":"搜索...","profile":"个人主页","settings":"个人设置","s-platform":"管理后台","signout":"退出"},"title":{"disk":"我的文件","share":"我的分享","recyclebin":"回收站","picture":"我的图床","storage-quota":"存储配额","admin":"管理后台","storages":"存储管理","users":"用户管理","settings":"站点设置","settings-email":"发信邮箱"},"year":"年","admin":{"search-placeholder":"请输入要查找的用户邮箱...","storage-search-placeholder":"请输入要查找的存储空间...","btn-user-add":"添加新用户","btn-quota-update":"调整配额","btn-storage-add":"创建存储","btn-edit":"编辑","label-nickname":"用户昵称","label-email":"Email","label-role":"角色","label-status":"状态","label-storage":"配额","label-operation":"操作","label-quota":"存储配额","label-quota-change":"配额调整","label-password-reset":"密码重置","label-storage-manager":"存储管理","label-name":"名称","label-title":"标题","label-intro":"描述","label-bucket":"存储桶","label-endpoint":"接入点","label-region":"区域名称","label-custom_host":"自有域名","label-access_key":"AccessKey","label-secret_key":"SecretKey"},"cloudplatform":{"COS":"腾讯云","KODO":"七牛云","MINIO":"自建云","NOS":"网易云","OBS":"华为云","OSS":"阿里云","S3":"亚马逊","US3":"UColud","USS":"又拍云"}}')},"49f8":function(e,t,n){var a={"./en.json":"edd4","./zh-CN.json":"423e"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("8bbf"),r=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",{attrs:{id:"app"}})},c=[],i={data:function(){return{}},watch:{},computed:{},methods:{},mounted:function(){var e=this;this.$clipboard.on("success",(function(t){e.$message.success(e.$t("msg.copy-success")),t.clearSelection()})),this.$clipboard.on("error",(function(t){e.$message.error(e.$t("msg.copy-failed"))}))},beforeDestroy:function(){this.$clipboard.destroy()}},s=i,u=(n("034f"),n("2877")),l=Object(u["a"])(s,o,c,!1,null,null,null),d=l.exports,f=n("9225"),p=n("c0d6"),h=n("41cb"),m=n("bc3a"),b=n.n(m),k=n("5f72"),y=n.n(k),v={},g=b.a.create(v);g.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),g.interceptors.response.use((function(e){return e.data}),(function(e){if(b.a.isCancel(e))return Promise.reject(e.message?e.message:"Request canceled");if(e.response&&401==e.response.status)return window.location="/moreu/signin",Promise.reject("invalid login status");var t=e.message;return e.response&&e.response.data.msg&&(t=e.response.data.msg),k["Notification"].error(t),Promise.reject(e)})),Plugin.install=function(e,t){e.axios=g,window.axios=g,Object.defineProperties(e.prototype,{axios:{get:function(){return g}},$axios:{get:function(){return g}}})},r.a.use(Plugin);Plugin;var w=n("c32d"),S=n.n(w);r.a.prototype.$moment=S.a,r.a.filter("moment",(function(e,t){return t=t||"YYYY-MM-DD HH:mm:ss",S()(e).format(t)})),String.prototype.moment||(String.prototype.moment=function(e){return e=e||"YYYY-MM-DD HH:mm:ss",S()(this).format(e)});n("0fae");r.a.use(y.a);n("456d"),n("ac6a");var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("el-row",{staticClass:"header"},[n("el-breadcrumb",{staticClass:"bread",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.breadcrumb,(function(t){return n("el-breadcrumb-item",{key:t.dir,attrs:{index:t.dir,to:e.buildQuery(t.dir)}},[e._v(e._s(t.name))])})),1),n("span",{staticClass:"loadtips",staticStyle:{float:"right"}},[e._v(e._s(e.loadedtips))])],1),"grid"==e.layout?n("GridExplorer",{attrs:{loading:e.loading,moreButtons:e.moreButtons},on:{"on-click":e.onClick},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}}):n("ListExplorer",{attrs:{loading:e.loading,rowButtons:e.rowButtons,moreButtons:e.moreButtons},on:{"on-click":e.onClick,"scroll-end":e.onScrollEnd,"selection-change":e.onSelectionChange},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}})],1)},C=[],O=(n("a481"),n("f559"),n("28a5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"explorer"},e._l(e.data,(function(t){return n("div",{key:t.alias,staticClass:"explorer-item",on:{click:function(n){return e.onNameClick(t)}}},[t.dirtype?n("i",{staticClass:"matter-icon el-icon-folder",staticStyle:{color:"#ffc402"}}):n("i",{class:"iconfont "+e.type2icon(t.type)}),n("p",[e._v(e._s(t.name))])])})),0)}),P=[],_=(n("aef6"),n("768b")),B=(n("6762"),{props:{value:Array,loading:!1,rowButtons:Array,moreButtons:Array},data:function(){return{data:[]}},watch:{value:function(e,t){this.data=e}},methods:{isOfficeFile:function(e){var t=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.presentationml.presentation"];return t.includes(e)},officeIcon:function(e){var t=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],n=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],a=["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"];return t.includes(e)?"icon-doc":n.includes(e)?"icon-excel":a.includes(e)?"icon-ppt":void 0},type2icon:function(e){console.log(e);var t=e.split("/"),n=Object(_["a"])(t,2),a=n[0],r=n[1],o=["pdf","html","xml","psd","rtf"];if(o.includes(r))return"icon-".concat(r);var c=["json","yaml","x-yaml"];if(c.includes(r))return"icon-html";var i=["zip","x-gzip"];if(i.includes(r))return"icon-compressed-file";if(this.isOfficeFile(e))return this.officeIcon(e);var s=["audio","video","image","text"];return s.includes(a)?"icon-".concat(a):"icon-file"},onNameClick:function(e){e.dirtype?this.$emit("on-click","folder",e):e.type.endsWith("pdf")?this.$emit("on-click","pdf",e):e.type.startsWith("text")?this.$emit("on-click","text",e):e.type.startsWith("image")?this.$emit("on-click","image",e):e.type.startsWith("audio")||e.type.startsWith("video")?this.$emit("on-click","media",e):this.isOfficeFile(e.type)&&this.$emit("on-click","doc",e)}}}),E=B,j={mixins:[E],data:function(){return{}},methods:{onSelectionChange:function(e){this.$emit("selection-change",e)},onSelectable:function(e,t){if(!e.dirtype)return!0},handleCommand:function(e){e.action(e.row)},onScrollEnd:function(){this.$emit("scroll-end")}}},D=j,$=(n("ac82"),Object(u["a"])(D,O,P,!1,null,"27e97df8",null)),N=$.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:e.onScrollEnd,expression:"onScrollEnd"}],staticStyle:{width:"100%"},attrs:{height:"100%","tooltip-effect":"dark",size:"small",data:e.data,"highlight-current-row":""},on:{"selection-change":e.onSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"30",selectable:e.onSelectable}}),n("el-table-column",{attrs:{prop:"name",label:e.$t("fth.name"),"min-width":"200","show-overflow-tooltip":"",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.dirtype?n("i",{staticClass:"matter-icon el-icon-folder",staticStyle:{color:"#ffc402"}}):n("i",{class:"iconfont matter-icon "+e.type2icon(t.row.type)}),n("el-link",{staticClass:"matter-title",attrs:{underline:!1,href:"Javascript: void(0);"}},[n("span",{on:{click:function(n){return e.onNameClick(t.row)}}},[e._v(e._s(t.row.name))])])]}}])}),n("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"operation",staticStyle:{float:"right","vertical-align":"super"}},[e._l(e.rowButtons,(function(e){return n("el-link",{directives:[{name:"show",rawName:"v-show",value:!e.shown||e.shown(t.row),expression:"!item.shown || item.shown(scope.row)"}],key:e.name,attrs:{type:"primary",underline:!1}},[n("i",{class:e.icon+" el-icon--right",on:{click:function(n){return e.action(t.row)}}})])})),n("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:e.moreButtons&&e.moreButtons.length>0,expression:"moreButtons && moreButtons.length > 0"}],attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("el-link",{staticClass:"el-dropdown-link",attrs:{type:"primary",underline:!1}},[n("i",{staticClass:"el-icon-more el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.moreButtons,(function(a){return n("el-dropdown-item",{key:a.name,attrs:{command:{action:a.action,row:t.row}}},[e._v("\n              "+e._s(a.title)+"\n            ")])})),1)],1)],2)]}}])}),n("el-table-column",{attrs:{prop:"size",label:e.$t("fth.size"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.dirtype?n("div",[e._v("-")]):n("div",[e._v(e._s(t.row.size))])]}}])}),n("el-table-column",{attrs:{prop:"updated",label:e.$t("fth.updated"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("moment")(t.row.updated)))]}}])})],1)},M=[],A=n("521e"),T={mixins:[E],directives:{"el-table-infinite-scroll":A["a"]},data:function(){return{}},methods:{onSelectionChange:function(e){this.$emit("selection-change",e)},onSelectable:function(e,t){if(!e.dirtype)return!0},handleCommand:function(e){e.action(e.row)},onScrollEnd:function(){this.$emit("scroll-end")}}},U=T,R=(n("ed92"),Object(u["a"])(U,L,M,!1,null,"b4e2310a",null)),z=R.exports,F={components:{GridExplorer:N,ListExplorer:z},props:{layout:{type:String,default:"list"},dataLoader:Function,linkLoader:Function,rowButtons:Array,moreButtons:Array,rootDir:{type:String,default:""}},data:function(){return{currentDir:"",loading:!1,offset:0,limit:100,rows:[],total:0,selection:Array}},watch:{$route:"onRouteChange",layout:function(e,t){e!=t&&this.listRefresh()}},computed:{breadcrumb:function(){var e=[{name:this.$t("ft.breadcrumb"),dir:""}];if(!this.currentDir)return e;var t="";return this.currentDir.split("/").forEach((function(n){""!=n&&(e.push({name:n,dir:t+n+"/"}),t+="".concat(n,"/"))})),e},loadedtips:function(){var e=this.rows.length;return e==this.total?"已全部加载，共".concat(this.total,"个"):"已加载".concat(e,"个，共").concat(this.total,"个")}},methods:{onRouteChange:function(e,t){this.currentDir!=e.query.dir&&(this.currentDir=e.query.dir),this.listRefresh()},onSelectionChange:function(e){this.$emit("selection-change",e)},onScrollEnd:function(){0==this.total||this.rows.length!=this.total?this.listRefresh(this.offset,this.limit):console.log("no more")},listRefresh:function(e,t){var n=this;e||(e=0),t||(t=this.limit),this.loading=!0;var a=this.currentDir?this.currentDir:"";this.dataLoader(a,e,t).then((function(a){0==e?(n.rows=a.list,n.offset=t):(n.rows=n.rows.concat(a.list),n.offset+=n.limit),n.total=a.total,n.loading=!1}))},buildQuery:function(e){e.startsWith(this.rootDir)&&(e=e.replace(this.rootDir,""));var t=e?{dir:e}:{};return{query:t}},onClick:function(e,t){var n=this;"folder"!=e?this.linkLoader(t).then((function(a){n.$emit("file-open",e,t,a)})):this.$router.push(this.buildQuery(t.fullpath))}},mounted:function(){this.currentDir=this.$route.query.dir?this.$route.query.dir:""}},q=F,I=(n("636f"),Object(u["a"])(q,x,C,!1,null,"72354125",null)),Y=I.exports,H={FileExplorer:Y},K=function(e,t){Object.keys(H).forEach((function(t){e.component(t,H[t])}))},Q=K;r.a.use(Q);var W=n("b311"),G=n.n(W);r.a.prototype.$clipboard=new G.a(".copy-link");n("2dfc");var V=n("afa7");r.a.use(V["a"],{plyr:{},emit:["ended"]});var J=n("ee2d"),Z=n.n(J),X=(n("fefe"),n("603a")),ee=n.n(X),te=(n("fbc4"),n("1487")),ne=n.n(te);Z.a.use(ee.a,{Hljs:ne.a}),r.a.use(Z.a);var ae=n("d225"),re=n("b0b4"),oe={baseURL:"/api"},ce=b.a.create(oe);ce.interceptors.response.use((function(e){return e.data}),(function(e){if(e.response&&401==e.response.status)return window.location="/u/signin",Promise.reject("invalid login status");if(e.response&&520==e.response.status)return Promise.reject(e);var t=e.message;return e.response&&e.response.data.msg&&(t=e.response.data.msg),"get"!=e.response.config.method&&k["Notification"].error(t),Promise.reject(e)}));var ie=ce,se=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,[{key:"installDatabase",value:function(e){return ie.put("/system/database",e)}},{key:"createAdministrator",value:function(e){return ie.put("/system/account",e)}},{key:"optGet",value:function(e){return ie.get("/system/options/".concat(e))}},{key:"optSave",value:function(e,t){return ie.put("/system/options/".concat(e),t)}},{key:"matterPathEnvs",value:function(){return ie.get("/system/matter-path-envs")}},{key:"providers",value:function(){return ie.get("/system/providers")}}]),e}(),ue=se,le=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,[{key:"signup",value:function(e){return ie.post("/users",e)}},{key:"activate",value:function(e,t){var n={token:t,activated:!0};return ie.patch("/users/".concat(e),n)}},{key:"applyPasswordReset",value:function(e){var t={email:e};return ie.post("/tokens",t)}},{key:"passwordReset",value:function(e,t,n){var a={token:t,password:n};return ie.patch("/users/".concat(e),a)}},{key:"signin",value:function(e){return ie.post("/tokens",e)}},{key:"signout",value:function(){return ie.delete("/tokens")}},{key:"profileGet",value:function(){return ie.get("/user")}},{key:"updateProfile",value:function(e){return ie.put("/user/profile",e)}},{key:"updatePassword",value:function(e){return ie.put("/user/password",e)}},{key:"list",value:function(e){return ie.get("/users",{params:e})}},{key:"find",value:function(e){return ie.get("/users/".concat(e))}},{key:"delete",value:function(e){return ie.delete("/users/".concat(e))}},{key:"updatePasswordByUser",value:function(e,t){return ie.put("/users/".concat(e,"/password"),t)}},{key:"updateStorageByUser",value:function(e,t){return ie.put("/users/".concat(e,"/storage"),t)}},{key:"updateStatusByUser",value:function(e,t){return ie.put("/users/".concat(e,"/status"),t)}}]),e}(),de=le,fe=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,[{key:"create",value:function(e){return ie.post("/user/keys",{name:e})}},{key:"list",value:function(e){return ie.get("/user/keys",{params:e})}},{key:"find",value:function(e){return ie.get("/user/keys/".concat(e))}},{key:"delete",value:function(e){return ie.delete("/user/keys/".concat(e))}},{key:"resetSecret",value:function(e,t){return ie.patch("/user/keys/".concat(e,"/secret"),t)}}]),e}(),pe=fe,he=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,[{key:"list",value:function(e){return ie.get("/storages",{params:e})}},{key:"find",value:function(e){return ie.get("/storages/".concat(e))}},{key:"create",value:function(e){return ie.post("/storages",e)}},{key:"update",value:function(e){return ie.put("/storages/".concat(e.id),e)}},{key:"delete",value:function(e){return ie.delete("/storages/".concat(e))}}]),e}(),me=he,be=(n("7f7f"),n("90fe")),ke=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,[{key:"upload",value:function(e,t,n,a){var r=t.file,o={sid:e,name:t.filename,type:r.type,size:r.size,dir:n};return new Promise((function(e,n){ie.post("/matters",o).then((function(r){var o=r.data;be["a"].upload(t,o.uploader.upURL,o.uploader.upHeaders,a).then((function(){ie.patch("/matters/".concat(o.alias,"/done")).then((function(t){e(t.data)}))})).catch(n)})).catch(n)}))}},{key:"createFile",value:function(e,t,n){var a={sid:e,name:n.name,type:n.type,size:n.size,dir:t};return ie.post("/matters",a)}},{key:"createFolder",value:function(e,t,n){var a={sid:e,name:t,dir:n,is_dir:!0};return ie.post("/matters",a)}},{key:"uploadDone",value:function(e){return ie.patch("/matters/".concat(e,"/done"))}},{key:"get",value:function(e){return new Promise((function(t,n){ie.get("/matters/".concat(e)).then((function(e){t(e.data)})).catch(n)}))}},{key:"download",value:function(e){var t=this;return new Promise((function(n,a){t.get(e).then((function(e){be["a"].download(e.name,e.url).then((function(){n(e)})).catch(a)}))}))}},{key:"list",value:function(e){return new Promise((function(t,n){ie.get("/matters",{params:e}).then((function(e){var n=e.data;n.list=n.list.map((function(e){return e.size=be["a"].formatBytes(e.size,1),e.fullpath="".concat(e.parent).concat(e.name),e.dirtype&&(e.fullpath+="/"),e})),t(n)})).catch(n)}))}},{key:"rename",value:function(e,t){return ie.patch("/matters/".concat(e,"/name"),{name:t})}},{key:"move",value:function(e,t){return ie.patch("/matters/".concat(e,"/location"),{dir:t})}},{key:"copy",value:function(e,t){return ie.patch("/matters/".concat(e,"/duplicate"),{path:t})}},{key:"delete",value:function(e){return ie.delete("/matters/".concat(e))}}]),e}(),ye=ke,ve=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,[{key:"list",value:function(e){return ie.get("/shares",{params:e})}},{key:"find",value:function(e){return ie.get("/shares/".concat(e))}},{key:"create",value:function(e){return ie.post("/shares",e)}},{key:"remove",value:function(e){return ie.delete("/shares/".concat(e))}},{key:"draw",value:function(e,t){return ie.post("/shares/".concat(e,"/token"),{secret:t})}},{key:"findMatter",value:function(e){return ie.get("/shares/".concat(e,"/matter"))}},{key:"listMatters",value:function(e,t){return ie.get("/shares/".concat(e,"/matters"),{params:t})}},{key:"getMatter",value:function(e,t){return ie.get("/shares/".concat(e,"/matters/").concat(t))}}]),e}(),ge=ve,we=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,[{key:"list",value:function(e){return new Promise((function(t,n){ie.get("/recycles",{params:e}).then((function(e){var n=e.data;t(n)})).catch(n)}))}},{key:"recovery",value:function(e){return ie.put("/recycles/".concat(e))}},{key:"delete",value:function(e){return ie.delete("/recycles/".concat(e))}},{key:"clean",value:function(e){return ie.delete("/recycles",{params:{sid:e}})}}]),e}(),Se=we,xe=new ue,Ce=new de,Oe=new pe,Pe=new me,_e=new ye,Be=new ge,Ee=new Se,je={System:xe,User:Ce,UserKey:Oe,Storage:Pe,File:_e,Share:Be,Recyclebin:Ee},De={install:function(e,t){e.zpan=je,window.zpan=je,Object.defineProperties(e.prototype,{zpan:{get:function(){return je}},$zpan:{get:function(){return je}}})}};r.a.use(De);r.a.config.productionTip=!1,new r.a({i18n:f["a"],router:h["a"],store:p["a"],render:function(e){return e(d)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5f72":function(e,t){e.exports=ELEMENT},"636f":function(e,t,n){"use strict";n("c835")},6389:function(e,t){e.exports=VueRouter},"64a9":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},"90fe":function(e,t,n){"use strict";n("7f7f"),n("a481"),n("f559");var a=n("bc3a"),r=n.n(a),o={upload:function(e,t,n,a){var o=e.file;return new Promise((function(c,i){var s={headers:n,onUploadProgress:function(t){o.percent=t.loaded/t.total*100,e.onProgress&&e.onProgress(o)}};if(a){var u=r.a.CancelToken;s.cancelToken=new u(a)}t||i("none upload url"),window.axios.put(t,o,s).then((function(t){e.onSuccess&&e.onSuccess(),c(t)})).catch(i)}))},download:function(e,t){return new Promise((function(n,a){var r=document.createElement("a");r.href=t,r.download=e,r.click(),n()}))},formatBytes:function(e,t){if(0==e)return"0 Bytes";var n=1024,a=t+1||3,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,o)).toFixed(a))+" "+r[o]},setupPasteUpload:function(e){document.addEventListener("paste",(function(t){var n=null;if((t.clipboardData||t.originalEvent)&&(n=t.clipboardData||t.originalEvent.clipboardData),n&&n.items){t.preventDefault();var a=n.items[0];if(!a.type.startsWith("image"))return;var r=a.getAsFile(),o=r.name.replace("image",(new Date).getTime());e({file:r,filename:o})}}))},bytesUnits:function(){var e=1024,t=1024*e,n=1024*t,a=1024*n,r=1024*a,o=[{label:"KB",value:e},{label:"MB",value:t},{label:"GB",value:n},{label:"TB",value:a},{label:"PB",value:r}];return o},formatBytes2:function(e,t){var n={num:0,unitLabel:"Bytes",unitValue:0,format:function(){return"".concat(n.num," ").concat(n.unitLabel)}};if(!e)return n;for(var a=e,r=0;a>=1024;r++)a/=1024;var o=t+1||3;return n.num=parseFloat(a).toFixed(o),n.unitLabel=this.bytesUnits()[r-1].label,n.unitValue=this.bytesUnits()[r-1].value,Object.assign({},n)}};t["a"]=o},9225:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));n("4917"),n("ac6a");var a=n("8bbf"),r=n.n(a),o=n("a925");r.a.use(o["a"]);var c="zpan-locale",i=n("49f8");function s(){var e={};return i.keys().forEach((function(t){var n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];e[a]=i(t)}})),e}var u=new o["a"]({locale:"en",fallbackLocale:"en",messages:s()}),l=function(e){var t=localStorage.getItem(c);e?(t=e,localStorage.setItem(c,t)):t||(t=navigator.language),r.a.config.locale=t,u.locale=t};l(),t["a"]=u},ac82:function(e,t,n){"use strict";n("338e")},c0d6:function(e,t,n){"use strict";var a=n("8bbf"),r=n.n(a),o=n("5880"),c=n.n(o);r.a.use(c.a),t["a"]=new c.a.Store({state:{storages:[],cs:{}},mutations:{storages:function(e,t){e.storages=t},cs:function(e,t){e.cs=t}},actions:{}})},c32d:function(e,t){e.exports=moment},c835:function(e,t,n){},ed92:function(e,t,n){"use strict";n("14ee")},edd4:function(e){e.exports=JSON.parse('{"click-copy-link":"Click copy link","copy-link":"Copy Link","create-folder":"New Folder","day":"Days","op":{"close":"Close","confirm":"Confirm","cancel":"Cancel","enable":"Enable","disable":"Disable","rename":"Rename","delete":"Delete","batch-delete":"Batch Delete"},"msg":{"success":"Success","failed":"Failed","batch-delete-success":"Batch deleted!","create-success":"Created!","delete-success":"Deleted!","move-success":"Moved!","copy-success":"Copied!","copy-failed":"Copy failed","rename-success":"Renamed!","save-success":"Saved!","clean-success":"Cleaned!","recovery-success":"Recoveried!"},"dialog":{"moveto-title":"MoveTo","outlink-title":"Outlink","share-drawcode":"Draw Code","share-drawcode-switch":"Link protect using password","share-link-with-pwd":"Link with password","share-expire-time":"Expire Time","share-link":"Link Address","share-title":"Share Link","upload-click":"click to upload","upload-tips":"Drag the file here, or","upload-title":"Upload Queue"},"disk":{"delete":"Delete","download":"Download","folder":"New Folder","upload":"Upload"},"ft":{"breadcrumb":"All files"},"ftb":{"move":"MoveTo","remove":"Remove","rename":"Rename"},"fth":{"name":"Name","size":"Size","updated":"LastUpdated"},"leftnav":{"audio":"Audios","doc":"Documents","files":"All Files","image":"Pictures","share":"Shares","recyclebin":"Recycle Bin","storage":"Storage","video":"Videos"},"share":{"auto-download-tips":"Your file has started downloading, if it has not started, please click here to try again","created":"ShareTime","drawcode":"DrawCode","drawcode-placeholder":"Please input your draw code","drawfile":"Draw","expired":"ExpireTime","link":"ShareLink","name":"Name"},"recyclebin":{"recovery":"Recover file(s)?","delete":"Delete forever?","clean":"Empty the recycle bin"},"tips":{"batch-delete":"This operation will permanently delete the selected files, do you want to continue?","create-folder":"Please input folder name","remove":"This operation will permanently delete the file, do you want to continue?","rename":"Please input newly name","recyclebin":"Tip: The recycle bin also occupies the network disk space, please clean it up in time~","recovery":"Are you sure you want to recover the selected file(s)?","delete":"Deleted files cannot be recovered, are you sure you want to permanently delete the selected file(s)?","clean":"Are you sure to empty the Recycle Bin?","deleting":"Deleting..."},"topbar":{"netdisk":"Netdisk","imghosting":"Image Hosting","search":"Searching...","profile":"Profile","settings":"Settings","s-platform":"Manage Panel","signout":"Sign out"},"title":{"disk":"My Files","share":"My Shares","recyclebin":"Recycle Bin","picture":"Image Hosting","storage-quota":"Storage Quota"},"year":"Years","admin":{"search-placeholder":"Input the email...","storage-search-placeholder":"Input the storage...","btn-user-add":"Add User","btn-quota-update":"Change Quota","btn-storage-add":"Create Storage","btn-edit":"Edit","label-nickname":"Nickname","label-email":"Email","label-role":"Role","label-status":"Status","label-storage":"Quota","label-operation":"Operation","label-quota":"Storage Quota","label-quota-change":"Quota Change","label-password-reset":"Password Reset","label-storage-manager":"Storage","label-name":"Name","label-title":"Label","label-intro":"Intro","label-bucket":"Bucket","label-endpoint":"Endpoint","label-region":"Region","label-custom_host":"CustomHost","label-access_key":"AccessKey","label-secret_key":"SecretKey"},"cloudplatform":{"COS":"TencentCloud","KODO":"QiniuCloud","MINIO":"Self-hosted","NOS":"Netease","OBS":"HuaweiCloud","OSS":"AliyunCloud","S3":"AWSCloud","US3":"UColud","USS":"UPYun"}}')}});