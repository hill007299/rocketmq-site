"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),g=a,h=u["".concat(i,".").concat(g)]||u[g]||m[g]||n;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,c={permalink:"/third-blog/2019/11/20/release-notes-rocketmq-client-go-1.2.4",source:"@site/third-blog/2019-11-20-release-notes-rocketmq-client-go-1.2.4.md",title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",description:"* Source: rocketmq-client-go-1.2.4-source-release.tar.gz [PGP] [SHA512]",date:"2019-11-20T00:00:00.000Z",formattedDate:"2019\u5e7411\u670820\u65e5",tags:[{label:"Release_Notes",permalink:"/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/third-blog/tags/version"}],readingTime:.59,truncated:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.6.0",permalink:"/third-blog/2019/11/25/4.6.0"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.4",permalink:"/third-blog/2019/11/11/release-notes-rocketmq-client-cpp-1.2.4"}},i={authorsImageUrls:[]},s=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Source: ",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-go/1.2.4/rocketmq-client-go-1.2.4-source-release.tar.gz"},"rocketmq-client-go-1.2.4-source-release.tar.gz")," [",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/1.2.4/rocketmq-client-go-1.2.4-source-release.tar.gz.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/1.2.4/rocketmq-client-go-1.2.4-source-release.tar.gz.sha512"},"SHA512"),"]")))),(0,a.kt)("p",null,"Below is a summary of the issues addressed in the version 1.2.4 release of RocketMQ Client Go. For full documentation of the release, a guide to get started, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-go"},"Quick Start"),"."),(0,a.kt)("h2",{id:"improvement"},"Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/222"},"ISSUE-222"),"] -  feat(producer): support lite producer to send message by sharding key."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/225"},"ISSUE-225"),"] -  feat(consumer): add set max cachesize api to support simple flow-control."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/261"},"ISSUE-261"),"] -  feat(transaction): add transaction producer message."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/251"},"ISSUE-251"),"] -  delete useless GroupName and make subscribe method correct.")),(0,a.kt)("h2",{id:"bug"},"Bug"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/246"},"ISSUE-246"),"] -  fix(travis):remove unnecessary script in travis.yml."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/248"},"ISSUE-248"),"] -  fix(golint): fix warnings for golint check.")))}m.isMDXComponent=!0}}]);