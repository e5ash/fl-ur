export default {
  name: 'Location',
  setup() {
    let currentDD = useState('currentDD');

    return {
      currentDD
    }
  },
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

      // if (this.currentDD && this.currentDD.isOpen) {
      //   this.currentDD.isOpen = false;
      // }

      this.currentDD = this;
      
    }
  },
}
