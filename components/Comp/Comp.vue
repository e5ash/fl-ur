<template>
  <div class="comp">
    <Case class="case_sm">
      <Breadcrumb class="comp__breadcrumb hidden-xs" />
      <Return class="comp__return hidden show-xs-flex" />
      <H1 class="comp__title">Сравнение</H1>
      <T1 class="comp__desc">Добро пожаловать в в интернет-магазин комплектующих для тюнинга «CARCAINE»</T1>
      <div class="comp__slider swiper" ref="slider" v-if="list">
        <div class="comp__list swiper-wrapper">
          <Product 
            v-for="item in list"
            :key="item.title"
            class="product_col comp__item swiper-slide"
            :element="item"
            :compare="true"
            :chars_show="true" />
        </div>
      </div>
      <div class="comp__alert" v-else>В сравнении ничего не найдено.</div>
    </Case>
  </div>
</template>
<script src="./Comp.js"></script>
<style src='./Comp.scss'></style>
