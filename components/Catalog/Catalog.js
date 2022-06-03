import { getStorage } from '~/utils';
import { Products } from '~/data/products';

export default {
  name: 'Catalog',
  data() {
    return {
      elements: Products,
      searchValue: '',
      list: []
    }
  },
  created() {
    for(let i = 0; i < 12; i++) {
      this.list.push(Products[i]);
    }
  },
  mounted() {
    let lsLast = getStorage('search-last');
    let last = [];

    if (lsLast) {
      last = lsLast;
      if (last.length > 0) {
        this.searchValue = last[last.length - 1];
      }
    }
  },
  props: {
    search: Boolean
  }
}
