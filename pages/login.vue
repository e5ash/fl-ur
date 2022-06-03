<template>
  <main class="main">
    <Auth title="Вход" text="Введите логин и пароль для авторизации" />
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Вход'
    },
    setup() {
      definePageMeta({
        title: 'Вход'
      });
    }
  }
</script>


