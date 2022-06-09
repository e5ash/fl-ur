<template>
  <div class="return">
    <div class="return__button" @click="!disable ? goBack : false">
      <Icon name="chevron" class="f-red" />
      <span>Назад</span>
    </div>
    <Share class="return__share" />
    <!-- <Share class="return__share" v-if="share" /> -->
  </div>
</template>
<script src="./Return.js"></script>
<style src='./Return.scss'></style>
