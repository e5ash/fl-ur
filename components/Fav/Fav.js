import Swiper from 'swiper';

export default {
  name: 'Fav',
  setup() {
    let list = useState('favorits');
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
