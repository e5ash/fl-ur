export default {
  name: 'File',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onChange() {
      this.value = Array.from(this.$refs.input.files);
    }
  },
  watch: {
    value() {
      this.$emit('update:file', this.value);
    }
  },
  prop: {
    file: String
  },
  emits: ['update:file']
}
