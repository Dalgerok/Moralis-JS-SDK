"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),m=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=m(n),u=r,f=k["".concat(i,".").concat(u)]||k[u]||p[u]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<a;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},56534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const a={slug:"/moralisweb3/common-evm-utils/evmblocktokenstatinput",title:"Interface: EvmBlockTokenStatInput",sidebar_label:"EvmBlockTokenStatInput"},l=void 0,s={unversionedId:"api/moralisweb3/common-evm-utils/evmblocktokenstatinput",id:"api/moralisweb3/common-evm-utils/evmblocktokenstatinput",title:"Interface: EvmBlockTokenStatInput",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmBlockTokenStatInput",source:"@site/docs/api/moralisweb3/common-evm-utils/evmblocktokenstatinput.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmblocktokenstatinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstatinput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmblocktokenstatinput",title:"Interface: EvmBlockTokenStatInput",sidebar_label:"EvmBlockTokenStatInput"},sidebar:"sidebar",previous:{title:"EvmBlockTokenStat",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstat"},next:{title:"EvmBlockTokenStatJSON",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstatjson"}},i={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"nftTransfers",id:"nfttransfers",level:3},{value:"tokenTransfers",id:"tokentransfers",level:3},{value:"transactions",id:"transactions",level:3}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmBlockTokenStatInput"),(0,r.kt)("h1",{id:"interface-evmblocktokenstatinput"},"Interface: EvmBlockTokenStatInput"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmBlockTokenStatInput"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstatinput#nfttransfers"},"nftTransfers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstatinput#tokentransfers"},"tokenTransfers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstatinput#transactions"},"transactions"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"nfttransfers"},"nftTransfers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"nftTransfers"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstatnfttransfersinput"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmBlockTokenStatNftTransfersInput"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstatnfttransfers"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmBlockTokenStatNftTransfers"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tokentransfers"},"tokenTransfers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"tokenTransfers"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstattokentransfersinput"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmBlockTokenStatTokenTransfersInput"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstattokentransfers"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmBlockTokenStatTokenTransfers"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactions"},"transactions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"transactions"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstattransactionsinput"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmBlockTokenStatTransactionsInput"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblocktokenstattransactions"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmBlockTokenStatTransactions"))))}p.isMDXComponent=!0}}]);