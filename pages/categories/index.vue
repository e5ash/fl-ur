<template>
  <main class="main">
    <Cats :isPage="true" />
    <Actual class="actual_mt-minus" />
    <Questions class="questions_mt-minus hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Категории товаров'
    },
    setup() {
      definePageMeta({
        title: 'Категории товаров'
      });
    }
  }
</script>


