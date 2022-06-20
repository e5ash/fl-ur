import g from"./Icon-99a710f8.mjs";import w from"./Field-09a0bf83.mjs";import X from"./Case-4978c6ed.mjs";import M from"./Button-f9a60a36.mjs";import{u as L,f as y,_ as T,o,c as r,a,w as m,b as t,F as _,m as v,i as l,l as c,n as h,t as d,e as S,D as $}from"./entry-f900561f.mjs";var B={name:"Choiser",setup(){return{isShow:L("isChoiserShow",()=>!1)}},data(){return{cls:{modalShow:"choiser__modal_show",currentItem:"choiser__item_current"},buttonTextCurrent:"",buttonTexts:{next:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",skip:"\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"},searchValue:"",searchList:[],currentMark:"",currentModel:"",currentMode:"",level:0,marks:[{name:"Volkswagen",icon:"/assets/images/marks/volkswagen.svg",models:[{name:"Golf",mods:[{name:"Golf"},{name:"Golf Alltrack"},{name:"Golf Country"},{name:"e-Golf"}]},{name:"Jetta",mods:[{name:"Jetta"},{name:"Jeta GLI"}]}]},{name:"Porsche",icon:"/assets/images/marks/porsche.svg",models:[{name:"911",mods:[{name:"911"},{name:"911 Carrera"},{name:"911 R"},{name:"911 Turbo"},{name:"911 Turbo S"}]},{name:"Cayenne",mods:[{name:"Cayenne"},{name:"Cayenne Diesel"},{name:"Cayenne S"},{name:"Cayenne Turbo"}]}]},{name:"Audi",icon:"/assets/images/marks/audi.svg",models:[{name:"100",mods:[{name:"100"},{name:"100 S4"}]},{name:"A5",mods:[{name:"A5"},{name:"A5 g-tron"}]}]},{name:"BMW",icon:"/assets/images/marks/bmw.svg",models:[{name:"X1",mods:[{name:"X1"},{name:"X1 16d"},{name:"X1 18d"},{name:"X1 18i"},{name:"X1 20d"},{name:"X1 20i"},{name:"X1 23d"},{name:"X1 28i"}]},{name:"X2",mods:[{name:"X2"},{name:"X2 16d"},{name:"X2 18d"},{name:"X2 18i"},{name:"X2 20d"},{name:"X2 20i"},{name:"X2 23d"},{name:"X2 28i"}]},{name:"X3",mods:[{name:"X3"},{name:"X3 16d"},{name:"X3 18d"},{name:"X3 18i"},{name:"X3 20d"},{name:"X3 20i"},{name:"X3 23d"},{name:"X3 28i"}]}]},{name:"Mini",icon:"/assets/images/marks/mini.svg",models:[{name:"Cabrio",mods:[{name:"Cabrio Cooper"},{name:"Cabrio Cooper D"},{name:"Cabrio Cooper S"}]}]}]}},methods:{toLink:y,goBack(){if(this.level==0)return this.isShow=!1,!1;switch(this.level){case 1:this.currentMark="";break;case 2:this.currentModel="";break;case 3:this.currentMode="";break}this.level--},setItem(e,n,f=!0,u=!1){if(this[e]==n)return!1;this[e]=n,f&&this.nextLevel(),u&&this.toLink(u)},nextLevel(){this.level=this.level+1},close(){this.isOpen=!1},clickToButton(){this.filterList.length==0?(this.searchValue="",this.$refs.area.value="",this.$refs.area.handleFocusout()):this.toLink("/catalog")}},computed:{filterList(){let e=this.searchValue.toLowerCase().trim();return this.searchList.filter(n=>{if(n.name.toLowerCase().indexOf(e)>=0)return n})}},created(){this.buttonTextCurrent=this.buttonTexts.next,this.searchList=this.marks},watch:{level(){switch(this.$refs.area.value="",this.$refs.area.handleFocusout(),this.$refs.area.handleInput(),this.level){case 0:this.searchList=this.marks,this.buttonTextCurrent=this.buttonTexts.next;break;case 1:this.searchList=this.currentMark.models,this.buttonTextCurrent=this.buttonTexts.skip;break;case 2:this.searchList=this.currentModel.mods,this.buttonTextCurrent=this.buttonTexts.skip;break}}}};const I={class:"choiser"},V={class:"choiser__wrap"},G=t("span",null,"\u041D\u0430\u0437\u0430\u0434",-1),A={class:"choiser__inner"},D={class:"choiser__area"},F={key:0,class:"choiser__list"},J=["onClick"],N={class:"choiser__item-icon"},E=["src","alt"],O={class:"choiser__item-title"},z={class:"choiser__item-arrow"},P={class:"choiser__sub"},R=["onClick"],U={class:"choiser__item-icon"},W=["src","alt"],j={class:"choiser__item-title"},q={class:"choiser__item-arrow"},H={class:"choiser__sub"},K=["onClick"],Q={class:"choiser__item-icon"},Y=["src","alt"],Z={class:"choiser__item-title"},x={class:"choiser__item-arrow"},ee={key:1,class:"choiser__empty"},se=t("div",{class:"choiser__empty-icon"},[t("img",{src:$,alt:""})],-1),te=t("div",{class:"choiser__empty-title"},"\u041E\u0439, \u0430 \u0442\u0443\u0442 \u043F\u0443\u0441\u0442\u043E...",-1),ne=[se,te];function ae(e,n,f,u,oe,re){const i=g,k=w,C=X,b=M;return o(),r("div",I,[a(C,null,{default:m(()=>[t("div",V,[t("div",{class:"choiser__area",onClick:n[0]||(n[0]=s=>e.isShow=!0)},[a(k,{class:"choiser__field",mode:"md, b-gray",type:"text",name:"field",placeholder:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0440\u043A\u0443 \u0438 \u043C\u043E\u0434\u0435\u043B\u044C",readonly:!0},{iconBefore:m(()=>[a(i,{name:"car",class:"f-red"})]),_:1})])])]),_:1}),t("div",{class:h(["choiser__modal",e.isShow?e.cls.modalShow:null])},[t("div",{class:"choiser__back",onClick:n[1]||(n[1]=(...s)=>e.goBack&&e.goBack(...s))},[a(i,{name:"chevron"}),G]),t("div",A,[t("div",D,[a(k,{ref:"area",class:"choiser__field",mode:"md, b-gray",type:"text",name:"field",placeholder:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u043F\u0438\u0441\u043A\u0443 \u0430\u0432\u0442\u043E",val:e.searchValue,"onUpdate:val":n[2]||(n[2]=s=>e.searchValue=s),clear:!0},{iconBefore:m(()=>[a(i,{name:"car",class:"f-red"})]),_:1},8,["val"])]),e.filterList.length>0?(o(),r("div",F,[(o(!0),r(_,null,v(e.level==0?e.filterList:e.marks,s=>l((o(),r("div",{key:s.name,class:h(["choiser__item",e.currentMark==s?e.cls.currentItem:null]),onClick:p=>e.setItem("currentMark",s)},[t("div",N,[t("img",{src:s.icon,alt:s.name},null,8,E)]),t("div",O,d(s.name),1),t("div",z,[a(i,{name:"arrow"})])],10,J)),[[c,e.level==0||e.level==1&&e.currentMark==s]])),128)),l(t("div",P,[(o(!0),r(_,null,v(e.level==1?e.filterList:e.currentMark.models,s=>l((o(),r("div",{key:s.name,class:h(["choiser__item",e.currentModel==s?e.cls.currentItem:null]),onClick:p=>e.setItem("currentModel",s)},[t("div",U,[t("img",{src:e.currentMark.icon,alt:s.name},null,8,W)]),t("div",j,d(s.name),1),t("div",q,[a(i,{name:"arrow"})])],10,R)),[[c,e.level==1||e.level==2&&e.currentModel==s]])),128))],512),[[c,e.currentMark]]),l(t("div",H,[(o(!0),r(_,null,v(e.level==1?e.filterList:e.currentModel.mods,s=>l((o(),r("div",{key:s.name,class:h(["choiser__item choiser__item_sub",e.currentMode==s?e.cls.currentItem:null]),onClick:p=>e.setItem("currentMode",s,!1,"/catalog")},[t("div",Q,[t("img",{src:e.currentMark.icon,alt:s.name},null,8,Y)]),t("div",Z,d(s.name),1),t("div",x,[a(i,{name:"chevron",class:"f-red"})])],10,K)),[[c,e.level==2||e.currentMode==s]])),128))],512),[[c,e.currentModel]])])):(o(),r("div",ee,ne))]),a(b,{class:"choiser__button",mods:"md, bg-red",onClick:e.clickToButton},{default:m(()=>[S(d(e.filterList.length>0?e.buttonTextCurrent:e.buttonTexts.reset),1)]),_:1},8,["onClick"])],2)])}var de=T(B,[["render",ae]]);export{de as default};