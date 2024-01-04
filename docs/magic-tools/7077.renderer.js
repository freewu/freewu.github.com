"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[7077,5500],{21059:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(1413),r=n(67294);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};var l=n(30076),a=function(e,t){return r.createElement(l.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:i}))};const c=r.forwardRef(a)},26139:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(1413),r=n(67294);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};var l=n(30076),a=function(e,t){return r.createElement(l.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:i}))};const c=r.forwardRef(a)},65460:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(94184),r=n.n(o),i=n(67294),l=n(53124),a=n(14747),c=n(67968),s=n(45503);const d=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:o,lineWidth:r}=e;return{[t]:Object.assign(Object.assign({},(0,a.Wf)(e)),{borderBlockStart:`${r}px solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${r}px solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${r}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${r}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},h=(0,c.Z)("Divider",(e=>{const t=(0,s.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(t)]}),{sizePaddingEdgeHorizontal:0});var f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const g=e=>{const{getPrefixCls:t,direction:n}=i.useContext(l.E_),{prefixCls:o,type:a="horizontal",orientation:c="center",orientationMargin:s,className:d,rootClassName:g,children:x,dashed:u,plain:p}=e,b=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),m=t("divider",o),[j,v]=h(m),w=c.length>0?`-${c}`:c,C=!!x,$="left"===c&&null!=s,R="right"===c&&null!=s,k=r()(m,v,`${m}-${a}`,{[`${m}-with-text`]:C,[`${m}-with-text${w}`]:C,[`${m}-dashed`]:!!u,[`${m}-plain`]:!!p,[`${m}-rtl`]:"rtl"===n,[`${m}-no-default-orientation-margin-left`]:$,[`${m}-no-default-orientation-margin-right`]:R},d,g),y=Object.assign(Object.assign({},$&&{marginLeft:s}),R&&{marginRight:s});return j(i.createElement("div",Object.assign({className:k},b,{role:"separator"}),x&&"vertical"!==a&&i.createElement("span",{className:`${m}-inner-text`,style:y},x)))}},37077:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(85893),r=n(41249),i=n(84466),l=n(17180),a=n(65460),c=n(67294),s=n(21059),d=n(26139),h=n(5929),f=n(67932),g=n(25500);const{TextArea:x}=r.default,u=()=>{const[e,t]=(0,c.useState)(""),[n,r]=(0,c.useState)(""),[u,p]=(0,c.useState)(!1),[b,m]=i.ZP.useMessage(),j=e=>{const t=e.target.value.trim();""!==t&&((0,h.TE)(t),b.success("复制到粘贴板成功！！！"))},v=t=>()=>{""!=e.trim()&&r(t(e))},w=e=>()=>{if(""!=n.trim()){let o="";try{o=e(n)}catch(e){b.error("解码失败！！！")}t(o)}};return(0,o.jsxs)("div",{children:[m,(0,o.jsx)(x,{style:{margin:"5px 0 5px 0"},onDoubleClick:j,onChange:e=>{t(e.target.value)},title:"双击复制内容到粘贴板",value:e,placeholder:"输入需要进行 URL 编码的内容  或 拖拽文件到框内打开",autoSize:{minRows:5,maxRows:5},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,f.Z)(e.dataTransfer.files,t)}}),(0,o.jsx)(l.ZP,{onClick:v(encodeURIComponent),style:{backgroundColor:"#007bff",color:"#fff"},icon:(0,o.jsx)(s.Z,{}),children:"encodeURIComponent"}),(0,o.jsx)(l.ZP,{onClick:w(decodeURIComponent),style:{backgroundColor:"#28a745",color:"#fff"},icon:(0,o.jsx)(d.Z,{}),children:"decodeURIComponent"}),(0,o.jsx)(l.ZP,{onClick:v(encodeURI),style:{backgroundColor:"#007bff",color:"#fff"},icon:(0,o.jsx)(s.Z,{}),children:"encodeURI"}),(0,o.jsx)(l.ZP,{onClick:w(decodeURI),style:{backgroundColor:"#28a745",color:"#fff"},icon:(0,o.jsx)(d.Z,{}),children:"decodeURI"}),(0,o.jsx)(l.ZP,{onClick:()=>{t(""),r("")},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"}),(0,o.jsx)(x,{style:{margin:"5px 0 5px 0"},onDoubleClick:j,onChange:e=>{r(e.target.value)},title:"双击复制内容到粘贴板",value:n,placeholder:"输入需要进行 URL 解码的内容  或 拖拽文件到框内打开",autoSize:{minRows:5,maxRows:5},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,f.Z)(e.dataTransfer.files,r)}}),(0,o.jsx)(a.Z,{children:" URL 编码说明 "}),(0,o.jsx)(g.default,{})]})}},25500:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(85893);const r=()=>(0,o.jsxs)("div",{style:{overflowY:"scroll",height:"300px"},children:[(0,o.jsx)("h2",{children:"说明"}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["中文编码就是将 中文转成 unicode 编码加上 %  如:  ",(0,o.jsx)("code",{children:"中"})," => ",(0,o.jsx)("code",{children:"E4 B8 AD"})," => ",(0,o.jsx)("code",{children:"%E4%B8%AD"})]}),(0,o.jsx)("li",{children:"encodeURI & encodeURIComponent 对于中文 unicode 编码的 url 再编码  "}),(0,o.jsx)("li",{children:"如果是 gbk / gb2313 / big5 编码后的中文字符会出现解码失败,需要使用后端处理"})]}),(0,o.jsx)("h2",{children:"encodeURIComponent "}),(0,o.jsx)("blockquote",{children:(0,o.jsx)("p",{children:"不转义的字符：A-Z a-z 0-9 - _ . ! ~ * ' ( )"})}),(0,o.jsx)("h2",{children:"encodeURI"}),(0,o.jsx)("blockquote",{children:(0,o.jsx)("p",{children:"不转义的字符：A-Z a-z 0-9 - _ . ! ~ * ' ( ) ; , / ? : @ & = + $ # "})}),(0,o.jsx)("h2",{children:"encodeURIComponent 和 encodeURI 区别"}),(0,o.jsxs)("code",{lang:"javascript",children:['var set1 = ";,/?:@&=+$";  // 保留字符 ',(0,o.jsx)("br",{}),'var set2 = "-_.!~*\'()";   // 不转义字符 ',(0,o.jsx)("br",{}),'var set3 = "#";           // 数字标志 ',(0,o.jsx)("br",{}),'var set4 = "ABC abc 123"; // 字母数字字符和空格 ',(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"console.log(encodeURI(set1)); // ;,/?:@&=+$ ",(0,o.jsx)("br",{}),"console.log(encodeURI(set2)); // -_.!~*'() ",(0,o.jsx)("br",{}),"console.log(encodeURI(set3)); // # ",(0,o.jsx)("br",{}),"console.log(encodeURI(set4)); // ABC%20abc%20123 (空格被编码为 %20) ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24 ",(0,o.jsx)("br",{}),"console.log(encodeURIComponent(set2)); // -_.!~*'() ",(0,o.jsx)("br",{}),"console.log(encodeURIComponent(set3)); // %23 ",(0,o.jsx)("br",{}),"console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (空格被编码为 %20) ",(0,o.jsx)("br",{})]})]})},67932:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(e,t)=>{if(0===e.length)return;const n=new FileReader;n.onerror=e=>{console.log(e)},n.onload=()=>{t(n.result)},n.readAsText(e[0])}},5929:(e,t,n)=>{async function o(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function r(e,t){let n=null,o=null,r=null;function i(){r=+new Date,r-n<t?o=setTimeout(i,t):(e(),o=null),n=r}return function(){n=+new Date,o||(o=setTimeout(i,t))}}function i(e,t=4,n=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+n)}n.d(t,{Ds:()=>r,Jg:()=>i,TE:()=>o})}}]);
//# sourceMappingURL=7077.renderer.js.map