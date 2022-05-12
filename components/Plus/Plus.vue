<template>
  <div class="plus" :class="checked ? 'plus_checked' : null" @click="toggleChecked">
    <input type="checkbox" class="plus__input" :value="value" :name="group" :checked="checked ? 'checked' : null">
    <div class="plus__inner">
      <div class="plus__value">{{ value }}</div>
      <div class="plus__icon"><div></div><div></div></div>
    </div>
  </div>
</template>
<script src="./Plus.js"></script>
<style src='./Plus.scss'></style>
