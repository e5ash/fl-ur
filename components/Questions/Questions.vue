<template>
  <div class="questions">
    <Case>
      <div class="questions__wrap row">
        <H2 class="h2_nols questions__title">Мы готовы ответить на все ваши вопросы!</H2>
        <form class="questions__form row">
          <Field class="questions__field" mods="md, b-gray" title="Email" validation="email" placeholder="example@email.com" v-model:val="email"/>
          <Field class="questions__field" mods="md, b-gray" title="Телефон" validation="phone" placeholder="+7 888 888 88 88" v-model:val="phone"/>
          <Button class="questions__button" mods="lg, bg-red">Задать вопрос</Button>
        </form>
      </div>
    </Case>
  </div>
</template>
<script src="./Questions.js"></script>
<style src='./Questions.scss'></style>
