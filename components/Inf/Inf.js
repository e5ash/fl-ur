// import { Products } from '~/data/products';
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
  methods: {
    async getProducts(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/products.json' + params);
      return await response.json();
    }
  },
  async mounted() {
    this.recs = await this.getProducts();
    this.recs = this.recs.splice(0, 4);

    console.log(this);

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
