export default {
  name: 'Myauto',
  data() {
    return {
      classCurrent: 'myauto__item_current',
      current: '',
      isSelectionShow: false,
      list: [
        {
          icon: '/assets/images/marks/volkswagen.svg',
          name: 'Golf R VIII'
        }
      ],
      myauto: ''
    }
  },
  methods: {
    toggleCurrent(item){
      this.current = this.current == item ? null : item;
      this.$emit('update:current', this.current);
    },
    removeItem(index) {
      this.list.splice(index, 1);
    },
    toggleSelection() {
      this.isSelectionShow = !this.isSelectionShow;
    }
  },
  props: {
    current: String,
    add: Boolean,
    remove: Boolean,
    title: String
  },
  emits: ['update:current']
}
