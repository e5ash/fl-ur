import { toLink } from "~/utils"; 

export default {
  name: 'Button',
  setup() {
    let isShowModal = useState('isShowModal');
    return {
      isShowModal
    }
  },
  data() {
    return {
      name: 'button',
      modsBEM: [],
    }
  },
  created() {
    if (this.mods) {
      let mods = [];
      mods = this.mods.split(', ');
      mods.forEach((mod)=>{
        this.modsBEM.push(this.name + '_' + mod);
      });
    }
  },
  methods: {
    toLink,
    handleClick() {
      if (this.modal) {
        this.isShowModal = true;
      }

      if (this.href) {
        this.toLink(this.href);
      }
    }
  },
  props: {
    mods: String,
    href: String,
    modal: Boolean,
    phone: Boolean
  }
}
