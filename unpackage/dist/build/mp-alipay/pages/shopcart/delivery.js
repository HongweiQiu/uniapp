(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/shopcart/delivery"],{"067a":function(t,e,n){},"54e0":function(t,e,n){"use strict";var a=n("067a"),i=n.n(a);i.a},"6f8c":function(t,e,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"f858"))},"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4ac6"))}},i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))},"834f":function(t,e,n){"use strict";(function(t){n("1995");a(n("66fd"));var e=a(n("ae86"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},add3:function(t,e,n){"use strict";n.r(e);var a=n("ef2e"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},ae86:function(t,e,n){"use strict";n.r(e);var a=n("6f8c"),i=n("add3");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("54e0");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=c.exports},ef2e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("4b89")),i=s(n("d07b"));function s(t){return t&&t.__esModule?t:{default:t}}var o=console,u=(o.log,getApp().globalData),c=u.appid,d=u.appsecret,r=(u.imgRemote,u.navBar),l={data:function(){return{address:"",contact:"",details:"",mobile:"",childzid:"",navBar:r,lat:"",lng:"",count:0}},methods:{leftClick:function(){t.switchTab({url:"../tabar/shopcart"})},mapPage:function(){var e=this;t.chooseLocation({success:function(t){e.address=t.address,e.lat=t.latitude,e.lng=t.longitude}})},memberAddressInfo:function(){var t=this,e=Math.round((new Date).getTime()/1e3),n={appid:c,timeStamp:e},s=a.default.hexMD5(i.default.objKeySort(n)+d),o=Object.assign({select_zid:this.childzid,sign:s},n);i.default.getRequests("memberAddressInfo",o,(function(e){if(200==e.data.code){var n=e.data.data;t.contact=n.contact,t.mobile=n.phone,t.address=n.address,t.details=n.details}}))},submit:function(){var t=this,e=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;if(this.contact)if(this.mobile)if(e.test(this.contact)){if(this.count++,1==this.count){setTimeout((function(){t.count=0}),500);var n=Math.round((new Date).getTime()/1e3),s={appid:c,timeStamp:n,contact:this.contact,mobile:this.mobile,address:this.address},o=a.default.hexMD5(i.default.objKeySort(s)+d),u=Object.assign({sign:o,details:this.details,latitude:this.lat,longitude:this.lng},s);i.default.postRequests("updateAddress",u,(function(e){200==e.data.code?(i.default.Toast("保存成功"),setTimeout((function(){t.leftClick()}),1e3)):i.default.Toast(e.data.msg)}))}}else i.default.Toast("输入的信息不能含有特殊字符和空格");else i.default.Toast("手机号不能为空");else i.default.Toast("联系人不能为空")}},onLoad:function(t){this.childzid=t.childzid,this.contact=t.contact,this.mobile=t.mobile,this.address=t.address,this.details=t.details;var e=t.count||1;1==e&&this.memberAddressInfo()}};e.default=l}).call(this,n("c11b")["default"])}},[["834f","common/runtime","common/vendor"]]]);