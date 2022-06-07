<template>
  <main class="main">
    <Cat:search="true" />
    <Group title="Специальное предложение" />
    <Questions class="questions_mt-minus hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Поиск'
    },
    setup() {
      definePageMeta({
        title: 'Поиск'
      });
    }
  }
</script>


