<template>
  <div class="range">
    <div class="range__inner" ref="inner"></div>
    <div class="range__values">
      <div class="range__value range__value_from" ref="valueFrom"></div>
      <div class="range__value range__value_to" ref="valueTo"></div>
    </div>
    <input type="hidden" ref="input">
  </div>
</template>
<script src="./Range.js"></script>
<style src='./Range.scss'></style>
