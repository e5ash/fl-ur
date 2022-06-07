<template>
  <div class="list">
    <Case>
      <Breadcrumb class="list__breadcrumb hidden-xs"  />
      <Return class="list__return hidden show-xs-flex" />
      <H1 class="list__title">Актуальное</H1>
      <div class="list__wrap">
        <div class="list__links">
          <div class="list__link" :class="current == 'all' ? classLinkCurrent : null" data-text="Все" @click="current = 'all'">Все</div>
          <div class="list__link" :class="current == 'blog' ? classLinkCurrent : null" data-text="Блог" @click="current = 'blog'">Блог</div>
          <div class="list__link" :class="current == 'news' ? classLinkCurrent : null" data-text="Новости" @click="current = 'news'">Новости</div>
          <div class="list__link" :class="current == 'shares' ? classLinkCurrent : null" data-text="Акции" @click="current = 'shares'">Акции</div>
        </div>
        <div class="list__inner row">
          <template v-for="item in items" :key="item.title">
            <a class="list__item" v-if="current == item.cat.slug || current == 'all'" href="/news/item" @href="toLink('/news/item')">
              <div class="list__item-img">
                <img :src="item.img" alt="">
              </div>
              <div class="list__item-title">{{ item.title }}</div>
              <div class="list__item-desc">{{ item.desc }}</div>
              <div class="list__item-data">
                <div class="list__item-date">{{ item.date }}</div>
                <div class="list__item-cat">{{ item.cat.title }}</div>
              </div>
            </a>
          </template>
        </div>
        <Pagination class="list__pagination" />
      </div>
    </Case>
  </div>
  
</template>
<script src="./List.js"></script>
<style src='./List.scss'></style>
