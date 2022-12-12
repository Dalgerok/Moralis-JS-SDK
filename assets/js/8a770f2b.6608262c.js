"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(a),v=r,u=d["".concat(i,".").concat(v)]||d[v]||c[v]||l;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={slug:"/moralisweb3/common-evm-utils/evmeventdata"},o=void 0,m={unversionedId:"moralisweb3/common-evm-utils/evmeventdata",id:"moralisweb3/common-evm-utils/evmeventdata",title:"evmeventdata",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmEventData",source:"@site/docs/moralisweb3/common-evm-utils/evmeventdata.md",sourceDirName:"moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmeventdata",permalink:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmeventdata"},sidebar:"sidebar",previous:{title:"evmevent",permalink:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmevent"},next:{title:"evmeventinput",permalink:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventinput"}},i={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"blockHash",id:"blockhash",level:3},{value:"blockNumber",id:"blocknumber",level:3},{value:"blockTimestamp",id:"blocktimestamp",level:3},{value:"chain",id:"chain",level:3},{value:"data",id:"data",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"transactionHash",id:"transactionhash",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmEventData"),(0,r.kt)("h1",{id:"interface-evmeventdata"},"Interface: EvmEventData"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmEventData"),(0,r.kt)("p",null,"This is the return type of the processed EVM event"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata#address"},"address")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata#blockhash"},"blockHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata#blocknumber"},"blockNumber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata#blocktimestamp"},"blockTimestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata#chain"},"chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata#data"},"data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmeventdata#transactionhash"},"transactionHash"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"address"},"address"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"address"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blockhash"},"blockHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocktimestamp"},"blockTimestamp"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"blockTimestamp"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chain"},"chain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"chain"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmchain"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmChain"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"data"},"data"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"from?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/evmnative"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmNative")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")))}c.isMDXComponent=!0}}]);