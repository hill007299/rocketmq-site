"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u6d88\u8d39\u8005\u5206\u7c7b",o={unversionedId:"\u529f\u80fd\u884c\u4e3a/06consumertype",id:"version-5.0/\u529f\u80fd\u884c\u4e3a/06consumertype",title:"\u6d88\u8d39\u8005\u5206\u7c7b",description:"Apache RocketMQ \u652f\u6301 PushConsumer \u3001 SimpleConsumer \u4ee5\u53ca PullConsumer \u8fd9\u4e09\u79cd\u7c7b\u578b\u7684\u6d88\u8d39\u8005\uff0c\u672c\u6587\u5206\u522b\u4ece\u4f7f\u7528\u65b9\u5f0f\u3001\u5b9e\u73b0\u539f\u7406\u3001\u53ef\u9760\u6027\u91cd\u8bd5\u548c\u9002\u7528\u573a\u666f\u7b49\u65b9\u9762\u4e3a\u60a8\u4ecb\u7ecd\u8fd9\u4e24\u79cd\u7c7b\u578b\u7684\u6d88\u8d39\u8005\u3002",source:"@site/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/06consumertype.md",sourceDirName:"04-\u529f\u80fd\u884c\u4e3a",slug:"/\u529f\u80fd\u884c\u4e3a/06consumertype",permalink:"/en/docs/5.0/\u529f\u80fd\u884c\u4e3a/06consumertype",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/06consumertype.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6d88\u606f\u53d1\u9001\u91cd\u8bd5\u548c\u6d41\u63a7\u673a\u5236",permalink:"/en/docs/5.0/\u529f\u80fd\u884c\u4e3a/05sendretrypolicy"},next:{title:"\u6d88\u606f\u8fc7\u6ee4",permalink:"/en/docs/5.0/\u529f\u80fd\u884c\u4e3a/07messagefilter"}},p={},s=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",level:2},{value:"\u529f\u80fd\u6982\u8ff0",id:"\u529f\u80fd\u6982\u8ff0",level:2},{value:"PushConsumer",id:"pushconsumer",level:2},{value:"SimpleConsumer",id:"simpleconsumer",level:2},{value:"PullConsumer",id:"pullconsumer",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],m={toc:s};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6d88\u8d39\u8005\u5206\u7c7b"},"\u6d88\u8d39\u8005\u5206\u7c7b"),(0,r.kt)("p",null,"Apache RocketMQ \u652f\u6301 PushConsumer \u3001 SimpleConsumer \u4ee5\u53ca PullConsumer \u8fd9\u4e09\u79cd\u7c7b\u578b\u7684\u6d88\u8d39\u8005\uff0c\u672c\u6587\u5206\u522b\u4ece\u4f7f\u7528\u65b9\u5f0f\u3001\u5b9e\u73b0\u539f\u7406\u3001\u53ef\u9760\u6027\u91cd\u8bd5\u548c\u9002\u7528\u573a\u666f\u7b49\u65b9\u9762\u4e3a\u60a8\u4ecb\u7ecd\u8fd9\u4e24\u79cd\u7c7b\u578b\u7684\u6d88\u8d39\u8005\u3002"),(0,r.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,r.kt)("p",null,"Apache RocketMQ \u9762\u5411\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u63d0\u4f9b\u4e86\u4e0d\u540c\u6d88\u8d39\u8005\u7c7b\u578b\uff0c\u6bcf\u79cd\u6d88\u8d39\u8005\u7c7b\u578b\u7684\u96c6\u6210\u65b9\u5f0f\u548c\u63a7\u5236\u65b9\u5f0f\u90fd\u4e0d\u4e00\u6837\u3002\u4e86\u89e3\u5982\u4e0b\u95ee\u9898\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u9009\u62e9\u66f4\u5339\u914d\u4e1a\u52a1\u573a\u666f\u7684\u6d88\u8d39\u8005\u7c7b\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u4f55\u5b9e\u73b0\u5e76\u53d1\u6d88\u8d39\uff1a\u6d88\u8d39\u8005\u5982\u4f55\u4f7f\u7528\u5e76\u53d1\u7684\u591a\u7ebf\u7a0b\u673a\u5236\u5904\u7406\u6d88\u606f\uff0c\u4ee5\u6b64\u63d0\u9ad8\u6d88\u606f\u5904\u7406\u6548\u7387\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u4f55\u5b9e\u73b0\u540c\u6b65\u3001\u5f02\u6b65\u6d88\u606f\u5904\u7406\uff1a\u5bf9\u4e8e\u4e0d\u540c\u7684\u96c6\u6210\u573a\u666f\uff0c\u6d88\u8d39\u8005\u83b7\u53d6\u6d88\u606f\u540e\u53ef\u80fd\u4f1a\u5c06\u6d88\u606f\u5f02\u6b65\u5206\u53d1\u5230\u4e1a\u52a1\u903b\u8f91\u4e2d\u5904\u7406\uff0c\u6b64\u65f6\uff0c\u6d88\u606f\u5f02\u6b65\u5316\u5904\u7406\u5982\u4f55\u5b9e\u73b0\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u4f55\u5b9e\u73b0\u6d88\u606f\u53ef\u9760\u5904\u7406\uff1a\u6d88\u8d39\u8005\u5904\u7406\u6d88\u606f\u65f6\u5982\u4f55\u8fd4\u56de\u54cd\u5e94\u7ed3\u679c\uff1f\u5982\u4f55\u5728\u6d88\u606f\u5f02\u5e38\u60c5\u51b5\u8fdb\u884c\u91cd\u8bd5\uff0c\u4fdd\u8bc1\u6d88\u606f\u7684\u53ef\u9760\u5904\u7406\uff1f"))),(0,r.kt)("p",null,"\u4ee5\u4e0a\u95ee\u9898\u7684\u5177\u4f53\u7b54\u6848\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u3002"),(0,r.kt)("h2",{id:"\u529f\u80fd\u6982\u8ff0"},"\u529f\u80fd\u6982\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6d88\u606f\u6d88\u8d39\u6d41\u7a0b",src:n(75704).Z,width:"777",height:"606"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c Apache RocketMQ \u7684\u6d88\u8d39\u8005\u5904\u7406\u6d88\u606f\u65f6\u4e3b\u8981\u7ecf\u8fc7\u4ee5\u4e0b\u9636\u6bb5\uff1a\u6d88\u606f\u83b7\u53d6---",">","\u6d88\u606f\u5904\u7406---",">","\u6d88\u8d39\u72b6\u6001\u63d0\u4ea4\u3002"),(0,r.kt)("p",null,"\u9488\u5bf9\u4ee5\u4e0a\u51e0\u4e2a\u9636\u6bb5\uff0cApache RocketMQ \u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u6d88\u8d39\u8005\u7c7b\u578b\uff1a PushConsumer \u3001SimpleConsumer \u548c PullConsumer\u3002\u8fd9\u51e0\u79cd\u7c7b\u578b\u7684\u6d88\u8d39\u8005\u901a\u8fc7\u4e0d\u540c\u7684\u5b9e\u73b0\u65b9\u5f0f\u548c\u63a5\u53e3\u53ef\u6ee1\u8db3\u60a8\u5728\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u4e0b\u7684\u6d88\u8d39\u9700\u6c42\u3002\u5177\u4f53\u5dee\u5f02\u5982\u4e0b\uff1a"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u4e2d\uff0cPullConsumer \u4ec5\u63a8\u8350\u5728\u6d41\u5904\u7406\u6846\u67b6\u4e2d\u96c6\u6210\u4f7f\u7528\uff0c\u5927\u591a\u6570\u6d88\u606f\u6536\u53d1\u573a\u666f\u4f7f\u7528 PushConsumer \u548c SimpleConsumer \u5c31\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002 "),(0,r.kt)("p",{parentName:"div"},"\u82e5\u60a8\u7684\u4e1a\u52a1\u573a\u666f\u53d1\u751f\u53d8\u66f4\uff0c\u6216\u60a8\u5f53\u524d\u4f7f\u7528\u7684\u6d88\u8d39\u8005\u7c7b\u578b\u4e0d\u9002\u5408\u5f53\u524d\u4e1a\u52a1\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5728 PushConsumer \u548cSimpleConsumer \u4e4b\u95f4\u53d8\u66f4\u6d88\u8d39\u8005\u7c7b\u578b\u3002\u53d8\u66f4\u6d88\u8d39\u8005\u7c7b\u578b\u4e0d\u5f71\u54cd\u5f53\u524dApache RocketMQ \u8d44\u6e90\u7684\u4f7f\u7528\u548c\u4e1a\u52a1\u5904\u7406\u3002"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u751f\u4ea7\u73af\u5883\u4e2d\u76f8\u540c\u7684 ConsumerGroup \u4e0b\u4e25\u7981\u6df7\u7528 PullConsumer \u548c\u5176\u4ed6\u4e24\u79cd\u6d88\u8d39\u8005\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u6d88\u606f\u6d88\u8d39\u5f02\u5e38\u3002"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u6bd4\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"PushConsumer"),(0,r.kt)("th",{parentName:"tr",align:null},"SimpleConsumer"),(0,r.kt)("th",{parentName:"tr",align:null},"PullConsumer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u65b9\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u76d1\u542c\u5668\u56de\u8c03\u63a5\u53e3\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\uff0c\u6d88\u8d39\u8005\u4ec5\u5141\u8bb8\u5728\u76d1\u542c\u5668\u8303\u56f4\u5185\u5904\u7406\u6d88\u8d39\u903b\u8f91\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e1a\u52a1\u65b9\u81ea\u884c\u5b9e\u73b0\u6d88\u606f\u5904\u7406\uff0c\u5e76\u4e3b\u52a8\u8c03\u7528\u63a5\u53e3\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e1a\u52a1\u65b9\u81ea\u884c\u6309\u961f\u5217\u62c9\u53d6\u6d88\u606f\uff0c\u5e76\u53ef\u9009\u62e9\u6027\u5730\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u5e76\u53d1\u5ea6\u7ba1\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531SDK\u7ba1\u7406\u6d88\u8d39\u5e76\u53d1\u5ea6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531\u4e1a\u52a1\u65b9\u6d88\u8d39\u903b\u8f91\u81ea\u884c\u7ba1\u7406\u6d88\u8d39\u7ebf\u7a0b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531\u4e1a\u52a1\u65b9\u6d88\u8d39\u903b\u8f91\u81ea\u884c\u7ba1\u7406\u6d88\u8d39\u7ebf\u7a0b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8f7d\u5747\u8861\u7c92\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"5.0 SDK\u662f\u6d88\u606f\u7c92\u5ea6\uff0c\u66f4\u5747\u8861\uff0c\u65e9\u671f\u7248\u672c\u662f\u961f\u5217\u7ef4\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7c92\u5ea6\uff0c\u66f4\u5747\u8861"),(0,r.kt)("td",{parentName:"tr",align:null},"\u961f\u5217\u7c92\u5ea6\uff0c\u541e\u5410\u6512\u6279\u6027\u80fd\u66f4\u597d\uff0c\u4f46\u5bb9\u6613\u4e0d\u5747\u8861")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u7075\u6d3b\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad8\u5ea6\u5c01\u88c5\uff0c\u4e0d\u591f\u7075\u6d3b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u539f\u5b50\u63a5\u53e3\uff0c\u53ef\u7075\u6d3b\u81ea\u5b9a\u4e49\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u539f\u5b50\u63a5\u53e3\uff0c\u53ef\u7075\u6d3b\u81ea\u5b9a\u4e49\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9002\u7528\u573a\u666f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9002\u7528\u4e8e\u65e0\u81ea\u5b9a\u4e49\u6d41\u7a0b\u7684\u4e1a\u52a1\u6d88\u606f\u5f00\u53d1\u573a\u666f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9002\u7528\u4e8e\u9700\u8981\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6d41\u7a0b\u7684\u4e1a\u52a1\u5f00\u53d1\u573a\u666f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ec5\u63a8\u8350\u5728\u6d41\u5904\u7406\u6846\u67b6\u573a\u666f\u4e0b\u96c6\u6210\u4f7f\u7528")))),(0,r.kt)("h2",{id:"pushconsumer"},"PushConsumer"),(0,r.kt)("p",null,"PushConsumers\u662f\u4e00\u79cd\u9ad8\u5ea6\u5c01\u88c5\u7684\u6d88\u8d39\u8005\u7c7b\u578b\uff0c\u6d88\u8d39\u6d88\u606f\u4ec5\u901a\u8fc7\u6d88\u8d39\u76d1\u542c\u5668\u5904\u7406\u4e1a\u52a1\u5e76\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u3002\u6d88\u606f\u7684\u83b7\u53d6\u3001\u6d88\u8d39\u72b6\u6001\u63d0\u4ea4\u4ee5\u53ca\u6d88\u8d39\u91cd\u8bd5\u90fd\u901a\u8fc7 Apache RocketMQ \u7684\u5ba2\u6237\u7aefSDK\u5b8c\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65b9\u5f0f")),(0,r.kt)("p",null,"PushConsumer\u7684\u4f7f\u7528\u65b9\u5f0f\u6bd4\u8f83\u56fa\u5b9a\uff0c\u5728\u6d88\u8d39\u8005\u521d\u59cb\u5316\u65f6\u6ce8\u518c\u4e00\u4e2a\u6d88\u8d39\u76d1\u542c\u5668\uff0c\u5e76\u5728\u6d88\u8d39\u76d1\u542c\u5668\u5185\u90e8\u5b9e\u73b0\u6d88\u606f\u5904\u7406\u903b\u8f91\u3002\u7531 Apache RocketMQ \u7684SDK\u5728\u540e\u53f0\u5b8c\u6210\u6d88\u606f\u83b7\u53d6\u3001\u89e6\u53d1\u76d1\u542c\u5668\u8c03\u7528\u4ee5\u53ca\u8fdb\u884c\u6d88\u606f\u91cd\u8bd5\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//\u6d88\u8d39\u793a\u4f8b\uff1a\u4f7f\u7528PushConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\u3002\nClientServiceProvider provider = ClientServiceProvider.loadService();\n        String topic = "Your Topic";\n        FilterExpression filterExpression = new FilterExpression("Your Filter Tag", FilterExpressionType.TAG);\n        PushConsumer pushConsumer = provider.newPushConsumerBuilder()\n                //\u8bbe\u7f6e\u6d88\u8d39\u8005\u5206\u7ec4\u3002\n                .setConsumerGroup("Your ConsumerGroup")\n                //\u8bbe\u7f6e\u63a5\u5165\u70b9\u3002\n                .setClientConfiguration(ClientConfiguration.newBuilder().setEndpoints("Your Endpoint").build())\n                //\u8bbe\u7f6e\u9884\u7ed1\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u3002\n                .setSubscriptionExpressions(Collections.singletonMap(topic, filterExpression))\n                //\u8bbe\u7f6e\u6d88\u8d39\u76d1\u542c\u5668\u3002\n                .setMessageListener(new MessageListener() {\n                    @Override\n                    public ConsumeResult consume(MessageView messageView) {\n                        //\u6d88\u8d39\u6d88\u606f\u5e76\u8fd4\u56de\u5904\u7406\u7ed3\u679c\u3002\n                        return ConsumeResult.SUCCESS;\n                    }\n                })\n                .build();\n                \n')),(0,r.kt)("p",null,"PushConsumer\u7684\u6d88\u8d39\u76d1\u542c\u5668\u6267\u884c\u7ed3\u679c\u5206\u4e3a\u4ee5\u4e0b\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u6d88\u8d39\u6210\u529f\uff1a\u4ee5Java SDK\u4e3a\u4f8b\uff0c\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"ConsumeResult.SUCCESS"),"\uff0c\u8868\u793a\u8be5\u6d88\u606f\u5904\u7406\u6210\u529f\uff0c\u670d\u52a1\u7aef\u6309\u7167\u6d88\u8d39\u7ed3\u679c\u66f4\u65b0\u6d88\u8d39\u8fdb\u5ea6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u6d88\u8d39\u5931\u8d25\uff1a\u4ee5Java SDK\u4e3a\u4f8b\uff0c\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"ConsumeResult.FAILURE"),"\uff0c\u8868\u793a\u8be5\u6d88\u606f\u5904\u7406\u5931\u8d25\uff0c\u9700\u8981\u6839\u636e\u6d88\u8d39\u91cd\u8bd5\u903b\u8f91\u5224\u65ad\u662f\u5426\u8fdb\u884c\u91cd\u8bd5\u6d88\u8d39\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u51fa\u73b0\u975e\u9884\u671f\u5931\u8d25\uff1a\u4f8b\u5982\u629b\u5f02\u5e38\u7b49\u884c\u4e3a\uff0c\u8be5\u7ed3\u679c\u6309\u7167\u6d88\u8d39\u5931\u8d25\u5904\u7406\uff0c\u9700\u8981\u6839\u636e\u6d88\u8d39\u91cd\u8bd5\u903b\u8f91\u5224\u65ad\u662f\u5426\u8fdb\u884c\u91cd\u8bd5\u6d88\u8d39\u3002"))),(0,r.kt)("p",null,"PushConsumer \u6d88\u8d39\u6d88\u606f\u65f6\uff0c\u82e5\u6d88\u606f\u5904\u7406\u903b\u8f91\u51fa\u73b0\u9884\u671f\u4e4b\u5916\u7684\u963b\u585e\u5bfc\u81f4\u6d88\u606f\u5904\u7406\u4e00\u76f4\u65e0\u6cd5\u6267\u884c\u6210\u529f\uff0cSDK\u4f1a\u6309\u7167\u6d88\u8d39\u8d85\u65f6\u5904\u7406\u5f3a\u5236\u63d0\u4ea4\u6d88\u8d39\u5931\u8d25\u7ed3\u679c\uff0c\u5e76\u6309\u7167\u6d88\u8d39\u91cd\u8bd5\u903b\u8f91\u8fdb\u884c\u5904\u7406\u3002\u6d88\u606f\u8d85\u65f6\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/en/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/10consumerretrypolicy"},"PushConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u51fa\u73b0\u6d88\u8d39\u8d85\u65f6\u60c5\u51b5\u65f6\uff0cSDK\u867d\u7136\u63d0\u4ea4\u6d88\u8d39\u5931\u8d25\u7ed3\u679c\uff0c\u4f46\u662f\u5f53\u524d\u6d88\u8d39\u7ebf\u7a0b\u53ef\u80fd\u4ecd\u7136\u65e0\u6cd5\u54cd\u5e94\u4e2d\u65ad\uff0c\u8fd8\u4f1a\u7ee7\u7eed\u5904\u7406\u6d88\u606f\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5185\u90e8\u539f\u7406")),(0,r.kt)("p",null,"\u5728PushConsumer\u7c7b\u578b\u4e2d\uff0c\u6d88\u606f\u7684\u5b9e\u65f6\u5904\u7406\u80fd\u529b\u662f\u57fa\u4e8eSDK\u5185\u90e8\u7684\u5178\u578bReactor\u7ebf\u7a0b\u6a21\u578b\u5b9e\u73b0\u7684\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0cSDK\u5185\u7f6e\u4e86\u4e00\u4e2a\u957f\u8f6e\u8be2\u7ebf\u7a0b\uff0c\u5148\u5c06\u6d88\u606f\u5f02\u6b65\u62c9\u53d6\u5230SDK\u5185\u7f6e\u7684\u7f13\u5b58\u961f\u5217\u4e2d\uff0c\u518d\u5206\u522b\u63d0\u4ea4\u5230\u6d88\u8d39\u7ebf\u7a0b\u4e2d\uff0c\u89e6\u53d1\u76d1\u542c\u5668\u6267\u884c\u672c\u5730\u6d88\u8d39\u903b\u8f91\u3002\n",(0,r.kt)("img",{alt:"PushConsumer\u539f\u7406",src:n(86448).Z,width:"1393",height:"693"})),(0,r.kt)("p",null,"\u53ef\u9760\u6027\u91cd\u8bd5"),(0,r.kt)("p",null,"PushConsumer \u6d88\u8d39\u8005\u7c7b\u578b\u4e2d\uff0c\u5ba2\u6237\u7aefSDK\u548c\u6d88\u8d39\u903b\u8f91\u7684\u552f\u4e00\u8fb9\u754c\u662f\u6d88\u8d39\u76d1\u542c\u5668\u63a5\u53e3\u3002\u5ba2\u6237\u7aefSDK\u4e25\u683c\u6309\u7167\u76d1\u542c\u5668\u7684\u8fd4\u56de\u7ed3\u679c\u5224\u65ad\u6d88\u606f\u662f\u5426\u6d88\u8d39\u6210\u529f\uff0c\u5e76\u505a\u53ef\u9760\u6027\u91cd\u8bd5\u3002\u6240\u6709\u6d88\u606f\u5fc5\u987b\u4ee5\u540c\u6b65\u65b9\u5f0f\u8fdb\u884c\u6d88\u8d39\u5904\u7406\uff0c\u5e76\u5728\u76d1\u542c\u5668\u63a5\u53e3\u7ed3\u675f\u65f6\u8fd4\u56de\u8c03\u7528\u7ed3\u679c\uff0c\u4e0d\u5141\u8bb8\u518d\u505a\u5f02\u6b65\u5316\u5206\u53d1\u3002\u6d88\u606f\u91cd\u8bd5\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/en/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/10consumerretrypolicy"},"PushConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),"\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528PushConsumer\u6d88\u8d39\u8005\u6d88\u8d39\u65f6\uff0c\u4e0d\u5141\u8bb8\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u5904\u7406\u6d88\u606f\uff0c\u5426\u5219 Apache RocketMQ \u65e0\u6cd5\u4fdd\u8bc1\u6d88\u606f\u7684\u53ef\u9760\u6027\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9519\u8bef\u65b9\u5f0f\u4e00\uff1a\u6d88\u606f\u8fd8\u672a\u5904\u7406\u5b8c\u6210\uff0c\u5c31\u63d0\u524d\u8fd4\u56de\u6d88\u8d39\u6210\u529f\u7ed3\u679c\u3002\u6b64\u65f6\u5982\u679c\u6d88\u606f\u6d88\u8d39\u5931\u8d25\uff0cApache RocketMQ \u670d\u52a1\u7aef\u662f\u65e0\u6cd5\u611f\u77e5\u7684\uff0c\u56e0\u6b64\u4e0d\u4f1a\u8fdb\u884c\u6d88\u8d39\u91cd\u8bd5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9519\u8bef\u65b9\u5f0f\u4e8c\uff1a\u5728\u6d88\u8d39\u76d1\u542c\u5668\u5185\u5c06\u6d88\u606f\u518d\u6b21\u5206\u53d1\u5230\u81ea\u5b9a\u4e49\u7684\u5176\u4ed6\u7ebf\u7a0b\uff0c\u6d88\u8d39\u76d1\u542c\u5668\u63d0\u524d\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u3002\u6b64\u65f6\u5982\u679c\u6d88\u606f\u6d88\u8d39\u5931\u8d25\uff0cApache RocketMQ \u670d\u52a1\u7aef\u540c\u6837\u65e0\u6cd5\u611f\u77e5\uff0c\u56e0\u6b64\u4e5f\u4e0d\u4f1a\u8fdb\u884c\u6d88\u8d39\u91cd\u8bd5\u3002"))),(0,r.kt)("p",null,"\u987a\u5e8f\u6027\u4fdd\u969c"),(0,r.kt)("p",null,"\u57fa\u4e8e Apache RocketMQ\n",(0,r.kt)("a",{parentName:"p",href:"/en/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/03fifomessage"},"\u987a\u5e8f\u6d88\u606f"),"\u7684\u5b9a\u4e49\uff0c\u5982\u679c\u6d88\u8d39\u8005\u5206\u7ec4\u8bbe\u7f6e\u4e86\u987a\u5e8f\u6d88\u8d39\u6a21\u5f0f\uff0c\u5219PushConsumer\u5728\u89e6\u53d1\u6d88\u8d39\u76d1\u542c\u5668\u65f6\uff0c\u4e25\u683c\u9075\u5faa\u6d88\u606f\u7684\u5148\u540e\u987a\u5e8f\u3002\u4e1a\u52a1\u5904\u7406\u903b\u8f91\u65e0\u611f\u77e5\u5373\u53ef\u4fdd\u8bc1\u6d88\u606f\u7684\u6d88\u8d39\u987a\u5e8f\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6d88\u606f\u6d88\u8d39\u6309\u7167\u987a\u5e8f\u5904\u7406\u7684\u524d\u63d0\u662f\u9075\u5faa\u540c\u6b65\u63d0\u4ea4\u539f\u5219\uff0c\u5982\u679c\u4e1a\u52a1\u903b\u8f91\u81ea\u5b9a\u4e49\u5b9e\u73b0\u4e86\u5f02\u6b65\u5206\u53d1\uff0c\u5219Apache RocketMQ \u65e0\u6cd5\u4fdd\u8bc1\u6d88\u606f\u7684\u987a\u5e8f\u6027\u3002"))),(0,r.kt)("p",null,"\u9002\u7528\u573a\u666f"),(0,r.kt)("p",null,"PushConsumer\u4e25\u683c\u9650\u5236\u4e86\u6d88\u606f\u540c\u6b65\u5904\u7406\u53ca\u6bcf\u6761\u6d88\u606f\u7684\u5904\u7406\u8d85\u65f6\u65f6\u95f4\uff0c\u9002\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u5904\u7406\u65f6\u95f4\u53ef\u9884\u4f30\uff1a\u5982\u679c\u4e0d\u786e\u5b9a\u6d88\u606f\u5904\u7406\u8017\u65f6\uff0c\u7ecf\u5e38\u6709\u9884\u671f\u4e4b\u5916\u7684\u957f\u65f6\u95f4\u8017\u65f6\u7684\u6d88\u606f\uff0cPushConsumer\u7684\u53ef\u9760\u6027\u4fdd\u8bc1\u4f1a\u9891\u7e41\u89e6\u53d1\u6d88\u606f\u91cd\u8bd5\u673a\u5236\u9020\u6210\u5927\u91cf\u91cd\u590d\u6d88\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65e0\u5f02\u6b65\u5316\u3001\u9ad8\u7ea7\u5b9a\u5236\u573a\u666f\uff1aPushConsumer\u9650\u5236\u4e86\u6d88\u8d39\u903b\u8f91\u7684\u7ebf\u7a0b\u6a21\u578b\uff0c\u7531\u5ba2\u6237\u7aefSDK\u5185\u90e8\u6309\u6700\u5927\u541e\u5410\u91cf\u89e6\u53d1\u6d88\u606f\u5904\u7406\u3002\u8be5\u6a21\u578b\u5f00\u53d1\u903b\u8f91\u7b80\u5355\uff0c\u4f46\u662f\u4e0d\u5141\u8bb8\u4f7f\u7528\u5f02\u6b65\u5316\u548c\u81ea\u5b9a\u4e49\u5904\u7406\u6d41\u7a0b\u3002"))),(0,r.kt)("h2",{id:"simpleconsumer"},"SimpleConsumer"),(0,r.kt)("p",null,"SimpleConsumer \u662f\u4e00\u79cd\u63a5\u53e3\u539f\u5b50\u578b\u7684\u6d88\u8d39\u8005\u7c7b\u578b\uff0c\u6d88\u606f\u7684\u83b7\u53d6\u3001\u6d88\u8d39\u72b6\u6001\u63d0\u4ea4\u4ee5\u53ca\u6d88\u8d39\u91cd\u8bd5\u90fd\u662f\u901a\u8fc7\u6d88\u8d39\u8005\u4e1a\u52a1\u903b\u8f91\u4e3b\u52a8\u53d1\u8d77\u8c03\u7528\u5b8c\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65b9\u5f0f")),(0,r.kt)("p",null,"SimpleConsumer \u7684\u4f7f\u7528\u6d89\u53ca\u591a\u4e2a\u63a5\u53e3\u8c03\u7528\uff0c\u7531\u4e1a\u52a1\u903b\u8f91\u6309\u9700\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u6d88\u606f\uff0c\u7136\u540e\u5206\u53d1\u7ed9\u4e1a\u52a1\u7ebf\u7a0b\u5904\u7406\u6d88\u606f\uff0c\u6700\u540e\u6309\u7167\u5904\u7406\u7684\u7ed3\u679c\u8c03\u7528\u63d0\u4ea4\u63a5\u53e3\uff0c\u8fd4\u56de\u670d\u52a1\u7aef\u5f53\u524d\u6d88\u606f\u7684\u5904\u7406\u7ed3\u679c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' //\u6d88\u8d39\u793a\u4f8b\uff1a\u4f7f\u7528SimpleConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\uff0c\u4e3b\u52a8\u83b7\u53d6\u6d88\u606f\u5904\u7406\u5e76\u63d0\u4ea4\u3002\n        ClientServiceProvider provider1 = ClientServiceProvider.loadService();\n        String topic1 = "Your Topic";\n        FilterExpression filterExpression1 = new FilterExpression("Your Filter Tag", FilterExpressionType.TAG);\n        SimpleConsumer simpleConsumer = provider1.newSimpleConsumerBuilder()\n                //\u8bbe\u7f6e\u6d88\u8d39\u8005\u5206\u7ec4\u3002\n                .setConsumerGroup("Your ConsumerGroup")\n                //\u8bbe\u7f6e\u63a5\u5165\u70b9\u3002\n                .setClientConfiguration(ClientConfiguration.newBuilder().setEndpoints("Your Endpoint").build())\n                //\u8bbe\u7f6e\u9884\u7ed1\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u3002\n                .setSubscriptionExpressions(Collections.singletonMap(topic, filterExpression))\n                .build();\n        List<MessageView> messageViewList = null;\n        try {\n            //SimpleConsumer\u9700\u8981\u4e3b\u52a8\u83b7\u53d6\u6d88\u606f\uff0c\u5e76\u5904\u7406\u3002\n            messageViewList = simpleConsumer.receive(10, Duration.ofSeconds(30));\n            messageViewList.forEach(messageView -> {\n                System.out.println(messageView);\n                //\u6d88\u8d39\u5904\u7406\u5b8c\u6210\u540e\uff0c\u9700\u8981\u4e3b\u52a8\u8c03\u7528ACK\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\u3002\n                try {\n                    simpleConsumer.ack(messageView);\n                } catch (ClientException e) {\n                    e.printStackTrace();\n                }\n            });\n        } catch (ClientException e) {\n            //\u5982\u679c\u9047\u5230\u7cfb\u7edf\u6d41\u63a7\u7b49\u539f\u56e0\u9020\u6210\u62c9\u53d6\u5931\u8d25\uff0c\u9700\u8981\u91cd\u65b0\u53d1\u8d77\u83b7\u53d6\u6d88\u606f\u8bf7\u6c42\u3002\n            e.printStackTrace();\n        }\n')),(0,r.kt)("p",null,"SimpleConsumer\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u51e0\u4e2a\u63a5\u53e3\u884c\u4e3a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53ef\u4fee\u6539\u53c2\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReceiveMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u4e3b\u52a8\u8c03\u7528\u8be5\u63a5\u53e3\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u6d88\u606f\u3002 ",(0,r.kt)("strong",{parentName:"td"},"\u8bf4\u660e")," \u7531\u4e8e\u670d\u52a1\u7aef\u5b58\u50a8\u4e3a\u5206\u5e03\u5f0f\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u670d\u52a1\u7aef\u5b9e\u9645\u6709\u6d88\u606f\uff0c\u4f46\u662f\u8fd4\u56de\u4e3a\u7a7a\u7684\u73b0\u8c61\u3002 \u4e00\u822c\u53ef\u901a\u8fc7\u91cd\u65b0\u53d1\u8d77ReceiveMessage\u8c03\u7528\u6216\u63d0\u9ad8ReceiveMessage\u7684\u5e76\u53d1\u5ea6\u89e3\u51b3\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"}," \u6279\u91cf\u62c9\u53d6\u6d88\u606f\u6570\uff1aSimpleConsumer\u53ef\u4ee5\u4e00\u6b21\u6027\u6279\u91cf\u83b7\u53d6\u591a\u6761\u6d88\u606f\u5b9e\u73b0\u6279\u91cf\u6d88\u8d39\uff0c\u8be5\u63a5\u53e3\u53ef\u4fee\u6539\u6279\u91cf\u83b7\u53d6\u7684\u6d88\u606f\u6570\u91cf\u3002  ")," \u6d88\u8d39\u4e0d\u53ef\u89c1\u65f6\u95f4\uff1a\u6d88\u606f\u7684\u6700\u957f\u5904\u7406\u8017\u65f6\uff0c\u8be5\u53c2\u6570\u7528\u4e8e\u63a7\u5236\u6d88\u8d39\u5931\u8d25\u65f6\u7684\u6d88\u606f\u91cd\u8bd5\u95f4\u9694\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"td",href:"/en/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/10consumerretrypolicy"},"SimpleConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),"\u3002\u6d88\u8d39\u8005\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"td"},"ReceiveMessage"),"\u63a5\u53e3\u65f6\u9700\u8981\u6307\u5b9a\u6d88\u8d39\u4e0d\u53ef\u89c1\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AckMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u6210\u529f\u6d88\u8d39\u6d88\u606f\u540e\uff0c\u4e3b\u52a8\u8c03\u7528\u8be5\u63a5\u53e3\u5411\u670d\u52a1\u7aef\u8fd4\u56de\u6d88\u8d39\u6210\u529f\u54cd\u5e94\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ChangeInvisibleDuration")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u91cd\u8bd5\u573a\u666f\u4e0b\uff0c\u6d88\u8d39\u8005\u53ef\u901a\u8fc7\u8be5\u63a5\u53e3\u4fee\u6539\u6d88\u606f\u5904\u7406\u65f6\u957f\uff0c\u5373\u63a7\u5236\u6d88\u606f\u7684\u91cd\u8bd5\u95f4\u9694\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u4e0d\u53ef\u89c1\u65f6\u95f4\uff1a\u8c03\u7528\u672c\u63a5\u53e3\u53ef\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"td"},"ReceiveMessage"),"\u63a5\u53e3\u9884\u8bbe\u7684\u6d88\u8d39\u4e0d\u53ef\u89c1\u65f6\u95f4\u7684\u53c2\u6570\u503c\u3002\u4e00\u822c\u7528\u4e8e\u9700\u8981\u5ef6\u957f\u6d88\u606f\u5904\u7406\u65f6\u957f\u7684\u573a\u666f\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9760\u6027\u91cd\u8bd5")),(0,r.kt)("p",null,"SimpleConsumer\u6d88\u8d39\u8005\u7c7b\u578b\u4e2d\uff0c\u5ba2\u6237\u7aefSDK\u548c\u670d\u52a1\u7aef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveMessage"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"AckMessage"),"\u63a5\u53e3\u901a\u4fe1\u3002\u5ba2\u6237\u7aefSDK\u5982\u679c\u5904\u7406\u6d88\u606f\u6210\u529f\u5219\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"AckMessage"),"\u63a5\u53e3\uff1b\u5982\u679c\u5904\u7406\u5931\u8d25\u53ea\u9700\u8981\u4e0d\u56de\u590dACK\u54cd\u5e94\uff0c\u5373\u53ef\u5728\u5b9a\u4e49\u7684\u6d88\u8d39\u4e0d\u53ef\u89c1\u65f6\u95f4\u5230\u8fbe\u540e\u89e6\u53d1\u6d88\u8d39\u91cd\u8bd5\u6d41\u7a0b\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/en/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/10consumerretrypolicy"},"SimpleConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u987a\u5e8f\u6027\u4fdd\u969c")),(0,r.kt)("p",null,"\u57fa\u4e8e Apache RocketMQ ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/03fifomessage"},"\u987a\u5e8f\u6d88\u606f"),"\u7684\u5b9a\u4e49\uff0cSimpleConsumer\u5728\u5904\u7406\u987a\u5e8f\u6d88\u606f\u65f6\uff0c\u4f1a\u6309\u7167\u6d88\u606f\u5b58\u50a8\u7684\u5148\u540e\u987a\u5e8f\u83b7\u53d6\u6d88\u606f\u3002\u5373\u9700\u8981\u4fdd\u6301\u987a\u5e8f\u7684\u4e00\u7ec4\u6d88\u606f\u4e2d\uff0c\u5982\u679c\u524d\u9762\u7684\u6d88\u606f\u672a\u5904\u7406\u5b8c\u6210\uff0c\u5219\u65e0\u6cd5\u83b7\u53d6\u5230\u540e\u9762\u7684\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u9002\u7528\u573a\u666f"),(0,r.kt)("p",null,"SimpleConsumer\u63d0\u4f9b\u539f\u5b50\u63a5\u53e3\uff0c\u7528\u4e8e\u6d88\u606f\u83b7\u53d6\u548c\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\uff0c\u76f8\u5bf9\u4e8ePushConsumer\u65b9\u5f0f\u66f4\u52a0\u7075\u6d3b\u3002SimpleConsumer\u9002\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u5904\u7406\u65f6\u957f\u4e0d\u53ef\u63a7\uff1a\u5982\u679c\u6d88\u606f\u5904\u7406\u65f6\u957f\u65e0\u6cd5\u9884\u4f30\uff0c\u7ecf\u5e38\u6709\u957f\u65f6\u95f4\u8017\u65f6\u7684\u6d88\u606f\u5904\u7406\u60c5\u51b5\u3002\u5efa\u8bae\u4f7f\u7528SimpleConsumer\u6d88\u8d39\u7c7b\u578b\uff0c\u53ef\u4ee5\u5728\u6d88\u8d39\u65f6\u81ea\u5b9a\u4e49\u6d88\u606f\u7684\u9884\u4f30\u5904\u7406\u65f6\u957f\uff0c\u82e5\u5b9e\u9645\u4e1a\u52a1\u4e2d\u9884\u4f30\u7684\u6d88\u606f\u5904\u7406\u65f6\u957f\u4e0d\u7b26\u5408\u9884\u671f\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u63d0\u524d\u4fee\u6539\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u5f02\u6b65\u5316\u3001\u6279\u91cf\u6d88\u8d39\u7b49\u9ad8\u7ea7\u5b9a\u5236\u573a\u666f\uff1aSimpleConsumer\u5728SDK\u5185\u90e8\u6ca1\u6709\u590d\u6742\u7684\u7ebf\u7a0b\u5c01\u88c5\uff0c\u5b8c\u5168\u7531\u4e1a\u52a1\u903b\u8f91\u81ea\u7531\u5b9a\u5236\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5f02\u6b65\u5206\u53d1\u3001\u6279\u91cf\u6d88\u8d39\u7b49\u9ad8\u7ea7\u5b9a\u5236\u573a\u666f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u81ea\u5b9a\u4e49\u6d88\u8d39\u901f\u7387\uff1aSimpleConsumer\u662f\u7531\u4e1a\u52a1\u903b\u8f91\u4e3b\u52a8\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u6d88\u606f\uff0c\u56e0\u6b64\u53ef\u4ee5\u81ea\u7531\u8c03\u6574\u83b7\u53d6\u6d88\u606f\u7684\u9891\u7387\uff0c\u81ea\u5b9a\u4e49\u63a7\u5236\u6d88\u8d39\u901f\u7387\u3002"))),(0,r.kt)("h2",{id:"pullconsumer"},"PullConsumer"),(0,r.kt)("p",null,"\u5f85\u8865\u5145\u3002\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PushConsumer\u5408\u7406\u63a7\u5236\u6d88\u8d39\u8017\u65f6\uff0c\u907f\u514d\u65e0\u9650\u963b\u585e")),(0,r.kt)("p",null,"\u5bf9\u4e8ePushConsumer\u6d88\u8d39\u7c7b\u578b\uff0c\u9700\u8981\u4e25\u683c\u63a7\u5236\u6d88\u606f\u7684\u6d88\u8d39\u8017\u65f6\uff0c\u5c3d\u91cf\u907f\u514d\u51fa\u73b0\u6d88\u606f\u5904\u7406\u8d85\u65f6\u5bfc\u81f4\u6d88\u606f\u91cd\u590d\u3002\u5982\u679c\u4e1a\u52a1\u7ecf\u5e38\u4f1a\u51fa\u73b0\u4e00\u4e9b\u9884\u671f\u5916\u7684\u957f\u65f6\u95f4\u8017\u65f6\u7684\u6d88\u606f\uff0c\u5efa\u8bae\u4f7f\u7528SimpleConsumer\uff0c\u5e76\u8bbe\u7f6e\u597d\u6d88\u8d39\u4e0d\u53ef\u89c1\u65f6\u95f4\u3002"))}u.isMDXComponent=!0},75704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/consumerflow-eaa625a6a01a048a155a3809a603529a.png"},86448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pushconsumer-26b909b090d4f911a40d5050d3ceba1d.png"}}]);