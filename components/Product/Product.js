import { toPriceFormat, toLink } from "~/utils";
export default {
  name: 'Product',
  data() {
    return {
      href: '/categories/catalog/item'
    }
  },
  methods: {
    toLink,
    toPriceFormat,
    handleClick($event) {
      if ($event.target.closest('.product__button-add')) {

      } else {
        this.toLink(this.href);
      }
    }
  },
  props: {
    img: String,
    title: String,
    desc: String,
    price: Object,
  },
}
