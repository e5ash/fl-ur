import m from"./Icon-99a710f8.mjs";import{u as _,_ as h,o as l,c as t,t as n,g as o,b as i,k as p,n as c,a as d,F as u,m as v,i as f,B as S}from"./entry-f900561f.mjs";var g={name:"Select",setup(){return{isSelectOpen:_("isSelectOpen")}},data(){return{name:"select",value:"",isOpen:!1,isDisabled:!1,modsBEM:[],classOpen:"select_open",classItemCurrent:"select__item_current"}},created(){if(this.disabled&&(this.isDisabled=this.disabled),this.mods){let e=[];e=this.mods.split(", "),e.forEach(a=>{this.modsBEM.push(this.name+"_"+a)})}},methods:{toggleSelect(e){if(this.isDisabled)return!1;if(e.target.closest(".select__clear"))return this.isSelectOpen=null,this.isOpen=!1,!1;this.isSelectOpen!=null&&this.isSelectOpen!=this&&(this.isSelectOpen.isOpen=!1),this.isOpen?(this.isSelectOpen=null,this.isOpen=!1):(this.isSelectOpen=this,this.isOpen=!0)},setDisabled(){this.isDisabled=!0},removeDisabled(){this.isDisabled=!1}},props:{mods:String,title:String,placeholder:String,options:Array,val:String,clear:Boolean,disabled:Boolean,classesDrop:String,bg:Boolean},watch:{value(){this.$emit("update:val",this.value)}},emits:["update:val"]};const k={key:0,class:"select__title"},O={class:"select__area"},b={key:0,class:"select__icon"},y=["src","alt"],B={key:1,class:"select__value"},D={key:2,class:"select__value select__placeholder"},C={class:"select__clear"},$={class:"select__list"},w=["onClick"],E={key:0,class:"select__item-icon"},M=["src","alt"],V={class:"select__item-title"},I={class:"select__item-check"},N={key:1,class:"select__bg"},F=["value"];function z(e,a,A,L,U,j){const r=m;return l(),t("div",{class:c(["select",[e.modsBEM,e.isOpen?e.classOpen:null]]),onClick:a[3]||(a[3]=(...s)=>e.toggleSelect&&e.toggleSelect(...s))},[e.title?(l(),t("div",k,n(e.title),1)):o("",!0),i("div",O,[e.value.icon?(l(),t("div",b,[i("img",{src:e.value.icon,alt:e.value.name},null,8,y)])):o("",!0),e.value&&e.value==e.val?(l(),t("div",B,n(e.value.name),1)):(l(),t("div",D,n(e.placeholder),1)),i("div",C,[e.clear==!0?(l(),p(r,{key:0,class:c(e.value&&e.value==e.val?"icon_show":"icon_hide"),name:"cross",onClick:a[0]||(a[0]=s=>(e.value="",e.$emit("update:val",e.value)))},null,8,["class"])):o("",!0)]),i("div",{class:"select__chevron",onClick:a[1]||(a[1]=s=>e.isOpen=!1)},[d(r,{name:"chevron-wide"})])]),i("div",{class:c(["select__drop",e.classesDrop])},[i("div",$,[(l(!0),t(u,null,v(e.options,s=>(l(),t("div",{key:s.id,class:c(["select__item",e.val.name==s.name?e.classItemCurrent:null]),onClick:q=>e.value=s},[s.icon?(l(),t("div",E,[i("img",{src:s.icon,alt:s.name},null,8,M)])):o("",!0),i("div",V,n(s.name),1),i("div",I,[d(r,{name:"check",class:c(e.val.name==s.name?"icon_show":"icon_hide")},null,8,["class"])])],10,w))),128))])],2),e.bg?(l(),t("div",N)):o("",!0),f(i("select",{"onUpdate:modelValue":a[2]||(a[2]=s=>e.value=s)},[(l(!0),t(u,null,v(e.options,s=>(l(),t("option",{key:s.name,value:s},n(s.name),9,F))),128))],512),[[S,e.value]])],2)}var J=h(g,[["render",z]]);export{J as default};
