<template>
  <div class="myauto">
    <div class="myauto__title" v-if="title">{{ title }}</div>
    <div class="myauto__list">
      <div class="myauto__item" :class="[current == item ? classCurrent : null, remove ? 'myauto__item_remove' : null]" v-for="(item, index) in list" :key="item.name" @click="toggleCurrent(item)">
        <div class="myauto__item-icon"><img :src="item.icon" :alt="item.name"></div>
        <div class="myauto__item-name"><b>Мой</b> {{ item.name }}</div>
        <div class="myauto__item-remove" v-if="remove" @click="removeItem(index)"><Icon name="trash" /></div>
        <div class="myauto__item-checked" v-else><Icon name="check" class="f-red" /></div>
      </div>
    </div>
    <template v-if="add">
      <div class="myauto__button-add" @click="toggleSelection">
        <Icon name="plus" />
        <span>Добавить {{ list.length > 0 ? 'еще' : null }} автомобиль</span>
      </div>
      <Auto class="myauto__auto row" classSelect="myauto__auto-select" v-if="isSelectionShow" />
      <Button class="myauto__button-search" mods="md, bg-blue-dark, shadow-black">К поиску запчастей</Button>
    </template>
  </div>
</template>
<script src="./Myauto.js"></script>
<style src='./Myauto.scss'></style>
