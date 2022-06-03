<template>
  <main class="main">
    <Error />
    <Questions class="hidden-xs" />
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Ошибка 404'
    },
    setup() {
      definePageMeta({
        title: 'Ошибка 404'
      });
    }
  }
</script>


