<template>
  <div class="catalog">
    <Case>
      <Breadcrumb class="catalog__breadcrumb hidden-xs" />
      <Return class="catalog__return hidden show-xs-flex" />
      <H2 v-if="!search" class="catalog__title">Каталог запчатей для VW Tiguan 1</H2>
      <div class="catalog__wrap row">
        <Filter class="catalog__filter"/>
        <!-- <div v-else class="catalog__result" :class="!searchValue ? 'catalog__result_full': null"> -->
        <!--   <div class="catalog__result-title">{{ searchValue ? 'Результаты поиска' : 'Ой, кажется ничего не нашлось' }}</div> -->
        <!--   <div class="catalog__result-value" v-if="searchValue">По вашему запросу “{{ searchValue }}”  нашлось</div> -->
        <!-- </div> -->
        <div class="catalog__inner">
          <div class="catalog__list row">
            <Product 
              v-for="item in list"
              :key="item.title"
              :element="item" 
              class="product_col catalog__item" />
          </div>
          <Pagination class="catalog__pagination" />
        </div>
      </div>
      <div class="catalog__bg">
        <img src="~/assets/tires.png" alt="">
      </div>
      <Button class="super" mods="md, bg-red, shadow-black" @click="isVisible = true">Фильтр</Button>
    </Case>
  </div>
</template>
<script src="./Cat.js"></script>
<style src='./Cat.scss'></style>
