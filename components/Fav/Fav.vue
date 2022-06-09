<template>
  <div class="fav">
    <Case class="case_sm">
      <Breadcrumb class="fav__breadcrumb hidden-xs" />
      <Return class="fav__return hidden show-xs-flex" />
      <H1 class="fav__title">Избранное</H1>
      <T1 class="fav__desc">Добро пожаловать в в интернет-магазин комплектующих для тюнинга «CARCAINE»</T1>
      <div class="fav__slider swiper" ref="slider" v-if="list">
        <div class="fav__list swiper-wrapper">
          <Product 
            v-for="item in list"
            :key="item.title"
            class="product_col fav__item swiper-slide"
            :element="item"
            :favorit="true" />
        </div>
      </div>
      <div class="fav__alert" v-else>В избранном ничего не найдено.</div>
      <Button v-if="list" class="super" mods="md, bg-red, shadow-black" href="/basket">Создать заказ</Button>
    </Case>
  </div>
  
</template>
<script src="./Fav.js"></script>
<style src='./Fav.scss'></style>
