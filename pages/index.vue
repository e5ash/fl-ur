<template>
  <main class="main">
    <Intro />
    <Selection class="hidden-xs" />
    <Choiser class="hidden show-xs" />
    <Group class="hidden show-xs" :link="true" />
    <Questions class="hidden-xs" />
    <Utp class="hidden show-xs" />
    <Text class="hidden show-xs" />
    <Cats />
    <Actual class="actual_mt-minus" />
    <Questions class="questions_mt-minus hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Главная'
    },
    setup() {
      definePageMeta({
        title: 'Главная'
      });
    }
  }
</script>
