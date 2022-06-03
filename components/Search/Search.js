import { toLink, toPriceFormat, getStorage, setStorage } from '~/utils';

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
      popular: [
        'VW тубина 123412',
        'Супер кит для моего тигуана',
        'REVO',
      ],
      last: [],
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
    setStorage,
    getStorage,
    sortResults() {
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
    setValue(value) {
      this.last.push(value);
      setStorage('search-last', this.last);
      this.toLink('/search');
    },
    submitForm() {
      if (this.value) {
        this.last.push(this.value);
        setStorage('search-last', this.last);
        this.toLink('/search');
      }
    }
  },
  watch: {
    value() {
      this.sortResults();
    }
  },
  mounted() {
    let lsLast = getStorage('search-last');

    if (lsLast) {
      this.last = lsLast.splice(0, 3).sort();
    }
  }
}
