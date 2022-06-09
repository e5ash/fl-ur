<template>
  <main class="main">
    <Partnership title="Нет вашего авто?" :auto="true">
      <p>Тут написан текст который дет понять что получит человек заполнивший данную форму обратной связи , он должен понять приференции которые получает при партнерстве с BC racing</p>
    </Partnership>
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Нет вашего авто?'
    },
    setup() {
      definePageMeta({
        title: 'Нет вашего авто?'
      });
    }
  }
</script>
