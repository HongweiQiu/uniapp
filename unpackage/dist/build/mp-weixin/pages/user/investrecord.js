(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/investrecord"],{4982:function(e,a,t){"use strict";var n={"uni-nav-bar":function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"01c8"))}},r=function(){var e=this,a=e.$createElement;e._self._c},c=[];t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return n}))},"547a":function(e,a,t){"use strict";(function(e){t("47a8"),t("921b");n(t("66fd"));var a=n(t("7446"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("543d")["createPage"])},"6d87":function(e,a,t){"use strict";var n=t("bd07"),r=t.n(n);r.a},7446:function(e,a,t){"use strict";t.r(a);var n=t("4982"),r=t("a0cd");for(var c in r)"default"!==c&&function(e){t.d(a,e,(function(){return r[e]}))}(c);t("6d87");var o,u=t("f0c5"),i=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);a["default"]=i.exports},a0cd:function(e,a,t){"use strict";t.r(a);var n=t("e1ce"),r=t.n(n);for(var c in n)"default"!==c&&function(e){t.d(a,e,(function(){return n[e]}))}(c);a["default"]=r.a},bd07:function(e,a,t){},e1ce:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=c(t("3782")),r=c(t("fe41"));function c(e){return e&&e.__esModule?e:{default:e}}var o=getApp().globalData,u=o.appid,i=o.appsecret,d=(o.imgRemote,o.navBar),l={data:function(){return{navBar:d,is_bind:"",orderId:"",placeRecharge:""}},methods:{leftClick:function(){e.navigateBack({delta:1})},order:function(){this.leftClick()},placeRechargea:function(){var e=this,a=e.orderId,t="mini",c=Math.round((new Date).getTime()/1e3),o={appid:u,id:a,type:t,timeStamp:c},d=n.default.hexMD5(r.default.objKeySort(o)+i),l={appid:u,id:a,type:t,timeStamp:c,sign:d};r.default.postRequests("placeRecharge",l,(function(a){200==a.data.code?e.placeRecharge=a.data.data:406==a.data.code?r.default.Toast("请先绑定微信"):r.default.Toast(a.data.msg)}))},querenchongzhi:function(){console.log("微信支付");var a=this;e.requestPayment({provider:"wxpay",orderInfo:a.placeRecharge.wxParams,timeStamp:a.placeRecharge.wxParams.timeStamp,nonceStr:a.placeRecharge.wxParams.nonceStr,package:a.placeRecharge.wxParams.package,signType:a.placeRecharge.wxParams.signType,paySign:a.placeRecharge.wxParams.paySign,success:function(a){r.default.Toast("充值成功"),setTimeout((function(){e.switchTab({url:"/pages/tabar/user"})}),1e3)},fail:function(e){console.log(e),r.default.Toast("充值失败")}})}},onLoad:function(e){this.orderId=e.orderId},onShow:function(){var e=this;e.placeRechargea()}};a.default=l}).call(this,t("543d")["default"])}},[["547a","common/runtime","common/vendor"]]]);