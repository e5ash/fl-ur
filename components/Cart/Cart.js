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
          break;
        case 2:
          this.title = this.titles.order;
          this.isProductDisabled = true;
          break;
      }
    },
    nextStep() {
      console.log(this.products.length);
      if (this.products.length == 0) {
        this.toLink('/categories');
        return false;
      }

      this.step++;
      this.setStorage('cart-step', this.step);
    },
    prevStep() {
      this.step--;
      this.setStorage('cart-step', this.step);
    },
    calcTotalSum() {
      this.total = 0;
      this.products.forEach((item)=>{
        console.log(item);
        console.log(item.count);
        this.total += item.price.current * item.count;
      });
    }
  },
  mounted() {
    let lsStep = getStorage('cart-step');
    this.step = lsStep ? Number(lsStep) : this.step;
    
    this.switchTitle();
    this.calcTotalSum();
    console.log(this.products);

  },
  watch: {
    step() {
      this.switchTitle();
    }
  }
}
