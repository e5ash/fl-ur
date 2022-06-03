<template>
  <main class="main">
    <Contact />
    <Actual class="actual_mt-minus hidden-xs" />
    <Questions class="questions_mt-minus hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Контакты'
    },
    setup() {
      definePageMeta({
        title: 'Контакты'
      });
    }
  }
</script>


