(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-bindphone"],{"2afe":function(e,t,a){"use strict";a.r(t);var i=a("b93e"),n=a("4de6");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("a9d1");var s,r=a("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"1e2f8606",null,!1,i["a"],s);t["default"]=d.exports},"4de6":function(e,t,a){"use strict";a.r(t);var i=a("b874"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"793d":function(e,t,a){var i=a("d061");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("7b5fb590",i,!0,{sourceMap:!1,shadowMode:!1})},a9d1:function(e,t,a){"use strict";var i=a("793d"),n=a.n(i);n.a},b874:function(e,t,a){"use strict";var i=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("bf09")),o=i(a("3782")),s=i(a("fe41")),r=getApp().globalData,d=r.navBar,l=r.appid,f=r.appsecret,u={components:{moveVerify:n.default},data:function(){return{resultData:{},mobile:"",verify_code:"",secret_str:"",identifying:"",navBar:d,back:!0}},methods:{leftClick:function(){uni.navigateBack({delta:1})},verifyResult:function(e){this.resultData=e,1!=this.resultData.flag||this.captcha()},verifyReset:function(){this.$refs.verifyElement.reset(),this.resultData={}},captcha:function(){var e=this,t=Math.round((new Date).getTime()/1e3),a={appid:l,timeStamp:t},i=o.default.hexMD5(s.default.objKeySort(a)+f),n=Object.assign({sign:i},a);s.default.getRequests("random",n,(function(t){var a=t.data;200==a.code?(e.secret_str=a.data.number,uni.setStorageSync("laravel_session",t.header["Set-Cookie"])):s.default.Toast(a.msg)}))},getCode:function(){var e=this,t=Math.round((new Date).getTime()/1e3);if(e.mobile){var a=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;if(a.test(e.mobile))if(e.secret_str){var i={appid:l,mobile:e.mobile,timeStamp:t},n=o.default.hexMD5(f+e.secret_str),d=o.default.hexMD5(s.default.objKeySort(i)+f),u=Object.assign({sign:d,secret_str:n},i);uni.request({url:r.rootUrl+"/mobileOrder/sendCode",method:"POST",header:{"content-type":"application/json",cookie:uni.getStorageSync("laravel_session")},data:u,success:function(t){200==t.data.code?(e.secret_str=t.data.data.random_str,s.default.Toast("验证码已发送到你手机中，请注意查收"),e.$refs.code.sendCode()):(e.verifyReset(),s.default.Toast(t.data.msg))}})}else s.default.Toast("请拖动滑块验证");else s.default.Toast("不能输入特殊字符和空格")}else s.default.Toast("手机号不能为空")},forget:function(){var e=this,t=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;if(this.mobile)if(t.test(this.mobile))if(this.verify_code){var a=Math.round((new Date).getTime()/1e3),i={appid:l,timeStamp:a},n=o.default.hexMD5(s.default.objKeySort(i)+f),d=Object.assign({sign:n,mobile:this.mobile,code:this.verify_code,identifying:e.identifying},i);uni.request({url:r.rootUrl+"/mobileOrder/bindMobile",method:"POST",data:d,header:{"content-type":"application/json",cookie:uni.getStorageSync("laravel_session")},success:function(e){if(200==e.data.code){var t=e.data;s.default.Toast("手机号绑定成功"),uni.setStorageSync("cdj_token",t.data.token),uni.setStorageSync("is_child",t.data.is_child),uni.setStorageSync("is_miniBind",t.data.is_bind),setTimeout((function(){uni.switchTab({url:"../tabar/index"})}),1e3)}else 403==e.data.code?(s.default.Toast("绑定手机成功，请耐心等待审核"),setTimeout((function(){uni.navigateTo({url:"./login"})}),1e3)):s.default.Toast(e.data.msg)}})}else s.default.Toast("请输入验证码");else s.default.Toast("不能输入特殊字符和空格");else s.default.Toast("手机号不能为空")}},onLoad:function(e){this.identifying=e.identifying}};t.default=u},b93e:function(e,t,a){"use strict";var i={"uni-nav-bar":a("01c8").default,"my-identifyingcode":a("858d").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"register"},[a("uni-nav-bar",{attrs:{"left-icon":"arrowleft",title:"更换手机","status-bar":e.navBar,fixed:"true"},on:{clickLeft:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"get_info"},[a("v-uni-view",[a("v-uni-text",[e._v("手机号")]),a("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号","placeholder-class":"place_style"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),a("move-verify",{ref:"verifyElement",on:{result:function(t){arguments[0]=t=e.$handleEvent(t),e.verifyResult.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"flex"},[a("v-uni-text",[e._v("验证码")]),a("v-uni-view",{staticClass:"flex_left_right",staticStyle:{width:"79%"}},[a("v-uni-input",{attrs:{type:"number","placeholder-class":"place_style"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.back=!1}},model:{value:e.verify_code,callback:function(t){e.verify_code=t},expression:"verify_code"}}),a("my-identifyingcode",{ref:"code",on:{getCode:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"submit_button button_style",class:{gray_b:e.back},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forget.apply(void 0,arguments)}}},[e._v("立即绑定")])],1)},o=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}))},d061:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-1e2f8606]{background:#fff}.register .get_info[data-v-1e2f8606]{background:#fff;padding:0 %?20?%;margin-top:%?10?%}.register .get_info>uni-view[data-v-1e2f8606]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f7f6f6}.register .get_info>uni-view>uni-text[data-v-1e2f8606]{width:%?150?%;color:grey}.register .button_style[data-v-1e2f8606]{font-size:%?32?%;width:%?384?%;height:%?64?%;line-height:%?64?%}.register .now_login[data-v-1e2f8606]{color:#a1a1a1;text-align:center;font-size:%?24?%}.register .agree[data-v-1e2f8606]{position:fixed;width:100%;bottom:%?20?%;text-align:center;font-size:%?24?%;color:#418d5f}body.?%PAGE?%[data-v-1e2f8606]{background:#fff}",""]),e.exports=t}}]);