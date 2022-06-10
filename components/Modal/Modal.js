export default {
  name: 'Modal',
  setup() {
    let isShow = useState('isShowModal', false);
    let isCallbackFormShow = useState('isCallbackFormShow', false);
    let isReviewFormShow = useState('isReviewFormShow', false);
    let isNotAvailableFormShow = useState('isNotAvailableFormShow', false);
    let isSetsShow = useState('isSetsShow', false);
    return {
      isShow,
      isCallbackFormShow,
      isReviewFormShow,
      isNotAvailableFormShow,
      isSetsShow
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
        if (this.isSetsShow) {
          let modal = document.querySelector('.modal')
          let sets = document.querySelector('.modal .product__modal-inner');

          modal.classList.add('modal_sm');
          document.setsBlock.append(sets);
        }

        this.isShow = this.isReviewFormShow = this.isCallbackFormShow = this.isNotAvailableFormShow = this.isSetsShow = false;
      }
    }
  },
  watch: {
    isShow() {
      let sets = document.querySelector('.modal .form__sets');
      sets.innerHTML = '';

      if (this.isShow) {
        document.body.classList.add(this.classBodyOverflow);
      } else {
        document.body.classList.remove(this.classBodyOverflow);
      }
    }
  }
}
