<template>
  <footer class="footer">
    <Case>
      <div class="footer__mid row">
        <div class="footer__data">
          <Logo class="footer__logo" />
          <Socials class="footer__socials" />
          <div class="footer__desc"><u>URBAN</u> RACE <b>- МАГАЗИН АВТОТЮНИНГА</b></div>
          <div class="footer__info">Интернет-магазин тюнинг-комплектующих для современных автомобилей Audi, Skoda, Seat, Skoda, Porsche, BMW, Mercedes-Benz и др.Мы предлагаем только лучшие товары из Европы и США. Работаем напрямую с заводами, тем самым гарантируя отличные цены и сроки доставки.</div>
        </div>
        <div class="footer__navs row">
          <div class="footer__navs-col" v-for="col in navs" :key="col.id">
            <div class="footer__title">{{ col.title }}</div>
            <div class="footer__nav">
              <div class="footer__nav-list">
                <a class="footer__nav-item" v-for="item in col.list" :key="item.id" :href="item.href" @click.prevent="toLink(item.href)">{{ item.title }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__links">
          <div class="footer__links-list">
            <a v-for="link in links" :key="link.title" :href="link.href" class="footer__links-item" @click="toLink(link.href)">{{ link.title }}</a>
          </div>
        </div>
      </div>
      <div class="footer__bot">
        <div class="footer__buttons">
          <Button class="footer__button" href="/catalog" mods="sm, c-red">Вход</Button>
          <Button class="footer__button" href="/catalog" mods="sm, b-red">регистрация</Button>
        </div>
        <div class="footer__copy">© 2022 UrbanRacers</div>
      </div>
    </Case>
  </footer>
</template>
<script src="./Footer.js"></script>
<style src='./Footer.scss'></style>
