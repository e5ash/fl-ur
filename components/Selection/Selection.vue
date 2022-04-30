<template>
  <div class="selection">
    <Case>
      <div class="selection__wrap row">
        <div class="selection__content">
          <H2 class="selection__title">Подбор по автомобилю</H2>
          <T1 class="selection__text">
            <p>Ищите товары сразу для вашего автомобиля, это помжет сильно сузить ассортимент и ускорит выбор товаров. </p>
          </T1>
        </div>
      </div>
      <form class="selection__form">
        <Select class="selection__select" mods="md, b-gray" placeholder="Выберите марку автомобиля" />
        <Select class="selection__select" mods="md, b-gray" placeholder="Выберите модель автомобиля" />
        <Select class="selection__select" mods="md, b-gray" placeholder="Выберите модификацию " />
        <Button class="selection__button" mods="md, bg-red">Подобрать</Button>
      </form>
      <div class="selection__img">
        <img src="" alt="">
      </div>
    </Case>
  </div>
</template>
<script src="./Selection.js"></script>
<style src='./Selection.scss'></style>
