import { toLink } from '~/utils';

export default {
  name: 'Cats',
  data() {
    return {
      isModalShow: false,
      cls: {
        modalShow: 'cats__modal_show'
      },
      actions: [
        {
          title: 'Показать все товары',
          desc: 'Перейти в каталог',
          href: '/cat',
          bg: '/assets/images/cats/actions/1-bg.png',
          cls: 'hidden-xs'
        },
        {
          title: 'Не знаете что выбрать?',
          desc: 'Получить консультацию',
          href: '/cat',
          img: '/assets/images/cats/actions/2.png',
          bg: '/assets/images/cats/actions/2-bg.png',
          cls: ''
        },
      ],
      list: [
        {
          title: 'Трубины и турбокомплекты',
          img: '/assets/images/cats/list/1.png'
        },
        {
          title: 'Тормоза и тормозные системы',
          img: '/assets/images/cats/list/2.png'
        },
        {
          title: 'Охлаждение',
          img: '/assets/images/cats/list/3.png'
        },
        {
          title: 'Подвеска',
          img: '/assets/images/cats/list/4.png'
        },
        {
          title: 'Подарки и мерч',
          img: '/assets/images/cats/list/5.png'
        },
        {
          title: 'Другое',
          img: '/assets/images/cats/list/5.png'
        },
        {
          title: 'Двигатель',
          img: '/assets/images/cats/list/6.png'
        },
        {
          title: 'Трансмиссия',
          img: '/assets/images/cats/list/7.png'
        },
        {
          title: 'Топливные системы',
          img: '/assets/images/cats/list/8.png'
        },
        {
          title: 'Интерьер и экстерер',
          img: '/assets/images/cats/list/9.png'
        },
        {
          title: 'Шины и диски',
          img: '/assets/images/cats/list/10.png'
        },
        {
          title: 'Оригинальные запчасти',
          img: '/assets/images/cats/list/5.png'
        },
        {
          title: 'Выпскная система',
          img: '/assets/images/cats/list/11.png'
        },
        {
          title: 'Впускные системы',
          img: '/assets/images/cats/list/12.png'
        },
      ],
      links: [
        'Двигатель',
        'Турбо',
        'Трансмиссия',
        'Выпускная система',
        'Впускная система',
        'Охлаждение',
        'Тормозная система',
        'Подвеска',
        'Топливная система',
        'Интерьер и экстерьер',
        'Шины и диски',
        'Электрика',
        'Оригинальные запчасти',
        'Подарки и мерч',
      ]

    }
  },
  methods: {
    toLink,
    openModal() {
      this.isModalShow = !this.isModalShow;

      if (this.isModalShow) {
        document.body.classList.add('body-cats-open');
      } else {
        document.body.classList.remove('body-cats-open');
      }
    }
  }
}
