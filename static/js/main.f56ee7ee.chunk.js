(this.webpackJsonpapextools=this.webpackJsonpapextools||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(4),l=n.n(c),s=n(2),o=n(0);function a(e){var t=e.label,n=Object(s.a)(e.current,2),r=n[0],i=n[1];return Object(o.jsxs)("label",{children:[t," ",Object(o.jsx)("input",{type:"checkbox",checked:r,onChange:function(){return i(!r)}})]})}function u(e){var t=e.onClick,n=e.selected,r=e.label;return Object(o.jsx)("button",{onClick:t,style:{borderWidth:n?1:0},children:r})}function j(e){var t=e.label,n=e.selected,r=e.list,i=Object(s.a)(n,2),c=i[0],l=i[1];return Object(o.jsxs)("label",{children:[t," ",Object(o.jsx)("div",{children:r.map((function(e){return Object(o.jsx)(u,{onClick:function(){l(c===e?null:e)},selected:c===e,label:null!==e&&void 0!==e?e:"---"})}))})]})}var b=["Bronze","Silver","Gold","Platinum","Diamond","Master","Apex Predator"],d={Bronze:0,Silver:12,Gold:24,Platinum:36,Diamond:48,Master:60,"Apex Predator":60};function v(e){var t=function(e){var t=e.placement,n=e.killPoint,r=function(e){var t;return(null!==(t={1:15,2:11,3:8,4:5,5:5,6:1,7:1,8:1,9:1,10:1}[e])&&void 0!==t?t:0)+10}(t);return Math.min(r*n,125)}(e)+function(e){var t;return null!==(t={1:125,2:95,3:70,4:55,5:45,6:30,7:20,8:20,9:10,10:10,11:5,12:5,13:5}[e])&&void 0!==t?t:0}(e.placement)-d[e.tier];return e.lostForgiveness?Math.max(0,t):t}function f(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n}function O(e,t,n){var r=Object(s.a)(e,2),i=r[0],c=r[1];return[t(i),function(e){c(e instanceof Function?function(r){return n(e(t(r)))}:n(e))}]}function p(e){var t=e.placement,n=e.killpoint,r=e.tier,i=e.lostForgiveness,c=O(t,(function(e){return String(e)}),(function(e){return parseInt(e,10)})),l=O(n,(function(e){return String(e)}),(function(e){return parseInt(e,10)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(j,{selected:c,label:"Placement",list:f(1,20).map((function(e){return String(e)}))})}),Object(o.jsx)("div",{children:Object(o.jsx)(j,{selected:l,label:"Kill/Assist Point",list:f(0,20).map((function(e){return String(e)}))})}),Object(o.jsx)("div",{children:Object(o.jsx)(j,{selected:r,label:"Tier",list:b})}),Object(o.jsx)("div",{children:Object(o.jsx)(a,{current:i,label:"Lost Forgiveness"})})]})}function x(e){var t=v({placement:e.placement,killPoint:e.killpoint,tier:e.tier,lostForgiveness:e.lostForgiveness});return Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:["Total RP: ",t]})})}var h=function(){var e=Object(r.useState)(1),t=Object(r.useState)(0),n=Object(r.useState)(b[0]),i=Object(r.useState)(!1);return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{placement:e,killpoint:t,tier:n,lostForgiveness:i}),Object(o.jsx)(x,{placement:e[0],killpoint:t[0],tier:n[0],lostForgiveness:i[0]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),r(e),i(e),c(e),l(e)}))};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()}},[[10,1,2]]]);
//# sourceMappingURL=main.f56ee7ee.chunk.js.map