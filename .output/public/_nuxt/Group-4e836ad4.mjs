import d from"./Btop-4c3b41a6.mjs";import f from"./Product-61f11ef5.mjs";import g from"./Case-4978c6ed.mjs";import{S as v,_ as b,o as i,c as r,a as l,w as _,e as w,t as c,b as e,F as n,m as a,n as k,i as y,l as B,k as T,J as $}from"./entry-f900561f.mjs";import"./H2-150b0f3f.mjs";import"./Icon-99a710f8.mjs";import"./Incdec-daa623aa.mjs";import"./Plus-3e645920.mjs";import"./Button-f9a60a36.mjs";var C={name:"group",data(){return{tabs:[{title:"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435",ref:"tab-1",list:[]},{title:"\u041D\u043E\u0432\u0438\u043D\u043A\u0438",ref:"tab-2",list:[]},{title:"\u0410\u043A\u0446\u0438\u0438",ref:"tab-3",list:[]}],currentTab:null,items:[]}},methods:{async getProducts(t){return t=t?"?"+t:"",await(await fetch("/data/products.json"+t)).json()}},created(){},async mounted(){this.items=await this.getProducts("?type=popular"),this.tabs[0].list.push(this.items[0],this.items[1],this.items[0],this.items[1],this.items[0],this.items[1],this.items[0],this.items[1]),this.tabs[1].list.push(this.items[1],this.items[0],this.items[1],this.items[0],this.items[1],this.items[0],this.items[1],this.items[0],this.items[1]),this.tabs[2].list.push(this.items[0],this.items[1],this.items[0],this.items[1],this.items[0],this.items[1],this.items[0],this.items[1]),this.currentTab=this.tabs[0],this.tabs.forEach(t=>{new v(this.$refs[t.ref],{slidesPerView:"auto",spaceBetween:20})})},props:{title:String,link:Boolean}};const S={class:"group bgw"},P={class:"group__inner"},V={class:"group__nav"},x={class:"group__nav-list"},N=["data-text","onClick"],j={class:"group__tabs"},D={class:"group__list swiper-wrapper"},E=e("div",{class:"group__bg bg"},[e("img",{src:$,alt:""})],-1);function F(t,m,z,J,L,q){const u=d,p=f,h=g;return i(),r("div",S,[l(h,null,{default:_(()=>[l(u,{class:"group__btop",link:t.link?{title:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",href:"#"}:null},{default:_(()=>[w(c(t.title?t.title:"\u0413\u043B\u0430\u0432\u043D\u043E\u0435"),1)]),_:1},8,["link"]),e("div",P,[e("div",V,[e("div",x,[(i(!0),r(n,null,a(t.tabs,s=>(i(),r("div",{class:k(["group__nav-item",t.currentTab==s?"group__nav-item_current":null]),key:s.title,"data-text":s.title,onClick:o=>t.currentTab=s},c(s.title),11,N))),128))])]),e("div",j,[(i(!0),r(n,null,a(t.tabs,s=>y((i(),r("div",{class:"group__tab",key:s.title},[e("div",{class:"group__slider swiper",ref_for:!0,ref:s.ref},[e("div",D,[(i(!0),r(n,null,a(s.list,o=>(i(),T(p,{key:o.title,element:o,class:"product_col group__item swiper-slide"},null,8,["element"]))),128))])],512)])),[[B,t.currentTab==s]])),128))])])]),_:1}),E])}var U=b(C,[["render",F]]);export{U as default};