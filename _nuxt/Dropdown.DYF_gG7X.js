import{h as B,n as R,ax as he,z as w,ay as ke,az as Se,A as M,B as we,as as Re,J as Te,at as z,D as H,I as Y,H as Pe,aY as $e,aB as De,N as ae,aZ as Ce,i as le,E as Oe,C as Ae,aT as A,a_ as Be,G as Ee,a$ as Ne,b0 as S,K as y,b1 as je,R as ne,b2 as se,O as Le,S as oe,U as F,_ as re,V as ie,W as q,ae as de,af as ce,o as h,c as $,a4 as Q,d as pe,t as W,a5 as E,b3 as _e,ah as ve,b4 as fe,aD as ze,aE as Fe,j as ue,Y as He,Z as Ue,b5 as Ke,$ as j,a0 as O,w as P,b as L,a1 as T,a as K,a2 as xe,aF as Je,aj as _,F as x,a3 as J,b6 as Ve,e as me}from"./entry.Bg0Ots8a.js";const Ze={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}};var qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qe||{}),Qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Qe||{});function We(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ge=Symbol("MenuContext");function U(e){let c=Ee(ge,null);if(c===null){let f=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,U),f}return c}let Ye=B({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:c,attrs:f}){let m=R(1),g=R(null),b=R(null),t=R([]),u=R(""),r=R(null),p=R(1);function I(a=o=>o){let o=r.value!==null?t.value[r.value]:null,l=Le(a(t.value.slice()),s=>M(s.dataRef.domRef)),d=o?l.indexOf(o):null;return d===-1&&(d=null),{items:l,activeItemIndex:d}}let i={menuState:m,buttonRef:g,itemsRef:b,items:t,searchQuery:u,activeItemIndex:r,activationTrigger:p,closeMenu:()=>{m.value=1,r.value=null},openMenu:()=>m.value=0,goToItem(a,o,l){let d=I(),s=Ne(a===S.Specific?{focus:S.Specific,id:o}:{focus:a},{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});u.value="",r.value=s,p.value=l??1,t.value=d.items},search(a){let o=u.value!==""?0:1;u.value+=a.toLowerCase();let l=(r.value!==null?t.value.slice(r.value+o).concat(t.value.slice(0,r.value+o)):t.value).find(s=>s.dataRef.textValue.startsWith(u.value)&&!s.dataRef.disabled),d=l?t.value.indexOf(l):-1;d===-1||d===r.value||(r.value=d,p.value=1)},clearSearch(){u.value=""},registerItem(a,o){let l=I(d=>[...d,{id:a,dataRef:o}]);t.value=l.items,r.value=l.activeItemIndex,p.value=1},unregisterItem(a){let o=I(l=>{let d=l.findIndex(s=>s.id===a);return d!==-1&&l.splice(d,1),l});t.value=o.items,r.value=o.activeItemIndex,p.value=1}};return he([g,b],(a,o)=>{var l;i.closeMenu(),ke(o,Se.Loose)||(a.preventDefault(),(l=M(g))==null||l.focus())},w(()=>m.value===0)),we(ge,i),Re(w(()=>Te(m.value,{0:z.Open,1:z.Closed}))),()=>{let a={open:m.value===0,close:i.closeMenu};return H({ourProps:{},theirProps:e,slot:a,slots:c,attrs:f,name:"Menu"})}}}),Ge=B({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:c,slots:f,expose:m}){var g;let b=(g=e.id)!=null?g:`headlessui-menu-button-${Y()}`,t=U("MenuButton");m({el:t.buttonRef,$el:t.buttonRef});function u(i){switch(i.key){case y.Space:case y.Enter:case y.ArrowDown:i.preventDefault(),i.stopPropagation(),t.openMenu(),A(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(S.First)});break;case y.ArrowUp:i.preventDefault(),i.stopPropagation(),t.openMenu(),A(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(S.Last)});break}}function r(i){switch(i.key){case y.Space:i.preventDefault();break}}function p(i){e.disabled||(t.menuState.value===0?(t.closeMenu(),A(()=>{var a;return(a=M(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(i.preventDefault(),t.openMenu(),We(()=>{var a;return(a=M(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let I=Pe(w(()=>({as:e.as,type:c.type})),t.buttonRef);return()=>{var i;let a={open:t.menuState.value===0},{...o}=e,l={ref:t.buttonRef,id:b,type:I.value,"aria-haspopup":"menu","aria-controls":(i=M(t.itemsRef))==null?void 0:i.id,"aria-expanded":t.menuState.value===0,onKeydown:u,onKeyup:r,onClick:p};return H({ourProps:l,theirProps:o,slot:a,attrs:c,slots:f,name:"MenuButton"})}}}),Xe=B({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:c,slots:f,expose:m}){var g;let b=(g=e.id)!=null?g:`headlessui-menu-items-${Y()}`,t=U("MenuItems"),u=R(null);m({el:t.itemsRef,$el:t.itemsRef}),$e({container:w(()=>M(t.itemsRef)),enabled:w(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function r(a){var o;switch(u.value&&clearTimeout(u.value),a.key){case y.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case y.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let l=t.items.value[t.activeItemIndex.value];(o=M(l.dataRef.domRef))==null||o.click()}t.closeMenu(),se(M(t.buttonRef));break;case y.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.Next);case y.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.Previous);case y.Home:case y.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.First);case y.End:case y.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.Last);case y.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>{var l;return(l=M(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case y.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>je(M(t.buttonRef),a.shiftKey?ne.Previous:ne.Next));break;default:a.key.length===1&&(t.search(a.key),u.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case y.Space:a.preventDefault();break}}let I=De(),i=w(()=>I!==null?(I.value&z.Open)===z.Open:t.menuState.value===0);return()=>{var a,o;let l={open:t.menuState.value===0},{...d}=e,s={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(o=M(t.buttonRef))==null?void 0:o.id,id:b,onKeydown:r,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return H({ourProps:s,theirProps:d,slot:l,attrs:c,slots:f,features:ae.RenderStrategy|ae.Static,visible:i.value,name:"MenuItems"})}}}),et=B({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:c,attrs:f,expose:m}){var g;let b=(g=e.id)!=null?g:`headlessui-menu-item-${Y()}`,t=U("MenuItem"),u=R(null);m({el:u,$el:u});let r=w(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===b:!1),p=Ce(u),I=w(()=>({disabled:e.disabled,get textValue(){return p()},domRef:u}));le(()=>t.registerItem(b,I)),Oe(()=>t.unregisterItem(b)),Ae(()=>{t.menuState.value===0&&r.value&&t.activationTrigger.value!==0&&A(()=>{var n,v;return(v=(n=M(u))==null?void 0:n.scrollIntoView)==null?void 0:v.call(n,{block:"nearest"})})});function i(n){if(e.disabled)return n.preventDefault();t.closeMenu(),se(M(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(S.Nothing);t.goToItem(S.Specific,b)}let o=Be();function l(n){o.update(n)}function d(n){o.wasMoved(n)&&(e.disabled||r.value||t.goToItem(S.Specific,b,0))}function s(n){o.wasMoved(n)&&(e.disabled||r.value&&t.goToItem(S.Nothing))}return()=>{let{disabled:n}=e,v={active:r.value,disabled:n,close:t.closeMenu},{...k}=e;return H({ourProps:{id:b,ref:u,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:a,onPointerenter:l,onMouseenter:l,onPointermove:d,onMousemove:d,onPointerleave:s,onMouseleave:s},theirProps:{...f,...k},slot:v,attrs:f,slots:c,name:"MenuItem"})}}});const V=oe(F.ui.strategy,F.ui.kbd,Ze),tt=B({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>V.default.size,validator(e){return Object.keys(V.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:c,attrs:f}=ie("kbd",q(e,"ui"),V),m=w(()=>de(ce(c.value.base,c.value.size[e.size],c.value.padding,c.value.rounded,c.value.font,c.value.background,c.value.ring),e.class));return{ui:c,attrs:f,kbdClass:m}}});function at(e,c,f,m,g,b){return h(),$("kbd",E({class:e.kbdClass},e.attrs),[Q(e.$slots,"default",{},()=>[pe(W(e.value),1)])],16)}const be=re(tt,[["render",at]]),Z=oe(F.ui.strategy,F.ui.dropdown,_e),nt=B({components:{HMenu:Ye,HMenuButton:Ge,HMenuItems:Xe,HMenuItem:et,UIcon:ve,UAvatar:fe,UKbd:be},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>Z.default.openDelay},closeDelay:{type:Number,default:()=>Z.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:c}){const{ui:f,attrs:m}=ie("dropdown",q(e,"ui"),Z,q(e,"class")),g=w(()=>ze(e.mode==="hover"?{offsetDistance:0}:{},e.popper,f.value.popper)),[b,t]=Fe(g.value),u=R(null);let r=null,p=null;le(()=>{var v,k;const s=(v=b.value)==null?void 0:v.$.provides;if(!s)return;const n=Object.getOwnPropertySymbols(s);u.value=n.length&&s[n[0]],e.open&&((k=u.value)==null||k.openMenu())});const I=w(()=>{var k,D,C;if(e.mode!=="hover")return{};const s=((k=e.popper)==null?void 0:k.offsetDistance)||((D=f.value.popper)==null?void 0:D.offsetDistance)||8,n=(C=g.value.placement)==null?void 0:C.split("-")[0],v=`${s}px`;return n==="top"||n==="bottom"?{paddingTop:v,paddingBottom:v}:n==="left"||n==="right"?{paddingLeft:v,paddingRight:v}:{paddingTop:v,paddingBottom:v,paddingLeft:v,paddingRight:v}});function i(){u.value&&(u.value.menuState===0?u.value.closeMenu():u.value.openMenu())}function a(){e.mode!=="hover"||!u.value||(p&&(clearTimeout(p),p=null),u.value.menuState!==0&&(r=r||setTimeout(()=>{u.value.openMenu&&u.value.openMenu(),r=null},e.openDelay)))}function o(){e.mode!=="hover"||!u.value||(r&&(clearTimeout(r),r=null),u.value.menuState!==1&&(p=p||setTimeout(()=>{u.value.closeMenu&&u.value.closeMenu(),p=null},e.closeDelay)))}function l(s,n,{href:v,navigate:k,close:D,isExternal:C}){n.click&&n.click(s),v&&!C&&(k(s),D())}ue(()=>e.open,(s,n)=>{u.value&&(n===void 0||s===n||(s?u.value.openMenu():u.value.closeMenu()))}),ue(()=>{var s;return(s=u.value)==null?void 0:s.menuState},(s,n)=>{n===void 0||s===n||c("update:open",s===0)});const d=me;return He(()=>Ue("$ctlRmIk4j0")),{ui:f,attrs:m,popper:g,trigger:b,container:t,containerStyle:I,onTouchStart:i,onMouseEnter:a,onMouseLeave:o,onClick:l,getNuxtLinkProps:Ke,twMerge:de,twJoin:ce,NuxtLink:d}}}),ut=["disabled"];function lt(e,c,f,m,g,b){const t=j("HMenuButton"),u=ve,r=fe,p=be,I=j("HMenuItem"),i=me,a=j("HMenuItems"),o=j("HMenu");return h(),O(o,E({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:P(({open:l})=>[L(t,{ref:"trigger",as:"div",disabled:e.disabled,class:T(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:P(()=>[Q(e.$slots,"default",{open:l,disabled:e.disabled},()=>[K("button",{disabled:e.disabled}," Open ",8,ut)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),l&&e.items.length?(h(),$("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:xe(e.containerStyle)},[L(Je,E({appear:""},e.ui.transition),{default:P(()=>[K("div",null,[e.popper.arrow?(h(),$("div",{key:0,"data-popper-arrow":"",class:T(Object.values(e.ui.arrow))},null,2)):_("",!0),L(a,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:P(()=>[(h(!0),$(x,null,J(e.items,(d,s)=>(h(),$("div",{key:s,class:T(e.ui.padding)},[(h(!0),$(x,null,J(d,(n,v)=>(h(),O(i,E({key:v},e.getNuxtLinkProps(n),{custom:""}),{default:P(({href:k,target:D,rel:C,navigate:ye,isExternal:Me,isActive:G})=>[L(I,{disabled:n.disabled},{default:P(({active:X,disabled:ee,close:Ie})=>[(h(),O(Ve(k?"a":"button"),{href:ee?void 0:k,rel:C,target:D,class:T(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,X||G?e.ui.item.active:e.ui.item.inactive,ee&&e.ui.item.disabled),n.class)),onClick:N=>e.onClick(N,n,{href:k,navigate:ye,close:Ie,isExternal:Me})},{default:P(()=>[Q(e.$slots,n.slot||"item",{item:n},()=>{var N;return[n.icon?(h(),O(u,{key:0,name:n.icon,class:T(e.twMerge(e.twJoin(e.ui.item.icon.base,X||G?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(h(),O(r,E({key:1},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):_("",!0),K("span",{class:T(e.twMerge(e.ui.item.label,n.labelClass))},W(n.label),3),(N=n.shortcuts)!=null&&N.length?(h(),$("span",{key:2,class:T(e.ui.item.shortcuts)},[(h(!0),$(x,null,J(n.shortcuts,te=>(h(),O(p,{key:te},{default:P(()=>[pe(W(te),1)]),_:2},1024))),128))],2)):_("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],6)):_("",!0)]),_:3},16,["class","onMouseleave"])}const ot=re(nt,[["render",lt]]);export{ot as _};
