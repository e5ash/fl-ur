import { toPriceFormat, addProduct, removeProduct, toLink } from '~/utils';
import Swiper, { Thumbs } from 'swiper';

export default {
  name: 'Card',
  setup() {
    let products = useState('products');
    let compares = useState('compares');
    let favorits = useState('favorits');
    let isShowAlert = useState('isShowAlert');
    let alertValue = useState('alertValue');
    let isShowModal = useState('isShowModal');
    let isCallbackFormShow = useState('isCallbackFormShow');
    let isReviewFormShow = useState('isReviewFormShow');
    let isNotAvailableFormShow = useState('isNotAvailableFormShow');
    let cartCount = useState('cartCount');
    return {
      products,
      compares,
      favorits,
      isShowAlert,
      alertValue,
      isShowModal,
      isCallbackFormShow,
      isReviewFormShow,
      isNotAvailableFormShow,
      cartCount
    }
  },
  data() {
    return {
      isFavorit: false,
      isComp: false,
      isAdded: false,
      UID: 0,
      title: '',
      price: {},
      count: 1,
      total: 1,
      counts: [
        {
          key: 'В наличии',
          value: 15
        },
        {
          key: 'На складе',
          value: 10
        },
      ],
      text: '',
      complect: '',
      video: '',
      images: [],
      sets: [],
      chars: [],
      tabs: {
        current: null,
        list: [
          {
            title: 'Характеристики',
          },
          {
            title: 'Аналоги',
          },
          {
            title: 'Отзывы',
          },
        ],
      },
      elements: [],
      reviews: [],
      analogs: [],
      rec: [],
      selects: {
        step: 0,
        current:  {},
        marks: []
      }
    }
  },
  methods: {
    toLink,
    toPriceFormat,
    addProduct,
    removeProduct,
    setCurrentMark(mark) {
      this.selects.current.mark = mark;
      this.selects.step++;
    },
    setCurrentModel(model) {
      this.selects.current.model = model;
      this.selects.step++;
    },
    goBack() {
      this.selects.step--;
    },
    getModelWord(value = 0) {
      let text = '';

      if (value == 0) {
        text = 'Для всех моделей';
        return text;
      } else if (value == 1) {
        text = 'модель';
      } else if (value >= 2 && value <= 4) {
        text = 'модели';
      } else {
        text = 'моделей';
      }

      return value + ' ' + text;
    },
    toggleFavorit() {
      this.isFavorit = !this.isFavorit;
      this.isShowAlert = true;
      if (this.isFavorit) {
        this.alertValue = 'Товар "' + this.title + '" успешно добавлен в избранное';
        this.addProduct(this.product, 'favorits');
      } else {
        this.alertValue = 'Товар "' + this.title + '" удалён из избранного';
        this.removeProduct(this.product, 'favorits');
      }
    },
    toggleComp() {
      this.isComp = !this.isComp;
      this.isShowAlert = true;
      if (this.isComp) {
        this.alertValue = 'Товар "' + this.title + '" успешно добавлен в сравнение';
        this.addProduct(this.product, 'compares');
      } else {
        this.alertValue = 'Товар "' + this.title + '" удалён из сравнения';
        this.removeProduct(this.product, 'compares');
      }
    },
    toggleProduct($event) {
      if (document.querySelector('.card__button-add .icon_phone') && $event.target.closest('.button__icon')) {
        this.isShowModal = this.isCallbackFormShow = true
        return false;
      }

      this.isAdded = true;
      this.isShowAlert = true;
      if (this.isAdded) {
        this.alertValue = 'Товар "' + this.title + '" успешно добавлен в корзину';
        this.addProduct(this.product);
      } 
      this.changeCartCount();
    },
    notAvailable($event) {
      if (document.querySelector('.card__button-add .icon_bookmark') && $event.target.closest('.button__icon')) {
        this.toggleFavorit();
      } else {
        this.isShowModal = this.isNotAvailableFormShow = true
      }
    },
    async getProduct(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/products.json' + params);
      let json = await response.json();
      return await json.find(el => el.UID == this.UID);
    },
    async getProducts(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/products.json' + params);
      return await response.json();
    },
    async getProducts(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/products.json' + params);
      return await response.json();
    },
    async getReviews(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/reviews.json' + params);
      return await response.json();
    },
    async getSelects(params) {
      params = params ? '?' + params : '';
      let response = await fetch('/data/autos.json' + params);
      return await response.json();
    },
    changeCartCount() {
      let count = 0;
      for (const prod of this.products) {
        count += prod.count ? prod.count : 1;
      }
      this.cartCount = count < 10 ? count : '9+';
    }
  },
  async mounted() {
    this.UID = this.$router.currentRoute.value.params.id;
    this.dataProduct = await this.getProduct('id=' + this.UID);
    Object.entries(this.dataProduct).forEach((el)=>{
      this[el[0]] = el[1];
    });

    this.total = this.countTotal.now + this.countTotal.stock;

    this.reviews = await this.getReviews('id=' + this.UID);
    this.selects.marks = await this.getSelects('id=' + this.UID);
    
    this.product = {
      UID: this.UID,
      title: this.title,
      desc: this.desc,
      count: this.count,
      sets: this.sets,
      images: this.images,
      price: this.price,
      chars: this.chars ? this.chars : null,
    }

    this.tabs.current = this.tabs.list[0];
    this.elements = await this.getProducts();

    this.analogs = this.elements.splice(0, 3);
    this.rec = this.elements.splice(0, 2);

    let findElement = this.products.find(el => el.UID == this.UID);
    if (findElement) {
      this.isAdded = true;
      if (findElement.sets) {
        this.sets = findElement.sets;
      }
    }

    findElement = this.compares.find(el => el.UID == this.UID);
    if (findElement) {
      this.isComp = true;
    }

    findElement = this.favorits.find(el => el.UID == this.UID);
    if (findElement) {
      this.isFavorit = true;
    }

    let pagination = new Swiper(this.$refs.pagination, {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });

    new Swiper(this.$refs.images, {
      thumbs: {
        swiper: pagination
      },
      modules: [Thumbs]
    });
  }
}
