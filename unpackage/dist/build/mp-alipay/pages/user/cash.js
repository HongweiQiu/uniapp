(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/user/cash"],{"261b":function(t,n,e){"use strict";e.r(n);var a=e("c0b2"),i=e("6f9e");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("c684");var o,u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=c.exports},"26a8":function(t,n,e){"use strict";(function(t){e("1995");a(e("66fd"));var n=a(e("261b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("c11b")["createPage"])},"6f9e":function(t,n,e){"use strict";e.r(n);var a=e("8ed0"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"8ed0":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("4b89")),i=r(e("d07b"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return l(t)||s(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,n){if(t){if("string"===typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,n):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return d(t)}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p=getApp().globalData,m=p.appid,h=p.appsecret,b=(p.imgRemote,p.navBar),g={data:function(){var t;return t={navBar:b,cashList:[{name:"正常",id:"2"},{name:"未开始",id:"1"},{name:"已使用",id:"3"},{name:"已过期",id:"4"}],list:[],page:1,num:10,bitmap:!0,loading:!0,activeTab:-1},f(t,"activeTab",0),f(t,"orderType",2),f(t,"count",0),t},methods:{tabClick:function(t){this.activeTab=t,this.orderType=this.cashList[t].id,this.list=[],this.page=1,this.myCash()},leftClick:function(){t.navigateBack({delta:1})},changeFirst:function(t){console.log(t),this.page=1,this.list=[],this.orderType=this.cashList[t].id,this.myCash()},myCash:function(){var t=this,n=this;if(1==n.page){n.loading=!0,n.bitmap=!0;var e=Math.round((new Date).getTime()/1e3),r=n.num,o=n.page,u=n.orderType,c={appid:m,timeStamp:e},s=a.default.hexMD5(i.default.objKeySort(c)+h),l={appid:m,num:r,page:o,timeStamp:e,type:u,sign:s};i.default.getRequests("couponsList",l,(function(n){var e=n.data;if(200==e.code){var a=e.data.list;t.list=a,0==a.length?(t.bitmap=!1,t.loading="空"):(t.bitmap=!0,a.length<10?t.loading=!1:t.loading=!0)}}))}},detailPage:function(n){var e=this;this.count++,1==this.count&&(setTimeout((function(){e.count=0}),1e3),t.navigateTo({url:"cashdetail?id="+n}))}},onShow:function(){this.myCash()},onReachBottom:function(){var t=this,n=Math.round((new Date).getTime()/1e3),e=t.num,r=t.page,u=t.orderType,c={appid:m,timeStamp:n},s=a.default.hexMD5(i.default.objKeySort(c)+h),l={appid:m,num:e,page:r+1,timeStamp:n,type:u,sign:s};i.default.getRequests("couponsList",l,(function(n){var e,a=n.data;200==a.code&&(""==n.data.data.list?t.loading=!1:((e=t.list).push.apply(e,o(n.data.data.list)),t.page+=1,t.loading=!0))}))}};n.default=g}).call(this,e("c11b")["default"])},c0b2:function(t,n,e){"use strict";var a={"uni-nav-bar":function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"f858"))},"my-o-tabs":function(){return e.e("components/o-tabs/index").then(e.bind(null,"2ce5"))},"uni-icons":function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"4ac6"))},"my-loading":function(){return e.e("components/loading/index").then(e.bind(null,"efc6"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.list,(function(n,e){var a=n.residue.split("."),i=n.residue.split(".");return{$orig:t.__get_orig(n),g0:a,g1:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},r=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}))},c684:function(t,n,e){"use strict";var a=e("f56e"),i=e.n(a);i.a},f56e:function(t,n,e){}},[["26a8","common/runtime","common/vendor"]]]);