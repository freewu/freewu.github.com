"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5500],{5500:(e,o,s)=>{s.r(o),s.d(o,{default:()=>c});var n=s(5893);const c=()=>(0,n.jsxs)("div",{style:{overflowY:"scroll",height:"300px"},children:[(0,n.jsx)("h2",{children:"说明"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["中文编码就是将 中文转成 unicode 编码加上 %  如:  ",(0,n.jsx)("code",{children:"中"})," => ",(0,n.jsx)("code",{children:"E4 B8 AD"})," => ",(0,n.jsx)("code",{children:"%E4%B8%AD"})]}),(0,n.jsx)("li",{children:"encodeURI & encodeURIComponent 对于中文 unicode 编码的 url 再编码  "}),(0,n.jsx)("li",{children:"如果是 gbk / gb2313 / big5 编码后的中文字符会出现解码失败,需要使用后端处理"})]}),(0,n.jsx)("h2",{children:"encodeURIComponent "}),(0,n.jsx)("blockquote",{children:(0,n.jsx)("p",{children:"不转义的字符：A-Z a-z 0-9 - _ . ! ~ * ' ( )"})}),(0,n.jsx)("h2",{children:"encodeURI"}),(0,n.jsx)("blockquote",{children:(0,n.jsx)("p",{children:"不转义的字符：A-Z a-z 0-9 - _ . ! ~ * ' ( ) ; , / ? : @ & = + $ # "})}),(0,n.jsx)("h2",{children:"encodeURIComponent 和 encodeURI 区别"}),(0,n.jsxs)("code",{lang:"javascript",children:['var set1 = ";,/?:@&=+$";  // 保留字符 ',(0,n.jsx)("br",{}),'var set2 = "-_.!~*\'()";   // 不转义字符 ',(0,n.jsx)("br",{}),'var set3 = "#";           // 数字标志 ',(0,n.jsx)("br",{}),'var set4 = "ABC abc 123"; // 字母数字字符和空格 ',(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"console.log(encodeURI(set1)); // ;,/?:@&=+$ ",(0,n.jsx)("br",{}),"console.log(encodeURI(set2)); // -_.!~*'() ",(0,n.jsx)("br",{}),"console.log(encodeURI(set3)); // # ",(0,n.jsx)("br",{}),"console.log(encodeURI(set4)); // ABC%20abc%20123 (空格被编码为 %20) ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24 ",(0,n.jsx)("br",{}),"console.log(encodeURIComponent(set2)); // -_.!~*'() ",(0,n.jsx)("br",{}),"console.log(encodeURIComponent(set3)); // %23 ",(0,n.jsx)("br",{}),"console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (空格被编码为 %20) ",(0,n.jsx)("br",{})]})]})}}]);
//# sourceMappingURL=5500.renderer.js.map