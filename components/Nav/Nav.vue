<template>
  <div class="nav dd" :class="isNavShow ? classNavShow : null">
    <Case>
      <div class="nav__wrap row">
        <div class="nav__left">
          <div class="nav__list">
            <div v-for="item in list" :key="item.title" class="nav__item" :class="[current == item ? classNavItemCurrent : null, openItem == item ? classNavItemOpen : null]">
              <a class="nav__item-link" :href="item.href" @click.prevent="!item.sub ? toLink(item.href, isNavShow = false) : toggleNavItem(item)">
                <div class="nav__item-name">{{ item.title }}</div>
                <div class="nav__item-arrow" v-if="item.sub"><Icon name="arrow" /></div>
              </a>
              <div class="nav__sub" v-if="item.sub">
                <H3 class="nav__sub-title c-red" v-if="item.subtitle">{{ item.subtitle }}</H3>
                <div class="nav__sub-list">
                  <div class="nav__sub-item" v-for="item in item.sub" :key="item.title">
                    <a class="nav__sub-link" :href="item.href" @click.prevent="toLink(item.href, isNavShow = false)">{{ item.title }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav__right">
          <H3 class="nav__title">Выберите быстрое действие</H3>
          <div class="nav__actions">
            <a class="nav__action" v-for="action in actions" :key="action.title" :href="action.href" @click.prevent="toLink(action.href, isNavShow = false)">
              <div class="nav__action-icon" ><div v-html="action.icon"></div></div>
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
        <div class="nav__controls row">
          <Button class="nav__control nav__control_bg" href="/basket" @click="isNavShow = false">
            <template #iconMain><Icon name="cart"/></template>
          </Button>
          <Button class="nav__control" href="/profile" @click="isNavShow = false">
            <template #iconMain><Icon name="user"/></template>
          </Button>
          <Button class="nav__control" href="tel:+78126484385" :phone="true" @click="isNavShow = false">
            <template #iconMain><Icon name="phone"/></template>
          </Button>
        </div>
      </div>
      <div class="nav__foot">
        <div class="nav__foot-left">
          <div class="nav__phone"><a href="tel:+78126484385">+7 (812) 648-43-85</a></div>
          <Socials class="nav__socials" classItem="socials__item_gray" />
        </div>
        <div class="nav__foot-right">
          <Logo class="nav__logo logo_md" />
        </div>
      </div>
    </Case>
    <div class="nav__bg" @click="isNavShow = false"></div>
  </div>
</template>
<script src="./Nav.js"></script>
<style src='./Nav.scss'></style>
