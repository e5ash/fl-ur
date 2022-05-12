import { toLink } from '~/utils';

export default {
  name: 'Nav',
  setup() {
    let isNavShow = useState('isNavShow');
    return {
      isNavShow
    }
  },
  data() {
    return {
      classNavShow: 'nav_show',
      classNavItemCurrent: 'nav__item_current',
      classNavItemOpen: 'nav__item_open',
      current: null,
      openItem: null,
      list: [
        {
          title: 'Каталог',
          href: '/categories',
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
          icon: 'filter-color',
          href: '/selection'
        },
        {
          title: 'Войти',
          text: 'Войти или зарегистрироваться',
          icon: 'settings-color',
          href: '/auth'
        }
      ]
    }
  },
  methods: {
    toLink,
    toggleNavItem(item) {
      this.current = item;

      if (this.openItem == item) {
        this.openItem = null;
      } else {
        this.openItem = item;
      }
    }
  }
}
