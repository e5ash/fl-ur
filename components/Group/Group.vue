<template>
  <div class="group">
    <Case>
      <Btop class="group__btop" :link="{ title: 'Показать все', href: '#' }" >Главное</Btop>
      <div class="group__inner">
        <div class="group__nav">
          <div class="group__nav-list">
            <div class="group__nav-item" :class="currentTab == tab ? 'group__nav-item_current' : null" v-for="tab in tabs" :key="tab.title" :data-text="tab.title" @click="currentTab = tab">{{ tab.title }}</div>
          </div>
        </div>
        <div class="group__tabs">
          <div class="group__tab" v-for="tab in tabs" v-show="currentTab == tab" :key="tab.title">
            <div class="group__slider swiper" :ref="tab.ref">
              <div class="group__list swiper-wrapper">
                <Product 
                  v-for="item in tab.list"
                  :key="item.title"
                  class="group__item swiper-slide"
                  :img="item.img"
                  :title="item.title" 
                  :desc="item.desc" 
                  :price="item.price" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Group.js"></script>
<style src='./Group.scss'></style>
