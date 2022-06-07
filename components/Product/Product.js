import { toPriceFormat, toLink, findProduct, addProduct, removeProduct, setStorage } from "~/utils";
export default {
  name: 'Product',
  setup() {
    let products = useState('products');
    let compares = useState('compares');
    let favorits = useState('favorits');
    let isShowAlert = useState('isShowAlert');
    let alertValue = useState('alertValue');
    return {
      products,
      compares,
      favorits,
      isShowAlert,
      alertValue,
    }
  },
  data() {
    return {
      UID: 0,
      img: '',
      title: '',
      desc: '',
      price: { },
      count: 1,
      chars: [],
      sets: [],
      isFavorit: false,
      isComp: false,
      isAdded: false,
      isShowModal: false,
      isSetsError: false,
      count: 1,
      dir: '/catalog/',
      product: null
    }
  },
  methods: {
    toLink,
    toPriceFormat,
    findProduct,
    addProduct,
    removeProduct,
    setStorage,
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
      if (this.sets && !this.isAdded) {
        if (!$event.target.closest('.product__sets-button')) {
          this.isShowModal = true;
          return false;
        } 

        if (!this.sets.find(el => el.checked == true)) {
          this.isSetsError = true;
          setTimeout(()=>{
            this.isSetsError = false;
          }, 3000);
          return false;
        }
      }

      this.isAdded = !this.isAdded;
      this.isShowAlert = true;
      if (this.isAdded) {
        this.alertValue = 'Товар "' + this.title + '" успешно добавлен в корзину';
        this.addProduct(this.product);
      } else {
        this.alertValue = 'Товар "' + this.title + '" удалён из корзины';
        this.removeProduct(this.product);

        if (this.sets?.length > 0) {
          this.sets.forEach((set)=>{
            set.checked = false;
          });
        }
      }
    },
    handleClick($event) {
      this.change();

      if (!$event.target.closest('.nk')) {
        this.toLink(this.href);
      } 

    },
    change() {
      for (let i = 0; i < this.products.length; i++) {
        let item = this.products[i];
        if (item.UID == this.UID) {
          item.count = this.count;
        }
      }

      this.setStorage('products', this.products);
    }
  },
  computed: {
    href() {
      return this.dir + this.UID;
    }
  },
  created() {
    if (!this.element) 
      return false;

    this.UID   = this.element.UID;
    this.img   = this.element.images[0];
    this.title = this.element.title;
    this.desc  = this.element.desc;
    this.price = this.element.price;
    this.count = this.element.count;
    this.chars = this.element.chars;
    this.sets  = this.element.sets ? Object.assign(this.element.sets) : null;

    this.product = {
      UID: this.element.UID,
      count: this.count,
      sets: this.sets,
      img: this.element.images[0],
      price: this.element.price.current,
      chars: this.element.chars ? this.element.chars : null,
      sets: this.element.sets ? Object.assign(this.element.sets) : null
    };
  },
  async mounted() {
    let findElement = this.products.find(el => el.UID == this.product.UID);
    if (findElement) {
      this.isAdded = true;
      this.count = findElement.count;
    }

    findElement = this.compares.find(el => el.UID == this.product.UID);
    if (findElement) {
      this.isComp = true;
    }

    findElement = this.favorits.find(el => el.UID == this.product.UID);
    if (findElement) {
      this.isFavorit = true;
    }
  },
  watch: {
    isShowModal() {
      if (this.isShowModal) {
        document.body.classList.add('body-modal-is-show');
      } else {
        document.body.classList.remove('body-modal-is-show');
      }
    }
  },
  props: {
    element: Object,
    incdec: Boolean,
    remove: Boolean,
    disabled: Boolean,
    hide_old_price: Boolean,
    compare: Boolean,
    favorit: Boolean,
    chars_show: Boolean,
    index: Number
  },
}
