export default {
  name: 'Modal',
  setup() {
    let isShow = useState('isShowModal', false);
    return {
      isShow
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
      if (!$event.target.closest('.modal__inner')) {
        this.isShow = !this.isShow;
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
