<template>
  <div ref="selection" class="selection">
    <Case>
      <Breadcrumb v-if="isPage" class="selection__breadcrumb hidden-xs" />
      <Return v-if="isPage" class="selection__return hidden show-xs-flex" />
      <div class="selection__wrap row">
        <div class="selection__content">
          <H2 class="selection__title c-red">Подбор по автомобилю</H2>
          <T1 class="selection__text">
            <p>Ищите товары сразу для вашего автомобиля, это помжет сильно сузить ассортимент и ускорит выбор товаров. </p>
          </T1>
        </div>
        <form class="selection__form">
          <Auto class="selection__list row"
            classSelect="selection__select select_drop-mt" 
            classButton="selection__button"
            :selectBg="true"
            :showButton="true"
            @click="scrollToBlock" />
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
