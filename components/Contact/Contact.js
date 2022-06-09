export default {
  name: 'Contact',
  setup() {
    let isMapLoaded = useState('isMapLoaded');
    let isCallbackFormShow = useState('isCallbackFormShow');
    return {
      isMapLoaded,
      position: [59.904645, 30.284921],
      isCallbackFormShow
    }
  },
  data() {
    return {
      isFormShow: false,
      list: [
        {
          icon: 'phone',
          value: '<a href="tel:+79211052033">+7 921 105 20 33</a>'
        },
        {
          icon: 'at',
          value: '<a href="mailto:order@carcaine.ru">order@carcaine.ru</a>'
        },
        {
          icon: 'map',
          value: 'г. Санкт-Петербург, улица Розенштейна 39, корпус 3'
        },
      ]
    }
  },
  methods: {
    loadScript() {
      let script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

      document.body.append(script);
    },
    createMap() {
      ymaps.ready(()=>{
        let map;
        map = new ymaps.Map(this.$refs.map, {
          center: this.position,
          zoom: 13,
          controls: []
          }, {
          searchControlProvider: 'yandex#search'
        })

        let placemark = new ymaps.Placemark(this.position, {}, {});

        map.geoObjects.add(placemark);
        map.behaviors.disable('scrollZoom');
      });
    }
  },
  mounted() {
    if (!this.isMapLoaded) {
      this.isMapLoaded = !this.isMapLoaded;
      this.loadScript();
    }
    setTimeout(()=>{
      this.createMap();
    }, 500);
  },
}
