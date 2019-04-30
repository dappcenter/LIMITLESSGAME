(function(t){function e(e){for(var r,i,o=e[0],s=e[1],c=e[2],p=0,m=[];p<o.length;p++)i=o[p],a[i]&&m.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);h&&h(e);while(m.length)m.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={horse_eth:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=s;u.push([6,"chunk-vendors","chunk-common"]),n()})({"256d":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r,a=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game",{ref:"app",attrs:{num:t.num,amount:t.amount,minAmount:t.minAmount,maxAmount:t.maxAmount,amountStep:t.amountStep,balance:t.balance,gas:t.gas,betLoading:t.betLoading,recordList:t.recordList,myRecordList:t.myRecordList,jackpotStart:t.jackpotStart,jackpotEnd:t.jackpotEnd,state:t.state,result:t.result,loading:t.loading},on:{"update:num":function(e){t.num=e},"update:amount":function(e){t.amount=e},bet:t.betSubmit}})],1)},i=[],o=(n("a481"),n("ac6a"),n("59ad")),s=n.n(o),c=(n("96cf"),n("3b8d")),h=n("365c"),p=n("30b4"),m=n("8792"),f=n("9944"),d=n("eaa8"),l={data:function(){return{num:50,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:{},state:"bet",loading:!0,debug:!0,amountCache:50,numCache:.01}},components:{Game:d["a"]},watch:{amount:function(){this.fixAmount()}},computed:{},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getRecord(),this.recordWs(),this.getAmoutParams();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("undefined"!==typeof window.ethereum){t.next=3;break}return this.$refs["app"].showIntro(),t.abrupt("return");case 3:return setTimeout(function(){1==window.ethereum.networkVersion||a.debug?window.ethereum.selectedAddress||a.$warn(a.$t("as"),5e3):a.$error(a.$t("ax"),5e3)},1500),t.next=6,window.ethereum.enable().catch(function(t){return 4001==t.code&&a.$warn(a.$t("au")),null});case 6:if(e=t.sent,null!==e){t.next=9;break}return t.abrupt("return");case 9:return this.account=e[0],this.getBalance(),this.getMyRecord(),t.next=14,Object(h["c"])();case 14:n=t.sent,this.gas=n.gasPrice,r=Object(p["a"])(this.account),this.getJackpot(),setInterval(function(){a.getJackpot()},1e4);case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getAmoutParams:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["a"])();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:this.amount=e.defaultAmount,this.minAmount=e.defaultAmount,this.maxAmount=e.maxAmount,this.amountStep=e.step;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getBalance:function(){var t=this;m["a"].eth.getBalance(this.account).then(function(e){t.balance=Object(f["a"])(m["a"].utils.fromWei(e,"ether")),t.loading=!1})},getJackpot:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jackpotStart=this.jackpotEnd,t.next=3,r.methods.jackpotSize().call();case 3:e=t.sent,this.jackpotEnd=Object(f["a"])(m["a"].utils.fromWei(e));case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fixAmount:function(){var t=this,e=s()(this.amount);isNaN(e)?this.amount="0.01":(e<.01?e=.01:e>10.2&&(e=10.2),this.$nextTick(function(){t.amount=e.toFixed(2)}))},getBetParams:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["b"])({betmask:r.num,amount:r.amount,address:r.account});case 2:if(e=t.sent,null!==e){t.next=6;break}return r.betLoading=!1,t.abrupt("return");case 6:return t.abrupt("return",e);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),t.next=3,e();case 3:n=t.sent;case 4:if(28!=n.v){t.next=10;break}return t.next=7,e();case 7:n=t.sent,t.next=4;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),settle:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n){var r,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.state="wait",t.next=3,Object(h["f"])({randomNumber:e,hash:n});case 3:if(r=t.sent,null!==r){t.next=8;break}return this.betLoading=!1,this.state="bet",t.abrupt("return");case 8:this.state="result",this.result=r.sha3Mod100,r.wins>0?(this.$success(this.$t("aq",{num:r.wins,symbol:"ETH"}),3e3),this.celebrateVisible=!0):this.$error(this.$t("ar")),setTimeout(function(){a.getBalance(),a.state="bet",a.betLoading=!1},3500);case 12:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),betSubmit:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(1==window.ethereum.networkVersion||this.debug){t.next=3;break}return this.$error(this.$t("ax"),5e3),t.abrupt("return");case 3:if(window.ethereum.selectedAddress){t.next=6;break}return this.$warn(this.$t("as")),t.abrupt("return");case 6:if(!(this.amount>this.balance)){t.next=9;break}return this.$warn(this.$t("at")),t.abrupt("return");case 9:return this.betLoading=!0,t.next=12,this.getBetParams();case 12:e=t.sent,r.methods.placeBet(e.betMask,e.modulo,e.commitLastBlock,e.commit,e.r,e.s).send({gas:"150000",gasPrice:m["a"].utils.toWei(this.gas+"","gwei"),from:this.account,value:m["a"].utils.toWei(this.amount+"","ether")}).catch(function(t){t.message.indexOf("User denied")>-1?n.$error(n.$t("au")):n.$error(n.$t("av")),n.betLoading=!1}),r.once("Commit",{},function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(r,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.settle(e.id,a.blockHash);case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}());case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getRecord:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["e"])();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){t._update=n.formatDate(t.updatedAt),t._wins=Object(f["a"])(t.wins),t._link="https://etherscan.io/tx/".concat(t.betTrx)}),this.recordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyRecord:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["d"])({address:this.account});case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){t._update=n.formatDate(t.updatedAt),t._wins=Object(f["a"])(t.wins),t._link="https://etherscan.io/tx/".concat(t.betTrx)}),this.myRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),recordWs:function(){var t=this,e=new WebSocket("wss://ws1.limitless.vip","echo-protocol");e.onmessage=function(e){try{var n=JSON.parse(e.data);n._update=t.formatDate(n.updatedAt),n._wins=Object(f["a"])(n.wins),t.recordList.unshift(n),n.address==t.account&&t.myRecordList.unshift(n)}catch(r){t.$error(r.message),console.log(r)}}},formatDate:function(t){var e=new Date(t),n="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getMinutes());return n.replace(/(\b\d\b)/g,"0$1")}}},b=l,g=n("2877"),w=Object(g["a"])(b,u,i,!1,null,null,null),v=w.exports,x=n("7128"),k=n("d40e");n("8e48");a["default"].config.productionTip=!1,a["default"].use(k["a"]),new a["default"]({i18n:x["a"],render:function(t){return t(v)}}).$mount("#app")},6:function(t,e,n){t.exports=n("256d")}});