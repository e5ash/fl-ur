<template>
  <main class="main">
    <Selection />
    <Actual class="actual_mt-minus" />
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

