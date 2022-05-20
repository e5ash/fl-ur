export default {
  name: 'Radio',
  data() {
    return {
      classChecked: 'radio_checked'
    }
  },
  methods: {
    toggleChecked() {
      this.$emit('update:checked', this.value);
    }
  },
  props: {
    value: String,
    checked: String,
    group: String
  },
  emits: ['update:checked']
}
