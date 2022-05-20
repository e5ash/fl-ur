<template>
  <div class="myauto">
    <div class="myauto__list">
      <div class="myauto__item" :class="[current == item ? classCurrent : null]" v-for="item in list" :key="item.name" @click="toggleCurrent(item)">
        <div class="myauto__item-icon"><img :src="item.icon" :alt="item.name"></div>
        <div class="myauto__item-name"><b>Мой</b> {{ item.name }}</div>
        <!-- <div class="myauto__item-remove"><Icon name="trash" /></div> -->
        <div class="myauto__item-checked"><Icon name="check" class="f-red" /></div>
      </div>
    </div>
  </div>
</template>
<script src="./Myauto.js"></script>
<style src='./Myauto.scss'></style>
