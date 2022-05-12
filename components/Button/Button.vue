<template>
  <a class="button" :class="[modsBEM]" :href="href ? href : 'javascript:;'" @click.prevent="handleClick">
    <div class="button__icon" v-if="$slots.iconMain"><slot name="iconMain" /></div>
    <div class="button__text" v-if="$slots.default"><slot name="default" /></div>
  </a>
</template>
<script src="./Button.js"></script>
<style src='./Button.scss'></style>
