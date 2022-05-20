<template>
  <a class="product" :href="href" @click.prevent="handleClick">
    <div class="product__img img">
      <img :src="img" :alt="title">
    </div>
    <div v-if="title" class="product__title">{{ title }}</div>
    <div v-if="desc" class="product__desc">{{ desc }}</div>
    <div class="product__foot">
      <div class="product__price">
        <div class="product__price-current">{{ toPriceFormat(price.current) }} ₽</div>
        <div class="product__price-old">{{ toPriceFormat(price.old) }} ₽</div>
      </div>
      <div class="product__button-add">
        <Icon name="cart-add" class="f-red" />
      </div>
    </div>
  </a>
</template>
<script src="./Product.js"></script>
<style src='./Product.scss'></style>
