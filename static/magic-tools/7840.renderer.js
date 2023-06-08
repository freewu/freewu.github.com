"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7840,9909],{9909:(e,t,n)=>{n.r(t),n.d(t,{commaPositionList:()=>r,indentStyleList:()=>a,keywordCaseList:()=>s,languageList:()=>l,logicalOperatorNewlineList:()=>i});const l=["mysql","mariadb","postgresql","spark","sqlite","hive","sql","db2","bigquery","n1ql","plsql","redshift","trino","transactsql","singlestoredb","snowflake"],s=["preserve","upper","lower"],a=["standard","tabularLeft","tabularRight"],r=["before","after","tabular"],i=["before","after"]},492:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var l=n(5893),s=n(1249),a=n(4604),r=n(9650),i=n(7180),o=n(5915),u=n(5460),c=n(7294),d=n(5929),g=n(5710),h=n(3377),p=n(9909),f=(n(24),n(637));const{TextArea:y}=s.default,w=()=>{const e=()=>window.innerHeight-380+"px";let t;const[n,s]=(0,c.useState)(""),[w,x]=(0,c.useState)(""),[b,m]=(0,c.useState)(""),[C,k]=a.ZP.useMessage(),[v,S]=(0,c.useState)("mysql"),[j,L]=(0,c.useState)("upper"),[q,Z]=(0,c.useState)("standard"),[T,R]=(0,c.useState)(e());window.addEventListener("resize",(0,d.Ds)((()=>{R(e())}),100));const D=(e,t)=>{if(""===(e=e.trim()))return m(""),void x("");try{const n=(0,h.WU)(e,t);m(n),x(f.Z.highlight(n,{language:"sql"}).value)}catch(e){console.log(e)}},E=(e="",t=null)=>({language:"language"==e?t:v,keywordCase:"keywordCase"==e?t:j,indentStyle:"indentStyle"==e?t:q});return(0,l.jsxs)("div",{children:[k,(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(i.ZP,{onClick:()=>{m(""),s(""),x("")},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"}),(0,l.jsx)("label",{children:"语言类型:"}),(0,l.jsx)(o.Z,{value:v,style:{width:120},onChange:e=>{S(e),D(n,E("language",e))},options:(0,g.c)(p.languageList)}),(0,l.jsx)("label",{children:"关键字格式:"}),(0,l.jsx)(o.Z,{value:j,style:{width:100},onChange:e=>{L(e),D(n,E("keywordCase",e))},options:(0,g.c)(p.keywordCaseList)}),(0,l.jsx)("label",{children:"对齐方式:"}),(0,l.jsx)(o.Z,{value:q,style:{width:100},onChange:e=>{Z(e),D(n,E("indentStyle",e))},options:(0,g.c)(p.indentStyleList)}),(0,l.jsx)(i.ZP,{onClick:()=>{t?.click()},style:{backgroundColor:"#007bff",color:"#fff"},children:"打开 SQL 文件"}),(0,l.jsx)("input",{onChange:async e=>{const t=e.target.files||[];if(0===t.length)return;const n=new FileReader;n.onerror=e=>{console.log(e)},n.onload=()=>{s(n.result),D(n.result,E())},n.readAsText(t[0])},ref:e=>t=e,type:"file",id:"fileInput",style:{display:"none"},accept:".sql"})]}),(0,l.jsx)(y,{style:{margin:"12px 0 5px 0"},onChange:e=>{s(e.target.value),D(e.target.value,E())},value:n,placeholder:"输入需要格式化的 SQL 语句",autoSize:{minRows:5,maxRows:5}}),(0,l.jsx)(u.Z,{dashed:!0}),(0,l.jsx)("div",{style:{height:T},title:"点击复制内容到粘贴板",onClick:e=>{""!==b.trim()&&((0,d.TE)(b),C.success("复制到粘贴板成功！！！"))},className:"code-output",children:(0,l.jsx)("pre",{dangerouslySetInnerHTML:{__html:w}})})]})}},5710:(e,t,n)=>{function l(e){return e.map(((e,t)=>({label:e,value:e})))}n.d(t,{c:()=>l})},5929:(e,t,n)=>{async function l(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function s(e,t){let n=null,l=null,s=null;function a(){s=+new Date,s-n<t?l=setTimeout(a,t):(e(),l=null),n=s}return function(){n=+new Date,l||(l=setTimeout(a,t))}}function a(e,t=4,n=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+n)}n.d(t,{Ds:()=>s,Jg:()=>a,TE:()=>l})}}]);
//# sourceMappingURL=7840.renderer.js.map