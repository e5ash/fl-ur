export default {
  name: 'Myauto',
  data() {
    return {
      classCurrent: 'myauto__item_current',
      current: '',
      list: [
        {
          icon: '/assets/images/marks/volkswagen.svg',
          name: 'Golf R VIII'
        }
      ]
    }
  },
  methods: {
    toggleCurrent(item){
      this.current = this.current == item ? null : item;
      console.log(item, this.current);
      this.$emit('update:current', this.current);
    }
  },
  props: {
    current: String
  },
  emits: ['update:current']
}
