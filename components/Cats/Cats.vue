<template>
  <div class="cats">
    <Case>
      <div class="cats__wrap row">
        <div class="cats__content">
          <H2 class="cats__title c-red">Категории товаров</H2>
          <T1 class="cats__text">
            <p>Выберите категорию котоаря вас интересует. Тут есть все – от ГБЦ до футболки с логотипом БМВ М повер-рейнджерс</p>
          </T1>
          <div class="cats__actions">
            <div class="cats__actions-list">
              <a v-for="action in actions" :key="action.title" class="cats__action" :href="action.href" @click.prevent="toLink(action.href)">
                <div class="cats__action-text">
                  <div class="cats__action-title">{{ action.title }}</div>
                  <div class="cats__action-desc">
                    <span>{{ action.desc }}</span>
                    <Icon name="chevron" class="f-red" />
                  </div>
                </div>
                <div class="cats__action-img" v-if="action.img">
                  <img :src="action.img" alt="">
                </div>
                <div class="cats__action-bg" v-if="action.bg">
                  <img :src="action.bg" alt="">
                </div>
              </a>
            </div>
            <div class="cats__actions-bg">
              <img src="~/assets/images/cats/bg.png" alt="">
            </div>
          </div>
        </div>
        <div class="cats__list row">
          <a v-for="cat in list" :key="cat.title" class="cats__item" href="/cat" @click.prevent="toLink('/cat')">
            <div class="cats__item-img">
              <img :src="cat.img" :alt="cat.title">
            </div>
            <div class="cats__item-title">{{ cat.title }}</div>
          </a>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Cats.js"></script>
<style src='./Cats.scss'></style>
