import d from"./Icon-99a710f8.mjs";import{_ as f,p as b,o,c as n,b as a,F as l,m as g,k as $,w as k,t as h,a as v,g as y}from"./entry-f900561f.mjs";var B={name:"Breadcrumb",computed:{crumbs(){const s=this.$route.fullPath,p=s.startsWith("/")?s.substring(1).split("/"):s.split("/"),i=[];let _=this.$router.getRoutes().find(r=>{if(r.path=="/")return r});i.push(_);let m="";return p.forEach((r,u)=>{m=`${m}/${r}`;let e="";this.$route.name=="catalog-id"&&u==p.length-1?e=this.$router.getRoutes().find(t=>{if(t.name==this.$route.name)return t}):e=this.$router.getRoutes().find(t=>{if(t.path==m)return t}),(e==null?void 0:e.name)!==null&&i.push(e)}),i}}};const E={class:"breadcrumb"},L={class:"breadcrumb__list",itemscope:"",itemtype:"http://schema.org/BreadcrumbList"},C={class:"breadcrumb__item",itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},N={itemprop:"name"},R={key:1,itemprop:"item"},V={itemprop:"name"},w=["content"],F={key:0,class:"breadcrumb__sep"};function I(s,p,i,_,m,r){const u=b("router-link"),e=d;return o(),n("div",E,[a("div",L,[(o(!0),n(l,null,g(s.crumbs,(t,c)=>(o(),n(l,{key:c},[a("div",C,[c<s.crumbs.length-1?(o(),$(u,{key:0,to:t,title:t.meta.title,itemprop:"item"},{default:k(()=>[a("span",N,h(t.meta.title),1)]),_:2},1032,["to","title"])):(o(),n("u",R,[a("span",V,h(t.meta.title),1)])),a("meta",{itemprop:"position",content:c+1},null,8,w)]),c<s.crumbs.length-1?(o(),n("div",F,[v(e,{name:"chevron"})])):y("",!0)],64))),128))])])}var S=f(B,[["render",I]]);export{S as default};