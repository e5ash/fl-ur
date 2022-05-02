<template>
  <div class="search" :class="isSearchOpen ? classShow : null">
    <div class="search__area">
      <Field class="search__field" mods="bg-gray, md, icon-left, icon-right" placeholder="Поиск каталогу" clear="true" v-model:val="value">
        <template #iconLeft><svg style="padding-top: 2px" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.8958" cy="10.8949" r="9.20833" stroke="#262626" stroke-width="2"></circle> <rect x="16.0508" y="18.1133" width="2.91667" height="10.2083" transform="rotate(-45 16.0508 18.1133)" fill="#262626"></rect></svg></template>
      </Field> 
      <Button class="search__button-submit" @click="isSearchOpen = false">Отмена</Button>
    </div>
    <div class="search__inner" v-if="value">
      <div class="search__list">
        <a v-for="item in sortedResults" :key="item.id" class="search__item" href="/item" @click.prevent="toLink('item')">
          <div class="search__item-icon"></div>
          <div class="search__item-name">{{ item }}</div>
          <div class="search__item-price">{{ toPriceFormat(12550) }} ₽</div>
        </a>
      </div>
      <a class="search__more" v-if="length >= 5" href="/search" @click.prevent="toLink('/search')">
        <span>Показать всё</span>
        <Icon name="chevron" />
      </a>
    </div>
  </div>
</template>
<script src="./Search.js"></script>
<style src='./Search.scss'></style>
