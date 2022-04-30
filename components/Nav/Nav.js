import { toLink } from '~/utils';

export default {
  name: 'Nav',
  data() {
    return {
      list: [
        {
          title: 'Каталог',
          href: '',
          subtitle: 'Выберите категорию',
          sub: [
            {
              title: 'Двигатель',
              href: ''
            },
            {
              title: 'Турбины',
              href: ''
            },
            {
              title: 'Трансмиссии',
              href: ''
            },
            {
              title: 'Выпускные системы',
              href: ''
            },
            {
              title: 'Впускные системы',
              href: ''
            },
            {
              title: 'Охлаждение',
              href: ''
            },
            {
              title: 'Тормозные системы',
              href: ''
            },
            {
              title: 'Подвеска',
              href: ''
            },
            {
              title: 'Топливные системы',
              href: ''
            },
            {
              title: 'Интерьер и экстерьер',
              href: ''
            },
            {
              title: 'Шины и диски',
              href: ''
            },
            {
              title: 'Электрика',
              href: ''
            },
            {
              title: 'Оригинальные детали',
              href: ''
            },
            {
              title: 'Подарки и мерс',
              href: ''
            },
          ]
        },
        {
          title: 'О нас',
          href: '',
          subtitle: 'О нас',
          sub: [
            {
              title: 'О компании',
              href: ''
            },
            {
              title: 'Доставка и оплата',
              href: ''
            },
          ]
        },
        {
          title: 'Блоги и статьи',
          href: '',
        },
        {
          title: 'Контакты',
          href: '',
        },
        {
          title: 'Распродажи',
          href: '',
        },
        {
          title: 'Информация',
          href: '',
        },
        {
          title: 'Корзина',
          href: '/basket',
        },
      ],
      actions: [
        {
          title: 'Подбор по авто',
          text: 'Подберите для вашего авто',
          icon: '',
          href: '/selection'
        },
        {
          title: 'Войти',
          text: 'Войти или зарегистрироваться',
          icon: '',
          href: '/auth'
        }
      ]
    }
  },
  methods: {
    toLink
  }
}
