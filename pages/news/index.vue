<template>
  <main class="main">
    <List />
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Актуальное'
    },
    setup() {
      definePageMeta({
        title: 'Актуальное'
      });
    }
  }
</script>
