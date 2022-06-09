import { toPriceFormat, toLink, getStorage, setStorage } from '~/utils';

export default {
  name: 'Cart',
  setup() {
    let products = useState('products');
    let cartCount = useState('cartCount');
    return {
      products,
      cartCount
    }
  },
  data() {
    return {
      titles: {
        cart: 'Корзина',
        order: 'Оформление заказа',
        completed: 'Заказ создан'
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
        case 3:
          this.title = this.titles.completed;
          this.isProductDisabled = true;
          this.buttonText = 'Оплатить';
          this.setStorage('cart-step', 1);
          localStorage.removeItem('products');
          this.cartCount = 0;
          this.products = [];


          break;
      }
    },
    nextStep() {
      if (this.products.length == 0) {
        this.toLink('/catalog');
        return false;
      }

      if (this.step < 3) {
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
