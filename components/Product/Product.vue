<template>
  <a class="product" :class="[remove ? 'product_has-remove' : null, disabled ? 'product_disabled': null]" :href="href" @click.prevent="handleClick">
    <div class="product__img img">
      <img :src="img" :alt="title">
    </div>
    <div class="product__content">
      <div v-if="title" class="product__title">{{ title }}</div>
      <div v-if="desc" class="product__desc">{{ desc }}</div>
      <div class="product__data">
        <div class="product__price" v-if="!incdec">
          <div class="product__price-current">{{ toPriceFormat(price.current) }} ₽</div>
          <div class="product__price-old" v-if="price.old">{{ toPriceFormat(price.old) }} ₽</div>
        </div>
        <div class="product__price" v-else>
          <div class="product__price-current">{{ count > 1 ? 'За ' : null }}шт. {{ toPriceFormat(price.current) }} ₽</div>
          <div class="product__price-total" v-if="count > 1">Итог: {{ toPriceFormat(price.current * count) }} ₽</div>
        </div>
        <div class="product__button-remove nk" v-if="!disabled && remove" @click="toggleProduct">
          <Icon name="trash" />
        </div>
        <div class="product__button-add nk" :class="isAdded ? 'product__button-add_added' : null" v-if="!remove" @click="toggleProduct">
          <Icon name="cart-add" />
        </div>
        <Incdec class="product__incdec nk" v-if="!disabled && incdec" v-model:value="count" :max="50" />
      </div>
    </div>
  </a>
</template>
<script src="./Product.js"></script>
<style src='./Product.scss'></style>
