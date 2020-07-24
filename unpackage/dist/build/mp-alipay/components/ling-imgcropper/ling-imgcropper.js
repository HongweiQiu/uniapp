;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/ling-imgcropper/ling-imgcropper"],{"1b5d":function(t,i,e){"use strict";e.r(i);var o=e("d031"),s=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(i,t,(function(){return o[t]}))}(r);i["default"]=s.a},3152:function(t,i,e){"use strict";var o=e("8ad7"),s=e.n(o);s.a},"8ad7":function(t,i,e){},d031:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"image-cropper",props:{cropWidth:{type:Number,default:200},cropHeight:{type:Number,default:200},cropFixed:{type:Boolean,default:!1},iszoom:{type:Boolean,default:!1},src:{type:String},showResetBtn:{type:Boolean,default:!0},showRotateBtn:{type:Boolean,default:!0},proportion:{type:Number,default:0}},data:function(){var i=t.getSystemInfoSync(),e=i.pixelRatio;return{show:!1,scale:1,rotate:0,cropW:0,cropH:0,cropOldW:0,cropOldH:0,sysInfo:i,pixelRatio:e,imageRealWidth:0,imageRealHeight:0,cropOffsertX:0,cropOffsertY:0,startX:0,startY:0,border:5,x:0,y:0,startL:0,oldScale:1,scaling:!0}},watch:{src:function(t){t.length>0&&this.init()},show:function(t){}},computed:{containerTop:function(){var t=0;return t},containerHeight:function(){return this.windowHeight-48},windowWidth:function(){return this.sysInfo.windowWidth},windowHeight:function(){return this.sysInfo.windowHeight},imageRatio:function(){return this.imageRealHeight>0?this.imageRealWidth/this.imageRealHeight:0},imageWidth:function(){return this.imageRatio>=1?this.windowWidth:this.windowWidth*this.imageRatio},imageHeight:function(){return this.imageRatio>=1?this.windowWidth/this.imageRatio:this.windowWidth}},methods:{moveHandle:function(){},rotateHandler:function(){3==this.rotate?this.rotate=0:++this.rotate},init:function(){this.rotate=0,this.scale=1,this.cropW=this.cropWidth,this.cropH=this.cropHeight,t.showLoading({title:"图片加载中..."}),this.loadImage(this.src).then((function(i){t.hideLoading()})).catch((function(i){t.hideLoading(),t.showModal({title:"标题",content:"图片加载失败"})}))},loadImage:function(i){var e=this;return new Promise((function(o,s){t.getImageInfo({src:i,success:function(t){e.imageRealWidth=t.width,e.imageRealHeight=t.height,e.cropOffsertX=e.windowWidth/2-e.cropW/2,e.cropOffsertY=e.windowHeight/2-e.cropH/2,e.show=!0,e.$nextTick((function(){e.x=e.windowWidth/2-e.imageWidth/2,e.y=e.containerHeight/2-e.imageHeight/2})),o(t)},fail:function(t){e.show=!1,s(t)}})})).catch((function(t){}))},cancel:function(){this.show=!1,this.$emit("cancel")},confirm:function(i){t.showLoading({title:"裁剪中..."}),this.iszoom?(this.pixelRatio=1,console.log("this is fixed")):0!=this.proportion&&(this.proportion=this.pixelRatio);var e=this,o=t.createCanvasContext("myCanvas",e),s=e.pixelRatio,r=e.src,a=e.imageWidth*e.scale,h=e.imageHeight*e.scale,c=e.rotate,n=e.cropOffsertX-e.x-(e.imageWidth-a)/2,p=e.cropOffsertY-e.y-(e.imageHeight-h)/2;switch(o.setFillStyle("white"),o.fillRect(0,0,a,h),o.save(),o.rotate(90*c*Math.PI/180),c){case 1:n+=(h-a)/2,p-=(h-a)/2,o.drawImage(r,-p,n,a,-h);break;case 2:o.drawImage(r,n,p,-a,-h);break;case 3:n+=(h-a)/2,p-=(h-a)/2,o.drawImage(r,p,-n,-a,h);break;default:o.drawImage(r,-n,-p,a,h);break}o.restore(),o.draw(!0,(function(){o.toTempFilePath({destWidth:e.cropW*s,destHeight:e.cropH*s,success:function(o){t.hideLoading(),i.detail.tempFilePath=o.apFilePath,e.show=!1,e.$emit("confirm",i)},fail:function(i){t.hideLoading(),t.showModal({title:"提示",content:"裁剪失败"})}},e)}))},imgTouchStart:function(t){if(t.touches.length>=2){this.oldScale=this.scale,this.scaling=!0;var i=t.touches[0].pageX-t.touches[1].pageX,e=t.touches[0].pageY-t.touches[1].pageY,o=Math.sqrt(Math.pow(i,2)+Math.pow(e,2));this.startL=Math.max(i,e,o)}else this.scaling=!0,this.startX=t.touches[0].pageX-this.x,this.startY=t.touches[0].pageY-this.y},imgMoveing:function(t){if(this.scaling&&t.touches.length>=2){var i=this.oldScale,e=t.touches[0].pageX-t.touches[1].pageX,o=t.touches[0].pageY-t.touches[1].pageY,s=Math.sqrt(Math.pow(e,2)+Math.pow(o,2)),r=Math.max(e,o,s),a=r-this.startL,h=1;h=h/this.imageWidth>h/this.imageHeight?h/this.imageHeight:h/this.imageWidth,h=h>.1?.1:h;var c=h*a;a>0?i+=Math.abs(c):a<0&&i>Math.abs(c)&&(i-=Math.abs(c)),this.scale=i}else if(this.scaling){var n=t.touches[0].pageX-this.startX,p=t.touches[0].pageY-this.startY;console.log("单指"),this.x=n,this.y=p}},imgMoveEnd:function(){var t=this;setTimeout((function(){t.scaling=!1}),100)},touchStart:function(t){this.scaling||(this.startX=t.touches[0].pageX-this.cropOffsertX,this.startY=t.touches[0].pageY-this.cropOffsertY,this.cropOldW=this.cropW,this.cropOldH=this.cropH)},cropMoveing:function(t){if(!this.scaling){var i=this._cropX(t.touches[0].pageX-this.startX),e=this._cropY(t.touches[0].pageY-this.startY);this.cropOffsertX=i,this.cropOffsertY=e}},dragMove:function(t,i){if(this.cropFixed)return!1;var e=t.touches[0].pageX-this.startX,o=t.touches[0].pageY-this.startY;switch(i){case"left-top":this._cropMoveLeft(e),this._cropMoveTop(o);break;case"middle-top":this._cropMoveTop(o);break;case"right-top":this._cropMoveTop(o),this._cropMoveRight(e);break;case"middle-right":this._cropMoveRight(e);break;case"right-bottom":this._cropMoveRight(e),this._cropMoveBottom(o);break;case"middle-bottom":this._cropMoveBottom(o);break;case"left-bottom":this._cropMoveBottom(o),this._cropMoveLeft(e);break;case"middle-left":this._cropMoveLeft(e);break;default:break}},_cropMoveTop:function(t){var i=this._cropY(t);this.cropH+=this.cropOffsertY-i,this.cropOffsertY=i},_cropMoveRight:function(t){if(this.cropOldW+t>=this.windowWidth-this.border)return!1;this.cropW=this.cropOldW+(t-this.cropOffsertX)},_cropMoveBottom:function(t){if(this.cropOldH+t>=this.windowHeight-this.containerTop-this.border)return!1;this.cropH=this.cropOldH+(t-this.cropOffsertY)},_cropMoveLeft:function(t){var i=this._cropY(t);this.cropW+=this.cropOffsertX-i,this.cropOffsertX=i},_cropX:function(t){return t<=this.border?this.border:t+this.cropW>=this.windowWidth-this.border?this.windowWidth-this.cropW-this.border:t},_cropY:function(t){return t<=this.border?this.border:t+this.cropH>=this.windowHeight-this.containerTop-this.border?this.windowHeight-this.cropH-this.containerTop-this.border:t}}};i.default=e}).call(this,e("c11b")["default"])},e750:function(t,i,e){"use strict";var o,s=function(){var t=this,i=t.$createElement;t._self._c},r=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return o}))},ea0b:function(t,i,e){"use strict";e.r(i);var o=e("e750"),s=e("1b5d");for(var r in s)"default"!==r&&function(t){e.d(i,t,(function(){return s[t]}))}(r);e("3152");var a,h=e("f0c5"),c=Object(h["a"])(s["default"],o["b"],o["c"],!1,null,"7b37413a",null,!1,o["a"],a);i["default"]=c.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/ling-imgcropper/ling-imgcropper-create-component',
    {
        'components/ling-imgcropper/ling-imgcropper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("ea0b"))
        })
    },
    [['components/ling-imgcropper/ling-imgcropper-create-component']]
]);
