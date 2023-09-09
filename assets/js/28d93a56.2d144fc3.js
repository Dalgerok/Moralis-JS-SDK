"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,d=u["".concat(m,".").concat(k)]||u[k]||c[k]||i;return a?n.createElement(d,r(r({ref:t},p),{},{components:a})):n.createElement(d,r({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const i={slug:"/moralisweb3/common-evm-utils/evmblockinput",title:"Interface: EvmBlockInput",sidebar_label:"EvmBlockInput"},r=void 0,o={unversionedId:"api/moralisweb3/common-evm-utils/evmblockinput",id:"api/moralisweb3/common-evm-utils/evmblockinput",title:"Interface: EvmBlockInput",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmBlockInput",source:"@site/docs/api/moralisweb3/common-evm-utils/evmblockinput.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmblockinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmblockinput",title:"Interface: EvmBlockInput",sidebar_label:"EvmBlockInput"},sidebar:"sidebar",previous:{title:"EvmBlockDateData",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockdatedata"},next:{title:"EvmBlockTokenStat",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstat"}},m={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"chain",id:"chain",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"difficulty",id:"difficulty",level:3},{value:"extraData",id:"extradata",level:3},{value:"gasLimit",id:"gaslimit",level:3},{value:"gasUsed",id:"gasused",level:3},{value:"hash",id:"hash",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"logsBloom",id:"logsbloom",level:3},{value:"miner",id:"miner",level:3},{value:"nonce",id:"nonce",level:3},{value:"number",id:"number",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"parentHash",id:"parenthash",level:3},{value:"receiptsRoot",id:"receiptsroot",level:3},{value:"sha3Uncles",id:"sha3uncles",level:3},{value:"size",id:"size",level:3},{value:"stateRoot",id:"stateroot",level:3},{value:"timestamp",id:"timestamp",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"totalDifficulty",id:"totaldifficulty",level:3},{value:"transactionCount",id:"transactioncount",level:3},{value:"transactions",id:"transactions",level:3},{value:"transactionsRoot",id:"transactionsroot",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmBlockInput"),(0,l.kt)("h1",{id:"interface-evmblockinput"},"Interface: EvmBlockInput"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmBlockInput"),(0,l.kt)("p",null,"This can be any object with valid block data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const input = {\n   chain: 1,\n   hash: '0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171',\n   difficulty: '7253857437305950',\n   extraData: '0xd883010a01846765746888676f312e31352e31856c696e7578',\n   gasLimit: '14977947',\n   gasUsed: '14964688',\n   logsBloom:\n       '0xdde5fc46c5d8bcbd58207bc9f267bf43298e23791a326ff02661e99790da9996b3e0dd912c0b8202d389d282c56e4d11eb2dec4898a32b6b165f1f4cae6aa0079498eab50293f3b8defbf6af11bb75f0408a563ddfc26a3323d1ff5f9849e95d5f034d88a757ddea032c75c00708c9ff34d2207f997cc7d93fd1fa160a6bfaf62a54e31f9fe67ab95752106ba9d185bfdc9b6dc3e17427f844ee74e5c09b17b83ad6e8fc7360f5c7c3e4e1939e77a6374bee57d1fa6b2322b11ad56ad0398302de9b26d6fbfe414aa416bff141fad9d4af6aea19322e47595e342cd377403f417dfd396ab5f151095a5535f51cbc34a40ce9648927b7d1d72ab9daf253e31daf',\n   miner: '0xea674fdde714fd979de3edf0f56aa9716b898ec8',\n   nonce: '0xedeb2d8fd2b2bdec',\n   number: '12386788',\n   parentHash: '0x011d1fc45839de975cc55d758943f9f1d204f80a90eb631f3bf064b80d53e045',\n   receiptsRoot: '0x7cf43d7e837284f036cf92c56973f5e27bdd253ca46168fa195a6b07fa719f23',\n   sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',\n   size: '61271',\n   stateRoot: '0x49e3bfe7b618e27fde8fa08884803a8458b502c6534af69873a3cc926a7c724b',\n   timestamp: '2021-05-07T11:08:35.000Z',\n   totalDifficulty: '7253857437305950',\n   transactionsRoot: '0xe4c7bf3aff7ad07f9e80d57f7189f0252592fee6321c2a9bd9b09b6ce0690d27',\n   transactionCount: '252',\n   transactions: [],\n }\n")),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmSimpleBlockInput"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"EvmBlockInput"))))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#chain"},"chain")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#difficulty"},"difficulty")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#extradata"},"extraData")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#gaslimit"},"gasLimit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#gasused"},"gasUsed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#hash"},"hash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#logsbloom"},"logsBloom")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#miner"},"miner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#nonce"},"nonce")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#number"},"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#parenthash"},"parentHash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#receiptsroot"},"receiptsRoot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#sha3uncles"},"sha3Uncles")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#size"},"size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#stateroot"},"stateRoot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#timestamp"},"timestamp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#totaldifficulty"},"totalDifficulty")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#transactioncount"},"transactionCount")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#transactions"},"transactions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput#transactionsroot"},"transactionsRoot"))),(0,l.kt)("h2",{id:"properties-1"},"Properties"),(0,l.kt)("h3",{id:"chain"},"chain"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"chain"),": ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmchainish"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,l.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput"},"EvmSimpleBlockInput"),".",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#chain"},"chain")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"difficulty"},"difficulty"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"difficulty"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumberInput")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"extradata"},"extraData"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"extraData"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gaslimit"},"gasLimit"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"gasLimit"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumberInput")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gasused"},"gasUsed"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"gasUsed"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumberInput")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hash"},"hash"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"hash"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput"},"EvmSimpleBlockInput"),".",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#hash"},"hash")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"logsbloom"},"logsBloom"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"logsBloom"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"miner"},"miner"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"miner"),": ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressinput"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmAddressInput"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nonce"},"nonce"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"nonce"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"number"},"number"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"number"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumberInput")),(0,l.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput"},"EvmSimpleBlockInput"),".",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#number"},"number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"parenthash"},"parentHash"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"parentHash"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"receiptsroot"},"receiptsRoot"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"receiptsRoot"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sha3uncles"},"sha3Uncles"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"sha3Uncles"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"size"},"size"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"size"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumberInput")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stateroot"},"stateRoot"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"stateRoot"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"timestamp"},"timestamp"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"DateInput")),(0,l.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput"},"EvmSimpleBlockInput"),".",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#timestamp"},"timestamp")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"totaldifficulty"},"totalDifficulty"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"totalDifficulty"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumberInput")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"transactioncount"},"transactionCount"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"transactionCount"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"transactions"},"transactions"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"transactions"),": ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmtransactionish"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmTransactionish")),"[]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"transactionsroot"},"transactionsRoot"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"transactionsRoot"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")))}c.isMDXComponent=!0}}]);