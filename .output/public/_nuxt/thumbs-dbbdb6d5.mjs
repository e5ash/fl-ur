import{A as S,$ as w}from"./entry-f900561f.mjs";function P(I){let{swiper:e,extendParams:v,on:m}=I;v({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let b=!1,h=!1;e.thumbs={swiper:null};function C(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const s=i.clickedIndex,a=i.clickedSlide;if(a&&w(a).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof s=="undefined"||s===null)return;let l;if(i.params.loop?l=parseInt(w(i.clickedSlide).attr("data-swiper-slide-index"),10):l=s,e.params.loop){let n=e.activeIndex;e.slides.eq(n).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,n=e.activeIndex);const d=e.slides.eq(n).prevAll(`[data-swiper-slide-index="${l}"]`).eq(0).index(),p=e.slides.eq(n).nextAll(`[data-swiper-slide-index="${l}"]`).eq(0).index();typeof d=="undefined"?l=p:typeof p=="undefined"?l=d:p-n<n-d?l=p:l=d}e.slideTo(l)}function x(){const{thumbs:i}=e.params;if(b)return!1;b=!0;const s=e.constructor;if(i.swiper instanceof s)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(S(i.swiper)){const a=Object.assign({},i.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),h=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",C),!0}function c(i){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const a=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView,l=e.params.thumbs.autoScrollOffset,n=l&&!s.params.loop;if(e.realIndex!==s.realIndex||n){let t=s.activeIndex,r,f;if(s.params.loop){s.slides.eq(t).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,t=s.activeIndex);const u=s.slides.eq(t).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),o=s.slides.eq(t).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof u=="undefined"?r=o:typeof o=="undefined"?r=u:o-t===t-u?r=s.params.slidesPerGroup>1?o:t:o-t<t-u?r=o:r=u,f=e.activeIndex>e.previousIndex?"next":"prev"}else r=e.realIndex,f=r>e.previousIndex?"next":"prev";n&&(r+=f==="next"?l:-1*l),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r>t?r=r-Math.floor(a/2)+1:r=r+Math.floor(a/2)-1:r>t&&s.params.slidesPerGroup,s.slideTo(r,i?0:void 0))}let d=1;const p=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),s.slides.removeClass(p),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<d;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(p);else for(let t=0;t<d;t+=1)s.slides.eq(e.realIndex+t).addClass(p)}m("beforeInit",()=>{const{thumbs:i}=e.params;!i||!i.swiper||(x(),c(!0))}),m("slideChange update resize observerUpdate",()=>{c()}),m("setTransition",(i,s)=>{const a=e.thumbs.swiper;!a||a.destroyed||a.setTransition(s)}),m("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||h&&i.destroy()}),Object.assign(e.thumbs,{init:x,update:c})}export{P as T};
