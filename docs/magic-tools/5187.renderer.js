(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[5187,9330,5577],{21059:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(1413),r=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};var o=n(30076),c=function(e,t){return r.createElement(o.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:a}))};const l=r.forwardRef(c)},26139:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(1413),r=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};var o=n(30076),c=function(e,t){return r.createElement(o.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:a}))};const l=r.forwardRef(c)},74443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,c:()=>a});var s=n(67294),r=n(52924);const a=["xxl","xl","lg","md","sm","xs"],o=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),c=e=>{const t=e,n=[].concat(a).reverse();return n.forEach(((e,s)=>{const r=e.toUpperCase(),a=`screen${r}Min`,o=`screen${r}`;if(!(t[a]<=t[o]))throw new Error(`${a}<=${o} fails : !(${t[a]}<=${t[o]})`);if(s<n.length-1){const e=`screen${r}Max`;if(!(t[o]<=t[e]))throw new Error(`${o}<=${e} fails : !(${t[o]}<=${t[e]})`);const a=`screen${n[s+1].toUpperCase()}Min`;if(!(t[e]<=t[a]))throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)}})),e};function l(){const[,e]=(0,r.dQ)(),t=o(c(e));return s.useMemo((()=>{const e=new Map;let n=-1,s={};return{matchHandlers:{},dispatch:t=>(s=t,e.forEach((e=>e(s))),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(s),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],s=this.matchHandlers[n];null==s||s.mql.removeListener(null==s?void 0:s.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],r=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},s),{[e]:n}))},a=window.matchMedia(n);a.addListener(r),this.matchHandlers[n]={mql:a,listener:r},r(a)}))},responsiveMap:t}}),[e])}},99134:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=(0,n(67294).createContext)({})},92820:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var s=n(94184),r=n.n(s),a=n(67294),o=n(53124),c=n(33732),l=n(74443),i=n(99134),u=n(6999),d=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};function f(e,t){const[n,s]=a.useState("string"==typeof e?e:"");return a.useEffect((()=>{(()=>{if("string"==typeof e&&s(e),"object"==typeof e)for(let n=0;n<l.c.length;n++){const r=l.c[n];if(!t[r])continue;const a=e[r];if(void 0!==a)return void s(a)}})()}),[JSON.stringify(e),t]),n}const g=a.forwardRef(((e,t)=>{const{prefixCls:n,justify:s,align:g,className:p,style:h,children:m,gutter:x=0,wrap:y}=e,C=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:$,direction:w}=a.useContext(o.E_),[v,b]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[j,S]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),Z=f(g,j),E=f(s,j),D=(0,c.Z)(),I=a.useRef(x),P=(0,l.Z)();a.useEffect((()=>{const e=P.subscribe((e=>{S(e);const t=I.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&b(e)}));return()=>P.unsubscribe(e)}),[]);const L=$("row",n),[M,O]=(0,u.V)(L),B=(()=>{const e=[void 0,void 0];return(Array.isArray(x)?x:[x,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let s=0;s<l.c.length;s++){const r=l.c[s];if(v[r]&&void 0!==t[r]){e[n]=t[r];break}}else e[n]=t})),e})(),k=r()(L,{[`${L}-no-wrap`]:!1===y,[`${L}-${E}`]:E,[`${L}-${Z}`]:Z,[`${L}-rtl`]:"rtl"===w},p,O),T={},R=null!=B[0]&&B[0]>0?B[0]/-2:void 0,A=null!=B[1]&&B[1]>0?B[1]/-2:void 0;R&&(T.marginLeft=R,T.marginRight=R),D?[,T.rowGap]=B:A&&(T.marginTop=A,T.marginBottom=A);const[X,V]=B,F=a.useMemo((()=>({gutter:[X,V],wrap:y,supportFlexGap:D})),[X,V,y,D]);return M(a.createElement(i.Z.Provider,{value:F},a.createElement("div",Object.assign({},C,{className:k,style:Object.assign(Object.assign({},T),h),ref:t}),m)))}))},6999:(e,t,n)=>{"use strict";n.d(t,{V:()=>l,c:()=>i});var s=n(67968),r=n(45503);const a=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},o=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},c=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:s}=e,r={};for(let e=s;e>=0;e--)0===e?(r[`${n}${t}-${e}`]={display:"none"},r[`${n}-push-${e}`]={insetInlineStart:"auto"},r[`${n}-pull-${e}`]={insetInlineEnd:"auto"},r[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},r[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},r[`${n}${t}-offset-${e}`]={marginInlineStart:0},r[`${n}${t}-order-${e}`]={order:0}):(r[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/s*100}%`,maxWidth:e/s*100+"%"},r[`${n}${t}-push-${e}`]={insetInlineStart:e/s*100+"%"},r[`${n}${t}-pull-${e}`]={insetInlineEnd:e/s*100+"%"},r[`${n}${t}-offset-${e}`]={marginInlineStart:e/s*100+"%"},r[`${n}${t}-order-${e}`]={order:e});return r})(e,t),l=(0,s.Z)("Grid",(e=>[a(e)])),i=(0,s.Z)("Grid",(e=>{const t=(0,r.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[o(t),c(t,""),c(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},c(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},71230:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=n(92820).Z},89330:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capacityList:()=>o,codeList:()=>a,modeList:()=>s,paddingList:()=>r});const s=["CBC","CFB","CTR","OFB","ECB"],r=["Pkcs7","AnsiX923","Iso10126","Iso97971","ZeroPadding"],a=["HEX","Base64"],o=[128,192,256]},60263:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var s=n(85893),r=n(41249),a=n(84466),o=n(71230),c=n(19650),l=n(15915),i=n(17180),u=n(21059),d=n(26139),f=n(67294),g=n(5929),p=n(67932),h=n(85710),m=n(81354),x=n(89330),y=n(73661);const{TextArea:C}=r.default,$=()=>{const[e,t]=a.ZP.useMessage(),[n,$]=(0,f.useState)(""),[w,v]=(0,f.useState)(""),[b,j]=(0,f.useState)((0,y.getDefaultMode)()),[S,Z]=(0,f.useState)((0,y.getDefaultPadding)()),[E,D]=(0,f.useState)((0,y.getDefaultCode)()),[I,P]=(0,f.useState)((0,y.getDefaultIV)()),[L,M]=(0,f.useState)((0,y.getDefaultPassphrase)()),[O,B]=(0,f.useState)((0,y.genCapacity)((0,y.getDefaultPassphrase)().length)),[k,T]=(0,f.useState)("ECB"==(0,y.getDefaultMode)()),[R,A]=(0,f.useState)(16!==(0,y.getDefaultIV)().length?"error":""),[X,V]=(0,f.useState)((()=>{const e=(0,y.getDefaultPassphrase)();return(0,y.genCapacity)(e.length)/8===e.length?"":"error"})()),F=e=>""!==e.trim()&&(""===X&&""===R),U=t=>{(0,g.TE)(t.target.value),e.success("复制到粘贴板成功！！！")};return(0,s.jsxs)("div",{children:[t,(0,s.jsx)(o.Z,{style:{marginTop:"5px"},children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("label",{children:"模式:"}),(0,s.jsx)(l.Z,{value:b,style:{width:120},onChange:e=>{j(e),T("ECB"==e)},options:(0,h.c)(x.modeList)}),(0,s.jsx)("label",{children:"填充:"}),(0,s.jsx)(l.Z,{value:S,style:{width:120},onChange:e=>{Z(e)},options:(0,h.c)(x.paddingList)}),(0,s.jsx)("label",{children:"偏移量(IV):"}),(0,s.jsx)(r.default,{allowClear:!0,status:R,maxLength:16,style:{width:320},disabled:k,onChange:e=>{const t=e.target.value;P(t),16==t.length?A(""):A("error")},value:I}),I.length," / ",16]})}),(0,s.jsx)(o.Z,{style:{marginTop:"5px"},children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("label",{children:"编码:"}),(0,s.jsx)(l.Z,{value:E,style:{width:120},onChange:e=>{D(e)},options:(0,h.c)(x.codeList)}),(0,s.jsx)("label",{children:"位数:"}),(0,s.jsx)(l.Z,{value:O,style:{width:120},onChange:e=>{B(e),e/8==L.length?V(""):V("error")},options:(0,h.c)(x.capacityList)}),(0,s.jsx)("label",{children:"密钥:"}),(0,s.jsx)(r.default,{allowClear:!0,maxLength:32,status:X,style:{width:355},onChange:e=>{const t=e.target.value.trim();M(t),V(t.length==O/8?"":"error")},value:L}),L.length," / ",O/8]})}),(0,s.jsx)(C,{style:{margin:"5px 0 5px 0"},onDoubleClick:U,onChange:e=>{$(e.target.value)},title:"双击复制内容到粘贴板",value:n,placeholder:"输入需要进行 AES 加密的内容  或 拖拽文件到框内打开",autoSize:{minRows:8,maxRows:8},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,p.Z)(e.dataTransfer.files,$)}}),(0,s.jsx)(i.ZP,{onClick:()=>{if(F(n))try{const e=m.AES.encrypt(n,m.enc.Utf8.parse(L),{mode:(0,y.getMode)(b),padding:(0,y.getPadding)(S),iv:"ECB"===b?m.enc.Utf8.parse(""):m.enc.Utf8.parse(I)});switch(E){case"Base64":return v(m.enc.Base64.stringify(e.ciphertext));case"HEX":return v(m.enc.Hex.stringify(e.ciphertext))}}catch(e){console.log(e)}},style:{backgroundColor:"#007bff",color:"#fff"},icon:(0,s.jsx)(u.Z,{}),children:"加密"}),(0,s.jsx)(i.ZP,{onClick:()=>{if(F(w))try{const t=m.AES.decrypt("Base64"===E?w:m.enc.Base64.stringify(m.enc.Hex.parse(w)),m.enc.Utf8.parse(L),{mode:(0,y.getMode)(b),padding:(0,y.getPadding)(S),iv:"ECB"===b?m.enc.Utf8.parse(""):m.enc.Utf8.parse(I)}).toString(m.enc.Utf8);return""===t&&e.error("解密失败"),$(t)}catch(e){console.log(e)}},style:{backgroundColor:"#28a745",color:"#fff"},icon:(0,s.jsx)(d.Z,{}),children:"解密"}),(0,s.jsx)(i.ZP,{onClick:()=>($(""),void v("")),style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"}),(0,s.jsx)(C,{style:{margin:"5px 0 5px 0"},onDoubleClick:U,onChange:e=>{v(e.target.value)},title:"双击复制内容到粘贴板",value:w,placeholder:"输入需要进行 AES 解密的内容  或 拖拽文件到框内打开",autoSize:{minRows:8,maxRows:8},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,p.Z)(e.dataTransfer.files,v)}})]})}},73661:(e,t,n)=>{"use strict";n.r(t),n.d(t,{genCapacity:()=>$,genPassphraseLimitLength:()=>C,getDefaultCode:()=>d,getDefaultIV:()=>p,getDefaultMode:()=>a,getDefaultPadding:()=>l,getDefaultPassphrase:()=>x,getMode:()=>w,getPadding:()=>v,setDefaultCode:()=>f,setDefaultIV:()=>h,setDefaultMode:()=>o,setDefaultPadding:()=>i,setDefaultPassphrase:()=>y});var s=n(81354);const r="aes-crypto:default-mode";function a(){const e=localStorage.getItem(r);return null===e?"CBC":e}function o(e){localStorage.setItem(r,e)}const c="aes-crypto:default-padding";function l(){const e=localStorage.getItem(c);return null===e?"Pkcs7":e}function i(e){localStorage.setItem(c,e)}const u="aes-crypto:default-code";function d(){const e=localStorage.getItem(u);return null===e?"Base64":e}function f(e){localStorage.setItem(u,e)}const g="aes-crypto:default-iv";function p(){const e=localStorage.getItem(g);return null===e?"":e}function h(e){localStorage.setItem(g,e)}const m="aes-crypto:default-passphrase";function x(){const e=localStorage.getItem(m);return null===e?"":e}function y(e){localStorage.setItem(m,e)}const C=e=>e>=30?32:e>=20?24:16,$=e=>24==e?192:32==e?256:128,w=e=>{switch(e){case"CFB":return s.mode.CFB;case"OFB":return s.mode.OFB;case"ECB":return s.mode.ECB;case"CTR":return s.mode.CTR;case"CTRGladman":return s.mode.CTRGladman}return s.mode.CBC},v=e=>{switch(e){case"AnsiX923":return s.pad.AnsiX923;case"Iso10126":return s.pad.Iso10126;case"Iso97971":return s.pad.Iso97971;case"ZeroPadding":return s.pad.ZeroPadding;case"NoPadding":return s.pad.NoPadding}return s.pad.Pkcs7}},85710:(e,t,n)=>{"use strict";function s(e){return e.map(((e,t)=>({label:e,value:e})))}n.d(t,{c:()=>s})},67932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=(e,t)=>{if(0===e.length)return;const n=new FileReader;n.onerror=e=>{console.log(e)},n.onload=()=>{t(n.result)},n.readAsText(e[0])}},5929:(e,t,n)=>{"use strict";async function s(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function r(e,t){let n=null,s=null,r=null;function a(){r=+new Date,r-n<t?s=setTimeout(a,t):(e(),s=null),n=r}return function(){n=+new Date,s||(s=setTimeout(a,t))}}function a(e,t=4,n=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+n)}n.d(t,{Ds:()=>r,Jg:()=>a,TE:()=>s})},42480:()=>{}}]);
//# sourceMappingURL=5187.renderer.js.map