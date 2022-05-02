<template>
  <header class="header">
    <Panel class="header__panel" />
    <Case>
      <div class="header__inner row" :class="[isSearchOpen ? 'header__inner_shadow-hide' : null]">
        <Logo class="header__logo" />
        <nav class="header__links">
          <a v-for="item in links" :key="item.id" :href="item.href ? item.href : 'javascript:;'" class="header__links-item" @click.prevent="item.href ? toLink(item.href) : isNavShow = !isNavShow">{{ item.title }}</a>
        </nav>
        <Button class="header__button-search" @click="isSearchOpen = true">
          <template #iconMain><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="10.8958" cy="10.8949" r="9.20833" stroke="#F05454" stroke-width="2"/> <rect x="16.0508" y="18.1133" width="2.91667" height="10.2083" transform="rotate(-45 16.0508 18.1133)" fill="#F05454"/> </svg> </template>
        </Button>
        <Button class="header__button-selection" href="/selection" mods="md, bg-red">Подбор по автомобилю</Button>
        <Search class="header__search"  />
      </div>
    </Case>
    <Nav class="header__nav" />
  </header>
</template>
<script src="./Header.js"></script>
<style src='./Header.scss'></style>
