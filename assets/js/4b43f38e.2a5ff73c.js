"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={slug:"/moralisweb3/common-evm-utils/evmnfttransferinput"},i=void 0,o={unversionedId:"moralisweb3/common-evm-utils/evmnfttransferinput",id:"moralisweb3/common-evm-utils/evmnfttransferinput",title:"evmnfttransferinput",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmNftTransferInput",source:"@site/docs/moralisweb3/common-evm-utils/evmnfttransferinput.md",sourceDirName:"moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmnfttransferinput",permalink:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmnfttransferinput"},sidebar:"sidebar",previous:{title:"evmnfttransferdata",permalink:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferdata"},next:{title:"evmsignature",permalink:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmsignature"}},m={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"amount",id:"amount",level:3},{value:"blockHash",id:"blockhash",level:3},{value:"blockNumber",id:"blocknumber",level:3},{value:"blockTimestamp",id:"blocktimestamp",level:3},{value:"chain",id:"chain",level:3},{value:"contractType",id:"contracttype",level:3},{value:"fromAddress",id:"fromaddress",level:3},{value:"logIndex",id:"logindex",level:3},{value:"operator",id:"operator",level:3},{value:"toAddress",id:"toaddress",level:3},{value:"tokenAddress",id:"tokenaddress",level:3},{value:"tokenId",id:"tokenid",level:3},{value:"transactionHash",id:"transactionhash",level:3},{value:"transactionIndex",id:"transactionindex",level:3},{value:"transactionType",id:"transactiontype",level:3},{value:"value",id:"value",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmNftTransferInput"),(0,r.kt)("h1",{id:"interface-evmnfttransferinput"},"Interface: EvmNftTransferInput"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmNftTransferInput"),(0,r.kt)("p",null,"This can be any object with valid transfer data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const input = {\n chain: 1,\n tokenAddress: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",\n toAddress: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",\n operator: null,\n fromAddress: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",\n value: null,\n blockTimestamp: "2021-06-04T16:00:15",\n blockHash: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",\n transactionIndex: 123,\n blockNumber: "88256",\n contractType: "ERC721",\n logIndex: 0,\n tokenId: "15",\n transactionHash: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",\n transactionType: "1",\n}\n')),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#amount"},"amount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#blockhash"},"blockHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#blocknumber"},"blockNumber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#blocktimestamp"},"blockTimestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#chain"},"chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#contracttype"},"contractType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#fromaddress"},"fromAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#logindex"},"logIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#operator"},"operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#toaddress"},"toAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#tokenaddress"},"tokenAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#tokenid"},"tokenId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#transactionhash"},"transactionHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#transactionindex"},"transactionIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#transactiontype"},"transactionType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnfttransferinput#value"},"value"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"amount"},"amount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"amount"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blockhash"},"blockHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumberish")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocktimestamp"},"blockTimestamp"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"blockTimestamp"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"DateInput")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chain"},"chain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"chain"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmchainish"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"contracttype"},"contractType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"contractType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromaddress"},"fromAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"fromAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmaddressish"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"logindex"},"logIndex"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"logIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"operator"},"operator"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"operator"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmaddressish"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toaddress"},"toAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"toAddress"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmaddressish"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tokenaddress"},"tokenAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"tokenAddress"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmaddressish"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tokenid"},"tokenId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"tokenId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionindex"},"transactionIndex"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"transactionIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactiontype"},"transactionType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"transactionType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmnativeish"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmNativeish"))))}u.isMDXComponent=!0}}]);