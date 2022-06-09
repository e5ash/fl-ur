<template>
  <div class="incdec">
    <div class="incdec__button incdec__button_plus" :class="isMax ? disabled : null" @click="plusValue"></div>
    <input class="incdec__input" type="tel" ref="input" v-model="value" @keydown="handeKeyPress" @focusout="handeOut">
    <div class="incdec__button incdec__button_minus" :class="isMin ? disabled : null" @click="minusValue"></div>
  </div>
</template>
<script src="./Incdec.js"></script>
<style src='./Incdec.scss'></style>
