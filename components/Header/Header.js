import { toLink } from '~/utils';

export default {
  name: 'Header',
  data() {
    return {
      links: [
        {
          title: 'главная',
          href: '/'
        },
        {
          title: 'каталог',
          href: '/catalog'
        },
        {
          title: 'информация',
          href: '/info'
        },
        {
          title: 'контакты',
          href: '/contacts'
        },
        {
          title: 'еще...',
          href: null,
          action: this.openNav
        },
      ]
    }
  },
  methods: {
    toLink,
    openNav() {
      console.log(1);
    }
  }
}
