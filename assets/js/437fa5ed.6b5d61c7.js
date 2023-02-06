"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,i={unversionedId:"demos/moralis-stream",id:"demos/moralis-stream",title:"moralis-stream",description:"Download",source:"@site/docs/demos/moralis-stream.md",sourceDirName:"demos",slug:"/demos/moralis-stream",permalink:"/Moralis-JS-SDK/demos/moralis-stream",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"firebase-streams-monitor",permalink:"/Moralis-JS-SDK/demos/firebase-streams-monitor"},next:{title:"nextjs",permalink:"/Moralis-JS-SDK/demos/nextjs"}},s={},p=[{value:"Run locally",id:"run-locally",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://moralisweb3.github.io/Moralis-JS-SDK/downloads/moralis-stream.zip"},"Download")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/moralis-stream"},"View code")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"run-locally"},"Run locally"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy ",(0,o.kt)("inlineCode",{parentName:"li"},".env.example")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," and fill in the values"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn install")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn start")," to run the server locally")),(0,o.kt)("p",null,"Now your server is running locally and also an ngrok tunnel has been started and logged in your console with the following endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client: ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000")," (or any other port you set in ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),")"),(0,o.kt)("li",{parentName:"ul"},"API: ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000/stream")," (or any other port you set in ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),")"),(0,o.kt)("li",{parentName:"ul"},"Webhook: ",(0,o.kt)("inlineCode",{parentName:"li"},"{ngrokurl}/hooks/stream")," Learn more about ",(0,o.kt)("a",{parentName:"li",href:"https://ngrok.com/"},"ngrok")," and ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ngrok"},"ngrok package"))))}c.isMDXComponent=!0}}]);