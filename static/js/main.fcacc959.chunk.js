(this.webpackJsonpapextools=this.webpackJsonpapextools||[]).push([[0],{34:function(e){e.exports=JSON.parse('{"en":{"translation":{"Placement":"Placement","Kill/Assist Points":"Kill/Assist Points","Tier":"Tier","Lost Forgiveness":"Lost Forgiveness","Earned RP":"Earned RP","Apex Legends RP calculator":"Apex Legends RP calculator","Bronze":"Bronze","Silver":"Silver","Gold":"Gold","Platinum":"Platinum","Diamond":"Diamond","Master":"Master","Apex Predator":"Apex Predator","Entry cost":"Entry cost","Breakdown":"Breakdown","Base RP from placement":"Base RP from placement","Bonus RP from Kill/Assist":"Bonus RP from Kill/Assist","RP for {{tier}}":"RP for {{tier}}","RP for {{tier}} with lost forgiveness":"RP for {{tier}} with lost forgiveness"}},"ja":{"translation":{"Placement":"\u9806\u4f4d","Kill/Assist Points":"\u30ad\u30eb\u30a2\u30b7\u30b9\u30c8\u30dd\u30a4\u30f3\u30c8","Tier":"\u30c6\u30a3\u30a2","Lost Forgiveness":"\u6557\u5317\u514d\u9664","Earned RP":"\u7372\u5f97RP","Apex Legends RP calculator":"\u30a8\u30a4\u30da\u30c3\u30af\u30b9\u30ec\u30b8\u30a7\u30f3\u30ba RP \u8a08\u7b97\u6a5f","Bronze":"\u30d6\u30ed\u30f3\u30ba","Silver":"\u30b7\u30eb\u30d0\u30fc","Gold":"\u30b4\u30fc\u30eb\u30c9","Platinum":"\u30d7\u30e9\u30c1\u30ca","Diamond":"\u30c0\u30a4\u30a2\u30e2\u30f3\u30c9","Master":"\u30de\u30b9\u30bf\u30fc","Apex Predator":"Apex\u30d7\u30ec\u30c7\u30bf\u30fc","Entry cost":"\u53c2\u52a0\u8cbb","Breakdown":"\u5185\u8a33","Base RP from placement":"\u9806\u4f4dRP","Bonus RP from Kill/Assist":"\u30ad\u30eb\u30a2\u30b7\u30b9\u30c8\u306b\u3088\u308b\u30dc\u30fc\u30ca\u30b9RP","RP for {{tier}}":"{{tier}}\u3067\u306e\u7372\u5f97RP","RP for {{tier}} with lost forgiveness":"{{tier}}\u3067\u306e\u7372\u5f97RP (\u6557\u5317\u514d\u9664\u3042\u308a)"}}}')},55:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),c=r(18),o=r.n(c),l=r(31),a=r(17),s=r(33),d=r(34);l.a.use(a.e).use(s.a).init({resources:d,interpolation:{escapeValue:!1}});l.a;function b(e){var t;return null!==(t={1:125,2:95,3:70,4:55,5:45,6:30,7:20,8:20,9:10,10:10,11:5,12:5,13:5}[e])&&void 0!==t?t:0}function u(e){var t;return(null!==(t={1:15,2:11,3:8,4:5,5:5,6:1,7:1,8:1,9:1,10:1}[e])&&void 0!==t?t:0)+10}var h=125,j=["Bronze","Silver","Gold","Platinum","Diamond","Master","Apex Predator"],O={Bronze:0,Silver:12,Gold:24,Platinum:36,Diamond:48,Master:60,"Apex Predator":60},v=r(56),f=r(37),g="screen and (min-width: 600px)",p=Object(f.a)(["@media "+g]),x=r(16),m=r(1);function P(){var e=Object(v.a)().i18n,t=[["ja","\u65e5\u672c\u8a9e"],["en","English"]],r=e.language,i=t.filter((function(e){return e[0]===r})).concat(t.filter((function(e){return e[0]!==r})));return Object(m.b)(m.a,{children:i.map((function(t,r){var i=Object(x.a)(t,2),c=i[0],o=i[1];return Object(m.c)(n.Fragment,{children:[0!==r&&"/",Object(m.b)("a",{href:"#",onClick:function(){var t;t=c,e.changeLanguage(t)},children:o})]},r)}))})}function w(){var e=Object(v.a)().t;return Object(m.c)("header",{children:[Object(m.b)("h1",{css:p({width:["100%","80%"],display:"inline-block"}),children:e("Apex Legends RP calculator")}),Object(m.b)("div",{css:p({width:["100%","calc(20% - 24px)"],display:"inline-block",textAlign:"end",verticalAlign:"top",marginTop:[0,24],marginRight:24}),children:Object(m.b)(P,{})})]})}var k=r(3),y=r(7),R=r(2);function C(e){var t=e.label,r=e.state;return Object(R.jsxs)("label",{children:[t," ",Object(R.jsx)(y.a,{children:function(){return Object(R.jsx)("input",{type:"checkbox",checked:r.get(),onChange:Object(k.b)((function(){return r.set(!r.get())}))})}})]})}function F(e){var t=e.onClick,r=e.selected,n=e.label;return Object(m.b)("button",{onClick:t,css:{borderWidth:1,borderStyle:"solid",borderColor:r?"#000000":"#efefef",backgroundColor:"#efefef",marginLeft:0},children:n})}function A(e){var t=e.label,r=e.selected,n=e.list,i=e.itemLabel;return Object(m.c)("label",{children:[t," ",Object(m.b)("div",{children:n.map((function(e,t){return Object(m.b)(y.a,{children:function(){return Object(m.b)(F,{onClick:Object(k.b)((function(){return r.set(e)})),selected:r.get()===e,label:i(e)})}},t)}))})]})}function B(e,t){var r=[];if(e<=t)for(var n=e;n<=t;n++)r.push(n);else for(var i=e;i>=t;i--)r.push(i);return r}var L=Object(y.b)((function(e){var t=e.label,r=e.selected,n=e.list,i=e.itemLabel;return Object(m.c)("label",{children:[t," ",Object(m.b)("select",{onChange:Object(k.b)((function(e){r.set(n[parseInt(e.target.value,10)])})),value:n.findIndex((function(e){return e===r.get()})),children:n.map((function(e,t){return Object(m.b)("option",{value:t,children:i(e)},t)}))})]})})),S=r(28);function z(e){var t=e.placement,r=e.killPoint,n=e.tier,i=e.lostForgiveness,c=Object(v.a)().t,o=Object(S.a)(g)?A:L;return Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{children:Object(R.jsx)(o,{selected:t,label:c("Placement"),list:B(20,1),itemLabel:function(e){return String(e)}})}),Object(R.jsx)("div",{children:Object(R.jsx)(o,{selected:r,label:c("Kill/Assist Points"),list:B(0,13),itemLabel:function(e){return String(e)}})}),Object(R.jsx)("div",{children:Object(R.jsx)(o,{selected:n,label:c("Tier"),list:j,itemLabel:function(e){return c(e)}})}),Object(R.jsx)("div",{children:Object(R.jsx)(C,{state:i,label:c("Lost Forgiveness")})})]})}var M=r(5),T={Bronze:0,Silver:12,Gold:24,Platinum:36,Diamond:48,Master:60,"Apex Predator":60};function E(e){var t=K(e)+b(e.placement)-T[e.tier];return e.lostForgiveness?Math.max(0,t):t}function K(e){var t=e.placement,r=e.killPoint,n=u(t);return Math.min(n*r,h)}function D(e){var t=Object(v.a)().t,r=b(e.placement),n=K(e),i=e.lostForgiveness?-Math.min(0,n+r-O[e.tier]):0;return Object(R.jsxs)("details",{children:[Object(R.jsx)("summary",{children:t("Breakdown")}),Object(R.jsxs)("div",{children:[t("Base RP from placement"),": ",r]}),Object(R.jsx)(H,Object(M.a)({},e)),Object(R.jsxs)("div",{children:[t("Entry cost"),": ",-O[e.tier]]}),Object(R.jsxs)("div",{children:[t("Lost Forgiveness"),":"," ",0!==i?i:"--"]})]})}function G(e){return Object(R.jsxs)(R.Fragment,{children:[u(e.placement)*e.killPoint," ="," ",u(e.placement)," * ",e.killPoint," "]})}function H(e){var t=Object(v.a)().t,r=u(e.placement)*e.killPoint;return Object(R.jsxs)("div",{children:[t("Bonus RP from Kill/Assist"),":"," ",r>h?Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("del",{children:Object(R.jsx)(G,Object(M.a)({},e))})}):Object(R.jsx)(G,Object(M.a)({},e))," ",r>=h&&Object(R.jsxs)(R.Fragment,{children:["(Max: ",h,")"]})]})}var W=r(11);function I(e){var t=e.axises,r=t.x,i=t.y,c=e.cell,o=e.caption,l=e.Table,a=e.Tr;return Object(R.jsxs)(l,{children:[o(),Object(R.jsxs)("thead",{children:[Object(R.jsxs)(a,{children:[i.label({rowSpan:2}),r.label({colSpan:r.values.length})]}),Object(R.jsx)(a,{children:r.values.map((function(e,t){return Object(R.jsx)(n.Fragment,{children:r.header({value:e})},t)}))})]}),Object(R.jsx)("tbody",{children:i.values.map((function(e,t){return Object(R.jsxs)(a,{children:[i.header({value:e}),r.values.map((function(t,r){return Object(R.jsx)(n.Fragment,{children:c({x:t,y:e})},r)}))]},t)}))})]})}var J=Object(W.a)("th",{target:"elf6xk20"})({name:"34r36f",styles:"border:solid 2px lightgray;text-align:center;cursor:default;"}),N=Object(W.a)("th",{target:"elf6xk21"})("border:solid 2px lightgray;text-align:center;background-color:",(function(e){return e.selected?"dimgray":void 0}),";color:",(function(e){return e.selected?"white":void 0}),";cursor:pointer;:hover{background-color:lightgray;}"),V=Object(W.a)("td",{target:"elf6xk22"})("border:solid 2px lightgray;text-align:end;background-color:",(function(e){return e.selected?"dimgray":void 0}),";color:",(function(e){return e.selected?"white":void 0}),";cursor:pointer;:hover{background-color:lightgray;}"),X=Object(W.a)("table",{target:"elf6xk23"})({name:"1in9smx",styles:"table-layout:fixed;width:100%;border-collapse:collapse;"}),Y=Object(W.a)("tr",{target:"elf6xk24"})(""),q=Object(y.b)((function(e){var t=e.placement,r=e.killPoint,i=Object(n.useContext)(je),c=E({placement:t,killPoint:r,tier:i.tier,lostForgiveness:i.lostForgiveness}),o=Object(k.b)((function(){i.placement=t,i.killPoint=r}));return Object(m.b)(V,{selected:t==i.placement&&r==i.killPoint,onClick:o,children:c})})),Q=Object(y.b)((function(e){var t=e.placement,r=Object(n.useContext)(je),i=Object(k.b)((function(){r.placement=t}));return Object(m.b)(N,{scope:"col",onClick:i,selected:t==r.placement,children:t})})),U=Object(y.b)((function(e){var t=e.killPoint,r=Object(n.useContext)(je),i=Object(k.b)((function(){r.killPoint=t}));return Object(m.b)(N,{scope:"row",onClick:i,selected:t==r.killPoint,children:t})}));function Z(e){var t=e.tier,r=e.lostForgiveness,n=Object(v.a)().t;return Object(m.b)(I,{caption:function(){return Object(m.b)("caption",{children:n(r?"RP for {{tier}} with lost forgiveness":"RP for {{tier}}",{tier:n(t)})})},axises:{x:{label:function(e){return Object(m.b)(J,Object(M.a)(Object(M.a)({},e),{},{children:n("Placement")}))},values:B(20,1),header:function(e){return Object(m.b)(Q,{placement:e.value})}},y:{label:function(e){return Object(m.b)(J,Object(M.a)(Object(M.a)({},e),{},{children:n("Kill/Assist Points")}))},values:B(13,0),header:function(e){return Object(m.b)(U,{killPoint:e.value})}}},cell:function(e){var t=e.x,r=e.y;return Object(m.b)(q,{placement:t,killPoint:r})},Table:function(e){return Object(m.b)(X,Object(M.a)({},e))},Tr:function(e){return Object(m.b)(Y,Object(M.a)({},e))}})}var $=r(39),_=r(6),ee=Object(n.forwardRef)((function(e,t){var r=e.width,n=e.height,i=e.innerWidth,c=e.innerHeight,o=e.cells,l=e.fakeBackground,a=void 0!==l&&l,s=i[0]+i[1]+i[2],d=c[0]+c[1]+c[2],b=function(e,t){return Object(m.b)("div",{css:Object(_.a)("width:",i[e],"px;height:",c[t],"px;",a?"background-color: rgba(\n          ".concat(127*e,",\n          ").concat(127*t,",\n          ").concat(255-127*t,",\n          1\n        );"):""," order:",e+3*t,";position:sticky;",0==t?"top: 0;":""," ",2==t?"bottom: 0;":""," ",0==e?"left: 0;":""," ",2==e?"right: 0;":"",";",""),children:o[t][e]})};return Object(m.b)("div",{css:Object(_.a)("overflow:auto;width:",r,"px;height:",n,"px;resize:both;",""),ref:t,children:Object(m.c)("div",{css:Object(_.a)("position:relative;display:flex;flex-wrap:wrap;width:",s,"px;height:",d,"px;",""),children:[b(1,1),b(1,0),b(0,1),b(2,1),b(1,2),b(0,0),b(2,0),b(0,2),b(2,2)]})})}));var te={name:"zjik7",styles:"display:flex"};function re(e){var t=e.viewport,r=void 0===t?[500,500]:t,i=e.headerSize,c=void 0===i?[80,60]:i,o=e.cellSize,l=void 0===o?[46,30]:o,a=e.colCaptionHeight,s=void 0===a?30:a,d=e.gap,b=void 0===d?2:d,u=e.headerGap,h=void 0===u?5:u,j=e.borderColor,O=void 0===j?"pink":j,v=e.xs,f=void 0===v?[]:v,g=e.ys,p=void 0===g?[]:g,P=e.xCaption,w=void 0===P?function(e){return"X"}:P,k=e.yCaption,y=void 0===k?function(e){return"Y"}:k,R=e.xHeader,C=void 0===R?function(e,t){return e}:R,F=e.yHeader,A=void 0===F?function(e,t){return e}:F,B=e.cell,L=void 0===B?function(e,t,r){return"".concat(e," ").concat(t)}:B,S=[b+c[0]+h,l[0]*f.length+b*(f.length-1),b],z=[b+c[1]+h,l[1]*p.length+b*(p.length-1),b],M=Object(n.useState)(null),T=Object(x.a)(M,2),E=T[0],K=T[1],D=Object(n.useState)(1),G=Object(x.a)(D,2),H=G[0],W=G[1];Object(n.useEffect)((function(){var e;W(null!==(e=null===E||void 0===E?void 0:E.clientWidth)&&void 0!==e?e:1)}),[E]);var I=Object(n.useMemo)((function(){return Math.max(H-c[0]-h-2*b,1)}),[H]);return Object(n.useEffect)((function(){var e=new ResizeObserver((function(e){var t;W(null!==(t=null===E||void 0===E?void 0:E.clientWidth)&&void 0!==t?t:1)}));return E&&e.observe(E),function(){E&&e.unobserve(E)}}),[E,H]),Object(m.b)(ee,{ref:function(e){return e&&K(e)},width:r[0],height:r[1],innerWidth:S,innerHeight:z,cells:[[Object(m.c)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:",b,"px ",h,"px ",h,"px ",b,"px;width:",c[0],"px;height:",c[1],"px;position:relative;",""),children:[y({width:c[0],height:c[1]}),Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:",b,"px 0 ",h,"px 0;width:",I,"px;height:",s,"px;position:absolute;top:",-b,"px;left:",c[0]+h,"px;",""),children:w({width:I,height:s})})]}),Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0 0 ",h,"px 0;margin-top:",b+s+h,"px;",""),children:Object(m.b)("div",{css:Object(_.a)("display:flex;height:",c[1]-s-h,"px;",""),children:f.map((function(e){return Object(m.b)("div",{css:Object(_.a)(":not(:last-child){border-style:solid;border-color:",O,";border-width:0 ",b,"px 0 0;}width:",l[0],"px;height:",c[1]-s-h,"px;",""),children:C(e,{width:l[0],height:c[1]-s-h})})}))})}),Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0 ",b,"px 0 0;height:",z[0],"px;","")})],[Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0 ",h,"px 0 ",b,"px;width:",c[0],"px;height:",l[1]*p.length+b*(p.length-1),"px;",""),children:p.map((function(e){return Object(m.b)("div",{css:Object(_.a)(":not(:last-child){border-style:solid;border-color:",O,";border-width:0 0 ",b,"px 0;}width:",c[0],"px;height:",l[1],"px;",""),children:A(e,{width:c[0],height:l[1]})})}))}),Object(m.b)("div",{children:p.map((function(e){return Object(m.b)("div",{css:te,children:f.map((function(t){return Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0;:not(:last-child){border-right-width:",b,"px;}div:not(:last-child)>&{border-bottom-width:",b,"px;}width:",l[0],"px;height:",l[1],"px;",""),children:L(t,e,{width:l[0],height:l[0]})})}))})}))}),Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0 ",b,"px 0 0;height:",z[1],"px;","")})],[Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0 0 ",b,"px 0;width:",S[0],"px;","")}),Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0 0 ",b,"px 0;width:",S[1],"px;","")}),Object(m.b)("div",{css:Object(_.a)("border-style:solid;border-color:",O,";border-width:0 0 ",b,"px 0;width:",S[2],"px;","")})]]})}var ne=Object(W.a)("div",{target:"e104riyz0"})({name:"vy98b0",styles:"text-align:center;cursor:default;background-color:white;font-weight:bold;width:100%;height:100%;"}),ie=Object(W.a)("div",{target:"e104riyz1"})({name:"vy98b0",styles:"text-align:center;cursor:default;background-color:white;font-weight:bold;width:100%;height:100%;"}),ce=Object(W.a)("div",{target:"e104riyz2"})("text-align:center;background-color:",(function(e){return e.selected?"dimgray":"white"}),";color:",(function(e){return e.selected?"white":void 0}),";cursor:pointer;:hover{background-color:lightgray;}font-weight:bold;width:100%;height:100%;"),oe=Object(W.a)("div",{target:"e104riyz3"})("text-align:center;background-color:",(function(e){return e.selected?"dimgray":"white"}),";color:",(function(e){return e.selected?"white":void 0}),";cursor:pointer;:hover{background-color:lightgray;}font-weight:bold;width:100%;height:100%;"),le=Object(W.a)("div",{target:"e104riyz4"})("text-align:end;background-color:",(function(e){return e.selected?"dimgray":"white"}),";color:",(function(e){return e.selected?"white":void 0}),";cursor:pointer;:hover{background-color:lightgray;}width:100%;height:100%;"),ae=Object(y.b)((function(e){var t=e.placement,r=e.killPoint,i=Object(n.useContext)(je),c=E({placement:t,killPoint:r,tier:i.tier,lostForgiveness:i.lostForgiveness}),o=Object(k.b)((function(){i.placement=t,i.killPoint=r}));return Object(m.b)(le,{selected:t==i.placement&&r==i.killPoint,onClick:o,children:c})})),se=Object(y.b)((function(e){var t=e.placement,r=Object(n.useContext)(je),i=Object(k.b)((function(){r.placement=t}));return Object(m.b)(ce,{onClick:i,selected:t==r.placement,children:t})})),de=Object(y.b)((function(e){var t=e.killPoint,r=Object(n.useContext)(je),i=Object(k.b)((function(){r.killPoint=t}));return Object(m.b)(oe,{onClick:i,selected:t==r.killPoint,children:t})}));function be(e){Object($.a)(e);var t=Object(v.a)().t,r=document.body.clientWidth;return Object(m.b)(re,{viewport:[r,532],borderColor:"lightgray",xs:B(20,1),ys:B(13,0),xCaption:function(e){return Object(m.b)(ne,Object(M.a)(Object(M.a)({},e),{},{children:t("Placement")}))},yCaption:function(e){return Object(m.b)(ie,Object(M.a)(Object(M.a)({},e),{},{children:t("Kill/Assist Points")}))},xHeader:function(e){return Object(m.b)(se,{placement:e})},yHeader:function(e){return Object(m.b)(de,{killPoint:e})},cell:function(e,t){return Object(m.b)(ae,{placement:e,killPoint:t})}})}function ue(e){var t=Object(v.a)().t,r=E(e),n=Object(S.a)(g)?Z:be;return Object(m.c)("div",{css:{marginTop:24},children:[Object(m.c)("div",{children:[t("Earned RP")+": ",r]}),Object(m.b)(D,Object(M.a)({},e)),Object(m.b)("div",{css:{marginTop:24},children:Object(m.b)(n,Object(M.a)({},e))})]})}function he(e,t){return Object(n.useMemo)((function(){return{get:function(){return e[t]},set:function(r){e[t]=r}}}),[])}var je=Object(n.createContext)(null);function Oe(){var e=Object(n.useMemo)((function(){return Object(k.f)({placement:20,killPoint:0,tier:j[0],lostForgiveness:!1})}),[]),t=he(e,"placement"),r=he(e,"killPoint"),i=he(e,"tier"),c=he(e,"lostForgiveness");return Object(m.c)(je.Provider,{value:e,children:[Object(m.b)(w,{}),Object(m.b)(z,{placement:t,killPoint:r,tier:i,lostForgiveness:c}),Object(m.b)(y.a,{children:function(){return Object(m.b)(ue,{placement:t.get(),killPoint:r.get(),tier:i.get(),lostForgiveness:c.get()})}})]})}function ve(){return Object(R.jsx)(Oe,{})}var fe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,57)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(ve,{})}),document.getElementById("root")),fe()}},[[55,1,2]]]);
//# sourceMappingURL=main.fcacc959.chunk.js.map