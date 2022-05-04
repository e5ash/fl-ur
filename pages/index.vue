<template>
  <main class="main">
    <Intro />
    <Selection />
    <Questions />
    <Cats />
    <Actual class="actual_mt-minus" />
    <Questions class="questions_mt-minus"/>
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
