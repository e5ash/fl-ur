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
          href: '/catalog',
          subtitle: 'Выберите категорию',
          sub: [
            {
              title: 'Двигатель',
              href: '/catalog'
            },
            {
              title: 'Турбины',
              href: '/catalog'
            },
            {
              title: 'Трансмиссии',
              href: '/catalog'
            },
            {
              title: 'Выпускные системы',
              href: '/catalog'
            },
            {
              title: 'Впускные системы',
              href: '/catalog'
            },
            {
              title: 'Охлаждение',
              href: '/catalog'
            },
            {
              title: 'Тормозные системы',
              href: '/catalog'
            },
            {
              title: 'Подвеска',
              href: '/catalog'
            },
            {
              title: 'Топливные системы',
              href: '/catalog'
            },
            {
              title: 'Интерьер и экстерьер',
              href: '/catalog'
            },
            {
              title: 'Шины и диски',
              href: '/catalog'
            },
            {
              title: 'Электрика',
              href: '/catalog'
            },
            {
              title: 'Оригинальные детали',
              href: '/catalog'
            },
            {
              title: 'Подарки и мерс',
              href: '/catalog'
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
              href: '/about'
            },
            {
              title: 'Доставка и оплата',
              href: '/delivery'
            },
          ]
        },
        {
          title: 'Новости',
          href: '/news',
        },
        {
          title: 'Контакты',
          href: '/contacts',
        },
        {
          title: 'Распродажи',
          href: '/catalog',
        },
        {
          title: 'Информация',
          href: '/info',
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
          href: '/select'
        },
        {
          title: 'Войти',
          text: 'Войти или зарегистрироваться',
          icon: 'settings-color',
          href: '/login'
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
