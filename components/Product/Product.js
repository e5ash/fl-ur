import { toPriceFormat } from "~/utils";
export default {
  name: 'Product',
  props: {
    img: String,
    title: String,
    desc: String,
    price: Object,
  },
  methods: {
    toPriceFormat
  }
}
