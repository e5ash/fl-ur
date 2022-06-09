export default {
  name: 'Share',
  data() {
    return {
      isShow: true,
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
        }).then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));

      }
    }
  },
  mounted() {
    if (navigator.share) {
      this.isShow = true;
    }

    const shareData = {
      title: document.title,
      url: window.location.href
    }

    const shareBtn = document.querySelector('.share');
    // document.body.addEventListener('click', async () => {
    //   try {
    //     await navigator.share(shareData)
    //   } catch(err) {
    //     console.log('Error: ');
    //   }
    // });
  }
}
