import { toPriceFormat, toLink, findProduct, addProduct, removeProduct, setStorage } from "~/utils";
export default {
  name: 'Product',
  setup() {
    let products = useState('products');
    return {
      products
    }
  },
  data() {
    return {
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
    toggleProduct() {
      this.isAdded = !this.isAdded;
      if (this.isAdded) {
        this.addProduct(this.product);
      } else {
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
          console.log(item.count);
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
      count: this.count
    }
  },
  mounted() {
    let findElement = this.products.find(el => el.UID == this.product.UID);
    if (findElement) {
      this.isAdded = true;
      this.count = findElement.count;
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
    disabled: Boolean
  },
}
