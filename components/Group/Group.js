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
      items: [
        {
          title: 'Винтовая подвеска BCR',
          desc: 'Уникальное решение для точной настройки хода подвела меня тут',
          price: {
            current: 12325,
            old: 22759
          },
          img: '/assets/images/actual/1.png'
        },
        {
          title: 'Даунпайп для',
          desc: '7880 collection for the earth and human environment',
          price: {
            current: 25940,
            old: 52499,
          },
          img: '/assets/images/actual/2.png'
        },
      ]
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
  }
}
