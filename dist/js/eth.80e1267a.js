(function(e){function t(t){for(var a,s,i=t[0],u=t[1],c=t[2],h=0,m=[];h<i.length;h++)s=i[h],r[s]&&m.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={eth:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(e,t,n){e.exports=n("df42")},df42:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a,r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("layout",{ref:"app",attrs:{num:e.num,amount:e.amount,minAmount:e.minAmount,maxAmount:e.maxAmount,amountStep:e.amountStep,balance:e.balance,gas:e.gas,betLoading:e.betLoading,recordList:e.recordList,myRecordList:e.myRecordList,jackpotStart:e.jackpotStart,jackpotEnd:e.jackpotEnd,state:e.state,result:e.result},on:{"update:num":function(t){e.num=t},"update:amount":function(t){e.amount=t},bet:e.betSubmit}})],1)},s=[],i=(n("a481"),n("ac6a"),n("59ad")),u=n.n(i),c=(n("96cf"),n("3b8d")),l=n("853d"),h=function(){return l["a"].get("/api/v1.0/dice/ethereum/getSuggestGasPrice")},m=function(e){var t=e.betmask,n=e.modulo,a=void 0===n?100:n,r=e.amount,o=e.address;return Object(l["a"])({method:"get",url:"/api/v1.0/dice/ethereum/getPlaceBetParams",params:{betmask:t,modulo:a,amount:r,address:o}})},d=function(e){return Object(l["a"])({method:"get",url:"/api/v1.0/dice/ethereum/settleBet",params:e})},f=function(){return Object(l["a"])({method:"get",url:"/api/v1.0/dice/ethereum/getBetsAll"})},p=function(e){var t=e.address;return Object(l["a"])({method:"get",url:"/api/v1.0/dice/ethereum/getBetsMe",params:{address:t}})},g=function(){return l["a"].get("/api/v1.0/dice/ethereum/getSuggestBetAmount")},b=n("2e6a"),w=n("8792"),v=n("9944"),y=n("88e9"),k=n("714b"),x={name:"app",data:function(){return{num:50,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:"",state:"bet",debug:!1}},components:{Layout:y["a"],Modal:k["a"]},watch:{amount:function(){this.fixAmount()}},created:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.getRecord(),this.recordWs(),this.getAmoutParams(),e.next=5,h();case 5:t=e.sent,this.gas=t.gasPrice;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("undefined"!==typeof window.ethereum){e.next=3;break}return this.$refs["app"].showIntro(),e.abrupt("return");case 3:if(t=window.ethereum,console.log(t.networkVersion),1==t.networkVersion||this.debug){e.next=8;break}return this.$error(this.$t("ax"),5e3),e.abrupt("return");case 8:return setTimeout(function(){t.selectedAddress||r.$warn(r.$t("as"),5e3)},1500),e.next=11,t.enable().catch(function(e){return 4001==e.code&&r.$warn(r.$t("au")),null});case 11:if(n=e.sent,null!==n){e.next=14;break}return e.abrupt("return");case 14:this.account=n[0],this.getBalance(),this.getMyRecord(),a=Object(b["a"])(this.account),this.getJackpot(),setInterval(function(){r.getJackpot()},1e4);case 20:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{getAmoutParams:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(t=e.sent,null!==t){e.next=5;break}return e.abrupt("return");case 5:this.amount=t.defaultAmount,this.minAmount=t.defaultAmount,this.maxAmount=t.maxAmount,this.amountStep=t.step;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getBalance:function(){var e=this;w["a"].eth.getBalance(this.account).then(function(t){e.balance=Object(v["a"])(w["a"].utils.fromWei(t,"ether"))})},getJackpot:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.jackpotStart=this.jackpotEnd,e.next=3,a.methods.jackpotSize().call();case 3:t=e.sent,this.jackpotEnd=Object(v["a"])(w["a"].utils.fromWei(t));case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fixAmount:function(){var e=this,t=u()(this.amount);isNaN(t)?this.amount="0.01":(t<.01?t=.01:t>10.2&&(t=10.2),this.$nextTick(function(){e.amount=t.toFixed(2)}))},getBetParams:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m({betmask:a.num,amount:a.amount,address:a.account});case 2:if(t=e.sent,null!==t){e.next=6;break}return a.betLoading=!1,e.abrupt("return");case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),e.next=3,t();case 3:n=e.sent;case 4:if(28!=n.v){e.next=10;break}return e.next=7,t();case 7:n=e.sent,e.next=4;break;case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),settle:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t,n){var a,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d({randomNumber:t,hash:n});case 2:if(a=e.sent,null!==a){e.next=7;break}return this.betLoading=!1,this.state="bet",e.abrupt("return");case 7:this.state="result",this.result=a.sha3Mod100,a.wins>0?(this.$success(this.$t("aq",{num:a.wins}),3e3),this.$refs["app"].celebrate()):this.$error(this.$t("ar")),setTimeout(function(){r.getBalance(),r.state="bet",r.betLoading=!1},3500);case 11:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),betSubmit:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(1==ethereum.networkVersion||this.debug){e.next=3;break}return this.$error(this.$t("ax"),5e3),e.abrupt("return");case 3:if(ethereum.selectedAddress){e.next=6;break}return this.$warn(this.$t("as")),e.abrupt("return");case 6:if(!(this.amount>this.balance)){e.next=9;break}return this.$warn(this.$t("at")),e.abrupt("return");case 9:return this.betLoading=!0,e.next=12,this.getBetParams();case 12:t=e.sent,a.methods.placeBet(t.betMask,t.modulo,t.commitLastBlock,t.commit,t.r,t.s).send({from:this.account,gas:"300000",value:w["a"].utils.toWei(this.amount+"","ether")}).catch(function(e){console.log(e),e.message.indexOf("User denied")>-1?n.$error(n.$t("au")):n.$error(n.$t("av")),n.betLoading=!1}),a.once("Commit",{},function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(a,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n.state="wait",n.settle(t.id,r.blockHash);case 2:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}());case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRecord:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:if(t=e.sent,null!==t){e.next=5;break}return e.abrupt("return");case 5:t.forEach(function(e){e._update=n.formatDate(e.updatedAt),e._wins=Object(v["a"])(e.wins)}),this.recordList=t;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getMyRecord:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p({address:this.account});case 2:if(t=e.sent,null!==t){e.next=5;break}return e.abrupt("return");case 5:t.forEach(function(e){e._update=n.formatDate(e.updatedAt),e._wins=Object(v["a"])(e.wins)}),this.myRecordList=t;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),recordWs:function(){var e=this,t=new WebSocket("wss://ws1.limitless.vip","echo-protocol");t.onopen=function(){t.send("Hello WebSockets!")},t.onmessage=function(t){try{var n=JSON.parse(t.data);n._update=e.formatDate(n.updatedAt),n._wins=Object(v["a"])(n.wins),e.recordList.unshift(n),n.address==e.account&&e.myRecordList.unshift(n)}catch(a){}},t.onclose=function(){}},formatDate:function(e){var t=new Date(e),n="".concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getMinutes());return n.replace(/(\b\d\b)/g,"0$1")}}},L=x,S=n("2877"),I=Object(S["a"])(L,o,s,!1,null,null,null),j=I.exports,T=n("a925"),O={a:"FAIRNESS",b:"REFERRAL",c:"HELP",d:"BALANCE",e:"BET",f:"PREDICTION",g:"PAYOUT",h:"WINNING CHANGE",i:"PAYOUT AMOUNT",j:"Suggest Gas Price",k:"Jackpot Size",l:"Bet now for 2.50x LT reward",m:"All Bets",n:"My Bets",o:"Time",p:"Player",q:"Bet",r:"Prediction",s:"Payout",t:"Earning",u:"Lucky Number",v:"Verify",w:"Check",x:"DISCLAIMER",y:"LIMITLESS currently not support users from these countries or regions: China mainland、United States of American（Includes all US territories）.",z:"LIMITLESS can only participate in our games for users over the age of 18. LIMITLESS is a group of block chain games，contains potential finance risks. Player should aware these risks and be self-managed.",aa:"We have no intention of temping anyone to break any local state or national law. Player should have the responsibility to confirm if he/she behaviours do not violet the local law.",ab:"If you have any questions, welcome to join in our telegram and looking for help.",ac:"HELP",ad:"SUBMIT",ae:"Please use google chrome explorer and installed related plugins.",af:"If you have not using google chrome or installed Metamask/Tronlink plugins, you may not be able to play.（These plugins are installed on chrome and free）：",ag:"Please register yourselves and keep login, switch to mainnet (not any testnet).<br> Check if you can display your balance normally, or try to refresh the page before you start your game.<br> If you are not be able to access google extension store, you may download the offline package as follow:",ah:"FAIRNESS",ai:"Before each game is open to players, the smart contract generates a random seed through the current block, which is not controlled by the banker, miner or anyone.This seed is signed by the owner and returned to the smart contract (which can be viewed through the browser) and the player (which can be seen in the game) for verification and comparison after convenience.",aj:"At the end of the game, the server will display the original seed to prove that the system does not control or modify the seed in the whole game process, so as to eliminate the possibility of system cheating.",ak:"The results of all games can be verified by the corresponding seeds and signatures. In rare exceptional cases, betting failures may occur, when the system deducts from the account, and then returns to your wallet after the transaction fails to confirm.",al:"Best Blockchain Game now is online, play and get reward of LT. By pledging LT, the platform Profit Dividend can be obtained. The earlier the platform joins, the greater the revenue. Opportunities are plentiful, not capped.",am:"LIMITLESS for Any gambling on the platform will result in additional bonuses. The higher the VIP level, the higher the bonus amount!",an:"NOTICE：VIP bonus is calculated on the basis of irreversible transactions on the ETH block chain. In very few exceptional cases, the block producer may discard your transaction (which will not be deducted from your account), and the VIP bonus for that transaction will not be calculated.",ao:"Cumulative bet 1,000 USD Bonus 0.01%",ap:'When the balance in the user\'s wallet is insufficient, it can quickly recharge online through this entrance. The recharge website comes from a third-party payment platform, and has no cooperation with Limitless. The user knows the risk by default when recharging.<br><a href="">I understand, go ahead</a>',aq:"Congratulations! You have won 100 ETH",ar:"Sorry, you lose ~",as:"Please login your Metamask account.",at:"Balance is not enough.",au:"User refuse to login Metamask.",av:"Bet fail, please try it later ~",aw:"Please login your Metamask account.",ax:"Please switch to the main network."},E={a:"公平性",b:"邀请好友",c:"使用帮助",d:"余额",e:"下注",f:"小于次数获胜",g:"赔率",h:"中奖概率",i:"获胜金额",j:"建议汽油价格",k:"奖池",l:"现在投注可获得 2.50x LT",m:"所有投注",n:"我的投注",o:"时间",p:"用户",q:"投注",r:"预测数",s:"结果",t:"奖金",u:"幸运号码",v:"验证",w:"查看",x:"免责声明",y:"LIMITLESS目前不支持来自以下国家或地区的用户：中国大陆、美国（包括所有美国领土）。",z:"LIMITLESS禁止未满18岁的用户参与游戏。LIMITLESS是一款区块链游戏，包括一定程度的财务风险。玩家应该意识到这种风险并相应地进行自我管理。",aa:"我们无意诱使任何人违反任何地方、州或国家的法律。玩家的唯一责任是参与自身管辖范围内的法律条款，以确定行为的合法性。",ab:"如果您有任何的疑问，欢迎加入官方的电报群寻求帮助。",ac:"帮助说明",ad:"确定",ae:"请使用Chrome浏览器并安装插件钱包",af:"如果您还没有在Chrome浏览器上安装Metamask或者TronLink钱包，请点击以下链接进行下载（两款钱包均为Chrome浏览器上的免费插件）：",ag:"请自行注册并登录钱包，并切换至主网节点（非任何测试网络）。<br> 登录钱包后如果无法正常显示您的余额，请重新刷新页面再开始游戏。<br> 如果您无法访问Google应用商店，可点击以下链接进行下载及观看安装教程。",ah:"公平性",ai:"每局向玩家开放投注前，智能合约通过当前区块生成一个随机种子，该种子不由庄家、矿工或者任何人进行控制。此种子由拥有者签名后返还智能合约（可以通过浏览器进行查看）和玩家（可以在游戏内看到），方便之后验证对比。",aj:"当游戏结束时，服务器会把原始种子进行展示，以此证明系统在整个游戏过程中并未控制或者修改种子，杜绝系统作弊的可能性。",ak:"所有游戏的结果均可由对应的种子及签名来验证公平性。在极少特殊情况下，可能出现投注失败，此时系统会先从账户中扣除，然后在交易失败确认后再返回到您的钱包。",al:"最好玩的区块链游戏Limitless Game现已正式上线，投注即可获得代币LT。通过质押LT可以获得平台利润分红，越早加入，收益越大。机会多多，上不封顶",am:"LIMITLESS平台上进行的任何游戏投注，都将收获额外奖金。VIP等级越高，奖金额度越高！",an:"注：VIP奖金根据区块链上的不可逆交易进行计算。在极少特殊情况下，区块生产者可能丢弃您的交易（不会从您的账户扣款），该交易的VIP奖金将不会被计算。",ao:"累计投注 1,000 USD 奖金0.01%",ap:'当用户钱包中的余额不足时，可以快捷的通过此入口在线充值，充值网站来自第三方支付平台，与Limitless没有合作关系，用户在进行充值时默认了解此风险。<br><a href="">已了解，去充值</a>',aq:"恭喜您赢得 100 ETH",ar:"很遗憾没中奖，再接再厉~",as:"请在metamask登录您的账户",at:"地址余额不足",au:"用户拒绝了Metamask",av:"投注失败，请稍后再试~",aw:"请在Metamask登录您的账户",ax:"测试网络不支持，请切换到主网"},P={a:"공정한",b:"돌다.",c:"도움",d:"균형",e:"내기",f:"예측",g:"지출",h:"수상 변화",i:"지출 금액",j:"네가 가스 가격",k:"당첨 크기",l:"감히 지금 2.50x LT 것이옵니다.",m:"모든 걸다",n:"내 걸다",o:"시간",p:"선수",q:"내기",r:"예측",s:"지출",t:"이윤",u:"행운의 번호",v:"검증",w:"검사",x:"성명",y:"LIMITLESS 현재 지원하지 않습니다. 이 국가 및 지역 사용자: 미국 중국 、 미국 (포함한 모든 미국 영토).",z:"LIMITLESS 단지 우리 경기에 참가한 사용자 18세. LIMITLESS 한 무리의 블록 체인 게임 재무 잠재 위험 함유되어 있다. 이 선수는 반드시 위험을 알고, 자기 관리.",aa:"우리는 그저 전화 어떤 사람이 지방 나라 / 국가 법 깨다. 선수 책임이 확인, 만약 그가 / 그녀는 행위 현지 법 안 바이올렛.",ab:"문제가 있으면, 어서 오세요, 우리 전보 좀 찾아봐.",ac:"도움",ad:"제출",ae:"좀 google chrome 브라우저 플러그인 설치 관련.",af:"만약 네가 안 google 크롬 또는 metamask / tronlink 플러그인 설치, 너는 일으킬 수 있다.（이 플러그인은 설치된 chrome 및 자유）：",ag:"혼자 남아 주십시오, 로그인, 스위치 mainnet (아무 testnet).<br> 만약 당신의 균형 검사 표시할 수 있는 보통 했다, 또는 새로 고침 웹 페이지를 너 시합 전에 먼저.<br> 니가 안 들어갈 수 있도록 google 연기 가게 오프라인 가방 다운로드 수 있다:",ah:"공정한",ai:"한 게임 열기 전에 선수 똑똑한 계약 생성 무작위 피드 통해 현재 블록, 이 안 받는 은행가 광부 또는 어떤 것이다. 이 씨의 주인이 됐다, 계약 (다시 볼 수 있는 웹 브라우저, 통해 (이) 선수 중 볼 수 있다 게임) 및 비교 대조n 지금 편리하다.",aj:"경기가 끝난 후, 서버 표시됩니다. 원래 피드 증명 시스템 안 관리 및 수정 씨 전체 경기 과정 중, 이렇게 시스템 사기 없앨 수 있다.",ak:"그 결과 할 수 있는 모든 게임 해당하는 피드 및 서명 검증.보기 드문 사정이 있을 때, 도박 실패, 시스템 제한다 계정 후, 다시 지갑 거래 아직 확인.",al:"지금 가장 blockchain 게임 -, 게임, 잘 무지개 변형 세포 분해하다 물건, 이놈아.약속 플랫폼 무지개 변형 세포 분해하다 물건, 이익 배당금 얻을 수 있다.같이 일찍 플랫폼, 더 수입.기회를 많이 안 들고.",am:"LIMITLESS 어떤 내기 위해 플랫폼 추가 상여금 것이다.높은 수준 높은 vip, 보너스 금액!",an:"NOTICE：VIP 보너스 따라 이 블록 체인 위에 가 거래.거의 예외 없이 블록 프로듀서 버릴 수 있다, 너 거래 (안 공제 당신의 계좌), vip 보너스 계산 거래 안 될 것이다.",ao:"누적 내기 1000 USD 보너스 0.01%",ap:'이 균형 때 사용자 지갑 부족하다, 금방 다시 - 통해 이 입구.보급 사이트 온 측의 지불 플랫폼 협력, 끝이 없다.사용자 기본값 알고 있을 때 위험 충전.<br><a href="">알아, 가자.</a>',aq:"축하해!네가 이겼다 100 ETH",ar:"죄송합니다. 너 ~",as:"너 metamask 장부에 기입하다.",at:"B잔액이 부족하다.",au:"사용자 로그인 metamask 거절하다.",av:"감히 실패, 나중에 다시 주세요 ~",aw:"너 metamask 장부에 기입하다.",ax:"주 네트워크로 전환하십시오."};r["default"].use(T["a"]);var R=new T["a"]({locale:localStorage.getItem("lang")||"zh",messages:{en:O,zh:E,kr:P}}),A=R,M=n("d40e");n("8e48");r["default"].config.productionTip=!1,r["default"].use(M["a"]),new r["default"]({i18n:A,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=eth.80e1267a.js.map