<template>
  <div class="partnership">
    <Case class="case_sm">
      <Breadcrumb class="partnership__breadcrumb hidden-xs" />
      <Return class="partnership__return hidden show-xs-flex" />
      <div class="partnership__return" v-if="step == 2" @click="prevStep">
        <Icon name="chevron" class="f-red" />
        <span>Назад</span>
      </div>
      <div class="partnership__inner row">
        <div class="partnership__left">
          <H1 class="partnership__title">{{ title }}</H1>
          <T1 class="partnership__text"><slot /></T1>
          <div class="partnership__choiser hidden-xs" v-if="choiser">
            <div class="partnership__choiser-title partnership__subtitle">Выберите город</div>
            <Select class="partnership__choiser-select" mods="md, b-gray" :options="cities" v-model:val="currentCity" placeholder="Выберите город" :disabled="false" />
          </div>
        </div>
        <div class="partnership__right">
          <div class="partnership__form">
            <div class="partnership__form-title partnership__subtitle" v-if="formTitle">{{ formTitle }}</div>
            <div class="partnership__form-inner">
              <EField class="partnership__form-field" mode="sm, b-gray" placeholder="Ваше имя" v-model:val="fields.name">
                <template #title>Имя</template>
              </EField>
              <EField class="partnership__form-field" mode="sm, b-gray" validation="email" placeholder="example@email.com" v-model:val="fields.email">
                <template #title>Email</template>
              </EField>
              <EField class="partnership__form-field" mode="sm, b-gray" validation="phone" placeholder="+7 888 888 88 88" v-model:val="fields.phone">
                <template #title>Телефон</template>
              </EField>
              <Button class="partnership__form-button" mods="md, bg-red, shadow-black">Подать заявку</Button>
            </div>
          </div>
          <div class="partnership__choiser hidden show-xs" v-if="choiser">
            <div class="partnership__choiser-title partnership__subtitle">Выберите город</div>
            <Select class="partnership__choiser-select" mods="md, b-gray" :options="cities" v-model:val="currentCity" placeholder="Выберите город" :disabled="false" />
          </div>
        </div>
      </div>
      <div class="partnership__blocks" v-if="choiser">
        <div class="partnership__block" :class="[currentCity == city ? 'partnership__block_current' : null, currentCity && currentCity != city ? 'partnership__block_hide' : null]" v-for="city in cities" :key="city.id">
          <H2 class="partnership__block-title">{{ city.name }}</H2>
          <div class="partnership__block-slider swiper">
            <div class="partnership__block-list swiper-wrapper">
              <Partner class="partnership__block-item swiper-slide" v-for="partner in city.list" :key="partner.id" :img="partner.img" :name="partner.name" :desc="partner.desc" :contacts="partner.contacts" />
            </div>
          </div>
        </div>
      </div>
    </Case>
  </div>
  
</template>
<script src="./Partnership.js"></script>
<style src='./Partnership.scss'></style>
