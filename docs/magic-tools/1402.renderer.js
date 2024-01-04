"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[1402,8352,4900],{21059:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(1413),s=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};var o=n(30076),l=function(e,t){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const c=s.forwardRef(l)},26139:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(1413),s=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};var o=n(30076),l=function(e,t){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const c=s.forwardRef(l)},38819:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(1413),s=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var o=n(30076),l=function(e,t){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const c=s.forwardRef(l)},68855:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(1413),s=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var o=n(30076),l=function(e,t){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const c=s.forwardRef(l)},74443:(e,t,n)=>{n.d(t,{Z:()=>c,c:()=>a});var r=n(67294),s=n(52924);const a=["xxl","xl","lg","md","sm","xs"],o=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),l=e=>{const t=e,n=[].concat(a).reverse();return n.forEach(((e,r)=>{const s=e.toUpperCase(),a=`screen${s}Min`,o=`screen${s}`;if(!(t[a]<=t[o]))throw new Error(`${a}<=${o} fails : !(${t[a]}<=${t[o]})`);if(r<n.length-1){const e=`screen${s}Max`;if(!(t[o]<=t[e]))throw new Error(`${o}<=${e} fails : !(${t[o]}<=${t[e]})`);const a=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[a]))throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)}})),e};function c(){const[,e]=(0,s.dQ)(),t=o(l(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch:t=>(r=t,e.forEach((e=>e(r))),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],s=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},a=window.matchMedia(n);a.addListener(s),this.matchHandlers[n]={mql:a,listener:s},s(a)}))},responsiveMap:t}}),[e])}},99134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({})},92820:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(94184),s=n.n(r),a=n(67294),o=n(53124),l=n(33732),c=n(74443),i=n(99134),u=n(6999),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function d(e,t){const[n,r]=a.useState("string"==typeof e?e:"");return a.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<c.c.length;n++){const s=c.c[n];if(!t[s])continue;const a=e[s];if(void 0!==a)return void r(a)}})()}),[JSON.stringify(e),t]),n}const g=a.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:g,className:p,style:h,children:m,gutter:x=0,wrap:v}=e,$=f(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:w,direction:y}=a.useContext(o.E_),[b,j]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[C,Z]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),S=d(g,C),E=d(r,C),D=(0,l.Z)(),M=a.useRef(x),O=(0,c.Z)();a.useEffect((()=>{const e=O.subscribe((e=>{Z(e);const t=M.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&j(e)}));return()=>O.unsubscribe(e)}),[]);const L=w("row",n),[k,I]=(0,u.V)(L),R=(()=>{const e=[void 0,void 0];return(Array.isArray(x)?x:[x,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<c.c.length;r++){const s=c.c[r];if(b[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),T=s()(L,{[`${L}-no-wrap`]:!1===v,[`${L}-${E}`]:E,[`${L}-${S}`]:S,[`${L}-rtl`]:"rtl"===y},p,I),P={},z=null!=R[0]&&R[0]>0?R[0]/-2:void 0,A=null!=R[1]&&R[1]>0?R[1]/-2:void 0;z&&(P.marginLeft=z,P.marginRight=z),D?[,P.rowGap]=R:A&&(P.marginTop=A,P.marginBottom=A);const[B,X]=R,G=a.useMemo((()=>({gutter:[B,X],wrap:v,supportFlexGap:D})),[B,X,v,D]);return k(a.createElement(i.Z.Provider,{value:G},a.createElement("div",Object.assign({},$,{className:T,style:Object.assign(Object.assign({},P),h),ref:t}),m)))}))},6999:(e,t,n)=>{n.d(t,{V:()=>c,c:()=>i});var r=n(67968),s=n(45503);const a=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},o=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},l=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,s={};for(let e=r;e>=0;e--)0===e?(s[`${n}${t}-${e}`]={display:"none"},s[`${n}-push-${e}`]={insetInlineStart:"auto"},s[`${n}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-offset-${e}`]={marginInlineStart:0},s[`${n}${t}-order-${e}`]={order:0}):(s[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/r*100}%`,maxWidth:e/r*100+"%"},s[`${n}${t}-push-${e}`]={insetInlineStart:e/r*100+"%"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:e/r*100+"%"},s[`${n}${t}-offset-${e}`]={marginInlineStart:e/r*100+"%"},s[`${n}${t}-order-${e}`]={order:e});return s})(e,t),c=(0,r.Z)("Grid",(e=>[a(e)])),i=(0,r.Z)("Grid",(e=>{const t=(0,s.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[o(t),l(t,""),l(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},l(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},10110:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),s=n(76745),a=n(92113);const o=(e,t)=>{const n=r.useContext(s.Z);return[r.useMemo((()=>{var r;const s=t||a.Z[e],o=null!==(r=null==n?void 0:n[e])&&void 0!==r?r:{};return Object.assign(Object.assign({},"function"==typeof s?s():s),o||{})}),[e,t,n]),r.useMemo((()=>{const e=null==n?void 0:n.locale;return(null==n?void 0:n.exist)&&!e?a.Z.locale:e}),[n])]}},71230:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(92820).Z},78352:(e,t,n)=>{n.r(t),n.d(t,{codeList:()=>r});const r=["HEX","Base64"]},72825:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var r=n(85893),s=n(41249),a=n(84466),o=n(71230),l=n(19650),c=n(15915),i=n(17180),u=n(21059),f=n(26139),d=n(67294),g=n(5929),p=n(67932),h=n(85710),m=n(78352),x=n(4900);const{TextArea:v}=s.default,$=()=>{const[e,t]=a.ZP.useMessage(),[n,$]=(0,d.useState)(""),[w,y]=(0,d.useState)(""),[b,j]=(0,d.useState)((0,x.getDefaultCode)()),[C,Z]=(0,d.useState)((0,x.getDefaultRound)()),[S,E]=(0,d.useState)((0,x.getDefaultPassphrase)()),[D,M]=(0,d.useState)(""),[O,L]=(0,d.useState)(8===(0,x.getDefaultPassphrase)().length?"":"error"),k=e=>""!==e.trim()&&(""===O&&n.length%8==0),I=t=>{const n=t.target.value.trim();""!==n&&((0,g.TE)(n),e.success("复制到粘贴板成功！！！"))},R=e=>{const t=e.target.value.trim();E(t),16==t.length?L(""):L("error")};return(0,r.jsxs)("div",{children:[t,(0,r.jsx)(o.Z,{style:{marginTop:"5px"},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("label",{children:"编码:"}),(0,r.jsx)(c.Z,{value:b,style:{width:120},onChange:e=>{j(e)},options:(0,h.c)(m.codeList)}),(0,r.jsx)("label",{children:"循环次数:"}),(0,r.jsx)(s.default,{allowClear:!0,maxLength:3,style:{width:120},onChange:R,value:C}),(0,r.jsx)("label",{children:"密钥:"}),(0,r.jsx)(s.default,{allowClear:!0,maxLength:16,status:O,style:{width:200},onChange:R,value:S}),S.length," / ",16]})}),(0,r.jsx)(v,{showCount:!0,status:D,style:{margin:"5px 0 5px 0"},onDoubleClick:I,onChange:e=>{$(e.target.value)},title:"双击复制内容到粘贴板",value:n,placeholder:"输入需要进行 TEA 加密的内容 或 拖拽文件到框内打开",autoSize:{minRows:8,maxRows:8},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,p.Z)(e.dataTransfer.files,$)}}),(0,r.jsx)(i.ZP,{onClick:()=>{k(n)},style:{backgroundColor:"#007bff",color:"#fff"},icon:(0,r.jsx)(u.Z,{}),children:"加密"}),(0,r.jsx)(i.ZP,{onClick:()=>{k(w)},style:{backgroundColor:"#28a745",color:"#fff"},icon:(0,r.jsx)(f.Z,{}),children:"解密"}),(0,r.jsx)(i.ZP,{onClick:()=>($(""),void y("")),style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"}),(0,r.jsx)(v,{showCount:!0,style:{margin:"5px 0 5px 0"},onDoubleClick:I,onChange:e=>{y(e.target.value)},title:"双击复制内容到粘贴板",value:w,placeholder:"输入需要进行 TEA 解密的内容 或 拖拽文件到框内打开",autoSize:{minRows:8,maxRows:8},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,p.Z)(e.dataTransfer.files,y)}})]})}},4900:(e,t,n)=>{n.r(t),n.d(t,{TeaDecrypt:()=>p,TeaEncrypt:()=>g,genPassphraseLimitLength:()=>i,getDefaultCode:()=>s,getDefaultPassphrase:()=>l,getDefaultRound:()=>f,setDefaultCode:()=>a,setDefaultPassphrase:()=>c,setDefaultRound:()=>d});const r="tea-crypto:default-code";function s(){const e=localStorage.getItem(r);return null===e?"Base64":e}function a(e){localStorage.setItem(r,e)}const o="tea-crypto:default-passphrase";function l(){const e=localStorage.getItem(o);return null===e?"":e}function c(e){localStorage.setItem(o,e)}const i=e=>16,u="tea-crypto:default-round";function f(){const e=localStorage.getItem(u);return null===e?"32":e}function d(e){localStorage.setItem(u,e)}const g=(e,t,n)=>Buffer.alloc(e.length+1),p=(e,t,n)=>Buffer.alloc(e.length+1)},85710:(e,t,n)=>{function r(e){return e.map(((e,t)=>({label:e,value:e})))}n.d(t,{c:()=>r})},67932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(e,t)=>{if(0===e.length)return;const n=new FileReader;n.onerror=e=>{console.log(e)},n.onload=()=>{t(n.result)},n.readAsText(e[0])}},5929:(e,t,n)=>{async function r(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function s(e,t){let n=null,r=null,s=null;function a(){s=+new Date,s-n<t?r=setTimeout(a,t):(e(),r=null),n=s}return function(){n=+new Date,r||(r=setTimeout(a,t))}}function a(e,t=4,n=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+n)}n.d(t,{Ds:()=>s,Jg:()=>a,TE:()=>r})}}]);
//# sourceMappingURL=1402.renderer.js.map