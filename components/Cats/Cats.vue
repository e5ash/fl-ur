<template>
  <div class="cats" :class="isPage ? 'cats_page' : null">
    <Case>
      <Breadcrumb v-if="isPage" class="cats__breadcrumb hidden-xs" />
      <Return v-if="isPage" class="cats__return hidden show-xs-flex" />
      <div class="cats__wrap row">
        <div class="cats__content">
          <H2 class="cats__title c-red hidden-xs">Категории товаров</H2>
          <T1 class="cats__text hidden-xs">
            <p>Выберите категорию котоаря вас интересует. Тут есть все – от ГБЦ до футболки с логотипом БМВ М повер-рейнджерс</p>
          </T1>
          <div class="cats__actions">
            <div class="cats__actions-list">
              <div v-for="action in actions" :key="action.title" class="cats__action" :class="action.cls" @click.prevent="handleClick(action.href)">
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
              </div>
            </div>
            <div class="cats__actions-bg">
              <img src="~/assets/images/cats/bg.png" alt="">
            </div>
          </div>
        </div>
        <div class="cats__inner">
          <Btop class="cats__btop hidden show-xs-flex" @click="openModal" :link="!isPage ? { title: 'Показать все', href: '#', event: openModal} : null">Категории</Btop>
          <div class="cats__list row" :class="!isPage ? 'cats__list_hidden-xs' : null">
            <a v-for="cat in list" :key="cat.title" class="cats__item" href="/catalog" @click.prevent="toLink('/catalog')">
              <div class="cats__item-img">
                <img :src="cat.img" :alt="cat.title">
              </div>
              <div class="cats__item-title">{{ cat.title }}</div>
            </a>
          </div>
        </div>
      </div>
    </Case>
    <div class="cats__modal" :class="isModalShow ? 'cats__modal_show' : null">
      <div class="cats__controls row">
        <div class="cats__back" @click="openModal">
          <Icon name="chevron" class="f-red" />
          <span class="c-red">Назад</span>
        </div>
        <div class="cats__close" @click="openModal">
          <Icon name="cross" class="f-red" />
        </div>
      </div>
      <div class="cats__links">
        <a v-for="link in links" :key="link.id" class="cats__link" href="/catalog" @click.prevent="toLink('/catalog')">
          <div class="cats__link-title">{{ link }}</div>
          <div class="cats__link-icon">
            <Icon name="arrow" />
          </div>
        </a>
      </div>
      <Button class="cats__button" mods="md, bg-red, shadow-black">Продолжить</Button>
    </div>
    <Button v-if="isPage" class="super" mods="md, bg-red, shadow-black" href="/catalog">Продолжить</Button>
  </div>
</template>
<script src="./Cats.js"></script>
<style src='./Cats.scss'></style>
