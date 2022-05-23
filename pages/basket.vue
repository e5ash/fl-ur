<template>
  <main class="main">
    <Cart />
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Корзина'
    },
    setup() {
      definePageMeta({
        title: 'Корзина'
      });
    }
  }
</script>


