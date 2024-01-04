"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[7032,6465,7521],{38819:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),s=a(67294);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var r=a(30076),c=function(e,t){return s.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};const o=s.forwardRef(c)},68855:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),s=a(67294);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var r=a(30076),c=function(e,t){return s.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};const o=s.forwardRef(c)},36465:(e,t,a)=>{a.r(t),a.d(t,{codeList:()=>l});const l=["HEX","Base64"]},7521:(e,t,a)=>{a.r(t),a.d(t,{genPassphraseLimitLength:()=>g,getDefaultCode:()=>s,getDefaultIV:()=>c,getDefaultPassphrase:()=>i,setDefaultCode:()=>n,setDefaultIV:()=>o,setDefaultPassphrase:()=>h});const l="rabbit-crypto:default-code";function s(){const e=localStorage.getItem(l);return null===e?"Base64":e}function n(e){localStorage.setItem(l,e)}const r="rabbit-crypto:default-iv";function c(){const e=localStorage.getItem(r);return null===e?"":e}function o(e){localStorage.setItem(r,e)}const u="rabbit-crypto:default-passphrase";function i(){const e=localStorage.getItem(u);return null===e?"":e}function h(e){localStorage.setItem(u,e)}const g=e=>16},89828:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(85893),s=a(65460),n=a(77004),r=a(15915),c=a(19650),o=a(41249),u=a(67294),i=a(85710),h=a(36465),g=a(7521);const f=()=>{const[e,t]=(0,u.useState)((0,g.getDefaultCode)()),[a,f]=(0,u.useState)((0,g.getDefaultIV)()),[d,m]=(0,u.useState)(""),[p,v]=(0,u.useState)((0,g.getDefaultPassphrase)()),[x,b]=(0,u.useState)(""),[Z,I]=(0,u.useState)((0,g.genPassphraseLimitLength)((0,g.getDefaultPassphrase)().length));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{orientation:"left",plain:!0,children:"Rabbit 加解密"}),(0,l.jsx)(n.Z.Item,{label:"默认编码",children:(0,l.jsx)(r.Z,{value:e,style:{width:240},onChange:e=>{t(e),(0,g.setDefaultCode)(e)},options:(0,i.c)(h.codeList)})}),(0,l.jsx)(n.Z.Item,{label:"默认偏移量(IV)",children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(o.default,{status:d,maxLength:8,allowClear:!0,style:{width:"520px"},onChange:e=>{const t=e.target.value;f(t),0===t.length||8==t.length?((0,g.setDefaultIV)(t),m("")):m("error")},value:a}),a.length?a.length+" / 8":null]})}),(0,l.jsx)(n.Z.Item,{label:"默认密钥",children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(o.default,{status:x,maxLength:16,allowClear:!0,style:{width:"520px"},onChange:e=>{const t=e.target.value.trim();v(t),0===t.length||16==t.length?((0,g.setDefaultPassphrase)(t),b("")):b("error"),I((0,g.genPassphraseLimitLength)(t.length))},value:p}),p.length?p.length+" / 16":null]})})]})}},85710:(e,t,a)=>{function l(e){return e.map(((e,t)=>({label:e,value:e})))}a.d(t,{c:()=>l})}}]);
//# sourceMappingURL=7032.renderer.js.map