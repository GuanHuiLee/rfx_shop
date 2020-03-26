(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index/swiper-image"],{1355:function(t,e,n){"use strict";n.r(e);var r=n("9a93"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=u.a},"76ae":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},"910f":function(t,e,n){"use strict";n.r(e);var r=n("76ae"),u=n("1355");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);var i,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=o.exports},"9a93":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{resdata:[Array,Object],height:{type:String,default:"350"},preview:{type:Boolean,default:!1}},computed:{getStyle:function(){return"height: ".concat(this.height,"rpx;")},getUrls:function(){var t=[];for(var e in this.resdata)t.push(this.resdata[e].src);return t}},methods:{event:function(e,n){if(this.preview)return t.previewImage({current:n,urls:this.getUrls,indicator:"default"})}}};e.default=n}).call(this,n("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index/swiper-image-create-component',
    {
        'components/index/swiper-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("910f"))
        })
    },
    [['components/index/swiper-image-create-component']]
]);
