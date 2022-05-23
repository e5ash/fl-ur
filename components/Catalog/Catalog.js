import { Products } from '~/data/products';

export default {
  name: 'Catalog',
  data() {
    return {
      elements: Products,
      list: []
    }
  },
  created() {
    for(let i = 0; i < 12; i++) {
      this.list.push(Products[i]);
    }
  }
}
