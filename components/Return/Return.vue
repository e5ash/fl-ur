<template>
  <div class="return">
    <div class="return__button" @click="goBack">
      <Icon name="chevron" class="f-red" />
      <span>Назад</span>
    </div>
    <Share class="return__share" :share="true" />
  </div>
</template>
<script src="./Return.js"></script>
<style src='./Return.scss'></style>
