<template>
  <div class="filter">
    <div class="filter__inner">
      <H3 class="filter__main-title">Фильтр</H3>
      <div class="filter__list">
        <div class="filter__item">
          <div class="filter__title">Максимальное занижение</div>
          <div class="filter__element">
            <div class="filter__pluses row">
              {{ max.checked }}
              <Plus v-for="item in max.list" :key="item.id" class="filter__plus plus_md plus_gray" :value="item.title" :group="max.name" v-model:checked="item.checked" />
            </div>
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Цена</div>
          <div class="filter__element">
            <Range class="filter__range" :start="price.start" :range="price.range" prefix="₽" />
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Заголовок выпадающих списков</div>
          <div class="filter__element"></div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Заголовок выпадающих списков</div>
          <div class="filter__element"></div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Отфильтровать по моему авто</div>
          <div class="filter__element"></div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Подбор по авто</div>
          <div class="filter__element"></div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Просто подзаголовок фильтра</div>
          <div class="filter__element"></div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Заголовок выпадающих списков</div>
          <div class="filter__element"></div>
        </div>
        <div class="filter__item">
          <div class="filter__element"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Filter.js"></script>
<style src='./Filter.scss'></style>
