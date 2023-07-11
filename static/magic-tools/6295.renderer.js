"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[6295,9283,1773],{15746:(e,l,t)=>{t.d(l,{Z:()=>a});const a=t(21584).Z},71230:(e,l,t)=>{t.d(l,{Z:()=>a});const a=t(92820).Z},59283:(e,l,t)=>{t.r(l),t.d(l,{typeList:()=>s,unitTypeList:()=>a});const a=[{label:"公制",value:"ms",placeholder:"metric system"},{label:"英制",value:"iu",placeholder:"Imperial units"}],s=[{label:"厘米每秒(m/s)",value:"cms",type:"ms",placeholder:""},{label:"米每秒(m/s)",value:"ms",type:"ms",placeholder:""},{label:"千米每秒(km/s)",value:"kms",type:"ms",placeholder:""},{label:"千米每时(km/h)",value:"kmh",type:"ms",placeholder:""},{label:"马赫",value:"mach",type:"ms",placeholder:"马赫的大约速度换算一般认为相当于340.3 m/s，又大约等同于1225 km/h，761.2 mph，或者1116 ft/s。即视为等于声音在15摄氏度（59华氏度，288.15开氏度）的空气中传播的速度"},{label:"节",value:"knot",type:"ms",placeholder:"指 海里 / 小时，节是航海中代表速度的单位"},{label:"英里每时(m/h)",value:"mph",type:"iu",placeholder:""},{label:"英尺每秒(ft/s)",value:"fts",type:"iu",placeholder:""},{label:"英尺每分钟(ft/min)",value:"ftmin",type:"iu",placeholder:""},{label:"英寸每秒(in/s)",value:"ins",type:"iu",placeholder:""}]},6295:(e,l,t)=>{t.r(l),t.d(l,{default:()=>x});var a=t(85893),s=t(41249),n=t(84466),o=t(19650),r=t(15915),c=t(16117),u=t(17180),i=t(71230),p=t(15746),d=t(65460),m=t(77004),y=t(67294),h=t(5929),f=t(59283),b=t(31773);const{TextArea:g}=s.default,x=()=>{const e=(0,b.getDefaultUnitType)(),[l,t]=(0,y.useState)(e),[x,k]=(0,y.useState)((0,b.getTypeList)(e)),[v,j]=(0,y.useState)(""),[T,Z]=(0,y.useState)(""),C=(0,b.getDefaultType)(e),[I,S]=(0,y.useState)(C),[D,w]=(0,y.useState)((0,b.getTypePlaceholder)(C)),[F,O]=(0,y.useState)(0),[L,P]=n.ZP.useMessage(),U={cursor:"pointer"},E=e=>{const l=e.target.value.trim();""!=l&&((0,h.TE)(l),L.success("复制到粘贴板成功！！！"))},M=(e,l)=>{if(""!=e)if(/^[0-9\.\-]+$/.test(e)){switch(l){case"cms":O(parseFloat(e)/1e5*3600);break;case"ms":O(parseFloat(e)/1e3*3600);break;case"kms":O(3600*parseFloat(e));break;case"kmh":O(parseFloat(e));break;case"mach":O(1224*parseFloat(e));break;case"knot":O(1.852*parseFloat(e));break;case"mph":O(1.6093*parseFloat(e));break;case"fts":O(.3048*parseFloat(e)*3600/1e3);break;case"fts":O(.3048*parseFloat(e)*60/1e3);break;case"ins":O(2.54*parseFloat(e)*3600)}Z("")}else O(0),Z("error");else Z("")},R=e=>""===v?"":e.toString();return(0,a.jsxs)("div",{children:[P,(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(r.Z,{value:l,style:{width:80},onChange:e=>{t(e),k((0,b.getTypeList)(e));const l=(0,b.getDefaultType)(e);S(l),w((0,b.getTypePlaceholder)(l)),M(v,l)},options:f.unitTypeList}),(0,a.jsx)(c.ZP.Group,{optionType:"button",buttonStyle:"solid",options:x,onChange:({target:{value:e}})=>{S(e),w((0,b.getTypePlaceholder)(e)),M(v,e)},value:I}),(0,a.jsx)(u.ZP,{onClick:()=>{j(""),Z(""),O(0)},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"})]}),(0,a.jsx)(g,{status:T,style:{margin:"5px 0 5px 0"},value:v,onChange:e=>{const l=e.target.value.trim();j(l),M(l,I)},placeholder:D,autoSize:{minRows:3,maxRows:3}}),(0,a.jsxs)(i.Z,{wrap:!0,children:[(0,a.jsxs)(p.Z,{span:12,children:[(0,a.jsx)(d.Z,{dashed:!0,plain:!0,children:"公制"}),(0,a.jsxs)(m.Z,{name:"basic1",labelCol:{span:8},autoComplete:"off",children:[(0,a.jsx)(m.Z.Item,{label:"米每秒(m/s)",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(1e3*F/3600)})}),(0,a.jsx)(m.Z.Item,{label:"千米每时(km/h)",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F)})}),(0,a.jsx)(m.Z.Item,{label:"厘米每秒(m/s)",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(1e5*F/3600)})}),(0,a.jsx)(m.Z.Item,{label:"千米每秒(km/s)",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F/3600)})}),(0,a.jsx)(m.Z.Item,{label:"马赫",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F/1224)})}),(0,a.jsx)(m.Z.Item,{label:"节",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F/1.852)})})]})]}),(0,a.jsxs)(p.Z,{span:12,children:[(0,a.jsx)(d.Z,{dashed:!0,plain:!0,children:"英制"}),(0,a.jsxs)(m.Z,{name:"basic2",labelCol:{span:8},autoComplete:"off",children:[(0,a.jsx)(m.Z.Item,{label:"英里每时(m/h) 迈",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F/1.6093)})}),(0,a.jsx)(m.Z.Item,{label:"英尺每秒(ft/s)",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F/.3048/3600*1e3)})}),(0,a.jsx)(m.Z.Item,{label:"英尺每分钟(ft/min)",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F/.3048/60*1e3)})}),(0,a.jsx)(m.Z.Item,{label:"英寸每秒(in/s)",children:(0,a.jsx)(s.default,{readOnly:!0,style:U,onClick:E,value:R(F/2.54/3600*1e5)})})]})]})]})]})}},31773:(e,l,t)=>{t.r(l),t.d(l,{getDefaultIUType:()=>y,getDefaultMSType:()=>p,getDefaultType:()=>n,getDefaultUnitType:()=>c,getTypeList:()=>s,getTypePlaceholder:()=>o,setDefaultIUType:()=>h,setDefaultMSType:()=>d,setDefaultUnitType:()=>u});var a=t(59283);const s=e=>a.typeList.filter((l=>l.type===e)),n=e=>"iu"===e?y():p(),o=e=>a.typeList.find((l=>l.value===e))?.placeholder,r="speed-convert:default-unit-type";function c(){const e=localStorage.getItem(r);return null===e?"ms":e}function u(e){localStorage.setItem(r,e)}const i="speed-convert:default-ms-type";function p(){const e=localStorage.getItem(i);return null===e?"kmh":e}function d(e){localStorage.setItem(i,e)}const m="speed-convert:default-iu-type";function y(){const e=localStorage.getItem(m);return null===e?"mph":e}function h(e){localStorage.setItem(m,e)}},5929:(e,l,t)=>{async function a(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function s(e,l){let t=null,a=null,s=null;function n(){s=+new Date,s-t<l?a=setTimeout(n,l):(e(),a=null),t=s}return function(){t=+new Date,a||(a=setTimeout(n,l))}}function n(e,l=4,t=" "){return e.replace(new RegExp("(.{"+l+"})","g"),"$1"+t)}t.d(l,{Ds:()=>s,Jg:()=>n,TE:()=>a})}}]);
//# sourceMappingURL=6295.renderer.js.map