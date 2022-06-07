import Swiper from 'swiper';

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
      items: []
    }
  },
  methods: {
    async getProducts(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/products.json' + params);
      return await response.json();
    }
  },
  created() {

  },
  async mounted() {
    this.items = await this.getProducts('?type=popular');

    this.tabs[0].list.push(this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1]);
    this.tabs[1].list.push(this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1]);
    this.tabs[2].list.push(this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1], this.items[0], this.items[1]);

    this.currentTab = this.tabs[0];
    this.tabs.forEach((tab)=>{
      new Swiper(this.$refs[tab.ref], {
        slidesPerView: 'auto',
        spaceBetween: 20
      });
    });
  },
  props: {
    title: String,
    link: Boolean
  }
}
