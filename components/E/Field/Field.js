import IMask from 'imask';
import BEM from "~/utils/bem";  
import { getError } from "~/utils/field-errors";  

export default {
  name: 'Field',
  data() {
    return {
      value: '',
      typeArea: 'text',
      isEmpty: true,
      isVisible: false,
      isValid: 3,
      isFocus: false,
      errorValue: 0,
      mods: [],
      cls: {
        focus: 'focus',
        filled: 'filled',
        valid: 'valid',
        error: 'error',
        validHidden: 'field__value_hidden',
        iconHidden: 'field__icon_hidden'
      }
    }
  },
  methods: {
    getError,
    handleClick(event) {
      if (event.target == this.$refs.area || event.target.closest('.field__clear')  || BEM.mods.include(this, this.cls.focus)) {
        BEM.mods.remove(this, this.cls.filled);
        return false;
      }

      this.$refs.area.focus();
    },
    handleFocusin() {
      this.isFocus = true;
      BEM.mods.add(this, this.cls.focus);
    },
    handleFocusout() {
      this.isFocus = false;
      BEM.mods.remove(this, this.cls.focus);

      if (this.validation) {
        this.validate();
      }
    },
    handleInput() {
      if (this.value.length > 0) {
        BEM.mods.add(this, this.cls.filled);
      } else {
        BEM.mods.remove(this, this.cls.filled);
      }

      if (this.validation) {
        this.validate();
      }
      // if (this.validation == 'phone' && this.value == 18) {
      //   event.preventDefault();
      // }
    },
    clearValue() {
      this.value = '';
    },
    toggleVisiblePassword() {
      this.isVisible = !this.isVisible;
      this.typeArea = this.typeArea == 'password' ? 'text' : 'password';
    },
    validate() {
      this.errorValue = 0;
      switch (this.validation) {
        case 'name':
          if (this.value.length < 3)
            this.errorValue = 10;
          break;
        case 'email':
          if (!this.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) 
            this.errorValue = 20;
          break;
        case 'phone':
          if (this.value.length < 18)
            this.errorValue = 30;
          break;
        case 'password':
          if (this.value.length < 6)
            this.errorValue = 41;
          else if (this.value.length >= 6 && this.value.length <= 9)
            this.errorValue = 42;
          else 
            this.errorValue = 40;
          break;
      }

      if (this.errorValue > 0 && this.errorValue != 40) {
        this.isValid = 0;
        BEM.mods.add(this, this.cls.error);
        BEM.mods.remove(this, this.cls.valid);
      } else {
        this.isValid = 1;
        BEM.mods.remove(this, this.cls.error);
        BEM.mods.add(this, this.cls.valid);
      }
      

    }
  },
  created() {
    BEM.mods.init(this);

    if (this.type) {
      BEM.mods.add(this, this.type);
    }

    if (this.type) {
      this.typeArea = this.type;
    }

  },
  mounted() {
    if (this.validation) {
      if (this.validation == 'phone') {
        // IMask(this.$refs.area, {
        //   mask: '+7 (000) 000-00-00'
        // })
      }
    }
  },
  watch: {
    value() {
      this.isEmpty = this.value ? false : true;
      this.$emit('update:val', this.value);
    }
  },
  props: {
    mode: String,
    type: String,
    name: String,
    val: String,
    placeholder: String,
    required: Boolean,
    clear: Boolean,
    validation: String
  },
  emits: ['update:val']
}
