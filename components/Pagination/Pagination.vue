<template>
  <div class="pagination">
    <div class="pagination__list row">
      <a v-for="(page, index) in pages" :key="page.id" class="pagination__item" :class="index == 0 ? 'pagination__item_current' : null" :href="'?page=' + page" @click.prevent="toLink('?page=' + page)">{{ page }}</a>
    </div>
  </div>
</template>
<script src="./Pagination.js"></script>
<style src='./Pagination.scss'></style>
