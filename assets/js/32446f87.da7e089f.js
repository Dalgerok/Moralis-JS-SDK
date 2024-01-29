"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(r),k=l,c=u["".concat(i,".").concat(k)]||u[k]||p[k]||n;return r?a.createElement(c,s(s({ref:t},m),{},{components:r})):a.createElement(c,s({ref:t},m))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,s=new Array(n);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var d=2;d<n;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=r(87462),l=(r(67294),r(3905));const n={slug:"/moralisweb3/common-sol-utils/soladdress",title:"Class: SolAddress",sidebar_label:"SolAddress"},s=void 0,o={unversionedId:"api/moralisweb3/common-sol-utils/soladdress",id:"api/moralisweb3/common-sol-utils/soladdress",title:"Class: SolAddress",description:"moralis-monorepo / @moralisweb3/common-sol-utils / SolAddress",source:"@site/docs/api/moralisweb3/common-sol-utils/soladdress.md",sourceDirName:"api/moralisweb3/common-sol-utils",slug:"/moralisweb3/common-sol-utils/soladdress",permalink:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-sol-utils/soladdress",title:"Class: SolAddress",sidebar_label:"SolAddress"},sidebar:"sidebar",previous:{title:"@moralisweb3/common-sol-utils",permalink:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index"},next:{title:"SolGetTokenMetadataNetworkEnum",permalink:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/solgettokenmetadatanetworkenum"}},i={},d=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"format",id:"format",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-4",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-3",level:4}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index"},"@moralisweb3/common-sol-utils")," / SolAddress"),(0,l.kt)("h1",{id:"class-soladdress"},"Class: SolAddress"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index"},"@moralisweb3/common-sol-utils"),".SolAddress"),(0,l.kt)("p",null,"A representation of an address on the Solana network."),(0,l.kt)("p",null,"Use this class any time you work with an address."),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MoralisData"))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#create"},"create")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#fromjson"},"fromJSON")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#equals"},"equals")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#format"},"format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#tojson"},"toJSON")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#tostring"},"toString"))),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#address"},"address"))),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress#constructor"},"constructor"))),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"create"},"create"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"create"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress"},(0,l.kt)("inlineCode",{parentName:"a"},"SolAddress"))),(0,l.kt)("p",null,"Create a new instance of SolAddress from any valid address input."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'const address = SolAddress.create("9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM")')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,l.kt)("p",null,"an error when a passed address is invalid."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index#soladdressinput"},(0,l.kt)("inlineCode",{parentName:"a"},"SolAddressInput")))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress"},(0,l.kt)("inlineCode",{parentName:"a"},"SolAddress"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fromjson"},"fromJSON"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"fromJSON"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress"},(0,l.kt)("inlineCode",{parentName:"a"},"SolAddress"))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/soladdress"},(0,l.kt)("inlineCode",{parentName:"a"},"SolAddress"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"equals"},"equals"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"equals"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Checks the equality of the current address with another Solana address."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'address.equals("9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM")')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'address.equals(SolAddress.create("9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"))')),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index#soladdressinput"},(0,l.kt)("inlineCode",{parentName:"a"},"SolAddressInput")))))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,l.kt)("p",null,"MoralisData.equals"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"format"},"format"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"format"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"MoralisDataFormatted")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,l.kt)("p",null,"This method will be removed soon. To format the value, use one of the properties."),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MoralisDataFormatted")),(0,l.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,l.kt)("p",null,"MoralisData.format"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tojson"},"toJSON"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'address.toJSON(); // "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"\n')),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"a string representing the address."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tostring"},"toString"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'address.toString(); // "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"\n')),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"a string representing the address."),(0,l.kt)("h2",{id:"properties-1"},"Properties"),(0,l.kt)("h3",{id:"address"},"address"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"address"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h2",{id:"constructors-1"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new SolAddress"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"address"),")"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))))}p.isMDXComponent=!0}}]);