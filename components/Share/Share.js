export default {
  name: 'Share',
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    sharePage() {

        const thisUrl = window.location.href,
              thisTitle = document.title;

        navigator.share({
          title: thisTitle,
          url: thisUrl
        });

    }
  },
  mounted() {
    if (navigator.share) {
      this.isShow = true;
    }
  }
}
