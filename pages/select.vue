<template>
  <main class="main">
    <Selection class="selection_pb-more" :isPage="true" />
    <Actual class="actual_mt-minus hidden-xs" />
    <Questions class="questions_mt-minus hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Подбор по автомобилю'
    },
    setup() {
      definePageMeta({
        title: 'Подбор по автомобилю'
      });
    }
  }
</script>

