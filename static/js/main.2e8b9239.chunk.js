(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{20:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(7),s=a.n(c),r=(a(20),a(3)),o=(a(27),a(28),a(2)),i=a.n(o),u=a(5),j=(a(30),a(35)),l=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/ArtemKa2208/Reenbit/chats");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m="LOAD_CHATS",d="LOAD_MESSAGES",h="SET_SEARCH",p="SET_SELECTED_CHAT_ID",b=function(e){return{type:d,payload:e}},f=function(e){return e.chats},O=function(e){return e.selectedChatId},v=function(e){return e.messages},x=function(e){return e.search},_=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/ArtemKa2208/Reenbit/messages",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/ArtemKa2208/Reenbit/messages");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.chucknorris.io/jokes/random");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=a(1),w=function(){var e=Object(r.b)(),t=Object(r.c)(f),a=Object(r.c)(v),c=Object(r.c)(x);Object(n.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return a=t.sent,t.next=5,g();case 5:n=t.sent,e(b(n)),e({type:m,payload:a});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var s=function(t){e({type:p,payload:t})},o=function(e,t){var n=a.filter((function(t){return t.chatId===e})),c=n.length;if("message"===t)return n.length?n[c-1].body||"":"Say hello";if(!n.length)return"";var s=new Date(n[c-1].date);return Object(j.a)(s,"MMM d, yyyy")},d=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(N.jsxs)("div",{className:"chats",children:[Object(N.jsx)("p",{className:"chats__title",children:"Chats"}),d.map((function(e){return Object(N.jsxs)("div",{className:"chats__chat chat",role:"button","aria-hidden":"true",onClick:function(){return s(e.id)},children:[Object(N.jsx)("img",{src:e.photo,alt:"avatar",className:"chat__img"}),Object(N.jsxs)("div",{className:"chat__info",children:[Object(N.jsxs)("div",{className:"chat__date-name",children:[Object(N.jsx)("p",{children:e.name}),Object(N.jsx)("p",{className:"chat__date",children:o(e.id,"date")})]}),Object(N.jsx)("p",{className:"chat__message",children:o(e.id,"message")})]})]},e.id)}))]})},k=a(9),C=(a(32),function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],c=t[1],s=Object(r.b)();return Object(N.jsxs)("div",{className:"search",children:[Object(N.jsx)("img",{src:"./images/koala.jpg",alt:"avatar",className:"search__avatar"}),Object(N.jsx)("input",{type:"text",className:"search__input",placeholder:"Search or start new chat",onChange:function(e){var t;c(e.target.value),s((t=e.target.value,{type:h,payload:t}))},value:a})]})}),S=(a(33),function(e){var t=e.message;return Object(N.jsx)("div",{className:"message-from-me",children:Object(N.jsxs)("div",{className:"message-from-me__info",children:[Object(N.jsx)("p",{className:"message-from-me__text",children:t.body}),Object(N.jsx)("p",{className:"message-from-me__date",children:"".concat(t.date,", ").concat(t.time)})]})})}),D=function(e){var t=e.message,a=e.photo;return Object(N.jsxs)("div",{className:"message-to-me",children:[Object(N.jsxs)("div",{className:"message-to-me__info",children:[Object(N.jsx)("img",{src:a,alt:"avatar",className:"message-to-me__avatar"}),Object(N.jsx)("p",{className:"message-to-me__text",children:t.body})]}),Object(N.jsx)("p",{className:"message-to-me__date",children:"".concat(t.date,", ").concat(t.time)})]})},E=function(){var e=Object(r.b)(),t=Object(r.c)(O),a=Object(r.c)(f),c=Object(r.c)(v),s=Object(n.useState)(""),o=Object(k.a)(s,2),l=o[0],m=o[1],d=Object(n.useRef)(null),h=a.find((function(e){return e.id===t})),p=c.filter((function(e){return e.chatId===t})),x=function(){var a=Object(u.a)(i.a.mark((function a(){var n,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={body:l,date:Object(j.a)(new Date,"M/d/yy"),time:Object(j.a)(new Date,"h:mm aa"),fullDate:+new Date,direction:"from_me",chatId:t},a.next=3,_(n);case 3:return m(""),a.next=6,g();case 6:c=a.sent,e(b(c)),setTimeout(Object(u.a)(i.a.mark((function a(){var n,c,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y();case 2:return n=a.sent,c={body:n.value,date:Object(j.a)(new Date,"M/d/yy"),time:Object(j.a)(new Date,"h:mm aa"),fullDate:+new Date,direction:"to_me",chatId:t},a.next=6,_(c);case 6:return a.next=8,g();case 8:s=a.sent,e(b(s));case 10:case"end":return a.stop()}}),a)}))),1e4);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e,t;d&&(null===(e=d.current)||void 0===e||e.scrollTo(0,null===(t=d.current)||void 0===t?void 0:t.scrollHeight))})),Object(N.jsxs)("div",{className:"messages",children:[Object(N.jsxs)("div",{className:"messages__header",children:[Object(N.jsx)("img",{src:null===h||void 0===h?void 0:h.photo,alt:"avatar",className:"messages__header-avatar"}),Object(N.jsx)("p",{className:"messages__header-name",children:null===h||void 0===h?void 0:h.name})]}),Object(N.jsx)("div",{className:"messages__content",ref:d,children:p.map((function(e){return"from_me"===e.direction?Object(N.jsx)(S,{message:e}):Object(N.jsx)(D,{message:e,photo:null===h||void 0===h?void 0:h.photo})}))}),Object(N.jsx)("div",{className:"messages__footer",children:Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"messages__footer-form",action:"",children:[Object(N.jsx)("input",{className:"messages__footer-input",type:"text",placeholder:"Type your message",value:l,onChange:function(e){m(e.target.value)}}),Object(N.jsx)("button",{className:"messages__footer-button",type:"button",onClick:x})]})})]})},T=function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsxs)("div",{className:"app__sidebar",children:[Object(N.jsx)(C,{}),Object(N.jsx)(w,{})]}),Object(N.jsx)(E,{})]})},A=a(12),I=a(4),M=a(14),L={chats:[],messages:[],selectedChatId:1,search:""},R=Object(M.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(I.a)(Object(I.a)({},e),{},{chats:Object(A.a)(t.payload)});case p:return Object(I.a)(Object(I.a)({},e),{},{selectedChatId:t.payload});case d:return Object(I.a)(Object(I.a)({},e),{},{messages:Object(A.a)(t.payload)});case h:return Object(I.a)(Object(I.a)({},e),{},{search:t.payload});default:return e}})),H=function(){return Object(N.jsx)(r.a,{store:R,children:Object(N.jsx)(T,{})})};s.a.render(Object(N.jsx)(H,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2e8b9239.chunk.js.map