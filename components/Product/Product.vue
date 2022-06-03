<template>
  <a class="product" :class="[remove ? 'product_has-remove' : null, disabled ? 'product_disabled': null]" :href="href" @click.prevent="handleClick">
    <div class="product__inner">
      <div class="product__img img">
        <img :src="img" :alt="title">
      </div>
      <div class="product__content">
        <div v-if="title" class="product__title">{{ title }}</div>
        <div v-if="desc" class="product__desc">{{ desc }}</div>
        <div class="product__data">
          <div class="product__price" v-if="!incdec">
            <div class="product__price-current">{{ toPriceFormat(price.current) }} ₽</div>
            <div class="product__price-old" v-if="price.old && !hide_old_price">{{ toPriceFormat(price.old) }} ₽</div>
          </div>
          <div class="product__price" v-else>
            <div class="product__price-current">{{ count > 1 ? 'За ' : null }}шт. {{ toPriceFormat(price.current) }} ₽</div>
            <div class="product__price-total" v-if="count > 1">Итог: {{ toPriceFormat(price.current * count) }} ₽</div>
          </div>
          <div class="product__button-remove nk" v-if="!disabled && remove" @click="toggleProduct">
            <Icon name="trash" />
          </div>
          <div class="product__button-favorit nk" :class="isFavorit ? 'product__button-favorit_added' : null" v-if="favorit && !disabled" @click="toggleFavorit">
            <Icon name="bookmark" />
          </div>
          <div class="product__button-comp nk" :class="isComp ? 'product__button-comp_added' : null" v-if="compare && !disabled" @click="toggleComp">
            <Icon name="scale" />
          </div>
          <div class="product__button-add nk" :class="isAdded ? 'product__button-add_added' : null" v-if="!remove && !disabled" @click="toggleProduct">
            <Icon name="cart-add" />
          </div>
          <Incdec class="product__incdec nk" v-if="!disabled && incdec" v-model:value="count" :max="50" />
        </div>
      </div>
    </div>
    <div class="product__chars" v-if="chars_show && chars">
      <div class="product__chars-title">Основные характеристики</div>
      <div class="product__chars-list">
        <div class="product__chars-item" v-for="char in chars" :key="char.id">
          <div class="product__chars-key">{{ char.title }}</div>
          <div class="product__chars-value">{{ char.value }}</div>
        </div>
      </div>
    </div>
  </a>
</template>
<script src="./Product.js"></script>
<style src='./Product.scss'></style>
