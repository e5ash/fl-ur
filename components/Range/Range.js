import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export default {
  name: 'Range',
  mounted() {
    let prefix = this.prefix;
    noUiSlider.create(this.$refs.inner, {
      start: this.start,
      connect: true,
      range: {
        'min': this.range.min,
        'max': this.range.max
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4,
        format: {
          // 'to' the formatted value. Receives a number.
          to: function (value) {
              return prefix + String(value);
          },
          // 'from' the formatted value.
          // Receives a string, should return a number.
          from: function (value) {
              return Number(value.replace(/[^\d]/g, ''));
          }
        }
      },
    });
  },
  props: {
    start: Array,
    range: Object,
    prefix: String
  }
}
