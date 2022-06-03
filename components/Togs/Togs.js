export default {
  name: 'Togs',
  data() {
    return {
      current: null,
    }
  },
  props: {
    list: Array,
  },
  mounted() {
    this.current = this.list[0];
  }
}
