(function(t){function e(e){for(var n,u,s=e[0],o=e[1],c=e[2],d=0,m=[];d<s.length;d++)u=s[d],a[u]&&m.push(a[u][0]),a[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);h&&h(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={horse_eth:0},i=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=o;i.push([8,"chunk-vendors","chunk-common"]),r()})({"256d":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("game",{ref:"app",attrs:{symbol:"ETH",num:t.num,amount:t.amount,introVisible:t.introVisible,minAmount:t.minAmount,maxAmount:t.maxAmount,amountStep:t.amountStep,balance:t.balance,gas:t.gas,betLoading:t.betLoading,recordList:t.recordList,myRecordList:t.myRecordList,adRecordList:t.adRecordList,jackpotStart:t.jackpotStart,jackpotEnd:t.jackpotEnd,state:t.state,result:t.result,loading:t.loading,horseList:t.horseList,min:t.min,max:t.max},on:{"update:num":function(e){t.num=e},"update:amount":function(e){t.amount=e},"update:introVisible":function(e){t.introVisible=e},"update:intro-visible":function(e){t.introVisible=e},bet:t.betSubmit,ended:t.betEnd,addRecord:t.addRecord}})],1)},i=[],u=(r("a481"),r("ac6a"),r("5d73")),s=r.n(u),o=r("e814"),c=r.n(o),h=r("59ad"),d=r.n(h),m=r("768b"),p=(r("96cf"),r("3b8d")),l=r("853d"),f=function(){return l["a"].get("/api/v1.0/horseracing/ethereum/getSuggestGasPrice")},b=function(t){var e=t.betmask,r=t.modulo,n=void 0===r?100:r,a=t.amount,i=t.address;return Object(l["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getPlaceBetParams",params:{betmask:e,modulo:n,amount:a,address:i}})},g=function(t){return Object(l["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/settleBet",params:t})},v=function(){return Object(l["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getBetsAll"})},w=function(t){var e=t.address;return Object(l["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getBetsMe",params:{address:e}})},x=function(){return l["a"].get("/api/v1.0/horseracing/ethereum/getSuggestBetAmount")},R=function(t){var e=t.winner;return Object(l["a"])({method:"get",url:"/api/v1.0/horseracing/ethereum/getVideoUrl",params:{winner:e}})},k=function(){return l["a"].get("/api/v1.0/horseracing/ethereum/getBetsHighRoller")},j=r("9944"),y=r("eaa8"),O=r("232d"),L=r("d34a"),A=new L["a"],S={data:function(){return{num:95,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],adRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:{},state:"bet",loading:!0,min:1,max:97,horseList:[95,75,48,38,18,10],debug:!0,introVisible:!1}},components:{Game:y["a"]},watch:{amount:function(){this.fixAmount()}},computed:{},created:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getRecord(),this.getAmoutParams(),this.getHighRoller();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r,n,a,i,u=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(A.checkInstalled()){t.next=3;break}return this.introVisible=!0,t.abrupt("return");case 3:return setTimeout(function(){A.checkMainNet()||u.debug?A.checkAddress()||u.$warn(u.$t("as"),5e3):u.$error(u.$t("ax"),5e3)},1500),t.next=6,Object(j["c"])(A.getAccount());case 6:if(e=t.sent,r=Object(m["a"])(e,2),n=r[0],a=r[1],!a){t.next=13;break}return 4001==a.code&&this.$warn(this.$t("au")),t.abrupt("return");case 13:return this.account=n,this.getBalance(),this.loading=!1,this.getMyRecord(),t.next=19,f();case 19:i=t.sent,this.gas=i.gasPrice,this.getJackpot(),setInterval(function(){u.getJackpot()},1e4);case 23:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getAmoutParams:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:this.amount=e.defaultAmount,this.minAmount=e.defaultAmount,this.maxAmount=e.maxAmount,this.amountStep=e.step;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getBalance:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A.getBalance();case 2:this.balance=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getJackpot:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jackpotStart=this.jackpotEnd,t.next=3,A.getJackpot();case 3:this.jackpotEnd=t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fixAmount:function(){var t=this,e=d()(this.amount);isNaN(e)?this.amount="0.01":(e<.01?e=.01:e>10.2&&(e=10.2),this.$nextTick(function(){t.amount=e.toFixed(2)}))},getBetParams:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n.amountCache=n.amount,n.numCache=n.num,t.next=4,b({betmask:n.num,amount:n.amount,address:n.account});case 4:if(e=t.sent,null!==e){t.next=8;break}return n.betLoading=!1,t.abrupt("return");case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),t.next=3,e();case 3:r=t.sent;case 4:if(128!=r.v){t.next=10;break}return t.next=7,e();case 7:r=t.sent,t.next=4;break;case 10:return t.abrupt("return",r);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),settle:function(t,e){g({randomNumber:t,hash:e})},betEnd:function(){this.getBalance(),this.state="bet",this.betLoading=!1},getResult:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A.getResult(e,r);case 2:return n=t.sent,a=Object(j["b"])(Object(O["a"])(this.amountCache,this.numCache)),t.abrupt("return",{sha3Mod100:n,wins:a});case 5:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),getVideo:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e){var r,n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.wins,n=e.sha3Mod100,a=this.mapResultHorse({betMask:this.numCache,wins:r,sha3Mod100:n}),t.next=4,R({winner:a});case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),manualSettle:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,a,i,u,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getResult(e,r);case 2:return n=t.sent,a=n.sha3Mod100,i=n.wins,u={sha3Mod100:a,wins:a<this.numCache?i:0},t.next=8,this.getVideo(u);case 8:s=t.sent,u.video=s,this.result=u,this.state="result";case 12:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),submitVerify:function(){return 1==window.ethereum.networkVersion||this.debug?window.ethereum.selectedAddress?!(this.amount>this.balance)||(this.$warn(this.$t("at")),!1):(this.$warn(this.$t("as")),!1):(this.$error(this.$t("ax"),5e3),!1)},betSubmit:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r,n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.submitVerify()){t.next=2;break}return t.abrupt("return");case 2:return this.betLoading=!0,t.next=5,this.getBetParams();case 5:return e=t.sent,t.next=8,Object(j["c"])(A.bet(e,this.gas,this.amount));case 8:if(r=t.sent,n=Object(m["a"])(r,2),a=n[0],i=n[1],!i){t.next=18;break}return console.log("bet err"),console.log(i),i.message.indexOf("User denied")>-1?this.$error(this.$t("au")):this.$error(this.$t("av")),this.betLoading=!1,t.abrupt("return");case 18:console.log("commit"),this.settle(e.id,a.blockHash),this.manualSettle(e.id,a.blockHash);case 21:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mapBetHorse:function(t){return this.horseList.indexOf(c()(t))+1},mapResultHorse:function(t){var e=t.betMask,r=t.wins,n=t.sha3Mod100,a=this.mapBetHorse(e),i=c()(n);if(r>0)return a;var u=!0,o=!1,h=void 0;try{for(var d,p=s()(this.horseList.entries());!(u=(d=p.next()).done);u=!0){var l=Object(m["a"])(d.value,2),f=l[0],b=l[1];if(0==f&&i>=b)return 1==a?2:1;if(i<b&&i>=this.horseList[f+1])return f+1}}catch(g){o=!0,h=g}finally{try{u||null==p.return||p.return()}finally{if(o)throw h}}},prefixRecord:function(t){t._update=this.formatDate(t.updatedAt),t._wins=Object(j["b"])(t.wins),t._link="https://etherscan.io/tx/".concat(t.betTrx),t._bet=this.mapBetHorse(t.betMask),t._result=t._result='<div class="result-num">'.concat(this.mapResultHorse(t),"</div>")},getRecord:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){r.prefixRecord(t)}),this.recordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyRecord:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w({address:this.account});case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){r.prefixRecord(t)}),this.myRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addRecord:function(t){var e=this;t.address==this.account?setTimeout(function(){e.prefixRecord(t),e.recordList.unshift(t),e.myRecordList.unshift(t)},5e4):(this.prefixRecord(t),this.recordList.unshift(t)),this.recordList.length>20&&this.recordList.pop(),this.myRecordList.length>20&&this.myRecordList.pop()},formatDate:function(t){var e=new Date(t),r="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());return r.replace(/(\b\d\b)/g,"0$1")},getHighRoller:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){t._lossPer=Object(O["b"])({min:r.min,max:r.max,bet:t.betMask}),t._shortcutAddr=Object(j["a"])(t.address)}),this.adRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},$=S,M=r("2877"),_=Object(M["a"])($,a,i,!1,null,null,null),B=_.exports,P=r("7128"),H=r("d5b3"),V=r("68b4");r("8e48");n["default"].config.productionTip=!1,n["default"].use(H["a"]),n["default"].use(V["a"]),new n["default"]({i18n:P["a"],render:function(t){return t(B)}}).$mount("#app")},8:function(t,e,r){t.exports=r("256d")}});