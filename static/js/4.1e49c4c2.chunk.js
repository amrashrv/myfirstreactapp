(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[4],{300:function(e,s,t){"use strict";t.d(s,"a",(function(){return b}));var a=t(5),n=t(34),i=t(35),c=t(38),o=t(37),r=t(0),u=t.n(r),d=t(17),j=t(10),g=t(1),l=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var s=function(s){Object(c.a)(r,s);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(a.a)({},this.props)):Object(g.jsx)(j.a,{to:"/Login"})}}]),r}(u.a.Component);return Object(d.b)(l)(s)}},301:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3gkBh",dialogsItems:"Dialogs_dialogsItems__3tQCj",active:"Dialogs_active__3p29K",dialogue:"Dialogs_dialogue__1nXcS",messages:"Dialogs_messages__3U2tL"}},302:function(e,s,t){e.exports={message:"Message_message__3PsDg"}},309:function(e,s,t){"use strict";t.r(s);var a=t(17),n=t(9),i=t(300),c=t(126),o=(t(0),t(10)),r=t(89),u=t(127),d=t(74),j=t(33),g=t(18),l=t(301),b=t.n(l),m=t(1),O=function(e){return Object(m.jsx)("div",{className:b.a.dialogue+" "+b.a.active,children:Object(m.jsx)(g.b,{to:"/dialogue/"+e.id,children:e.name})})},f=t(302),h=t.n(f),p=function(e){return Object(m.jsx)("div",{className:h.a.message,children:e.message})},x=Object(d.a)(50),_=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)(r.a,{component:j.b,name:"newMessageBody",placeholder:"Enter your message",validate:[d.b,x]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Send"})})]})})),v=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(m.jsx)(O,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return Object(m.jsx)(p,{message:e.message},e.id)}));return e.isAuth?Object(m.jsxs)("div",{className:b.a.dialogs,children:[Object(m.jsx)("div",{className:b.a.dialogsItems,children:t}),Object(m.jsxs)("div",{className:b.a.messages,children:[Object(m.jsx)("div",{children:a}),Object(m.jsx)(_,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]}):Object(m.jsx)(o.a,{to:"/Login"})};s.default=Object(n.d)(Object(a.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(c.b)(s))}}})),i.a)(v)}}]);
//# sourceMappingURL=4.1e49c4c2.chunk.js.map