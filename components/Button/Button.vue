<template>
  <a class="button" :class="[modsBEM]" :href="href ? href : 'javascript:;'" @click.prevent="handleClick">
    <div class="button__icon" v-if="$slots.iconMain"><slot name="iconMain" /></div>
    <div class="button__icon button__icon_left" v-if="$slots.iconLeft"><slot name="iconLeft" /></div>
    <div class="button__text" v-if="$slots.default"><slot name="default" /></div>
    <div class="button__icon button__icon_right" v-if="$slots.iconRight"><slot name="iconRight" /></div>
  </a>
</template>
<script src="./Button.js"></script>
<style src='./Button.scss'></style>
