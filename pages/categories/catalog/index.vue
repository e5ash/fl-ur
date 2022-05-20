<template>
  <main class="main">
    <Catalog />
    <Group class="group_sm" title="Специальное предложение" />
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


