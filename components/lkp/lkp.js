import { toLink } from '~/utils';

export default {
  name: 'lkp',
  setup() {
    let currentDD = useState('currentDD');

    return {
      currentDD
    }
  },
  data() {
    return {
      isOpen: false,
      classOpen: 'lkp_open',
      name: 'Евграфий Евграфьевич',
      list: {
        true: [
          {
            link: '/profile/',
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
      
      // if (this.currentDD && this.currentDD.isOpen) {
      //   this.currentDD.isOpen = false;
      // }

      this.currentDD = this;
    }
  }
}
