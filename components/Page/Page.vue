<template>
  <div class="page">
    <Case class="case_sm">
      <Breadcrumb class="page__breadcrumb hidden-xs" />
      <Return class="page__return hidden show-xs-flex" />
      <H1 class="page__title">Информация</H1>
      <div class="page__content"><slot /></div>
    </Case>
  </div>
</template>
<script src="./Page.js"></script>
<style src='./Page.scss'></style>
