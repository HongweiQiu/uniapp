(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/user/accountedit"],{"5bf3":function(t,e,a){"use strict";var n={"uni-nav-bar":function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"f858"))},"evan-switch":function(){return a.e("components/evan-switch/evan-switch").then(a.bind(null,"dcd6"))},"uni-icons":function(){return Promise.all([a.e("common/vendor"),a.e("components/uni-icons/uni-icons")]).then(a.bind(null,"4ac6"))}},i=function(){var t=this,e=t.$createElement;t._self._c},c=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}))},"5deb":function(t,e,a){"use strict";(function(t){a("1995");n(a("66fd"));var e=n(a("f6be"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("c11b")["createPage"])},7586:function(t,e,a){"use strict";var n=a("c14c"),i=a.n(n);i.a},"88c5":function(t,e,a){"use strict";a.r(e);var n=a("9fab"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},"9fab":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(a("4b89")),i=c(a("d07b"));function c(t){return t&&t.__esModule?t:{default:t}}var o=console,u=(o.log,getApp().globalData),d=u.appid,s=u.appsecret,l=(u.imgRemote,u.navBar),r={data:function(){return{navBar:l,checked:!1,status:"",childInfo:"",select_zid:"",longitude:"",latitude:"",save:!0,password:"",count:"",hide:"",clickcount:0}},methods:{leftClick:function(){this.hide=!0,t.navigateBack({delta:1})},urlPage:function(){0==this.save?t.showModal({title:"放弃编辑",content:"地址信息未保存，确定离开吗？",success:function(e){e.confirm?t.navigateTo({url:"accountmange"}):e.cancel}}):t.navigateTo({url:"accountmange"})},mapPage:function(){var e=this;t.chooseLocation({success:function(t){e.childInfo.address=t.address;var a=e.tobdMap(t.longitude,t.latitude);e.lng=a.lng,e.lat=a.lat}})},tobdMap:function(t,e){var a=52.35987755982988,n=t,i=e,c=Math.sqrt(n*n+i*i)+2e-5*Math.sin(i*a),o=Math.atan2(i,n)+3e-6*Math.cos(n*a),u=c*Math.cos(o)+.0065,d=c*Math.sin(o)+.006;return{lng:u,lat:d}},deleteAccount:function(){var e=this;t.showModal({title:"提示",content:"是否删除该子账号？",success:function(a){if(a.confirm){var c=e.select_zid,o=Math.round((new Date).getTime()/1e3),u={appid:d,select_zid:c,timeStamp:o},l=n.default.hexMD5(i.default.objKeySort(u)+s),r={appid:d,timeStamp:o,select_zid:c,sign:l};i.default.getRequests("delChild",r,(function(e){101==e.data.code&&i.default.Toast("该账号已产生数据，无法删除"),200==e.data.code&&(i.default.Toast("删除成功"),setTimeout((function(){t.navigateTo({url:"accountmange"})}),1e3))}))}else a.cancel}})},openStatu:function(t){var e=this;e.checked=t.target.value},memberAddressInfo:function(){var t=this,e=t.select_zid,a=Math.round((new Date).getTime()/1e3),c={appid:d,timeStamp:a},o=n.default.hexMD5(i.default.objKeySort(c)+s),u={appid:d,timeStamp:a,sign:o,select_zid:e};i.default.getRequests("memberAddressInfo",u,(function(e){200==e.data.code&&(t.childInfo=e.data.data,t.status=e.data.data.status,0==t.status?t.checked=!1:1==t.status&&(t.checked=!0))}))},formSubmit:function(e){var a=this;if(this.clickcount++,1==this.clickcount){setTimeout((function(){a.clickcount=0}),500);var c=this,o=c.select_zid;if(0==c.checked)var u=0;else if(1==c.checked)u=1;var l=e.detail.value.nickname,r=e.detail.value.contact,f=e.detail.value.mobile,h=e.detail.value.password,m=c.childInfo.address,v=c.longitude,p=c.latitude,g=e.detail.value.details,b=Math.round((new Date).getTime()/1e3),M={address:m,appid:d,contact:r,mobile:f,nickname:l,password:h,status:u,timeStamp:b,zid:o},_=n.default.hexMD5(i.default.objKeySort(M)+s);if(""==l)return i.default.Toast("名称不能为空"),!1;if(""==r)return i.default.Toast("联系人不能为空"),!1;if(""==f)return i.default.Toast("手机号不能为空"),!1;var k={address:m,appid:d,contact:r,mobile:f,nickname:l,password:h,status:u,zid:o,timeStamp:b,sign:_,longitude:v,latitude:p,details:g};i.default.postRequests("editChild",k,(function(e){200==e.data.code&&(i.default.Toast("修改成功"),c.save=!0,setTimeout((function(){t.navigateTo({url:"accountmange"})}),1e3)),400==e.data.code&&i.default.Toast(e.data.msg)}))}}},onLoad:function(e){var a=t.getStorageSync("amend");a?(this.childInfo=a.childInfo,this.password=a.password,this.select_zid=a.select_zid):this.select_zid=e.select_zid,this.latitude=e.lat,this.longitude=e.lng,this.count=e.count||1,1==this.count&&this.memberAddressInfo()},onHide:function(){1==this.hide&&t.removeStorage({key:"amend"})}};e.default=r}).call(this,a("c11b")["default"])},c14c:function(t,e,a){},f6be:function(t,e,a){"use strict";a.r(e);var n=a("5bf3"),i=a("88c5");for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("7586");var o,u=a("f0c5"),d=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=d.exports}},[["5deb","common/runtime","common/vendor"]]]);