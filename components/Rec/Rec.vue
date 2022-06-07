<template>
  <div class="rec">
    <Case>
      <H3 class="rec__title">{{ title }}</H3>
      <div class="rec__list row">
        <Product 
          v-for="item in list"
          :key="item.title"
          :element="item"
          class="product_col catalog__item rec__item" />
      </div>
    </Case>
  </div>
  
</template>
<script src="./Rec.js"></script>
<style src='./Rec.scss'></style>
