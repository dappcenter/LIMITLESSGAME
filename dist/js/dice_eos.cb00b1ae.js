(function(t){function e(e){for(var r,u,i=e[0],o=e[1],s=e[2],f=0,l=[];f<i.length;f++)u=i[f],a[u]&&l.push(a[u][0]),a[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);h&&h(e);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={dice_eos:0},c=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var h=o;c.push([6,"chunk-vendors","chunk-common"]),n()})({6:function(t,e,n){t.exports=n("aa4c")},7:function(t,e){},aa4c:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game",{ref:"app",attrs:{symbol:"ETH",num:t.num,amount:t.amount,minAmount:t.minAmount,maxAmount:t.maxAmount,amountStep:t.amountStep,balance:t.balance,gas:t.gas,betLoading:t.betLoading,recordList:t.recordList,myRecordList:t.myRecordList,adRecordList:t.adRecordList,jackpotStart:t.jackpotStart,jackpotEnd:t.jackpotEnd,state:t.state,result:t.result,loading:t.loading,celebrateVisible:t.celebrateVisible,min:t.min,max:t.max},on:{"update:num":function(e){t.num=e},"update:amount":function(e){t.amount=e},bet:t.betSubmit,ended:t.betEnd,addRecord:t.addRecord}})],1)},c=[],u=(n("a481"),n("ac6a"),n("6b54"),n("e814")),i=n.n(u),o=n("59ad"),s=n.n(o),h=(n("7f7f"),n("96cf"),n("3b8d")),f=n("1c70"),l=n("9944"),p=n("08fb"),m=n("232d"),d=n("115e"),b=n("d376"),g=n("8792"),w=n("2f98"),v=function(t){return new g["a"].eth.Contract(d["a"],w["a"],{from:t})},x=function(t){return new g["a"].eth.Contract(b["a"],w["b"],{from:t})},k=(n("28a5"),n("7514"),n("d225")),R=n("b0b4"),j=n("bd86"),y=n("0926"),O=n("76b0"),L=n.n(O),S=n("842a"),A=n.n(S);L.a.plugins(new A.a);var _,$,E=O["Network"].fromJson({blockchain:"eos",host:"nodes.get-scatter.com",port:443,protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}),M=new y["JsonRpc"](E.fullhost()),P=function(){function t(){Object(k["a"])(this,t),Object(j["a"])(this,"scatter",null),Object(j["a"])(this,"account",null),Object(j["a"])(this,"eos",null)}return Object(R["a"])(t,[{key:"checkConnected",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.a.scatter.connect("limitless");case 2:return e=t.sent,e&&(this.scatter=L.a.scatter,this.eos=this.scatter.eos(E,y["Api"],{rpc:M}),console.log(this.eos),window.ScatterJS=null),t.abrupt("return",e);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"login",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.checkConnected();case 2:if(e=t.sent,e){t.next=5;break}return t.abrupt("return",-1);case 5:return n={accounts:[E]},t.prev=6,t.next=9,this.scatter.login(n);case 9:return this.account=this.scatter.identity.accounts.find(function(t){return"eos"===t.blockchain}),t.abrupt("return",this.account);case 13:t.prev=13,t.t0=t["catch"](6),console.log(t.t0);case 16:case"end":return t.stop()}},t,this,[[6,13]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){this.scatter.logout()}},{key:"getBalance",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.get_currency_balance("eosio.token",this.account.name,"EOS");case 2:return e=t.sent,t.abrupt("return",e[0].split(" ")[0]);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),t}(),C=P;L.a.plugins(new A.a);var J=O["Network"].fromJson({blockchain:"eos",host:"nodes.get-scatter.com",port:443,protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}),B=(new y["JsonRpc"](J.fullhost()),{data:function(){return{num:50,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],adRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:{},state:"bet",loading:!0,celebrateVisible:!1,min:1,max:97,debug:!1}},components:{Game:p["a"]},watch:{amount:function(){this.fixAmount()}},computed:{},created:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new C,t.next=3,e.login();case 3:if(n=t.sent,-1!=n){t.next=7;break}return console.log("未检测到Scatter"),t.abrupt("return");case 7:return this.account=n.name,t.next=10,e.getBalance();case 10:this.balance=t.sent,this.loading=!1,this.getRecord(),this.getAmoutParams(),this.getHighRoller();case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return");case 4:e=t.sent,this.gas=e.gasPrice,_=v(this.account),$=x(this.account),this.getJackpot(),setInterval(function(){n.getJackpot()},1e4);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getAmoutParams:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["a"])();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:this.amount=e.defaultAmount,this.minAmount=e.defaultAmount,this.maxAmount=e.maxAmount,this.amountStep=e.step;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getJackpot:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jackpotStart=this.jackpotEnd,t.next=3,web3.eth.getBalance(w["a"]);case 3:e=t.sent,this.jackpotEnd=Object(l["b"])(web3.utils.fromWei(e));case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fixAmount:function(){var t=this,e=s()(this.amount);isNaN(e)?this.amount="0.01":(e<.01?e=.01:e>10.2&&(e=10.2),this.$nextTick(function(){t.amount=e.toFixed(2)}))},getBetParams:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r.amountCache=r.amount,r.numCache=r.num,t.next=4,Object(f["b"])({betmask:r.num,amount:r.amount,address:r.account});case 4:if(e=t.sent,null!==e){t.next=8;break}return r.betLoading=!1,t.abrupt("return");case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),t.next=3,e();case 3:n=t.sent;case 4:if(28!=n.v){t.next=10;break}return t.next=7,e();case 7:n=t.sent,t.next=4;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),settle:function(t,e){Object(f["g"])({randomNumber:t,hash:e})},betEnd:function(){this.getBalance(),this.state="bet",this.betLoading=!1},getResult:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.methods.getInfo(e,n).call();case 2:return r=t.sent,a=i()(r[1].toString())||100,c=Object(l["b"])(Object(m["a"])(this.amountCache,this.numCache)),t.abrupt("return",{sha3Mod100:a,wins:c});case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),manualSettle:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,c,u=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getResult(e,n);case 2:r=t.sent,a=r.sha3Mod100,c=r.wins,this.result={sha3Mod100:a,wins:a<this.numCache?c:0},this.state="wait",setTimeout(function(){u.state="result"},5e3);case 8:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),submitVerify:function(){return 1==window.ethereum.networkVersion||this.debug?window.ethereum.selectedAddress?!(this.amount>this.balance)||(this.$warn(this.$t("at")),!1):(this.$warn(this.$t("as")),!1):(this.$error(this.$t("ax"),5e3),!1)},betSubmit:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.submitVerify()){t.next=2;break}return t.abrupt("return");case 2:return this.betLoading=!0,t.next=5,this.getBetParams();case 5:e=t.sent,_.methods.placeBet(e.betMask,e.modulo,e.commitLastBlock,e.commit,e.r,e.s).send({gas:"150000",gasPrice:web3.utils.toWei(this.gas+"","gwei"),from:this.account,value:web3.utils.toWei(this.amount+"","ether")}).catch(function(t){t.message.indexOf("User denied")>-1?n.$error(n.$t("au")):n.$error(n.$t("av")),n.betLoading=!1}),_.once("Commit",{},function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(r,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.settle(e.id,a.blockHash),n.manualSettle(e.id,a.blockHash);case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),prefixRecord:function(t){t._update=this.formatDate(t.updatedAt),t._wins=Object(l["b"])(t.wins),t._link="https://etherscan.io/tx/".concat(t.betTrx),t._bet=t.betMask,t._result='<div class="result-num">'.concat(t.sha3Mod100,"</div>")},getRecord:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["f"])();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.recordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyRecord:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["e"])({address:this.account});case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.myRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addRecord:function(t){this.prefixRecord(t),this.recordList.unshift(t),t.address==this.account&&this.myRecordList.unshift(t),this.recordList.length>20&&this.recordList.pop(),this.myRecordList.length>20&&this.myRecordList.pop()},formatDate:function(t){var e=new Date(t),n="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());return n.replace(/(\b\d\b)/g,"0$1")},getHighRoller:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){t._lossPer=Object(m["b"])({min:n.min,max:n.max,bet:t.betMask}),t._shortcutAddr=Object(l["a"])(t.address)}),this.adRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}}),T=B,H=n("2877"),V=Object(H["a"])(T,a,c,!1,null,null,null),N=V.exports,I=n("7128"),D=n("d5b3"),W=n("68b4");n("8e48");r["default"].config.productionTip=!1,r["default"].use(D["a"]),r["default"].use(W["a"]),new r["default"]({i18n:I["a"],render:function(t){return t(N)}}).$mount("#app")}});