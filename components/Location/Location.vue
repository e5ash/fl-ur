<template>
  <div class="location dd" @click="toggleOpen" :class="isOpen ? classOpen : null">
    <div class="location__inner row">
      <div class="location__title">Регион: </div>
      <div class="location__value">{{ current }}</div>
      <div class="location__icon">
        <Icon name="chevron" />
      </div>
    </div>
    <div class="location__drop">
      <div class="location__list">
        <template v-for="item in list" :key="item.id">
          <div class="location__item" :class="current == item ? classItemCurrent : null" @click="setCurrent(item)">{{ item }}</div>
        </template>
      </div>
    </div>
  </div>
</template>
<script src="./Location.js"></script>
<style src='./Location.scss'></style>
