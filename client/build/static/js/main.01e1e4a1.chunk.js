(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(e,t,a){e.exports=a.p+"static/media/people.b5ecbc2c.jpg"},128:function(e,t,a){e.exports=a.p+"static/media/navy-logo.bcd8140a.png"},133:function(e,t,a){e.exports=a(204)},175:function(e,t){},191:function(e,t){},193:function(e,t){},201:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=a(20),i=a(13),s=a(7),m=Object(n.createContext)({}),u=function(e){var t=e.children,a=Object(n.useState)(["This is for those who feel they don't need conversation starters and want to talk about anything and everything!","If gaming is your kind of conversation starter, these SmallTalk's might be a good fit!","What's new in the beauty realm? You can start with tried and trues as well as any other trends here!","What's more entertaining than watching a game? Talking about it with others, of course! You can start with all things sports here!","What's not to talk about when it comes to food? Talk about your favorite spots or dishes you can't wait to try!","Whether you're into physical books or ebooks, carryout conversations based around your favorite reads!"]),l=Object(s.a)(a,2),o=l[0],c=(l[1],{categoryDescriptions:o});return r.a.createElement(m.Provider,{value:c},t)},d=a(15),g=a.n(d),p=a(22),E=a(132),f=a(240),h=a(241),v=a(242),b=a(243),y=a(217),j=function(e){var t=e.event,a=Object(n.useState)(null),l=Object(s.a)(a,2),o=l[0],c=l[1],i={userId:t.userId,eventId:t.id};return r.a.createElement(E.a,{responsive:"true",direction:"column",align:"center",alignSelf:"center",background:"#D3EBF9",border:{color:"#17539D",size:"medium"},round:"xsmall",header:"Your Events",pad:"medium",margin:{top:"10%",left:"4.5%"},width:"90%"},r.a.createElement(f.a,{fill:"true",responsive:"true",rows:["xxsmall","xsmall","xxsmall","auto"],columns:["auto","auto","auto"],areas:[{name:"header",start:[0,0],end:[1,1]},{name:"time",start:[0,1],end:[2,1]},{name:"desc",start:[0,2],end:[2,2]},{name:"buttons",start:[0,3],end:[2,3]}]},r.a.createElement(E.a,{responsive:"true",gridArea:"header"},r.a.createElement(h.a,{alignSelf:"start",textAlign:"start",level:"2",responsive:"true",margin:{top:"small"}},t.title)),r.a.createElement(E.a,{responsive:"true",gridArea:"time"},r.a.createElement(v.a,{size:"large",textAlign:"center",margin:{vertical:"auto"}},new Date(t.date).toLocaleString())),r.a.createElement(E.a,{responsive:"true",gridArea:"desc"},r.a.createElement(v.a,{size:"medium",margin:{vertical:"auto"},textAlign:"center"},t.description)),r.a.createElement(E.a,{gridArea:"buttons",margin:{top:"large"},alignContent:"center",align:"center",alignSelf:"center",flex:"true",direction:"row",justify:"evenly"},r.a.createElement(E.a,{responsive:"true"},r.a.createElement(b.a,{responsive:"true",label:"RSVP",icon:o,primary:!0,onClick:function(){fetch("/api/rsvp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(){c(r.a.createElement(y.a,null))})).catch((function(e){console.log(e)}))},color:"#6AB8E0"})))))},w=function(){var e=Object(i.f)().categoryId,t=Object(n.useContext)(m).categoryDescriptions,a=Object(n.useState)([]),l=Object(s.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),b=d[0],y=d[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(g.a.mark((function t(){var a,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/categories/".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c(n),console.log(n),y(n[0].name);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r.a.createElement(E.a,{responsive:"true"},r.a.createElement(E.a,{responsive:"true"},r.a.createElement(h.a,{color:"#444444",className:"categoryHeader","text-align":"center"},b),"General"===b?r.a.createElement(v.a,{size:"large",textAlign:"center"},t[0]):"Gaming"===b?r.a.createElement(v.a,{size:"large",textAlign:"center"},t[1]):"Beauty"===b?r.a.createElement(v.a,{size:"large",textAlign:"center"},t[2]):"Sports"===b?r.a.createElement(v.a,{size:"large",textAlign:"center"},t[3]):"Food"===b?r.a.createElement(v.a,{size:"large",textAlign:"center"},t[4]):r.a.createElement(v.a,{size:"large",textAlign:"center"},t[5])),r.a.createElement(E.a,{responsive:"true",direction:"column"},r.a.createElement(f.a,{rows:"medium",columns:["auto","1/2"],gap:"small",responsive:"true",align:"center"},o&&o.map((function(e){return r.a.createElement(j,{event:e})})))))},O=a(54),x=function(e){var t;return r.a.createElement("div",null,r.a.createElement(E.a,{direction:"row",justify:"center",align:"center",pad:"large"},r.a.createElement(E.a,(t={border:!0,pad:"xlarge",align:"center",alignContent:"center",width:"medium",round:"small"},Object(O.a)(t,"border",{color:"#17539D",size:"medium"}),Object(O.a)(t,"hoverIndicator",{color:"#D3EBF9"}),Object(O.a)(t,"onClick",(function(){return window.location.replace("/categories/".concat(e.category.id))})),t),e.icon,r.a.createElement(v.a,{margin:{top:"small"},size:"xlarge",textAlign:"end"},e.category.name))))},S=a(220),k=a(221),C=a(222),A=a(223),N=a(224),T=a(225),z=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/categories");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=[r.a.createElement(S.a,{size:"large"}),r.a.createElement(k.a,{size:"large"}),r.a.createElement(C.a,{size:"large"}),r.a.createElement(A.a,{size:"large"}),r.a.createElement(N.a,{size:"large"}),r.a.createElement(T.a,{size:"large"})];return r.a.createElement(E.a,null,r.a.createElement(h.a,{margin:{left:"8%",bottom:"medium",top:"medium"},textAlign:"center",responsive:"true",color:"#444444"},"Categories"),r.a.createElement(v.a,{size:"large",textAlign:"center"},"Select a category that you would like to focus your conversation starter on!"),r.a.createElement(f.a,{justify:"center",alignContent:"center",responsive:"true",rows:"medium",margin:{bottom:"medium"},columns:["auto","1/2"]},a&&a.map((function(e,t){return r.a.createElement(x,{icon:o[t],key:e.id,category:e,id:e.id})}))))},I=a(235),L=a(237),F=a(236),D=a(244),B=function(){return r.a.createElement("div",{className:"loginForm"},r.a.createElement(h.a,{color:"#304258"},"Register"),r.a.createElement(I.a,{action:"/api/register",method:"post"},r.a.createElement(L.a,{required:!0,className:"loginField",label:"Username"},r.a.createElement(F.a,{type:"text",placeholder:"Enter your username!",name:"username"})),r.a.createElement(L.a,{className:"loginField",label:"Email"},r.a.createElement(F.a,{type:"email",placeholder:"Enter your email!",name:"email"})),r.a.createElement(L.a,{required:!0,className:"loginField",label:"Password"},r.a.createElement(F.a,{type:"password",placeholder:"Enter your password!",name:"password"})),r.a.createElement(b.a,{margin:{left:"large",bottom:"medium",top:"small"},primary:!0,type:"submit",label:"Submit",color:"#6AB8E0"})),r.a.createElement(D.a,{color:"#6AB8E0",href:"/login"},"Already have an account?"))},P=function(){return r.a.createElement("div",{className:"loginForm"},r.a.createElement(h.a,{color:"#304258"},"Login"),r.a.createElement(I.a,{action:"/api/login",method:"post"},r.a.createElement(L.a,{required:!0,className:"loginField",label:"Username"},r.a.createElement(F.a,{type:"text",placeholder:"Enter your username!",name:"username"})),r.a.createElement(L.a,{required:!0,className:"loginField",label:"Password"},r.a.createElement(F.a,{type:"password",placeholder:"Enter your password!",name:"password"})),r.a.createElement(b.a,{margin:{left:"large",bottom:"medium",top:"small"},primary:!0,type:"submit",label:"Submit",color:"#6AB8E0"})),r.a.createElement(D.a,{color:"#6AB8E0",href:"/register"},"Haven't made an account yet?"))},G=a(52),W=a(234),H=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),m=i[0],u=i[1],d=Object(n.useState)(""),E=Object(s.a)(d,2),f=E[0],h=E[1],v=Object(n.useState)(null),y=Object(s.a)(v,2),j=y[0],w=y[1],O=Object(n.useState)(null),x=Object(s.a)(O,2),S=x[0],k=x[1],C=l.date?l.date.slice(0,l.date.length-1):Date.now(),A=Object(n.useState)(C),N=Object(s.a)(A,2),T=N[0],z=N[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/categories");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,w(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function a(){return(a=Object(p.a)(g.a.mark((function t(){var a,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/event/".concat(e.eventId));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,o(n),u(n.title),h(n.description),z(n.date),k(n.category_id),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(W.a,{show:e.show,onHide:e.handleClose},r.a.createElement(W.a.Header,{closeButton:!0},"Update SmallTalk"),r.a.createElement(W.a.Body,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Group,{controlId:"titleForm"},r.a.createElement(I.a.Label,null,"Title"),r.a.createElement(I.a.Control,{onChange:function(e){return u(e.target.value)},type:"text",placeholder:"What is your SmallTalk about?",value:m})),r.a.createElement(I.a.Group,{controlId:"descriptionForm"},r.a.createElement(I.a.Label,null,"Description"),r.a.createElement(I.a.Control,{onChange:function(e){return h(e.target.value)},as:"textarea",rows:"3",placeholder:"Give a description of your SmallTalk!",value:f})),r.a.createElement(I.a.Group,{controlId:"categoryOptions"},r.a.createElement(I.a.Label,null,"Category"),r.a.createElement(I.a.Control,{onChange:function(e){return k(e.target.value)},as:"select"},j&&j.map((function(e){return l.category_id===e.id?r.a.createElement("option",{selected:!0,key:e.id,value:e.id},e.name):r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(I.a.Group,{controlId:"dateForm"},r.a.createElement(I.a.Label,null,"Date"),r.a.createElement(I.a.Control,{onChange:function(e){return z(e.target.value)},type:"datetime-local",rows:"3",defaultValue:C||null})),r.a.createElement(b.a,{onClick:function(t){t.preventDefault();var a={title:m,description:f,categoryId:S,date:T,eventId:e.eventId};console.log(a),fetch("/api/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}))},size:"small",primary:!0,responsive:"true",type:"submit",label:"Update SmallTalk",color:"#6AB8E0"})))))},U=function(e){var t=e.event,a=Object(n.useState)(!1),l=Object(s.a)(a,2),o=l[0],i=l[1],m=Object(n.useState)(""),u=Object(s.a)(m,2),d=u[0],y=u[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(g.a.mark((function e(){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/categoryId/".concat(t.category_id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),y(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return r.a.createElement(E.a,null,r.a.createElement(H,{show:o,handleClose:function(){return i(!1)},eventId:t.id}),r.a.createElement(E.a,{responsive:"true",direction:"column",align:"center",alignSelf:"center",background:"#D3EBF9",border:{color:"#17539D",size:"medium"},round:"xsmall",pad:"medium",margin:{top:"10%"},width:"90%"},r.a.createElement(f.a,{fill:"true",responsive:"true",rows:["xsmall","xxsmall","xsmall","auto"],columns:["auto","auto","auto"],areas:[{name:"category",start:[2,0],end:[2,0]},{name:"header",start:[0,0],end:[1,1]},{name:"time",start:[0,1],end:[2,1]},{name:"desc",start:[0,2],end:[2,2]},{name:"buttons",start:[0,3],end:[2,3]}]},r.a.createElement(E.a,{responsive:"true",gridArea:"header"},r.a.createElement(h.a,{alignSelf:"start",textAlign:"start",level:"2",responsive:"true",margin:{top:"small"}},t.title)),r.a.createElement(E.a,{gridArea:"category"},r.a.createElement(h.a,{textAlign:"end",margin:{vertical:"xsmall"},level:"4"},d.name)),r.a.createElement(E.a,{gridArea:"time"},r.a.createElement(v.a,{size:"large",textAlign:"center",margin:{vertical:"auto"}},new Date(t.date).toLocaleString())),r.a.createElement(E.a,{gridArea:"desc"},r.a.createElement(v.a,{size:"medium",margin:{vertical:"auto"},textAlign:"center"},t.description)),r.a.createElement(E.a,{gridArea:"buttons",margin:{top:"medium"},alignContent:"center",align:"center",alignSelf:"center",flex:"true",direction:"row",justify:"evenly"},r.a.createElement(E.a,{flex:"true",align:"center"},r.a.createElement(b.a,{responsive:"true",label:"Update",onClick:function(){return i(!0)},color:"#6AB8E0"})),r.a.createElement(E.a,{flex:"true",align:"center"},r.a.createElement(b.a,{responsive:"true",label:"Delete",onClick:function(){fetch("/api/remove",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventId:t.id})}).then((function(){window.location.reload()})).catch((function(e){console.log(e)}))},color:"#6AB8E0"})),r.a.createElement(E.a,{flex:"true",align:"center"},r.a.createElement(c.b,{to:"/videoroom/".concat(t.id)},r.a.createElement(b.a,{size:"medium",responsive:"true",primary:!0,label:"Join SmallTalk",color:"#6AB8E0"})))))))},J=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),m=i[0],u=i[1],d=Object(n.useState)(null),E=Object(s.a)(d,2),f=E[0],h=E[1],v=Object(n.useState)(1),y=Object(s.a)(v,2),j=y[0],w=y[1],O=Object(n.useState)(null),x=Object(s.a)(O,2),S=x[0],k=x[1],C={title:l,description:m,categoryId:j,date:S};return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/categories");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,h(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(W.a,{show:e.show,onHide:e.handleClose},r.a.createElement(W.a.Header,{closeButton:!0},"Create SmallTalk"),r.a.createElement(W.a.Body,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Group,{controlId:"titleForm"},r.a.createElement(I.a.Label,null,"Title"),r.a.createElement(I.a.Control,{onChange:function(e){return o(e.target.value)},type:"text",placeholder:"What is your SmallTalk about?"})),r.a.createElement(I.a.Group,{controlId:"descriptionForm"},r.a.createElement(I.a.Label,null,"Description"),r.a.createElement(I.a.Control,{onChange:function(e){return u(e.target.value)},as:"textarea",rows:"3",placeholder:"Give a description of your SmallTalk!"})),r.a.createElement(I.a.Group,{controlId:"categoryOptions"},r.a.createElement(I.a.Label,null,"Category"),r.a.createElement(I.a.Control,{onChange:function(e){return w(e.target.value)},as:"select"},f&&f.map((function(e,t){return 0===t?r.a.createElement("option",{key:e.id,value:e.id,selected:"selected"},e.name):r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(I.a.Group,{controlId:"dateForm"},r.a.createElement(I.a.Label,null,"Date"),r.a.createElement(I.a.Control,{onChange:function(e){return k(e.target.value)},type:"datetime-local",rows:"3"})),r.a.createElement(b.a,{onClick:function(e){e.preventDefault(),fetch("/api/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}))},color:"#6AB8E0",size:"small",primary:!0,responsive:"true",type:"submit",label:"Create SmallTalk"})))))},R=a(245),Y=a(228);var V=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),i=c[0],m=c[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),g=d[0],p=d[1];return Object(n.useEffect)((function(){m(!0),fetch("/api/getEvents").then((function(e){return e.json()})).then((function(e){var t=Object(G.a)(e);l(t),m(!1)})).catch((function(e){console.log(e)})),fetch("/api/users").then((function(e){console.log(e),e.json()})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{responsive:"true",className:"dashboard"},r.a.createElement(h.a,{margin:{bottom:"medium"},textAlign:"center",responsive:"true",color:"#444444"},"Your SmallTalk's"),r.a.createElement(b.a,{alignSelf:"center",primary:!0,color:"#6AB8E0",onClick:function(){return p(!0)},label:"Create SmallTalk"}),r.a.createElement(J,{id:"addEvent",show:g,handleClose:function(){return p(!1)}})),i?r.a.createElement(Y.a,{className:"loading",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(R.a,null,0===a.length?r.a.createElement(h.a,{level:"3",id:"emptyHeadingDash",textAlign:"center"},"No SmallTalk's here! Try creating one!"):r.a.createElement(r.a.Fragment,null),r.a.createElement(f.a,{rows:"medium",columns:["auto","1/2"],gap:"large",responsive:"true",align:"center"},a&&a.map((function(e){return r.a.createElement(U,{key:e.id,event:e})})))))},q=a(75),M=a(125),_=a.n(M),K=a(126),$=a.n(K),Q=a(1);function X(){var e=Object(q.a)(["\n  width: 45%;\n  margin-top: 3%;\n"]);return X=function(){return e},e}function Z(){var e=Object(q.a)(["\n  margin-top: 3%;\n  width: 10%;\n"]);return Z=function(){return e},e}var ee=Q.default.video(Z()),te=Q.default.video(X());var ae=function(){var e,t,a=Object(n.useState)(),l=Object(s.a)(a,2),o=l[0],c=l[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),d=u[0],g=u[1],p=Object(i.f)().roomId,f=Object(n.useRef)(),h=Object(n.useRef)(),v=Object(n.useRef)();return Object(n.useEffect)((function(){var e;v.current=_()(),v.current.emit("video-room",p),v.current.on("is-partner-here",(function(t){console.log({isPartnerHere:t}),g(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){c(a),e=new $.a({initiator:t,trickle:!1,stream:a}),f.current&&(console.log({userVideo:f}),f.current.srcObject=a),e.on("signal",(function(e){console.log("Data was just sent",e),v.current.emit("signal",e)})),e.on("stream",(function(e){g(!0),console.log({partnerStream:e}),h.current&&(h.current.srcObject=e)})),v.current.on("signal",(function(t){console.log("I just received data",t),e.signal(t),console.log({peer:e})}))}))}))}),[]),o&&(e=r.a.createElement(ee,{playsInline:!0,muted:!0,ref:f,autoPlay:!0})),t=d?r.a.createElement(te,{playsInline:!0,ref:h,autoPlay:!0}):r.a.createElement("h2",null," Waiting for a partner..."),r.a.createElement(R.a,{alignSelf:"center"},r.a.createElement(E.a,{align:"center"},t),r.a.createElement(E.a,{margin:{top:"small",left:"27.5%"}},e))},ne=a(127),re=a.n(ne),le=a(229),oe=a(230),ce=a(231),ie=function(){return r.a.createElement("div",{className:"homePage"},r.a.createElement("section",{className:"top-row"},r.a.createElement("aside",{className:"sideText"},r.a.createElement(h.a,{className:"slogan"},"A new way to ",r.a.createElement("span",{className:"logo-text"},"SMALLTALK")),r.a.createElement(v.a,{color:"#304258",size:"large",textAlign:"start"},"SmallTalk is meant for just that: small talks! SmallTalk aims to help ease the pressure that sometimes occurs when starting conversations. With categories for starting points and events created by users, there's tons of opportunities to join in!")),r.a.createElement("img",{src:re.a,className:"people",alt:"image of interconnected circles with a group of people looking up at them symbolizing a network"})),r.a.createElement("h1",{className:"middle-row-title"},"Join SmallTalk"),r.a.createElement("section",{className:"middle-row"},r.a.createElement("div",{className:"iconCard"},r.a.createElement(c.b,{to:"/register"},r.a.createElement(le.a,{className:"userIcon",color:"#3E92CC",size:"xlarge"})),r.a.createElement("div",{className:"cardContent"},r.a.createElement(c.b,{to:"/register"},r.a.createElement("b",null,"Sign-Up")),r.a.createElement("p",null,"Create a profile to join SmallTalks!"))),r.a.createElement("div",{className:"iconCard"},r.a.createElement(oe.a,{className:"searchIcon",color:"#3E92CC",size:"xlarge"}),r.a.createElement("div",{className:"cardContent"},r.a.createElement("b",null,"Find events"),r.a.createElement("p",null,"Find events based on categories that interest you!"))),r.a.createElement("div",{className:"iconCard"},r.a.createElement(ce.a,{className:"chatIcon",color:"#3E92CC",size:"xlarge"}),r.a.createElement("div",{className:"cardContent"},r.a.createElement("b",null,"Chat it up!"),r.a.createElement("p",null,"Once you have RSVP'd for an event, you are all set to start small talking with others!")))),r.a.createElement("section",{className:"bottom-row"},r.a.createElement("p",null,"We hope that SmallTalk opens you up to all the one liners and awkward silence reducers!")),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 SMALLTALK 2020")))},se=a(128),me=a.n(se),ue=(a(201),a(232)),de=a(239),ge=a(233),pe=function(e){var t=e.event;return console.log(t),r.a.createElement(E.a,null,r.a.createElement(E.a,{responsive:"true",direction:"column",align:"center",alignSelf:"center",background:"#D3EBF9",border:{color:"#17539D",size:"medium"},round:"xsmall",header:"Your Events",pad:"medium",margin:{top:"10%"},width:"90%"},r.a.createElement(f.a,{fill:"true",rows:["auto","xsmall","xxsmall","auto"],columns:["auto","auto","auto"],areas:[{name:"category",start:[2,0],end:[2,0]},{name:"header",start:[0,0],end:[1,1]},{name:"time",start:[0,1],end:[2,1]},{name:"desc",start:[0,2],end:[2,2]},{name:"buttons",start:[0,3],end:[2,3]}]},r.a.createElement(E.a,{responsive:"true",gridArea:"header"},r.a.createElement(h.a,{alignSelf:"start",textAlign:"start",level:"2",responsive:"true",margin:{top:"small"}},t.title)),r.a.createElement(E.a,{gridArea:"category"},r.a.createElement(h.a,{textAlign:"end",margin:{vertical:"xsmall"},level:"4"},t.name)),r.a.createElement(E.a,{gridArea:"time"},r.a.createElement(v.a,{size:"large",textAlign:"center",margin:{vertical:"auto"}},new Date(t.date).toLocaleString())),r.a.createElement(E.a,{gridArea:"desc"},r.a.createElement(v.a,{size:"medium",margin:{vertical:"auto"},textAlign:"center"},t.description)),r.a.createElement(E.a,{gridArea:"buttons",gap:"medium",margin:{top:"large",left:"24%"},direction:"row"},r.a.createElement(b.a,{size:"medium",responsive:"true",gap:"small",label:"Un-RSVP",onClick:function(){fetch("/api/rsvp/remove",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({rsvpId:t.id})}).then((function(){window.location.reload()})).catch((function(e){return console.log(e)}))},color:"#6AB8E0"}),r.a.createElement(c.b,{to:"/videoroom/".concat(t.event_id)},r.a.createElement(b.a,{size:"medium",responsive:"true",primary:!0,gap:"small",label:"Join SmallTalk",color:"#6AB8E0"}))))))};var Ee=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),i=c[0],m=c[1],u=Object(n.useState)(null),d=Object(s.a)(u,2),g=(d[0],d[1]);return Object(n.useEffect)((function(){m(!0),fetch("/api/rsvp/user").then((function(e){return e.json()})).then((function(e){var t=Object(G.a)(e);l(t),m(!1)})).catch((function(e){console.log(e),g(e="Sorry there was an error, please try again")}))}),[]),console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"upcomingEventHeader",responsive:"true",color:"#444444"},"Your Upcoming SmallTalk's")),i?r.a.createElement(Y.a,{className:"loading",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(R.a,null,0===a.length?r.a.createElement(h.a,{level:"3",className:"emptyHeading",textAlign:"center"},"Hm...looks empty. Why not RSVP to an event?"):r.a.createElement(r.a.Fragment,null),r.a.createElement(f.a,{rows:"medium",columns:["auto","1/2"],gap:"small",responsive:"true",align:"center"},a&&a.map((function(e){return r.a.createElement(pe,{key:e.id,event:e})})))))};var fe=function(){return r.a.createElement(c.a,null,r.a.createElement(ue.a,{background:"light-1",pad:"medium"},r.a.createElement(E.a,{direction:"row",responsive:"true",width:"large",align:"center",gap:"small"},r.a.createElement(c.b,{to:"/"},r.a.createElement(de.a,{src:me.a,fit:"contain",className:"logo"})),document.cookie?r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{color:"#304258",className:"navLink",href:"/dash"},"Your SmallTalk's"),r.a.createElement(D.a,{color:"#304258",className:"navLink",href:"/categories"},"Categories"),r.a.createElement(D.a,{color:"#304258",className:"navLink",href:"/upcomingEvents"},"Upcoming SmallTalk's")):r.a.createElement(r.a.Fragment,null)),r.a.createElement(ge.a,{direction:"row"},document.cookie?r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{href:"/login",color:"#304258",id:"login",onClick:function(){fetch("/api/logout").catch((function(e){return console.log(e)}))}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{color:"#304258",className:"navLink",href:"/login"},"Login"),r.a.createElement(D.a,{color:"#304258",className:"navLink",href:"/register"},"Register")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(ie,null)),r.a.createElement(i.a,{path:"/register"},r.a.createElement(B,null)),r.a.createElement(i.a,{path:"/login"},r.a.createElement(P,null)),r.a.createElement(i.a,{path:"/dash"},r.a.createElement(V,null)),r.a.createElement(i.a,{path:"/videoroom/:roomId"},r.a.createElement(ae,null)),r.a.createElement(i.a,{path:"/categories/:categoryId"},r.a.createElement(u,null,r.a.createElement(w,null))),r.a.createElement(i.a,{path:"/upcomingEvents"},r.a.createElement(Ee,null)),r.a.createElement(i.a,{path:"/categories"},r.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(203);var he=a(238);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he.a,{theme:{global:{font:{family:"Roboto",size:"18px",height:"20px"}}}},r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.01e1e4a1.chunk.js.map