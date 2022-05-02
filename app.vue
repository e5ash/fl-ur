<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default {
  setup() {
    const route = useRoute();
    const title = route.meta.title;
    const isSelectOpen = useState('isSelectOpen', () => null);

    useHead({
      title: `${title}`,
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' }
      ],
    });


    return {
      isSelectOpen
    }

  },
  mounted() {
    document.addEventListener('click', (event)=>{
      if (!event.target.closest('.select')) {
        if (this.isSelectOpen) {
          this.isSelectOpen.isOpen = false;
        }
        this.isSelectOpen = null;
      }
    });
  }
}
</script>
