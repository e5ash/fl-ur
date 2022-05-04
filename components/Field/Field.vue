<template>
  <div class="field" :class="[modsBEM, validation ? (isValid ? classValid : classError) : null]">
    <div class="field__title" v-if="title">{{ title }}</div>
    <div class="field__wrap">
      <div v-if="$slots.iconLeft" class="field__icon field__icon-left"><slot name="iconLeft" /></div>
      <input :type="type ? type : 'text'" class="field__area" :placeholder="placeholder" v-model="value" @input="$emit('update:val', value)">
      <div v-if="$slots.iconRight || clear == 'true'" class="field__icon field__icon-right">
        <slot name="iconRight">
          <Icon v-if="clear == 'true'" :class="value ? 'icon_show' : 'icon_hide'" name="cross-round" @click="value = '', $emit('update:val', value)"/>
        </slot> 
      </div>
    </div>
    <div class="field__validate">{{ errorMessage }}</div>
  </div>
</template>
<script src="./Field.js"></script>
<!-- <style src='./Field.scss'></style> -->
