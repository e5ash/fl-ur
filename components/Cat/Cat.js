import { getStorage } from '~/utils';

export default {
  name: 'Catalog',
  setup() {
    let isVisible = useState('isVisibleFilter');
    return {
      isVisible
    }
  },
  data() {
    return {
      searchValue: '',
      list: []
    }
  },
  methods: {
    async getProducts(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/products.json' + params);
      return await response.json();
    }
  },
  async mounted() {
    let lsLast = getStorage('search-last');
    let last = [];

    if (lsLast) {
      last = lsLast;
      if (last.length > 0) {
        this.searchValue = last[last.length - 1];
      }
    }

    this.list = await this.getProducts();
  },
  props: {
    search: Boolean
  }
}
