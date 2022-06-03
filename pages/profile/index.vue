<template>
  <main class="main">
    <Profile />
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Профиль'
    },
    setup() {
      definePageMeta({
        title: 'Профиль'
      });
    }
  }
</script>


