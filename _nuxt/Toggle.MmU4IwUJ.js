import{h as A,I as U,G as F,aJ as L,z as s,n as R,H as G,A as N,i as P,j as T,l as V,y as J,aK as M,x as W,D as Y,T as Z,F as q,K as $,aL as Q,S as X,U as z,_,ah as B,V as ee,W as ae,ad as le,ae as ne,af as v,Y as te,$ as oe,o as w,a0 as se,w as ie,a as re,a1 as d,c as C,b as x,aj as S,a5 as ue,Z as ce}from"./entry.DP2uUVjI.js";const de={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500",loading:"animate-spin text-{color}-500 dark:text-{color}-400"},default:{onIcon:null,offIcon:null,loadingIcon:"i-heroicons-arrow-path-20-solid",color:"primary",size:"md"}};let fe=Symbol("GroupContext"),ve=A({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{emit:i,attrs:a,slots:m,expose:p}){var n;let r=(n=e.id)!=null?n:`headlessui-switch-${U()}`,o=F(fe,null),[t,g]=L(s(()=>e.modelValue),l=>i("update:modelValue",l),s(()=>e.defaultChecked));function h(){g(!t.value)}let k=R(null),u=o===null?k:o.switchRef,I=G(s(()=>({as:e.as,type:a.type})),u);p({el:u,$el:u});function y(l){l.preventDefault(),h()}function j(l){l.key===$.Space?(l.preventDefault(),h()):l.key===$.Enter&&Q(l.currentTarget)}function E(l){l.preventDefault()}let b=s(()=>{var l,c;return(c=(l=N(u))==null?void 0:l.closest)==null?void 0:c.call(l,"form")});return P(()=>{T([b],()=>{if(!b.value||e.defaultChecked===void 0)return;function l(){g(e.defaultChecked)}return b.value.addEventListener("reset",l),()=>{var c;(c=b.value)==null||c.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,value:c,form:H,...K}=e,D={checked:t.value},O={id:r,ref:u,role:"switch",type:I.value,tabIndex:0,"aria-checked":t.value,"aria-labelledby":o==null?void 0:o.labelledby.value,"aria-describedby":o==null?void 0:o.describedby.value,onClick:y,onKeyup:j,onKeypress:E};return V(q,[l!=null&&t.value!=null?V(J,M({features:W.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:t.value,form:H,name:l,value:c})):null,Y({ourProps:O,theirProps:{...a,...Z(K,["modelValue","defaultChecked"])},slot:D,attrs:a,slots:m,name:"Switch"})])}}});const f=X(z.ui.strategy,z.ui.toggle,de),me=A({components:{HSwitch:ve,UIcon:B},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onIcon:{type:String,default:()=>f.default.onIcon},offIcon:{type:String,default:()=>f.default.offIcon},loadingIcon:{type:String,default:()=>f.default.loadingIcon},color:{type:String,default:()=>f.default.color,validator(e){return z.ui.colors.includes(e)}},size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:i}){const{ui:a,attrs:m}=ee("toggle",ae(e,"ui"),f),{emitFormChange:p,color:n,inputId:r,name:o}=le(e),t=s({get(){return e.modelValue},set(y){i("update:modelValue",y),i("change",y),p()}}),g=s(()=>ne(v(a.value.base,a.value.size[e.size],a.value.rounded,n.value&&a.value.ring.replaceAll("{color}",n.value),n.value&&(t.value?a.value.active:a.value.inactive).replaceAll("{color}",n.value)),e.class)),h=s(()=>v(a.value.container.base,a.value.container.size[e.size],t.value?a.value.container.active[e.size]:a.value.container.inactive)),k=s(()=>v(a.value.icon.size[e.size],n.value&&a.value.icon.on.replaceAll("{color}",n.value))),u=s(()=>v(a.value.icon.size[e.size],n.value&&a.value.icon.off.replaceAll("{color}",n.value))),I=s(()=>v(a.value.icon.size[e.size],n.value&&a.value.icon.loading.replaceAll("{color}",n.value)));return te(()=>ce("$mRW6KdlcYH")),{ui:a,attrs:m,name:o,inputId:r,active:t,switchClass:g,containerClass:h,onIconClass:k,offIconClass:u,loadingIconClass:I}}});function pe(e,i,a,m,p,n){const r=B,o=oe("HSwitch");return w(),se(o,ue({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":i[0]||(i[0]=t=>e.active=t),name:e.name,disabled:e.disabled||e.loading,class:e.switchClass},e.attrs),{default:ie(()=>[re("span",{class:d(e.containerClass)},[e.loading?(w(),C("span",{key:0,class:d([e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[x(r,{name:e.loadingIcon,class:d(e.loadingIconClass)},null,8,["name","class"])],2)):S("",!0),!e.loading&&e.onIcon?(w(),C("span",{key:1,class:d([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[x(r,{name:e.onIcon,class:d(e.onIconClass)},null,8,["name","class"])],2)):S("",!0),!e.loading&&e.offIcon?(w(),C("span",{key:2,class:d([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[x(r,{name:e.offIcon,class:d(e.offIconClass)},null,8,["name","class"])],2)):S("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const he=_(me,[["render",pe]]);export{he as _};
