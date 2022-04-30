import { toLink } from '~/utils';

export default {
  name: 'lkp',
  data() {
    return {
      isOpen: false,
      classOpen: 'lkp_open',
      name: 'Евграфий Евграфьевич',
      list: {
        true: [
          {
            link: '/cabinet/',
            title: 'Личный кабинет'
          },
          {
            link: '#',
            title: 'Выйти'
          }
        ],
        false: [
          {
            link: '',
            title: 'Зарегистрироваться'
          },
          {
            link: '',
            title: 'Войти'
          }
        ]
      },
    }
  },
  methods: {
    toLink,
    goToLink(item) {
      this.toLink(item.href, this.toggleOpen);
    },
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  }
}
