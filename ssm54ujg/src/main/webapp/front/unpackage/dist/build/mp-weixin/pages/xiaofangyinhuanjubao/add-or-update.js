(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaofangyinhuanjubao/add-or-update"],{"506b":function(n,e,i){"use strict";i.r(e);var t=i("dbb3"),r=i("bd2d");for(var a in r)"default"!==a&&function(n){i.d(e,n,(function(){return r[n]}))}(a);i("d6f9");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"0c7f7f1b",null,!1,t["a"],u);e["default"]=s.exports},5496:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,i,t,r,a,u){try{var o=n[a](u),s=o.value}catch(c){return void i(c)}o.done?e(s):Promise.resolve(s).then(t,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var u=n.apply(e,i);function o(n){a(u,t,r,o,s,"next",n)}function s(n){a(u,t,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("d024"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{yonghuming:"",xingming:"",lianxifangshi:"",shijianshijian:"",shijianmiaoshu:"",tupian:"",shijiandizhi:"",userid:""},user:{},ro:{yonghuming:!1,xingming:!1,lianxifangshi:!1,shijianshijian:!1,shijianmiaoshu:!1,tupian:!1,shijiandizhi:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return u(t.default.mark((function r(){var a,u,o,s;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n.getStorageSync("nowTable"),r.next=3,i.$api.session(a);case 3:if(u=r.sent,i.user=u.data,i.ruleForm.yonghuming=i.user.yonghuming,i.ruleForm.xingming=i.user.xingming,i.ruleForm.lianxifangshi=i.user.lianxifangshi,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=16;break}return i.ruleForm.id=e.id,r.next=14,i.$api.info("xiaofangyinhuanjubao",i.ruleForm.id);case 14:u=r.sent,i.ruleForm=u.data;case 16:if(!e.cross){r.next=55;break}o=n.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 19:if((r.t1=r.t0()).done){r.next=55;break}if(s=r.t1.value,"yonghuming"!=s){r.next=25;break}return i.ruleForm.yonghuming=o[s],i.ro.yonghuming=!0,r.abrupt("continue",19);case 25:if("xingming"!=s){r.next=29;break}return i.ruleForm.xingming=o[s],i.ro.xingming=!0,r.abrupt("continue",19);case 29:if("lianxifangshi"!=s){r.next=33;break}return i.ruleForm.lianxifangshi=o[s],i.ro.lianxifangshi=!0,r.abrupt("continue",19);case 33:if("shijianshijian"!=s){r.next=37;break}return i.ruleForm.shijianshijian=o[s],i.ro.shijianshijian=!0,r.abrupt("continue",19);case 37:if("shijianmiaoshu"!=s){r.next=41;break}return i.ruleForm.shijianmiaoshu=o[s],i.ro.shijianmiaoshu=!0,r.abrupt("continue",19);case 41:if("tupian"!=s){r.next=45;break}return i.ruleForm.tupian=o[s],i.ro.tupian=!0,r.abrupt("continue",19);case 45:if("shijiandizhi"!=s){r.next=49;break}return i.ruleForm.shijiandizhi=o[s],i.ro.shijiandizhi=!0,r.abrupt("continue",19);case 49:if("userid"!=s){r.next=53;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,r.abrupt("continue",19);case 53:r.next=19;break;case 55:i.styleChange();case 56:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shijianshijianConfirm:function(n){console.log(n),this.ruleForm.shijianshijian=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.userid){e.next=3;break}return n.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(!n.ruleForm.id){e.next=8;break}return e.next=6,n.$api.update("xiaofangyinhuanjubao",n.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,n.$api.add("xiaofangyinhuanjubao",n.ruleForm);case 10:n.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},7211:function(n,e,i){"use strict";(function(n){i("73a0");t(i("66fd"));var e=t(i("506b"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"771c":function(n,e,i){},bd2d:function(n,e,i){"use strict";i.r(e);var t=i("5496"),r=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=r.a},d6f9:function(n,e,i){"use strict";var t=i("771c"),r=i.n(t);r.a},dbb3:function(n,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"d024"))}},r=function(){var n=this,e=n.$createElement;n._self._c},a=[]}},[["7211","common/runtime","common/vendor"]]]);