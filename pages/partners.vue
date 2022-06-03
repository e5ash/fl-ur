<template>
  <main class="main">
    <Partnership title="Партнеры" formTitle="Хотите попасть в этот список ?" :choiser="true">
      <p>Наши партнеры которые вам установят все так как нужо и так как надо которые знают какой патрубок куда требуется вставить чтобы было хорошо</p>
    </Partnership>
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Партнеры'
    },
    setup() {
      definePageMeta({
        title: 'Партнеры'
      });
    }
  }
</script>


