<template>
  <div class="filter" :class="isVisible ? 'filter_show' : null">
    <div class="filter__toggle" @click="isVisible = !isVisible">
      <span>Фильтр</span>
      <Icon name="filter" class="f-red" />
    </div>
    <div class="filter__inner">
      <Return class="filter__return hidden show-xs-flex" :disable="true" @click="isVisible = !isVisible" />
      <H3 class="filter__main-title">Фильтр</H3>
      <div class="filter__list">
        <div class="filter__item">
          <div class="filter__title">Максимальное занижение</div>
          <div class="filter__element">
            <div class="filter__pluses row">
              {{ max.checked }}
              <Plus 
                v-for="item in max.list" 
                :key="item.id" 
                class="filter__plus plus_md plus_gray" 
                :value="item.title" 
                :group="max.name" 
                v-model:checked="item.checked" />
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
          <div class="filter__element">
            <div class="filter__selects row">
              <Select class="filter__select filter__select_w3" mods="md, b-gray" :options="select.lorem.list" v-model:val="select.lorem.current" placeholder="Lorem" :disabled="false" />
              <Select class="filter__select filter__select_w3" mods="md, b-gray" :options="select.min.list" v-model:val="select.min.current" placeholder="Min" :disabled="false" />
              <Select class="filter__select filter__select_w3" mods="md, b-gray" :options="select.max.list" v-model:val="select.max.current" placeholder="Max" :disabled="false" />
              <Select class="filter__select" mods="md, b-gray" :options="select.other.list" v-model:val="select.other.current" placeholder="Большой выпадающий список" :disabled="false" />
            </div>
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Заголовок выпадающих списков</div>
          <div class="filter__element">
            <div class="filter__selects row">
              <Select class="filter__select" mods="md, b-gray" :options="select.other2.list" v-model:val="select.other2.current" placeholder="Большой выпадающий список" :disabled="false" />
            </div>
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Отфильтровать по моему авто</div>
          <div class="filter__element">
            <Myauto 
              class="filter__myauto" 
              v-model:current="myauto" />
          </div>
        </div>
        <div class="filter__item" v-if="!myauto">
          <div class="filter__title">Подбор по авто</div>
          <div class="filter__element">
            <Auto class="filter__auto row" 
            classSelect="filter__auto-select" />
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Просто подзаголовок фильтра</div>
          <div class="filter__element">
            <Check 
              v-for="item in checks.list" 
              :key="item.id" 
              class="filter__check check_md check_gray" 
              :value="item.title" 
              :group="checks.name" 
              :selectBg="false"
              v-model:checked="item.checked" />
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__title">Заголовок выпадающих списков</div>
          <div class="filter__element">
            <div class="filter__selects row">
              <Select class="filter__select" mods="md, b-gray" :options="select.other3.list" v-model:val="select.other3.current" placeholder="Большой выпадающий список" :disabled="false" />
            </div>
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__element">
            <div class="filter__radios row">
              <Radio v-for="radio in radios.list" :key="radio.id" class="filter__radio radio_md radio_tab" :group="radios.name" v-model:checked="radios.current" :value="radio" />
            </div>
          </div>
        </div>
        <div class="filter__item">
          <div class="filter__element">
            <div class="filter__buttons row">
              <Button class="filter__button filter__button-reset" mods="md, c-red">Сбросить</Button>
              <Button class="filter__button filter__button-send" mods="md, bg-red, shadow-black">Применить</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Filter.js"></script>
<style src='./Filter.scss'></style>
