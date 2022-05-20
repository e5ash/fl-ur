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
    let counter = 0;
    for(let i = 0; i < 12; i++) {
      this.list.push(Products[counter]);
      counter = counter == 0 ? 1 : 0;
    }
  }
}
