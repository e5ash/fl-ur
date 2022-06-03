<template>
  <div class="sup">
    <Case class="case_sm">
      <Breadcrumb class="sup__breadcrumb hidden-xs" />
      <Return class="sup__return hidden show-xs-flex" />
      <div class="sup__return" v-if="step == 2" @click="prevStep">
        <Icon name="chevron" class="f-red" />
        <span>Назад</span>
      </div>
      <H1 class="sup__title">Поставщики</H1>
      <T1 class="sup__text">
        <p>Добро пожаловать в в интернет-магазин комплектующих для тюнинга «CARCAINE»</p>
      </T1>
      <div class="sup__list row">
        <div class="sup__item" v-for="item in list" :key="item.id">
          <div class="sup__item-img">
            <img :src="item.img" alt="">
          </div>
          <div class="sup__item-name">{{ item.name }}</div>
          <div class="sup__item-desc">{{ item.desc }}</div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Sup.js"></script>
<style src='./Sup.scss'></style>
