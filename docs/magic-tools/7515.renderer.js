"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[7515,5444],{7515:(e,t,a)=>{a.r(t),a.d(t,{emptyResult:()=>l,timeList:()=>g});var n=a(35444);const l={ts10:"",ts13:"",rfc3339:"",iso8601:"",rfc2822:"",locale:"",utc:"",custom:""},g=[{lable:"当前时间戳",value:(new Date).getTime()+""},{lable:"当前时间",value:(0,n.formatDateTime)(new Date)},{lable:"上周",value:(0,n.formatDateTime)((0,n.getLastWeek)())},{lable:"下周",value:(0,n.formatDateTime)((0,n.getNextWeek)())},{lable:"上月",value:(0,n.formatDateTime)((0,n.getLastMonth)())},{lable:"下月",value:(0,n.formatDateTime)((0,n.getNextMonth)())},{lable:"本月初",value:(0,n.formatDateTime)((0,n.getMonthBegin)())},{lable:"本月末",value:(0,n.formatDateTime)((0,n.getMonthEnd)())},{lable:"上月初",value:(0,n.formatDateTime)((0,n.getLastMonthBegin)())},{lable:"上月末",value:(0,n.formatDateTime)((0,n.getLastMonthEnd)())},{lable:"下月初",value:(0,n.formatDateTime)((0,n.getNextMonthBegin)())},{lable:"下月末",value:(0,n.formatDateTime)((0,n.getNextMonthEnd)())}]},35444:(e,t,a)=>{a.r(t),a.d(t,{formatDateTime:()=>n,getLastMonth:()=>r,getLastMonthBegin:()=>w,getLastMonthEnd:()=>i,getLastWeek:()=>g,getMonthBegin:()=>o,getMonthEnd:()=>u,getNextMonth:()=>D,getNextMonthBegin:()=>m,getNextMonthEnd:()=>s,getNextWeek:()=>$,paddingZero:()=>l});const n=e=>{let t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),g=e.getHours(),$=e.getMinutes(),r=e.getSeconds();return`${t}-${l(a)}-${l(n)} ${l(g)}:${l($)}:${l(r)}`},l=e=>e>=0&&e<=9?"0"+String(e):String(e),g=()=>new Date((new Date).getTime()-6048e5),$=()=>new Date((new Date).getTime()+6048e5),r=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),l=e.getHours(),g=e.getMinutes(),$=e.getSeconds();if(1===a)return new Date(`${t-1}-12-${n} ${l}:${g}:${$}`);let r=new Date(t,a-1,0).getDate();return n>r?new Date(`${t-1}-${a}-${r} ${l}:${g}:${$}`):new Date(`${t}-${a-1}-${n} ${l}:${g}:${$}`)},D=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),l=e.getHours(),g=e.getMinutes(),$=e.getSeconds();if(12===a)return new Date(`${t+1}-1-${n} ${l}:${g}:${$}`);let r=new Date(t,a+1,0).getDate();return n>r?new Date(`${t-1}-${a}-${r} ${l}:${g}:${$}`):new Date(`${t}-${a+1}-${n} ${l}:${g}:${$}`)},o=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1;return new Date(`${t}-${a}-1 00:00:00`)},u=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=new Date(t,a,0).getDate();return new Date(`${t}-${a}-${n} 23:59:59`)},w=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1;return 1===a?new Date(t-1+"-12-1 00:00:00"):new Date(`${t}-${a-1}-1 00:00:00`)},i=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=new Date(t,a-1,0).getDate();return 1===a?new Date(`${t-1}-12-${n} 00:00:00`):new Date(`${t}-${a-1}-${n} 00:00:00`)},m=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1;return 12===a?new Date(`${t+1}-1-1 00:00:00`):new Date(`${t}-${a+1}-1 00:00:00`)},s=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=new Date(t,a+1,0).getDate();return 12===a?new Date(`${t+1}-1-${n} 00:00:00`):new Date(`${t}-${a+1}-${n} 00:00:00`)}}}]);
//# sourceMappingURL=7515.renderer.js.map