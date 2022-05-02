<template>
  <div class="nav" :class="isNavShow ? classNavShow : null">
    <Case>
      <div class="nav__wrap row">
        <div class="nav__left">
          <div class="nav__list">
            <div v-for="item in list" :key="item.title" class="nav__item" :class="current == item ? classNavItemCurrent : null">
              <a class="nav__item-link" :href="item.href" @click.prevent="!item.sub ? toLink(item.href) : current = item">
                <div class="nav__item-name">{{ item.title }}</div>
                <div class="nav__item-arrow" v-if="item.sub"><Icon name="arrow" /></div>
              </a>
              <div class="nav__sub" v-if="item.sub">
                <H3 class="nav__sub-title c-red" v-if="item.subtitle">{{ item.subtitle }}</H3>
                <div class="nav__sub-list">
                  <div class="nav__sub-item" v-for="item in item.sub" :key="item.title">
                    <a class="nav__sub-link" :href="item.href" @click.prevent="toLink(item.href)">{{ item.title }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav__right">
          <H3 class="nav__title">Выберите быстрое действие</H3>
          <div class="nav__actions">
            <a class="nav__action" v-for="action in actions" :key="action.title" :href="action.href" @click.prevent="toLink(action.href)">
              <div class="nav__action-icon"><Icon :name="action.icon" /></div>
              <div class="nav__action-wrap">
                <div class="nav__action-title">
                  <span>{{ action.title }}</span>
                  <Icon name="arrow" />
                </div>
                <div class="nav__action-text">{{ action.text }}</div>
                <div class="nav__action-arrow">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Case>
    <div class="nav__bg" @click="isNavShow = false"></div>
  </div>
</template>
<script src="./Nav.js"></script>
<style src='./Nav.scss'></style>
