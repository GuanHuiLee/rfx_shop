(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/logistics-detail/logistics-detail"],{"1bd3":function(t,e,n){"use strict";(function(t){n("b6b5"),n("921b");i(n("66fd"));var e=i(n("c7ea"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8da0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{id:0,list:[]}},onLoad:function(e){if(!e.detail)return t.showToast({title:"非法参数",icon:"none"});this.id=JSON.parse(e.detail).id,this.getShipInfo()},methods:{getShipInfo:function(){var e=this,n={1:"在途中",2:"派件中",3:"已签收 ",4:"派送失败(拒签等)"};this.$H.get("/order/"+this.id+"/get_ship_info",{},{token:!0}).then(function(i){var u=n[i.result.deliverystatus];u&&t.setNavigationBarTitle({title:u}),e.list=i.result.list})}}};e.default=n}).call(this,n("6e42")["default"])},"9fdf":function(t,e,n){"use strict";n.r(e);var i=n("8da0"),u=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=u.a},c7ea:function(t,e,n){"use strict";n.r(e);var i=n("e488"),u=n("9fdf");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);var o,r=n("f0c5"),c=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=c.exports},e488:function(t,e,n){"use strict";var i,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})}},[["1bd3","common/runtime","common/vendor"]]]);