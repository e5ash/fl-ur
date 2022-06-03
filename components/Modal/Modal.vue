<template>
  <div class="modal" :class="isShow ? classShow : null" @click="close">
    <div class="modal__inner" id="modal__inner"></div>
    <div class="modal__bg"></div>
  </div>
</template>
<script src="./Modal.js"></script>
<style src='./Modal.scss'></style>
