(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-bindphone"],{1081:function(e,t,i){"use strict";var a={"uni-nav-bar":i("01c8").default,"my-identifyingcode":i("858d").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"register"},[i("uni-nav-bar",{attrs:{"left-icon":"arrowleft",title:"更换手机","status-bar":e.navBar,fixed:"true"},on:{clickLeft:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"caution"},[e._v("绑定后可提高账号安全性")]),i("v-uni-view",{staticClass:"get_info"},[i("v-uni-view",[i("v-uni-text",[e._v("手机号")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号","placeholder-class":"place_style"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),i("move-verify",{ref:"verifyElement",on:{result:function(t){arguments[0]=t=e.$handleEvent(t),e.verifyResult.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"flex"},[i("v-uni-text",[e._v("验证码")]),i("v-uni-view",{staticClass:"flex_left_right",staticStyle:{width:"79%"}},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码","placeholder-class":"place_style"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.back=!1}},model:{value:e.verify_code,callback:function(t){e.verify_code=t},expression:"verify_code"}}),i("my-identifyingcode",{ref:"code",on:{getCode:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",{staticClass:"submit_button button_style",class:{gray_b:e.back},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forget.apply(void 0,arguments)}}},[e._v("立即绑定")])],1)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))},"2afe":function(e,t,i){"use strict";i.r(t);var a=i("1081"),n=i("4de6");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("931c");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"b9dc5352",null,!1,a["a"],s);t["default"]=d.exports},"4de6":function(e,t,i){"use strict";i.r(t);var a=i("b874"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"4e79":function(e,t,i){var a=i("f15b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("c1fb4eda",a,!0,{sourceMap:!1,shadowMode:!1})},"931c":function(e,t,i){"use strict";var a=i("4e79"),n=i.n(a);n.a},b874:function(e,t,i){"use strict";var a=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("bf09")),o=a(i("3782")),s=a(i("fe41")),r=getApp().globalData,d=r.navBar,l=r.appid,c=r.appsecret,u={components:{moveVerify:n.default},data:function(){return{resultData:{},mobile:"",verify_code:"",secret_str:"",identifying:"",navBar:d,back:!0}},methods:{leftClick:function(){uni.navigateBack({delta:1})},verifyResult:function(e){this.resultData=e,1!=this.resultData.flag||this.captcha()},verifyReset:function(){this.$refs.verifyElement.reset(),this.resultData={}},captcha:function(){var e=this,t=Math.round((new Date).getTime()/1e3),i={appid:l,timeStamp:t},a=o.default.hexMD5(s.default.objKeySort(i)+c),n=Object.assign({sign:a},i);s.default.getRequests("random",n,(function(t){var i=t.data;200==i.code?(e.secret_str=i.data.number,uni.setStorageSync("laravel_session",t.header["Set-Cookie"])):s.default.Toast(i.msg)}))},getCode:function(){var e=this,t=Math.round((new Date).getTime()/1e3);if(e.mobile){var i=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;if(i.test(e.mobile))if(e.secret_str){var a={appid:l,mobile:e.mobile,timeStamp:t},n=o.default.hexMD5(c+e.secret_str),d=o.default.hexMD5(s.default.objKeySort(a)+c),u=Object.assign({sign:d,secret_str:n},a);uni.request({url:r.rootUrl+"/mobileOrder/sendCode",method:"POST",header:{"content-type":"application/json",cookie:uni.getStorageSync("laravel_session")},data:u,success:function(t){200==t.data.code?(e.secret_str=t.data.data.random_str,s.default.Toast("验证码已发送到你手机中，请注意查收"),e.$refs.code.sendCode()):(e.verifyReset(),s.default.Toast(t.data.msg))}})}else s.default.Toast("请拖动滑块验证");else s.default.Toast("不能输入特殊字符和空格")}else s.default.Toast("手机号不能为空")},forget:function(){var e=this,t=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;if(this.mobile)if(t.test(this.mobile))if(this.verify_code){var i=Math.round((new Date).getTime()/1e3),a={appid:l,timeStamp:i},n=o.default.hexMD5(s.default.objKeySort(a)+c),d=Object.assign({sign:n,mobile:this.mobile,code:this.verify_code,identifying:e.identifying},a);uni.request({url:r.rootUrl+"/mobileOrder/bindMobile",method:"POST",data:d,header:{"content-type":"application/json",cookie:uni.getStorageSync("laravel_session")},success:function(e){if(200==e.data.code){var t=e.data;s.default.Toast("手机号绑定成功"),uni.setStorageSync("cdj_token",t.data.token),uni.setStorageSync("is_child",t.data.is_child),uni.setStorageSync("is_miniBind",t.data.is_bind),setTimeout((function(){uni.switchTab({url:"../tabar/index"})}),1e3)}else 403==e.data.code?(s.default.Toast("绑定手机成功，请耐心等待审核"),setTimeout((function(){uni.navigateTo({url:"./login"})}),1e3)):s.default.Toast(e.data.msg)}})}else s.default.Toast("请输入验证码");else s.default.Toast("不能输入特殊字符和空格");else s.default.Toast("手机号不能为空")}},onLoad:function(e){this.identifying=e.identifying}};t.default=u},f15b:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-b9dc5352]{background:#fff}.register .get_info[data-v-b9dc5352]{background:#fff;padding:0 %?20?%;margin-top:%?10?%}.register .get_info>uni-view[data-v-b9dc5352]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f7f6f6}.register .get_info>uni-view>uni-text[data-v-b9dc5352]{width:%?150?%;color:grey}.register .button_style[data-v-b9dc5352]{font-size:%?32?%;width:%?384?%;height:%?64?%;line-height:%?64?%}.register .now_login[data-v-b9dc5352]{color:#a1a1a1;text-align:center;font-size:%?24?%}.register .agree[data-v-b9dc5352]{position:fixed;width:100%;bottom:%?20?%;text-align:center;font-size:%?24?%;color:#418d5f}.register .caution[data-v-b9dc5352]{color:red;background:#f9d1cb;font-size:12px;height:25px;text-align:center;line-height:25px}body.?%PAGE?%[data-v-b9dc5352]{background:#fff}",""]),e.exports=t}}]);