"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=s(n),u=a,d=k["".concat(m,".").concat(u)]||k[u]||c[u]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},57004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/moralisweb3/common-evm-utils/evmerc20transferjson",title:"Interface: EvmErc20TransferJSON",sidebar_label:"EvmErc20TransferJSON"},o=void 0,i={unversionedId:"api/moralisweb3/common-evm-utils/evmerc20transferjson",id:"api/moralisweb3/common-evm-utils/evmerc20transferjson",title:"Interface: EvmErc20TransferJSON",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmErc20TransferJSON",source:"@site/docs/api/moralisweb3/common-evm-utils/evmerc20transferjson.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmerc20transferjson",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmerc20transferjson",title:"Interface: EvmErc20TransferJSON",sidebar_label:"EvmErc20TransferJSON"},sidebar:"sidebar",previous:{title:"EvmErc20TransferInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferinput"},next:{title:"EvmErc20TransfersResponse",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transfersresponse"}},m={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"block_hash",id:"block_hash",level:3},{value:"block_number",id:"block_number",level:3},{value:"block_timestamp",id:"block_timestamp",level:3},{value:"contract_address",id:"contract_address",level:3},{value:"from_wallet",id:"from_wallet",level:3},{value:"log_index",id:"log_index",level:3},{value:"possible_spam",id:"possible_spam",level:3},{value:"to_wallet",id:"to_wallet",level:3},{value:"token_decimals",id:"token_decimals",level:3},{value:"token_logo",id:"token_logo",level:3},{value:"token_name",id:"token_name",level:3},{value:"token_symbol",id:"token_symbol",level:3},{value:"transaction_hash",id:"transaction_hash",level:3},{value:"transaction_index",id:"transaction_index",level:3},{value:"value",id:"value",level:3},{value:"value_decimal",id:"value_decimal",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmErc20TransferJSON"),(0,a.kt)("h1",{id:"interface-evmerc20transferjson"},"Interface: EvmErc20TransferJSON"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmErc20TransferJSON"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#block_hash"},"block","_","hash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#block_number"},"block","_","number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#block_timestamp"},"block","_","timestamp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#contract_address"},"contract","_","address")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#from_wallet"},"from","_","wallet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#log_index"},"log","_","index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#possible_spam"},"possible","_","spam")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#to_wallet"},"to","_","wallet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#token_decimals"},"token","_","decimals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#token_logo"},"token","_","logo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#token_name"},"token","_","name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#token_symbol"},"token","_","symbol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#transaction_hash"},"transaction","_","hash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#transaction_index"},"transaction","_","index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#value"},"value")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmerc20transferjson#value_decimal"},"value","_","decimal"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"block_hash"},"block","_","hash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block","_","hash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"block_number"},"block","_","number"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block","_","number"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"block_timestamp"},"block","_","timestamp"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block","_","timestamp"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"contract_address"},"contract","_","address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"contract","_","address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"from_wallet"},"from","_","wallet"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"from","_","wallet"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"log_index"},"log","_","index"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"log","_","index"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"possible_spam"},"possible","_","spam"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"possible","_","spam"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"to_wallet"},"to","_","wallet"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"to","_","wallet"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"token_decimals"},"token","_","decimals"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"token","_","decimals"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"token_logo"},"token","_","logo"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"token","_","logo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"token_name"},"token","_","name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"token","_","name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"token_symbol"},"token","_","symbol"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"token","_","symbol"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transaction_hash"},"transaction","_","hash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"transaction","_","hash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transaction_index"},"transaction","_","index"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"transaction","_","index"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value_decimal"},"value","_","decimal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"value","_","decimal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")))}c.isMDXComponent=!0}}]);