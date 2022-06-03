<template>
  <div class="inf">
    <Case class="case_sm">
      <Breadcrumb class="inf__breadcrumb hidden-xs" />
      <Return class="inf__return hidden show-xs-flex" />
      <div class="inf__return" v-if="step == 2" @click="prevStep">
        <Icon name="chevron" class="f-red" />
        <span>Назад</span>
      </div>
      <div class="inf__title hidden show-xs"><slot name="title" /></div>
      <div class="inf__inner row">
        <div class="inf__left">
          <H1 class="inf__title hidden-xs"><slot name="title" /></H1>
          <div class="inf__desc-top inf__text"><slot name="desc-top" /></div>
        </div>
        <div class="inf__right">
          <div class="inf__images">
            <div class="inf__slider swiper" ref="images">
              <div class="inf__slider-list swiper-wrapper">
                <div v-for="image in images" :key="image.id" class="inf__slider-item swiper-slide">
                  <img :src="image" alt="">
                </div>
              </div>
            </div>
            <div class="inf__pagination swiper" ref="pagination">
              <div class="inf__pagination-list swiper-wrapper">
                <div v-for="image in images" :key="image.id" class="inf__pagination-item swiper-slide">
                  <img :src="image" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inf__desc-bottom inf__text"><slot name="desc-bottom"/></div>
      <div class="inf__video" v-if="video">
        <H3 class="inf__video-title inf__subtitle">Видео обзор</H3>
        <Video class="inf__video-wrap" poster="/assets/images/video-poster.jpg" video="LtAgXMsXOxk"></Video>
      </div>
      <div class="inf__rec" v-if="rec">
        <div class="inf__rec-head">
          <H3 class="inf__rec-title inf__subtitle">Рекомендуем к установке</H3>
          <!-- <div class="inf__rec-add-all">Добавить все в корзину</div> -->
        </div>
        <div class="inf__rec-list row">
          <Product 
            v-for="item in recs"
            :key="item.title"
            class="product_col inf__rec-item"
            :UID="item.UID"
            :img="item.img"
            :title="item.title" 
            :desc="item.desc" 
            :price="item.price" />
        </div>
      </div>
    </Case>
  </div>
  
</template>
<script src="./Inf.js"></script>
<style src='./Inf.scss'></style>
