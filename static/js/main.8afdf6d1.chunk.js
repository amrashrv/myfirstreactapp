/*! For license information please see main.8afdf6d1.chunk.js.LICENSE.txt */
(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(39),c=n(5),i="SEND-MESSAGE",a={dialogs:[{id:1,name:"Andrey"},{id:2,name:"Olga"},{id:3,name:"Korney"},{id:4,name:"Ksenia"},{id:5,name:"Dima"}],messages:[{id:1,message:"Hey how are you"},{id:2,message:"Im good"},{id:3,message:"Cool"}]},o=function(e){return{type:i,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},132:function(e,t,n){e.exports={preloader:"preloader_preloader__sUZN3"}},138:function(e,t,n){e.exports={photo:"Users_photo__2rVGZ"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(133),c=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"71a41bf9-b907-497d-96c0-effe78a7b2c0"}}),i={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))}},a={getHeader:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return c.delete("auth/login")}},o={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status",{status:e})}}},15:function(e,t,n){e.exports={nav:"Navbar_nav__3Tfdw",item:"Navbar_item__1BcKp",active:"Navbar_active__3y6S9"}},174:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(64),a=n.n(i),o=n(34),s=n(35),u=n(38),l=n(37),g=n(17),h=n(10),d=n(18),A=n(9),O=(n(174),n(40)),j=n(5),b=n(11),p=n.n(b),E=n(19),f=n(44),C=n(14),I="samurai-network/auth/SET-USER-DATA",Q={userId:null,email:null,login:null,isAuth:!1},w=function(e,t,n,r){return{type:I,payload:{userId:e,email:t,login:n,isAuth:r}}},B=function(){return function(){var e=Object(E.a)(p.a.mark((function e(t){var n,r,c,i,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.getHeader();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,i=r.login,a=r.email,t(w(c,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},x=n(91),D=n.n(x),v=n(1),M=function(e){return Object(v.jsxs)("header",{className:D.a.header,children:[Object(v.jsx)("img",{title:"logo",src:"data:image/png;base64,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",alt:"logo"}),Object(v.jsx)("div",{className:D.a.loginBlock,children:e.isAuth?Object(v.jsxs)("div",{children:[" hello ",e.login," - ",Object(v.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(v.jsx)(d.b,{to:"/login/",children:"Login"})})]})},S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsx)(M,Object(j.a)({},this.props))}}]),n}(c.a.Component),R=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(E.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(B());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(S),H=n(51),N=n.n(H),U=n(127),P=n(74),y=n(33),F=Object(U.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(v.jsxs)("form",{onSubmit:t,children:[Object(y.c)("email","email",y.a,[P.b]),Object(y.c)("password","password",y.a,[P.b],{type:"password"}),Object(y.c)(null,"rememberMe",y.a,[],{type:"checkbox"},"remember me"),n&&Object(v.jsx)("div",{className:N.a.formSummaryError,children:n}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:"Login"})})]})})),Y=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(E.a)(p.a.mark((function r(c){var i,a;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(i=r.sent).data.resultCode?c(B()):(a=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(f.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(v.jsx)(h.a,{to:"/Profile"}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsx)(F,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),G=function(e){return Object(v.jsx)("div",{className:"",children:"Music"})},K=n(15),k=n.n(K),q=function(){return Object(v.jsxs)("nav",{className:k.a.nav,children:[Object(v.jsx)("div",{className:k.a.item,children:Object(v.jsx)(d.b,{to:"/Profile",activeClassName:k.a.active,children:"Profile"})}),Object(v.jsx)("div",{className:k.a.item,children:Object(v.jsx)(d.b,{to:"/Dialogs",activeClassName:k.a.active,children:"Messages"})}),Object(v.jsx)("div",{className:k.a.item,children:Object(v.jsx)(d.b,{to:"/News",activeClassName:k.a.active,children:"News"})}),Object(v.jsx)("div",{className:k.a.item,children:Object(v.jsx)(d.b,{to:"/Music",activeClassName:k.a.active,children:"Music"})}),Object(v.jsx)("div",{className:k.a.item,children:Object(v.jsx)(d.b,{to:"/Settings",activeClassName:k.a.active,children:"Settings"})}),Object(v.jsx)("div",{className:k.a.item,children:Object(v.jsx)(d.b,{to:"/users",activeClassName:k.a.active,children:"Users"})})]})},J=function(e){return Object(v.jsx)("div",{className:"",children:"Latest News"})},L=(n(297),function(e){return Object(v.jsx)("div",{className:"",children:"Settings"})}),T=n(39),z=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},X="FOLLOW",Z="UNFOLLOW",W="SET-USERS",V="SET-CURRENT-PAGE",_="SET-TOTAL-USERS-COUNT",$="TOGGLE-IS-FETCHING",ee="TOGGLE-FOLLOWING-IN-PROGRESS",te={users:[],pageSize:10,totalUsersCount:0,currentPage:2,isFetching:!1,followingInProgress:[]},ne=function(e){return{type:X,userId:e}},re=function(e){return{type:Z,userId:e}},ce=function(e){return{type:V,currentPage:e}},ie=function(e){return{type:$,isFetching:e}},ae=function(e,t){return{type:ee,isFetching:e,userId:t}},oe=function(){var e=Object(E.a)(p.a.mark((function e(t,n,r,c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ae(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(ae(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(j.a)(Object(j.a)({},e),{},{users:z(e.users,t.userId,"id",{followed:!0})});case Z:return Object(j.a)(Object(j.a)({},e),{},{users:z(e.users,t.userId,"id",{followed:!1})});case W:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case V:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case _:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case $:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case ee:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(T.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ue=n(136),le=Object(ue.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ge=function(e){return e.usersPage.pageSize},he=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},je=n(55),be=n(66),pe=n(128),Ee=n(70),fe=n.n(Ee),Ce=n(137),Ie=n.n(Ce),Qe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,i=e.onPageChanged,a=e.portionSize,o=void 0===a?20:a,s=Math.ceil(t/n),u=[],l=1;l<=s;l++)u.push(l);var g=Math.ceil(s/o),h=Object(r.useState)(1),d=Object(pe.a)(h,2),A=d[0],O=d[1],j=(A-1)*o+1,b=A+o;return Object(v.jsxs)("div",{className:fe.a.paginator,children:[A>1&&Object(v.jsx)("button",{onClick:function(){O(A-1)},children:"Prev"}),u.filter((function(e){return e>=j&&e<=b})).map((function(e){return Object(v.jsx)("span",{className:Ie()(Object(be.a)({},fe.a.selectedPage,c===e),fe.a.pageNumber),onClick:function(t){i(e)},children:e},e)})),g>A&&Object(v.jsx)("button",{onClick:function(){O(A+1)},children:"Next"})]})},we=n(138),Be=n.n(we),me=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{className:Be.a.photo,children:Object(v.jsx)(d.b,{to:"/Profile/"+t.id,children:Object(v.jsx)("img",{alt:"userphoto",src:null!==t.photos.small?t.photos.small:"data:image/png;base64,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"})})}),Object(v.jsx)("div",{children:t.followed?Object(v.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(v.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(v.jsxs)("span",{children:[Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{children:t.name}),Object(v.jsx)("div",{children:t.status})]}),Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{children:"user.location.country"}),Object(v.jsx)("div",{children:"user.location.city"})]})]})]})})},xe=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,c=e.onPageChanged,i=e.users,a=Object(je.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(v.jsxs)("div",{children:[Object(v.jsx)(Qe,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:r}),Object(v.jsx)("div",{children:i.map((function(e){return Object(v.jsx)(me,{user:e,followingInProgress:a.followingInProgress,follow:a.follow,unfollow:a.unfollow},e.id)}))})]})},De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[this.props.isFetching?Object(v.jsx)(O.a,{}):null,Object(v.jsx)(xe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),ve=Object(A.d)(Object(g.b)((function(e){return{users:le(e),pageSize:ge(e),totalUsersCount:he(e),currentPage:de(e),isFetching:Ae(e),followingInProgress:Oe(e)}}),{follow:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:oe(n,e,C.c.follow.bind(C.c),ne);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:oe(n,e,C.c.unfollow.bind(C.c),re);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ce,toggleFollowingProgress:ae,getUsers:function(e,t){return function(){var n=Object(E.a)(p.a.mark((function n(r){var c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ie(!0)),r(ce(e)),n.next=4,C.c.requestUsers(e,t);case 4:c=n.sent,r(ie(!1)),r((a=c.items,{type:W,users:a})),r((i=c.totalCount,{type:_,count:i}));case 8:case"end":return n.stop()}var i,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(De),Me=function(e){return function(t){return Object(v.jsx)(r.Suspense,{fallback:Object(v.jsx)(O.a,{}),children:Object(v.jsx)(e,Object(j.a)({},t))})}},Se="INITIALIZED-SUCCESS",Re={initialized:!1},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return{initialized:!0};default:return e}},Ne=n(126),Ue=n(96),Pe={},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;return e},Fe=n(139),Ye=n(129),Ge=Object(A.c)({dialogsPage:Ne.a,profilePage:Ue.b,sidebar:ye,usersPage:se,auth:m,form:Ye.a,app:He}),Ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,ke=Object(A.e)(Ge,Ke(Object(A.a)(Fe.a)));window.__store__=ke;var qe=ke,Je=c.a.lazy((function(){return n.e(4).then(n.bind(null,309))})),Le=c.a.lazy((function(){return n.e(3).then(n.bind(null,308))})),Te=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(v.jsxs)("div",{className:"app_wrapper",children:[Object(v.jsx)(R,{}),Object(v.jsx)(q,{}),Object(v.jsxs)("div",{className:"app-wrapper-content",children:[Object(v.jsx)("h1",{children:" "}),Object(v.jsxs)("div",{className:"backgroundBlock",children:[Object(v.jsx)(h.b,{path:"/Dialogs",render:Me(Je)}),Object(v.jsx)(h.b,{path:"/Profile/:userId?",render:Me(Le)}),Object(v.jsx)(h.b,{path:"/Users",render:function(){return Object(v.jsx)(ve,{})}}),Object(v.jsx)(h.b,{path:"/Login",render:function(){return Object(v.jsx)(Y,{})}}),Object(v.jsx)(h.b,{path:"/News",component:J}),Object(v.jsx)(h.b,{path:"/Music",component:G}),Object(v.jsx)(h.b,{path:"/Settings",component:L})]})]})]}):Object(v.jsx)(O.a,{})}}]),n}(r.Component),ze=Object(A.d)(h.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(B());Promise.all([t]).then((function(){e({type:Se})}))}}}))(Te),Xe=function(e){return Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(d.a,{children:Object(v.jsx)(g.a,{store:qe,children:Object(v.jsx)(ze,{})})})})},Ze=(n(298),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,307)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))});a.a.render(Object(v.jsx)(Xe,{}),document.getElementById("root")),Ze()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h}));var r=n(5),c=n(55),i=n(51),a=n.n(i),o=(n(0),n(89)),s=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=e.children,i=n&&r;return Object(s.jsxs)("div",{className:a.a.formControl+" "+(i?a.a.error:""),children:[c,i&&Object(s.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},g=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},h=function(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.a,Object(r.a)({placeholder:e,name:t,component:n,validate:c},i))," ",a]})}},40:function(e,t,n){"use strict";var r=n(132),c=n.n(r),i=n.p+"static/media/preloader.e90508e4.svg",a=n(1);t.a=function(e){return Object(a.jsx)("img",{className:c.a.preloader,alt:"preloader",src:i})}},51:function(e,t,n){e.exports={formControl:"formsControls_formControl__33KFu",error:"formsControls_error__1fP_d",formSummaryError:"formsControls_formSummaryError__2stah"}},70:function(e,t,n){e.exports={pageNumber:"paginator_pageNumber__3_IyQ",selectedPage:"paginator_selectedPage__1i6Mu",paginator:"paginator_paginator__2gqzy"}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"max length should be less than ".concat(e," simbols")}}},91:function(e,t,n){e.exports={header:"Header_header__3kAfP",loginBlock:"Header_loginBlock__1quyg"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(11),c=n.n(r),i=n(19),a=n(39),o=n(5),s=n(14),u="Add-post",l="SET-USER-PROFILE",g="SET-STATUS",h="DELETE-POST",d={posts:[{id:1,message:"First Post",likesCount:5},{id:2,message:"Second Post",likesCount:105},{id:3,message:"Third post",likesCount:26}],profile:null,status:"",isFetching:!1},A=function(e){return{type:u,newPostBody:e}},O=function(e){return{type:g,status:e}},j=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:r=t.sent,n((c=r.data,{type:l,profile:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:4,message:t.newPostBody,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n]),newPostText:""});case h:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case g:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}}}},[[299,1,2]]]);
//# sourceMappingURL=main.8afdf6d1.chunk.js.map