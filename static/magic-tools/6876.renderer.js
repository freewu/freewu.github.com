"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[6876,7034,8658],{15746:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a(21584).Z},71230:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a(92820).Z},27034:(e,l,a)=>{a.r(l),a.d(l,{typeList:()=>s,unitTypeList:()=>t});const t=[{label:"公制",value:"ms",placeholder:"metric system"},{label:"英制",value:"iu",placeholder:"Imperial units"},{label:"市制",value:"cn",placeholder:""}],s=[{label:"千米",value:"km",type:"ms",placeholder:""},{label:"米",value:"m",type:"ms",placeholder:""},{label:"分米",value:"dm",type:"ms",placeholder:""},{label:"厘米",value:"cm",type:"ms",placeholder:""},{label:"毫米",value:"mm",type:"ms",placeholder:""},{label:"微米",value:"μm",type:"ms",placeholder:""},{label:"纳米",value:"nm",type:"ms",placeholder:""},{label:"皮米",value:"pm",type:"ms",placeholder:""},{label:"海里",value:"nmile",type:"ms",placeholder:"等于4千万米除以360然后再除以60，其结果就是大约1852米，也就是说，1海里大约是1.852公里"},{label:"英寸",value:"inch",type:"iu",placeholder:""},{label:"英尺",value:"foot",type:"iu",placeholder:""},{label:"码",value:"yard",type:"iu",placeholder:""},{label:"英里",value:"mile",type:"iu",placeholder:""},{label:"英寻",value:"fathom",type:"iu",placeholder:""},{label:"链",value:"chain",type:"iu",placeholder:"也称 测链 英文：chain，是英美制中一种长度单位 1链 (chain) = 20.1168米 (m)"},{label:"化朗",value:"furlong",type:"iu",placeholder:"一单位长度等于660呎(英尺)或220码或10链，约等于公制的201.168米。8化朗等于1哩，5化朗等于1005.84米，约等于1千米"},{label:"里",value:"li",type:"cn",placeholder:""},{label:"引",value:"ying",type:"cn",placeholder:""},{label:"丈",value:"zhang",type:"cn",placeholder:""},{label:"尺",value:"chi",type:"cn",placeholder:""},{label:"寸",value:"cun",type:"cn",placeholder:""},{label:"分",value:"fen",type:"cn",placeholder:""},{label:"厘",value:"l",type:"cn",placeholder:""},{label:"毫",value:"hao",type:"cn",placeholder:""},{label:"丝",value:"si",type:"cn",placeholder:""}]},36876:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var t=a(85893),s=a(41249),n=a(84466),c=a(19650),r=a(15915),o=a(16117),u=a(17180),i=a(71230),d=a(15746),p=a(65460),y=a(77004),h=a(67294),m=a(5929),b=a(27034),f=a(18658);const{TextArea:x}=s.default,v=()=>{const e=(0,f.getDefaultUnitType)(),[l,a]=(0,h.useState)(e),[v,j]=(0,h.useState)((0,f.getTypeList)(e)),[k,g]=(0,h.useState)(""),[Z,C]=(0,h.useState)(""),I=(0,f.getDefaultType)(e),[T,F]=(0,h.useState)(I),[O,S]=(0,h.useState)((0,f.getTypePlaceholder)(I)),[D,w]=(0,h.useState)(0),[L,P]=n.ZP.useMessage(),U={cursor:"pointer"},z=e=>{const l=e.target.value.trim();""!=l&&((0,m.TE)(l),L.success("复制到粘贴板成功！！！"))},E=(e,l)=>{if(""!=e)if(/^[0-9\.\-]+$/.test(e)){switch(l){case"km":w(1e3*parseFloat(e));break;case"m":w(parseFloat(e));break;case"dm":w(parseFloat(e)/10);break;case"cm":w(parseFloat(e)/100);break;case"mm":w(parseFloat(e)/1e3);break;case"μm":w(parseFloat(e)/1e3/1e3);break;case"nm":w(parseFloat(e)/1e3/1e3/1e3);break;case"pm":w(parseFloat(e)/1e3/1e3/1e3/1e3);break;case"nmile":w(1852*parseFloat(e));break;case"inch":w(2.54*parseFloat(e)/100);break;case"foot":w(.3048*parseFloat(e));break;case"yard":w(.9144*parseFloat(e));break;case"mile":w(1.6093*parseFloat(e)/1e3);break;case"fathom":w(1.829*parseFloat(e));break;case"chain":w(20.1168*parseFloat(e));break;case"furlong":w(201.168*parseFloat(e));break;case"li":w(500*parseFloat(e));break;case"ying":w(500*parseFloat(e)/15);break;case"zhang":w(50*parseFloat(e)/15);break;case"chi":w(5*parseFloat(e)/15);break;case"cun":w(5*parseFloat(e)/150);break;case"fen":w(5*parseFloat(e)/1500);break;case"l":w(5*parseFloat(e)/15e3);break;case"hao":w(5*parseFloat(e)/15e4);break;case"si":w(5*parseFloat(e)/15e6)}C("")}else w(0),C("error");else C("")},M=e=>0===e?"":e.toString();return(0,t.jsxs)("div",{children:[P,(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(r.Z,{value:l,style:{width:80},onChange:e=>{a(e),j((0,f.getTypeList)(e));const l=(0,f.getDefaultType)(e);F(l),S((0,f.getTypePlaceholder)(l)),E(k,l)},options:b.unitTypeList}),(0,t.jsx)(o.ZP.Group,{optionType:"button",buttonStyle:"solid",options:v,onChange:({target:{value:e}})=>{F(e),S((0,f.getTypePlaceholder)(e)),E(k,e)},value:T}),(0,t.jsx)(u.ZP,{onClick:()=>{g(""),C(""),w(0)},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"})]}),(0,t.jsx)(x,{status:Z,style:{margin:"5px 0 5px 0"},value:k,onChange:e=>{const l=e.target.value.trim();g(l),E(l,T)},placeholder:O,autoSize:{minRows:3,maxRows:3}}),(0,t.jsxs)(i.Z,{wrap:!0,children:[(0,t.jsxs)(d.Z,{span:8,children:[(0,t.jsx)(p.Z,{dashed:!0,plain:!0,children:"公制"}),(0,t.jsxs)(y.Z,{name:"basic1",labelCol:{span:8},autoComplete:"off",children:[(0,t.jsx)(y.Z.Item,{label:"千米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D)})}),(0,t.jsx)(y.Z.Item,{label:"分米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(10*D)})}),(0,t.jsx)(y.Z.Item,{label:"厘米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(100*D)})}),(0,t.jsx)(y.Z.Item,{label:"毫米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(1e3*D)})}),(0,t.jsx)(y.Z.Item,{label:"微米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(1e3*D*1e3)})}),(0,t.jsx)(y.Z.Item,{label:"纳米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(1e3*D*1e3*1e3)})}),(0,t.jsx)(y.Z.Item,{label:"皮米",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(1e3*D*1e3*1e3*1e3)})}),(0,t.jsx)(y.Z.Item,{label:"海里",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/1852)})})]})]}),(0,t.jsxs)(d.Z,{span:8,children:[(0,t.jsx)(p.Z,{dashed:!0,plain:!0,children:"英制"}),(0,t.jsxs)(y.Z,{name:"basic2",labelCol:{span:10},autoComplete:"off",children:[(0,t.jsx)(y.Z.Item,{label:"英寸 (inch)",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/2.54*100)})}),(0,t.jsx)(y.Z.Item,{label:"英尺 (foot)",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/.3048)})}),(0,t.jsx)(y.Z.Item,{label:"码 (yard)",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/.9144)})}),(0,t.jsx)(y.Z.Item,{label:"英里 (mile)",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/1609.3)})}),(0,t.jsx)(y.Z.Item,{label:"英寻 (fathom)",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/1.829)})}),(0,t.jsx)(y.Z.Item,{label:"链 (chain)",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/20.1168)})}),(0,t.jsx)(y.Z.Item,{label:"化朗 (furlong)",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/201.168)})})]})]}),(0,t.jsxs)(d.Z,{span:8,children:[(0,t.jsx)(p.Z,{dashed:!0,plain:!0,children:"市制"}),(0,t.jsxs)(y.Z,{name:"basic3",labelCol:{span:8},autoComplete:"off",children:[(0,t.jsx)(y.Z.Item,{label:"里",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/500)})}),(0,t.jsx)(y.Z.Item,{label:"引",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/500*15)})}),(0,t.jsx)(y.Z.Item,{label:"丈",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/50*15)})}),(0,t.jsx)(y.Z.Item,{label:"尺",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/5*15)})}),(0,t.jsx)(y.Z.Item,{label:"寸",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/5*150)})}),(0,t.jsx)(y.Z.Item,{label:"分",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/5*1500)})}),(0,t.jsx)(y.Z.Item,{label:"厘",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/5*15e3)})}),(0,t.jsx)(y.Z.Item,{label:"毫",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/5*15e4)})}),(0,t.jsx)(y.Z.Item,{label:"丝",children:(0,t.jsx)(s.default,{readOnly:!0,style:U,onClick:z,value:M(D/5*15e6)})})]})]})]})]})}},18658:(e,l,a)=>{a.r(l),a.d(l,{getDefaultCNType:()=>f,getDefaultIUType:()=>h,getDefaultMSType:()=>d,getDefaultType:()=>n,getDefaultUnitType:()=>o,getTypeList:()=>s,getTypePlaceholder:()=>c,setDefaultCNType:()=>x,setDefaultIUType:()=>m,setDefaultMSType:()=>p,setDefaultUnitType:()=>u});var t=a(27034);const s=e=>t.typeList.filter((l=>l.type===e)),n=e=>{switch(e){case"iu":return h();case"cn":return f()}return d()},c=e=>t.typeList.find((l=>l.value===e))?.placeholder,r="distance-convert:default-unit-type";function o(){const e=localStorage.getItem(r);return null===e?"ms":e}function u(e){localStorage.setItem(r,e)}const i="distance-convert:default-ms-type";function d(){const e=localStorage.getItem(i);return null===e?"m":e}function p(e){localStorage.setItem(i,e)}const y="distance-convert:default-iu-type";function h(){const e=localStorage.getItem(y);return null===e?"foot":e}function m(e){localStorage.setItem(y,e)}const b="distance-convert:default-cn-type";function f(){const e=localStorage.getItem(b);return null===e?"li":e}function x(e){localStorage.setItem(b,e)}},5929:(e,l,a)=>{async function t(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function s(e,l){let a=null,t=null,s=null;function n(){s=+new Date,s-a<l?t=setTimeout(n,l):(e(),t=null),a=s}return function(){a=+new Date,t||(t=setTimeout(n,l))}}function n(e,l=4,a=" "){return e.replace(new RegExp("(.{"+l+"})","g"),"$1"+a)}a.d(l,{Ds:()=>s,Jg:()=>n,TE:()=>t})}}]);
//# sourceMappingURL=6876.renderer.js.map