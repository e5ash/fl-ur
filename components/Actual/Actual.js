import Swiper from "swiper";
import { toLink } from '~/utils';

export default {
  name: 'Actual',
  data() {
    return {
      tabs: [
        {
          title: 'Все',
          ref: 'tab-1',
          list: [],
          showIndex: 2
        },
        {
          title: 'Новости',
          ref: 'tab-2',
          list: [],
          showIndex: 2
        },
        {
          title: 'Акции',
          ref: 'tab-3',
          list: [],
          showIndex: 2
        },
      ],
      currentTab: null,
      items: [
        {
          title: 'Ломается ли ваг? После тюнинга',
          text: 'Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO',
          date: '12 января',
          cat: 'Видеоблог',
          img: '/assets/images/actual/1.png'
        },
        {
          title: 'Ломается ли ваг? После тюнинга',
          text: 'Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO',
          date: '12 января',
          cat: 'Видеоблог',
          img: '/assets/images/actual/2.png'
        },
      ]
    }
  },
  methods: {
    toLink,
    toSection() {
      this.toLink('/news');
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
        spaceBetween: 10
      });
    });
  }
}
