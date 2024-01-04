"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[4993,2639,4695],{54549:(e,t,o)=>{o.d(t,{Z:()=>c});var l=o(1413),n=o(67294);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"};var a=o(30076),s=function(e,t){return n.createElement(a.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:r}))};const c=n.forwardRef(s)},6308:(e,t,o)=>{o.d(t,{Z:()=>v});var l=o(54549),n=o(94184),r=o.n(n),a=o(67294),s=o(98787),c=o(28979),i=o(53124);var g=o(14747),u=o(98719),d=o(67968),p=o(45503);const h=(e,t,o)=>{const l="string"!=typeof(n=o)?n:n.charAt(0).toUpperCase()+n.slice(1);var n;return{[`${e.componentCls}-${t}`]:{color:e[`color${o}`],background:e[`color${l}Bg`],borderColor:e[`color${l}Border`]}}},b=e=>(0,u.Z)(e,((t,o)=>{let{textColor:l,lightBorderColor:n,lightColor:r,darkColor:a}=o;return{[`${e.componentCls}-${t}`]:{color:l,background:r,borderColor:n,"&-inverse":{color:e.colorTextLightSolid,background:a,borderColor:a},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})),C=e=>{const{paddingXXS:t,lineWidth:o,tagPaddingHorizontal:l,componentCls:n}=e,r=l-o,a=t-o;return{[n]:Object.assign(Object.assign({},(0,g.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:r,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${n}-close-icon`]:{marginInlineStart:a,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:r}}),[`${n}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},f=(0,d.Z)("Tag",(e=>{const{fontSize:t,lineHeight:o,lineWidth:l,fontSizeIcon:n}=e,r=Math.round(t*o),a=e.fontSizeSM,s=r-2*l,c=e.colorFillQuaternary,i=e.colorText,g=(0,p.TS)(e,{tagFontSize:a,tagLineHeight:s,tagDefaultBg:c,tagDefaultColor:i,tagIconSize:n-2*l,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[C(g),b(g),h(g,"success","Success"),h(g,"processing","Info"),h(g,"error","Error"),h(g,"warning","Warning")]}));var m=function(e,t){var o={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(o[l[n]]=e[l[n]])}return o};const y=e=>{const{prefixCls:t,className:o,checked:l,onChange:n,onClick:s}=e,c=m(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:g}=a.useContext(i.E_),u=g("tag",t),[d,p]=f(u),h=r()(u,{[`${u}-checkable`]:!0,[`${u}-checkable-checked`]:l},o,p);return d(a.createElement("span",Object.assign({},c,{className:h,onClick:e=>{null==n||n(!l),null==s||s(e)}})))};var S=function(e,t){var o={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(o[l[n]]=e[l[n]])}return o};const M=(e,t)=>{const{prefixCls:o,className:n,rootClassName:g,style:u,children:d,icon:p,color:h,onClose:b,closeIcon:C,closable:m=!1,bordered:y=!0}=e,M=S(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:T,direction:v}=a.useContext(i.E_),[k,x]=a.useState(!0);a.useEffect((()=>{"visible"in M&&x(M.visible)}),[M.visible]);const j=(0,s.o2)(h)||(0,s.yT)(h),$=Object.assign({backgroundColor:h&&!j?h:void 0},u),w=T("tag",o),[P,G]=f(w),O=r()(w,{[`${w}-${h}`]:j,[`${w}-has-color`]:h&&!j,[`${w}-hidden`]:!k,[`${w}-rtl`]:"rtl"===v,[`${w}-borderless`]:!y},n,g,G),B=e=>{e.stopPropagation(),null==b||b(e),e.defaultPrevented||x(!1)},D=a.useMemo((()=>m?C?a.createElement("span",{className:`${w}-close-icon`,onClick:B},C):a.createElement(l.Z,{className:`${w}-close-icon`,onClick:B}):null),[m,C,w,B]),Z="function"==typeof M.onClick||d&&"a"===d.type,E=p||null,I=E?a.createElement(a.Fragment,null,E,a.createElement("span",null,d)):d,W=a.createElement("span",Object.assign({},M,{ref:t,className:O,style:$}),I,D);return P(Z?a.createElement(c.Z,null,W):W)},T=a.forwardRef(M);T.CheckableTag=y;const v=T},92639:(e,t,o)=>{o.r(t),o.d(t,{emptyResult:()=>n,pickList:()=>r,typeList:()=>l});const l=[{label:"WGS84坐标系",value:"WGS84",placeholder:"地球坐标系,国际通用坐标系"},{label:"GCJ02坐标系",value:"GCJ02",placeholder:"火星坐标系,WGS84 坐标系加密后的坐标系；Google国内地图、高德、QQ地图 使用"},{label:"BD09坐标系",value:"BD09",placeholder:"百度坐标系，GCJ02 坐标系加密后的坐标系"},{label:"腾讯地图",value:"TXMAP",placeholder:"火星坐标系,WGS84展示 纬度在前，经度在后"}],n={WGS84:"",GCJ02:"",BD09:"",CGCS:"",TXMAP:""},r=[{label:"百度地图",url:"https://api.map.baidu.com/lbsapi/getpoint/index.html"},{label:"高德地图",url:"https://lbs.amap.com/tools/picker"},{label:"腾讯地图",url:"https://lbs.qq.com/getPoint/"}]},34993:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var l=o(85893),n=o(41249),r=o(84466),a=o(19650),s=o(16117),c=o(17180),i=o(6308),g=o(65460),u=o(77004),d=o(67294),p=o(5929),h=o(92639),b=o(14695);const{TextArea:C}=n.default,f=()=>{const e=(0,b.getDefaultType)(),t=h.typeList.find((t=>t.value===e))?.placeholder,[o,f]=(0,d.useState)(""),[m,y]=(0,d.useState)(e),[S,M]=(0,d.useState)(t),[T,v]=(0,d.useState)(h.emptyResult),[k,x]=r.ZP.useMessage(),j={cursor:"pointer"},$=e=>{const t=e.target.value.trim();""!=t&&((0,p.TE)(t),k.success("复制到粘贴板成功！！！"))},w=e=>{f(e);let t=e.split(","),o={lng:parseFloat(t[0]),lat:parseFloat(t[1])};switch("TXMAP"===m&&(o.lng=parseFloat(t[1]),o.lat=parseFloat(t[0])),m){case"WGS84":let t=(0,b.wgs84Togcj02)(o);v({WGS84:e,GCJ02:(0,b.pointToString)(t),BD09:(0,b.pointToString)((0,b.gcj02Tobd09)(t)),CGCS:"",TXMAP:(0,b.tencentMapPointToString)(t)});break;case"TXMAP":case"GCJ02":v({WGS84:(0,b.pointToString)((0,b.gcj02Towgs84)(o)),GCJ02:(0,b.pointToString)(o),BD09:(0,b.pointToString)((0,b.gcj02Tobd09)(o)),CGCS:"",TXMAP:(0,b.tencentMapPointToString)(o)});break;case"BD09":let l=(0,b.bd09Togcj02)(o);v({WGS84:(0,b.pointToString)((0,b.gcj02Towgs84)(l)),GCJ02:(0,b.pointToString)(l),BD09:e,CGCS:"",TXMAP:(0,b.tencentMapPointToString)(o)});break;case"CGCS":v({WGS84:"",GCJ02:"",BD09:"",CGCS:e,TXMAP:""})}},P=e=>{switch(e%4){case 1:return"#2db7f5";case 2:return"#87d068";case 3:return"#108ee9"}return"#ff5500"};return(0,l.jsxs)("div",{children:[x,(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(s.ZP.Group,{optionType:"button",buttonStyle:"solid",options:h.typeList,onChange:({target:{value:e}})=>{y(e),f(""),v(h.emptyResult);const t=h.typeList.find((t=>t.value===e))?.placeholder;M(t+"")},value:m}),(0,l.jsx)(c.ZP,{onClick:()=>{f(""),v(h.emptyResult)},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"})]}),(0,l.jsx)(C,{style:{margin:"5px 0 5px 0"},value:o,onChange:e=>{const t=e.target.value.trim();f(t),2===t.split(",").length&&/^[0-9\.]+,[0-9\.]+$/.test(t)?w(t):v(h.emptyResult)},placeholder:S,autoSize:{minRows:3,maxRows:5}}),(0,l.jsxs)(a.Z,{size:[0,8],wrap:!0,children:[h.pickList.map(((e,t)=>{if(t<10)return(0,l.jsx)(i.Z,{className:"hash-tag",color:P(t),onClick:()=>{null!==window.electron?window.electron.ipcRenderer.sendMessage("open-url",[e.url]):(document.getElementById("map-url")?.setAttribute("herf",e.url),document.getElementById("map-url")?.click())},children:e.label},t+e.label)})),(0,l.jsx)("a",{href:"",id:"map-url",target:"_blank",style:{display:"none"}})]}),(0,l.jsx)(g.Z,{dashed:!0}),(0,l.jsxs)(u.Z,{name:"basic",labelCol:{span:4},autoComplete:"off",children:[(0,l.jsx)(u.Z.Item,{label:"WGS84 (lng,lat)",children:(0,l.jsx)(n.default,{readOnly:!0,style:j,onClick:$,value:T.WGS84})}),(0,l.jsx)(u.Z.Item,{label:"GCJ02 (lng,lat)",children:(0,l.jsx)(n.default,{readOnly:!0,style:j,onClick:$,value:T.GCJ02})}),(0,l.jsx)(u.Z.Item,{label:"BD09 (lng,lat)",children:(0,l.jsx)(n.default,{readOnly:!0,style:j,onClick:$,value:T.BD09})}),(0,l.jsx)(u.Z.Item,{label:"腾讯地图 (lat,lng)",children:(0,l.jsx)(n.default,{readOnly:!0,style:j,onClick:$,value:T.TXMAP})})]})]})}},14695:(e,t,o)=>{o.r(t),o.d(t,{bd09Togcj02:()=>i,gcj02Tobd09:()=>g,gcj02Towgs84:()=>m,getDefaultType:()=>n,outOfChina:()=>h,pointToString:()=>a,setDefaultType:()=>r,tencentMapPointToString:()=>s,wgs84Togcj02:()=>f});const l="gps-convert:default-type";function n(){const e=localStorage.getItem(l);return null===e?"GCJ02":e}function r(e){localStorage.setItem(l,e)}const a=e=>`${e.lng},${e.lat}`,s=e=>`${e.lat},${e.lng}`,c=52.35987755982988,i=e=>{let t={lng:0,lat:0},o=e.lng-.0065,l=e.lat-.006,n=Math.sqrt(o*o+l*l)-2e-5*Math.sin(l*c),r=Math.atan2(l,o)-3e-6*Math.cos(o*c);return t.lng=n*Math.cos(r),t.lat=n*Math.sin(r),t},g=e=>{let t={lng:0,lat:0},o=e.lng,l=e.lat,n=Math.sqrt(o*o+l*l)+2e-5*Math.sin(l*c),r=Math.atan2(l,o)+3e-6*Math.cos(o*c);return t.lng=n*Math.cos(r)+.0065,t.lat=n*Math.sin(r)+.006,t},u=3.141592653589793,d=6378245,p=.006693421622965943,h=(e,t)=>(e<72.004||e>137.8347)&&(t<.8293||t>55.8271),b=(e,t)=>{let o=2*e-100+3*t+.2*t*t+.1*e*t+.2*Math.sqrt(Math.abs(e));return o+=2*(20*Math.sin(6*e*u)+20*Math.sin(2*e*u))/3,o+=2*(20*Math.sin(t*u)+40*Math.sin(t/3*u))/3,o+=2*(160*Math.sin(t/12*u)+320*Math.sin(t*u/30))/3,o},C=(e,t)=>{let o=300+e+2*t+.1*e*e+.1*e*t+.1*Math.sqrt(Math.abs(e));return o+=2*(20*Math.sin(6*e*u)+20*Math.sin(2*e*u))/3,o+=2*(20*Math.sin(e*u)+40*Math.sin(e/3*u))/3,o+=2*(150*Math.sin(e/12*u)+300*Math.sin(e/30*u))/3,o},f=e=>{var t={lng:0,lat:0};if(h(e.lng,e.lat))return e;let o=e.lng-105,l=e.lat-35,n=b(o,l),r=C(o,l),a=e.lat/180*u,s=Math.sin(a);s=1-p*s*s;let c=Math.sqrt(s);return n=180*n/(d*(1-p)/(s*c)*u),r=180*r/(d/c*Math.cos(a)*u),t.lat=e.lat+n,t.lng=e.lng+r,t},m=e=>{let t=e.lng-105,o=e.lat-35,l=b(t,o),n=C(t,o),r=e.lat/180*u,a=Math.sin(r);a=1-p*a*a;let s=Math.sqrt(a);return l=180*l/(d*(1-p)/(a*s)*u),n=180*n/(d/s*Math.cos(r)*u),{lat:e.lat-l,lng:e.lng-n}}},5929:(e,t,o)=>{async function l(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function n(e,t){let o=null,l=null,n=null;function r(){n=+new Date,n-o<t?l=setTimeout(r,t):(e(),l=null),o=n}return function(){o=+new Date,l||(l=setTimeout(r,t))}}function r(e,t=4,o=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+o)}o.d(t,{Ds:()=>n,Jg:()=>r,TE:()=>l})}}]);
//# sourceMappingURL=4993.renderer.js.map