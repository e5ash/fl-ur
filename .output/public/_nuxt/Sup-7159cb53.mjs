import f from"./Breadcrumb-f0a493e1.mjs";import h from"./Return-e7151eca.mjs";import g from"./Icon-99a710f8.mjs";import v from"./H1-7b092942.mjs";import x from"./T1-27276489.mjs";import $ from"./Case-4978c6ed.mjs";import{_ as C,o as n,c as a,a as o,w as c,g as b,b as t,F as k,m as B,t as r,e as N}from"./entry-f900561f.mjs";import"./Share-9e009dfc.mjs";var V={name:"Sup",data(){return{list:[],sups:[{name:"BMW Russia",desc:"\u041E\u0447\u0435\u043D\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0442\u0440\u0435\u0431\u0443\u044E\u0449\u0438\u0445 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",img:"/assets/images/ate.jpg"},{name:"REVO",desc:"\u0414\u043B\u044F \u0446\u0435\u043D\u0438\u0442\u0435\u043B\u0435\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0438 \u0434\u043B\u044F \u0442\u0435 \u043A\u0442\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435 \u043E\u0442 \u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F.",img:"/assets/images/bremo.jpg"}]}},created(){let s=0;for(let _=0;_<8;_++)this.list.push(this.sups[s]),s=s===1?0:1}};const w={class:"sup"},R=t("span",null,"\u041D\u0430\u0437\u0430\u0434",-1),S=N("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"),y=t("p",null,"\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u0434\u043B\u044F \u0442\u044E\u043D\u0438\u043D\u0433\u0430 \xABCARCAINE\xBB",-1),E={class:"sup__list row"},j={class:"sup__item-img"},A=["src"],F={class:"sup__item-name"},I={class:"sup__item-desc"};function T(s,_,D,H,L,M){const p=f,i=h,m=g,u=v,d=x,l=$;return n(),a("div",w,[o(l,{class:"case_sm"},{default:c(()=>[o(p,{class:"sup__breadcrumb hidden-xs"}),o(i,{class:"sup__return hidden show-xs-flex"}),s.step==2?(n(),a("div",{key:0,class:"sup__return",onClick:_[0]||(_[0]=(...e)=>s.prevStep&&s.prevStep(...e))},[o(m,{name:"chevron",class:"f-red"}),R])):b("",!0),o(u,{class:"sup__title"},{default:c(()=>[S]),_:1}),o(d,{class:"sup__text"},{default:c(()=>[y]),_:1}),t("div",E,[(n(!0),a(k,null,B(s.list,e=>(n(),a("div",{class:"sup__item",key:e.id},[t("div",j,[t("img",{src:e.img,alt:""},null,8,A)]),t("div",F,r(e.name),1),t("div",I,r(e.desc),1)]))),128))])]),_:1})])}var Q=C(V,[["render",T]]);export{Q as default};