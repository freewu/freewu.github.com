"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[4794],{43061:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(1413),c=a(67294);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"};var n=a(30076),r=function(e,t){return c.createElement(n.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:l}))};const i=c.forwardRef(r)},5641:(e,t,a)=>{a.r(t),a.d(t,{ConfigResult:()=>n});var o=a(85893),c=a(41249);const{TextArea:l}=c.default,n=({data:e,click:t,type:a})=>(0,o.jsx)(l,{status:e.error?"error":"",readOnly:!0,style:{margin:"5px 0 5px 0"},onClick:t,onMouseDown:t=>{if(2!==t.button)return;if(""!==t.target.value.trim()){const t=new Blob([e.data],{type:"application/"+a}),o=window.URL.createObjectURL(t),c=document.createElement("a");c.download="config."+a,c.href=o,document.body.appendChild(c),c.click(),document.body.removeChild(c)}},title:"单击复制内容到粘贴板,右击保存配置文件",value:e.data,autoSize:{minRows:10,maxRows:10}})}}]);
//# sourceMappingURL=4794.renderer.js.map