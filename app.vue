<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
import { scrollTop } from '~/utils';

export default {
  setup() {
    const route = useRoute();
    const title = route.meta.title;
    const isNavShow = useState('isNavShow', ()=> false);
    const isSelectOpen = useState('isSelectOpen', () => null);
    const currentDD = useState('currentDD', () => null);

    useHead({
      title: `${title}`,
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' }
      ],
    });


    return {
      isNavShow,
      isSelectOpen,
      currentDD
    }

  },
  methods: {
    scrollTop
  },
  mounted() {
    let bodyClassNav = 'body-nav-open';

    document.addEventListener('click', (event)=>{
      if (!event.target.closest('.dd')) {
        if (this.currentDD) {
          this.currentDD.isOpen = false;
        }
        this.currentDD = null;
      }
      
      if (!event.target.closest('.select')) {
        if (this.isSelectOpen) {
          this.isSelectOpen.isOpen = false;
        }
        this.isSelectOpen = null;
      }

      if (this.isNavShow) {
        this.scrollTop();
        // let beforeWidth = document.body.offsetWidth;
        document.body.classList.add(bodyClassNav);
        // let afterWidth = document.body.offsetWidth;
        // document.body.style.marginRight = (afterWidth - beforeWidth) + 'px';
      } else {
        document.body.classList.remove(bodyClassNav);
        // document.body.style.marginRight = 0;
      }
    });
  }
}
</script>
