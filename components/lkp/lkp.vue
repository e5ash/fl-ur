<template>
  <div class="lkp dd" @click="toggleOpen" :class="isOpen ? classOpen : null">
    <div class="lkp__inner row">
      <div class="lkp__ava">
        <Icon name="user" />
      </div>
      <div class="lkp__value">{{ name }}</div>
      <div class="lkp__icon">
        <Icon name="chevron" />
      </div>
    </div>
    <div class="lkp__drop">
      <div class="lkp__list">
        <a v-for="item in list.true" :key="item.id" :href="item.link" class="lkp__item" @click.prevent="goToLink(item)">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>
<script src="./lkp.js"></script>
<style src='./lkp.scss'></style>
