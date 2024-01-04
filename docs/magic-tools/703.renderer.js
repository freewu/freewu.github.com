"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[703,5993,7906,6225,2225,2614],{65460:(e,t,l)=>{l.d(t,{Z:()=>g});var r=l(94184),a=l.n(r),o=l(67294),n=l(53124),i=l(14747),c=l(67968),s=l(45503);const d=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:l,colorSplit:r,lineWidth:a}=e;return{[t]:Object.assign(Object.assign({},(0,i.Wf)(e)),{borderBlockStart:`${a}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${a}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${a}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${a}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:l}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:l}}})}},u=(0,c.Z)("Divider",(e=>{const t=(0,s.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(t)]}),{sizePaddingEdgeHorizontal:0});var h=function(e,t){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]])}return l};const g=e=>{const{getPrefixCls:t,direction:l}=o.useContext(n.E_),{prefixCls:r,type:i="horizontal",orientation:c="center",orientationMargin:s,className:d,rootClassName:g,children:p,dashed:f,plain:b}=e,x=h(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),m=t("divider",r),[$,S]=u(m),v=c.length>0?`-${c}`:c,C=!!p,y="left"===c&&null!=s,w="right"===c&&null!=s,k=a()(m,S,`${m}-${i}`,{[`${m}-with-text`]:C,[`${m}-with-text${v}`]:C,[`${m}-dashed`]:!!f,[`${m}-plain`]:!!b,[`${m}-rtl`]:"rtl"===l,[`${m}-no-default-orientation-margin-left`]:y,[`${m}-no-default-orientation-margin-right`]:w},d,g),L=Object.assign(Object.assign({},y&&{marginLeft:s}),w&&{marginRight:s});return $(o.createElement("div",Object.assign({className:k},x,{role:"separator"}),p&&"vertical"!==i&&o.createElement("span",{className:`${m}-inner-text`,style:L},p)))}},35993:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});var r=l(85893);const a=({color:e,label:t,title:l,colorClickEvent:a})=>(0,r.jsxs)("div",{onClick:()=>{a(e,t)},className:"color-card",title:l||t,style:{backgroundColor:e},children:[t.length<=10?t:t.substring(0,8)+"..","( ",e," )"]})},87906:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var r=l(85893),a=l(65460),o=l(35993);const n=({colorList:e,height:t,colorClickEvent:l})=>(0,r.jsx)("div",{className:"color-pad",style:{height:t},children:e?.map(((e,t)=>""==e.code?(0,r.jsx)(a.Z,{orientation:"left",plain:!0,children:e.label},e.label+t):(0,r.jsx)(o.default,{color:e.code,label:e.label,colorClickEvent:l},e.code+t)))})},16225:(e,t,l)=>{l.r(t),l.d(t,{colorDataList:()=>o,colorTypeList:()=>a});var r=l(4298);const a=[{label:"#HEX",value:"HEX1"},{label:"HEX",value:"HEX"},{label:"RGB",value:"RGB"},{label:"RGBA",value:"RGBA"},{label:"HSL",value:"HSL"},{label:"HSLA",value:"HSLA"},{label:"CMYK",value:"CMYK"},{label:"HSV",value:"HSV"},{label:"LAB",value:"LAB"},{label:"LCH",value:"LCH"},{label:"XYZ",value:"XYZ"},{label:"颜色名称",value:"TEXT"}],o=[{key:"chinese-traditional",label:"中国传统色彩",data:r.ChineseTraditional},{key:"chinese-painting",label:"国画常用色彩",data:r.ChinesePainting},{key:"japanese-color",label:"日式配色",data:r.JapaneseColor},{key:"ral-classic",label:"Ral Classic",data:r.RalClassic},{key:"css-color",label:"CSS颜色表",data:r.CSSColor},{key:"hks-color",label:"HKS Color",data:r.HKSColor},{key:"normal-rgb-color",label:"Normal RGB Color",data:r.NormalRGBColor}]},60703:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var r=l(85893),a=l(84466),o=l(19650),n=l(69053),i=l(16117),c=l(29289),s=l(11106),d=l(87906),u=l(62225),h=l(67294),g=l(5929),p=l(42614),f=l(16225);const b=()=>{const e=()=>window.innerHeight-180+"px",[t,l]=a.ZP.useMessage(),[b,x]=(0,h.useState)(e()),[m,$]=(0,h.useState)("HEX1"),[S,v]=(0,h.useState)(!0),[C,y]=(0,h.useState)((0,p.getDefaultOpacity)()),[w,k]=(0,h.useState)((0,p.pickColorTypeList)()),[L,H]=(0,h.useState)((0,p.getDefaultBatchSwitch)()),[j,E]=(0,h.useState)(Array),[T,z]=(0,h.useState)((0,p.getDefaultColorPad)()),B=(0,p.getDefaultPickMax)();window.addEventListener("resize",(0,g.Ds)((()=>{x(e()),k((0,p.pickColorTypeList)())}),100));const D=(e,l)=>{L?G({color:e,label:l}):((0,g.TE)((0,p.getColorString)(e,l,m,C)),t.success("复制到粘贴板成功！！！"))},G=({color:e,label:t})=>{j.findIndex((t=>t.color===e))>=0||(j.length>=B&&j.shift(),O([...j,{color:e,label:t}]))},I=(e,t)=>{const l=[];e.forEach((e=>{l.push((0,p.getColorString)(e.color,e.label,t,C))})),(0,g.TE)(l.toString())},O=e=>{E(e),I(e,m)},Z=f.colorDataList.map((e=>({key:e.key,label:e.label,children:(0,r.jsx)(d.default,{colorList:e.data,height:b,colorClickEvent:D})})));return(0,r.jsxs)(r.Fragment,{children:[l,(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(n.Z,{placement:"top",title:"单击色块复制到粘贴板的内容",children:(0,r.jsx)(i.ZP.Group,{optionType:"button",buttonStyle:"solid",options:w,onChange:({target:{value:e}})=>{v(!("RGBA"==e||"HSLA"==e)),$(e),L&&I(j,e)},value:m})})," Opacity: ",C/10,(0,r.jsx)("div",{style:{width:"120px"},children:(0,r.jsx)(c.Z,{tooltip:{formatter:null},disabled:S,min:0,max:10,value:C,onChange:e=>{y(e)}})})]}),(0,r.jsx)(s.Z,{activeKey:T,items:Z,onChange:e=>{z(e)}}),(0,r.jsx)(u.default,{colorList:j,flag:L,flagChangeEvent:H,colorListChange:O})]})}},62225:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var r=l(85893),a=l(44644),o=l(69053),n=l(62327);const i=({colorList:e,flag:t,flagChangeEvent:l,colorListChange:i})=>(0,r.jsx)("div",{className:"levitation-box",children:(0,r.jsx)(a.Z,{count:e?.length,children:(0,r.jsxs)("div",{className:"levitation-box-content",children:[(0,r.jsx)(o.Z,{placement:"left",title:"双击剔除不需要的颜色",children:(0,r.jsx)(n.Z,{defaultChecked:t,onChange:()=>{l(!t),t&&i([])},children:"批量取色"})}),(0,r.jsx)("ul",{children:e.map((t=>(0,r.jsx)("li",{onDoubleClick:()=>{(t=>{const l=e.filter((e=>e.color!==t));i(l)})(t.color)},style:{backgroundColor:t.color},title:t.label},t.color)))})]})})})},42614:(e,t,l)=>{l.r(t),l.d(t,{calcComplementaryColor:()=>o,getColorString:()=>n,getDefaultBatchSwitch:()=>h,getDefaultColorPad:()=>s,getDefaultOpacity:()=>f,getDefaultPickMax:()=>m,pickColorTypeList:()=>i,setDefaultBatchSwitch:()=>g,setDefaultColorPad:()=>d,setDefaultOpacity:()=>b,setDefaultPickMax:()=>$});var r=l(12085),a=l(16225);const o=e=>{e=e.replace("#","").trim();const t=r.hex.rgb(e);return"#"+r.rgb.hex([255-t[0],255-t[1],255-t[2]])},n=(e,t,l,a)=>{switch(l){case"TEXT":return t;case"HEX":return e.replace("#","");case"RGB":const l=r.hex.rgb(e.replace("#",""));return`rgb(${l[0]}, ${l[1]}, ${l[2]})`;case"RGBA":const o=r.hex.rgb(e.replace("#",""));return`rgba(${o[0]}, ${o[1]}, ${o[2]}, ${a/10})`;case"HSL":const n=r.hex.hsl(e.replace("#",""));return`hsl(${n[0]}, ${n[1]}, ${n[2]})`;case"HSLA":const i=r.hex.hsl(e.replace("#",""));return`hsla(${i[0]}, ${i[1]}, ${i[2]}, ${a/10})`;case"HSV":const c=r.hex.hsv(e.replace("#",""));return`hsv(${c[0]}, ${c[1]}, ${c[2]})`;case"CMYK":const s=r.hex.cmyk(e.replace("#",""));return`cmyk(${s[0]}, ${s[1]}, ${s[2]}, ${s[3]})`;case"LAB":const d=r.hex.lab(e.replace("#",""));return`lab(${d[0]}, ${d[1]}, ${d[2]})`;case"LCH":const u=r.hex.lch(e.replace("#",""));return`lch(${u[0]}, ${u[1]}, ${u[2]})`;case"XYZ":const h=r.hex.xyz(e.replace("#",""));return`xyz(${h[0]}, ${h[1]}, ${h[2]})`}return e},i=()=>{if(window.innerWidth>1200)return a.colorTypeList;return a.colorTypeList.filter((e=>"LAB"!=e.label&&"LCH"!=e.label&&"XYZ"!=e.label&&"HSV"!=e.label))},c="color:default-color-pad";function s(){const e=localStorage.getItem(c);return null===e?"chinese-traditional":e}function d(e){localStorage.setItem(c,e)}const u="color:default-batch-switch";function h(){const e=localStorage.getItem(u);return null!==e&&"true"===e}function g(e){localStorage.setItem(u,e.toString())}const p="color:default-opacity";function f(){const e=localStorage.getItem(p);if(null===e)return 9;let t=parseInt(e);return t>10||t<0?9:t}function b(e){localStorage.setItem(p,e.toString())}const x="color:pick-max";function m(){const e=localStorage.getItem(x);if(null===e)return 10;let t=parseInt(e);return t>20||t<5?10:t}function $(e){localStorage.setItem(x,e.toString())}},5929:(e,t,l)=>{async function r(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function a(e,t){let l=null,r=null,a=null;function o(){a=+new Date,a-l<t?r=setTimeout(o,t):(e(),r=null),l=a}return function(){l=+new Date,r||(r=setTimeout(o,t))}}function o(e,t=4,l=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+l)}l.d(t,{Ds:()=>a,Jg:()=>o,TE:()=>r})}}]);
//# sourceMappingURL=703.renderer.js.map