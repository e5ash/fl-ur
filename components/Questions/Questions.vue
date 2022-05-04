<template>
  <div class="questions">
    <Case>
      <div class="questions__wrap row">
        <H2 class="h2_nols questions__title">Мы готовы ответить на все ваши вопросы!</H2>
        <form class="questions__form row">
          <EField class="questions__field" mode="sm, b-gray" validation="email" placeholder="example@email.com" v-model:val="email">
            <template #title>Email</template>
          </EField>
          <EField class="questions__field" mode="sm, b-gray" validation="phone" placeholder="+7 888 888 88 88" v-model:val="phone">
            <template #title>Телефон</template>
          </EField>
          <Button class="questions__button" mods="lg, bg-red">Задать вопрос</Button>
        </form>
      </div>
    </Case>
  </div>
</template>
<script src="./Questions.js"></script>
<style src='./Questions.scss'></style>
