export default {
  name: 'Form',
  setup() {
    let isShowModal = useState('isShowModal');
    let isCallbackFormShow = useState('isCallbackFormShow');
    let isReviewFormShow = useState('isReviewFormShow');
    let isNotAvailableFormShow = useState('isNotAvailableFormShow');
    let isSetsShow = useState('isSetsShow');
    return {
      isShowModal,
      isCallbackFormShow,
      isReviewFormShow,
      isNotAvailableFormShow,
      isSetsShow
    }
  },
  data() {
    return {
      step: 1,
      fields: {
        name: '',
        email: '',
        phone: '',
        review: '',
        files: ''
      }
    }
  },
  methods: {
    closeModal() {
      if (this.isSetsShow) {
        let modal = document.querySelector('.modal')
        let sets = document.querySelector('.modal .product__modal-inner');

        modal.classList.add('modal_sm');
        document.setsBlock.append(sets);
      }

      this.isShowModal = this.isReviewFormShow = this.isCallbackFormShow = this.isNotAvailableFormShow = this.isSetsShow = false;
    }
  },
  props: {
    close: Boolean,
    title: String,
    desc: String,
    type: String,
    btnText: String
  }
}
