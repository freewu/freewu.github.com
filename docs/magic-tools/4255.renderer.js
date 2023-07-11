"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[4255,9145],{38819:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(1413),i=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var o=n(30076),s=function(e,t){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const l=i.forwardRef(s)},54549:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(1413),i=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"};var o=n(30076),s=function(e,t){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const l=i.forwardRef(s)},68855:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(1413),i=n(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var o=n(30076),s=function(e,t){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};const l=i.forwardRef(s)},74443:(e,t,n)=>{n.d(t,{Z:()=>l,c:()=>a});var r=n(67294),i=n(52924);const a=["xxl","xl","lg","md","sm","xs"],o=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),s=e=>{const t=e,n=[].concat(a).reverse();return n.forEach(((e,r)=>{const i=e.toUpperCase(),a=`screen${i}Min`,o=`screen${i}`;if(!(t[a]<=t[o]))throw new Error(`${a}<=${o} fails : !(${t[a]}<=${t[o]})`);if(r<n.length-1){const e=`screen${i}Max`;if(!(t[o]<=t[e]))throw new Error(`${o}<=${e} fails : !(${t[o]}<=${t[e]})`);const a=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[a]))throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)}})),e};function l(){const[,e]=(0,i.dQ)(),t=o(s(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch:t=>(r=t,e.forEach((e=>e(r))),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],i=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},a=window.matchMedia(n);a.addListener(i),this.matchHandlers[n]={mql:a,listener:i},i(a)}))},responsiveMap:t}}),[e])}},65460:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(94184),i=n.n(r),a=n(67294),o=n(53124),s=n(14747),l=n(67968),c=n(45503);const d=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:i}=e;return{[t]:Object.assign(Object.assign({},(0,s.Wf)(e)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},u=(0,l.Z)("Divider",(e=>{const t=(0,c.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(t)]}),{sizePaddingEdgeHorizontal:0});var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const f=e=>{const{getPrefixCls:t,direction:n}=a.useContext(o.E_),{prefixCls:r,type:s="horizontal",orientation:l="center",orientationMargin:c,className:d,rootClassName:f,children:g,dashed:p,plain:m}=e,x=h(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),$=t("divider",r),[b,w]=u($),v=l.length>0?`-${l}`:l,y=!!g,j="left"===l&&null!=c,S="right"===l&&null!=c,C=i()($,w,`${$}-${s}`,{[`${$}-with-text`]:y,[`${$}-with-text${v}`]:y,[`${$}-dashed`]:!!p,[`${$}-plain`]:!!m,[`${$}-rtl`]:"rtl"===n,[`${$}-no-default-orientation-margin-left`]:j,[`${$}-no-default-orientation-margin-right`]:S},d,f),O=Object.assign(Object.assign({},j&&{marginLeft:c}),S&&{marginRight:c});return b(a.createElement("div",Object.assign({className:C},x,{role:"separator"}),g&&"vertical"!==s&&a.createElement("span",{className:`${$}-inner-text`,style:O},g)))}},99134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({})},92820:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(94184),i=n.n(r),a=n(67294),o=n(53124),s=n(33732),l=n(74443),c=n(99134),d=n(6999),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function h(e,t){const[n,r]=a.useState("string"==typeof e?e:"");return a.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<l.c.length;n++){const i=l.c[n];if(!t[i])continue;const a=e[i];if(void 0!==a)return void r(a)}})()}),[JSON.stringify(e),t]),n}const f=a.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:f,className:g,style:p,children:m,gutter:x=0,wrap:$}=e,b=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:w,direction:v}=a.useContext(o.E_),[y,j]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[S,C]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),O=h(f,S),E=h(r,S),Z=(0,s.Z)(),z=a.useRef(x),M=(0,l.Z)();a.useEffect((()=>{const e=M.subscribe((e=>{C(e);const t=z.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&j(e)}));return()=>M.unsubscribe(e)}),[]);const k=w("row",n),[L,I]=(0,d.V)(k),T=(()=>{const e=[void 0,void 0];return(Array.isArray(x)?x:[x,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<l.c.length;r++){const i=l.c[r];if(y[i]&&void 0!==t[i]){e[n]=t[i];break}}else e[n]=t})),e})(),G=i()(k,{[`${k}-no-wrap`]:!1===$,[`${k}-${E}`]:E,[`${k}-${O}`]:O,[`${k}-rtl`]:"rtl"===v},g,I),H={},P=null!=T[0]&&T[0]>0?T[0]/-2:void 0,W=null!=T[1]&&T[1]>0?T[1]/-2:void 0;P&&(H.marginLeft=P,H.marginRight=P),Z?[,H.rowGap]=T:W&&(H.marginTop=W,H.marginBottom=W);const[B,D]=T,R=a.useMemo((()=>({gutter:[B,D],wrap:$,supportFlexGap:Z})),[B,D,$,Z]);return L(a.createElement(c.Z.Provider,{value:R},a.createElement("div",Object.assign({},b,{className:G,style:Object.assign(Object.assign({},H),p),ref:t}),m)))}))},6999:(e,t,n)=>{n.d(t,{V:()=>l,c:()=>c});var r=n(67968),i=n(45503);const a=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},o=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},s=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,i={};for(let e=r;e>=0;e--)0===e?(i[`${n}${t}-${e}`]={display:"none"},i[`${n}-push-${e}`]={insetInlineStart:"auto"},i[`${n}-pull-${e}`]={insetInlineEnd:"auto"},i[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},i[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},i[`${n}${t}-offset-${e}`]={marginInlineStart:0},i[`${n}${t}-order-${e}`]={order:0}):(i[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/r*100}%`,maxWidth:e/r*100+"%"},i[`${n}${t}-push-${e}`]={insetInlineStart:e/r*100+"%"},i[`${n}${t}-pull-${e}`]={insetInlineEnd:e/r*100+"%"},i[`${n}${t}-offset-${e}`]={marginInlineStart:e/r*100+"%"},i[`${n}${t}-order-${e}`]={order:e});return i})(e,t),l=(0,r.Z)("Grid",(e=>[a(e)])),c=(0,r.Z)("Grid",(e=>{const t=(0,i.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[o(t),s(t,""),s(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},s(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},71230:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(92820).Z},79145:(e,t,n)=>{n.r(t),n.d(t,{typeList:()=>r});const r=[{value:"img",label:"IMG 标签"},{value:"css",label:"CSS"},{value:"base64",label:"Base64"}]},7828:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(85893),i=n(41249),a=n(84466),o=n(71230),s=n(19650),l=n(16117),c=n(17180),d=n(65460),u=n(67294),h=n(79145),f=n(5929);const{TextArea:g}=i.default,p=()=>{const e=()=>window.innerHeight-400+"px",t=()=>window.innerWidth-260+"px",[n,p]=(0,u.useState)(e()),[m,x]=(0,u.useState)(t());window.addEventListener("resize",(0,f.Ds)((()=>{p(e()),x(t())}),100));const[$,b]=(0,u.useState)(""),[w,v]=(0,u.useState)("img"),[y,j]=(0,u.useState)(""),[S,C]=(0,u.useState)(""),[O,E]=(0,u.useState)(""),[Z,z]=(0,u.useState)(""),[M,k]=(0,u.useState)(!0),[L,I]=a.ZP.useMessage(),T=e=>{""!=y&&((0,f.TE)(y),L.success("复制到粘贴板成功！！！"))},G=(e,t,n,r,i,a)=>{if(""!==e)switch(t){case"base64":return j(a?"data:image/png;base64,"+e:e);case"css":return j(`url("${e}");`);case"img":let t="";return""!=n&&(t+=`width="${n}" `),""!=r&&(t+=`heigth="${r}" `),""!=i&&(t+=`alt="${i}"`),j(`<img ${t.trim()} src="${e}" />`)}};return(0,r.jsxs)(r.Fragment,{children:[I,(0,r.jsx)(g,{readOnly:!0,style:{margin:"5px 0 5px 0"},showCount:!0,onChange:e=>{b(e.target.value)},value:y,placeholder:"拖拽要生成 Base64 编码的图片文件到框内",autoSize:{minRows:8,maxRows:8},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();const t=e.dataTransfer.files;if(0===t.length)return;const n=new FileReader;n.onerror=e=>{console.log(e)},n.onload=()=>{b(n.result),G(n.result,w,S,O,Z,M)},n.readAsDataURL(t[0])},title:"点击复制内容到粘贴板",onClick:T}),(0,r.jsx)(o.Z,{style:{marginTop:5},children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.ZP.Group,{optionType:"button",buttonStyle:"solid",options:h.typeList,onChange:e=>{v(e.target.value),G($,e.target.value,S,O,Z,M)},value:w}),(0,r.jsx)(c.ZP,{onClick:()=>{b(""),j("")},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"})]})}),(0,r.jsx)(o.Z,{style:{marginTop:12},children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)("label",{children:"宽度:"}),(0,r.jsx)(i.default,{disabled:"img"!==w,placeholder:"width",allowClear:!0,maxLength:4,style:{width:120},onChange:e=>{const t=e.target.value.trim();(/^\d+$/.test(t)||""===t)&&(C(t),G($,w,t,O,Z,M))},value:S}),(0,r.jsx)("label",{children:"高度:"}),(0,r.jsx)(i.default,{disabled:"img"!==w,placeholder:"height",allowClear:!0,maxLength:4,style:{width:120},onChange:e=>{const t=e.target.value.trim();(/^\d+$/.test(t)||""===t)&&(E(t),G($,w,S,t,Z,M))},value:O}),(0,r.jsx)("label",{children:"说明:"}),(0,r.jsx)(i.default,{disabled:"img"!==w,placeholder:"alt",allowClear:!0,maxLength:50,style:{width:420},onChange:e=>{const t=e.target.value.trim();z(t),G($,w,S,O,t,M)},value:Z})]})}),(0,r.jsx)(d.Z,{dashed:!0,plain:!0,children:"预览"}),""!==$.trim()?(0,r.jsx)("div",{style:{width:m,height:n},className:"preview",onClick:T,title:"点击复制内容到粘贴板",children:(0,r.jsx)("img",{src:$,width:S,height:O,alt:Z})}):null]})}},5929:(e,t,n)=>{async function r(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function i(e,t){let n=null,r=null,i=null;function a(){i=+new Date,i-n<t?r=setTimeout(a,t):(e(),r=null),n=i}return function(){n=+new Date,r||(r=setTimeout(a,t))}}function a(e,t=4,n=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+n)}n.d(t,{Ds:()=>i,Jg:()=>a,TE:()=>r})}}]);
//# sourceMappingURL=4255.renderer.js.map