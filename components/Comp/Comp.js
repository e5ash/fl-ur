import Swiper from 'swiper';

export default {
  name: 'Comp',
  setup() {
    let list = useState('compares');
    return {
      list
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 'auto',
      spaceBetween: 20
    });
  }
}
