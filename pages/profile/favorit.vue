<template>
  <main class="main">
    <Fav />
    <Actual class="actual_mt-minus hidden-xs" />
    <Questions class="questions_mt-minus hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Избранное'
    },
    setup() {
      definePageMeta({
        title: 'Избранное'
      });
    }
  }
</script>


