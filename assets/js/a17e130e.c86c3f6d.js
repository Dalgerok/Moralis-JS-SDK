"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),k=i,c=u["".concat(m,".").concat(k)]||u[k]||p[k]||a;return r?n.createElement(c,o(o({ref:t},d),{},{components:r})):n.createElement(c,o({ref:t},d))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={slug:"/moralisweb3/common-evm-utils/getnfttokenidownersrequest"},o=void 0,l={unversionedId:"moralisweb3/common-evm-utils/getnfttokenidownersrequest",id:"moralisweb3/common-evm-utils/getnfttokenidownersrequest",title:"getnfttokenidownersrequest",description:"moralis-monorepo / @moralisweb3/common-evm-utils / GetNFTTokenIdOwnersRequest",source:"@site/docs/moralisweb3/common-evm-utils/getnfttokenidownersrequest.md",sourceDirName:"moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/getnfttokenidownersrequest",permalink:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/getnfttokenidownersrequest"}},m={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"chain",id:"chain",level:3},{value:"cursor",id:"cursor",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"format",id:"format",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"limit",id:"limit",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"normalizeMetadata",id:"normalizemetadata",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"tokenId",id:"tokenid",level:3},{value:"Inherited from",id:"inherited-from-4",level:4}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / GetNFTTokenIdOwnersRequest"),(0,i.kt)("h1",{id:"interface-getnfttokenidownersrequest"},"Interface: GetNFTTokenIdOwnersRequest"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".GetNFTTokenIdOwnersRequest"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"RequestParams"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"chain"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"address"'),">",">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetNFTTokenIdOwnersRequest"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest#address"},"address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest#chain"},"chain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest#cursor"},"cursor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest#format"},"format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest#limit"},"limit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest#normalizemetadata"},"normalizeMetadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/getnfttokenidownersrequest#tokenid"},"tokenId"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmaddressish"},(0,i.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chain"},"chain"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"chain"),": ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-evm-utils/index#evmchainish"},(0,i.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cursor"},"cursor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cursor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Camelize.cursor"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"format"},"format"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"format"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"hex"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"decimal"')),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Camelize.format"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"limit"},"limit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"limit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"Camelize.limit"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"normalizemetadata"},"normalizeMetadata"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"normalizeMetadata"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"Camelize.normalizeMetadata"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tokenid"},"tokenId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tokenId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"Camelize.tokenId"))}p.isMDXComponent=!0}}]);