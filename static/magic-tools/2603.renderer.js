"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[2603,2533,2992,3416,4558,8721],{14777:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.r(t),a.d(t,{AppStoreSetting:()=>d});var n=a(85893),r=a(65460),s=a(77004),o=a(15915),i=a(96690),c=a(67294),u=a(26186),g=e([u]);u=(g.then?(await g)():g)[0];const d=()=>{const[e,t]=(0,c.useState)((0,i.getDefaultApp)());return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{orientation:"left",plain:!0,children:"应用中心"}),(0,n.jsx)(s.Z.Item,{label:"默认展示应用",children:(0,n.jsx)(o.Z,{value:e,style:{width:240},onChange:e=>{t(e),(0,i.setDefaultApp)(e)},options:(()=>{const e=[{value:"AppStore",label:"应用中心"},{value:"Help",label:"帮助"},{value:"Setting",label:"设置"}];return u.appList.forEach((t=>{e.push({value:t.key,label:t.label})})),e})()})})]})};l()}catch(e){l(e)}}))},12533:(e,t,a)=>{function l(){return["admin","123456","12345678","root","password","qwerty","1234","12345"]}a.r(t),a.d(t,{getDefaultPasswordList:()=>l,getPasswordList:()=>r,setPasswordList:()=>s});const n="hash:password-list";function r(){const e=localStorage.getItem(n);if(null===e)return["admin","123456","12345678","root","password","qwerty","1234","12345"];let t=e.split(",");return t=t.filter((e=>""!==e.trim())),0===t.length?["admin","123456","12345678","root","password","qwerty","1234","12345"]:t}function s(e){localStorage.setItem(n,e.join(","))}},63578:(e,t,a)=>{a.r(t),a.d(t,{HashSetting:()=>u});var l=a(85893),n=a(41249),r=a(65460),s=a(77004),o=a(67294),i=a(12533);const{TextArea:c}=n.default,u=()=>{const[e,t]=(0,o.useState)((0,i.getPasswordList)().join("\n"));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{orientation:"left",plain:!0,children:"Hash 值计算"}),(0,l.jsx)(s.Z.Item,{label:"展示默认字符串",children:(0,l.jsx)(c,{value:e,onChange:e=>{const a=e.target.value;let l=a.trim().split("\n");l=l.map((e=>e.trim().replaceAll(" ",""))),l=l.filter((e=>""!==e.trim())),t(a),(0,i.setPasswordList)(l)},placeholder:"每行一条数据",autoSize:{minRows:3,maxRows:5}})})]})}},62992:(e,t,a)=>{a.r(t),a.d(t,{getDefaultPassphrase:()=>n,setDefaultPassphrase:()=>r});const l="hmac-hash:default-passphrase";function n(){const e=localStorage.getItem(l);return null===e?"":e}function r(e){localStorage.setItem(l,e)}},53108:(e,t,a)=>{a.r(t),a.d(t,{HmacHashSetting:()=>u});var l=a(85893),n=a(65460),r=a(77004),s=a(19650),o=a(41249),i=a(67294),c=a(62992);const u=()=>{const[e,t]=(0,i.useState)((0,c.getDefaultPassphrase)());return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{orientation:"left",plain:!0,children:"HmacHash 值计算"}),(0,l.jsx)(r.Z.Item,{label:"默认密钥",children:(0,l.jsx)(s.Z,{children:(0,l.jsx)(o.default,{allowClear:!0,style:{width:"520px"},onChange:e=>{t(e.target.value),(0,c.setDefaultPassphrase)(e.target.value)},value:e})})})]})}},57273:(e,t,a)=>{a.r(t),a.d(t,{genValuePlaceholder:()=>p,getDefaultHashAlgo:()=>s,getDefaultIteration:()=>d,getDefaultKeyLength:()=>S,getDefaultSalt:()=>c,getHashAlgo:()=>n,setDefaultHashAlgo:()=>o,setDefaultIteration:()=>h,setDefaultKeyLength:()=>m,setDefaultSalt:()=>u});var l=a(81354);const n=e=>{switch(e){case"MD5":return l.algo.MD5;case"SHA1":return l.algo.SHA1;case"SHA3":return l.algo.SHA3;case"SHA224":return l.algo.SHA224;case"SHA256":return l.algo.SHA256;case"SHA384":return l.algo.SHA384;case"SHA512":return l.algo.SHA512;case"RIPEMD160":return l.algo.RIPEMD160}return l.algo.SHA256},r="pbkdf2-calc:default-hash-algo",s=()=>{const e=localStorage.getItem(r);return null===e?"SHA256":e};function o(e){localStorage.setItem(r,e)}const i="pbkdf2-calc:default-salt";function c(){const e=localStorage.getItem(i);return null===e?"":e}function u(e){localStorage.setItem(i,e)}const g="pbkdf2-calc:default-iteration";function d(){const e=localStorage.getItem(g);return null===e?1e3:parseInt(e)}function h(e){localStorage.setItem(g,e.toString())}const f="pbkdf2-calc:default-key-length";function S(){const e=localStorage.getItem(f);return null===e?128:parseInt(e)}function m(e){localStorage.setItem(f,e.toString())}const p=e=>"输入需要计算 PBKDF2-"+e+" 值的内容 或 拖拽文件到框内打开"},70590:(e,t,a)=>{a.r(t),a.d(t,{PBKDF2CalcSetting:()=>u});var l=a(85893),n=a(65460),r=a(77004),s=a(41249),o=a(16424),i=a(67294),c=a(57273);const u=()=>{const[e,t]=(0,i.useState)((0,c.getDefaultHashAlgo)()),[a,u]=(0,i.useState)((0,c.getDefaultSalt)()),[g,d]=(0,i.useState)((0,c.getDefaultIteration)()),[h,f]=(0,i.useState)((0,c.getDefaultKeyLength)());return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{orientation:"left",plain:!0,children:"PBKDF2 值计算"}),(0,l.jsx)(r.Z.Item,{label:"默认盐值(Salt)",children:(0,l.jsx)(s.default,{showCount:!0,allowClear:!0,style:{width:520},onChange:e=>{u(e.target.value),(0,c.setDefaultSalt)(e.target.value)},value:a})}),(0,l.jsx)(r.Z.Item,{label:"迭代次数",children:(0,l.jsx)(o.Z,{addonAfter:"次",min:1,max:1e5,style:{width:200},onChange:e=>{null!=e&&e>=1&&e<=1e5&&((0,c.setDefaultIteration)(e),d(e))},value:g})}),(0,l.jsx)(r.Z.Item,{label:"推导密钥长度",children:(0,l.jsx)(o.Z,{addonAfter:"位",placeholder:"推荐 128 / 256 / 512",title:"推荐 128 / 256 / 512",min:16,max:2048,style:{width:200},onChange:e=>{null!=e&&e>=16&&e<=1024&&((0,c.setDefaultKeyLength)(e),f(e))},value:h})})]})}},73416:(e,t,a)=>{a.r(t),a.d(t,{errorCorrectionLevelList:()=>l});const l=[{value:"L",label:"Low",info:"~7%"},{value:"M",label:"Medium",info:"~15%"},{value:"Q",label:"Quartile",info:"~25%"},{value:"H",label:"High",info:"~30%"}]},84558:(e,t,a)=>{a.r(t),a.d(t,{getDefaultErrorLevel:()=>r,getDefaultSize:()=>c,getErrorLevelTip:()=>o,setDefaultErrorLevel:()=>s,setDefaultSize:()=>u});var l=a(73416);const n="qrcode:default-error-level";function r(){const e=localStorage.getItem(n);return null===e?"M":e}function s(e){l.errorCorrectionLevelList.find((t=>t.value===e))?localStorage.setItem(n,e):localStorage.setItem(n,"M")}function o(e){const t=l.errorCorrectionLevelList.find((t=>t.value===e));return t?t.info:""}const i="qrcode:default-size";function c(){const e=localStorage.getItem(i);if(null===e)return 160;const t=parseInt(e);return t<160?160:t}function u(e){e>=160?localStorage.setItem(i,e.toString()):localStorage.setItem(i,"160")}},79051:(e,t,a)=>{a.r(t),a.d(t,{QRCodeGeneratorSetting:()=>d});var l=a(85893),n=a(65460),r=a(77004),s=a(15915),o=a(19650),i=a(29289),c=a(84558),u=a(67294),g=a(73416);const d=()=>{const[e,t]=(0,u.useState)((0,c.getDefaultErrorLevel)()),[a,d]=(0,u.useState)((0,c.getDefaultSize)());return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{orientation:"left",plain:!0,children:"二维码生成"}),(0,l.jsx)(r.Z.Item,{label:"默认容错等级",children:(0,l.jsx)(s.Z,{value:e,style:{width:240},onChange:e=>{t(e),(0,c.setDefaultErrorLevel)(e)},options:g.errorCorrectionLevelList})}),(0,l.jsx)(r.Z.Item,{label:"默认尺寸",children:(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("div",{style:{width:"520px"},children:(0,l.jsx)(i.Z,{value:a,min:160,max:360,onChange:e=>{d(e),(0,c.setDefaultSize)(e)}})}),a]})})]})}},28721:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.r(t),a.d(t,{itemList:()=>g});var n=a(85893),r=a(65631),s=a(28596),o=a(26841),i=a(35679),c=a(85768),u=e([r]);r=(u.then?(await u)():u)[0];const g=[{key:"system",label:"系统设置",children:(0,n.jsx)(r.SettingSystem,{})},{key:"crypto",label:"加解密",children:(0,n.jsx)(s.SettingCrypto,{})},{key:"value-calc",label:"值计算",children:(0,n.jsx)(o.SettingValueCalc,{})},{key:"convert",label:"类型转换",children:(0,n.jsx)(i.SettingConvert,{})},{key:"misc",label:"其它",children:(0,n.jsx)(c.SettingMisc,{})}];l()}catch(e){l(e)}}))},52603:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.r(t),a.d(t,{default:()=>u});var n=a(85893),r=a(11106),s=a(67294),o=a(5929),i=a(28721),c=e([i]);i=(c.then?(await c)():c)[0];const u=()=>{const e=()=>window.innerHeight-70+"px",[t,a]=(0,s.useState)(e());return window.addEventListener("resize",(0,o.Ds)((()=>{a(e())}),100)),(0,n.jsx)("div",{style:{height:t,overflowY:"auto"},children:(0,n.jsx)(r.Z,{items:i.itemList})})};l()}catch(e){l(e)}}))},85768:(e,t,a)=>{a.r(t),a.d(t,{SettingMisc:()=>o});var l=a(85893),n=a(77004),r=a(70293),s=a(79051);const o=()=>(0,l.jsxs)(n.Z,{labelCol:{span:5},wrapperCol:{span:18},layout:"horizontal",style:{maxWidth:800},children:[(0,l.jsx)(r.ColorSetting,{}),(0,l.jsx)(s.QRCodeGeneratorSetting,{})]})},65631:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.r(t),a.d(t,{SettingSystem:()=>g});var n=a(85893),r=a(29480),s=a(67294),o=a(77004),i=a(97573),c=a(14777),u=e([c]);c=(u.then?(await u)():u)[0];const g=()=>{const[e,t]=(0,s.useState)((0,r.f)());return(0,n.jsxs)(o.Z,{labelCol:{span:5},wrapperCol:{span:18},layout:"horizontal",style:{maxWidth:800},children:[(0,n.jsx)(o.Z.Item,{label:"默认展开右边栏",children:(0,n.jsx)(i.Z,{checked:e,onChange:e=>{t(e),localStorage.setItem("sider-flag",e+"")}})}),(0,n.jsx)(c.AppStoreSetting,{})]})};l()}catch(e){l(e)}}))},26841:(e,t,a)=>{a.r(t),a.d(t,{SettingValueCalc:()=>i});var l=a(85893),n=a(77004),r=a(63578),s=a(70590),o=a(53108);const i=()=>(0,l.jsxs)(n.Z,{labelCol:{span:5},wrapperCol:{span:18},layout:"horizontal",style:{maxWidth:800},children:[(0,l.jsx)(r.HashSetting,{}),(0,l.jsx)(s.PBKDF2CalcSetting,{}),(0,l.jsx)(o.HmacHashSetting,{})]})},5929:(e,t,a)=>{async function l(e){return"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}function n(e,t){let a=null,l=null,n=null;function r(){n=+new Date,n-a<t?l=setTimeout(r,t):(e(),l=null),a=n}return function(){a=+new Date,l||(l=setTimeout(r,t))}}function r(e,t=4,a=" "){return e.replace(new RegExp("(.{"+t+"})","g"),"$1"+a)}a.d(t,{Ds:()=>n,Jg:()=>r,TE:()=>l})}}]);
//# sourceMappingURL=2603.renderer.js.map