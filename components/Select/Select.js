export default {
  name: 'Select',
  setup() {
    const isSelectOpen = useState('isSelectOpen');

    return {
      isSelectOpen
    }
  },
  data() {
    return {
      name: 'select',
      value: '',
      isOpen: false,
      isDisabled: false,
      modsBEM: [],
      classOpen: 'select_open',
      classItemCurrent: 'select__item_current'
    }
  },
  created() {
    if (this.disabled) {
      this.isDisabled = this.disabled;
    }
    if (this.mods) {
      let mods = [];
      mods = this.mods.split(', ');
      mods.forEach((mod)=>{
        this.modsBEM.push(this.name + '_' + mod);
      });
    }
  },
  methods: {
    toggleSelect($event) {
      if (this.isDisabled) {
        return false;
      }
      
      if ($event.target.closest('.select__clear')) {
        this.isSelectOpen = null;
        this.isOpen = false;
        return false;
      }

      if (this.isSelectOpen != null && this.isSelectOpen != this) {
        this.isSelectOpen.isOpen = false;
      }

      if (!this.isOpen) {
        this.isSelectOpen = this;
        this.isOpen = true;
      } else {
        this.isSelectOpen = null;
        this.isOpen = false;
      }
    },
    setDisabled() {
      this.isDisabled = true;
    },
    removeDisabled() {
      this.isDisabled = false;
    }
  },
  props: {
    mods: String,
    title: String,
    placeholder: String,
    options: Array,
    val: String,
    clear: Boolean,
    disabled: Boolean,
    classesDrop: String,
    bg: Boolean
  },
  watch: {
    value() {
      this.$emit('update:val', this.value);
    },
  },
  emits: ['update:val']
}
