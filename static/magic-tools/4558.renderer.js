"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[4558,3416],{73416:(e,t,o)=>{o.r(t),o.d(t,{errorCorrectionLevelList:()=>r});const r=[{value:"L",label:"Low",info:"~7%"},{value:"M",label:"Medium",info:"~15%"},{value:"Q",label:"Quartile",info:"~25%"},{value:"H",label:"High",info:"~30%"}]},84558:(e,t,o)=>{o.r(t),o.d(t,{getDefaultErrorLevel:()=>n,getDefaultSize:()=>c,getErrorLevelTip:()=>i,setDefaultErrorLevel:()=>a,setDefaultSize:()=>s});var r=o(73416);const l="qrcode:default-error-level";function n(){const e=localStorage.getItem(l);return null===e?"M":e}function a(e){r.errorCorrectionLevelList.find((t=>t.value===e))?localStorage.setItem(l,e):localStorage.setItem(l,"M")}function i(e){const t=r.errorCorrectionLevelList.find((t=>t.value===e));return t?t.info:""}const u="qrcode:default-size";function c(){const e=localStorage.getItem(u);if(null===e)return 160;const t=parseInt(e);return t<160?160:t}function s(e){e>=160?localStorage.setItem(u,e.toString()):localStorage.setItem(u,"160")}}}]);
//# sourceMappingURL=4558.renderer.js.map