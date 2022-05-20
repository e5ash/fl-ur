<template>
  <div class="review">
    <div class="review__img">
      <img :src="img" alt="">
    </div>
    <div class="review__title">{{ title }}</div>
    <div class="review__text">{{ text }}</div>
  </div>
  
</template>
<script src="./Review.js"></script>
<style src='./Review.scss'></style>
