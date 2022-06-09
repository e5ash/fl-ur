<template>
  <div class="share" v-show="isShow">
    <div class="share__button" @click.prevent="sharePage">
      <span>Поделиться</span>
      <Icon name="union" />
    </div>
  </div>
</template>
<script src="./Share.js"></script>
<style src='./Share.scss'></style>
