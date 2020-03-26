(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/detail/scroll-comments"],{"096c":function(t,e,n){"use strict";n.r(e);var o=n("d5f9"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},4359:function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.comments,function(e,n){var o=t._f("formatTime")(e.create_time);return{$orig:t.__get_orig(e),f0:o}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return o})},a5b2:function(t,e,n){"use strict";n.r(e);var o=n("4359"),r=n("096c");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var a,i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},d5f9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a991"));function r(t){return t&&t.__esModule?t:{default:t}}var u={props:["comments","goods_id"],filters:{formatTime:function(t){return o.default.gettime(t)}},methods:{open:function(){t.navigateTo({url:"/pages/detail-comment/detail-comment?id="+this.goods_id})}}};e.default=u}).call(this,n("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/detail/scroll-comments-create-component',
    {
        'components/detail/scroll-comments-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("a5b2"))
        })
    },
    [['components/detail/scroll-comments-create-component']]
]);
