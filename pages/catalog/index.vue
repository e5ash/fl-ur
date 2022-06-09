<template>
  <main class="main">
    <Cat />
    <Group class="group_sm group_pt" title="Специальное предложение" />
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


