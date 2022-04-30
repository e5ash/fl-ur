<template>
  <div class="button" :class="[modsBEM]">
    <div class="button__icon" v-if="$slots.iconMain"><slot name="iconMain" /></div>
    <div class="button__text" v-if="$slots.default"><slot name="default" /></div>
  </div>
</template>
<script src="./Button.js"></script>
<style src='./Button.scss'></style>
