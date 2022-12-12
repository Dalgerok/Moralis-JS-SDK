"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const a={slug:"/moralisweb3/common-core/axiosretry"},i=void 0,l={unversionedId:"moralisweb3/common-core/axiosretry",id:"moralisweb3/common-core/axiosretry",title:"axiosretry",description:"moralis-monorepo / @moralisweb3/common-core / AxiosRetry",source:"@site/docs/moralisweb3/common-core/axiosretry.md",sourceDirName:"moralisweb3/common-core",slug:"/moralisweb3/common-core/axiosretry",permalink:"/Moralis-JS-SD/moralisweb3/common-core/axiosretry",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-core/axiosretry"}},s={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods-1",level:2},{value:"request",id:"request",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-core/index"},"@moralisweb3/common-core")," / AxiosRetry"),(0,o.kt)("h1",{id:"class-axiosretry"},"Class: AxiosRetry"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SD/moralisweb3/common-core/index"},"@moralisweb3/common-core"),".AxiosRetry"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-core/axiosretry#request"},"request"))),(0,o.kt)("h3",{id:"constructors"},"Constructors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SD/moralisweb3/common-core/axiosretry#constructor"},"constructor"))),(0,o.kt)("h2",{id:"methods-1"},"Methods"),(0,o.kt)("h3",{id:"request"},"request"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("strong",{parentName:"p"},"request"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Data"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Response"),">","(",(0,o.kt)("inlineCode",{parentName:"p"},"retryConfig"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"requestConfig"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"AxiosResponse"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Data"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Response"))))),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"retryConfig")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/Moralis-JS-SD/moralisweb3/common-core/axiosretryconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"AxiosRetryConfig")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"requestConfig")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"Data"),">")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"AxiosResponse"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h2",{id:"constructors-1"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"new AxiosRetry"),"()"))}c.isMDXComponent=!0}}]);