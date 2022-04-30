<template>
  <div class="search">
    <div class="search__area">
      <Field class="search__field" placeholder="Поиск каталогу" />
      <Button class="search__button-submit">Отмена</Button>
    </div>
    <div class="search__inner">
      <div class="search__list">
        <a class="search__item">
          <div class="search__item-icon"></div>
          <div class="search__item-name"></div>
          <div class="search__item-price"></div>
        </a>
      </div>
      <div class="search__more">
        <span>Показать всё</span>
        <Icon />
      </div>
    </div>
  </div>
</template>
<script src="./Search.js"></script>
<style src='./Search.scss'></style>
