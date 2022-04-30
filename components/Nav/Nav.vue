<template>
  <div class="nav">
    <Case>
      <div class="nav__left">
        <div class="nav__list">
          <div v-for="item in list" :key="item.title" class="nav__item">
            <a class="nav__item-link" :href="item.href" @click.prevent="toLink(item.href)">
              <div class="nav__item-name">{{ item.title }}</div>
              <div class="nav__item-arrow" v-if="item.sub"><Icon /></div>
            </a>
            <div class="nav__sub" v-if="item.sub">
              <div class="nav__sub-title" v-if="item.subtitle">{{ item.subtitle }}</div>
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
        <div class="nav__title">Выберите быстрое действие</div>
        <div class="nav__actions">
          <a class="nav__action" v-for="action in actions" :key="action.title" :href="action.href" @click.prevent="goLink(action.href)">
            <div class="nav__action-icon"><Icon /></div>
            <div class="nav__action-wrap">
              <div class="nav__action-title">{{ action.title }}</div>
              <div class="nav__action-text">{{ action.text }}</div>
              <div class="nav__action-arrow">
                <Icon />
              </div>
            </div>
          </a>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Nav.js"></script>
<style src='./Nav.scss'></style>
