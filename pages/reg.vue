<template>
  <main class="main">
    <Auth title="Регистрация" text="Введите контакнтные данные и пароль для создания учетной записи" :reg="true" />
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Регистрация'
    },
    setup() {
      definePageMeta({
        title: 'Регистрация'
      });
    }
  }
</script>


