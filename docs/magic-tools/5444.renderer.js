"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[5444],{35444:(e,t,n)=>{n.r(t),n.d(t,{formatDateTime:()=>a,getLastMonth:()=>r,getLastMonthBegin:()=>u,getLastMonthEnd:()=>s,getLastWeek:()=>g,getMonthBegin:()=>l,getMonthEnd:()=>o,getNextMonth:()=>w,getNextMonthBegin:()=>h,getNextMonthEnd:()=>M,getNextWeek:()=>D,paddingZero:()=>$});const a=e=>{let t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),g=e.getHours(),D=e.getMinutes(),r=e.getSeconds();return`${t}-${$(n)}-${$(a)} ${$(g)}:${$(D)}:${$(r)}`},$=e=>e>=0&&e<=9?"0"+String(e):String(e),g=()=>new Date((new Date).getTime()-6048e5),D=()=>new Date((new Date).getTime()+6048e5),r=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),$=e.getHours(),g=e.getMinutes(),D=e.getSeconds();if(1===n)return new Date(`${t-1}-12-${a} ${$}:${g}:${D}`);let r=new Date(t,n-1,0).getDate();return a>r?new Date(`${t-1}-${n}-${r} ${$}:${g}:${D}`):new Date(`${t}-${n-1}-${a} ${$}:${g}:${D}`)},w=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),$=e.getHours(),g=e.getMinutes(),D=e.getSeconds();if(12===n)return new Date(`${t+1}-1-${a} ${$}:${g}:${D}`);let r=new Date(t,n+1,0).getDate();return a>r?new Date(`${t-1}-${n}-${r} ${$}:${g}:${D}`):new Date(`${t}-${n+1}-${a} ${$}:${g}:${D}`)},l=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1;return new Date(`${t}-${n}-1 00:00:00`)},o=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=new Date(t,n,0).getDate();return new Date(`${t}-${n}-${a} 23:59:59`)},u=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1;return 1===n?new Date(t-1+"-12-1 00:00:00"):new Date(`${t}-${n-1}-1 00:00:00`)},s=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=new Date(t,n-1,0).getDate();return 1===n?new Date(`${t-1}-12-${a} 00:00:00`):new Date(`${t}-${n-1}-${a} 00:00:00`)},h=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1;return 12===n?new Date(`${t+1}-1-1 00:00:00`):new Date(`${t}-${n+1}-1 00:00:00`)},M=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=new Date(t,n+1,0).getDate();return 12===n?new Date(`${t+1}-1-${a} 00:00:00`):new Date(`${t}-${n+1}-${a} 00:00:00`)}}}]);
//# sourceMappingURL=5444.renderer.js.map