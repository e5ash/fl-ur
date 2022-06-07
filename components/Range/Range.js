import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export default {
  name: 'Range',
  mounted() {
    let prefix = this.prefix;
    let slider = noUiSlider.create(this.$refs.inner, {
      start: this.start,
      connect: true,
      step: 1,
      range: {
        'min': this.range.min,
        'max': this.range.max
      },
    });

    slider.on('update', (v)=>{
      this.$refs.valueFrom.innerHTML = Number(v[0]).toLocaleString('ru') + ' <span class="r"></span>';
      this.$refs.valueTo.innerHTML = Number(v[1]).toLocaleString('ru') + ' <span class="r"></span>';
    });

  },
  props: {
    start: Array,
    range: Object,
    prefix: String
  }
}
