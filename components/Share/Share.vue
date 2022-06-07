<template>
  <div class="share" :class="isShow ? 'share_show' : null">
    <div class="share__button" @click="isShow = !isShow">
      <span>Поделиться</span>
      <Icon name="union" />
    </div>
    <div class="share__inner" ref="inner">
      <div class="pluso" data-background="transparent" data-options="small,square,multiline,horizontal,nocounter,theme=04" data-services="vkontakte,odnoklassniki,facebook,twitter,google,moimir,email,print"></div>
    </div>
  </div>
  
</template>
<script src="./Share.js"></script>
<style src='./Share.scss'></style>
