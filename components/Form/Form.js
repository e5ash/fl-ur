export default {
  name: 'Form',
  setup() {
    let isShowModal = useState('isShowModal', false);
    let modalCurrentProduct = useState('isShowModal', null);
    return {
      isShowModal,
      modalCurrentProduct
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
  props: {
    close: Boolean,
    title: String,
    desc: String,
    type: String,
  }
}
