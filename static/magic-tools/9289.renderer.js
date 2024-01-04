"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[9289],{29289:(e,t,n)=>{n.d(t,{Z:()=>q});var r=n(94184),o=n.n(r),a=n(4942),i=n(93433),l=n(29439),u=n(71002),c=n(67294),s=n(91881),d=n(21770),f=n(87462),v=n(44925),h=n(1413),m=n(15105);const p=c.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0});function g(e,t,n){return(e-t)/(n-t)}function b(e,t,n,r){var o=g(t,n,r),a={};switch(e){case"rtl":a.right="".concat(100*o,"%"),a.transform="translateX(50%)";break;case"btt":a.bottom="".concat(100*o,"%"),a.transform="translateY(50%)";break;case"ttb":a.top="".concat(100*o,"%"),a.transform="translateY(-50%)";break;default:a.left="".concat(100*o,"%"),a.transform="translateX(-50%)"}return a}function S(e,t){return Array.isArray(e)?e[t]:e}var x=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],k=c.forwardRef((function(e,t){var n,r,i=e.prefixCls,l=e.value,u=e.valueIndex,s=e.onStartMove,d=e.style,g=e.render,k=e.dragging,C=e.onOffsetChange,y=(0,v.Z)(e,x),E=c.useContext(p),M=E.min,Z=E.max,$=E.direction,w=E.disabled,z=E.keyboard,L=E.range,H=E.tabIndex,O=E.ariaLabelForHandle,P=E.ariaLabelledByForHandle,B=E.ariaValueTextFormatterForHandle,F="".concat(i,"-handle"),R=function(e){w||s(e,u)},I=b($,l,M,Z),D=c.createElement("div",(0,f.Z)({ref:t,className:o()(F,(n={},(0,a.Z)(n,"".concat(F,"-").concat(u+1),L),(0,a.Z)(n,"".concat(F,"-dragging"),k),n)),style:(0,h.Z)((0,h.Z)({},I),d),onMouseDown:R,onTouchStart:R,onKeyDown:function(e){if(!w&&z){var t=null;switch(e.which||e.keyCode){case m.Z.LEFT:t="ltr"===$||"btt"===$?-1:1;break;case m.Z.RIGHT:t="ltr"===$||"btt"===$?1:-1;break;case m.Z.UP:t="ttb"!==$?1:-1;break;case m.Z.DOWN:t="ttb"!==$?-1:1;break;case m.Z.HOME:t="min";break;case m.Z.END:t="max";break;case m.Z.PAGE_UP:t=2;break;case m.Z.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),C(t,u))}},tabIndex:w?null:S(H,u),role:"slider","aria-valuemin":M,"aria-valuemax":Z,"aria-valuenow":l,"aria-disabled":w,"aria-label":S(O,u),"aria-labelledby":S(P,u),"aria-valuetext":null===(r=S(B,u))||void 0===r?void 0:r(l)},y));return g&&(D=g(D,{index:u,prefixCls:i,value:l,dragging:k})),D}));const C=k;var y=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],E=c.forwardRef((function(e,t){var n=e.prefixCls,r=e.style,o=e.onStartMove,a=e.onOffsetChange,i=e.values,l=e.handleRender,u=e.draggingIndex,s=(0,v.Z)(e,y),d=c.useRef({});return c.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=d.current[e])||void 0===t||t.focus()}}})),c.createElement(c.Fragment,null,i.map((function(e,t){return c.createElement(C,(0,f.Z)({ref:function(e){e?d.current[t]=e:delete d.current[t]},dragging:u===t,prefixCls:n,style:S(r,t),key:t,value:e,valueIndex:t,onStartMove:o,onOffsetChange:a,render:l},s))})))}));const M=E;function Z(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function $(e){var t=e.prefixCls,n=e.style,r=e.start,a=e.end,i=e.index,l=e.onStartMove,u=c.useContext(p),s=u.direction,d=u.min,f=u.max,v=u.disabled,m=u.range,b="".concat(t,"-track"),S=g(r,d,f),x=g(a,d,f),k=function(e){!v&&l&&l(e,-1)},C={};switch(s){case"rtl":C.right="".concat(100*S,"%"),C.width="".concat(100*x-100*S,"%");break;case"btt":C.bottom="".concat(100*S,"%"),C.height="".concat(100*x-100*S,"%");break;case"ttb":C.top="".concat(100*S,"%"),C.height="".concat(100*x-100*S,"%");break;default:C.left="".concat(100*S,"%"),C.width="".concat(100*x-100*S,"%")}return c.createElement("div",{className:o()(b,m&&"".concat(b,"-").concat(i+1)),style:(0,h.Z)((0,h.Z)({},C),n),onMouseDown:k,onTouchStart:k})}function w(e){var t=e.prefixCls,n=e.style,r=e.values,o=e.startPoint,a=e.onStartMove,i=c.useContext(p),l=i.included,u=i.range,s=i.min,d=c.useMemo((function(){if(!u){if(0===r.length)return[];var e=null!=o?o:s,t=r[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],a=0;a<r.length-1;a+=1)n.push({start:r[a],end:r[a+1]});return n}),[r,u,o,s]);return l?d.map((function(e,r){var o=e.start,i=e.end;return c.createElement($,{index:r,prefixCls:t,style:S(n,r),start:o,end:i,key:r,onStartMove:a})})):null}function z(e){var t=e.prefixCls,n=e.style,r=e.children,i=e.value,l=e.onClick,u=c.useContext(p),s=u.min,d=u.max,f=u.direction,v=u.includedStart,m=u.includedEnd,g=u.included,S="".concat(t,"-text"),x=b(f,i,s,d);return c.createElement("span",{className:o()(S,(0,a.Z)({},"".concat(S,"-active"),g&&v<=i&&i<=m)),style:(0,h.Z)((0,h.Z)({},x),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){l(i)}},r)}function L(e){var t=e.prefixCls,n=e.marks,r=e.onClick,o="".concat(t,"-mark");return n.length?c.createElement("div",{className:o},n.map((function(e){var t=e.value,n=e.style,a=e.label;return c.createElement(z,{key:t,prefixCls:o,style:n,value:t,onClick:r},a)}))):null}function H(e){var t=e.prefixCls,n=e.value,r=e.style,i=e.activeStyle,l=c.useContext(p),u=l.min,s=l.max,d=l.direction,f=l.included,v=l.includedStart,m=l.includedEnd,g="".concat(t,"-dot"),S=f&&v<=n&&n<=m,x=(0,h.Z)((0,h.Z)({},b(d,n,u,s)),"function"==typeof r?r(n):r);return S&&(x=(0,h.Z)((0,h.Z)({},x),"function"==typeof i?i(n):i)),c.createElement("span",{className:o()(g,(0,a.Z)({},"".concat(g,"-active"),S)),style:x})}function O(e){var t=e.prefixCls,n=e.marks,r=e.dots,o=e.style,a=e.activeStyle,i=c.useContext(p),l=i.min,u=i.max,s=i.step,d=c.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),r&&null!==s)for(var t=l;t<=u;)e.add(t),t+=s;return Array.from(e)}),[l,u,s,r,n]);return c.createElement("div",{className:"".concat(t,"-step")},d.map((function(e){return c.createElement(H,{prefixCls:t,key:e,value:e,style:o,activeStyle:a})})))}n(80334);var P=c.forwardRef((function(e,t){var n,r=e.prefixCls,f=void 0===r?"rc-slider":r,v=e.className,h=e.style,m=e.disabled,g=void 0!==m&&m,b=e.keyboard,S=void 0===b||b,x=e.autoFocus,k=e.onFocus,C=e.onBlur,y=e.min,E=void 0===y?0:y,$=e.max,z=void 0===$?100:$,H=e.step,P=void 0===H?1:H,B=e.value,F=e.defaultValue,R=e.range,I=e.count,D=e.onChange,W=e.onBeforeChange,j=e.onAfterChange,N=e.allowCross,T=void 0===N||N,A=e.pushable,X=void 0!==A&&A,V=e.draggableTrack,Y=e.reverse,G=e.vertical,_=e.included,U=void 0===_||_,K=e.startPoint,Q=e.trackStyle,q=e.handleStyle,J=e.railStyle,ee=e.dotStyle,te=e.activeDotStyle,ne=e.marks,re=e.dots,oe=e.handleRender,ae=e.tabIndex,ie=void 0===ae?0:ae,le=e.ariaLabelForHandle,ue=e.ariaLabelledByForHandle,ce=e.ariaValueTextFormatterForHandle,se=c.useRef(),de=c.useRef(),fe=c.useMemo((function(){return G?Y?"ttb":"btt":Y?"rtl":"ltr"}),[Y,G]),ve=c.useMemo((function(){return isFinite(E)?E:0}),[E]),he=c.useMemo((function(){return isFinite(z)?z:100}),[z]),me=c.useMemo((function(){return null!==P&&P<=0?1:P}),[P]),pe=c.useMemo((function(){return!0===X?me:X>=0&&X}),[X,me]),ge=c.useMemo((function(){return Object.keys(ne||{}).map((function(e){var t=ne[e],n={value:Number(e)};return t&&"object"===(0,u.Z)(t)&&!c.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[ne]),be=function(e,t,n,r,o,a){var l=c.useCallback((function(n){var r=isFinite(n)?n:e;return r=Math.min(t,n),Math.max(e,r)}),[e,t]),u=c.useCallback((function(r){if(null!==n){var o=e+Math.round((l(r)-e)/n)*n,a=function(e){return(String(e).split(".")[1]||"").length},i=Math.max(a(n),a(t),a(e)),u=Number(o.toFixed(i));return e<=u&&u<=t?u:null}return null}),[n,e,t,l]),s=c.useCallback((function(o){var a=l(o),i=r.map((function(e){return e.value}));null!==n&&i.push(u(o)),i.push(e,t);var c=i[0],s=t-e;return i.forEach((function(e){var t=Math.abs(a-e);t<=s&&(c=e,s=t)})),c}),[e,t,r,n,l,u]),d=function o(a,l,c){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof l){var d,f=a[c],v=f+l,h=[];r.forEach((function(e){h.push(e.value)})),h.push(e,t),h.push(u(f));var m=l>0?1:-1;"unit"===s?h.push(u(f+m*n)):h.push(u(v)),h=h.filter((function(e){return null!==e})).filter((function(e){return l<0?e<=f:e>=f})),"unit"===s&&(h=h.filter((function(e){return e!==f})));var p="unit"===s?f:v;d=h[0];var g=Math.abs(d-p);if(h.forEach((function(e){var t=Math.abs(e-p);t<g&&(d=e,g=t)})),void 0===d)return l<0?e:t;if("dist"===s)return d;if(Math.abs(l)>1){var b=(0,i.Z)(a);return b[c]=d,o(b,l-m,c,s)}return d}return"min"===l?e:"max"===l?t:void 0},f=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",o=e[n],a=d(e,t,n,r);return{value:a,changed:a!==o}},v=function(e){return null===a&&0===e||"number"==typeof a&&e<a};return[s,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",i=e.map(s),l=i[n],u=d(i,t,n,r);if(i[n]=u,!1===o){var c=a||0;n>0&&i[n-1]!==l&&(i[n]=Math.max(i[n],i[n-1]+c)),n<i.length-1&&i[n+1]!==l&&(i[n]=Math.min(i[n],i[n+1]-c))}else if("number"==typeof a||null===a){for(var h=n+1;h<i.length;h+=1)for(var m=!0;v(i[h]-i[h-1])&&m;){var p=f(i,1,h);i[h]=p.value,m=p.changed}for(var g=n;g>0;g-=1)for(var b=!0;v(i[g]-i[g-1])&&b;){var S=f(i,-1,g-1);i[g-1]=S.value,b=S.changed}for(var x=i.length-1;x>0;x-=1)for(var k=!0;v(i[x]-i[x-1])&&k;){var C=f(i,-1,x-1);i[x-1]=C.value,k=C.changed}for(var y=0;y<i.length-1;y+=1)for(var E=!0;v(i[y+1]-i[y])&&E;){var M=f(i,1,y+1);i[y+1]=M.value,E=M.changed}}return{value:i[n],values:i}}]}(ve,he,me,ge,T,pe),Se=(0,l.Z)(be,2),xe=Se[0],ke=Se[1],Ce=(0,d.Z)(F,{value:B}),ye=(0,l.Z)(Ce,2),Ee=ye[0],Me=ye[1],Ze=c.useMemo((function(){var e=null==Ee?[]:Array.isArray(Ee)?Ee:[Ee],t=(0,l.Z)(e,1)[0],n=null===Ee?[]:[void 0===t?ve:t];if(R){if(n=(0,i.Z)(e),I||void 0===Ee){var r=I>=0?I+1:2;for(n=n.slice(0,r);n.length<r;){var o;n.push(null!==(o=n[n.length-1])&&void 0!==o?o:ve)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=xe(e)})),n}),[Ee,R,ve,I,xe]),$e=c.useRef(Ze);$e.current=Ze;var we=function(e){return R?e:e[0]},ze=function(e){var t=(0,i.Z)(e).sort((function(e,t){return e-t}));D&&!(0,s.Z)(t,$e.current,!0)&&D(we(t)),Me(t)},Le=function(e){if(!g){var t=0,n=he-ve;Ze.forEach((function(r,o){var a=Math.abs(e-r);a<=n&&(n=a,t=o)}));var r=(0,i.Z)(Ze);r[t]=e,R&&!Ze.length&&void 0===I&&r.push(e),null==W||W(we(r)),ze(r),null==j||j(we(r))}},He=c.useState(null),Oe=(0,l.Z)(He,2),Pe=Oe[0],Be=Oe[1];c.useEffect((function(){if(null!==Pe){var e=Ze.indexOf(Pe);e>=0&&se.current.focus(e)}Be(null)}),[Pe]);var Fe=c.useMemo((function(){return(!V||null!==me)&&V}),[V,me]),Re=function(e,t,n,r,o,a,u,s,d){var f=c.useState(null),v=(0,l.Z)(f,2),h=v[0],m=v[1],p=c.useState(-1),g=(0,l.Z)(p,2),b=g[0],S=g[1],x=c.useState(n),k=(0,l.Z)(x,2),C=k[0],y=k[1],E=c.useState(n),M=(0,l.Z)(E,2),$=M[0],w=M[1],z=c.useRef(null),L=c.useRef(null);c.useEffect((function(){-1===b&&y(n)}),[n,b]),c.useEffect((function(){return function(){document.removeEventListener("mousemove",z.current),document.removeEventListener("mouseup",L.current),document.removeEventListener("touchmove",z.current),document.removeEventListener("touchend",L.current)}}),[]);var H=function(e,t){C.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&m(t),y(e),u(e))},O=function(e,t){if(-1===e){var n=$[0],l=$[$.length-1],u=r-n,c=o-l,s=t*(o-r);s=Math.max(s,u),s=Math.min(s,c);var f=a(n+s);s=f-n;var v=$.map((function(e){return e+s}));H(v)}else{var h=(o-r)*t,m=(0,i.Z)(C);m[e]=$[e];var p=d(m,h,e,"dist");H(p.values,p.value)}},P=c.useRef(O);P.current=O;var B=c.useMemo((function(){var e=(0,i.Z)(n).sort((function(e,t){return e-t})),t=(0,i.Z)(C).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?C:n}),[n,C]);return[b,h,B,function(r,o){r.stopPropagation();var a=n[o];S(o),m(a),w(n);var i=Z(r),l=i.pageX,u=i.pageY,c=function(n){n.preventDefault();var r,a=Z(n),i=a.pageX,c=a.pageY,s=i-l,d=c-u,f=e.current.getBoundingClientRect(),v=f.width,h=f.height;switch(t){case"btt":r=-d/h;break;case"ttb":r=d/h;break;case"rtl":r=-s/v;break;default:r=s/v}P.current(o,r)},d=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",c),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",c),z.current=null,L.current=null,S(-1),s()};document.addEventListener("mouseup",d),document.addEventListener("mousemove",c),document.addEventListener("touchend",d),document.addEventListener("touchmove",c),z.current=c,L.current=d}]}(de,fe,Ze,ve,he,xe,ze,(function(){null==j||j(we($e.current))}),ke),Ie=(0,l.Z)(Re,4),De=Ie[0],We=Ie[1],je=Ie[2],Ne=Ie[3],Te=function(e,t){Ne(e,t),null==W||W(we($e.current))},Ae=-1!==De;c.useEffect((function(){if(!Ae){var e=Ze.lastIndexOf(We);se.current.focus(e)}}),[Ae]);var Xe=c.useMemo((function(){return(0,i.Z)(je).sort((function(e,t){return e-t}))}),[je]),Ve=c.useMemo((function(){return R?[Xe[0],Xe[Xe.length-1]]:[ve,Xe[0]]}),[Xe,R,ve]),Ye=(0,l.Z)(Ve,2),Ge=Ye[0],_e=Ye[1];c.useImperativeHandle(t,(function(){return{focus:function(){se.current.focus(0)},blur:function(){var e=document.activeElement;de.current.contains(e)&&(null==e||e.blur())}}})),c.useEffect((function(){x&&se.current.focus(0)}),[]);var Ue=c.useMemo((function(){return{min:ve,max:he,direction:fe,disabled:g,keyboard:S,step:me,included:U,includedStart:Ge,includedEnd:_e,range:R,tabIndex:ie,ariaLabelForHandle:le,ariaLabelledByForHandle:ue,ariaValueTextFormatterForHandle:ce}}),[ve,he,fe,g,S,me,U,Ge,_e,R,ie,le,ue,ce]);return c.createElement(p.Provider,{value:Ue},c.createElement("div",{ref:de,className:o()(f,v,(n={},(0,a.Z)(n,"".concat(f,"-disabled"),g),(0,a.Z)(n,"".concat(f,"-vertical"),G),(0,a.Z)(n,"".concat(f,"-horizontal"),!G),(0,a.Z)(n,"".concat(f,"-with-marks"),ge.length),n)),style:h,onMouseDown:function(e){e.preventDefault();var t,n=de.current.getBoundingClientRect(),r=n.width,o=n.height,a=n.left,i=n.top,l=n.bottom,u=n.right,c=e.clientX,s=e.clientY;switch(fe){case"btt":t=(l-s)/o;break;case"ttb":t=(s-i)/o;break;case"rtl":t=(u-c)/r;break;default:t=(c-a)/r}Le(xe(ve+t*(he-ve)))}},c.createElement("div",{className:"".concat(f,"-rail"),style:J}),c.createElement(w,{prefixCls:f,style:Q,values:Xe,startPoint:K,onStartMove:Fe?Te:null}),c.createElement(O,{prefixCls:f,marks:ge,dots:re,style:ee,activeStyle:te}),c.createElement(M,{ref:se,prefixCls:f,style:q,values:je,draggingIndex:De,onStartMove:Te,onOffsetChange:function(e,t){if(!g){var n=ke(Ze,e,t);null==W||W(we(Ze)),ze(n.values),null==j||j(we(n.values)),Be(n.value)}},onFocus:k,onBlur:C,handleRender:oe}),c.createElement(L,{prefixCls:f,marks:ge,onClick:Le})))}));const B=P;var F=n(53124),R=n(75164),I=n(42550),D=n(69053);const W=c.forwardRef(((e,t)=>{const{open:n}=e,r=(0,c.useRef)(null),o=(0,c.useRef)(null);function a(){R.Z.cancel(o.current),o.current=null}return c.useEffect((()=>(n?o.current=(0,R.Z)((()=>{var e;null===(e=r.current)||void 0===e||e.forceAlign(),o.current=null})):a(),a)),[n,e.title]),c.createElement(D.Z,Object.assign({ref:(0,I.sQ)(r,t)},e))}));var j=n(10274),N=n(14747),T=n(67968),A=n(45503);const X=e=>{const{componentCls:t,controlSize:n,dotSize:r,marginFull:o,marginPart:a,colorFillContentHover:i}=e;return{[t]:Object.assign(Object.assign({},(0,N.Wf)(e)),{position:"relative",height:n,margin:`${a}px ${o}px`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${o}px ${a}px`},[`${t}-rail`]:{position:"absolute",backgroundColor:e.colorFillTertiary,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${t}-track`]:{position:"absolute",backgroundColor:e.colorPrimaryBorder,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},"&:hover":{[`${t}-rail`]:{backgroundColor:e.colorFillSecondary},[`${t}-track`]:{backgroundColor:e.colorPrimaryBorderHover},[`${t}-dot`]:{borderColor:i},[`${t}-handle::after`]:{boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorderHover}`},[`${t}-dot-active`]:{borderColor:e.colorPrimary}},[`${t}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none",[`${t}-dragging`]:{zIndex:1},"&::before":{content:'""',position:"absolute",insetInlineStart:-e.handleLineWidth,insetBlockStart:-e.handleLineWidth,width:e.handleSize+2*e.handleLineWidth,height:e.handleSize+2*e.handleLineWidth,backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorder}`,borderRadius:"50%",cursor:"pointer",transition:`\n            inset-inline-start ${e.motionDurationMid},\n            inset-block-start ${e.motionDurationMid},\n            width ${e.motionDurationMid},\n            height ${e.motionDurationMid},\n            box-shadow ${e.motionDurationMid}\n          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),insetBlockStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),width:e.handleSizeHover+2*e.handleLineWidthHover,height:e.handleSizeHover+2*e.handleLineWidthHover},"&::after":{boxShadow:`0 0 0 ${e.handleLineWidthHover}px ${e.colorPrimary}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:(e.handleSize-e.handleSizeHover)/2,insetBlockStart:(e.handleSize-e.handleSizeHover)/2}}},[`${t}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${t}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${t}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${t}-dot`]:{position:"absolute",width:r,height:r,backgroundColor:e.colorBgElevated,border:`${e.handleLineWidth}px solid ${e.colorBorderSecondary}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,pointerEvents:"auto","&-active":{borderColor:e.colorPrimaryBorder}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-rail`]:{backgroundColor:`${e.colorFillSecondary} !important`},[`${t}-track`]:{backgroundColor:`${e.colorTextDisabled} !important`},[`\n          ${t}-dot\n        `]:{backgroundColor:e.colorBgElevated,borderColor:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed"},[`${t}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${e.handleLineWidth}px ${new j.C(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexShortString()}`,insetInlineStart:0,insetBlockStart:0},[`\n          ${t}-mark-text,\n          ${t}-dot\n        `]:{cursor:"not-allowed !important"}}})}},V=(e,t)=>{const{componentCls:n,railSize:r,handleSize:o,dotSize:a}=e,i=t?"width":"height",l=t?"height":"width",u=t?"insetBlockStart":"insetInlineStart",c=t?"top":"insetInlineStart";return{[t?"paddingBlock":"paddingInline"]:r,[l]:3*r,[`${n}-rail`]:{[i]:"100%",[l]:r},[`${n}-track`]:{[l]:r},[`${n}-handle`]:{[u]:(3*r-o)/2},[`${n}-mark`]:{insetInlineStart:0,top:0,[c]:o,[i]:"100%"},[`${n}-step`]:{insetInlineStart:0,top:0,[c]:r,[i]:"100%",[l]:r},[`${n}-dot`]:{position:"absolute",[u]:(r-a)/2}}},Y=e=>{const{componentCls:t,marginPartWithMark:n}=e;return{[`${t}-horizontal`]:Object.assign(Object.assign({},V(e,!0)),{[`&${t}-with-marks`]:{marginBottom:n}})}},G=e=>{const{componentCls:t}=e;return{[`${t}-vertical`]:Object.assign(Object.assign({},V(e,!1)),{height:"100%"})}},_=(0,T.Z)("Slider",(e=>{const t=(0,A.TS)(e,{marginPart:(e.controlHeight-e.controlSize)/2,marginFull:e.controlSize/2,marginPartWithMark:e.controlHeightLG-e.controlSize});return[X(t),Y(t),G(t)]}),(e=>{const t=e.controlHeightLG/4;return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:e.controlHeightSM/2,dotSize:8,handleLineWidth:e.lineWidth+1,handleLineWidthHover:e.lineWidth+3}}));var U=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const K=e=>"number"==typeof e?e.toString():"",Q=c.forwardRef(((e,t)=>{const{prefixCls:n,range:r,className:a,rootClassName:i,tooltipPrefixCls:l,tipFormatter:u,tooltipVisible:s,getTooltipPopupContainer:d,tooltipPlacement:f}=e,v=U(e,["prefixCls","range","className","rootClassName","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement"]),{getPrefixCls:h,direction:m,getPopupContainer:p}=c.useContext(F.E_),[g,b]=c.useState({}),S=(e,t)=>{b((n=>Object.assign(Object.assign({},n),{[e]:t})))},x=(e,t)=>e||(t?"rtl"===m?"left":"right":"top"),k=h("slider",n),[C,y]=_(k),E=o()(a,i,{[`${k}-rtl`]:"rtl"===m},y);"rtl"!==m||v.vertical||(v.reverse=!v.reverse);const[M,Z]=c.useMemo((()=>r?"object"==typeof r?[!0,r.draggableTrack]:[!0,!1]:[!1]),[r]);return C(c.createElement(B,Object.assign({},v,{step:v.step,range:M,draggableTrack:Z,className:E,ref:t,prefixCls:k,handleRender:(t,n)=>{var r;const{index:o,dragging:a}=n,{tooltip:i={},vertical:v}=e,m=Object.assign({},i),{open:b,placement:C,getPopupContainer:y,prefixCls:E,formatter:M}=m;let Z;Z=M||null===M?M:u||null===u?u:K;const $=!!Z&&(g[o]||a),w=null!==(r=null!=b?b:s)&&void 0!==r?r:void 0===b&&$,z=Object.assign(Object.assign({},t.props),{onMouseEnter:()=>S(o,!0),onMouseLeave:()=>S(o,!1)}),L=h("tooltip",null!=E?E:l);return c.createElement(W,{prefixCls:L,title:Z?Z(n.value):"",open:w,placement:x(null!=C?C:f,v),key:o,overlayClassName:`${k}-tooltip`,getPopupContainer:y||d||p},c.cloneElement(t,z))}})))}));const q=Q}}]);
//# sourceMappingURL=9289.renderer.js.map