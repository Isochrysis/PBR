import{_ as Fe}from"./Input.75EdCMQM.js";import{aq as Be,h as L,n as F,z as k,P as le,A as n,ar as re,J as N,B as me,as as Ee,at as J,au as Te,av as Oe,C as ue,aw as xe,ax as Ie,ay as _e,az as De,l as O,D as se,F as Y,I as H,i as ie,E as ye,H as ze,aA as Pe,y as te,x as oe,Q as A,R as _,aB as Ae,N as ce,G as de,K as z,aC as D,L as ae,S as pe,U as G,_ as Me,V as he,W as V,aD as Ne,aE as Ge,j as fe,Y as je,Z as He,$ as Q,o as I,a0 as W,w as T,b as M,a1 as j,a4 as be,a as ne,aF as ge,a5 as Z,c as q,aj as K,a2 as Ve,aG as Le,aH as Ue,ae as Re,af as Ke,aI as qe,al as Je,am as We,q as X,s as Ye,a3 as Qe,d as Ze,t as Xe,ab as et}from"./entry.DP2uUVjI.js";const tt={wrapper:{horizontal:"inline-flex -space-x-px",vertical:"inline-flex flex-col -space-y-px"},rounded:"rounded-md",shadow:"shadow-sm",orientation:{"rounded-none":{horizontal:{start:"rounded-s-none",end:"rounded-e-none"},vertical:{start:"rounded-t-none",end:"rounded-b-none"}},"rounded-sm":{horizontal:{start:"rounded-s-sm",end:"rounded-e-sm"},vertical:{start:"rounded-t-sm",end:"rounded-b-sm"}},rounded:{horizontal:{start:"rounded-s",end:"rounded-e"},vertical:{start:"rounded-t",end:"rounded-b"}},"rounded-md":{horizontal:{start:"rounded-s-md",end:"rounded-e-md"},vertical:{start:"rounded-t-md",end:"rounded-b-md"}},"rounded-lg":{horizontal:{start:"rounded-s-lg",end:"rounded-e-lg"},vertical:{start:"rounded-t-lg",end:"rounded-b-lg"}},"rounded-xl":{horizontal:{start:"rounded-s-xl",end:"rounded-e-xl"},vertical:{start:"rounded-t-xl",end:"rounded-b-xl"}},"rounded-2xl":{horizontal:{start:"rounded-s-2xl",end:"rounded-e-2xl"},vertical:{start:"rounded-t-2xl",end:"rounded-b-2xl"}},"rounded-3xl":{horizontal:{start:"rounded-s-3xl",end:"rounded-e-3xl"},vertical:{start:"rounded-t-3xl",end:"rounded-b-3xl"}},"rounded-full":{horizontal:{start:"rounded-s-full",end:"rounded-e-full"},vertical:{start:"rounded-t-full",end:"rounded-b-full"}}}},ot={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:Be};var at=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(at||{});let Se=Symbol("PopoverContext");function ve(e){let P=de(Se,null);if(P===null){let f=new Error(`<${e} /> is missing a parent <${Ce.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,ve),f}return P}let nt=Symbol("PopoverGroupContext");function we(){return de(nt,null)}let $e=Symbol("PopoverPanelContext");function lt(){return de($e,null)}let Ce=L({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:P,attrs:f,expose:S}){var $;let m=F(null);S({el:m,$el:m});let a=F(1),t=F(null),u=F(null),b=F(null),s=F(null),v=k(()=>le(m)),C=k(()=>{var o,r;if(!n(t)||!n(s))return!1;for(let R of document.querySelectorAll("body > *"))if(Number(R==null?void 0:R.contains(n(t)))^Number(R==null?void 0:R.contains(n(s))))return!0;let l=re(),w=l.indexOf(n(t)),E=(w+l.length-1)%l.length,x=(w+1)%l.length,U=l[E],ke=l[x];return!((o=n(s))!=null&&o.contains(U))&&!((r=n(s))!=null&&r.contains(ke))}),y={popoverState:a,buttonId:F(null),panelId:F(null),panel:s,button:t,isPortalled:C,beforePanelSentinel:u,afterPanelSentinel:b,togglePopover(){a.value=N(a.value,{0:1,1:0})},closePopover(){a.value!==1&&(a.value=1)},close(o){y.closePopover();let r=o?o instanceof HTMLElement?o:o.value instanceof HTMLElement?n(o):n(y.button):n(y.button);r==null||r.focus()}};me(Se,y),Ee(k(()=>N(a.value,{0:J.Open,1:J.Closed})));let B={buttonId:y.buttonId,panelId:y.panelId,close(){y.closePopover()}},i=we(),p=i==null?void 0:i.registerPopover,[h,c]=Te(),g=Oe({mainTreeNodeRef:i==null?void 0:i.mainTreeNodeRef,portals:h,defaultContainers:[t,s]});function d(){var o,r,l,w;return(w=i==null?void 0:i.isFocusWithinPopoverGroup())!=null?w:((o=v.value)==null?void 0:o.activeElement)&&(((r=n(t))==null?void 0:r.contains(v.value.activeElement))||((l=n(s))==null?void 0:l.contains(v.value.activeElement)))}return ue(()=>p==null?void 0:p(B)),xe(($=v.value)==null?void 0:$.defaultView,"focus",o=>{var r,l;o.target!==window&&o.target instanceof HTMLElement&&a.value===0&&(d()||t&&s&&(g.contains(o.target)||(r=n(y.beforePanelSentinel))!=null&&r.contains(o.target)||(l=n(y.afterPanelSentinel))!=null&&l.contains(o.target)||y.closePopover()))},!0),Ie(g.resolveContainers,(o,r)=>{var l;y.closePopover(),_e(r,De.Loose)||(o.preventDefault(),(l=n(t))==null||l.focus())},k(()=>a.value===0)),()=>{let o={open:a.value===0,close:y.close};return O(Y,[O(c,{},()=>se({theirProps:{...e,...f},ourProps:{ref:m},slot:o,slots:P,attrs:f,name:"Popover"})),O(g.MainTreeNode)])}}}),rt=L({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:f,expose:S}){var $;let m=($=e.id)!=null?$:`headlessui-popover-button-${H()}`,a=ve("PopoverButton"),t=k(()=>le(a.button));S({el:a.button,$el:a.button}),ie(()=>{a.buttonId.value=m}),ye(()=>{a.buttonId.value=null});let u=we(),b=u==null?void 0:u.closeOthers,s=lt(),v=k(()=>s===null?!1:s.value===a.panelId.value),C=F(null),y=`headlessui-focus-sentinel-${H()}`;v.value||ue(()=>{a.button.value=n(C)});let B=ze(k(()=>({as:e.as,type:P.type})),C);function i(o){var r,l,w,E,x;if(v.value){if(a.popoverState.value===1)return;switch(o.key){case z.Space:case z.Enter:o.preventDefault(),(l=(r=o.target).click)==null||l.call(r),a.closePopover(),(w=n(a.button))==null||w.focus();break}}else switch(o.key){case z.Space:case z.Enter:o.preventDefault(),o.stopPropagation(),a.popoverState.value===1&&(b==null||b(a.buttonId.value)),a.togglePopover();break;case z.Escape:if(a.popoverState.value!==0)return b==null?void 0:b(a.buttonId.value);if(!n(a.button)||(E=t.value)!=null&&E.activeElement&&!((x=n(a.button))!=null&&x.contains(t.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),a.closePopover();break}}function p(o){v.value||o.key===z.Space&&o.preventDefault()}function h(o){var r,l;e.disabled||(v.value?(a.closePopover(),(r=n(a.button))==null||r.focus()):(o.preventDefault(),o.stopPropagation(),a.popoverState.value===1&&(b==null||b(a.buttonId.value)),a.togglePopover(),(l=n(a.button))==null||l.focus()))}function c(o){o.preventDefault(),o.stopPropagation()}let g=Pe();function d(){let o=n(a.panel);if(!o)return;function r(){N(g.value,{[D.Forwards]:()=>A(o,_.First),[D.Backwards]:()=>A(o,_.Last)})===ae.Error&&A(re().filter(l=>l.dataset.headlessuiFocusGuard!=="true"),N(g.value,{[D.Forwards]:_.Next,[D.Backwards]:_.Previous}),{relativeTo:n(a.button)})}r()}return()=>{let o=a.popoverState.value===0,r={open:o},{...l}=e,w=v.value?{ref:C,type:B.value,onKeydown:i,onClick:h}:{ref:C,id:m,type:B.value,"aria-expanded":a.popoverState.value===0,"aria-controls":n(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:i,onKeyup:p,onClick:h,onMousedown:c};return O(Y,[se({ourProps:w,theirProps:{...P,...l},slot:r,attrs:P,slots:f,name:"PopoverButton"}),o&&!v.value&&a.isPortalled.value&&O(te,{id:y,features:oe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:d})])}}}),ut=L({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:f,expose:S}){var $;let m=($=e.id)!=null?$:`headlessui-popover-panel-${H()}`,{focus:a}=e,t=ve("PopoverPanel"),u=k(()=>le(t.panel)),b=`headlessui-focus-sentinel-before-${H()}`,s=`headlessui-focus-sentinel-after-${H()}`;S({el:t.panel,$el:t.panel}),ie(()=>{t.panelId.value=m}),ye(()=>{t.panelId.value=null}),me($e,t.panelId),ue(()=>{var c,g;if(!a||t.popoverState.value!==0||!t.panel)return;let d=(c=u.value)==null?void 0:c.activeElement;(g=n(t.panel))!=null&&g.contains(d)||A(n(t.panel),_.First)});let v=Ae(),C=k(()=>v!==null?(v.value&J.Open)===J.Open:t.popoverState.value===0);function y(c){var g,d;switch(c.key){case z.Escape:if(t.popoverState.value!==0||!n(t.panel)||u.value&&!((g=n(t.panel))!=null&&g.contains(u.value.activeElement)))return;c.preventDefault(),c.stopPropagation(),t.closePopover(),(d=n(t.button))==null||d.focus();break}}function B(c){var g,d,o,r,l;let w=c.relatedTarget;w&&n(t.panel)&&((g=n(t.panel))!=null&&g.contains(w)||(t.closePopover(),((o=(d=n(t.beforePanelSentinel))==null?void 0:d.contains)!=null&&o.call(d,w)||(l=(r=n(t.afterPanelSentinel))==null?void 0:r.contains)!=null&&l.call(r,w))&&w.focus({preventScroll:!0})))}let i=Pe();function p(){let c=n(t.panel);if(!c)return;function g(){N(i.value,{[D.Forwards]:()=>{var d;A(c,_.First)===ae.Error&&((d=n(t.afterPanelSentinel))==null||d.focus())},[D.Backwards]:()=>{var d;(d=n(t.button))==null||d.focus({preventScroll:!0})}})}g()}function h(){let c=n(t.panel);if(!c)return;function g(){N(i.value,{[D.Forwards]:()=>{let d=n(t.button),o=n(t.panel);if(!d)return;let r=re(),l=r.indexOf(d),w=r.slice(0,l+1),E=[...r.slice(l+1),...w];for(let x of E.slice())if(x.dataset.headlessuiFocusGuard==="true"||o!=null&&o.contains(x)){let U=E.indexOf(x);U!==-1&&E.splice(U,1)}A(E,_.First,{sorted:!1})},[D.Backwards]:()=>{var d;A(c,_.Previous)===ae.Error&&((d=n(t.button))==null||d.focus())}})}g()}return()=>{let c={open:t.popoverState.value===0,close:t.close},{focus:g,...d}=e,o={ref:t.panel,id:m,onKeydown:y,onFocusout:a&&t.popoverState.value===0?B:void 0,tabIndex:-1};return se({ourProps:o,theirProps:{...P,...d},attrs:P,slot:c,slots:{...f,default:(...r)=>{var l;return[O(Y,[C.value&&t.isPortalled.value&&O(te,{id:b,ref:t.beforePanelSentinel,features:oe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:p}),(l=f.default)==null?void 0:l.call(f,...r),C.value&&t.isPortalled.value&&O(te,{id:s,ref:t.afterPanelSentinel,features:oe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h})])]}},features:ce.RenderStrategy|ce.Static,visible:C.value,name:"PopoverPanel"})}}});const ee=pe(G.ui.strategy,G.ui.popover,ot),st=L({components:{HPopover:Ce,HPopoverButton:rt,HPopoverPanel:ut},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>ee.default.openDelay},closeDelay:{type:Number,default:()=>ee.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:P}){const{ui:f,attrs:S}=he("popover",V(e,"ui"),ee,V(e,"class")),$=k(()=>Ne(e.mode==="hover"?{offsetDistance:0}:{},e.popper,f.value.popper)),[m,a]=Ge($.value),t=F(null),u=F(null);let b=null,s=null;ie(()=>{var h,c;const i=(h=t.value)==null?void 0:h.$.provides;if(!i)return;const p=Object.getOwnPropertySymbols(i);u.value=p.length&&i[p[0]],e.open&&((c=u.value)==null||c.togglePopover())});const v=k(()=>{var c,g,d;if(e.mode!=="hover")return{};const i=((c=e.popper)==null?void 0:c.offsetDistance)||((g=f.value.popper)==null?void 0:g.offsetDistance)||8,p=(d=$.value.placement)==null?void 0:d.split("-")[0],h=`${i}px`;return p==="top"||p==="bottom"?{paddingTop:h,paddingBottom:h}:p==="left"||p==="right"?{paddingLeft:h,paddingRight:h}:{paddingTop:h,paddingBottom:h,paddingLeft:h,paddingRight:h}});function C(){u.value&&(u.value.popoverState===0?u.value.closePopover():u.value.togglePopover())}function y(){e.mode!=="hover"||!u.value||(s&&(clearTimeout(s),s=null),u.value.popoverState!==0&&(b=b||setTimeout(()=>{u.value.togglePopover&&u.value.togglePopover(),b=null},e.openDelay)))}function B(){e.mode!=="hover"||!u.value||(b&&(clearTimeout(b),b=null),u.value.popoverState!==1&&(s=s||setTimeout(()=>{u.value.closePopover&&u.value.closePopover(),s=null},e.closeDelay)))}return fe(()=>e.open,(i,p)=>{u.value&&(p===void 0||i===p||(i?u.value.popoverState=0:u.value.closePopover()))}),fe(()=>{var i;return(i=u.value)==null?void 0:i.popoverState},(i,p)=>{p===void 0||i===p||P("update:open",i===0)}),je(()=>He("$dcv2Y3vSTA")),{ui:f,attrs:S,popover:t,popper:$,trigger:m,container:a,containerStyle:v,onTouchStart:C,onMouseEnter:y,onMouseLeave:B}}}),it=["disabled"];function dt(e,P,f,S,$,m){const a=Q("HPopoverButton"),t=Q("HPopoverPanel"),u=Q("HPopover");return I(),W(u,Z({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:T(({open:b,close:s})=>[M(a,{ref:"trigger",as:"div",disabled:e.disabled,class:j(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:T(()=>[be(e.$slots,"default",{open:b,close:s},()=>[ne("button",{disabled:e.disabled}," Open ",8,it)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(I(),W(ge,Z({key:0,appear:""},e.ui.overlay.transition),{default:T(()=>[b?(I(),q("div",{key:0,class:j([e.ui.overlay.base,e.ui.overlay.background])},null,2)):K("",!0)]),_:2},1040)):K("",!0),b?(I(),q("div",{key:1,ref:"container",class:j([e.ui.container,e.ui.width]),style:Ve(e.containerStyle)},[M(ge,Z({appear:""},e.ui.transition),{default:T(()=>[ne("div",null,[e.popper.arrow?(I(),q("div",{key:0,"data-popper-arrow":"",class:j(Object.values(e.ui.arrow))},null,2)):K("",!0),M(t,{class:j([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:T(()=>[be(e.$slots,"panel",{open:b,close:s})]),_:2},1032,["class"])])]),_:2},1040)],6)):K("",!0)]),_:3},16,["class","onMouseleave"])}const pt=Me(st,[["render",dt]]),vt=pe(G.ui.strategy,G.ui.button,Le),ct=pe(G.ui.strategy,G.ui.buttonGroup,tt),ft=L({name:"ButtonGroup",inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(vt.size).includes(e)}},orientation:{type:String,default:"horizontal",validator(e){return["horizontal","vertical"].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:P}){const{ui:f,attrs:S}=he("buttonGroup",V(e,"ui"),ct),$=k(()=>Ue(P)),m=k(()=>Re(Ke(f.value.wrapper[e.orientation],f.value.rounded,f.value.shadow),e.class)),a=k(()=>f.value.orientation[f.value.rounded][e.orientation]);return qe({orientation:V(e,"orientation"),size:V(e,"size"),ui:f,rounded:a}),()=>O("div",{class:m.value,...S.value},$.value)}}),bt={class:"p-2 max-h-48 w-28 overflow-x-hidden overflow-y-auto"},yt={__name:"UInputOptions",props:Je(["options"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const P=F(),f=e,S=We(e,"modelValue"),m=F((()=>{const s=f.options.find(v=>v.value==S.value);return s==null?typeof S.value=="boolean"?S.value==1?"ON":"OFF":S.value:s.label})()),a=s=>{S.value=s},t=()=>{m.value=0,S.value=0,P.value="number"},u=[{label:"ON",value:!0},{label:"OFF",value:!1}],b=(s,v)=>{P.value="text",m.value=s,S.value=v};return(s,v)=>{const C=Fe,y=et,B=pt,i=ft;return I(),W(i,{class:"w-28"},{default:T(()=>[M(C,{modelValue:X(m),"onUpdate:modelValue":v[0]||(v[0]=p=>Ye(m)?m.value=p:null),type:X(P),onChange:v[1]||(v[1]=p=>a(X(m))),onFocusin:v[2]||(v[2]=p=>t())},null,8,["modelValue","type"]),M(B,{popper:{placement:"bottom-end"}},{panel:T(()=>[ne("div",bt,[(I(!0),q(Y,null,Qe(e.options.concat(u),p=>(I(),W(y,{variant:"ghost",color:"gray",class:"w-full truncate",onClick:h=>b(p.label,p.value)},{default:T(()=>[Ze(Xe(p.label),1)]),_:2},1032,["onClick"]))),256))])]),default:T(()=>[M(y,{color:"white","trailing-icon":"i-heroicons-chevron-down-20-solid"})]),_:1})]),_:1})}}};export{yt as _,ft as a};
