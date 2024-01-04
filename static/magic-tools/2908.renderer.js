"use strict";(self.webpackChunkmagic_tools=self.webpackChunkmagic_tools||[]).push([[2908,2992],{43061:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(1413),r=t(67294);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"};var n=t(30076),c=function(e,a){return r.createElement(n.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:a,icon:o}))};const s=r.forwardRef(c)},76745:(e,a,t)=>{t.d(a,{Z:()=>l});const l=(0,t(67294).createContext)(void 0)},92113:(e,a,t)=>{t.d(a,{Z:()=>c});const l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},r={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},o={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},l),timePickerLocale:Object.assign({},r)},n="${label} is not a valid ${type}",c={locale:"en",Pagination:{items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},DatePicker:o,TimePicker:r,Calendar:o,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:n,method:n,array:n,object:n,number:n,date:n,boolean:n,integer:n,float:n,regexp:n,email:n,url:n,hex:n},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}}},62992:(e,a,t)=>{t.r(a),t.d(a,{getDefaultPassphrase:()=>r,setDefaultPassphrase:()=>o});const l="hmac-hash:default-passphrase";function r(){const e=localStorage.getItem(l);return null===e?"":e}function o(e){localStorage.setItem(l,e)}},53108:(e,a,t)=>{t.r(a),t.d(a,{HmacHashSetting:()=>m});var l=t(85893),r=t(65460),o=t(77004),n=t(19650),c=t(41249),s=t(67294),i=t(62992);const m=()=>{const[e,a]=(0,s.useState)((0,i.getDefaultPassphrase)());return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{orientation:"left",plain:!0,children:"HmacHash 值计算"}),(0,l.jsx)(o.Z.Item,{label:"默认密钥",children:(0,l.jsx)(n.Z,{children:(0,l.jsx)(c.default,{allowClear:!0,style:{width:"520px"},onChange:e=>{a(e.target.value),(0,i.setDefaultPassphrase)(e.target.value)},value:e})})})]})}}}]);
//# sourceMappingURL=2908.renderer.js.map