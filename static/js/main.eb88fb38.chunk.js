(this.webpackJsonpapextools=this.webpackJsonpapextools||[]).push([[0],{26:function(e){e.exports=JSON.parse('{"en":{"translation":{"Placement":"Placement","Kill/Assist Points":"Kill/Assist Points","Tier":"Tier","Lost Forgiveness":"Lost Forgiveness","Earned RP":"Earned RP","Apex Legends RP calculator":"Apex Legends RP calculator","Bronze":"Bronze","Silver":"Silver","Gold":"Gold","Platinum":"Platinum","Diamond":"Diamond","Master":"Master","Apex Predator":"Apex Predator","Entry cost":"Entry cost","Breakdown":"Breakdown","Base RP from placement":"Base RP from placement","Bonus RP from Kill/Assist":"Bonus RP from Kill/Assist"}},"ja":{"translation":{"Placement":"\u9806\u4f4d","Kill/Assist Points":"\u30ad\u30eb\u30a2\u30b7\u30b9\u30c8\u30dd\u30a4\u30f3\u30c8","Tier":"\u30c6\u30a3\u30a2","Lost Forgiveness":"\u6557\u5317\u514d\u9664","Earned RP":"\u7372\u5f97RP","Apex Legends RP calculator":"\u30a8\u30a4\u30da\u30c3\u30af\u30b9\u30ec\u30b8\u30a7\u30f3\u30ba RP \u8a08\u7b97\u6a5f","Bronze":"\u30d6\u30ed\u30f3\u30ba","Silver":"\u30b7\u30eb\u30d0\u30fc","Gold":"\u30b4\u30fc\u30eb\u30c9","Platinum":"\u30d7\u30e9\u30c1\u30ca","Diamond":"\u30c0\u30a4\u30a2\u30e2\u30f3\u30c9","Master":"\u30de\u30b9\u30bf\u30fc","Apex Predator":"Apex\u30d7\u30ec\u30c7\u30bf\u30fc","Entry cost":"\u53c2\u52a0\u8cbb","Breakdown":"\u5185\u8a33","Base RP from placement":"\u9806\u4f4dRP","Bonus RP from Kill/Assist":"\u30ad\u30eb\u30a2\u30b7\u30b9\u30c8\u306b\u3088\u308b\u30dc\u30fc\u30ca\u30b9RP"}}}')},48:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(14),l=n.n(i),a=n(24),s=n(12),o=n(25),b=n(26);a.a.use(s.e).use(o.a).init({resources:b,interpolation:{escapeValue:!1}});a.a;function u(e){var t;return null!==(t={1:125,2:95,3:70,4:55,5:45,6:30,7:20,8:20,9:10,10:10,11:5,12:5,13:5}[e])&&void 0!==t?t:0}function d(e){var t;return(null!==(t={1:15,2:11,3:8,4:5,5:5,6:1,7:1,8:1,9:1,10:1}[e])&&void 0!==t?t:0)+10}var j=125,O=["Bronze","Silver","Gold","Platinum","Diamond","Master","Apex Predator"],h={Bronze:0,Silver:12,Gold:24,Platinum:36,Diamond:48,Master:60,"Apex Predator":60},m=n(49),v=n(29),f="screen and (min-width: 600px)",p=Object(v.a)(["@media "+f]),g=n(10),x=n(1);function P(){var e=Object(m.a)().i18n,t=[["ja","\u65e5\u672c\u8a9e"],["en","English"]],n=e.language,c=t.filter((function(e){return e[0]===n})).concat(t.filter((function(e){return e[0]!==n})));return Object(x.b)(x.a,{children:c.map((function(t,n){var c=Object(g.a)(t,2),i=c[0],l=c[1];return Object(x.c)(r.Fragment,{children:[0!==n&&"/",Object(x.b)("a",{href:"#",onClick:function(){var t;t=i,e.changeLanguage(t)},children:l})]},n)}))})}function k(){var e=Object(m.a)().t;return Object(x.c)("header",{children:[Object(x.b)("h1",{css:p({width:["100%","80%"],display:"inline-block"}),children:e("Apex Legends RP calculator")}),Object(x.b)("div",{css:p({width:["100%","calc(20% - 24px)"],display:"inline-block",textAlign:"end",verticalAlign:"top",marginTop:[0,24],marginRight:24}),children:Object(x.b)(P,{})})]})}var A=n(3),R=n(7),B=n(2);function F(e){var t=e.label,n=e.state;return Object(B.jsxs)("label",{children:[t," ",Object(B.jsx)(R.a,{children:function(){return Object(B.jsx)("input",{type:"checkbox",checked:n.current,onChange:Object(A.b)((function(){n.current=!n.current}))})}})]})}function L(e){var t=e.onClick,n=e.selected,r=e.label;return Object(x.b)("button",{onClick:t,css:{borderWidth:1,borderStyle:"solid",borderColor:n?"#000000":"#efefef",backgroundColor:"#efefef",marginLeft:0},children:r})}function y(e){var t=e.label,n=e.selected,r=e.list,c=e.itemLabel;return Object(x.c)("label",{children:[t," ",Object(x.b)("div",{children:r.map((function(e,t){return Object(x.b)(R.a,{children:function(){return Object(x.b)(L,{onClick:Object(A.b)((function(){n.current=e})),selected:n.current===e,label:c(e)},t)}})}))})]})}function w(e,t){var n=[];if(e<=t)for(var r=e;r<=t;r++)n.push(r);else for(var c=e;c>=t;c--)n.push(c);return n}function S(e){var t=e.label,n=e.selected,r=e.list,c=e.itemLabel;return Object(x.c)("label",{children:[t," ",Object(x.b)("select",{onChange:Object(A.b)((function(e){n.current=r[parseInt(e.target.value,10)]})),value:r.findIndex((function(e){return e===n.current})),children:r.map((function(e,t){return Object(x.b)("option",{value:t,children:c(e)},t)}))})]})}var C=n(31);function M(e){var t=e.placement,n=e.killPoint,r=e.tier,c=e.lostForgiveness,i=Object(m.a)().t,l=Object(C.a)(f)?y:S;return Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{children:Object(B.jsx)(l,{selected:t,label:i("Placement"),list:w(1,20),itemLabel:function(e){return String(e)}})}),Object(B.jsx)("div",{children:Object(B.jsx)(l,{selected:n,label:i("Kill/Assist Points"),list:w(0,13),itemLabel:function(e){return String(e)}})}),Object(B.jsx)("div",{children:Object(B.jsx)(l,{selected:r,label:i("Tier"),list:O,itemLabel:function(e){return i(e)}})}),Object(B.jsx)("div",{children:Object(B.jsx)(F,{state:c,label:i("Lost Forgiveness")})})]})}var E=n(11),K={Bronze:0,Silver:12,Gold:24,Platinum:36,Diamond:48,Master:60,"Apex Predator":60};function T(e){var t=D(e)+u(e.placement)-K[e.tier];return e.lostForgiveness?Math.max(0,t):t}function D(e){var t=e.placement,n=e.killPoint,r=d(t);return Math.min(r*n,j)}function z(e){var t=Object(m.a)().t,n=u(e.placement),r=D(e),c=e.lostForgiveness?-Math.min(0,r+n-h[e.tier]):0;return Object(B.jsxs)("details",{children:[Object(B.jsx)("summary",{children:t("Breakdown")}),Object(B.jsxs)("div",{children:[t("Base RP from placement"),": ",n]}),Object(B.jsx)(I,Object(E.a)({},e)),Object(B.jsxs)("div",{children:[t("Entry cost"),": ",-h[e.tier]]}),Object(B.jsxs)("div",{children:[t("Lost Forgiveness"),":"," ",0!==c?c:"--"]})]})}function G(e){return Object(B.jsxs)(B.Fragment,{children:[d(e.placement)*e.killPoint," ="," ",d(e.placement)," * ",e.killPoint," "]})}function I(e){var t=Object(m.a)().t,n=d(e.placement)*e.killPoint;return Object(B.jsxs)("div",{children:[t("Bonus RP from Kill/Assist"),":"," ",n>j?Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("del",{children:Object(B.jsx)(G,Object(E.a)({},e))})}):Object(B.jsx)(G,Object(E.a)({},e))," ",n>=j&&Object(B.jsxs)(B.Fragment,{children:["(Max: ",j,")"]})]})}var q=n(13);var J=Object(q.a)("table",{target:"e1w8l6930"})({name:"1in9smx",styles:"table-layout:fixed;width:100%;border-collapse:collapse;"}),N=Object(q.a)("tr",{target:"e1w8l6931"})(""),V=Object(q.a)("th",{target:"e1w8l6932"})({name:"1vjbhqq",styles:"border:solid 2px lightgray;text-align:center;"}),W=Object(q.a)("td",{target:"e1w8l6933"})({name:"ypqgdm",styles:"border:solid 2px lightgray;text-align:end;"});function H(e){var t=Object(g.a)(e.axises,2),n=t[0],r=t[1],c=e.cell;return Object(x.c)(J,{children:[Object(x.c)(N,{children:[Object(x.b)(V,{scope:"col",rowSpan:2,children:r.label}),Object(x.b)(V,{scope:"col",colSpan:n.values.length,children:n.label})]}),Object(x.b)(N,{children:n.values.map((function(e){return Object(x.b)(V,{scope:"col",children:n.header(e)})}))}),r.values.map((function(e){return Object(x.c)(N,{children:[Object(x.b)(V,{scope:"row",children:r.header(e)}),n.values.map((function(t){return Object(x.b)(W,{children:c(t,e)})}))]})}))]})}function Q(e){var t=T({placement:e.placement,killPoint:e.killPoint,tier:e.tier,lostForgiveness:!1});return Object(B.jsx)(B.Fragment,{children:t})}function U(e){var t=e.tier,n=Object(m.a)().t;return Object(B.jsx)(H,{axises:[{label:n("Placement"),values:w(20,1),header:function(e){return String(e)}},{label:n("Kill/Assist Points"),values:w(13,0),header:function(e){return String(e)}}],cell:function(e,n){return Object(B.jsx)(Q,{placement:e,killPoint:n,tier:t})}})}function X(e){var t=Object(m.a)().t,n=T(e);return Object(x.c)("div",{css:{marginTop:24},children:[Object(x.c)("div",{children:[t("Earned RP")+": ",n]}),Object(x.b)(z,Object(E.a)({},e)),Object(x.b)("div",{css:{marginTop:24},children:Object(x.b)(U,{tier:e.tier})})]})}function Y(e){return Object(R.b)((function(){return{current:e}}))}function Z(){var e=Y(1),t=Y(0),n=Y(O[0]),r=Y(!1);return Object(x.c)(x.a,{children:[Object(x.b)(k,{}),Object(x.b)(M,{placement:e,killPoint:t,tier:n,lostForgiveness:r}),Object(x.b)(R.a,{children:function(){return Object(x.b)(X,{placement:e.current,killPoint:t.current,tier:n.current,lostForgiveness:r.current})}})]})}function $(){return Object(B.jsx)(Z,{})}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),i(e),l(e)}))};l.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)($,{})}),document.getElementById("root")),_()}},[[48,1,2]]]);
//# sourceMappingURL=main.eb88fb38.chunk.js.map