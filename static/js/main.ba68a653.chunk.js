(this.webpackJsonpapextools=this.webpackJsonpapextools||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"en":{"translation":{"Placement":"Placement","Kill/Assist Point":"Kill/Assist Point","Tier":"Tier","Lost Forgiveness":"Lost Forgiveness","Total RP":"Total RP","Apex Legends RP calculator":"Apex Legends RP calculator","Bronze":"Bronze","Silver":"Silver","Gold":"Gold","Platinum":"Platinum","Diamond":"Diamond","Master":"Master","Apex Predator":"Apex Predator"}},"ja":{"translation":{"Placement":"\u9806\u4f4d","Kill/Assist Point":"\u30ad\u30eb\u30a2\u30b7\u30b9\u30c8\u30dd\u30a4\u30f3\u30c8","Tier":"\u30c6\u30a3\u30a2","Lost Forgiveness":"\u6557\u5317\u514d\u9664","Total RP":"\u5408\u8a08RP","Apex Legends RP calculator":"\u30a8\u30a4\u30da\u30c3\u30af\u30b9\u30ec\u30b8\u30a7\u30f3\u30ba RP \u8a08\u7b97\u6a5f","Bronze":"\u30d6\u30ed\u30f3\u30ba","Silver":"\u30b7\u30eb\u30d0\u30fc","Gold":"\u30b4\u30fc\u30eb\u30c9","Platinum":"\u30d7\u30e9\u30c1\u30ca","Diamond":"\u30c0\u30a4\u30a2\u30e2\u30f3\u30c9","Master":"\u30de\u30b9\u30bf\u30fc","Apex Predator":"Apex\u30d7\u30ec\u30c7\u30bf\u30fc"}}}')},34:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),l=n(15),c=n.n(l),o=n(13),a=n(6),s=n(16),u=n(17);o.a.use(a.e).use(s.a).init({resources:u,interpolation:{escapeValue:!1}});o.a;var b=n(35),d=n(5),j=n(1);function v(e){var t=e.label,n=Object(d.a)(e.current,2),r=n[0],i=n[1];return Object(j.jsxs)("label",{children:[t," ",Object(j.jsx)("input",{type:"checkbox",checked:r,onChange:function(){return i(!r)}})]})}var O=n(2);function f(e){var t=e.onClick,n=e.selected,r=e.label;return Object(O.b)("button",{onClick:t,css:{borderWidth:1,borderStyle:"solid",borderColor:n?"#000000":"#efefef",backgroundColor:"#efefef",marginLeft:0},children:r})}function x(e){var t=e.label,n=e.selected,r=e.list,i=e.itemLabel,l=Object(d.a)(n,2),c=l[0],o=l[1];return Object(O.c)("label",{children:[t," ",Object(O.b)("div",{children:r.map((function(e,t){return Object(O.b)(f,{onClick:function(){o(e)},selected:c===e,label:i(e)},t)}))})]})}var P=["Bronze","Silver","Gold","Platinum","Diamond","Master","Apex Predator"],p={Bronze:0,Silver:12,Gold:24,Platinum:36,Diamond:48,Master:60,"Apex Predator":60};function h(e){var t=function(e){var t=e.placement,n=e.killPoint,r=function(e){var t;return(null!==(t={1:15,2:11,3:8,4:5,5:5,6:1,7:1,8:1,9:1,10:1}[e])&&void 0!==t?t:0)+10}(t);return Math.min(r*n,125)}(e)+function(e){var t;return null!==(t={1:125,2:95,3:70,4:55,5:45,6:30,7:20,8:20,9:10,10:10,11:5,12:5,13:5}[e])&&void 0!==t?t:0}(e.placement)-p[e.tier];return e.lostForgiveness?Math.max(0,t):t}function g(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n}function m(){var e=Object(b.a)().i18n,t=[["ja","\u65e5\u672c\u8a9e"],["en","English"]],n=e.language,r=t.filter((function(e){return e[0]===n})).concat(t.filter((function(e){return e[0]!==n})));return Object(O.b)("div",{css:{position:"absolute",top:24,right:24},children:r.map((function(t,n){var r=Object(d.a)(t,2),i=r[0],l=r[1];return Object(O.c)(O.a,{children:[0!==n&&"/",Object(O.b)("a",{href:"#",onClick:function(){var t;t=i,e.changeLanguage(t)},children:l})]})}))})}function L(e){var t=e.placement,n=e.killPoint,r=e.tier,i=e.lostForgiveness,l=Object(b.a)().t;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(x,{selected:t,label:l("Placement"),list:g(1,20),itemLabel:function(e){return String(e)}})}),Object(j.jsx)("div",{children:Object(j.jsx)(x,{selected:n,label:l("Kill/Assist Point"),list:g(0,20),itemLabel:function(e){return String(e)}})}),Object(j.jsx)("div",{children:Object(j.jsx)(x,{selected:r,label:l("Tier"),list:P,itemLabel:function(e){return l(e)}})}),Object(j.jsx)("div",{children:Object(j.jsx)(v,{current:i,label:l("Lost Forgiveness")})})]})}function k(e){var t=e.placement,n=e.killPoint,r=e.tier,i=e.lostForgiveness,l=Object(b.a)().t,c=h({placement:t,killPoint:n,tier:r,lostForgiveness:i});return Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:[l("Total RP")+": ",c]})})}function S(){var e=Object(r.useState)(1),t=Object(r.useState)(0),n=Object(r.useState)(P[0]),i=Object(r.useState)(!1),l=Object(b.a)().t;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:l("Apex Legends RP calculator")}),Object(j.jsx)(m,{}),Object(j.jsx)(L,{placement:e,killPoint:t,tier:n,lostForgiveness:i}),Object(j.jsx)(k,{placement:e[0],killPoint:t[0],tier:n[0],lostForgiveness:i[0]})]})}function A(){return Object(j.jsx)(S,{})}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),l(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),F()}},[[34,1,2]]]);
//# sourceMappingURL=main.ba68a653.chunk.js.map