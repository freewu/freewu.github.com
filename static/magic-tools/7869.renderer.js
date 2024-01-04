"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[7869,6185,9810],{15746:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a(21584).Z},71230:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a(92820).Z},56185:(e,l,a)=>{a.r(l),a.d(l,{typeList:()=>s,unitTypeList:()=>t});const t=[{label:"公制",value:"ms",placeholder:"metric system"},{label:"英制",value:"iu",placeholder:"Imperial units"},{label:"市制",value:"cn",placeholder:""}],s=[{label:"千吨",value:"kt",type:"ms",placeholder:"kilo ton"},{label:"吨",value:"t",type:"ms",placeholder:"ton"},{label:"千克",value:"kg",type:"ms",placeholder:"kilo gram"},{label:"克",value:"g",type:"ms",placeholder:"gram"},{label:"毫克",value:"mg",type:"ms",placeholder:"milligram"},{label:"微克",value:"mcg",type:"ms",placeholder:"micro gram"},{label:"纳克",value:"ng",type:"ms",placeholder:"nanogram"},{label:"克拉",value:"ct",type:"ms",placeholder:"钻石的质量（重量）单位，现定1克拉等于0.2克或200毫克"},{label:"盎司",value:"oz",type:"iu",placeholder:"1 盎司 = 1/16 磅（pound）= 28.349523125 克"},{label:"磅",value:"lb",type:"iu",placeholder:"1 磅 = 7000 格令 = 453.59237 克"},{label:"英石",value:"st",type:"iu",placeholder:"1 英石（stone）= 14 磅 = 6.35029318 千克"},{label:"格令",value:"gr",type:"iu",placeholder:"1 格令（grain）= 64.79891 毫克"},{label:"打兰",value:"dr",type:"iu",placeholder:"1 打兰（drachm）= 1/16 盎司（ounce） = 1.77 克"},{label:"夸特",value:"qr",type:"iu",placeholder:"1 夸特（quarter）= 2 英石 = 28 磅 = 12.7 千克"},{label:"英担",value:"hw",type:"iu",placeholder:"1 英担（hundredweight）= 4 夸特 = 112 磅 = 50.8 千克"},{label:"美担",value:"md",type:"iu",placeholder:"1 美担 = 45.359237 千克"},{label:"英吨",value:"longton",type:"iu",placeholder:"1 英吨（ton）= 20 英担 = 2240 磅 = 1016 千克 英吨（长吨long ton）是2240磅"},{label:"美吨",value:"shortton",type:"iu",placeholder:"美吨（短吨short ton）是2000磅（907千克）"},{label:"担",value:"dan",type:"cn",placeholder:""},{label:"斤",value:"jin",type:"cn",placeholder:""},{label:"两",value:"liang",type:"cn",placeholder:""},{label:"钱",value:"qian",type:"cn",placeholder:""},{label:"分",value:"fen",type:"cn",placeholder:""},{label:"厘",value:"li",type:"cn",placeholder:""}]},77869:(e,l,a)=>{a.r(l),a.d(l,{default:()=>x});var t=a(85893),s=a(41249),n=a(84466),r=a(19650),o=a(15915),c=a(16117),u=a(17180),i=a(71230),d=a(15746),p=a(65460),y=a(77004),h=a(67294),b=a(5929),g=a(56185),m=a(69810);const{TextArea:f}=s.default,x=()=>{const e=(0,m.getDefaultUnitType)(),[l,a]=(0,h.useState)(e),[x,j]=(0,h.useState)((0,m.getTypeList)(e)),[v,k]=(0,h.useState)(""),[Z,C]=(0,h.useState)(""),I=(0,m.getDefaultType)(e),[T,F]=(0,h.useState)(I),[O,w]=(0,h.useState)((0,m.getTypePlaceholder)(I)),[S,D]=(0,h.useState)(0),[L,P]=n.ZP.useMessage(),q={cursor:"pointer"},U=e=>{const l=e.target.value.trim();""!=l&&((0,b.TE)(l),L.success("复制到粘贴板成功！！！"))},z=(e,l)=>{if(""!=e)if(/^[0-9\.\-]+$/.test(e)){switch(l){case"kt":D(1e3*parseFloat(e)*1e3*1e3);break;case"t":D(1e3*parseFloat(e)*1e3);break;case"kg":D(1e3*parseFloat(e));break;case"g":D(parseFloat(e));break;case"mg":D(parseFloat(e)/1e3);break;case"μg":D(parseFloat(e)/1e3/1e3);break;case"ng":D(parseFloat(e)/1e3/1e3/1e3);break;case"pg":D(parseFloat(e)/1e3/1e3/1e3/1e3);break;case"ct":D(parseFloat(e)/.2);break;case"oz":D(28.349523125*parseFloat(e));break;case"lb":D(453.59237*parseFloat(e));break;case"st":D(6.35*parseFloat(e)*1e3);break;case"gr":D(64.79891*parseFloat(e)/1e3);break;case"hw":D(50.8*parseFloat(e)*1e3);break;case"md":D(45.359237*parseFloat(e)*1e3);break;case"dr":D(1.77*parseFloat(e));break;case"qr":D(12.7*parseFloat(e)*1e3);break;case"longton":D(1016*parseFloat(e)*1e3);break;case"shortton":D(907*parseFloat(e)*1e3);break;case"dan":D(5e4*parseFloat(e));break;case"jin":D(500*parseFloat(e));break;case"liang":D(50*parseFloat(e));break;case"qian":D(5*parseFloat(e));break;case"fen":D(.5*parseFloat(e));break;case"li":D(.05*parseFloat(e))}C("")}else D(0),C("error");else C("")},E=e=>0===e?"":e.toString();return(0,t.jsxs)("div",{children:[P,(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(o.Z,{value:l,style:{width:80},onChange:e=>{a(e),j((0,m.getTypeList)(e));const l=(0,m.getDefaultType)(e);F(l),w((0,m.getTypePlaceholder)(l)),z(v,l)},options:g.unitTypeList}),(0,t.jsx)(c.ZP.Group,{optionType:"button",buttonStyle:"solid",options:x,onChange:({target:{value:e}})=>{F(e),w((0,m.getTypePlaceholder)(e)),z(v,e)},value:T}),(0,t.jsx)(u.ZP,{onClick:()=>{k(""),C(""),D(0)},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"})]}),(0,t.jsx)(f,{status:Z,style:{margin:"5px 0 5px 0"},value:v,onChange:e=>{const l=e.target.value.trim();k(l),z(l,T)},placeholder:O,autoSize:{minRows:3,maxRows:3}}),(0,t.jsxs)(i.Z,{wrap:!0,children:[(0,t.jsxs)(d.Z,{span:8,children:[(0,t.jsx)(p.Z,{dashed:!0,plain:!0,children:"公制"}),(0,t.jsxs)(y.Z,{name:"basic1",labelCol:{span:8},autoComplete:"off",children:[(0,t.jsx)(y.Z.Item,{label:"千吨(kt)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/1e3/1e3/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"吨(t)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/1e3/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"千克(kg)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"克(g)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S)})}),(0,t.jsx)(y.Z.Item,{label:"毫克(mg)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(1e3*S)})}),(0,t.jsx)(y.Z.Item,{label:"微克(μg)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(1e3*S*1e3)})}),(0,t.jsx)(y.Z.Item,{label:"纳克(ng)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(1e3*S*1e3*1e3)})}),(0,t.jsx)(y.Z.Item,{label:"克拉(ct)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(.2*S)})})]})]}),(0,t.jsxs)(d.Z,{span:8,children:[(0,t.jsx)(p.Z,{dashed:!0,plain:!0,children:"英制"}),(0,t.jsxs)(y.Z,{name:"basic2",labelCol:{span:10},autoComplete:"off",children:[(0,t.jsx)(y.Z.Item,{label:"盎司(ounce)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/28.349523125)})}),(0,t.jsx)(y.Z.Item,{label:"磅(pound)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/453.59237)})}),(0,t.jsx)(y.Z.Item,{label:"英石(stone)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/6350)})}),(0,t.jsx)(y.Z.Item,{label:"格令(grain)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/64.79891*1e3)})}),(0,t.jsx)(y.Z.Item,{label:"打兰(drachm)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/1.77)})}),(0,t.jsx)(y.Z.Item,{label:"夸特(quarter)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/12.7/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"英担",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/50.8/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"美担",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/45.359237/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"英吨(long ton)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/1016/1e3)})}),(0,t.jsx)(y.Z.Item,{label:"美吨(short ton)",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/907/1e3)})})]})]}),(0,t.jsxs)(d.Z,{span:8,children:[(0,t.jsx)(p.Z,{dashed:!0,plain:!0,children:"市制"}),(0,t.jsxs)(y.Z,{name:"basic3",labelCol:{span:8},autoComplete:"off",children:[(0,t.jsx)(y.Z.Item,{label:"担",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/5e4)})}),(0,t.jsx)(y.Z.Item,{label:"斤",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/500)})}),(0,t.jsx)(y.Z.Item,{label:"两",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/50)})}),(0,t.jsx)(y.Z.Item,{label:"钱",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/5)})}),(0,t.jsx)(y.Z.Item,{label:"分",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/5*10)})}),(0,t.jsx)(y.Z.Item,{label:"厘",children:(0,t.jsx)(s.default,{readOnly:!0,style:q,onClick:U,value:E(S/5*100)})})]})]})]})]})}},69810:(e,l,a)=>{a.r(l),a.d(l,{getDefaultCNType:()=>m,getDefaultIUType:()=>h,getDefaultMSType:()=>d,getDefaultType:()=>n,getDefaultUnitType:()=>c,getTypeList:()=>s,getTypePlaceholder:()=>r,setDefaultCNType:()=>f,setDefaultIUType:()=>b,setDefaultMSType:()=>p,setDefaultUnitType:()=>u});var t=a(56185);const s=e=>t.typeList.filter((l=>l.type===e)),n=e=>{switch(e){case"iu":return h();case"cn":return m()}return d()},r=e=>t.typeList.find((l=>l.value===e))?.placeholder,o="weight-convert:default-unit-type";function c(){const e=localStorage.getItem(o);return null===e?"ms":e}function u(e){localStorage.setItem(o,e)}const i="weight-convert:default-ms-type";function d(){const e=localStorage.getItem(i);return null===e?"kg":e}function p(e){localStorage.setItem(i,e)}const y="weight-convert:default-iu-type";function h(){const e=localStorage.getItem(y);return null===e?"oz":e}function b(e){localStorage.setItem(y,e)}const g="weight-convert:default-cn-type";function m(){const e=localStorage.getItem(g);return null===e?"jin":e}function f(e){localStorage.setItem(g,e)}},5929:(e,l,a)=>{async function t(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function s(e,l){let a=null,t=null,s=null;function n(){s=+new Date,s-a<l?t=setTimeout(n,l):(e(),t=null),a=s}return function(){a=+new Date,t||(t=setTimeout(n,l))}}function n(e,l=4,a=" "){return e.replace(new RegExp("(.{"+l+"})","g"),"$1"+a)}a.d(l,{Ds:()=>s,Jg:()=>n,TE:()=>t})}}]);
//# sourceMappingURL=7869.renderer.js.map