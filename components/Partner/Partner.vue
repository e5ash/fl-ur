<template>
  <div class="partner">
    <div class="partner__img">
      <img :src="img" alt="">
    </div>
    <div class="partner__name">{{ name }}</div>
    <div class="partner__desc">{{ desc }}</div>
    <div class="partner__contacts">
      <div class="partner__contact" v-for="contact in contacts" :key="contact.id">
        <div class="partner__contact-icon"><Icon :name="contact.icon" class="f-red" /></div>
        <div class="partner__contact-value" v-html="contact.value"></div>
      </div>
    </div>
  </div>
</template>
<script src="./Partner.js"></script>
<style src='./Partner.scss'></style>
