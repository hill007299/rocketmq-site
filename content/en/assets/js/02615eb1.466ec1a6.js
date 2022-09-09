"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,p=u["".concat(c,".").concat(h)]||u[h]||m[h]||s;return n?a.createElement(p,o(o({ref:t},d),{},{components:n})):a.createElement(p,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={},o="Transactional Message Sending",i={unversionedId:"\u751f\u4ea7\u8005/09message5",id:"\u751f\u4ea7\u8005/09message5",title:"Transactional Message Sending",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-\u751f\u4ea7\u8005/09message5.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/09message5",permalink:"/en/docs/\u751f\u4ea7\u8005/09message5",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-\u751f\u4ea7\u8005/09message5.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Batch Message Sending",permalink:"/en/docs/\u751f\u4ea7\u8005/08message4"},next:{title:"Core Concept",permalink:"/en/docs/\u6d88\u8d39\u8005/11concept2"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Transactional Message Sending Procedure",id:"transactional-message-sending-procedure",level:2},{value:"Example",id:"example",level:2}],d={toc:l};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transactional-message-sending"},"Transactional Message Sending"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In some scenarios where there is a strong need for data consistency, Apache RocketMQ transactional messages can be used to ensure consistency of upstream and downstream data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f1",src:n(16864).Z,width:"1656",height:"782"})),(0,r.kt)("p",null,"Transactional messages are send in two phases. At first, a half message will be delivered, which refers to a message is successfully sent to the MQ server, but the server did not receive the second acknowledgement of the message from the Producer, then the message will be marked as \u201ctemporarily undeliverable\u201d state."),(0,r.kt)("p",null,"The local transaction will be executed if the message is sent successfully, and a half message status (commit or rollback) will be delivered to the Broker depending on the local transaction results."),(0,r.kt)("p",null,'If the second acknowledgement of a transactional message is lost due to network flashback, Producer restart, etc., the Broker will find the message which is in "half message" state for a long time, and take the initiative to check the transaction status of the message (Commit or Rollback) from the Producer. Therefore, the downstream will receive the message if the local transaction is executed successfully, otherwise it will not. This ultimately ensures the consistency of the upstream and downstream data.'),(0,r.kt)("p",null,"The detailed execute flow of the transactional message is shown in the following diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f2",src:n(35725).Z,width:"1996",height:"544"})),(0,r.kt)("h2",{id:"transactional-message-sending-procedure"},"Transactional Message Sending Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Producer sends the half message to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RocketMQ Broker"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"RocketMQ Broker")," persists the message successfully, it returns an Ack to the Producer confirming that the message was sent successfully and it is a half message.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Producer starts executing the local transaction.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Producer submits a second acknowledgement (Commit or Rollback) to the server based on the result of the local transaction, and the server receives the acknowledgment and processes the logic as follows."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the second acknowledgement result is Commit: the server marks the half message as deliverable and delivers it to the Consumer."),(0,r.kt)("li",{parentName:"ul"},"If the second acknowledgement result is Rollback: the server will rollback the transaction and will not deliver the half message to the Consumer."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the special case of network disconnection or the Producer restarts, if the server does not receive the second acknowledgment result from the Producer, or the second acknowledgment result received by the server is Unknown, the server will initiate a rollback message to a Producer after a fixed time."))),(0,r.kt)("p",null,"The procedure of the transaction status check are as follows."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"After receiving the transaction status check request, the Producer needs to verify the final result of the local transaction of the corresponding message."),(0,r.kt)("li",{parentName:"ol"},"The producer submits the second acknowledgment again based on the final result of the local transaction, and the server side will still processes the half message according to step 4.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{39}","{39}":!0},'public class TransactionProducer {\n    public static void main(String[] args) throws MQClientException, InterruptedException {\n        TransactionListener transactionListener = new TransactionListenerImpl();\n        TransactionMQProducer producer = new TransactionMQProducer("please_rename_unique_group_name");\n        ExecutorService executorService = new ThreadPoolExecutor(2, 5, 100, TimeUnit.SECONDS, new ArrayBlockingQueue<Runnable>(2000), new ThreadFactory() {\n            @Override\n            public Thread newThread(Runnable r) {\n                Thread thread = new Thread(r);\n                thread.setName("client-transaction-msg-check-thread");\n                return thread;\n            }\n        });\n\n        producer.setExecutorService(executorService);\n        producer.setTransactionListener(transactionListener);\n        producer.start();\n\n        String[] tags = new String[] {"TagA", "TagB", "TagC", "TagD", "TagE"};\n        for (int i = 0; i < 10; i++) {\n            try {\n                Message msg =\n                    new Message("TopicTest", tags[i % tags.length], "KEY" + i,\n                        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));\n                SendResult sendResult = producer.sendMessageInTransaction(msg, null);\n                System.out.printf("%s%n", sendResult);\n\n                Thread.sleep(10);\n            } catch (MQClientException | UnsupportedEncodingException e) {\n                e.printStackTrace();\n            }\n        }\n\n        for (int i = 0; i < 100000; i++) {\n            Thread.sleep(1000);\n        }\n        producer.shutdown();\n    }\n\n    static class TransactionListenerImpl implements TransactionListener {\n        private AtomicInteger transactionIndex = new AtomicInteger(0);\n\n        private ConcurrentHashMap<String, Integer> localTrans = new ConcurrentHashMap<>();\n\n        @Override\n        public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {\n            int value = transactionIndex.getAndIncrement();\n            int status = value % 3;\n            localTrans.put(msg.getTransactionId(), status);\n            return LocalTransactionState.UNKNOW;\n        }\n\n        @Override\n        public LocalTransactionState checkLocalTransaction(MessageExt msg) {\n            Integer status = localTrans.get(msg.getTransactionId());\n            if (null != status) {\n                switch (status) {\n                    case 0:\n                        return LocalTransactionState.UNKNOW;\n                    case 1:\n                        return LocalTransactionState.COMMIT_MESSAGE;\n                    case 2:\n                        return LocalTransactionState.ROLLBACK_MESSAGE;\n                    default:\n                        return LocalTransactionState.COMMIT_MESSAGE;\n                }\n            }\n            return LocalTransactionState.COMMIT_MESSAGE;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Transactional messages are no longer sent by DefaultMQProducer, but using ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionMQProducer"),". The above sample sets the thread pool for the transactional message check, if not, one will be generated by default. The most important thing is to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionListener")," interface and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionMQProducer")," into it."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The TransactionListener interface is defined as follows:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{9,18}","{9,18}":!0},"public interface TransactionListener {\n    /**\n     * When send transactional prepare(half) message succeed, this method will be invoked to execute local transaction.\n     *\n     * @param msg Half(prepare) message\n     * @param arg Custom business parameter\n     * @return Transaction state\n     */\n    LocalTransactionState executeLocalTransaction(final Message msg, final Object arg);\n\n    /**\n     * When no response to prepare(half) message. broker will send check message to check the transaction status, and this\n     * method will be invoked to get local transaction status.\n     *\n     * @param msg Check message\n     * @return Transaction state\n     */\n    LocalTransactionState checkLocalTransaction(final MessageExt msg);\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"executeLocalTransaction")," is the method that executes the local transaction after the half message has been sent successfully. After executing the local transaction, the following three states can be returned in this method."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalTransactionState.COMMIT_MESSAGE"),": the transaction is committed, allowing the consumer to consume the message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalTransactionState.ROLLBACK_MESSAGE"),": the transaction is rolled back, and the message will be discarded without being allowed to be consumed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalTransactionState.UNKNOW"),": temporarily unable to determine the state. After waiting for a fixed time, the Broker send the transaction status check message back to the producer.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"checkLocalTransaction")," is a method to check the transaction state on the Broker side because the second acknowledgement is not received. Transaction status check rule: After the execution of the local transaction is completed, if the local transaction returns LocalTransactionState.UNKNOW status to the Broker, or the Producer exits causing no status returned from the Producer. Then the Broker will initiate a transaction status check message to the Producer, and it will check again at regular intervals if the transaction status is still not obtained."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is important to note that the ProducerGroupName of a transactional message cannot be set arbitrarily. Transactional messages have a transaction status check mechanism. If the original Producer is found to have crashed and collapsed, the Broker will contact other Producer instances within the same Producer group to check the local transaction execution and Commit or Rollback half messages."))))}m.isMDXComponent=!0},16864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4e8b\u52a1\u6d88\u606f1-15b51f54e4cb4280459be1df277c288e.png"},35725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4e8b\u52a1\u6d88\u606f2-2673a99678f13a471b8fc0bd4ab3bf3a.png"}}]);