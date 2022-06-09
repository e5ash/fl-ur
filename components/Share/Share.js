export default {
  name: 'Share',
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    sharePage() {
      if (navigator.share) {

        const thisUrl = window.location.href,
              thisTitle = document.title;

        navigator.share({
          title: thisTitle,
          url: thisUrl
        });

      }
    }
  },
  mounted() {
    if (navigator.share) {
      this.isShow = true;
    }
  }
}
