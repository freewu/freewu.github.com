"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[1106],{11106:(e,t,n)=>{n.d(t,{Z:()=>je});var a=n(54549),o=n(44545),r=n(1413),i=n(67294);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var l=n(30076),s=function(e,t){return i.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};const d=i.forwardRef(s);var u=n(94184),p=n.n(u),f=n(87462),v=n(4942),b=n(29439),m=n(71002),h=n(44925),g=n(31131),$=n(21770),y=n(5461);const k=(0,i.createContext)(null);var x=i.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,o=e.style,r=e.id,c=e.active,l=e.tabKey,s=e.children;return i.createElement("div",{id:r&&"".concat(r,"-panel-").concat(l),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":r&&"".concat(r,"-tab-").concat(l),"aria-hidden":!c,style:o,className:p()(n,c&&"".concat(n,"-active"),a),ref:t},s)}));const w=x;var C=["key","forceRender","style","className"];function _(e){var t=e.id,n=e.activeKey,a=e.animated,o=e.tabPosition,c=e.destroyInactiveTabPane,l=i.useContext(k),s=l.prefixCls,d=l.tabs,u=a.tabPane,b="".concat(s,"-tabpane");return i.createElement("div",{className:p()("".concat(s,"-content-holder"))},i.createElement("div",{className:p()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,v.Z)({},"".concat(s,"-content-animated"),u))},d.map((function(e){var o=e.key,l=e.forceRender,s=e.style,d=e.className,v=(0,h.Z)(e,C),m=o===n;return i.createElement(y.ZP,(0,f.Z)({key:o,visible:m,forceRender:l,removeOnLeave:!!c,leavedClassName:"".concat(b,"-hidden")},a.tabPaneMotion),(function(e,n){var a=e.style,c=e.className;return i.createElement(w,(0,f.Z)({},v,{prefixCls:b,id:t,tabKey:o,animated:u,active:m,style:(0,r.Z)((0,r.Z)({},s),a),className:p()(d,c),ref:n}))}))}))))}var S=n(93433),E=n(48717),Z=n(66680),R=n(75164),P=n(42550),T={width:0,height:0,left:0,top:0};function N(e,t){var n=i.useRef(e),a=i.useState({}),o=(0,b.Z)(a,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,o({})}]}var L=.1,O=.01,B=20,I=Math.pow(.995,B);var D=n(8410);function M(e){var t=(0,i.useState)(0),n=(0,b.Z)(t,2),a=n[0],o=n[1],r=(0,i.useRef)(0),c=(0,i.useRef)();return c.current=e,(0,D.o)((function(){var e;null===(e=c.current)||void 0===e||e.call(c)}),[a]),function(){r.current===a&&(r.current+=1,o(r.current))}}var A={width:0,height:0,left:0,top:0,right:0};function j(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}var H="TABS_DQ";function z(e){return String(e).replace(/"/g,H)}function W(e,t){var n=e.prefixCls,a=e.editable,o=e.locale,r=e.style;return a&&!1!==a.showAdd?i.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:r,"aria-label":(null==o?void 0:o.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}const G=i.forwardRef(W);const X=i.forwardRef((function(e,t){var n,a=e.position,o=e.prefixCls,r=e.extra;if(!r)return null;var c={};return"object"!==(0,m.Z)(r)||i.isValidElement(r)?c.right=r:c=r,"right"===a&&(n=c.right),"left"===a&&(n=c.left),n?i.createElement("div",{className:"".concat(o,"-extra-content"),ref:t},n):null}));var V=n(86572),K=n(15105),q=K.Z.ESC,F=K.Z.TAB;const Y=(0,i.forwardRef)((function(e,t){var n=e.overlay,a=e.arrow,o=e.prefixCls,r=(0,i.useMemo)((function(){return"function"==typeof n?n():n}),[n]),c=(0,P.sQ)(t,null==r?void 0:r.ref);return i.createElement(i.Fragment,null,a&&i.createElement("div",{className:"".concat(o,"-arrow")}),i.cloneElement(r,{ref:(0,P.Yr)(r)?c:void 0}))}));var Q={adjustX:1,adjustY:1},J=[0,0];const U={topLeft:{points:["bl","tl"],overflow:Q,offset:[0,-4],targetOffset:J},top:{points:["bc","tc"],overflow:Q,offset:[0,-4],targetOffset:J},topRight:{points:["br","tr"],overflow:Q,offset:[0,-4],targetOffset:J},bottomLeft:{points:["tl","bl"],overflow:Q,offset:[0,4],targetOffset:J},bottom:{points:["tc","bc"],overflow:Q,offset:[0,4],targetOffset:J},bottomRight:{points:["tr","br"],overflow:Q,offset:[0,4],targetOffset:J}};var ee=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function te(e,t){var n,a=e.arrow,o=void 0!==a&&a,r=e.prefixCls,c=void 0===r?"rc-dropdown":r,l=e.transitionName,s=e.animation,d=e.align,u=e.placement,m=void 0===u?"bottomLeft":u,g=e.placements,$=void 0===g?U:g,y=e.getPopupContainer,k=e.showAction,x=e.hideAction,w=e.overlayClassName,C=e.overlayStyle,_=e.visible,S=e.trigger,E=void 0===S?["hover"]:S,Z=e.autoFocus,T=e.overlay,N=e.children,L=e.onVisibleChange,O=(0,h.Z)(e,ee),B=i.useState(),I=(0,b.Z)(B,2),D=I[0],M=I[1],A="visible"in e?_:D,j=i.useRef(null),H=i.useRef(null),z=i.useRef(null);i.useImperativeHandle(t,(function(){return j.current}));var W=function(e){M(e),null==L||L(e)};!function(e){var t=e.visible,n=e.triggerRef,a=e.onVisibleChange,o=e.autoFocus,r=e.overlayRef,c=i.useRef(!1),l=function(){var e,o;t&&(null===(e=n.current)||void 0===e||null===(o=e.focus)||void 0===o||o.call(e),null==a||a(!1))},s=function(){var e;return!(null===(e=r.current)||void 0===e||!e.focus||(r.current.focus(),c.current=!0,0))},d=function(e){switch(e.keyCode){case q:l();break;case F:var t=!1;c.current||(t=s()),t?e.preventDefault():l()}};i.useEffect((function(){return t?(window.addEventListener("keydown",d),o&&(0,R.Z)(s,3),function(){window.removeEventListener("keydown",d),c.current=!1}):function(){c.current=!1}}),[t])}({visible:A,triggerRef:z,onVisibleChange:W,autoFocus:Z,overlayRef:H});var G,X,K,Q=function(){return i.createElement(Y,{ref:H,overlay:T,prefixCls:c,arrow:o})},J=i.cloneElement(N,{className:p()(null===(n=N.props)||void 0===n?void 0:n.className,A&&(G=e.openClassName,void 0!==G?G:"".concat(c,"-open"))),ref:(0,P.Yr)(N)?(0,P.sQ)(z,N.ref):void 0}),te=x;return te||-1===E.indexOf("contextMenu")||(te=["click"]),i.createElement(V.Z,(0,f.Z)({builtinPlacements:$},O,{prefixCls:c,ref:j,popupClassName:p()(w,(0,v.Z)({},"".concat(c,"-show-arrow"),o)),popupStyle:C,action:E,showAction:k,hideAction:te,popupPlacement:m,popupAlign:d,popupTransitionName:l,popupAnimation:s,popupVisible:A,stretch:(X=e.minOverlayWidthMatchTrigger,K=e.alignPoint,("minOverlayWidthMatchTrigger"in e?X:!K)?"minWidth":""),popup:"function"==typeof T?Q:Q(),onPopupVisibleChange:W,onPopupClick:function(t){var n=e.onOverlayClick;M(!1),n&&n(t)},getPopupContainer:y}),J)}const ne=i.forwardRef(te);var ae=n(7613);function oe(e,t){var n=e.prefixCls,a=e.id,o=e.tabs,r=e.locale,c=e.mobile,l=e.moreIcon,s=void 0===l?"More":l,d=e.moreTransitionName,u=e.style,f=e.className,m=e.editable,h=e.tabBarGutter,g=e.rtl,$=e.removeAriaLabel,y=e.onTabClick,k=e.getPopupContainer,x=e.popupClassName,w=(0,i.useState)(!1),C=(0,b.Z)(w,2),_=C[0],S=C[1],E=(0,i.useState)(null),Z=(0,b.Z)(E,2),R=Z[0],P=Z[1],T="".concat(a,"-more-popup"),N="".concat(n,"-dropdown"),L=null!==R?"".concat(T,"-").concat(R):null,O=null==r?void 0:r.dropdownAriaLabel;var B=i.createElement(ae.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;y(t,n),S(!1)},prefixCls:"".concat(N,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":L,selectedKeys:[R],"aria-label":void 0!==O?O:"expanded dropdown"},o.map((function(e){var t=m&&!1!==e.closable&&!e.disabled;return i.createElement(ae.sN,{key:e.key,id:"".concat(T,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},i.createElement("span",null,e.label),t&&i.createElement("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(N,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),m.onEdit("remove",{key:a,event:n})}},e.closeIcon||m.removeIcon||"×"))})));function I(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===R}))||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void P(i.key)}}(0,i.useEffect)((function(){var e=document.getElementById(L);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[R]),(0,i.useEffect)((function(){_||P(null)}),[_]);var D=(0,v.Z)({},g?"marginRight":"marginLeft",h);o.length||(D.visibility="hidden",D.order=1);var M=p()((0,v.Z)({},"".concat(N,"-rtl"),g)),A=c?null:i.createElement(ne,{prefixCls:N,overlay:B,trigger:["hover"],visible:!!o.length&&_,transitionName:d,onVisibleChange:S,overlayClassName:p()(M,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:k},i.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:D,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(a,"-more"),"aria-expanded":_,onKeyDown:function(e){var t=e.which;if(_)switch(t){case K.Z.UP:I(-1),e.preventDefault();break;case K.Z.DOWN:I(1),e.preventDefault();break;case K.Z.ESC:S(!1);break;case K.Z.SPACE:case K.Z.ENTER:null!==R&&y(R,e)}else[K.Z.DOWN,K.Z.SPACE,K.Z.ENTER].includes(t)&&(S(!0),e.preventDefault())}},s));return i.createElement("div",{className:p()("".concat(n,"-nav-operations"),f),style:u,ref:t},A,i.createElement(G,{prefixCls:n,locale:r,editable:m}))}const re=i.memo(i.forwardRef(oe),(function(e,t){return t.tabMoving}));const ie=function(e){var t,n=e.prefixCls,a=e.id,o=e.active,r=e.tab,c=r.key,l=r.label,s=r.disabled,d=r.closeIcon,u=e.closable,f=e.renderWrapper,b=e.removeAriaLabel,m=e.editable,h=e.onClick,g=e.onFocus,$=e.style,y="".concat(n,"-tab"),k=m&&!1!==u&&!s;function x(e){s||h(e)}var w=i.createElement("div",{key:c,"data-node-key":z(c),className:p()(y,(t={},(0,v.Z)(t,"".concat(y,"-with-remove"),k),(0,v.Z)(t,"".concat(y,"-active"),o),(0,v.Z)(t,"".concat(y,"-disabled"),s),t)),style:$,onClick:x},i.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(c),className:"".concat(y,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[K.Z.SPACE,K.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:g},l),k&&i.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(y,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),m.onEdit("remove",{key:c,event:t})}},d||m.removeIcon||"×"));return f?f(w):w};var ce=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,o=t.offsetHeight;return[a,void 0===o?0:o]},le=function(e,t){return e[t?0:1]};function se(e,t){var n,a=i.useContext(k),o=a.prefixCls,c=a.tabs,l=e.className,s=e.style,d=e.id,u=e.animated,m=e.activeKey,h=e.rtl,g=e.extra,$=e.editable,y=e.locale,x=e.tabPosition,w=e.tabBarGutter,C=e.children,_=e.onTabClick,D=e.onTabScroll,H=(0,i.useRef)(),W=(0,i.useRef)(),V=(0,i.useRef)(),K=(0,i.useRef)(),q=(0,i.useRef)(),F=(0,i.useRef)(),Y=(0,i.useRef)(),Q="top"===x||"bottom"===x,J=N(0,(function(e,t){Q&&D&&D({direction:e>t?"left":"right"})})),U=(0,b.Z)(J,2),ee=U[0],te=U[1],ne=N(0,(function(e,t){!Q&&D&&D({direction:e>t?"top":"bottom"})})),ae=(0,b.Z)(ne,2),oe=ae[0],se=ae[1],de=(0,i.useState)([0,0]),ue=(0,b.Z)(de,2),pe=ue[0],fe=ue[1],ve=(0,i.useState)([0,0]),be=(0,b.Z)(ve,2),me=be[0],he=be[1],ge=(0,i.useState)([0,0]),$e=(0,b.Z)(ge,2),ye=$e[0],ke=$e[1],xe=(0,i.useState)([0,0]),we=(0,b.Z)(xe,2),Ce=we[0],_e=we[1],Se=function(e){var t=(0,i.useRef)([]),n=(0,i.useState)({}),a=(0,b.Z)(n,2)[1],o=(0,i.useRef)("function"==typeof e?e():e),r=M((function(){var e=o.current;t.current.forEach((function(t){e=t(e)})),t.current=[],o.current=e,a({})}));return[o.current,function(e){t.current.push(e),r()}]}(new Map),Ee=(0,b.Z)(Se,2),Ze=Ee[0],Re=Ee[1],Pe=function(e,t,n){return(0,i.useMemo)((function(){for(var n,a=new Map,o=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||T,i=o.left+o.width,c=0;c<e.length;c+=1){var l,s=e[c].key,d=t.get(s);d||(d=t.get(null===(l=e[c-1])||void 0===l?void 0:l.key)||T);var u=a.get(s)||(0,r.Z)({},d);u.right=i-u.left-u.width,a.set(s,u)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(c,Ze,me[0]),Te=le(pe,Q),Ne=le(me,Q),Le=le(ye,Q),Oe=le(Ce,Q),Be=Te<Ne+Le,Ie=Be?Te-Oe:Te-Le,De="".concat(o,"-nav-operations-hidden"),Me=0,Ae=0;function je(e){return e<Me?Me:e>Ae?Ae:e}Q&&h?(Me=0,Ae=Math.max(0,Ne-Ie)):(Me=Math.min(0,Ie-Ne),Ae=0);var He=(0,i.useRef)(),ze=(0,i.useState)(),We=(0,b.Z)(ze,2),Ge=We[0],Xe=We[1];function Ve(){Xe(Date.now())}function Ke(){window.clearTimeout(He.current)}!function(e,t){var n=(0,i.useState)(),a=(0,b.Z)(n,2),o=a[0],r=a[1],c=(0,i.useState)(0),l=(0,b.Z)(c,2),s=l[0],d=l[1],u=(0,i.useState)(0),p=(0,b.Z)(u,2),f=p[0],v=p[1],m=(0,i.useState)(),h=(0,b.Z)(m,2),g=h[0],$=h[1],y=(0,i.useRef)(),k=(0,i.useRef)(),x=(0,i.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;r({x:n,y:a}),window.clearInterval(y.current)},onTouchMove:function(e){if(o){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;r({x:a,y:i});var c=a-o.x,l=i-o.y;t(c,l);var u=Date.now();d(u),v(u-s),$({x:c,y:l})}},onTouchEnd:function(){if(o&&(r(null),$(null),g)){var e=g.x/f,n=g.y/f,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<L)return;var c=e,l=n;y.current=window.setInterval((function(){Math.abs(c)<O&&Math.abs(l)<O?window.clearInterval(y.current):t((c*=I)*B,(l*=I)*B)}),B)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,o=0,r=Math.abs(n),i=Math.abs(a);r===i?o="x"===k.current?n:a:r>i?(o=n,k.current="x"):(o=a,k.current="y"),t(-o,-o)&&e.preventDefault()}},i.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(K,(function(e,t){function n(e,t){e((function(e){return je(e+t)}))}return!!Be&&(Q?n(te,e):n(se,t),Ke(),Ve(),!0)})),(0,i.useEffect)((function(){return Ke(),Ge&&(He.current=window.setTimeout((function(){Xe(0)}),100)),Ke}),[Ge]);var qe=function(e,t,n,a,o,r,c){var l,s,d,u=c.tabs,p=c.tabPosition,f=c.rtl;return["top","bottom"].includes(p)?(l="width",s=f?"right":"left",d=Math.abs(n)):(l="height",s="top",d=-n),(0,i.useMemo)((function(){if(!u.length)return[0,0];for(var n=u.length,a=n,o=0;o<n;o+=1){var r=e.get(u[o].key)||A;if(r[s]+r[l]>d+t){a=o-1;break}}for(var i=0,c=n-1;c>=0;c-=1)if((e.get(u[c].key)||A)[s]<d){i=c+1;break}return[i,a]}),[e,t,a,o,r,d,p,u.map((function(e){return e.key})).join("_"),f])}(Pe,Ie,Q?ee:oe,Ne,Le,Oe,(0,r.Z)((0,r.Z)({},e),{},{tabs:c})),Fe=(0,b.Z)(qe,2),Ye=Fe[0],Qe=Fe[1],Je=(0,Z.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=Pe.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Q){var n=ee;h?t.right<ee?n=t.right:t.right+t.width>ee+Ie&&(n=t.right+t.width-Ie):t.left<-ee?n=-t.left:t.left+t.width>-ee+Ie&&(n=-(t.left+t.width-Ie)),se(0),te(je(n))}else{var a=oe;t.top<-oe?a=-t.top:t.top+t.height>-oe+Ie&&(a=-(t.top+t.height-Ie)),te(0),se(je(a))}})),Ue={};"top"===x||"bottom"===x?Ue[h?"marginRight":"marginLeft"]=w:Ue.marginTop=w;var et=c.map((function(e,t){var n=e.key;return i.createElement(ie,{id:d,prefixCls:o,key:n,tab:e,style:0===t?void 0:Ue,closable:e.closable,editable:$,active:n===m,renderWrapper:C,removeAriaLabel:null==y?void 0:y.removeAriaLabel,onClick:function(e){_(n,e)},onFocus:function(){Je(n),Ve(),K.current&&(h||(K.current.scrollLeft=0),K.current.scrollTop=0)}})})),tt=function(){return Re((function(){var e=new Map;return c.forEach((function(t){var n,a=t.key,o=null===(n=q.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(z(a),'"]'));o&&e.set(a,{width:o.offsetWidth,height:o.offsetHeight,left:o.offsetLeft,top:o.offsetTop})})),e}))};(0,i.useEffect)((function(){tt()}),[c.map((function(e){return e.key})).join("_")]);var nt=M((function(){var e=ce(H),t=ce(W),n=ce(V);fe([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=ce(Y);ke(a);var o=ce(F);_e(o);var r=ce(q);he([r[0]-a[0],r[1]-a[1]]),tt()})),at=c.slice(0,Ye),ot=c.slice(Qe+1),rt=[].concat((0,S.Z)(at),(0,S.Z)(ot)),it=(0,i.useState)(),ct=(0,b.Z)(it,2),lt=ct[0],st=ct[1],dt=Pe.get(m),ut=(0,i.useRef)();function pt(){R.Z.cancel(ut.current)}(0,i.useEffect)((function(){var e={};return dt&&(Q?(h?e.right=dt.right:e.left=dt.left,e.width=dt.width):(e.top=dt.top,e.height=dt.height)),pt(),ut.current=(0,R.Z)((function(){st(e)})),pt}),[dt,Q,h]),(0,i.useEffect)((function(){Je()}),[m,Me,Ae,j(dt),j(Pe),Q]),(0,i.useEffect)((function(){nt()}),[h]);var ft,vt,bt,mt,ht=!!rt.length,gt="".concat(o,"-nav-wrap");return Q?h?(vt=ee>0,ft=ee!==Ae):(ft=ee<0,vt=ee!==Me):(bt=oe<0,mt=oe!==Me),i.createElement(E.Z,{onResize:nt},i.createElement("div",{ref:(0,P.x1)(t,H),role:"tablist",className:p()("".concat(o,"-nav"),l),style:s,onKeyDown:function(){Ve()}},i.createElement(X,{ref:W,position:"left",extra:g,prefixCls:o}),i.createElement("div",{className:p()(gt,(n={},(0,v.Z)(n,"".concat(gt,"-ping-left"),ft),(0,v.Z)(n,"".concat(gt,"-ping-right"),vt),(0,v.Z)(n,"".concat(gt,"-ping-top"),bt),(0,v.Z)(n,"".concat(gt,"-ping-bottom"),mt),n)),ref:K},i.createElement(E.Z,{onResize:nt},i.createElement("div",{ref:q,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(ee,"px, ").concat(oe,"px)"),transition:Ge?"none":void 0}},et,i.createElement(G,{ref:Y,prefixCls:o,locale:y,editable:$,style:(0,r.Z)((0,r.Z)({},0===et.length?void 0:Ue),{},{visibility:ht?"hidden":null})}),i.createElement("div",{className:p()("".concat(o,"-ink-bar"),(0,v.Z)({},"".concat(o,"-ink-bar-animated"),u.inkBar)),style:lt})))),i.createElement(re,(0,f.Z)({},e,{removeAriaLabel:null==y?void 0:y.removeAriaLabel,ref:F,prefixCls:o,tabs:rt,className:!ht&&De,tabMoving:!!Ge})),i.createElement(X,{ref:V,position:"right",extra:g,prefixCls:o})))}const de=i.forwardRef(se);var ue=["renderTabBar"],pe=["label","key"];function fe(e){var t=e.renderTabBar,n=(0,h.Z)(e,ue),a=i.useContext(k).tabs;return t?t((0,r.Z)((0,r.Z)({},n),{},{panes:a.map((function(e){var t=e.label,n=e.key,a=(0,h.Z)(e,pe);return i.createElement(w,(0,f.Z)({tab:t,key:n,tabKey:n},a))}))}),de):i.createElement(de,n)}n(80334);var ve=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],be=0;function me(e,t){var n,a=e.id,o=e.prefixCls,c=void 0===o?"rc-tabs":o,l=e.className,s=e.items,d=e.direction,u=e.activeKey,y=e.defaultActiveKey,x=e.editable,w=e.animated,C=e.tabPosition,S=void 0===C?"top":C,E=e.tabBarGutter,Z=e.tabBarStyle,R=e.tabBarExtraContent,P=e.locale,T=e.moreIcon,N=e.moreTransitionName,L=e.destroyInactiveTabPane,O=e.renderTabBar,B=e.onChange,I=e.onTabClick,D=e.onTabScroll,M=e.getPopupContainer,A=e.popupClassName,j=(0,h.Z)(e,ve),H=i.useMemo((function(){return(s||[]).filter((function(e){return e&&"object"===(0,m.Z)(e)&&"key"in e}))}),[s]),z="rtl"===d,W=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,r.Z)({inkBar:!0},"object"===(0,m.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),G=(0,i.useState)(!1),X=(0,b.Z)(G,2),V=X[0],K=X[1];(0,i.useEffect)((function(){K((0,g.Z)())}),[]);var q=(0,$.Z)((function(){var e;return null===(e=H[0])||void 0===e?void 0:e.key}),{value:u,defaultValue:y}),F=(0,b.Z)(q,2),Y=F[0],Q=F[1],J=(0,i.useState)((function(){return H.findIndex((function(e){return e.key===Y}))})),U=(0,b.Z)(J,2),ee=U[0],te=U[1];(0,i.useEffect)((function(){var e,t=H.findIndex((function(e){return e.key===Y}));-1===t&&(t=Math.max(0,Math.min(ee,H.length-1)),Q(null===(e=H[t])||void 0===e?void 0:e.key));te(t)}),[H.map((function(e){return e.key})).join("_"),Y,ee]);var ne=(0,$.Z)(null,{value:a}),ae=(0,b.Z)(ne,2),oe=ae[0],re=ae[1];(0,i.useEffect)((function(){a||(re("rc-tabs-".concat(be)),be+=1)}),[]);var ie={id:oe,activeKey:Y,animated:W,tabPosition:S,rtl:z,mobile:V},ce=(0,r.Z)((0,r.Z)({},ie),{},{editable:x,locale:P,moreIcon:T,moreTransitionName:N,tabBarGutter:E,onTabClick:function(e,t){null==I||I(e,t);var n=e!==Y;Q(e),n&&(null==B||B(e))},onTabScroll:D,extra:R,style:Z,panes:null,getPopupContainer:M,popupClassName:A});return i.createElement(k.Provider,{value:{tabs:H,prefixCls:c}},i.createElement("div",(0,f.Z)({ref:t,id:a,className:p()(c,"".concat(c,"-").concat(S),(n={},(0,v.Z)(n,"".concat(c,"-mobile"),V),(0,v.Z)(n,"".concat(c,"-editable"),x),(0,v.Z)(n,"".concat(c,"-rtl"),z),n),l)},j),undefined,i.createElement(fe,(0,f.Z)({},ce,{renderTabBar:O})),i.createElement(_,(0,f.Z)({destroyInactiveTabPane:L},ie,{animated:W}))))}const he=i.forwardRef(me);var ge=n(53124),$e=n(98675);const ye=()=>null;var ke=n(33603);const xe={motionAppear:!1,motionEnter:!0,motionLeave:!0};var we=n(50344),Ce=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};var _e=n(67968),Se=n(45503),Ee=n(14747),Ze=n(67771);const Re=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,Ze.oN)(e,"slide-up"),(0,Ze.oN)(e,"slide-down")]]},Pe=e=>{const{componentCls:t,tabsCardHorizontalPadding:n,tabsCardHeadBackground:a,tabsCardGutter:o,colorBorderSecondary:r}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:a,border:`${e.lineWidth}px ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${o}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${o}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Te=e=>{const{componentCls:t,tabsHoverColor:n,dropdownEdgeChildVerticalPadding:a}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,Ee.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${a}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Ee.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ne=e=>{const{componentCls:t,margin:n,colorBorderSecondary:a}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${n}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${a}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,\n        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${n}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:1.25*e.controlHeight,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Le=e=>{const{componentCls:t,padding:n}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${n}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${1.5*e.paddingXXS}px ${n}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${n}px ${1.5*e.paddingXXS}px`}}}}}},Oe=e=>{const{componentCls:t,tabsActiveColor:n,tabsHoverColor:a,iconCls:o,tabsHorizontalGutter:r}=e,i=`${t}-tab`;return{[i]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,Ee.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:a},[`&${i}-active ${i}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${i}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${i}-disabled ${i}-btn, &${i}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${i}-remove ${o}`]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${i} + ${i}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${r}px`}}}},Be=e=>{const{componentCls:t,tabsHorizontalGutter:n,iconCls:a,tabsCardGutter:o}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${n}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[a]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${o}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ie=e=>{const{componentCls:t,tabsCardHorizontalPadding:n,tabsCardHeight:a,tabsCardGutter:o,tabsHoverColor:r,tabsActiveColor:i,colorBorderSecondary:c}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Ee.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:`${a}px`,marginLeft:{_skip_check_:!0,value:`${o}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:i}},(0,Ee.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),Oe(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},De=(0,_e.Z)("Tabs",(e=>{const t=e.controlHeightLG,n=(0,Se.TS)(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[Le(n),Be(n),Ne(n),Te(n),Pe(n),Ie(n),Re(n)]}),(e=>({zIndexPopup:e.zIndexPopupBase+50})));var Me=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};function Ae(e){var{type:t,className:n,rootClassName:r,size:c,onEdit:l,hideAdd:s,centered:u,addIcon:f,popupClassName:v,children:b,items:m,animated:h}=e,g=Me(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated"]);const{prefixCls:$,moreIcon:y=i.createElement(o.Z,null)}=g,{direction:k,getPrefixCls:x,getPopupContainer:w}=i.useContext(ge.E_),C=x("tabs",$),[_,S]=De(C);let E;"editable-card"===t&&(E={onEdit:(e,t)=>{let{key:n,event:a}=t;null==l||l("add"===e?a:n,e)},removeIcon:i.createElement(a.Z,null),addIcon:f||i.createElement(d,null),showAdd:!0!==s});const Z=x(),R=function(e,t){return e||function(e){return e.filter((e=>e))}((0,we.Z)(t).map((e=>{if(i.isValidElement(e)){const{key:t,props:n}=e,a=n||{},{tab:o}=a,r=Ce(a,["tab"]);return Object.assign(Object.assign({key:String(t)},r),{label:o})}return null})))}(m,b),P=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{}),t.tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},xe),{motionName:(0,ke.mL)(e,"switch")})),t}(C,h),T=(0,$e.Z)(c);return _(i.createElement(he,Object.assign({direction:k,getPopupContainer:w,moreTransitionName:`${Z}-slide-up`},g,{items:R,className:p()({[`${C}-${T}`]:T,[`${C}-card`]:["card","editable-card"].includes(t),[`${C}-editable-card`]:"editable-card"===t,[`${C}-centered`]:u},n,r,S),popupClassName:p()(v,S),editable:E,moreIcon:y,prefixCls:C,animated:P})))}Ae.TabPane=ye;const je=Ae}}]);
//# sourceMappingURL=1106.renderer.js.map