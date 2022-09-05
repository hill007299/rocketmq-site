"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=l,k=m["".concat(c,".").concat(u)]||m[u]||h[u]||o;return r?a.createElement(k,n(n({ref:t},s),{},{components:r})):a.createElement(k,n({ref:t},s))}));function u(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var p=2;p<o;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),l=(r(7294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.5.2",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},n=void 0,i={permalink:"/en/third-blog/2019/08/02/4.5.2",source:"@site/third-blog/2019-08-02-4.5.2.md",title:"Release Notes - Apache RocketMQ - Version 4.5.2",description:"* Source: rocketmq-all-4.5.2-source-release.zip [PGP] [SHA512]",date:"2019-08-02T00:00:00.000Z",formattedDate:"August 2, 2019",tags:[{label:"Release_Notes",permalink:"/en/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/en/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/en/third-blog/tags/version"}],readingTime:1.34,truncated:!0,authors:[],prevItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",permalink:"/en/third-blog/2019/08/20/release-notes-rocketmq-client-cpp-1.2.3"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.5.1",permalink:"/en/third-blog/2019/05/13/4.5.1"}},c={authorsImageUrls:[]},p=[{value:"Improvement",id:"improvement",children:[]},{value:"Bug",id:"bug",children:[]}],s={toc:p};function h(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download the 4.5.2 release")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Source: ",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.2/rocketmq-all-4.5.2-source-release.zip"},"rocketmq-all-4.5.2-source-release.zip")," [",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.2/rocketmq-all-4.5.2-source-release.zip.asc"},"PGP"),"] [",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.2/rocketmq-all-4.5.2-source-release.zip.sha512"},"SHA512"),"]"),(0,l.kt)("li",{parentName:"ul"},"Binary: ",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.2/rocketmq-all-4.5.2-bin-release.zip"},"rocketmq-all-4.5.2-bin-release.zip")," [",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.2/rocketmq-all-4.5.2-bin-release.zip.asc"},"PGP"),"] [",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.2/rocketmq-all-4.5.2-bin-release.zip.sha512"},"SHA512"),"]")))),(0,l.kt)("p",null,"Below is a summary of the issues addressed in the 4.5.2 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,l.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,l.kt)("h2",{id:"improvement"},"Improvement"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1232"},"RIP-9"),"] -  Fix some description in document of rocketmq."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1246"},"RIP-9"),"] -  Fix type in best_practice document."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1257"},"ISSUE-1156"),"] -  Add new mqadmin API for ACL configuration."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1129"},"ISSUE-1241"),"] -  Optimize the codes for the third part dependency of the RocketMQ client."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/633"},"ISSUE-598"),"] -  Enhance transaction by putting messages that exceed max check times to system topic."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/635"},"ISSUE-1316"),"] -  Enhance share netty handler."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1314"},"ISSUE-1315"),"] -  Add RPCHook construct method for MQPullConsumerScheduleService."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1293"},"ISSUE-1290"),"] -  Support matching some acl ip range."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1266"},"ISSUE-1163"),"] -  Delay plant log appender in client loggger."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1260"},"ISSUE-1318"),"] -  Fix type in HaConnection file."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1256"},"ISSUE-1326"),"] -  Travis-CI Java 8 building environments."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1235"},"ISSUE-1317"),"] -  Repair travis.yml."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1307"},"ISSUE-1308"),"] -  Fix some spelling errors of method names."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1320"},"ISSUE-1325"),"] -  Fix RocketMQ Document Type setting Errors."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/860"},"ISSUE-860"),"] -  Minor Type fix."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1225"},"ISSUE-1225"),"] -  Modify exception declaration."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1319"},"ISSUE-1319"),"] -  Update concept.md."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1339"},"ISSUE-1339"),"] -  Type fix in chinese doc."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1345"},"ISSUE-1344"),"] -  Fix /dev/shm not found on some OS.")),(0,l.kt)("h2",{id:"bug"},"Bug"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1140"},"ISSUE-1140"),"] -  FIX HmacSHA1 not found if JAVA_HOME set to JRE."),(0,l.kt)("li",null,"[",(0,l.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1254"},"ISSUE-1253"),"] -  Add transaction namespace support.")))}h.isMDXComponent=!0}}]);