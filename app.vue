<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
import { scrollTop, getProducts, getCompares, getFavorits } from '~/utils';

export default {
  setup() {
    const route = useRoute();
    const title = route.meta.title;
    const isNavShow = useState('isNavShow', ()=> false);
    const isSelectOpen = useState('isSelectOpen', () => null);
    const currentDD = useState('currentDD', () => null);
    const products = useState('products', () => []);
    const compares = useState('compares', () => []);
    const favorits = useState('favorits', () => []);
    const cartCount = useState('cartCount', ()=> 0);

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
      currentDD,
      products,
      compares,
      favorits,
      cartCount
    }

  },
  methods: {
    scrollTop
  },
  mounted() {
    this.products = getProducts();
    this.compares = getCompares();
    this.favorits = getFavorits();

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

    let count = 0;
    for (const product of this.products) {
      count += product.count ? product.count : 1;
    }
    this.cartCount = count < 10 ? count : '9+';
  },
}
</script>
