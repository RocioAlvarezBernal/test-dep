(this.webpackJsonppractice1=this.webpackJsonppractice1||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),r=n.n(i),s=n(20),j=n.n(s),a=(n(27),n(28),n(13)),d=n(7),o=n(3),u=n(4),l=n(6),b=n(5),O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("nav",{id:"NavBar",children:[Object(c.jsx)("img",{src:"https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png",alt:"logo",id:"logoImg"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)(a.b,{to:"/Home",children:Object(c.jsx)("li",{children:"Home"})}),Object(c.jsx)(a.b,{to:"/Settings",children:Object(c.jsx)("li",{children:"User Settings"})}),Object(c.jsx)(a.b,{to:"/",children:Object(c.jsx)("li",{children:"Logout"})})]})]})}}]),n}(r.a.Component),h=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{id:"accountTable",children:[Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Savings"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Checkings"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Certifcate of Deposit"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Rollover IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Roth IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Regular IRA"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:"AccountId"})}),Object(c.jsx)("input",{type:"button",value:"Manage Accounts"})]})})}}]),n}(r.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{id:"transactionWrapper",children:[Object(c.jsx)("form",{id:"Tbutton",children:Object(c.jsx)("input",{type:"button",value:"Make a Transaction"})}),Object(c.jsxs)("div",{id:"listOfTransactions",children:[Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})}),Object(c.jsx)("div",{class:"transaction",children:Object(c.jsxs)("p",{children:["Deposit/Withdraw",Object(c.jsx)("br",{}),"Transaction Type - $0.00",Object(c.jsx)("br",{}),"0/0/0 00:00:00"]})})]})]})}}]),n}(r.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{id:"HPwrapper",children:Object(c.jsxs)("main",{id:"HomePage",children:[Object(c.jsx)(h,{}),Object(c.jsx)(x,{})]})})}}]),n}(r.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{id:"accMngmt",children:[Object(c.jsx)("input",{type:"submit",value:"Create an Account"}),Object(c.jsx)("input",{type:"submit",value:"Delete an Account"})]})})}}]),n}(r.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).editMode=function(){e.setState({isInEditMode:!e.state.isInEditMode})},e.updateValue=function(){e.setState({isInEditMode:!1,fName:e.refs.textInput.value})},e.renderEditView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"First Name:  "}),Object(c.jsx)("input",{class:"userTextInput",type:"text",name:"fName",defaultValue:e.state.value,ref:"textInput"}),Object(c.jsx)("button",{onClick:e.editMode,children:"X"}),Object(c.jsx)("button",{onClick:e.updateValue,children:"Ok"})]})},e.renderDefaultView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"First Name:  "}),Object(c.jsx)("div",{class:"userInfoDisp",children:Object(c.jsx)("p",{onDoubleClick:e.editMode,children:e.state.fName})})]})},e.state={fName:"FNDefault",isInEditMode:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.state.isInEditMode?this.renderEditView():this.renderDefaultView()}}]),n}(r.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).editMode=function(){e.setState({isInEditMode:!e.state.isInEditMode})},e.updateValue=function(){e.setState({isInEditMode:!1,lName:e.refs.textInput.value})},e.renderEditView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Last Name:  "}),Object(c.jsx)("input",{class:"userTextInput",type:"text",name:"lName",defaultValue:e.state.value,ref:"textInput"}),Object(c.jsx)("button",{onClick:e.editMode,children:"X"}),Object(c.jsx)("button",{onClick:e.updateValue,children:"Ok"})]})},e.renderDefaultView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Last Name:  "}),Object(c.jsx)("div",{class:"userInfoDisp",children:Object(c.jsx)("p",{onDoubleClick:e.editMode,children:e.state.lName})})]})},e.state={lName:"LNDefault",isInEditMode:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.state.isInEditMode?this.renderEditView():this.renderDefaultView()}}]),n}(r.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).editMode=function(){e.setState({isInEditMode:!e.state.isInEditMode})},e.updateValue=function(){e.setState({isInEditMode:!1,pass:e.refs.textInput.value})},e.renderEditView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Password:  "}),Object(c.jsx)("input",{class:"userTextInput",type:"text",name:"pass",defaultValue:e.state.value,ref:"textInput"}),Object(c.jsx)("button",{onClick:e.editMode,children:"X"}),Object(c.jsx)("button",{onClick:e.updateValue,children:"Ok"})]})},e.renderDefaultView=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Password:"}),Object(c.jsx)("div",{class:"userInfoDisp",children:Object(c.jsx)("p",{onDoubleClick:e.editMode,children:e.state.pass})})]})},e.state={pass:"PassDefault",isInEditMode:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.state.isInEditMode?this.renderEditView():this.renderDefaultView()}}]),n}(r.a.Component),I=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"User Information "}),Object(c.jsx)("p",{children:"Double click to edit"}),Object(c.jsx)(v,{}),Object(c.jsx)(m,{}),Object(c.jsx)(y,{})]})}}]),n}(r.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{id:"SettingsPage",children:Object(c.jsxs)("main",{id:"SettingsPageMain",children:[Object(c.jsx)(I,{}),Object(c.jsx)(f,{})]})})}}]),n}(r.a.Component),C=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("form",{class:"signInForm",children:[Object(c.jsx)("input",{type:"text",placeholder:"First Name"}),Object(c.jsx)("input",{type:"text",placeholder:"Last Name"}),Object(c.jsx)("input",{type:"text",placeholder:"Password"}),Object(c.jsx)("input",{type:"button",value:"Sign Up"})]})}}]),n}(r.a.Component),k=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("form",{class:"signInForm",children:[Object(c.jsx)("input",{type:"text",placeholder:"Username"}),Object(c.jsx)("input",{type:"text",placeholder:"Password"}),Object(c.jsx)("input",{type:"button",value:"Sign Up"})]})}}]),n}(r.a.Component),M=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("main",{id:"LandingPage",children:[Object(c.jsx)(C,{}),Object(c.jsx)(k,{})]})}}]),n}(r.a.Component),D=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{for:"Account",children:"Select the type of account"}),Object(c.jsxs)("select",{id:"acct",name:"acct",children:[Object(c.jsx)("option",{value:"Savings",children:"Savings"}),Object(c.jsx)("option",{value:"Checkings",children:"Checkings"}),Object(c.jsx)("option",{value:"CD",children:"CD"}),Object(c.jsx)("option",{value:"IRA",children:"IRA"})]}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text"}),Object(c.jsx)("button",{children:"Submit"})]})]})}}]),n}(r.a.Component);r.a.Component;var w=function(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/",exact:!0,component:M}),Object(c.jsx)(d.a,{path:"/Home",component:p}),Object(c.jsx)(d.a,{path:"/Settings",component:g})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};j.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),E()}},[[39,1,2]]]);
//# sourceMappingURL=main.877ffc5b.chunk.js.map