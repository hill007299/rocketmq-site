"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},p="\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861",o={unversionedId:"\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",id:"version-5.0/\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",title:"\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861",description:"\u6d88\u8d39\u8005\u4ece Apache RocketMQ \u83b7\u53d6\u6d88\u606f\u6d88\u8d39\u65f6\uff0c\u901a\u8fc7\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u53ef\u5c06\u4e3b\u9898\u5185\u7684\u6d88\u606f\u5206\u914d\u7ed9\u6307\u5b9a\u6d88\u8d39\u8005\u5206\u7ec4\u4e2d\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u540c\u5206\u62c5\uff0c\u63d0\u9ad8\u6d88\u8d39\u5e76\u53d1\u80fd\u529b\u548c\u6d88\u8d39\u8005\u7684\u6c34\u5e73\u6269\u5c55\u80fd\u529b\u3002\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u6d88\u8d39\u8005\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3002",source:"@site/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/08consumerloadbalance.md",sourceDirName:"04-\u529f\u80fd\u884c\u4e3a",slug:"/\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",permalink:"/en/docs/5.0/\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/08consumerloadbalance.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6d88\u606f\u8fc7\u6ee4",permalink:"/en/docs/5.0/\u529f\u80fd\u884c\u4e3a/07messagefilter"},next:{title:"\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",permalink:"/en/docs/5.0/\u529f\u80fd\u884c\u4e3a/09consumerprogress"}},s={},i=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",level:2},{value:"\u5e7f\u64ad\u6d88\u8d39\u548c\u5171\u4eab\u6d88\u8d39",id:"\u5e7f\u64ad\u6d88\u8d39\u548c\u5171\u4eab\u6d88\u8d39",level:2},{value:"\u4ec0\u4e48\u662f\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861",id:"\u4ec0\u4e48\u662f\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861",level:2},{value:"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861",id:"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861",level:2},{value:"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861",id:"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861",level:2},{value:"\u7248\u672c\u517c\u5bb9\u6027",id:"\u7248\u672c\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],u={toc:i};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861"},"\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("p",null,"\u6d88\u8d39\u8005\u4ece Apache RocketMQ \u83b7\u53d6\u6d88\u606f\u6d88\u8d39\u65f6\uff0c\u901a\u8fc7\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u53ef\u5c06\u4e3b\u9898\u5185\u7684\u6d88\u606f\u5206\u914d\u7ed9\u6307\u5b9a\u6d88\u8d39\u8005\u5206\u7ec4\u4e2d\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u540c\u5206\u62c5\uff0c\u63d0\u9ad8\u6d88\u8d39\u5e76\u53d1\u80fd\u529b\u548c\u6d88\u8d39\u8005\u7684\u6c34\u5e73\u6269\u5c55\u80fd\u529b\u3002\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u6d88\u8d39\u8005\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3002"),(0,r.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,r.kt)("p",null,"\u4e86\u89e3\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u89e3\u51b3\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u6d88\u8d39\u5904\u7406\u7684\u5bb9\u707e\u7b56\u7565\uff1a\u60a8\u53ef\u4ee5\u6839\u636e\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u660e\u786e\u5f53\u5c40\u90e8\u8282\u70b9\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u6d88\u606f\u5982\u4f55\u8fdb\u884c\u6d88\u8d39\u91cd\u8bd5\u548c\u5bb9\u707e\u5207\u6362\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u6d88\u8d39\u7684\u987a\u5e8f\u6027\u673a\u5236\uff1a\u901a\u8fc7\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u60a8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4e86\u89e3\u6d88\u606f\u6d88\u8d39\u65f6\uff0c\u5982\u4f55\u4fdd\u8bc1\u540c\u4e00\u6d88\u606f\u7ec4\u5185\u6d88\u606f\u7684\u5148\u540e\u987a\u5e8f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u5206\u914d\u7684\u6c34\u5e73\u62c6\u5206\u7b56\u7565\uff1a\u4e86\u89e3\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u60a8\u53ef\u4ee5\u660e\u786e\u6d88\u606f\u6d88\u8d39\u538b\u529b\u5982\u4f55\u88ab\u5206\u914d\u5230\u4e0d\u540c\u8282\u70b9\uff0c\u6709\u9488\u5bf9\u6027\u5730\u8fdb\u884c\u6d41\u91cf\u8fc1\u79fb\u548c\u6c34\u5e73\u6269\u7f29\u5bb9\u3002"))),(0,r.kt)("h2",{id:"\u5e7f\u64ad\u6d88\u8d39\u548c\u5171\u4eab\u6d88\u8d39"},"\u5e7f\u64ad\u6d88\u8d39\u548c\u5171\u4eab\u6d88\u8d39"),(0,r.kt)("p",null,"\u5728 Apache RocketMQ \u9886\u57df\u6a21\u578b\u4e2d\uff0c\u540c\u4e00\u6761\u6d88\u606f\u652f\u6301\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u8ba2\u9605\uff0c\u540c\u65f6\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u53ef\u4ee5\u521d\u59cb\u5316\u591a\u4e2a\u6d88\u8d39\u8005\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u6d88\u8d39\u8005\u5206\u7ec4\u548c\u6d88\u8d39\u8005\u7684\u4e0d\u540c\u7ec4\u5408\uff0c\u5b9e\u73b0\u4ee5\u4e0b\u4e24\u79cd\u4e0d\u540c\u7684\u6d88\u8d39\u6548\u679c\uff1a",(0,r.kt)("img",{alt:"\u6d88\u8d39\u65b9\u5f0f",src:n(68216).Z,width:"2375",height:"822"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u7ec4\u95f4\u5e7f\u64ad\u6d88\u8d39")," \uff1a\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6bcf\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u53ea\u521d\u59cb\u5316\u552f\u4e00\u4e00\u4e2a\u6d88\u8d39\u8005\uff0c\u6bcf\u4e2a\u6d88\u8d39\u8005\u53ef\u6d88\u8d39\u5230\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u6240\u6709\u7684\u6d88\u606f\uff0c\u5404\u6d88\u8d39\u8005\u5206\u7ec4\u90fd\u8ba2\u9605\u76f8\u540c\u7684\u6d88\u606f\uff0c\u4ee5\u6b64\u5b9e\u73b0\u5355\u5ba2\u6237\u7aef\u7ea7\u522b\u7684\u5e7f\u64ad\u4e00\u5bf9\u591a\u63a8\u9001\u6548\u679c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u65b9\u5f0f\u4e00\u822c\u53ef\u7528\u4e8e\u7f51\u5173\u63a8\u9001\u3001\u914d\u7f6e\u63a8\u9001\u7b49\u573a\u666f\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u7ec4\u5185\u5171\u4eab\u6d88\u8d39")," \uff1a\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6bcf\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u4e0b\u521d\u59cb\u5316\u4e86\u591a\u4e2a\u6d88\u8d39\u8005\uff0c\u8fd9\u4e9b\u6d88\u8d39\u8005\u5171\u540c\u5206\u62c5\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u7684\u6240\u6709\u6d88\u606f\uff0c\u5b9e\u73b0\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u6d41\u91cf\u7684\u6c34\u5e73\u62c6\u5206\u548c\u5747\u8861\u8d1f\u8f7d\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u65b9\u5f0f\u4e00\u822c\u53ef\u7528\u4e8e\u5fae\u670d\u52a1\u89e3\u8026\u573a\u666f\u3002"))),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861"},"\u4ec0\u4e48\u662f\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u6d88\u8d39\u7ec4\u95f4\u5e7f\u64ad\u6d88\u8d39\u573a\u666f\u4e0b\uff0c\u6bcf\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u53ea\u6709\u4e00\u4e2a\u6d88\u8d39\u8005\uff0c\u56e0\u6b64\u4e0d\u6d89\u53ca\u6d88\u8d39\u8005\u7684\u8d1f\u8f7d\u5747\u8861\u3002"),(0,r.kt)("p",null,"\u6d88\u8d39\u7ec4\u5185\u5171\u4eab\u6d88\u8d39\u573a\u666f\u4e0b\uff0c\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u540c\u5206\u62c5\u6d88\u606f\uff0c\u6d88\u606f\u6309\u7167\u54ea\u79cd\u903b\u8f91\u5206\u914d\u7ed9\u54ea\u4e2a\u6d88\u8d39\u8005\uff0c\u5c31\u662f\u7531\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u6240\u51b3\u5b9a\u7684\u3002"),(0,r.kt)("p",null,"\u6839\u636e\u6d88\u8d39\u8005\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#section-x2b-2cu-gpf"},"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861"),"\uff1aPushConsumer\u548cSimpleConsumer\u9ed8\u8ba4\u8d1f\u8f7d\u7b56\u7565")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#section-n9m-6xy-y77"},"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861"),"\uff1aPullConsumer\u9ed8\u8ba4\u8d1f\u8f7d\u7b56\u7565"))),(0,r.kt)("h2",{id:"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861"},"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8303\u56f4")),(0,r.kt)("p",null,"\u5bf9\u4e8ePushConsumer\u548cSimpleConsumer\u7c7b\u578b\u7684\u6d88\u8d39\u8005\uff0c\u9ed8\u8ba4\u4e14\u4ec5\u4f7f\u7528\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u8bf4\u660e\u662f\u63075.0 SDK\u4e0b\uff0cPushConsumer\u9ed8\u8ba4\u4f7f\u7528\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\uff0c\u5bf9\u4e8e3.x/4.x\u7b49Remoting\u534f\u8baeSDK \u4ecd\u7136\u4f7f\u7528\u4e86\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u3002\u4e1a\u52a1\u96c6\u6210\u5982\u65e0\u7279\u6b8a\u9700\u6c42\uff0c\u5efa\u8bae\u4f7f\u7528\u65b0\u7248\u672c\u673a\u5236\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b56\u7565\u539f\u7406")),(0,r.kt)("p",null,"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4e2d\uff0c\u540c\u4e00\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u5c06\u6309\u7167\u6d88\u606f\u7c92\u5ea6\u5e73\u5747\u5206\u644a\u4e3b\u9898\u4e2d\u7684\u6240\u6709\u6d88\u606f\uff0c\u5373\u540c\u4e00\u4e2a\u961f\u5217\u4e2d\u7684\u6d88\u606f\uff0c\u53ef\u88ab\u5e73\u5747\u5206\u914d\u7ed9\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u540c\u6d88\u8d39\u3002\n",(0,r.kt)("img",{alt:"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d",src:n(32280).Z,width:"1266",height:"387"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6d88\u8d39\u8005\u5206\u7ec4Group A\u4e2d\u6709\u4e09\u4e2a\u6d88\u8d39\u8005A1\u3001A2\u548cA3\uff0c\u8fd9\u4e09\u4e2a\u6d88\u8d39\u8005\u5c06\u5171\u540c\u6d88\u8d39\u4e3b\u9898\u4e2d\u540c\u4e00\u961f\u5217Queue1\u4e2d\u7684\u591a\u6761\u6d88\u606f\u3002\n",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4fdd\u8bc1\u540c\u4e00\u4e2a\u961f\u5217\u7684\u6d88\u606f\u53ef\u4ee5\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u540c\u5904\u7406\uff0c\u4f46\u662f\u8be5\u7b56\u7565\u4f7f\u7528\u7684\u6d88\u606f\u5206\u914d\u7b97\u6cd5\u7ed3\u679c\u662f\u968f\u673a\u7684\uff0c\u5e76\u4e0d\u80fd\u6307\u5b9a\u6d88\u606f\u88ab\u54ea\u4e00\u4e2a\u7279\u5b9a\u7684\u6d88\u8d39\u8005\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u6d88\u606f\u7c92\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\u673a\u5236\uff0c\u662f\u57fa\u4e8e\u5185\u90e8\u7684\u5355\u6761\u6d88\u606f\u786e\u8ba4\u8bed\u4e49\u5b9e\u73b0\u7684\u3002\u6d88\u8d39\u8005\u83b7\u53d6\u67d0\u6761\u6d88\u606f\u540e\uff0c\u670d\u52a1\u7aef\u4f1a\u5c06\u8be5\u6d88\u606f\u52a0\u9501\uff0c\u4fdd\u8bc1\u8fd9\u6761\u6d88\u606f\u5bf9\u5176\u4ed6\u6d88\u8d39\u8005\u4e0d\u53ef\u89c1\uff0c\u76f4\u5230\u8be5\u6d88\u606f\u6d88\u8d39\u6210\u529f\u6216\u6d88\u8d39\u8d85\u65f6\u3002\u56e0\u6b64\uff0c\u5373\u4f7f\u591a\u4e2a\u6d88\u8d39\u8005\u540c\u65f6\u6d88\u8d39\u540c\u4e00\u961f\u5217\u7684\u6d88\u606f\uff0c\u670d\u52a1\u7aef\u4e5f\u53ef\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4f1a\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u987a\u5e8f\u6d88\u606f\u8d1f\u8f7d\u673a\u5236")),(0,r.kt)("p",null,"\u5728\u987a\u5e8f\u6d88\u606f\u4e2d\uff0c\u6d88\u606f\u7684\u987a\u5e8f\u6027\u6307\u7684\u662f\u540c\u4e00\u6d88\u606f\u7ec4\u5185\u7684\u591a\u4e2a\u6d88\u606f\u4e4b\u95f4\u7684\u5148\u540e\u987a\u5e8f\u3002\u56e0\u6b64\uff0c\u987a\u5e8f\u6d88\u606f\u573a\u666f\u4e0b\uff0c\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u8fd8\u9700\u8981\u4fdd\u8bc1\u540c\u4e00\u6d88\u606f\u7ec4\u5185\u7684\u6d88\u606f\uff0c\u6309\u7167\u670d\u52a1\u7aef\u5b58\u50a8\u7684\u5148\u540e\u987a\u5e8f\u8fdb\u884c\u6d88\u8d39\u3002\u4e0d\u540c\u6d88\u8d39\u8005\u5904\u7406\u540c\u4e00\u4e2a\u6d88\u606f\u7ec4\u5185\u7684\u6d88\u606f\u65f6\uff0c\u4f1a\u4e25\u683c\u6309\u7167\u5148\u540e\u987a\u5e8f\u9501\u5b9a\u6d88\u606f\u72b6\u6001\uff0c\u786e\u4fdd\u540c\u4e00\u6d88\u606f\u7ec4\u7684\u6d88\u606f\u4e32\u884c\u6d88\u8d39\u3002\n",(0,r.kt)("img",{alt:"\u987a\u5e8f\u6d88\u606f\u8d1f\u8f7d\u7b56\u7565",src:n(30843).Z,width:"1439",height:"641"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u8ff0\uff0c\u961f\u5217Queue1\u4e2d\u67094\u6761\u987a\u5e8f\u6d88\u606f\uff0c\u8fd94\u6761\u6d88\u606f\u5c5e\u4e8e\u540c\u4e00\u6d88\u606f\u7ec4G1\uff0c\u5b58\u50a8\u987a\u5e8f\u7531M1\u5230M4\u3002\u5728\u6d88\u8d39\u8fc7\u7a0b\u4e2d\uff0c\u524d\u9762\u7684\u6d88\u606fM1\u3001M2\u88ab\u6d88\u8d39\u8005Consumer A1\u5904\u7406\u65f6\uff0c\u53ea\u8981\u6d88\u8d39\u72b6\u6001\u6ca1\u6709\u63d0\u4ea4\uff0c\u6d88\u8d39\u8005A2\u662f\u65e0\u6cd5\u5e76\u884c\u6d88\u8d39\u540e\u7eed\u7684M3\u3001M4\u6d88\u606f\u7684\uff0c\u5fc5\u987b\u7b49\u524d\u9762\u7684\u6d88\u606f\u63d0\u4ea4\u6d88\u8d39\u72b6\u6001\u540e\u624d\u80fd\u6d88\u8d39\u540e\u9762\u7684\u6d88\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b56\u7565\u7279\u70b9")),(0,r.kt)("p",null,"\u76f8\u5bf9\u4e8e\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u8d39\u5206\u644a\u66f4\u5747\u8861\u4f20\u7edf\u961f\u5217\u7ea7\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4e2d\uff0c\u5982\u679c\u961f\u5217\u6570\u91cf\u548c\u6d88\u8d39\u8005\u6570\u91cf\u4e0d\u5747\u8861\uff0c\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u90e8\u5206\u6d88\u8d39\u8005\u7a7a\u95f2\uff0c\u6216\u90e8\u5206\u6d88\u8d39\u8005\u5904\u7406\u8fc7\u591a\u6d88\u606f\u7684\u60c5\u51b5\u3002\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u65e0\u9700\u5173\u6ce8\u6d88\u8d39\u8005\u548c\u961f\u5217\u7684\u76f8\u5bf9\u6570\u91cf\uff0c\u80fd\u591f\u66f4\u5747\u5300\u5730\u5206\u644a\u6d88\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u975e\u5bf9\u7b49\u6d88\u8d39\u8005\u66f4\u53cb\u597d\u5bf9\u4e8e\u7ebf\u4e0a\u751f\u4ea7\u73af\u5883\uff0c\u7531\u4e8e\u7f51\u7edc\u673a\u623f\u5206\u533a\u5ef6\u8fdf\u3001\u6d88\u8d39\u8005\u7269\u7406\u8d44\u6e90\u89c4\u683c\u4e0d\u4e00\u81f4\u7b49\u539f\u56e0\uff0c\u6d88\u8d39\u8005\u7684\u5904\u7406\u80fd\u529b\u53ef\u80fd\u4f1a\u4e0d\u4e00\u81f4\uff0c\u5982\u679c\u6309\u7167\u961f\u5217\u5206\u914d\u6d88\u606f\uff0c\u5219\u53ef\u80fd\u51fa\u73b0\u90e8\u5206\u6d88\u8d39\u8005\u6d88\u606f\u5806\u79ef\u3001\u90e8\u5206\u6d88\u8d39\u8005\u7a7a\u95f2\u7684\u60c5\u51b5\u3002\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u6309\u9700\u5206\u914d\uff0c\u6d88\u8d39\u8005\u5904\u7406\u4efb\u52a1\u66f4\u5747\u8861\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u961f\u5217\u5206\u914d\u8fd0\u7ef4\u66f4\u65b9\u4fbf\u4f20\u7edf\u57fa\u4e8e\u7ed1\u5b9a\u961f\u5217\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5fc5\u987b\u4fdd\u8bc1\u961f\u5217\u6570\u91cf\u5927\u4e8e\u7b49\u4e8e\u6d88\u8d39\u8005\u6570\u91cf\uff0c\u4ee5\u514d\u4ea7\u751f\u90e8\u5206\u6d88\u8d39\u8005\u83b7\u53d6\u4e0d\u5230\u961f\u5217\u51fa\u73b0\u7a7a\u8f6c\u7684\u60c5\u51b5\uff0c\u800c\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u5219\u65e0\u9700\u5173\u6ce8\u961f\u5217\u6570\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u573a\u666f")),(0,r.kt)("p",null,"\u6d88\u606f\u7c92\u5ea6\u6d88\u8d39\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4e0b\uff0c\u540c\u4e00\u961f\u5217\u5185\u7684\u6d88\u606f\u79bb\u6563\u5730\u5206\u5e03\u4e8e\u591a\u4e2a\u6d88\u8d39\u8005\uff0c\u9002\u7528\u4e8e\u7edd\u5927\u591a\u6570\u5728\u7ebf\u4e8b\u4ef6\u5904\u7406\u7684\u573a\u666f\u3002\u53ea\u9700\u8981\u57fa\u672c\u7684\u6d88\u606f\u5904\u7406\u80fd\u529b\uff0c\u5bf9\u6d88\u606f\u4e4b\u95f4\u6ca1\u6709\u6279\u91cf\u805a\u5408\u7684\u8bc9\u6c42\u3002\u800c\u5bf9\u4e8e\u6d41\u5f0f\u5904\u7406\u3001\u805a\u5408\u8ba1\u7b97\u573a\u666f\uff0c\u9700\u8981\u660e\u786e\u5730\u5bf9\u6d88\u606f\u8fdb\u884c\u805a\u5408\u3001\u6279\u5904\u7406\u65f6\uff0c\u66f4\u9002\u5408\u4f7f\u7528\u961f\u5217\u7c92\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,r.kt)("p",null,"\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4e0d\u9700\u8981\u989d\u5916\u8bbe\u7f6e\uff0c\u5bf9\u4e8ePushConsumer\u548cSimpleConsumer\u6d88\u8d39\u8005\u7c7b\u578b\u9ed8\u8ba4\u542f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SimpleConsumer simpleConsumer = null;\n        //\u6d88\u8d39\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528PushConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\uff0c\u53ea\u9700\u8981\u5728\u6d88\u8d39\u76d1\u542c\u5668\u5904\u7406\u5373\u53ef\uff0c\u65e0\u9700\u5173\u6ce8\u6d88\u606f\u8d1f\u8f7d\u5747\u8861\u3002\n        MessageListener messageListener = new MessageListener() {\n            @Override\n            public ConsumeResult consume(MessageView messageView) {\n                System.out.println(messageView);\n                //\u6839\u636e\u6d88\u8d39\u7ed3\u679c\u8fd4\u56de\u72b6\u6001\u3002\n                return ConsumeResult.SUCCESS;\n            }\n        };\n        //\u6d88\u8d39\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528SimpleConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\uff0c\u4e3b\u52a8\u83b7\u53d6\u6d88\u606f\u5904\u7406\u5e76\u63d0\u4ea4\u3002\u4f1a\u6309\u7167\u8ba2\u9605\u7684\u4e3b\u9898\u81ea\u52a8\u83b7\u53d6\uff0c\u65e0\u9700\u5173\u6ce8\u6d88\u606f\u8d1f\u8f7d\u5747\u8861\u3002\n        List<MessageView> messageViewList = null;\n        try {\n            messageViewList = simpleConsumer.receive(10, Duration.ofSeconds(30));\n            messageViewList.forEach(messageView -> {\n                System.out.println(messageView);\n                //\u6d88\u8d39\u5904\u7406\u5b8c\u6210\u540e\uff0c\u9700\u8981\u4e3b\u52a8\u8c03\u7528ACK\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\u3002\n                try {\n                    simpleConsumer.ack(messageView);\n                } catch (ClientException e) {\n                    e.printStackTrace();\n                }\n            });\n        } catch (ClientException e) {\n            //\u5982\u679c\u9047\u5230\u7cfb\u7edf\u6d41\u63a7\u7b49\u539f\u56e0\u9020\u6210\u62c9\u53d6\u5931\u8d25\uff0c\u9700\u8981\u91cd\u65b0\u53d1\u8d77\u83b7\u53d6\u6d88\u606f\u8bf7\u6c42\u3002\n            e.printStackTrace();\n        }\n            \n")),(0,r.kt)("h2",{id:"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861"},"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8303\u56f4")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5386\u53f2\u7248\u672c\uff08\u670d\u52a1\u7aef4.x/3.x\u7248\u672c\uff09\u7684\u6d88\u8d39\u8005\uff0c\u5305\u62ecPullConsumer\u3001DefaultPushConsumer\u3001DefaultPullConsumer\u3001LitePullConsumer\u7b49\uff0c\u9ed8\u8ba4\u4e14\u4ec5\u80fd\u4f7f\u7528\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b56\u7565\u539f\u7406")),(0,r.kt)("p",null,"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4e2d\uff0c\u540c\u4e00\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u5c06\u6309\u7167\u961f\u5217\u7c92\u5ea6\u6d88\u8d39\u6d88\u606f\uff0c\u5373\u6bcf\u4e2a\u961f\u5217\u4ec5\u88ab\u4e00\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\u3002\n",(0,r.kt)("img",{alt:"\u961f\u5217\u7ea7\u8d1f\u8f7d\u5747\u8861\u539f\u7406",src:n(90848).Z,width:"1375",height:"672"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4e3b\u9898\u4e2d\u7684\u4e09\u4e2a\u961f\u5217Queue1\u3001Queue2\u3001Queue3\u88ab\u5206\u914d\u7ed9\u6d88\u8d39\u8005\u5206\u7ec4\u4e2d\u7684\u4e24\u4e2a\u6d88\u8d39\u8005\uff0c\u6bcf\u4e2a\u961f\u5217\u53ea\u80fd\u5206\u914d\u7ed9\u4e00\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\uff0c\u8be5\u793a\u4f8b\u4e2d\u7531\u4e8e\u961f\u5217\u6570\u5927\u4e8e\u6d88\u8d39\u8005\u6570\uff0c\u56e0\u6b64\uff0c\u6d88\u8d39\u8005A2\u88ab\u5206\u914d\u4e86\u4e24\u4e2a\u961f\u5217\u3002\u82e5\u961f\u5217\u6570\u5c0f\u4e8e\u6d88\u8d39\u8005\u6570\u91cf\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u90e8\u5206\u6d88\u8d39\u8005\u65e0\u7ed1\u5b9a\u961f\u5217\u7684\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"\u961f\u5217\u7c92\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u57fa\u4e8e\u961f\u5217\u6570\u91cf\u3001\u6d88\u8d39\u8005\u6570\u91cf\u7b49\u8fd0\u884c\u6570\u636e\u8fdb\u884c\u7edf\u4e00\u7684\u7b97\u6cd5\u5206\u914d\uff0c\u5c06\u6bcf\u4e2a\u961f\u5217\u7ed1\u5b9a\u5230\u7279\u5b9a\u7684\u6d88\u8d39\u8005\uff0c\u7136\u540e\u6bcf\u4e2a\u6d88\u8d39\u8005\u6309\u7167\u53d6\u6d88\u606f",">","\u63d0\u4ea4\u6d88\u8d39\u4f4d\u70b9",">","\u6301\u4e45\u5316\u6d88\u8d39\u4f4d\u70b9\u7684\u6d88\u8d39\u8bed\u4e49\u5904\u7406\u6d88\u606f\uff0c\u53d6\u6d88\u606f\u8fc7\u7a0b\u4e0d\u63d0\u4ea4\u6d88\u8d39\u72b6\u6001\uff0c\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d\u6d88\u606f\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39\uff0c\u6bcf\u4e2a\u961f\u5217\u4ec5\u652f\u6301\u88ab\u4e00\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4fdd\u8bc1\u540c\u4e00\u4e2a\u961f\u5217\u4ec5\u88ab\u4e00\u4e2a\u6d88\u8d39\u8005\u5904\u7406\uff0c\u8be5\u7b56\u7565\u7684\u5b9e\u73b0\u4f9d\u8d56\u6d88\u8d39\u8005\u548c\u670d\u52a1\u7aef\u7684\u4fe1\u606f\u534f\u5546\u673a\u5236\uff0cApache RocketMQ \u5e76\u4e0d\u80fd\u4fdd\u8bc1\u534f\u5546\u7ed3\u679c\u5b8c\u5168\u5f3a\u4e00\u81f4\u3002\u56e0\u6b64\uff0c\u5728\u6d88\u8d39\u8005\u6570\u91cf\u3001\u961f\u5217\u6570\u91cf\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u77ed\u6682\u7684\u961f\u5217\u5206\u914d\u7ed3\u679c\u4e0d\u4e00\u81f4\uff0c\u4ece\u800c\u5bfc\u81f4\u5c11\u91cf\u6d88\u606f\u88ab\u91cd\u590d\u5904\u7406\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b56\u7565\u7279\u70b9")),(0,r.kt)("p",null,"\u76f8\u5bf9\u4e8e\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u5206\u914d\u7c92\u5ea6\u8f83\u5927\uff0c\u4e0d\u591f\u7075\u6d3b\u3002\u4f46\u8be5\u7b56\u7565\u5728\u6d41\u5f0f\u5904\u7406\u573a\u666f\u4e0b\u6709\u5929\u7136\u4f18\u52bf\uff0c\u80fd\u591f\u4fdd\u8bc1\u540c\u4e00\u961f\u5217\u7684\u6d88\u606f\u88ab\u76f8\u540c\u7684\u6d88\u8d39\u8005\u5904\u7406\uff0c\u5bf9\u4e8e\u6279\u91cf\u5904\u7406\u3001\u805a\u5408\u5904\u7406\u66f4\u53cb\u597d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u573a\u666f")),(0,r.kt)("p",null,"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u9002\u7528\u4e8e\u6d41\u5f0f\u8ba1\u7b97\u3001\u6570\u636e\u805a\u5408\u7b49\u9700\u8981\u660e\u786e\u5bf9\u6d88\u606f\u8fdb\u884c\u805a\u5408\u3001\u6279\u5904\u7406\u7684\u573a\u666f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,r.kt)("p",null,"\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4e0d\u9700\u8981\u989d\u5916\u8bbe\u7f6e\uff0c\u5bf9\u4e8e\u5386\u53f2\u7248\u672c\uff08\u670d\u52a1\u7aef4.x/3.x\u7248\u672c\uff09\u7684\u6d88\u8d39\u8005\u7c7b\u578bPullConsumer\u9ed8\u8ba4\u542f\u7528\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u793a\u4f8b\u4ee3\u7801\uff0c\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/example/src/main/java/org/apache/rocketmq/example/simple/LitePullConsumerAssign.java"},"RocketMQ\u4ee3\u7801\u5e93"),"\u83b7\u53d6\u3002"),(0,r.kt)("h2",{id:"\u7248\u672c\u517c\u5bb9\u6027"},"\u7248\u672c\u517c\u5bb9\u6027"),(0,r.kt)("p",null,"\u6d88\u606f\u7c92\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4ece Apache RocketMQ \u670d\u52a1\u7aef5.0\u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u5386\u53f2\u7248\u672c4.x/3.x\u7248\u672c\u4ec5\u652f\u6301\u961f\u5217\u7c92\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u5f53\u60a8\u4f7f\u7528\u7684 Apache RocketMQ \u670d\u52a1\u7aef\u7248\u672c\u4e3a5.x\u7248\u672c\u65f6\uff0c\u4e24\u79cd\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u5747\u652f\u6301\uff0c\u5177\u4f53\u751f\u6548\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4f9d\u5ba2\u6237\u7aef\u7248\u672c\u548c\u6d88\u8d39\u8005\u7c7b\u578b\u800c\u5b9a\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9488\u5bf9\u6d88\u8d39\u903b\u8f91\u505a\u6d88\u606f\u5e42\u7b49")),(0,r.kt)("p",null,"\u65e0\u8bba\u662f\u6d88\u606f\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u8fd8\u662f\u961f\u5217\u7c92\u5ea6\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5728\u6d88\u8d39\u8005\u4e0a\u7ebf\u6216\u4e0b\u7ebf\u3001\u670d\u52a1\u7aef\u6269\u7f29\u5bb9\u7b49\u573a\u666f\u4e0b\uff0c\u90fd\u4f1a\u89e6\u53d1\u77ed\u6682\u7684\u91cd\u65b0\u8d1f\u8f7d\u5747\u8861\u52a8\u4f5c\u3002\u6b64\u65f6\u53ef\u80fd\u4f1a\u5b58\u5728\u77ed\u6682\u7684\u8d1f\u8f7d\u4e0d\u4e00\u81f4\u60c5\u51b5\uff0c\u51fa\u73b0\u5c11\u91cf\u6d88\u606f\u91cd\u590d\u7684\u73b0\u8c61\u3002\u56e0\u6b64\uff0c\u9700\u8981\u5728\u4e0b\u6e38\u6d88\u8d39\u903b\u8f91\u4e2d\u505a\u597d\u6d88\u606f\u5e42\u7b49\u53bb\u91cd\u5904\u7406\u3002"))}c.isMDXComponent=!0},32280:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clustermode-dfd781d08bc0c69111841bda537aa302.png"},90848:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clusterqueuemode-ce4f88dc594c1237ba95db2fa9146b8c.png"},68216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/consumemode-74d53c59b3266f1f633b1392f5a0f279.png"},30843:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fifoinclustermode-60b2f917ab49333f93029cee178b13f0.png"}}]);