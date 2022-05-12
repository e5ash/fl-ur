import { toLink } from "~/utils"; 

export default {
  name: 'Button',
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
      if (this.href) {
        this.toLink(this.href);
      }
    }
  },
  props: {
    mods: String,
    href: String
  }
}
