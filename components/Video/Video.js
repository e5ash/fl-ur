export default {
  name: 'Video',
  data() {
    return {
      isPlay: false,
      classPlay: 'video_play'
    }
  },
  methods: {
    togglePlay() {
      this.isPlay = !this.isPlay;

      if (this.isPlay) {
        this.$refs.iframe.src = this.$refs.iframe.src + '?autoplay=1';
      } else {
        this.$refs.iframe.src = this.$refs.iframe.src;
      }
    }
  },
  props: {
    poster: String,
    video: String
  }
}
