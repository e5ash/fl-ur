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
      isFavorit: false,
      isComp: false,
      isAdded: false,
      count: 1,
      product: null,
      href: '/categories/catalog/item'
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
    toggleProduct() {
      this.isAdded = !this.isAdded;
      this.isShowAlert = true;
      if (this.isAdded) {
        this.alertValue = 'Товар "' + this.title + '" успешно добавлен в корзину';
        this.addProduct(this.product);
      } else {
        this.alertValue = 'Товар "' + this.title + '" удалён из корзины';
        this.removeProduct(this.product);
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
  created() {
    this.product = {
      UID: this.UID,
      img: this.img,
      title: this.title,
      price: this.price,
      count: this.count,
      chars: this.chars
    }
  },
  mounted() {
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
  props: {
    UID: Number,
    img: String,
    title: String,
    desc: String,
    price: Object,
    incdec: Boolean,
    remove: Boolean,
    disabled: Boolean,
    hide_old_price: Boolean,
    compare: Boolean,
    favorit: Boolean,
    chars: Array,
    chars_show: Boolean
  },
}
