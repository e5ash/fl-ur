import { toLink, toPriceFormat } from '~/utils';

export default {
  name: 'Search',
  setup() {
    let isSearchOpen = useState('isSearchOpen');
    return {
      isSearchOpen,
    }
  },
  data() {
    return {
      value: '',
      results: [
        'GAZ 311055',
        'BWM model 3321',
        'REVO Kit golf',
        'Toyota RAV4',
        'Mitsubishi Outlander',
        'Lada XRAY',
        'Nissan Skyline',
        'Hyundai Creta',
        'Mitsubishi Lancer',
        'Renault Duster'
      ],
      classShow: 'search_show',
      length: 0,
    }
  },
  methods: {
    toLink,
    toPriceFormat,
    sortResults() {
      console.log(this.value);
      let value = String(this.value).toLowerCase();
      this.sortedResults = [];
      this.length = 0;
      this.results.filter((result)=>{
        let res = result.toLowerCase();
        if (res.indexOf(value) >= 0) {
          this.sortedResults.push(result);
          this.length++;
        }
      });
      this.sortedResults = this.sortedResults.splice(0, 5);
    },
  },
  watch: {
    value() {
      this.sortResults();
    }
  }
}
