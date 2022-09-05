"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,k=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Release Notes - Apache RocketMQ Spring - Version 2.0.4",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},i=void 0,l={permalink:"/en/third-blog/2019/11/01/release-notes-rocketmq-spring-2.0.4",source:"@site/third-blog/2019-11-01-release-notes-rocketmq-spring-2.0.4.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.0.4",description:"* Source: rocketmq-spring-all-2.0.4-source-release.zip [PGP] [SHA512]",date:"2019-11-01T00:00:00.000Z",formattedDate:"November 1, 2019",tags:[{label:"RocketMQ_Spring",permalink:"/en/third-blog/tags/rocket-mq-spring"}],readingTime:.83,truncated:!0,authors:[],prevItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.4",permalink:"/en/third-blog/2019/11/11/release-notes-rocketmq-client-cpp-1.2.4"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",permalink:"/en/third-blog/2019/08/20/release-notes-rocketmq-client-cpp-1.2.3"}},c={authorsImageUrls:[]},p=[{value:"Improvement",id:"improvement",children:[]},{value:"Bug",id:"bug",children:[]}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.0.4/rocketmq-spring-all-2.0.4-source-release.zip"},"rocketmq-spring-all-2.0.4-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.0.4/rocketmq-spring-all-2.0.4-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.0.4/rocketmq-spring-all-2.0.4-source-release.zip.sha512"},"SHA512"),"]")))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the version 2.0.4 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/87"},"ISSUE #86"),"] -  Support to configure whether consumer listener is enabled through configuration file."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/97"},"ISSUE #96"),"] -  Support resolve  placeholder for listener.txProducerGroup."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/129"},"ISSUE #103"),"] -  Support resolve placeholder for selectorExpression."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/137"},"ISSUE #137"),"] -  Upgrade rocketmq dependency to 4.5.2."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/152"},"ISSUE #152"),"] -  An enhancement about the convert in RocketMQTemplate.")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/150"},"ISSUE #81"),"] -  Fix RocketMQTemplate.syncSend collection type method signature."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/84"},"ISSUE #83"),"] -  Fix addUserProperties will override headers from rocketmq."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/138"},"ISSUE #107"),"] -  Fix the message was consumed twice because of the same instanceName."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/119"},"ISSUE #117"),"] -  Fix timeout failed in syncSendOrderly."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/164"},"ISSUE #163"),"] -  Fix transactionProducer has incorrect namespace.")))}m.isMDXComponent=!0}}]);