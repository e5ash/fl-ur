<template>
  <div ref="selection" class="selection">
    <Case>
      <Breadcrumb v-if="isPage" class="selection__breadcrumb" />
      <div class="selection__wrap row">
        <div class="selection__content">
          <H2 class="selection__title c-red">Подбор по автомобилю</H2>
          <T1 class="selection__text">
            <p>Ищите товары сразу для вашего автомобиля, это помжет сильно сузить ассортимент и ускорит выбор товаров. </p>
          </T1>
        </div>
        <form class="selection__form">
          <div class="selection__list row" @click="scrollToBlock">
            <Select ref="selectMarks" class="selection__select" mods="md, b-gray" classesDrop="select__drop_mt" :options="marks" v-model:val="currentMark" placeholder="Выберите марку автомобиля" :clear="true" :disabled="false" :bg="true" />
            <Select ref="selectModels" class="selection__select" mods="md, b-gray" classesDrop="select__drop_mt" :options="currentMark.models" v-model:val="currentModel" placeholder="Выберите модель автомобиля" :clear="true" :disabled="true" :bg="true" @click="clickToModels"/>
            <Select ref="selectMods" class="selection__select" mods="md, b-gray" classesDrop="select__drop_mt" :options="currentModel.mods" v-model:val="currentMode" placeholder="Выберите модификацию " :clear="true" :disabled="true" :bg="true"/>
            <Button class="selection__button" mods="md, bg-red, shadow-black">Подобрать</Button>
          </div>
        </form>
      </div>
      <div class="selection__img">
        <img src="~/assets/images/selection-car.png" alt="">
      </div>
    </Case>
  </div>
</template>
<script src="./Selection.js"></script>
<style src='./Selection.scss'></style>
