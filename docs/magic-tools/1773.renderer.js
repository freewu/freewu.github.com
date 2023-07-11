"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[1773,9283],{59283:(e,l,t)=>{t.r(l),t.d(l,{typeList:()=>s,unitTypeList:()=>a});const a=[{label:"公制",value:"ms",placeholder:"metric system"},{label:"英制",value:"iu",placeholder:"Imperial units"}],s=[{label:"厘米每秒(m/s)",value:"cms",type:"ms",placeholder:""},{label:"米每秒(m/s)",value:"ms",type:"ms",placeholder:""},{label:"千米每秒(km/s)",value:"kms",type:"ms",placeholder:""},{label:"千米每时(km/h)",value:"kmh",type:"ms",placeholder:""},{label:"马赫",value:"mach",type:"ms",placeholder:"马赫的大约速度换算一般认为相当于340.3 m/s，又大约等同于1225 km/h，761.2 mph，或者1116 ft/s。即视为等于声音在15摄氏度（59华氏度，288.15开氏度）的空气中传播的速度"},{label:"节",value:"knot",type:"ms",placeholder:"指 海里 / 小时，节是航海中代表速度的单位"},{label:"英里每时(m/h)",value:"mph",type:"iu",placeholder:""},{label:"英尺每秒(ft/s)",value:"fts",type:"iu",placeholder:""},{label:"英尺每分钟(ft/min)",value:"ftmin",type:"iu",placeholder:""},{label:"英寸每秒(in/s)",value:"ins",type:"iu",placeholder:""}]},31773:(e,l,t)=>{t.r(l),t.d(l,{getDefaultIUType:()=>h,getDefaultMSType:()=>r,getDefaultType:()=>p,getDefaultUnitType:()=>c,getTypeList:()=>s,getTypePlaceholder:()=>u,setDefaultIUType:()=>f,setDefaultMSType:()=>i,setDefaultUnitType:()=>n});var a=t(59283);const s=e=>a.typeList.filter((l=>l.type===e)),p=e=>"iu"===e?h():r(),u=e=>a.typeList.find((l=>l.value===e))?.placeholder,o="speed-convert:default-unit-type";function c(){const e=localStorage.getItem(o);return null===e?"ms":e}function n(e){localStorage.setItem(o,e)}const m="speed-convert:default-ms-type";function r(){const e=localStorage.getItem(m);return null===e?"kmh":e}function i(e){localStorage.setItem(m,e)}const y="speed-convert:default-iu-type";function h(){const e=localStorage.getItem(y);return null===e?"mph":e}function f(e){localStorage.setItem(y,e)}}}]);
//# sourceMappingURL=1773.renderer.js.map