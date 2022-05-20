export default {
  name: 'Check',
  data() {
    return {
      classChecked: 'check_checked'
    }
  },
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
