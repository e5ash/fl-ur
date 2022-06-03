import { Products } from '~/data/products';
import Swiper, { Thumbs } from 'swiper';

export default {
  name: 'Inf',
  data() {
    return {
      images: [
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
      ],
      recs: []
    }
  },
  created() {
    for(let i = 1; i <= 4; i++) {
      this.recs.push(Products[i]);
    }
  },
  mounted() {
    let pagination = new Swiper(this.$refs.pagination, {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });

    new Swiper(this.$refs.images, {
      loop: true,
      loopAdditionalSlides: 1,
      thumbs: {
        swiper: pagination
      },
      modules: [Thumbs]
    });
  },
  props: {
    video: Boolean,
    rec: Boolean,
  }
}
