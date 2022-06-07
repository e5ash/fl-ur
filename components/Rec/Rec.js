export default {
  name: 'Rec',
  data() {
    return {
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
    this.list = await this.getProducts();
  },
  props: {
    title: String,
    length: Number
  }
}
