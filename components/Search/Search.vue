<template>
  <div class="search" :class="isSearchOpen ? classShow : null">
    <div class="search__area">
      <EField 
        class="search__field"
        mode="md, bg-gray"
        type="text"
        name="field"
        placeholder="Поиск каталогу"
        :clear="true"
        v-model:val="value"
      >
        <template #iconBefore><svg style="padding-top: 2px" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.8958" cy="10.8949" r="9.20833" stroke="#262626" stroke-width="2"></circle> <rect x="16.0508" y="18.1133" width="2.91667" height="10.2083" transform="rotate(-45 16.0508 18.1133)" fill="#262626"></rect></svg></template>
      </EField>
      <Button class="search__button-submit" @click="isSearchOpen = false">
        <span>Отмена</span>
      </Button>
    </div>
    <div class="search__inner">
      <div v-if="!value" class="search__popular">
        <div class="search__popular-title">Популярно</div>
        <div class="search__popular-list">
          <a class="search__popular-item search__item" v-for="item in popular" :key="item" href="/search" @click.prevent="toLink('/search')">
            <div class="search__popular-icon search__item-icon">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.8556 11.795C11.8556 11.795 15.3464 15.2857 16.0303 15.9697L14.9697 17.0303L10.7089 12.7695C9.666 13.4678 8.4118 13.875 7.0625 13.875C3.43813 13.875 0.5 10.9369 0.5 7.3125C0.5 3.68813 3.43813 0.75 7.0625 0.75C10.6869 0.75 13.625 3.68813 13.625 7.3125C13.625 9.04567 12.9531 10.6219 11.8556 11.795ZM7.0625 2.25C4.271 2.25 2 4.521 2 7.3125C2 10.104 4.271 12.375 7.0625 12.375C9.854 12.375 12.125 10.104 12.125 7.3125C12.125 4.521 9.854 2.25 7.0625 2.25Z" fill="black"/> </svg>
            </div>
            <div class="search__popular-name seach__item-name">{{ item }}</div>
          </a>
        </div>
      </div>
      <div class="search__list" v-if="value">
        <a v-for="item in sortedResults" :key="item.id" class="search__item" href="/item" @click.prevent="toLink('item')">
          <div class="search__item-icon">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.8556 11.795C11.8556 11.795 15.3464 15.2857 16.0303 15.9697L14.9697 17.0303L10.7089 12.7695C9.666 13.4678 8.4118 13.875 7.0625 13.875C3.43813 13.875 0.5 10.9369 0.5 7.3125C0.5 3.68813 3.43813 0.75 7.0625 0.75C10.6869 0.75 13.625 3.68813 13.625 7.3125C13.625 9.04567 12.9531 10.6219 11.8556 11.795ZM7.0625 2.25C4.271 2.25 2 4.521 2 7.3125C2 10.104 4.271 12.375 7.0625 12.375C9.854 12.375 12.125 10.104 12.125 7.3125C12.125 4.521 9.854 2.25 7.0625 2.25Z" fill="black"/> </svg>
          </div>
          <div class="search__item-name">{{ item }}</div>
          <div class="search__item-price">{{ toPriceFormat(12550) }} ₽</div>
        </a>
      </div>
      <a class="search__more" v-if="value && length >= 5" href="/search" @click.prevent="toLink('/search')">
        <span>Показать всё</span>
        <Icon name="chevron" />
      </a>
    </div>
  </div>
</template>
<script src="./Search.js"></script>
<style src='./Search.scss'></style>
