(function(t){function e(e){for(var r,i,s=e[0],o=e[1],c=e[2],m=0,d=[];m<s.length;m++)i=s[m],a[i]&&d.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);h&&h(e);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={horse_eth:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=o;u.push([6,"chunk-vendors","chunk-common"]),n()})({"256d":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r,a,u=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game",{ref:"app",attrs:{symbol:"ETH",num:t.num,amount:t.amount,minAmount:t.minAmount,maxAmount:t.maxAmount,amountStep:t.amountStep,balance:t.balance,gas:t.gas,betLoading:t.betLoading,recordList:t.recordList,myRecordList:t.myRecordList,jackpotStart:t.jackpotStart,jackpotEnd:t.jackpotEnd,state:t.state,result:t.result,loading:t.loading,horseList:t.horseList},on:{"update:num":function(e){t.num=e},"update:amount":function(e){t.amount=e},bet:t.betSubmit,ended:t.betEnd,addRecord:t.addRecord}})],1)},s=[],o=(n("a481"),n("768b")),c=(n("ac6a"),n("5d73")),h=n.n(c),m=(n("6b54"),n("e814")),d=n.n(m),f=n("59ad"),p=n.n(f),l=(n("96cf"),n("3b8d")),g=n("853d"),b=function(){return g["a"].get("/api/v1.0/horseracing/ethereum/getSuggestGasPrice")},v=function(t){var e=t.betmask,n=t.modulo,r=void 0===n?100:n,a=t.amount,u=t.address;return Object(g["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getPlaceBetParams",params:{betmask:e,modulo:r,amount:a,address:u}})},w=function(t){return Object(g["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/settleBet",params:t})},x=function(){return Object(g["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getBetsAll"})},k=function(t){var e=t.address;return Object(g["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getBetsMe",params:{address:e}})},R=function(){return g["a"].get("/api/v1.0/horseracing/ethereum/getSuggestBetAmount")},j=function(t){var e=t.winner;return Object(g["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getVideoUrl",params:{winner:e}})},y=n("8792"),O=n("9944"),L=n("eaa8"),$=n("9124"),A=n("30b4"),S=n("2f98"),M={data:function(){return{num:95,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:{},state:"bet",loading:!0,horseList:[95,75,48,38,18,10],debug:!0}},components:{Game:L["a"]},watch:{amount:function(){this.fixAmount()}},computed:{},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getRecord(),this.getAmoutParams();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n,u=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("undefined"!==typeof window.ethereum){t.next=3;break}return this.$refs["app"].showIntro(),t.abrupt("return");case 3:return setTimeout(function(){1==window.ethereum.networkVersion||u.debug?window.ethereum.selectedAddress||u.$warn(u.$t("as"),5e3):u.$error(u.$t("ax"),5e3)},1500),t.next=6,window.ethereum.enable().catch(function(t){return 4001==t.code&&u.$warn(u.$t("au")),null});case 6:if(e=t.sent,null!==e){t.next=9;break}return t.abrupt("return");case 9:return this.account=e[0],this.getBalance(),this.getMyRecord(),t.next=14,b();case 14:n=t.sent,this.gas=n.gasPrice,r=Object(A["a"])(this.account),a=Object(A["b"])(this.account),this.getJackpot(),setInterval(function(){u.getJackpot()},1e4);case 20:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getAmoutParams:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:this.amount=e.defaultAmount,this.minAmount=e.defaultAmount,this.maxAmount=e.maxAmount,this.amountStep=e.step;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getBalance:function(){var t=this;y["a"].eth.getBalance(this.account).then(function(e){t.balance=Object(O["a"])(y["a"].utils.fromWei(e,"ether")),t.loading=!1})},getJackpot:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jackpotStart=this.jackpotEnd,t.next=3,y["a"].eth.getBalance(S["a"]);case 3:e=t.sent,this.jackpotEnd=Object(O["a"])(y["a"].utils.fromWei(e));case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fixAmount:function(){var t=this,e=p()(this.amount);isNaN(e)?this.amount="0.01":(e<.01?e=.01:e>10.2&&(e=10.2),this.$nextTick(function(){t.amount=e.toFixed(2)}))},getBetParams:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r.amountCache=r.amount,r.numCache=r.num,t.next=4,v({betmask:r.num,amount:r.amount,address:r.account});case 4:if(e=t.sent,null!==e){t.next=8;break}return r.betLoading=!1,t.abrupt("return");case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),t.next=3,e();case 3:n=t.sent;case 4:if(128!=n.v){t.next=10;break}return t.next=7,e();case 7:n=t.sent,t.next=4;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),settle:function(t,e){w({randomNumber:t,hash:e})},betEnd:function(){this.getBalance(),this.state="bet",this.betLoading=!1},getResult:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,n){var r,u,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.methods.getInfo(e,n).call();case 2:return r=t.sent,u=d()(r[1].toString())||100,i=Object(O["a"])($["a"].eth(this.amountCache,this.numCache)),t.abrupt("return",{sha3Mod100:u,wins:i});case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),getVideo:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.wins,r=e.sha3Mod100,a=this.mapResultHorse({betMask:this.numCache,wins:n,sha3Mod100:r}),t.next=4,j({winner:a});case 4:return u=t.sent,t.abrupt("return",u);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),manualSettle:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,u,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getResult(e,n);case 2:return r=t.sent,a=r.sha3Mod100,u=r.wins,i={sha3Mod100:a,wins:a<this.numCache?u:0},t.next=8,this.getVideo(i);case 8:s=t.sent,i.video=s,this.result=i,this.state="result";case 12:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),submitVerify:function(){return 1==window.ethereum.networkVersion||this.debug?window.ethereum.selectedAddress?!(this.amount>this.balance)||(this.$warn(this.$t("at")),!1):(this.$warn(this.$t("as")),!1):(this.$error(this.$t("ax"),5e3),!1)},betSubmit:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.submitVerify()){t.next=2;break}return t.abrupt("return");case 2:return this.betLoading=!0,t.next=5,this.getBetParams();case 5:e=t.sent,r.methods.placeBet(e.betMask,e.modulo,e.commitLastBlock,e.commit,e.r,e.s).send({gas:"150000",gasPrice:y["a"].utils.toWei(this.gas+"","gwei"),from:this.account,value:y["a"].utils.toWei(this.amount+"","ether")}).catch(function(t){t.message.indexOf("User denied")>-1?n.$error(n.$t("au")):n.$error(n.$t("av")),n.betLoading=!1}),r.once("Commit",{},function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(r,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("commit"),n.settle(e.id,a.blockHash),n.manualSettle(e.id,a.blockHash);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mapBetHorse:function(t){return this.horseList.indexOf(d()(t))+1},mapResultHorse:function(t){var e=t.betMask,n=t.wins,r=t.sha3Mod100,a=this.mapBetHorse(e),u=d()(r);if(n>0)return a;var i=!0,s=!1,c=void 0;try{for(var m,f=h()(this.horseList.entries());!(i=(m=f.next()).done);i=!0){var p=Object(o["a"])(m.value,2),l=p[0],g=p[1];if(0==l&&u>=g)return 1==a?2:1;if(u<g&&u>=this.horseList[l+1])return l+1}}catch(b){s=!0,c=b}finally{try{i||null==f.return||f.return()}finally{if(s)throw c}}},prefixRecord:function(t){t._update=this.formatDate(t.updatedAt),t._wins=Object(O["a"])(t.wins),t._link="https://etherscan.io/tx/".concat(t.betTrx),t._bet=this.mapBetHorse(t.betMask),t._result=t._result='<div class="result-num">'.concat(this.mapResultHorse(t),"</div>")},getRecord:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.recordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyRecord:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k({address:this.account});case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.myRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addRecord:function(t){var e=this;t.address==this.account?setTimeout(function(){e.prefixRecord(t),e.recordList.unshift(t),e.myRecordList.unshift(t)},5e4):(this.prefixRecord(t),this.recordList.unshift(t))},formatDate:function(t){var e=new Date(t),n="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getMinutes());return n.replace(/(\b\d\b)/g,"0$1")}}},B=M,P=n("2877"),_=Object(P["a"])(B,i,s,!1,null,null,null),E=_.exports,H=n("7128"),T=n("d40e");n("8e48");u["default"].config.productionTip=!1,u["default"].use(T["a"]),new u["default"]({i18n:H["a"],render:function(t){return t(E)}}).$mount("#app")},6:function(t,e,n){t.exports=n("256d")}});