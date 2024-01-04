"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[3638,7869,5302],{21059:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(1413),o=t(67294);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};var a=t(30076),l=function(e,r){return o.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:r,icon:i}))};const c=o.forwardRef(l)},26139:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(1413),o=t(67294);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};var a=t(30076),l=function(e,r){return o.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:r,icon:i}))};const c=o.forwardRef(l)},65460:(e,r,t)=>{t.d(r,{Z:()=>p});var n=t(94184),o=t.n(n),i=t(67294),a=t(53124),l=t(14747),c=t(67968),s=t(45503);const d=e=>{const{componentCls:r,sizePaddingEdgeHorizontal:t,colorSplit:n,lineWidth:o}=e;return{[r]:Object.assign(Object.assign({},(0,l.Wf)(e)),{borderBlockStart:`${o}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${o}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${r}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${o}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${r}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${r}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${r}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${o}px 0 0`},[`&-horizontal${r}-with-text${r}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${r}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${r}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${r}-with-text-left${r}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${r}-inner-text`]:{paddingInlineStart:t}},[`&-horizontal${r}-with-text-right${r}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${r}-inner-text`]:{paddingInlineEnd:t}}})}},f=(0,c.Z)("Divider",(e=>{const r=(0,s.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(r)]}),{sizePaddingEdgeHorizontal:0});var h=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};const p=e=>{const{getPrefixCls:r,direction:t}=i.useContext(a.E_),{prefixCls:n,type:l="horizontal",orientation:c="center",orientationMargin:s,className:d,rootClassName:p,children:u,dashed:g,plain:v}=e,w=h(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),x=r("divider",n),[b,m]=f(x),y=c.length>0?`-${c}`:c,$=!!u,C="left"===c&&null!=s,z="right"===c&&null!=s,E=o()(x,m,`${x}-${l}`,{[`${x}-with-text`]:$,[`${x}-with-text${y}`]:$,[`${x}-dashed`]:!!g,[`${x}-plain`]:!!v,[`${x}-rtl`]:"rtl"===t,[`${x}-no-default-orientation-margin-left`]:C,[`${x}-no-default-orientation-margin-right`]:z},d,p),S=Object.assign(Object.assign({},C&&{marginLeft:s}),z&&{marginRight:s});return b(i.createElement("div",Object.assign({className:E},w,{role:"separator"}),u&&"vertical"!==l&&i.createElement("span",{className:`${x}-inner-text`,style:S},u)))}},58162:e=>{e.exports=function(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),t=0;t<r.length;t++)r[t]=255;for(var n=0;n<e.length;n++){var o=e.charAt(n),i=o.charCodeAt(0);if(255!==r[i])throw new TypeError(o+" is ambiguous");r[i]=n}var a=e.length,l=e.charAt(0),c=Math.log(a)/Math.log(256),s=Math.log(256)/Math.log(a);function d(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;for(var t=0,n=0,o=0;e[t]===l;)n++,t++;for(var i=(e.length-t)*c+1>>>0,s=new Uint8Array(i);e[t];){var d=r[e.charCodeAt(t)];if(255===d)return;for(var f=0,h=i-1;(0!==d||f<o)&&-1!==h;h--,f++)d+=a*s[h]>>>0,s[h]=d%256>>>0,d=d/256>>>0;if(0!==d)throw new Error("Non-zero carry");o=f,t++}for(var p=i-o;p!==i&&0===s[p];)p++;for(var u=new Uint8Array(n+(i-p)),g=n;p!==i;)u[g++]=s[p++];return u}return{encode:function(r){if(r instanceof Uint8Array||(ArrayBuffer.isView(r)?r=new Uint8Array(r.buffer,r.byteOffset,r.byteLength):Array.isArray(r)&&(r=Uint8Array.from(r))),!(r instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===r.length)return"";for(var t=0,n=0,o=0,i=r.length;o!==i&&0===r[o];)o++,t++;for(var c=(i-o)*s+1>>>0,d=new Uint8Array(c);o!==i;){for(var f=r[o],h=0,p=c-1;(0!==f||h<n)&&-1!==p;p--,h++)f+=256*d[p]>>>0,d[p]=f%a>>>0,f=f/a>>>0;if(0!==f)throw new Error("Non-zero carry");n=h,o++}for(var u=c-n;u!==c&&0===d[u];)u++;for(var g=l.repeat(t);u<c;++u)g+=e.charAt(d[u]);return g},decodeUnsafe:d,decode:function(e){var r=d(e);if(r)return r;throw new Error("Non-base"+a+" character")}}}},43638:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(85893),o=t(41249),i=t(84466),a=t(17180),l=t(65460),c=t(67294),s=t(21059),d=t(26139),f=t(5929),h=t(67932),p=t(37869),u=t(85302);const{TextArea:g}=o.default,v=()=>{const[e,r]=(0,c.useState)(""),[t,o]=(0,c.useState)(""),[v,w]=i.ZP.useMessage(),x=e=>{const r=e.target.value.trim();""!==r&&((0,f.TE)(r),v.success("复制到粘贴板成功！！！"))};return(0,n.jsxs)("div",{children:[w,(0,n.jsx)(g,{style:{margin:"5px 0 5px 0"},onDoubleClick:x,onChange:e=>{r(e.target.value)},title:"双击复制内容到粘贴板",value:e,placeholder:"输入需要进行 Base58 编码的内容  或 拖拽文件到框内打开",autoSize:{minRows:5,maxRows:5},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,h.Z)(e.dataTransfer.files,r)}}),(0,n.jsx)(a.ZP,{onClick:()=>{""!=e.trim()&&o((0,u.Base58Encode)(e))},style:{backgroundColor:"#007bff",color:"#fff"},icon:(0,n.jsx)(s.Z,{}),children:"Base58 编码"}),(0,n.jsx)(a.ZP,{onClick:()=>{if(""!=t.trim()){let e="";try{e=(0,u.Base58Decode)(t)}catch(e){v.error("解码失败！！！")}r(e)}},style:{backgroundColor:"#28a745",color:"#fff"},icon:(0,n.jsx)(d.Z,{}),children:"Base58 解码"})," ",(0,n.jsx)(a.ZP,{onClick:()=>{r(""),o("")},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"}),(0,n.jsx)(g,{style:{margin:"5px 0 5px 0"},onDoubleClick:x,onChange:e=>{o(e.target.value)},title:"双击复制内容到粘贴板",value:t,placeholder:"输入需要进行 Base58 解码的内容  或 拖拽文件到框内打开",autoSize:{minRows:5,maxRows:5},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),(0,h.Z)(e.dataTransfer.files,o)}}),(0,n.jsx)(l.Z,{children:" Base58 编码说明 "}),(0,n.jsx)(p.default,{})]})}},37869:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var n=t(85893);let o="\n<p>&nbsp;</p>\n<ul>\n<li><p>Bitcoin 中使用的一种独特的编码方式，主要用于产生 Bitcoin 的钱包地址</p></li>\n<li><p>采用数字(123456789)、大写字母(ABCDEFGHJKLMNUVWXYZ)、小写字母(abcdefghijkmnopqrstuvwxyz)</p></li>\n<li><p>去除歧义字符 0（零）、O（大写字母 O）、I（大写字母i）、l（小写字母L），总计58个字符作为编码的字母表</p></li>\n</ul>\n<p>&nbsp;</p>\n<h2>设计目的</h2>\n<ul>\n<li><p>避免混淆。在某些字体下，数字0和字母大写O，以及字母大写I和字母小写l会非常相似</p></li>\n<li><p>不使用 &quot;+&quot; 和 &quot;/&quot; 的原因是非字母或数字的字符串作为帐号较难被接受</p></li>\n<li><p>没有标点符号，通常不会被从中间分行</p></li>\n<li><p>大部分的软件支持双击选择整个字符串</p></li>\n</ul>\n<p>&nbsp;</p>\n<h2>编码表</h2>\n<pre>\n<code>123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz \n</pre>\n<p>&nbsp;</p>\n";const i=()=>(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:o.replace("\n","<br/>")},style:{overflowY:"scroll",height:"300px"}})},85302:(e,r,t)=>{t.r(r),t.d(r,{Base58Decode:()=>a,Base58Encode:()=>i});var n=t(43443);const o=t(58162)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),i=e=>o.encode((0,n.sy)(e)),a=e=>(0,n.IN)(o.decode(e))},67932:(e,r,t)=>{t.d(r,{Z:()=>n});const n=(e,r)=>{if(0===e.length)return;const t=new FileReader;t.onerror=e=>{console.log(e)},t.onload=()=>{r(t.result)},t.readAsText(e[0])}},5929:(e,r,t)=>{async function n(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function o(e,r){let t=null,n=null,o=null;function i(){o=+new Date,o-t<r?n=setTimeout(i,r):(e(),n=null),t=o}return function(){t=+new Date,n||(n=setTimeout(i,r))}}function i(e,r=4,t=" "){return e.replace(new RegExp("(.{"+r+"})","g"),"$1"+t)}t.d(r,{Ds:()=>o,Jg:()=>i,TE:()=>n})},43443:(e,r,t)=>{t.d(r,{IN:()=>o,_V:()=>n,sy:()=>i});const n=e=>e.split("").reverse().join(""),o=e=>{let r=[];for(var t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return r.join("")},i=e=>{let r=[];for(var t=0,n=e.length;t<n;++t)r.push(e.charCodeAt(t));return new Uint8Array(r)}}}]);
//# sourceMappingURL=3638.renderer.js.map