import Swiper from 'swiper';

export default {
  name: 'Partnership',
  data() {
    return {
      fields: {
        name: '', 
        phone: '', 
        email: '', 
      },
      partners: [
        {
          img: '/assets/images/products/product-1.jpg',
          name: 'BMW Russia',
          desc: 'Очень оригинальные запчасти для автомобилей постоянно требующих вложений.',
          contacts: [
            {
              icon: 'phone',
              value: '<a href="tel:+79211052033">+7 921 105 20 33</a>'
            },
            {
              icon: 'at',
              value: '<a href="mailto:order@carcaine.ru">order@carcaine.ru</a>'
            },
            {
              icon: 'map',
              value: 'г. Санкт-Петербург, улица Розенштейна 39, корпус 3'
            },
          ],
        }
      ],
      currentCity: '',
      cities: [
        {
          name: 'Санкт-Петербург',
          list: []
        },
        {
          name: 'Москва',
          list: []
        },
        {
          name: 'Ростов',
          list: []
        },
      ]
    }
  },
  created() {
    for (let i = 0; i < 4; i++) {
      this.cities[0].list.push(this.partners[0]);
    }
    for (let i = 0; i < 2; i++) {
      this.cities[1].list.push(this.partners[0]);
    }
    for (let i = 0; i < 1; i++) {
      this.cities[2].list.push(this.partners[0]);
    }
  },
  mounted() {
    let sliders = document.querySelectorAll('.partnership__block-slider');

    if (sliders) {
      sliders.forEach((slider)=>{
        new Swiper(slider, {
          slidesPerView: 'auto',
          spaceBetween: 27
        });
      })
    }


  },
  props: {
    title: String,
    formTitle: String,
    choiser: Boolean
  }
}
