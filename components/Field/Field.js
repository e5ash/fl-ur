export default {
  name: 'Field',
  data() {
    return {
      name: 'field',
      value: '',
      isValid: null,
      classError: 'field_error',
      classValid: 'field_valid',
      modsBEM: [],
      errorMessage: '',
      validationMessages: {
        phone: {
          default: 'Ошибка, телефон не введен.'
        },
        email: {
          default: 'Ошибка, почта не введена.'
        },
      }
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
  watch: {
    value() {
      if (this.validation) {
        switch (this.validation) {
          case 'email':
            this.validateEmail();
            break;
        }
        
      }
    }
  },
  methods: {
    validateEmail() {
      if (this.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        this.isValid = true;
        this.errorMessage = '';
      } else {
        this.isValid = false;
        this.errorMessage = this.validationMessages.email.default;
      }
    }
  },
  props: {
    mods: String,
    type: String,
    placeholder: String,
    clear: String,
    val: String,
    title: String,
    validation: String
  },
  emits: ['update:val']
}
