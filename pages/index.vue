<template>
  <main class="main">
    <Intro />
    <Selection />
    <Questions />
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Главная'
    },
    setup() {
      definePageMeta({
        title: 'Главная'
      });
    }
  }
</script>
