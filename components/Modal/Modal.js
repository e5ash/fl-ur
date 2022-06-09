export default {
  name: 'Modal',
  setup() {
    let isShow = useState('isShowModal', false);
    let isCallbackFormShow = useState('isCallbackFormShow', false);
    let isReviewFormShow = useState('isReviewFormShow', false);
    let isNotAvailableFormShow = useState('isNotAvailableFormShow', false);
    return {
      isShow,
      isCallbackFormShow,
      isReviewFormShow,
      isNotAvailableFormShow
    }
  },
  data() {
    return {
      classShow: 'modal_show',
      classBodyOverflow: 'body-modal-is-show'
    }
  },
  methods: {
    close($event) {
      if (!$event.target.closest('.button') && !$event.target.closest('.modal__inner')) {
        this.isShow = !this.isShow;
        this.isReviewFormShow = this.isCallbackFormShow = this.isNotAvailableFormShow = false;
      }
    }
  },
  watch: {
    isShow() {
      if (this.isShow) {
        document.body.classList.add(this.classBodyOverflow);
      } else {
        document.body.classList.remove(this.classBodyOverflow);
      }
    }
  }
}
