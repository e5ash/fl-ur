<template>
  <div class="catalog">
    <Case>
      <Breadcrumb class="catalog__breadcrumb" />
      <H2 class="catalog__title">Каталог запчатей для VW Tiguan 1</H2>
      <div class="catalog__wrap row">
        <Filter class="catalog__filter" />
        <div class="catalog__inner">
          <div class="catalog__list row">
            <Product 
              v-for="item in list"
              :key="item.title"
              class="catalog__item"
              :img="item.img"
              :title="item.title" 
              :desc="item.desc" 
              :price="item.price" />
          </div>
          <Pagination class="catalog__pagination" />
        </div>
      </div>
      <div class="catalog__bg">
        <img src="~/assets/tires.png" alt="">
      </div>
    </Case>
  </div>
</template>
<script src="./Catalog.js"></script>
<style src='./Catalog.scss'></style>
