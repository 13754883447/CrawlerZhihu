webpackJsonp([1],{"6c2u":function(t,e){},IVdU:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},a=n("VU/8")({name:"app"},i,!1,function(t){n("6c2u")},null,null).exports,r=n("/ocq"),o={name:"index",data:function(){return{items:[]}},methods:{request:function(){var t=this;fetch("/api/rank").then(function(t){return t.json()}).then(function(e){t.items=e})}},computed:{getItems:function(){return this.items}},mounted:function(){var t=this;this.axios.get("/api/rank").then(function(e){console.log(e),t.items=e.data}).catch(function(t){console.log(t)})}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",t._l(t.items,function(e,s){return n("el-col",{key:s,staticClass:"padding10",attrs:{span:8}},[n("el-card",{staticClass:"card"},[n("div",{staticClass:"imgbox"},[n("img",{staticClass:"img",attrs:{src:e.src}})]),t._v(" "),n("div",[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v("浏览量："+t._s(e.views))]),t._v(" "),n("p",[t._v("点赞数："+t._s(e.thumbs))])])])],1)}))],1)},staticRenderFns:[]},u=n("VU/8")(o,c,!1,function(t){n("IVdU")},"data-v-628e1d2b",null).exports;s.default.use(r.a);var l=new r.a({routes:[{path:"/",name:"index",component:u}]}),d=n("mtWM"),p=n.n(d),f=n("zL8q"),m=n.n(f);n("tvR6");s.default.prototype.axios=p.a,s.default.use(m.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:l,template:"<App/>",components:{App:a}})},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9d181e32c29207cb73e4.js.map