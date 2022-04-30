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
  props: {
    mods: String,
    href: String
  }
}
