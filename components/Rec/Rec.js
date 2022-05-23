import { Products } from '~/data/products';

export default {
  name: 'Rec',
  data() {
    return {
      list: []
    }
  },
  created() {
    for(let i = 1; i <= this.length; i++) {
      this.list.push(Products[i]);
    }
  },
  props: {
    title: String,
    length: Number
  }
}
