"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[9810,6185],{56185:(e,l,t)=>{t.r(l),t.d(l,{typeList:()=>o,unitTypeList:()=>a});const a=[{label:"公制",value:"ms",placeholder:"metric system"},{label:"英制",value:"iu",placeholder:"Imperial units"},{label:"市制",value:"cn",placeholder:""}],o=[{label:"千吨",value:"kt",type:"ms",placeholder:"kilo ton"},{label:"吨",value:"t",type:"ms",placeholder:"ton"},{label:"千克",value:"kg",type:"ms",placeholder:"kilo gram"},{label:"克",value:"g",type:"ms",placeholder:"gram"},{label:"毫克",value:"mg",type:"ms",placeholder:"milligram"},{label:"微克",value:"mcg",type:"ms",placeholder:"micro gram"},{label:"纳克",value:"ng",type:"ms",placeholder:"nanogram"},{label:"克拉",value:"ct",type:"ms",placeholder:"钻石的质量（重量）单位，现定1克拉等于0.2克或200毫克"},{label:"盎司",value:"oz",type:"iu",placeholder:"1 盎司 = 1/16 磅（pound）= 28.349523125 克"},{label:"磅",value:"lb",type:"iu",placeholder:"1 磅 = 7000 格令 = 453.59237 克"},{label:"英石",value:"st",type:"iu",placeholder:"1 英石（stone）= 14 磅 = 6.35029318 千克"},{label:"格令",value:"gr",type:"iu",placeholder:"1 格令（grain）= 64.79891 毫克"},{label:"打兰",value:"dr",type:"iu",placeholder:"1 打兰（drachm）= 1/16 盎司（ounce） = 1.77 克"},{label:"夸特",value:"qr",type:"iu",placeholder:"1 夸特（quarter）= 2 英石 = 28 磅 = 12.7 千克"},{label:"英担",value:"hw",type:"iu",placeholder:"1 英担（hundredweight）= 4 夸特 = 112 磅 = 50.8 千克"},{label:"美担",value:"md",type:"iu",placeholder:"1 美担 = 45.359237 千克"},{label:"英吨",value:"longton",type:"iu",placeholder:"1 英吨（ton）= 20 英担 = 2240 磅 = 1016 千克 英吨（长吨long ton）是2240磅"},{label:"美吨",value:"shortton",type:"iu",placeholder:"美吨（短吨short ton）是2000磅（907千克）"},{label:"担",value:"dan",type:"cn",placeholder:""},{label:"斤",value:"jin",type:"cn",placeholder:""},{label:"两",value:"liang",type:"cn",placeholder:""},{label:"钱",value:"qian",type:"cn",placeholder:""},{label:"分",value:"fen",type:"cn",placeholder:""},{label:"厘",value:"li",type:"cn",placeholder:""}]},69810:(e,l,t)=>{t.r(l),t.d(l,{getDefaultCNType:()=>v,getDefaultIUType:()=>h,getDefaultMSType:()=>s,getDefaultType:()=>u,getDefaultUnitType:()=>r,getTypeList:()=>o,getTypePlaceholder:()=>c,setDefaultCNType:()=>b,setDefaultIUType:()=>g,setDefaultMSType:()=>y,setDefaultUnitType:()=>p});var a=t(56185);const o=e=>a.typeList.filter((l=>l.type===e)),u=e=>{switch(e){case"iu":return h();case"cn":return v()}return s()},c=e=>a.typeList.find((l=>l.value===e))?.placeholder,n="weight-convert:default-unit-type";function r(){const e=localStorage.getItem(n);return null===e?"ms":e}function p(e){localStorage.setItem(n,e)}const i="weight-convert:default-ms-type";function s(){const e=localStorage.getItem(i);return null===e?"kg":e}function y(e){localStorage.setItem(i,e)}const d="weight-convert:default-iu-type";function h(){const e=localStorage.getItem(d);return null===e?"oz":e}function g(e){localStorage.setItem(d,e)}const m="weight-convert:default-cn-type";function v(){const e=localStorage.getItem(m);return null===e?"jin":e}function b(e){localStorage.setItem(m,e)}}}]);
//# sourceMappingURL=9810.renderer.js.map