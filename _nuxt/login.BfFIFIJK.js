import{_ as i}from"./Input.BpT9fLtE.js";import{_ as f}from"./FormGroup.C7g5ccRt.js";import{n as x,c as g,b as e,w as a,ab as w,o as b,q as m,s as v,d as I}from"./entry.BUl3kSI8.js";const U={class:"mt-4 ml-4"},A={__name:"login",setup(V){const _=o=>localStorage.getItem(o),c=(o,t)=>{localStorage.setItem(o,t)},s=x(_("adress_server")),d=o=>{c("adress_server",o)},u=()=>{location.reload()};return(o,t)=>{const n=i,l=f,p=w;return b(),g("div",U,[e(l,{label:"Adress PBR :"},{default:a(()=>[e(n,{class:"max-w-72",modelValue:m(s),"onUpdate:modelValue":t[0]||(t[0]=r=>v(s)?s.value=r:null),onChange:t[1]||(t[1]=r=>d(m(s)))},null,8,["modelValue"])]),_:1}),e(l,{label:"User :",class:"mt-8"},{default:a(()=>[e(n,{class:"max-w-72"})]),_:1}),e(l,{label:"Password :"},{default:a(()=>[e(n,{class:"max-w-72"})]),_:1}),e(p,{class:"mt-8 max-w-72",onClick:u,color:"primary",block:""},{default:a(()=>[I("Login")]),_:1})])}}};export{A as default};
