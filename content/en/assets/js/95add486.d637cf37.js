"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=s(r),u=n,k=g["".concat(l,".").concat(u)]||g[u]||p[u]||a;return r?o.createElement(k,c(c({ref:t},m),{},{components:r})):o.createElement(k,c({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},17220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},c=void 0,i={permalink:"/en/third-blog/2021/03/17/release-notes-rocketmq-client-go-2.1.0",source:"@site/third-blog/2021-03-17-release-notes-rocketmq-client-go-2.1.0.md",title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.0",description:"* Source: rocketmq-client-go-2.1.0-source-release.tar.gz [PGP] [SHA512]",date:"2021-03-17T00:00:00.000Z",formattedDate:"March 17, 2021",tags:[{label:"RocketMQ_Client_Go",permalink:"/en/third-blog/tags/rocket-mq-client-go"}],readingTime:.56,truncated:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.0",permalink:"/en/third-blog/2021/06/15/4.9.0"},nextItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.0",permalink:"/en/third-blog/2021/01/08/release-notes-rocketmq-spring-2.2.0"}},l={authorsImageUrls:[]},s=[{value:"Improvement",id:"improvement",level:2}],m={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"Source: ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-go/2.1.0/rocketmq-client-go-2.1.0-source-release.tar.gz"},"rocketmq-client-go-2.1.0-source-release.tar.gz")," [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.0/rocketmq-client-go-2.1.0-source-release.tar.gz.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.0/rocketmq-client-go-2.1.0-source-release.tar.gz.sha512"},"SHA512"),"]")))),(0,n.kt)("p",null,"Below is a summary of the issues addressed in the version 2.1.0 release of RocketMQ Client Go. For full documentation of the release, a guide to get started, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-go"},"Quick Start"),"."),(0,n.kt)("h2",{id:"improvement"},"Improvement"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc6"},"v2.1.0-rc6"),"] -  Improvements in rocketmq client go 2.1.0 rc6."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc5"},"v2.1.0-rc5"),"] -  Improvements in rocketmq client go 2.1.0 rc5."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc4"},"v2.1.0-rc4"),"] -  Improvements in rocketmq client go 2.1.0 rc4."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc3"},"v2.1.0-rc3"),"] -  Improvements in rocketmq client go 2.1.0 rc3."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc2"},"v2.1.0-rc2"),"] -  Improvements in rocketmq client go 2.1.0 rc2."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc1"},"v2.1.0-rc1"),"] -  Improvements in rocketmq client go 2.1.0 rc1.")))}p.isMDXComponent=!0}}]);