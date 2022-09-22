"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8427],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),u=o,k=h["".concat(l,".").concat(u)]||h[u]||m[u]||n;return r?a.createElement(k,s(s({ref:t},p),{},{components:r})):a.createElement(k,s({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ - Version 4.3.2",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},s=void 0,i={permalink:"/en/third-blog/2018/11/02/4.3.2",source:"@site/third-blog/2018-11-02-4.3.2.md",title:"Release Notes - Apache RocketMQ - Version 4.3.2",description:"* Source: rocketmq-all-4.3.2-source-release.zip [PGP] [MD5] [SHA1]",date:"2018-11-02T00:00:00.000Z",formattedDate:"November 2, 2018",tags:[{label:"Release_Notes",permalink:"/en/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/en/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/en/third-blog/tags/version"}],readingTime:.84,truncated:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.3.2",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.4.0",permalink:"/en/third-blog/2019/01/17/4.4.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.3.1",permalink:"/en/third-blog/2018/08/29/4.3.1"}},l={authorsImageUrls:[]},c=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download the 4.3.2 release")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-source-release.zip"},"rocketmq-all-4.3.2-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-source-release.zip.md5"},"MD5"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-source-release.zip.sha1"},"SHA1"),"]"),(0,o.kt)("li",{parentName:"ul"},"Binary: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-bin-release.zip"},"rocketmq-all-4.3.2-bin-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-bin-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-bin-release.zip.md5"},"MD5"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.2/rocketmq-all-4.3.2-bin-release.zip.sha1"},"SHA1"),"]")))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the 4.3.2 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/411"},"ISSUE-411"),"] -  Fixed ClassCastException when get the instance of the store."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/461"},"ISSUE-461"),"] -  Purge filterserv related code in client."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/478"},"ISSUE-478"),"] -  Polish async send message sample.")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/406"},"ISSUE-406"),"] -  Fixed the NPE issue occurred when getting the storehost using admin tool."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/433"},"ISSUE-433"),'] -  Fixed the issue that Integration-test can not be executed when run "mvn clean install".'),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/439"},"ISSUE-439"),"] -  Fixed the issue that ConsumeMessageCommand -g setting."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/447"},"ISSUE-447"),"] -  Fix the issue that checkLocalTransaction method does not take effect."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/490"},"ISSUE-490"),"] -  Fix the issue that testGetLocalInetAddress failure on some versions of the server.")))}m.isMDXComponent=!0}}]);