import { toLink } from "~/utils"

export default {
  name: 'Logo',
  setup() {
    let isNavShow = useState('isNavShow');
    return {
      isNavShow
    }
  },
  props: {
    isIconHide: String,
    toMain: Boolean
  },
  methods: {
    toLink,
    closeNav() {
      this.isNavShow = false;
    }
  }
}
