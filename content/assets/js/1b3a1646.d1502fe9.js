"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44965:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="\u4e8b\u52a1\u6d88\u606f\u53d1\u9001",c={unversionedId:"\u751f\u4ea7\u8005/09message5",id:"\u751f\u4ea7\u8005/09message5",isDocsHomePage:!1,title:"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001",description:"\u4e8b\u52a1\u6d88\u606f\u4ecb\u7ecd",source:"@site/docs/02-\u751f\u4ea7\u8005/09message5.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/09message5",permalink:"/docs/\u751f\u4ea7\u8005/09message5",editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-\u751f\u4ea7\u8005/09message5.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6279\u91cf\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/08message4"},next:{title:"\u57fa\u7840\u6982\u5ff5",permalink:"/docs/\u6d88\u8d39\u8005/11concept2"}},s=[{value:"\u4e8b\u52a1\u6d88\u606f\u4ecb\u7ecd",id:"\u4e8b\u52a1\u6d88\u606f\u4ecb\u7ecd",children:[]},{value:"\u4e8b\u52a1\u6d88\u606f\u6b65\u9aa4",id:"\u4e8b\u52a1\u6d88\u606f\u6b65\u9aa4",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],l={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001"},"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001"),(0,r.kt)("h2",{id:"\u4e8b\u52a1\u6d88\u606f\u4ecb\u7ecd"},"\u4e8b\u52a1\u6d88\u606f\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u5bf9\u6570\u636e\u4e00\u81f4\u6027\u6709\u5f3a\u9700\u6c42\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u7528 Apache RocketMQ  \u4e8b\u52a1\u6d88\u606f\u6765\u89e3\u51b3\uff0c\u4ece\u800c\u4fdd\u8bc1\u4e0a\u4e0b\u6e38\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f\u793a\u4f8b\u4e00",src:n(58771).Z})),(0,r.kt)("p",null,"\u4ee5\u7535\u5546\u4ea4\u6613\u573a\u666f\u4e3a\u4f8b\uff0c\u7528\u6237\u652f\u4ed8\u8ba2\u5355\u8fd9\u4e00\u6838\u5fc3\u64cd\u4f5c\u7684\u540c\u65f6\u4f1a\u6d89\u53ca\u5230\u4e0b\u6e38\u7269\u6d41\u53d1\u8d27\u3001\u79ef\u5206\u53d8\u66f4\u3001\u8d2d\u7269\u8f66\u72b6\u6001\u6e05\u7a7a\u7b49\u591a\u4e2a\u5b50\u7cfb\u7edf\u7684\u53d8\u66f4\u3002\u5f53\u524d\u4e1a\u52a1\u7684\u5904\u7406\u5206\u652f\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u5206\u652f\u8ba2\u5355\u7cfb\u7edf\u72b6\u6001\u66f4\u65b0\uff1a\u7531\u672a\u652f\u4ed8\u53d8\u66f4\u4e3a\u652f\u4ed8\u6210\u529f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u7cfb\u7edf\u72b6\u6001\u65b0\u589e\uff1a\u65b0\u589e\u5f85\u53d1\u8d27\u7269\u6d41\u8bb0\u5f55\uff0c\u521b\u5efa\u8ba2\u5355\u7269\u6d41\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u79ef\u5206\u7cfb\u7edf\u72b6\u6001\u53d8\u66f4\uff1a\u53d8\u66f4\u7528\u6237\u79ef\u5206\uff0c\u66f4\u65b0\u7528\u6237\u79ef\u5206\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8d2d\u7269\u8f66\u7cfb\u7edf\u72b6\u6001\u53d8\u66f4\uff1a\u6e05\u7a7a\u8d2d\u7269\u8f66\uff0c\u66f4\u65b0\u7528\u6237\u8d2d\u7269\u8f66\u8bb0\u5f55\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f\u793a\u4f8b\u4e00",src:n(93488).Z})),(0,r.kt)("p",null,"\u4f7f\u7528\u666e\u901a\u6d88\u606f\u548c\u8ba2\u5355\u4e8b\u52a1\u65e0\u6cd5\u4fdd\u8bc1\u4e00\u81f4\u7684\u539f\u56e0\uff0c\u672c\u8d28\u4e0a\u662f\u7531\u4e8e\u666e\u901a\u6d88\u606f\u65e0\u6cd5\u50cf\u5355\u673a\u6570\u636e\u5e93\u4e8b\u52a1\u4e00\u6837\uff0c\u5177\u5907\u63d0\u4ea4\u3001\u56de\u6eda\u548c\u7edf\u4e00\u534f\u8c03\u7684\u80fd\u529b\u3002 \u800c\u57fa\u4e8e RocketMQ \u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u6d88\u606f\u529f\u80fd\uff0c\u5728\u666e\u901a\u6d88\u606f\u57fa\u7840\u4e0a\uff0c\u652f\u6301\u4e8c\u9636\u6bb5\u7684\u63d0\u4ea4\u80fd\u529b\u3002\u5c06\u4e8c\u9636\u6bb5\u63d0\u4ea4\u548c\u672c\u5730\u4e8b\u52a1\u7ed1\u5b9a\uff0c\u5b9e\u73b0\u5168\u5c40\u63d0\u4ea4\u7ed3\u679c\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f1",src:n(97887).Z})),(0,r.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\u3002\u7b2c\u4e00\u9636\u6bb5\u4f1a\u53d1\u9001\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u534a\u4e8b\u52a1\u6d88\u606f"),"\uff0c\u534a\u4e8b\u52a1\u6d88\u606f\u662f\u6307\u6682\u4e0d\u80fd\u6295\u9012\u7684\u6d88\u606f\uff0c\u751f\u4ea7\u8005\u5df2\u7ecf\u6210\u529f\u5730\u5c06\u6d88\u606f\u53d1\u9001\u5230\u4e86 Broker\uff0c\u4f46\u662fBroker \u672a\u6536\u5230\u751f\u4ea7\u8005\u5bf9\u8be5\u6d88\u606f\u7684\u4e8c\u6b21\u786e\u8ba4\uff0c\u6b64\u65f6\u8be5\u6d88\u606f\u88ab\u6807\u8bb0\u6210\u201c\u6682\u4e0d\u80fd\u6295\u9012\u201d\u72b6\u6001\uff0c\u5982\u679c\u53d1\u9001\u6210\u529f\u5219\u6267\u884c\u672c\u5730\u4e8b\u52a1\uff0c\u5e76\u6839\u636e\u672c\u5730\u4e8b\u52a1\u6267\u884c\u6210\u529f\u4e0e\u5426\uff0c\u5411 Broker \u534a\u4e8b\u52a1\u6d88\u606f\u72b6\u6001\uff08commit\u6216\u8005rollback\uff09\uff0c\u534a\u4e8b\u52a1\u6d88\u606f\u53ea\u6709 commit \u72b6\u6001\u624d\u4f1a\u771f\u6b63\u5411\u4e0b\u6e38\u6295\u9012\u3002\u5982\u679c\u7531\u4e8e\u7f51\u7edc\u95ea\u65ad\u3001\u751f\u4ea7\u8005\u5e94\u7528\u91cd\u542f\u7b49\u539f\u56e0\uff0c\u5bfc\u81f4\u67d0\u6761\u4e8b\u52a1\u6d88\u606f\u7684\u4e8c\u6b21\u786e\u8ba4\u4e22\u5931\uff0cBroker \u7aef\u4f1a\u901a\u8fc7\u626b\u63cf\u53d1\u73b0\u67d0\u6761\u6d88\u606f\u957f\u671f\u5904\u4e8e\u201c\u534a\u4e8b\u52a1\u6d88\u606f\u201d\u65f6\uff0c\u9700\u8981\u4e3b\u52a8\u5411\u6d88\u606f\u751f\u4ea7\u8005\u8be2\u95ee\u8be5\u6d88\u606f\u7684\u6700\u7ec8\u72b6\u6001\uff08Commit\u6216\u662fRollback\uff09\u3002\u8fd9\u6837\u6700\u7ec8\u4fdd\u8bc1\u4e86\u672c\u5730\u4e8b\u52a1\u6267\u884c\u6210\u529f\uff0c\u4e0b\u6e38\u5c31\u80fd\u6536\u5230\u6d88\u606f\uff0c\u672c\u5730\u4e8b\u52a1\u6267\u884c\u5931\u8d25\uff0c\u4e0b\u6e38\u5c31\u6536\u4e0d\u5230\u6d88\u606f\u3002\u603b\u800c\u4fdd\u8bc1\u4e86\u4e0a\u4e0b\u6e38\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,"\u6574\u4e2a\u4e8b\u52a1\u6d88\u606f\u7684\u8be6\u7ec6\u4ea4\u4e92\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f2",src:n(84693).Z})),(0,r.kt)("h2",{id:"\u4e8b\u52a1\u6d88\u606f\u6b65\u9aa4"},"\u4e8b\u52a1\u6d88\u606f\u6b65\u9aa4"),(0,r.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f",(0,r.kt)("strong",{parentName:"p"},"\u53d1\u9001"),"\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u5c06\u534a\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u81f3 ",(0,r.kt)("inlineCode",{parentName:"li"},"RocketMQ Broker"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"RocketMQ Broker")," \u5c06\u6d88\u606f\u6301\u4e45\u5316\u6210\u529f\u4e4b\u540e\uff0c\u5411\u751f\u4ea7\u8005\u8fd4\u56de Ack \u786e\u8ba4\u6d88\u606f\u5df2\u7ecf\u53d1\u9001\u6210\u529f\uff0c\u6b64\u65f6\u6d88\u606f\u6682\u4e0d\u80fd\u6295\u9012\uff0c\u4e3a\u534a\u4e8b\u52a1\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u5f00\u59cb\u6267\u884c\u672c\u5730\u4e8b\u52a1\u903b\u8f91\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u6839\u636e\u672c\u5730\u4e8b\u52a1\u6267\u884c\u7ed3\u679c\u5411\u670d\u52a1\u7aef\u63d0\u4ea4\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\uff08Commit\u6216\u662fRollback\uff09\uff0c\u670d\u52a1\u7aef\u6536\u5230\u786e\u8ba4\u7ed3\u679c\u540e\u5904\u7406\u903b\u8f91\u5982\u4e0b\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\u4e3aCommit\uff1a\u670d\u52a1\u7aef\u5c06\u534a\u4e8b\u52a1\u6d88\u606f\u6807\u8bb0\u4e3a\u53ef\u6295\u9012\uff0c\u5e76\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\u4e3aRollback\uff1a\u670d\u52a1\u7aef\u5c06\u56de\u6eda\u4e8b\u52a1\uff0c\u4e0d\u4f1a\u5c06\u534a\u4e8b\u52a1\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u65ad\u7f51\u6216\u8005\u662f\u751f\u4ea7\u8005\u5e94\u7528\u91cd\u542f\u7684\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u82e5\u670d\u52a1\u7aef\u672a\u6536\u5230\u53d1\u9001\u8005\u63d0\u4ea4\u7684\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\uff0c\u6216\u670d\u52a1\u7aef\u6536\u5230\u7684\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\u4e3aUnknown\u672a\u77e5\u72b6\u6001\uff0c\u7ecf\u8fc7\u56fa\u5b9a\u65f6\u95f4\u540e\uff0c\u670d\u52a1\u7aef\u5c06\u5bf9\u6d88\u606f\u751f\u4ea7\u8005\u5373\u751f\u4ea7\u8005\u96c6\u7fa4\u4e2d\u4efb\u4e00\u751f\u4ea7\u8005\u5b9e\u4f8b\u53d1\u8d77\u6d88\u606f\u56de\u67e5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},":::note \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u670d\u52a1\u7aef\u4ec5\u4ec5\u4f1a\u6309\u7167\u53c2\u6570\u5c1d\u8bd5\u6307\u5b9a\u6b21\u6570\uff0c\u8d85\u8fc7\u6b21\u6570\u540e\u4e8b\u52a1\u4f1a\u5f3a\u5236\u56de\u6eda\uff0c\u56e0\u6b64\u672a\u51b3\u4e8b\u52a1\u7684\u56de\u67e5\u65f6\u6548\u6027\u975e\u5e38\u5173\u952e\uff0c\u9700\u8981\u6309\u7167\u4e1a\u52a1\u7684\u5b9e\u9645\u98ce\u9669\u6765\u8bbe\u7f6e :::"))),(0,r.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f",(0,r.kt)("strong",{parentName:"p"},"\u56de\u67e5"),"\u6b65\u9aa4\u5982\u4e0b\uff1a\n7. \u751f\u4ea7\u8005\u6536\u5230\u6d88\u606f\u56de\u67e5\u540e\uff0c\u9700\u8981\u68c0\u67e5\u5bf9\u5e94\u6d88\u606f\u7684\u672c\u5730\u4e8b\u52a1\u6267\u884c\u7684\u6700\u7ec8\u7ed3\u679c\u3002\n8. \u751f\u4ea7\u8005\u6839\u636e\u68c0\u67e5\u5f97\u5230\u7684\u672c\u5730\u4e8b\u52a1\u7684\u6700\u7ec8\u72b6\u6001\u518d\u6b21\u63d0\u4ea4\u4e8c\u6b21\u786e\u8ba4\uff0c\u670d\u52a1\u7aef\u4ecd\u6309\u7167\u6b65\u9aa44\u5bf9\u534a\u4e8b\u52a1\u6d88\u606f\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{39}","{39}":!0},'public class TransactionProducer {\n    public static void main(String[] args) throws MQClientException, InterruptedException {\n        TransactionListener transactionListener = new TransactionListenerImpl();\n        TransactionMQProducer producer = new TransactionMQProducer("please_rename_unique_group_name");\n        ExecutorService executorService = new ThreadPoolExecutor(2, 5, 100, TimeUnit.SECONDS, new ArrayBlockingQueue<Runnable>(2000), new ThreadFactory() {\n            @Override\n            public Thread newThread(Runnable r) {\n                Thread thread = new Thread(r);\n                thread.setName("client-transaction-msg-check-thread");\n                return thread;\n            }\n        });\n\n        producer.setExecutorService(executorService);\n        producer.setTransactionListener(transactionListener);\n        producer.start();\n\n        String[] tags = new String[] {"TagA", "TagB", "TagC", "TagD", "TagE"};\n        for (int i = 0; i < 10; i++) {\n            try {\n                Message msg =\n                    new Message("TopicTest", tags[i % tags.length], "KEY" + i,\n                        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));\n                SendResult sendResult = producer.sendMessageInTransaction(msg, null);\n                System.out.printf("%s%n", sendResult);\n\n                Thread.sleep(10);\n            } catch (MQClientException | UnsupportedEncodingException e) {\n                e.printStackTrace();\n            }\n        }\n\n        for (int i = 0; i < 100000; i++) {\n            Thread.sleep(1000);\n        }\n        producer.shutdown();\n    }\n\n    static class TransactionListenerImpl implements TransactionListener {\n        private AtomicInteger transactionIndex = new AtomicInteger(0);\n\n        private ConcurrentHashMap<String, Integer> localTrans = new ConcurrentHashMap<>();\n\n        @Override\n        public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {\n            int value = transactionIndex.getAndIncrement();\n            int status = value % 3;\n            localTrans.put(msg.getTransactionId(), status);\n            return LocalTransactionState.UNKNOW;\n        }\n\n        @Override\n        public LocalTransactionState checkLocalTransaction(MessageExt msg) {\n            Integer status = localTrans.get(msg.getTransactionId());\n            if (null != status) {\n                switch (status) {\n                    case 0:\n                        return LocalTransactionState.UNKNOW;\n                    case 1:\n                        return LocalTransactionState.COMMIT_MESSAGE;\n                    case 2:\n                        return LocalTransactionState.ROLLBACK_MESSAGE;\n                    default:\n                        return LocalTransactionState.COMMIT_MESSAGE;\n                }\n            }\n            return LocalTransactionState.COMMIT_MESSAGE;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f\u7684\u53d1\u9001\u4e0d\u518d\u4f7f\u7528 DefaultMQProducer\uff0c\u800c\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionMQProducer")," \u8fdb\u884c\u53d1\u9001\uff0c\u4e0a\u8ff0\u7684\u4f8b\u5b50\u4e2d\u8bbe\u7f6e\u4e86\u4e8b\u52a1\u56de\u67e5\u7684\u7ebf\u7a0b\u6c60\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u4e5f\u4f1a\u9ed8\u8ba4\u751f\u6210\u4e00\u4e2a\uff0c\u6700\u91cd\u8981\u7684\u662f\u9700\u8981\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionListener")," \u63a5\u53e3\uff0c\u5e76\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionMQProducer"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"TransactionListener\u63a5\u53e3\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{9,18}","{9,18}":!0},"public interface TransactionListener {\n    /**\n     * When send transactional prepare(half) message succeed, this method will be invoked to execute local transaction.\n     *\n     * @param msg Half(prepare) message\n     * @param arg Custom business parameter\n     * @return Transaction state\n     */\n    LocalTransactionState executeLocalTransaction(final Message msg, final Object arg);\n\n    /**\n     * When no response to prepare(half) message. broker will send check message to check the transaction status, and this\n     * method will be invoked to get local transaction status.\n     *\n     * @param msg Check message\n     * @return Transaction state\n     */\n    LocalTransactionState checkLocalTransaction(final MessageExt msg);\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"executeLocalTransaction")," \u662f\u534a\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u6210\u529f\u540e\uff0c\u6267\u884c\u672c\u5730\u4e8b\u52a1\u7684\u65b9\u6cd5\uff0c\u5177\u4f53\u6267\u884c\u5b8c\u672c\u5730\u4e8b\u52a1\u540e\uff0c\u53ef\u4ee5\u5728\u8be5\u65b9\u6cd5\u4e2d\u8fd4\u56de\u4ee5\u4e0b\u4e09\u79cd\u72b6\u6001\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalTransactionState.COMMIT_MESSAGE"),"\uff1a\u63d0\u4ea4\u4e8b\u52a1\uff0c\u5141\u8bb8\u6d88\u8d39\u8005\u6d88\u8d39\u8be5\u6d88\u606f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalTransactionState.ROLLBACK_MESSAGE"),"\uff1a\u56de\u6eda\u4e8b\u52a1\uff0c\u6d88\u606f\u5c06\u88ab\u4e22\u5f03\u4e0d\u5141\u8bb8\u6d88\u8d39\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalTransactionState.UNKNOW"),"\uff1a\u6682\u65f6\u65e0\u6cd5\u5224\u65ad\u72b6\u6001\uff0c\u7b49\u5f85\u56fa\u5b9a\u65f6\u95f4\u4ee5\u540eBroker\u7aef\u6839\u636e\u56de\u67e5\u89c4\u5219\u5411\u751f\u4ea7\u8005\u8fdb\u884c\u6d88\u606f\u56de\u67e5\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"checkLocalTransaction"),"\u662f\u7531\u4e8e\u4e8c\u6b21\u786e\u8ba4\u6d88\u606f\u6ca1\u6709\u6536\u5230\uff0cBroker\u7aef\u56de\u67e5\u4e8b\u52a1\u72b6\u6001\u7684\u65b9\u6cd5\u3002\u56de\u67e5\u89c4\u5219\uff1a\u672c\u5730\u4e8b\u52a1\u6267\u884c\u5b8c\u6210\u540e\uff0c\u82e5Broker\u7aef\u6536\u5230\u7684\u672c\u5730\u4e8b\u52a1\u8fd4\u56de\u72b6\u6001\u4e3aLocalTransactionState.UNKNOW\uff0c\u6216\u751f\u4ea7\u8005\u5e94\u7528\u9000\u51fa\u5bfc\u81f4\u672c\u5730\u4e8b\u52a1\u672a\u63d0\u4ea4\u4efb\u4f55\u72b6\u6001\u3002\u5219Broker\u7aef\u4f1a\u5411\u6d88\u606f\u751f\u4ea7\u8005\u53d1\u8d77\u4e8b\u52a1\u56de\u67e5\uff0c\u7b2c\u4e00\u6b21\u56de\u67e5\u540e\u4ecd\u672a\u83b7\u53d6\u5230\u4e8b\u52a1\u72b6\u6001\uff0c\u5219\u4e4b\u540e\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u4f1a\u518d\u6b21\u56de\u67e5\u3002"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6b64\u5916\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e8b\u52a1\u6d88\u606f\u7684\u751f\u4ea7\u7ec4\u540d\u79f0 ProducerGroupName\u4e0d\u80fd\u968f\u610f\u8bbe\u7f6e\u3002\u4e8b\u52a1\u6d88\u606f\u6709\u56de\u67e5\u673a\u5236\uff0c\u56de\u67e5\u65f6Broker\u7aef\u5982\u679c\u53d1\u73b0\u539f\u59cb\u751f\u4ea7\u8005\u5df2\u7ecf\u5d29\u6e83\u5d29\u6e83\uff0c\u5219\u4f1a\u8054\u7cfb\u540c\u4e00\u751f\u4ea7\u8005\u7ec4\u7684\u5176\u4ed6\u751f\u4ea7\u8005\u5b9e\u4f8b\u56de\u67e5\u672c\u5730\u4e8b\u52a1\u6267\u884c\u60c5\u51b5\u4ee5Commit\u6216Rollback\u534a\u4e8b\u52a1\u6d88\u606f\u3002"))))}p.isMDXComponent=!0},97887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4e8b\u52a1\u6d88\u606f1-15b51f54e4cb4280459be1df277c288e.png"},84693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4e8b\u52a1\u6d88\u606f2-2673a99678f13a471b8fc0bd4ab3bf3a.png"},58771:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4e8b\u52a1\u6d88\u606f\u793a\u4f8b\u4e00-636d42fb6584de6c51692d0889af5c2d.png"},93488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4e8b\u52a1\u793a\u4f8b\u4e8c-5342e194b20f8e5d990f30edf78c5f98.png"}}]);