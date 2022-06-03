<template>
  <div class="file" @click="$refs.input.focus()">
    <label class="file__inner">
      <input type="file" class="file__input" @change="onChange" ref="input" multiple="">
      <div class="file__title">Выбрать фото</div>
      <div class="file__icon"><Icon name="file-add" /></div>
    </label>
  </div>
  
</template>
<script src="./File.js"></script>
<style src='./File.scss'></style>
