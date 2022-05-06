import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

export default {
  name: 'Intro',
  data() {
    return {
      list: [
        {
          title: 'Скидки на подвеску BC Racing',
          mods: 'intro__item_bottom intro__item_left',
          bg: '/assets/images/intro-1.jpg',
        },
        {
          title: 'Скидки на подвеску BC Racing',
          mods: 'intro__item_bottom intro__item_right',
          bg: '/assets/images/intro-2.jpg'
        },
        {
          title: 'Скидки на подвеску BC Racing',
          mods: '',
          bg: '/assets/images/intro-3.jpg'
        },
        {
          title: 'Скидки на подвеску BC Racing',
          mods: 'intro__item_right',
          bg: '/assets/images/intro-1.jpg'
        },
        {
          title: 'Скидки на подвеску BC Racing',
          mods: 'intro__item_center',
          bg: '/assets/images/intro-2.jpg'
        }
      ]
    }
  }, 
  mounted() {
    new Swiper(this.$refs.slider, {
      loop: true,
      loopAdditionalSlides: 1,
      pagination: {
        el: this.$refs.pagination,
        clickable: true
      },
      modules: [Pagination]
    });
  }
}
