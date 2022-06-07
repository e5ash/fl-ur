import { toPriceFormat, toLink, getStorage, setStorage } from '~/utils';

export default {
  name: 'Cart',
  setup() {
    let products = useState('products');
    return {
      products
    }
  },
  data() {
    return {
      titles: {
        cart: 'Корзина',
        order: 'Оформление заказа'
      },
      title: 'Корзина',
      total: 0,
      step: 1,
      isProductDisabled: false,
      buttonText: 'Оформить заказ',
      fields: {
        email: '',
        phone: '',
        address: ''
      },
      delivery: {
        current: '',
        list: [ 
          { name: 'СДЭК' } 
        ]
      },
      pay: {
        name: 'pay',
        list: [
          {
            title: 'Сбербанк Онлайн',
            checked: false
          },
          {
            title: 'Сберкасса',
            checked: false
          },
          {
            title: 'Биткоин',
            checked: false
          },
          {
            title: 'Эфир',
            checked: false
          },
        ]
      }
    }
  },
  methods: {
    toPriceFormat,
    toLink,
    getStorage,
    setStorage,
    switchTitle() {
      switch (this.step) {
        case 1:
          this.title = this.titles.cart;
          this.isProductDisabled = false;
          this.buttonText = 'Оформить заказ';
          break;
        case 2:
          this.title = this.titles.order;
          this.isProductDisabled = true;
          this.buttonText = 'Оплатить';
          break;
      }
    },
    nextStep() {
      if (this.products.length == 0) {
        this.toLink('/catalog');
        return false;
      }

      if (this.step < 2) {
        this.step++;
        this.setStorage('cart-step', this.step);
      }
    },
    prevStep() {
      this.step--;
      this.setStorage('cart-step', this.step);
    },
    calcTotalSum() {
      this.total = 0;
      this.products.forEach((item)=>{
        this.total += item.price.current * item.count;
      });
    }
  },
  mounted() {
    let lsStep = getStorage('cart-step');
    this.step = lsStep ? Number(lsStep) : this.step;
    
    this.switchTitle();
    this.calcTotalSum();

  },
  watch: {
    step() {
      this.switchTitle();
    }
  }
}
