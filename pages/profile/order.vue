<template>
  <main class="main">
    <Ord />
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Заказ'
    },
    setup() {
      definePageMeta({
        title: 'Заказ'
      });
    }
  }
</script>


