(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[4915,4088,6471],{21059:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(1413),s=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};var o=n(30076),c=function(e,t){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const l=s.forwardRef(c)},26139:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(1413),s=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};var o=n(30076),c=function(e,t){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const l=s.forwardRef(c)},74443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,c:()=>a});var r=n(67294),s=n(52924);const a=["xxl","xl","lg","md","sm","xs"],o=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),c=e=>{const t=e,n=[].concat(a).reverse();return n.forEach(((e,r)=>{const s=e.toUpperCase(),a=`screen${s}Min`,o=`screen${s}`;if(!(t[a]<=t[o]))throw new Error(`${a}<=${o} fails : !(${t[a]}<=${t[o]})`);if(r<n.length-1){const e=`screen${s}Max`;if(!(t[o]<=t[e]))throw new Error(`${o}<=${e} fails : !(${t[o]}<=${t[e]})`);const a=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[a]))throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)}})),e};function l(){const[,e]=(0,s.dQ)(),t=o(c(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch:t=>(r=t,e.forEach((e=>e(r))),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],s=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},a=window.matchMedia(n);a.addListener(s),this.matchHandlers[n]={mql:a,listener:s},s(a)}))},responsiveMap:t}}),[e])}},99134:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({})},92820:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(94184),s=n.n(r),a=n(67294),o=n(53124),c=n(33732),l=n(74443),i=n(99134),u=n(6999),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function f(e,t){const[n,r]=a.useState("string"==typeof e?e:"");return a.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<l.c.length;n++){const s=l.c[n];if(!t[s])continue;const a=e[s];if(void 0!==a)return void r(a)}})()}),[JSON.stringify(e),t]),n}const g=a.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:g,className:p,style:m,children:h,gutter:x=0,wrap:y}=e,$=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:w,direction:C}=a.useContext(o.E_),[v,b]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[j,S]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),D=f(g,j),Z=f(r,j),E=(0,c.Z)(),I=a.useRef(x),M=(0,l.Z)();a.useEffect((()=>{const e=M.subscribe((e=>{S(e);const t=I.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&b(e)}));return()=>M.unsubscribe(e)}),[]);const P=w("row",n),[L,O]=(0,u.V)(P),B=(()=>{const e=[void 0,void 0];return(Array.isArray(x)?x:[x,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<l.c.length;r++){const s=l.c[r];if(v[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),k=s()(P,{[`${P}-no-wrap`]:!1===y,[`${P}-${Z}`]:Z,[`${P}-${D}`]:D,[`${P}-rtl`]:"rtl"===C},p,O),T={},R=null!=B[0]&&B[0]>0?B[0]/-2:void 0,X=null!=B[1]&&B[1]>0?B[1]/-2:void 0;R&&(T.marginLeft=R,T.marginRight=R),E?[,T.rowGap]=B:X&&(T.marginTop=X,T.marginBottom=X);const[A,V]=B,F=a.useMemo((()=>({gutter:[A,V],wrap:y,supportFlexGap:E})),[A,V,y,E]);return L(a.createElement(i.Z.Provider,{value:F},a.createElement("div",Object.assign({},$,{className:k,style:Object.assign(Object.assign({},T),m),ref:t}),h)))}))},6999:(e,t,n)=>{"use strict";n.d(t,{V:()=>l,c:()=>i});var r=n(67968),s=n(45503);const a=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},o=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},c=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,s={};for(let e=r;e>=0;e--)0===e?(s[`${n}${t}-${e}`]={display:"none"},s[`${n}-push-${e}`]={insetInlineStart:"auto"},s[`${n}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-offset-${e}`]={marginInlineStart:0},s[`${n}${t}-order-${e}`]={order:0}):(s[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/r*100}%`,maxWidth:e/r*100+"%"},s[`${n}${t}-push-${e}`]={insetInlineStart:e/r*100+"%"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:e/r*100+"%"},s[`${n}${t}-offset-${e}`]={marginInlineStart:e/r*100+"%"},s[`${n}${t}-order-${e}`]={order:e});return s})(e,t),l=(0,r.Z)("Grid",(e=>[a(e)])),i=(0,r.Z)("Grid",(e=>{const t=(0,s.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[o(t),c(t,""),c(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},c(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},71230:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(92820).Z},34088:(e,t,n)=>{"use strict";n.r(t),n.d(t,{codeList:()=>a,modeList:()=>r,paddingList:()=>s});const r=["CBC","CFB","CTR","OFB","ECB"],s=["Pkcs7","AnsiX923","Iso10126","Iso97971","ZeroPadding"],a=["HEX","Base64"]},97445:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(85893),s=n(41249),a=n(84466),o=n(71230),c=n(19650),l=n(15915),i=n(17180),u=n(21059),d=n(26139),f=n(67294),g=n(5929),p=n(67932),m=n(85710),h=n(81354),x=n(34088),y=n(12112);const{TextArea:$}=s.default,w=()=>{const[e,t]=a.ZP.useMessage(),[n,w]=(0,f.useState)(""),[C,v]=(0,f.useState)(""),[b,j]=(0,f.useState)((0,y.getDefaultMode)()),[S,D]=(0,f.useState)((0,y.getDefaultPadding)()),[Z,E]=(0,f.useState)((0,y.getDefaultCode)()),[I,M]=(0,f.useState)((0,y.getDefaultIV)()),[P,L]=(0,f.useState)((0,y.getDefaultPassphrase)()),[O,B]=(0,f.useState)("ECB"==(0,y.getDefaultMode)()),[k,T]=(0,f.useState)(8!==(0,y.getDefaultIV)().length?"error":""),[R,X]=(0,f.useState)(24===(0,y.getDefaultPassphrase)().length?"":"error"),A=e=>""!==e.trim()&&(""===R&&""===k),V=t=>{const n=t.target.value.trim();""!==n&&((0,g.TE)(n),e.success("复制到粘贴板成功！！！"))};return(0,r.jsxs)("div",{children:[t,(0,r.jsx)(o.Z,{style:{marginTop:"5px"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("label",{children:"模式:"}),(0,r.jsx)(l.Z,{value:b,style:{width:120},onChange:e=>{j(e),B("ECB"==e)},options:(0,m.c)(x.modeList)}),(0,r.jsx)("label",{children:"填充:"}),(0,r.jsx)(l.Z,{value:S,style:{width:120},onChange:e=>{D(e)},options:(0,m.c)(x.paddingList)}),(0,r.jsx)("label",{children:"偏移量(IV):"}),(0,r.jsx)(s.default,{allowClear:!0,status:k,maxLength:8,style:{width:309},disabled:O,onChange:e=>{const t=e.target.value;M(t),8==t.length?T(""):T("error")},value:I}),I.length," / ",8]})}),(0,r.jsx)(o.Z,{style:{marginTop:"5px"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("label",{children:"编码:"}),(0,r.jsx)(l.Z,{value:Z,style:{width:120},onChange:e=>{E(e)},options:(0,m.c)(x.codeList)}),(0,r.jsx)("label",{children:"密钥:"}),(0,r.jsx)(s.default,{allowClear:!0,maxLength:24,status:R,style:{width:510},onChange:e=>{const t=e.target.value.trim();L(t),24==t.length?X(""):X("error")},value:P}),P.length," / ",24]})}),(0,r.jsx)($,{style:{margin:"5px 0 5px 0"},onDoubleClick:V,onChange:e=>{w(e.target.value)},title:"双击复制内容到粘贴板",value:n,placeholder:"输入需要进行 3DES 加密的内容 或 拖拽文件到框内打开",autoSize:{minRows:8,maxRows:8},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,p.Z)(e.dataTransfer.files,w)}}),(0,r.jsx)(i.ZP,{onClick:()=>{if(A(n))try{const e=h.TripleDES.encrypt(n,h.enc.Utf8.parse(P),{mode:(0,y.getMode)(b),padding:(0,y.getPadding)(S),iv:"ECB"===b?h.enc.Utf8.parse(""):h.enc.Utf8.parse(I)});switch(Z){case"Base64":return v(h.enc.Base64.stringify(e.ciphertext));case"HEX":return v(h.enc.Hex.stringify(e.ciphertext))}}catch(e){console.log(e)}},style:{backgroundColor:"#007bff",color:"#fff"},icon:(0,r.jsx)(u.Z,{}),children:"加密"}),(0,r.jsx)(i.ZP,{onClick:()=>{if(A(C))try{const t=h.TripleDES.decrypt("Base64"===Z?C:h.enc.Base64.stringify(h.enc.Hex.parse(C)),h.enc.Utf8.parse(P),{mode:(0,y.getMode)(b),padding:(0,y.getPadding)(S),iv:"ECB"===b?h.enc.Utf8.parse(""):h.enc.Utf8.parse(I)}).toString(h.enc.Utf8);return""===t&&e.error("解密失败"),w(t)}catch(t){console.log(t),e.error("解密失败")}},style:{backgroundColor:"#28a745",color:"#fff"},icon:(0,r.jsx)(d.Z,{}),children:"解密"}),(0,r.jsx)(i.ZP,{onClick:()=>(w(""),void v("")),style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"}),(0,r.jsx)($,{style:{margin:"5px 0 5px 0"},onDoubleClick:V,onChange:e=>{v(e.target.value)},title:"双击复制内容到粘贴板",value:C,placeholder:"输入需要进行 3DES 解密的内容 或 拖拽文件到框内打开",autoSize:{minRows:8,maxRows:8},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,p.Z)(e.dataTransfer.files,v)}})]})}},12112:(e,t,n)=>{"use strict";n.r(t),n.d(t,{genPassphraseLimitLength:()=>$,getDefaultCode:()=>d,getDefaultIV:()=>p,getDefaultMode:()=>a,getDefaultPadding:()=>l,getDefaultPassphrase:()=>x,getMode:()=>w,getPadding:()=>C,setDefaultCode:()=>f,setDefaultIV:()=>m,setDefaultMode:()=>o,setDefaultPadding:()=>i,setDefaultPassphrase:()=>y});var r=n(81354);const s="3des-crypto:default-mode";function a(){const e=localStorage.getItem(s);return null===e?"CBC":e}function o(e){localStorage.setItem(s,e)}const c="3des-crypto:default-padding";function l(){const e=localStorage.getItem(c);return null===e?"Pkcs7":e}function i(e){localStorage.setItem(c,e)}const u="3des-crypto:default-code";function d(){const e=localStorage.getItem(u);return null===e?"Base64":e}function f(e){localStorage.setItem(u,e)}const g="3des-crypto:default-iv";function p(){const e=localStorage.getItem(g);return null===e?"":e}function m(e){localStorage.setItem(g,e)}const h="3des-crypto:default-passphrase";function x(){const e=localStorage.getItem(h);return null===e?"":e}function y(e){localStorage.setItem(h,e)}const $=e=>24,w=e=>{switch(e){case"CFB":return r.mode.CFB;case"OFB":return r.mode.OFB;case"ECB":return r.mode.ECB;case"CTR":return r.mode.CTR;case"CTRGladman":return r.mode.CTRGladman}return r.mode.CBC},C=e=>{switch(e){case"AnsiX923":return r.pad.AnsiX923;case"Iso10126":return r.pad.Iso10126;case"Iso97971":return r.pad.Iso97971;case"ZeroPadding":return r.pad.ZeroPadding;case"NoPadding":return r.pad.NoPadding}return r.pad.Pkcs7}},85710:(e,t,n)=>{"use strict";function r(e){return e.map(((e,t)=>({label:e,value:e})))}n.d(t,{c:()=>r})},67932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(e,t)=>{if(0===e.length)return;const n=new FileReader;n.onerror=e=>{console.log(e)},n.onload=()=>{t(n.result)},n.readAsText(e[0])}},5929:(e,t,n)=>{"use strict";async function r(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function s(e,t){let n=null,r=null,s=null;function a(){s=+new Date,s-n<t?r=setTimeout(a,t):(e(),r=null),n=s}return function(){n=+new Date,r||(r=setTimeout(a,t))}}function a(e,t=4,n=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+n)}n.d(t,{Ds:()=>s,Jg:()=>a,TE:()=>r})},42480:()=>{}}]);
//# sourceMappingURL=4915.renderer.js.map