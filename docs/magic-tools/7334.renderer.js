"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[7334,9313],{21059:(t,d,e)=>{e.d(d,{Z:()=>l});var r=e(1413),n=e(67294);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};var a=e(30076),i=function(t,d){return n.createElement(a.Z,(0,r.Z)((0,r.Z)({},t),{},{ref:d,icon:o}))};const l=n.forwardRef(i)},26139:(t,d,e)=>{e.d(d,{Z:()=>l});var r=e(1413),n=e(67294);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};var a=e(30076),i=function(t,d){return n.createElement(a.Z,(0,r.Z)((0,r.Z)({},t),{},{ref:d,icon:o}))};const l=n.forwardRef(i)},65460:(t,d,e)=>{e.d(d,{Z:()=>p});var r=e(94184),n=e.n(r),o=e(67294),a=e(53124),i=e(14747),l=e(67968),c=e(45503);const s=t=>{const{componentCls:d,sizePaddingEdgeHorizontal:e,colorSplit:r,lineWidth:n}=t;return{[d]:Object.assign(Object.assign({},(0,i.Wf)(t)),{borderBlockStart:`${n}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${n}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${d}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${n}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${d}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${d}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${d}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${n}px 0 0`},[`&-horizontal${d}-with-text${d}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${d}-dashed`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${d}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${d}-with-text-left${d}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${d}-inner-text`]:{paddingInlineStart:e}},[`&-horizontal${d}-with-text-right${d}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${d}-inner-text`]:{paddingInlineEnd:e}}})}},h=(0,l.Z)("Divider",(t=>{const d=(0,c.TS)(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[s(d)]}),{sizePaddingEdgeHorizontal:0});var f=function(t,d){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&d.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)d.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]])}return e};const p=t=>{const{getPrefixCls:d,direction:e}=o.useContext(a.E_),{prefixCls:r,type:i="horizontal",orientation:l="center",orientationMargin:c,className:s,rootClassName:p,children:u,dashed:g,plain:b}=t,x=f(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),m=d("divider",r),[v,w]=h(m),y=l.length>0?`-${l}`:l,C=!!u,$="left"===l&&null!=c,A="right"===l&&null!=c,B=n()(m,w,`${m}-${i}`,{[`${m}-with-text`]:C,[`${m}-with-text${y}`]:C,[`${m}-dashed`]:!!g,[`${m}-plain`]:!!b,[`${m}-rtl`]:"rtl"===e,[`${m}-no-default-orientation-margin-left`]:$,[`${m}-no-default-orientation-margin-right`]:A},s,p),S=Object.assign(Object.assign({},$&&{marginLeft:c}),A&&{marginRight:c});return v(o.createElement("div",Object.assign({className:B},x,{role:"separator"}),u&&"vertical"!==i&&o.createElement("span",{className:`${m}-inner-text`,style:S},u)))}},97334:(t,d,e)=>{e.r(d),e.d(d,{default:()=>V});var r=e(85893),n=e(41249),o=e(84466),a=e(17180),i=e(69053),l=e(62327),c=e(65460),s=e(67294),h=e(21059),f=e(26139),p=e(5929),u=e(67932);const g="function"==typeof atob,b="function"==typeof btoa,x="function"==typeof Buffer,m="function"==typeof TextDecoder?new TextDecoder:void 0,v="function"==typeof TextEncoder?new TextEncoder:void 0,w=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),y=(t=>{let d={};return t.forEach(((t,e)=>d[t]=e)),d})(w),C=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,$=String.fromCharCode.bind(String),A="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),B=t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_")),S=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),k=t=>{let d,e,r,n,o="";const a=t.length%3;for(let a=0;a<t.length;){if((e=t.charCodeAt(a++))>255||(r=t.charCodeAt(a++))>255||(n=t.charCodeAt(a++))>255)throw new TypeError("invalid character found");d=e<<16|r<<8|n,o+=w[d>>18&63]+w[d>>12&63]+w[d>>6&63]+w[63&d]}return a?o.slice(0,a-3)+"===".substring(a):o},z=b?t=>btoa(t):x?t=>Buffer.from(t,"binary").toString("base64"):k,Z=x?t=>Buffer.from(t).toString("base64"):t=>{let d=[];for(let e=0,r=t.length;e<r;e+=4096)d.push($.apply(null,t.subarray(e,e+4096)));return z(d.join(""))},j=t=>{if(t.length<2)return(d=t.charCodeAt(0))<128?t:d<2048?$(192|d>>>6)+$(128|63&d):$(224|d>>>12&15)+$(128|d>>>6&63)+$(128|63&d);var d=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return $(240|d>>>18&7)+$(128|d>>>12&63)+$(128|d>>>6&63)+$(128|63&d)},E=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,T=t=>t.replace(E,j),D=x?t=>Buffer.from(t,"utf8").toString("base64"):v?t=>Z(v.encode(t)):t=>z(T(t)),L=(t,d=!1)=>d?B(D(t)):D(t),R=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,O=t=>{switch(t.length){case 4:var d=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return $(55296+(d>>>10))+$(56320+(1023&d));case 3:return $((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return $((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},F=t=>t.replace(R,O),I=t=>{if(t=t.replace(/\s+/g,""),!C.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let d,e,r,n="";for(let o=0;o<t.length;)d=y[t.charAt(o++)]<<18|y[t.charAt(o++)]<<12|(e=y[t.charAt(o++)])<<6|(r=y[t.charAt(o++)]),n+=64===e?$(d>>16&255):64===r?$(d>>16&255,d>>8&255):$(d>>16&255,d>>8&255,255&d);return n},M=g?t=>atob(S(t)):x?t=>Buffer.from(t,"base64").toString("binary"):I,W=x?t=>A(Buffer.from(t,"base64")):t=>A(M(t).split("").map((t=>t.charCodeAt(0)))),U=x?t=>Buffer.from(t,"base64").toString("utf8"):m?t=>m.decode(W(t)):t=>F(M(t)),P=t=>S(t.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),N=t=>U(P(t)),G=L,H=N;var Y=e(89313);const{TextArea:_}=n.default,V=()=>{const[t,d]=(0,s.useState)(""),[e,n]=(0,s.useState)(""),[g,b]=(0,s.useState)(!1),[x,m]=o.ZP.useMessage(),v=t=>{const d=t.target.value.trim();""!==d&&((0,p.TE)(d),x.success("复制到粘贴板成功！！！"))};return(0,r.jsxs)("div",{children:[m,(0,r.jsx)(_,{style:{margin:"5px 0 5px 0"},onDoubleClick:v,onChange:t=>{d(t.target.value)},title:"双击复制内容到粘贴板",value:t,placeholder:"输入需要进行 Base64 编码的内容  或 拖拽文件到框内打开",autoSize:{minRows:5,maxRows:5},onDragOver:t=>{t.preventDefault()},onDrop:t=>{t.preventDefault(),(0,u.Z)(t.dataTransfer.files,d)}}),(0,r.jsx)(a.ZP,{onClick:()=>{""!=t.trim()&&n(G(t,g))},style:{backgroundColor:"#007bff",color:"#fff"},icon:(0,r.jsx)(h.Z,{}),children:"Base64 编码"}),(0,r.jsx)(a.ZP,{onClick:()=>{if(""!=e.trim()){let t="";try{t=H(e)}catch(t){x.error("解码失败！！！")}d(t)}},style:{backgroundColor:"#28a745",color:"#fff"},icon:(0,r.jsx)(f.Z,{}),children:"Base64 解码"})," ",(0,r.jsx)(i.Z,{placement:"bottomRight",title:'\nBase64编码后的字符串中可能包含"+/="之类的字符，而"/"，"="等是URL的保留字符或不安全字符，因此如果直接在URL中传输Base64编码，保留字符和不安全字符会被替换为%XX的形式，对后端来说解码不方便。如果不替换，就会造成URL注入漏洞。\n因此，有一种URL安全的Base64编码，可以解决这个问题。 URL安全的Base64编码特点：\n\n  1 不能被3整除时，不补=符号。\n  2 生成Base64编码中，"+"和"/"被替换成其他非URL保留字符，使其可以直接放入URL中传输。比如"+"和"/"被替换成"-"和"_"。\n\n安全的Base64编码也有好多种，有些编码不会去掉等号，有些编码替换的符号不同\n',children:(0,r.jsx)(l.Z,{onChange:t=>{b(t.target.checked)},checked:g,children:"安全"})})," ",(0,r.jsx)(a.ZP,{onClick:()=>{d(""),n("")},style:{backgroundColor:"#dc3545",color:"#fff"},children:"清除"}),(0,r.jsx)(_,{style:{margin:"5px 0 5px 0"},onDoubleClick:v,onChange:t=>{n(t.target.value)},title:"双击复制内容到粘贴板",value:e,placeholder:"输入需要进行 Base64 解码的内容  或 拖拽文件到框内打开",autoSize:{minRows:5,maxRows:5},onDragOver:t=>{t.preventDefault()},onDrop:t=>{t.preventDefault(),(0,u.Z)(t.dataTransfer.files,n)}}),(0,r.jsx)(c.Z,{children:" Base64 编码说明 "}),(0,r.jsx)(Y.default,{})]})}},89313:(t,d,e)=>{e.r(d),e.d(d,{default:()=>n});var r=e(85893);const n=()=>(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:"\n<h2>编码方式</h2>\n<blockquote><p>base64编码是一种常见的编码方式，主要用于对8bit的字节进行编码</p>\n</blockquote>\n<ul>\n<li><p>把三个字节作为一组，转化为二进制的形式，一共3*8=24个二进制位。例如： abc 三个字符用ASCII编码，转换为二进制： </p>\n<pre><code>a b c   =&gt;  01100001 01100010 01100011\n</code></pre>\n</li>\n<li><p>把24个二进制数字每6个一组，分为4组 </p>\n<pre><code>011000 010110 001001 100011\n</code></pre>\n</li>\n<li><p>按照表格(下方)，把每组二进制串转为对应字符 </p>\n<pre><code>011000 010110 001001 100011 =&gt; Y W J j\n</code></pre>\n</li>\n\n</ul>\n<h2>编码表</h2>\n<figure><table>\n<thead>\n<tr><th>码值</th><th>BIN</th><th>字符</th><th>码值</th><th>BIN</th><th>字符</th><th>码值</th><th>BIN</th><th>字符</th><th>码值</th><th>Bin</th><th>字符</th></tr></thead>\n<tbody><tr><td>0</td><td>0000 0000</td><td>A</td><td>16</td><td>0001 0000</td><td>Q</td><td>32</td><td>0010 0000</td><td>g</td><td>48</td><td>0011 0000</td><td>w</td></tr><tr><td>1</td><td>0000 0001</td><td>B</td><td>17</td><td>0001 0001</td><td>R</td><td>33</td><td>0010 0001</td><td>h</td><td>49</td><td>0011 0001</td><td>x</td></tr><tr><td>2</td><td>0000 0010</td><td>C</td><td>18</td><td>0001 0010</td><td>S</td><td>34</td><td>0010 0010</td><td>i</td><td>50</td><td>0011 0010</td><td>y</td></tr><tr><td>3</td><td>0000 0011</td><td>D</td><td>19</td><td>0001 0011</td><td>T</td><td>35</td><td>0010 0011</td><td>j</td><td>51</td><td>0011 0011</td><td>z</td></tr><tr><td>4</td><td>0000 0100</td><td>E</td><td>20</td><td>0001 0100</td><td>U</td><td>36</td><td>0010 0100</td><td>k</td><td>52</td><td>0011 0100</td><td>0</td></tr><tr><td>5</td><td>0000 0101</td><td>F</td><td>21</td><td>0001 0101</td><td>V</td><td>37</td><td>0010 0101</td><td>l</td><td>53</td><td>0011 0101</td><td>1</td></tr><tr><td>6</td><td>0000 0110</td><td>G</td><td>22</td><td>0001 0110</td><td>W</td><td>38</td><td>0010 0110</td><td>m</td><td>54</td><td>0011 0110</td><td>2</td></tr><tr><td>7</td><td>0000 0111</td><td>H</td><td>23</td><td>0001 0111</td><td>X</td><td>39</td><td>0010 0111</td><td>n</td><td>55</td><td>0011 0111</td><td>3</td></tr><tr><td>8</td><td>0000 1000</td><td>I</td><td>24</td><td>0001 1000</td><td>Y</td><td>40</td><td>0010 1000</td><td>o</td><td>56</td><td>0011 1000</td><td>4</td></tr><tr><td>9</td><td>0000 1001</td><td>J</td><td>25</td><td>0001 1001</td><td>Z</td><td>41</td><td>0010 1001</td><td>p</td><td>57</td><td>0011 1001</td><td>5</td></tr><tr><td>10</td><td>0000 1010</td><td>K</td><td>26</td><td>0001 1010</td><td>a</td><td>42</td><td>0010 1010</td><td>q</td><td>58</td><td>0011 1010</td><td>6</td></tr><tr><td>11</td><td>0000 1011</td><td>L</td><td>27</td><td>0001 1011</td><td>b</td><td>43</td><td>0010 1011</td><td>r</td><td>59</td><td>0011 1011</td><td>7</td></tr><tr><td>12</td><td>0000 1100</td><td>M</td><td>28</td><td>0001 1100</td><td>c</td><td>44</td><td>0010 1100</td><td>s</td><td>60</td><td>0011 1100</td><td>8</td></tr><tr><td>13</td><td>000 1101</td><td>N</td><td>29</td><td>0001 1101</td><td>d</td><td>45</td><td>0010 1101</td><td>t</td><td>61</td><td>0011 1101</td><td>9</td></tr><tr><td>14</td><td>0000 1110</td><td>O</td><td>30</td><td>0001 1110</td><td>e</td><td>46</td><td>0010 1110</td><td>u</td><td>62</td><td>0011 1110</td><td>+</td></tr><tr><td>15</td><td>0000 1111</td><td>P</td><td>31</td><td>0001 1111</td><td>f</td><td>47</td><td>0010 1111</td><td>v</td><td>63</td><td>0011 1111</td><td>/</td></tr></tbody>\n</table></figure>\n<h2>特殊处理(字节数不能被三整除时的)</h2>\n<blockquote><p>如果需要编码的字节不能被3整除怎么办？比如最后剩下一个单字节(如:a)，或者双字节(如:ab)。这时候我们需要特殊处理</p>\n</blockquote>\n<ol>\n<li>不足6个二进制位的补0</li>\n<li>不足4组的，最后补字符串(=)</li>\n\n</ol>\n<h3>单字节处理 </h3>\n<ul>\n<li><p>1 拆解二进制</p>\n<pre><code>a  =&gt; 01100001 =&gt; 011000 01\n</code></pre>\n</li>\n<li><p>2 补0</p>\n<pre><code>011000 01  =&gt; 011000 010000 =&gt; 24 16\n</code></pre>\n</li>\n<li><p>3 不足4组,补=符号</p>\n<pre><code>24 16 =&gt; YQ  =&gt; YQ==\n</code></pre>\n</li>\n\n</ul>\n<h3>双字节处理 </h3>\n<ul>\n<li><p>1 拆解二进制</p>\n<pre><code>ab =&gt; 01100001 01100010 =&gt; 011000 010110 0010\n</code></pre>\n</li>\n<li><p>2 补0</p>\n<pre><code>011000 010110 0010  =&gt; 011000 010110 001000 =&gt; 24 22 8\n</code></pre>\n</li>\n<li><p>3 不足4组,补=符号</p>\n<pre><code>24 22 8 =&gt; YWI  =&gt; YWI=\n</code></pre>\n</li>\n\n</ul>\n"},style:{overflowY:"scroll",height:"300px"}})},67932:(t,d,e)=>{e.d(d,{Z:()=>r});const r=(t,d)=>{if(0===t.length)return;const e=new FileReader;e.onerror=t=>{console.log(t)},e.onload=()=>{d(e.result)},e.readAsText(t[0])}},5929:(t,d,e)=>{async function r(t){return"clipboard"in navigator?await navigator.clipboard.writeText(t):document.execCommand("copy",!0,t)}function n(t,d){let e=null,r=null,n=null;function o(){n=+new Date,n-e<d?r=setTimeout(o,d):(t(),r=null),e=n}return function(){e=+new Date,r||(r=setTimeout(o,d))}}function o(t,d=4,e=" "){return t.replace(new RegExp("(.{"+d+"})","g"),"$1"+e)}e.d(d,{Ds:()=>n,Jg:()=>o,TE:()=>r})}}]);
//# sourceMappingURL=7334.renderer.js.map