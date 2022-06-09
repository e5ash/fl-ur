export default {
  name: 'Incdec',
  data() {
    return {
      value: 1,
      maxValue: 100,
      isMax: false,
      isMin: true,
      disabled: 'incdec__button_disabled'
    }
  },
  methods: {
    handeKeyPress(event) {
      this.getValue();
      if (event.keyCode > 57) {
        event.preventDefault();
      }
    },
    handeOut(event){
      this.getValue();
      if (this.value < 1) {
        this.value = 1;
      }
      if (this.value > this.max) {
        event.preventDefault();
        this.value = this.maxValue;
      }
    },
    plusValue() {
      this.getValue();
      if (this.value < this.maxValue) {
        this.value++;
      }
    },
    minusValue() {
      this.getValue();
      if (this.value > 1) {
        this.value--;
      }
    },
    getValue() {
      this.value = this.$refs.input.value;
    }
  },
  watch: {
    value() {
      if (this.value == 1) {
        this.isMin = true;
      } else {
        this.isMin = false;
      }

      if (this.value == this.max) {
        this.isMax = true;
      } else {
        this.isMax = false;
      }

      this.$emit('update:value', this.value);
    }
  },
  mounted() {
    // console.log(this.value);
    this.maxValue = this.max ? Number(this.max) : this.maxValue;
  },
  props: {
    max: Number
  }
}
