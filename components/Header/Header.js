import { toLink } from '~/utils';

export default {
  name: 'Header',
  setup() {
    let isSearchOpen = useState('isSearchOpen', ()=> false);
    let isNavShow = useState('isNavShow');
    let cartCount = useState('cartCount');

    return {
      isSearchOpen,
      isNavShow,
      cartCount
    }
  },
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
        },
      ]
    }
  },
  methods: {
    toLink,
  }
}
