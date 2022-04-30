export default {
  name: 'Location',
  data() {
    return {
      isOpen: false,
      classOpen: 'location_open',
      classItemCurrent: 'location__item_current',
      list: ['Москва', 'Ростов'],
      current: ''
    }
  },
  created() {
    this.current = this.list[0];
  },
  methods: {
    setCurrent(item) {
      this.current = item;
    },
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  }
}
