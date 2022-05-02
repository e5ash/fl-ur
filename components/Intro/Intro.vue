<template>
  <div class="intro">
    <Case>
      <div class="intro__wrap row">
        <div class="intro__content">
          <H1 class="intro__title">URBAN <u>RACERS</u></H1>
          <T1 class="intro__text">
            <p>Интернет-магазин тюнинг-комплектующих для современных автомобилей Audi, Skoda, Seat, Skoda, Porsche, BMW, Mercedes-Benz и др.Мы предлагаем только лучшие товары из Европы и США. Работаем напрямую с заводами, тем самым гарантируя отличные цены и сроки доставки.</p>
          </T1>
          <Button class="intro__button" href="/catalog" mods="md, bg-red">Перейти в каталог</Button>
        </div>
        <div class="intro__slides">
          <Swiper 
            class="intro__list" 
            :modules="modules" 
            :pagination="{ clickable: true }"
            :slidesPerView="1"
            :autoplay="{ delay: 5000 }"
            :loop="true"
            :loopAdditionalSlides="5">
            <SwiperSlide v-for="item in list" :key="item.title" class="intro__item bgw" :class="item.mods">
              <div class="intro__item-content">
                <div class="intro__item-title">{{ item.title }}</div>
                <div class="intro__item-group">
                  <Logo class="intro__item-logo" isIconHide="true" />
                  <div class="intro__item-desc">до 60%</div>
                </div>
              </div>
              <div class="intro__item-bg bg">
                <img :src="item.bg" alt="">
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Intro.js"></script>
<style src='./Intro.scss'></style>
