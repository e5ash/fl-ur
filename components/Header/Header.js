import { toLink } from '~/utils';

export default {
  name: 'Header',
  setup() {
    let isSearchOpen = useState('isSearchOpen', ()=> false);
    let isNavShow = useState('isNavShow');

    return {
      isSearchOpen,
      isNavShow
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
          href: '/categories'
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
