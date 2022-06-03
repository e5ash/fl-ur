<template>
  <div class="alert" :class="isShow ? classShow : null">
    <Case>
      <div class="alert__inner">
        <div class="alert__message">{{ value }}</div>
        <div class="alert__button" @click="isShow = false">ОК</div>
      </div>
    </Case>
  </div>
</template>
<script src="./Alert.js"></script>
<style src='./Alert.scss'></style>
