<template>
  <div class="error">
    <Case>
      <div class="error__inner">
        <div class="error__title">{{ current.title }}</div>
        <div class="error__img">
          <img src="~/assets/images/error.png" alt="">
        </div>
        <div class="error__code">{{ current.code }}</div>
        <div class="error__status">{{ current.status }}</div>
        <Button class="error__button" mods="md, bg-red, shadow-black" href="/categories">Назад к стоку</Button>
        <div class="error__desc">Если вы считаете, что вы все сделали правильно, а попали сюда – <a href="mailto:mail@mail.com">напишите нам</a></div>
      </div>
    </Case>
  </div>
  
</template>
<script src="./Error.js"></script>
<style src='./Error.scss'></style>
