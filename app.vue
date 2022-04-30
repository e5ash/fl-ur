<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>

const route = useRoute();
const title = route.meta.title;

useState('totalCount', () => 0);
useState('totalSum', () => 0);
useState('cart', () => []);
useState('isMapLoaded', () => false)

useHead({
  title: `${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: '' }
  ],
})
</script>
