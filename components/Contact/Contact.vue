<template>
  <div class="contact">
    <Return class="contact__return" />
    <H1 class="contact__title">Контакты</H1>
    <div class="contact__inner">
      <div class="contact__logo">
        <Logo class="contact__logo" />
      </div>
      <div class="contact__name">Urban Racers</div>
      <div class="contact__desc">Мы знаем о тюнинге больше чем вы думаете.</div>
      <div class="contact__list">
        <div class="contact__item" v-for="item in list" :key="item.icon">
          <div class="contact__item-icon"><Icon :name="item.icon" class="f-red" /></div>
          <div class="contact__item-value" v-html="item.value"></div>
        </div>
      </div>
      <Socials class="contact__socials"></Socials>
      <Button class="contact__button" mods="md, bg-red, shadow-black" @click="isFormShow = !isFormShow">Написать нам</Button>
      <Form class="contact__form" :class="isFormShow ? 'form_show' : null" title="Связаться с нами" desc="Мы знаем о тюнинге больше чем вы думаете." type="callback"></Form>
    </div>
    <div class="contact__map" ref="map"></div>
  </div>

</template>
<script src="./Contact.js"></script>
<style src='./Contact.scss'></style>
