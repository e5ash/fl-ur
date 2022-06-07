<template>

  <div class="togs">
    <div class="togs__list">
      <div class="togs__item" :class="item.open ? 'togs__item_current' : null" v-for="item in list" :key="item.id" @click="item.open = !item.open">
        <div class="togs__head">
          <div class="togs__title">{{ item.title }}</div>
          <div class="togs__icon"></div>
        </div>
        <div class="togs__body">
          <div class="togs__text" v-html="item.text"></div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script src="./Togs.js"></script>
<style src='./Togs.scss'></style>
