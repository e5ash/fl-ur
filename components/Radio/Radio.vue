<template>
  <div class="radio" :class="[checked == value ? classChecked : null]" @click="toggleChecked">
    <input type="checkbox" class="radio__input" :value="value" :name="group" :checked="checked == value ? 'checked' : null">
    <div class="radio__box"></div>
    <div class="radio__wrap" :data-text="value">{{ value }}</div>
  </div>
</template>
<script src="./Radio.js"></script>
<style src='./Radio.scss'></style>
