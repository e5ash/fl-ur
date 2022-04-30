<template>
  <svg class="icon" :class="'icon_' + name" v-if="name">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>
<script src="./Icon.js"></script>
<style src='./Icon.scss'></style>
