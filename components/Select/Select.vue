<template>
  <div class="select" :class="[modsBEM, isOpen ? classOpen : null]" @click="toggleSelect">
    <div class="select__title" v-if="title">{{ title }}</div>
    <div class="select__area">
      <div class="select__icon" v-if="value.icon"><img :src="value.icon" :alt="value.name"></div>
      <div class="select__value" v-if="value && value == val">{{ value.name }}</div>
      <div class="select__value select__placeholder" v-else>{{ placeholder }}</div>
      <div class="select__clear">
        <Icon v-if="clear == true" :class="value && value == val ? 'icon_show' : 'icon_hide'" name="cross" @click="value = '', $emit('update:val', value)"/>
      </div>
      <div class="select__chevron" @click="isOpen = false"><Icon name="chevron-wide" /></div>
    </div>
    <div class="select__drop" :class="classesDrop">
      <div class="select__list">
        <div v-for="option in options" :key="option.id" class="select__item" :class="value == option.name ? classItemCurrent : null" @click="value = option">
          <div class="select__item-icon" v-if="option.icon"><img :src="option.icon" :alt="option.name"></div>
          <div class="select__item-title">{{ option.name }}</div>
          <div class="select__item-check">
            <Icon name="check" :class="val.name == option.name ? 'icon_show' : 'icon_hide'" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="bg" class="select__bg"></div>
    <select v-model="value">
      <option v-for="option in options" :key="option.name" :value="option">{{ option.name }}</option>
    </select>
  </div>
</template>
<script src="./Select.js"></script>
<style src='./Select.scss'></style>
