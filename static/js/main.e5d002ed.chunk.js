(this.webpackJsonppractice1=this.webpackJsonppractice1||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),r=n(17),a=n.n(r),j=(n(32),n(33),n(14)),d=n(8),o=n(4),u=n(5),l=n(7),b=n(6),O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("nav",{id:"NavBar",children:[Object(c.jsx)("img",{src:"/capstone-test-dep/T9Logo.png",alt:"T9_logo",id:"logoImg"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)(j.b,{to:"/Home",children:Object(c.jsx)("li",{children:"Home"})}),Object(c.jsx)(j.b,{to:"/Settings",children:Object(c.jsx)("li",{children:"User Settings"})}),Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)("li",{children:"Logout"})})]})]})}}]),n}(s.a.Component),h=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{id:"accountTable",children:[Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Savings"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Checkings"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Certifcate of Deposit"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Rollover IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Roth IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Regular IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("input",{type:"button",value:"Manage Accounts"})]})})}}]),n}(s.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{id:"transactionWrapper",children:[Object(c.jsx)("form",{id:"Tbutton",children:Object(c.jsx)("input",{type:"button",value:"Make a Transaction"})}),Object(c.jsxs)("div",{id:"listOfTransactions",children:[Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})})]})]})}}]),n}(s.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{id:"HPwrapper",children:Object(c.jsxs)("main",{id:"HomePage",children:[Object(c.jsx)(h,{}),Object(c.jsx)(x,{})]})})}}]),n}(s.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{id:"accMngmt",children:[Object(c.jsx)("input",{type:"submit",value:"Create an Account"}),Object(c.jsx)("input",{type:"submit",value:"Delete an Account"})]})})}}]),n}(s.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).editMode=function(){e.setState({isInEditMode:!e.state.isInEditMode})},e.updateValue=function(){e.setState({isInEditMode:!1,fName:e.refs.textInput.value})},e.renderEditView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"First Name:  "}),Object(c.jsx)("input",{class:"userTextInput",type:"text",name:"fName",defaultValue:e.state.value,ref:"textInput"}),Object(c.jsx)("button",{onClick:e.editMode,children:"X"}),Object(c.jsx)("button",{onClick:e.updateValue,children:"Ok"})]})},e.renderDefaultView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"First Name:  "}),Object(c.jsx)("div",{class:"userInfoDisp",children:Object(c.jsx)("p",{onDoubleClick:e.editMode,children:e.state.fName})})]})},e.state={fName:"FNDefault",isInEditMode:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.state.isInEditMode?this.renderEditView():this.renderDefaultView()}}]),n}(s.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).editMode=function(){e.setState({isInEditMode:!e.state.isInEditMode})},e.updateValue=function(){e.setState({isInEditMode:!1,lName:e.refs.textInput.value})},e.renderEditView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Last Name:  "}),Object(c.jsx)("input",{class:"userTextInput",type:"text",name:"lName",defaultValue:e.state.value,ref:"textInput"}),Object(c.jsx)("button",{onClick:e.editMode,children:"X"}),Object(c.jsx)("button",{onClick:e.updateValue,children:"Ok"})]})},e.renderDefaultView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Last Name:  "}),Object(c.jsx)("div",{class:"userInfoDisp",children:Object(c.jsx)("p",{onDoubleClick:e.editMode,children:e.state.lName})})]})},e.state={lName:"LNDefault",isInEditMode:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.state.isInEditMode?this.renderEditView():this.renderDefaultView()}}]),n}(s.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).editMode=function(){i.setState({isInEditMode:!i.state.isInEditMode})},i.updateValue=function(){i.setState({isInEditMode:!1,pass:i.refs.textInput.value})},i.renderEditView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Password:  "}),Object(c.jsx)("input",{class:"userTextInput",type:"text",name:"pass",defaultValue:i.state.value,ref:"textInput"}),Object(c.jsx)("button",{onClick:i.editMode,children:"X"}),Object(c.jsx)("button",{onClick:i.updateValue,children:"Ok"})]})},i.renderDefaultView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Password:"}),Object(c.jsx)("div",{class:"userInfoDisp",children:Object(c.jsx)("p",{onDoubleClick:i.editMode,children:i.state.pass})})]})},i.state={pass:"PassDefault",isInEditMode:!1},i}return Object(u.a)(n,[{key:"render",value:function(){return this.state.isInEditMode?this.renderEditView():this.renderDefaultView()}}]),n}(s.a.Component),I=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"User Information "}),Object(c.jsx)("p",{children:"Double click to edit"}),Object(c.jsx)(v,{}),Object(c.jsx)(m,{}),Object(c.jsx)(g,{})]})}}]),n}(s.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{id:"SettingsPage",children:Object(c.jsxs)("main",{id:"SettingsPageMain",children:[Object(c.jsx)(I,{}),Object(c.jsx)(f,{})]})})}}]),n}(s.a.Component),k=n(16),C=n.n(k),w=n(22),M=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"signInForm",children:[Object(c.jsx)("input",{type:"text",placeholder:"Username"}),Object(c.jsx)("input",{type:"text",placeholder:"Password"}),Object(c.jsx)("input",{type:"button",value:"Sign Up"})]})}}]),n}(s.a.Component),D=n(3),T=new function e(){Object(o.a)(this,e),Object(D.h)(this,{loading:!0,isLoggedIn:!1,usename:""})},E=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"lisb",children:Object(c.jsx)("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}})})}}]),n}(s.a.Component),N=n(26),V=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidCatch",value:function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Contest-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.sucess?(T.loading=!1,T.isLoggedIn=!0,T.username=n.username):(T.loading=!1,T.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),T.loading=!1,T.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Contest-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.sucess&&(T.isLoggedIn=!1,T.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return T.loading?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container",children:"loading..."})}):T.isLoggedIn?Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container",children:["welcome ",T.username,Object(c.jsx)(E,{text:"LOG OUT",disabled:!1,onClick:function(){return e.doLogout()}})]})}):Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(E,{text:"LOG OUT",disabled:!1,onClick:function(){return e.doLogout()}}),Object(c.jsx)(M,{})]})})}}]),n}(s.a.Component),L=Object(N.a)(V);var A=function(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/",exact:!0,component:L}),Object(c.jsx)(d.a,{path:"/Home",component:p}),Object(c.jsx)(d.a,{path:"/Settings",component:y})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),S()}},[[44,1,2]]]);
//# sourceMappingURL=main.e5d002ed.chunk.js.map