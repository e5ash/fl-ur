import{_ as i,o as a,c as n,b as o,F as r,m as _,n as c,h as l,t as p}from"./entry-f900561f.mjs";var d={name:"Pagination",data(){return{pages:5}}};const m={class:"pagination"},u={class:"pagination__list row"},f=["href","onClick"];function g(t,h,k,v,$,B){return a(),n("div",m,[o("div",u,[(a(!0),n(r,null,_(t.pages,(e,s)=>(a(),n("a",{key:e.id,class:c(["pagination__item",s==0?"pagination__item_current":null]),href:"?page="+e,onClick:l(C=>t.toLink("?page="+e),["prevent"])},p(e),11,f))),128))])])}var x=i(d,[["render",g]]);export{x as default};