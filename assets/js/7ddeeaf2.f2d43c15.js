"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={slug:"/moralisweb3/common-auth-utils/requestchallengesolanarequest"},i=void 0,o={unversionedId:"moralisweb3/common-auth-utils/requestchallengesolanarequest",id:"moralisweb3/common-auth-utils/requestchallengesolanarequest",title:"requestchallengesolanarequest",description:"moralis-monorepo / @moralisweb3/common-auth-utils / RequestChallengeSolanaRequest",source:"@site/docs/moralisweb3/common-auth-utils/requestchallengesolanarequest.md",sourceDirName:"moralisweb3/common-auth-utils",slug:"/moralisweb3/common-auth-utils/requestchallengesolanarequest",permalink:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-auth-utils/requestchallengesolanarequest"}},s={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"domain",id:"domain",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"expirationTime",id:"expirationtime",level:3},{value:"network",id:"network",level:3},{value:"notBefore",id:"notbefore",level:3},{value:"resources",id:"resources",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"statement",id:"statement",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"timeout",id:"timeout",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"uri",id:"uri",level:3},{value:"Inherited from",id:"inherited-from-4",level:4}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/index"},"@moralisweb3/common-auth-utils")," / RequestChallengeSolanaRequest"),(0,a.kt)("h1",{id:"interface-requestchallengesolanarequest"},"Interface: RequestChallengeSolanaRequest"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/index"},"@moralisweb3/common-auth-utils"),".RequestChallengeSolanaRequest"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"RequestParams"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"address"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"network"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"expirationTime"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"notBefore"'),">",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"RequestChallengeSolanaRequest"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#address"},"address")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#domain"},"domain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#expirationtime"},"expirationTime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#network"},"network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#notbefore"},"notBefore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#resources"},"resources")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#statement"},"statement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#timeout"},"timeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-auth-utils/requestchallengesolanarequest#uri"},"uri"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"address"},"address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"SolAddressish")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"domain"},"domain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"domain"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"Camelize.domain"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"expirationtime"},"expirationTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"expirationTime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"DateInput")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"network"},"network"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"network"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"SolNetworkish")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"notbefore"},"notBefore"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"notBefore"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"DateInput")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resources"},"resources"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"resources"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"Camelize.resources"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"statement"},"statement"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"statement"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"Camelize.statement"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timeout"},"timeout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"timeout"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,"Camelize.timeout"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"uri"},"uri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"uri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,"Camelize.uri"))}p.isMDXComponent=!0}}]);