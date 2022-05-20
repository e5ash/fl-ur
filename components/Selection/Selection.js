export default {
  name: 'Selection',
  methods: {
    scrollToBlock() {
      this.$refs.selection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  },
  props: {
    isPage: Boolean
  }

}
