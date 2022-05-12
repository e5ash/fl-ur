<template>
  <main class="main">
    <Catalog />
    <Actual class="actual_mt-minus" />
    <Questions class="questions_mt-minus hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Каталог запчастей'
    },
    setup() {
      definePageMeta({
        title: 'Каталог запчастей'
      });
    }
  }
</script>


