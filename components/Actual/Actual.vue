<template>
  <div class="actual bgw">
    <Case>
      <Btop class="actual__btop" @click="toSection" :link="{ title: 'Показать все', href: '/news' }">Актуальное</Btop>
      <div class="actual__wrap">
        <div class="actual__nav">
          <div class="actual__nav-list row">
            <div class="actual__nav-item" :class="currentTab == tab ? 'actual__nav-item_current' : null" v-for="tab in tabs" :key="tab.title" :data-text="tab.title" @click="currentTab = tab">{{ tab.title }}</div>
          </div>
        </div>
        <div class="actual__tabs">
          <div class="actual__tab" v-for="tab in tabs" v-show="currentTab == tab" :key="tab.title">
            <div class="actual__slider swiper" :ref="tab.ref">
              <div class="actual__list swiper-wrapper">
                <a class="actual__item swiper-slide" :class="index < tab.showIndex ? 'actual__item_show': null" v-for="(item, index) in tab.list" :key="item.title" href="/news/item" @click.prevent="toLink('/news/item')">
                  <div class="actual__item-img img">
                    <img :src="item.img" alt="">
                  </div>
                  <div class="actual__item-title">{{ item.title }}</div>
                  <div class="actual__item-text">{{ item.text }}</div>
                  <div class="actual__item-data row">
                    <div class="actual__item-date">{{ item.date }}</div>
                    <div class="actual__item-cat">{{ item.cat }}</div>
                  </div>
                </a>
              </div>
            </div>
            <div class="actual__more" @click="tab.showIndex = tab.showIndex + 4" v-show="tab.showIndex <= tab.list.length">
              <span>Показать еще</span>
              <Icon name="chevron" class="f-red" />
            </div>
          </div>
        </div>
      </div>
    </Case>
    <div class="actual__bg bg">
      <img src="~/assets/images/actual.jpg" alt="">
    </div>
  </div>
</template>
<script src="./Actual.js"></script>
<style src='./Actual.scss'></style>
