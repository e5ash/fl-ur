<template>
  <div class="modal" :class="[isShow ? classShow : null, isSetsShow ? 'modal_sm' : null]" @click="close">
    <div class="modal__inner" id="modal__inner">
      <Form v-show="isCallbackFormShow" title="Связаться с нами" desc="Мы знаем о тюнинге больше чем вы думаете." type="callback" :close="true"></Form>
      <Form v-show="isReviewFormShow" title="Оставьте отзыв" :close="true" type="review" />
      <Form v-show="isNotAvailableFormShow" title="Сообщить о поступлении" type="callback" btnText="Отправить" :close="true"></Form>
      <Form v-show="isSetsShow" title="Выберите свойства" type="sets" :close="true"></Form>
    </div>
    <div class="modal__bg"></div>
  </div>
</template>
<script src="./Modal.js"></script>
<style src='./Modal.scss'></style>
