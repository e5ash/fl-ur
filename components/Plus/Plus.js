export default {
  name: 'Plus',
  props: {
    value: String,
    group: String,
    checked: Boolean
  },
  emits: ['update:checked'],
  methods: {
    toggleChecked() {
      this.$emit('update:checked', !this.checked);
    }
  }
}
