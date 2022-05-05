import { toLink } from "~/utils";

export default {
  name: 'Footer',
  data() {
    return {
      links: [
        {
          title: 'главная',
          href: '/'
        },
        {
          title: 'каталог',
          href: '/'
        },
        {
          title: 'новости',
          href: '/'
        },
        {
          title: 'информация',
          href: '/'
        },
        {
          title: 'Связаться с нами',
          href: '/'
        },
        {
          title: 'контакты',
          href: '/'
        },
      ],
      navs: [
        {
          title: 'Страницы',
          list: [
            { title: 'Главная', href: '/' },
            { title: 'Контакты', href: '/' },
            { title: 'Каталог', href: '/' },
            { title: 'Партнеры', href: '/' },
            { title: 'Актуальное', href: '/' },
            { title: 'Подбор по автомобилю', href: '/' },
          ]
        },
        {
          title: 'Для покупателей',
          list: [
            { title: 'Доставка', href: '/' },
            { title: 'Оплата', href: '/' },
            { title: 'Возврат', href: '/' },
            { title: 'Партнеры', href: '/' },
            { title: 'Личный кабинет', href: '/' },
          ]
        },
        {
          title: 'Информация',
          list: [
            { title: 'Статьи', href: '/' },
            { title: 'Видеообзоры', href: '/' },
            { title: 'Бренды', href: '/' },
            { title: 'Установочные центры', href: '/' },
          ]
        },
        {
          title: 'Правила',
          list: [
            { title: 'Куки', href: '/' },
            { title: 'Правила', href: '/' },
            { title: 'Правила', href: '/' },
          ]
        },
      ]
    }
  },
  methods: {
    toLink
  }
}
