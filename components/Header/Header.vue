<template>
  <header class="header">
    <Panel class="header__panel" />
    <Case>
      <div class="header__inner row">
        <Logo class="header__logo" />
        <nav class="header__links">
          <a v-for="item in links" :key="item.id" :href="item.href" class="header__links-item" @click.prevent="item.href ? toLink(item.href) : item.action">{{ item.title }}</a>
        </nav>
        <Button class="header__button-selection" href="/selection" mods="md, bg-red">Подбор по автомобилю</Button>
        <Button class="header__button-search" href="/selection">
          <template #iconMain><Icon /></template>
        </Button>
        <Search class="header__search" />
      </div>
    </Case>
    <Nav class="header__nav" />
  </header>
</template>
<script src="./Header.js"></script>
<style src='./Header.scss'></style>
