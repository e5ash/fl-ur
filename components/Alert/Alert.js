export default {
  name: 'Alert',
  setup() {
    let isShow = useState('isShowAlert', false);
    let value = useState('alertValue', null);

    return {
      isShow,
      value
    }
  },
  data() {
    return {
      classShow: 'alert_show',
      timeout: null
    }
  },
  watch: {
    isShow() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      if (this.isShow === true) {
        this.timeout = setTimeout(()=>{
          this.isShow = false;
        }, 3500);
      }
    }
  }
}
