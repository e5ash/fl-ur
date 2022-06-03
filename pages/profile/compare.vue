<template>
  <main class="main">
    <Comp />
    <Questions class="hidden-xs" />
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Сравнение'
    },
    setup() {
      definePageMeta({
        title: 'Сравнение'
      });
    }
  }
</script>


