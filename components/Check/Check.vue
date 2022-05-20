<template>
  <div class="check" :class="[checked ? classChecked : null]" @click="toggleChecked">
    <input type="checkbox" class="check__input" :value="value" :name="group" :checked="checked ? 'checked' : null">
    <div class="check__box">
      <Icon name="check" class="f-red" />
    </div>
    <div class="check__wrap">{{ value }}</div>
  </div>
</template>
<script src="./Check.js"></script>
<style src='./Check.scss'></style>
