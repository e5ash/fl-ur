<template>
  <div class="catalog">
    <Case>
      <Breadcrumb class="catalog__breadcrumb" />
      <H2 class="catalog__title">Каталог запчатей для VW Tiguan 1</H2>
      <div class="catalog__wrap row">
        <Filter class="catalog__filter" />
        <div class="catalog__inner">
          <div class="catalog__list"></div>
          <Pagination class="catalog__pagination" />
        </div>
      </div>
    </Case>
    <div class="catalog__bg">
      <!-- <img src="~ass" alt=""> -->
    </div>
  </div>
</template>
<script src="./Catalog.js"></script>
<style src='./Catalog.scss'></style>
