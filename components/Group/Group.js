import Swiper from 'swiper';
import { Products } from '~/data/products';

export default {
  name: 'group',
  data() {
    return {
      tabs: [
        {
          title: 'Популярное',
          ref: 'tab-1',
          list: []
        },
        {
          title: 'Новинки',
          ref: 'tab-2',
          list: []
        },
        {
          title: 'Акции',
          ref: 'tab-3',
          list: []
        },
      ],
      currentTab: null,
      items: Products
    }
  },
  created() {
    this.currentTab = this.tabs[0];

    this.tabs[0].list.push(this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1]);
    this.tabs[1].list.push(this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1]);
    this.tabs[2].list.push(this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1]);
  },
  mounted() {
    this.tabs.forEach((tab)=>{
      new Swiper(this.$refs[tab.ref], {
        slidesPerView: 'auto',
        spaceBetween: 20
      });
    });
  },
  props: {
    title: String,
  }
}
