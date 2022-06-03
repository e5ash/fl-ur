<template>
  <div class="ord">
    <Case class="case_sm">
      <Breadcrumb class="ord__breadcrumb hidden-xs" />
      <Return class="ord__return hidden show-xs-flex" />
      <div class="ord__inner row">
        <div class="ord__left">
          <H1 class="ord__title">Заказ</H1>
          <div class="ord__num">№454235325235</div>
          <div class="ord__block">
            <h3>О заказе</h3>
            <ul>
              <li v-for="char in chars" :key="char.id">{{ char.title }}: <b>{{ char.value }}</b></li>
            </ul>
          </div>
          <a class="ord__block card__block_button" href="" target="_blank">
            <Icon name="doc" class="f-red" />
            <span>Квитанция</span>
          </a>
        </div>
        <div class="ord__right">
          <div class="ord__list row">
            <Product 
              v-for="item in list"
              :key="item.title"
              class="product_col product_disabled ord__item"
              :UID="item.UID"
              :img="item.img"
              :title="item.title" 
              :desc="item.desc" 
              :disabled="true"
              :hide_old_price="true"
              :price="item.price" />
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Ord.js"></script>
<style src='./Ord.scss'></style>
