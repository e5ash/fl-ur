import { toPriceFormat, addProduct, removeProduct } from '~/utils';
import Swiper, { Thumbs } from 'swiper';
import { Products } from '~/data/products';

export default {
  name: 'Card',
  setup() {
    let products = useState('products');
    let compares = useState('compares');
    let favorits = useState('favorits');
    let isShowAlert = useState('isShowAlert');
    let alertValue = useState('alertValue');
    return {
      products,
      compares,
      favorits,
      isShowAlert,
      alertValue,
    }
  },
  data() {
    return {
      isFavorit: false,
      isComp: false,
      isAdded: false,
      UID: 100,
      name: 'Комплект винтовой подвески BC Racing серия BR тип RA',
      price: {
        current: 2750
      },
      count: 1,
      counts: [
        {
          key: 'В наличии',
          value: 15
        },
        {
          key: 'На складе',
          value: 10
        },
      ],
      text: 'Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и полноту реализации выбранного вами уровня усовершенствования.Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и ',
      complect: 'Болты 5х10, еще какие-то болты, сам товар, <br>куча пупырки, воздух немецкий, коробка, <br>ненужный болт из-за которого вы потом все <br>снимите и соберете заново, инструкция по <br>сборке шкафа икея',
      images: [
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        // '/assets/images/product.jpg',
      ],
      sets: [
        { title: '10 мм', checked: true }, 
        { title: '15 мм' },
        { title: '20 мм' },
        { title: '32 мм' },
        { title: '35 мм' },
        { title: '40 мм' },
        { title: '50 мм' }
      ],
      chars: [
        {
          title: 'Артикул',
          value: 'H-04-2638'
        },
        {
          title: 'Артикул производителя',
          value: 'H-04-2638'
        },
        {
          title: 'Вид товара',
          value: 'Винтовая подвеска'
        },
        {
          title: 'Гарантия',
          value: '1 год'
        },
        {
          title: 'Максимальное занижение, мм',
          value: '100'
        },
        {
          title: 'Материал опор',
          value: 'Алюминий 6016'
        },
        {
          title: 'Материал пружин',
          value: 'SAE9254'
        },
        {
          title: 'Минимальное занижение, мм',
          value: '5'
        },
        {
          title: 'Производитель',
          value: 'BC Racing'
        },
        {
          title: 'Страна производства',
          value: 'Тайвань'
        },
        {
          title: 'Оригинальный номер по vin',
          value: '12344124124weq'
        },
      ],
      tabs: {
        current: null,
        list: [
          {
            title: 'Характеристики',
          },
          {
            title: 'Аналоги',
          },
          {
            title: 'Отзывы',
          },
        ],
      },
      reviews: [
        {
          img: '/assets/images/product.jpg',
          title: 'Иванов Иван Иванович',
          text: 'Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и полноту.'
        }
      ],
      analogs: [],
      rec: [],
      selects: {
        step: 0,
        current: {
          mark: null,
          model: null
        },
        marks: [
          {
            name: 'Volkswagen',
            icon: '/assets/images/marks/volkswagen.svg',
          },
          {
            name: 'Porsche',
            icon: '/assets/images/marks/porsche.svg',
            models: [
              {
                name: '911',
                mods: [
                  { name: '911' },
                  { name: '911 Carrera' },
                  { name: '911 R' },
                  { name: '911 Turbo' },
                  { name: '911 Turbo S' },
                ]
              },
              {
                name: 'Cayenne',
                mods: [
                  { name: 'Cayenne' },
                  { name: 'Cayenne Diesel' },
                  { name: 'Cayenne S' },
                  { name: 'Cayenne Turbo' },
                ]
              }
            ]
          },
          {
            name: 'Audi',
            icon: '/assets/images/marks/audi.svg',
            models: [
              {
                name: '100',
                mods: [
                  { name: '100' },
                  { name: '100 S4' },
                ]
              },
              {
                name: 'A5',
                mods: [
                  { name: 'A5' },
                  { name: 'A5 g-tron' },
                ]
              },

            ]
          },
          {
            name: 'BMW',
            icon: '/assets/images/marks/bmw.svg',
            models: [
              {
                name: 'X1',
                mods: [
                  { name: 'X1' },
                  { name: 'X1 16d' },
                  { name: 'X1 18d' },
                  { name: 'X1 18i' },
                  { name: 'X1 20d' },
                  { name: 'X1 20i' },
                  { name: 'X1 23d' },
                  { name: 'X1 28i' },
                ]
              },
              {
                name: 'X2',
                mods: [
                  { name: 'X2' },
                  { name: 'X2 16d' },
                  { name: 'X2 18d' },
                  { name: 'X2 18i' },
                  { name: 'X2 20d' },
                  { name: 'X2 20i' },
                  { name: 'X2 23d' },
                  { name: 'X2 28i' },
                ]
              },
              {
                name: 'X3',
                mods: [
                  { name: 'X3' },
                  { name: 'X3 16d' },
                  { name: 'X3 18d' },
                  { name: 'X3 18i' },
                  { name: 'X3 20d' },
                  { name: 'X3 20i' },
                  { name: 'X3 23d' },
                  { name: 'X3 28i' },
                ]
              },
            ]
          },
          {
            name: 'Mini',
            icon: '/assets/images/marks/mini.svg',
            models: [
              {
                name: 'Cabrio',
                mods: [
                  { name: 'Cabrio Cooper' },
                  { name: 'Cabrio Cooper D' },
                  { name: 'Cabrio Cooper S' },
                ]
              }
            ]
          },
        ]
      }
    }
  },
  methods: {
    toPriceFormat,
    addProduct,
    removeProduct,
    setCurrentMark(mark) {
      this.selects.current.mark = mark;
      this.selects.step++;
    },
    setCurrentModel(model) {
      this.selects.current.model = model;
      this.selects.step++;
    },
    goBack() {
      this.selects.step--;
    },
    getModelWord(value = 0) {
      let text = '';

      if (value == 0) {
        text = 'Для всех моделей';
        return text;
      } else if (value == 1) {
        text = 'модель';
      } else if (value >= 2 && value <= 4) {
        text = 'модели';
      } else {
        text = 'моделей';
      }

      return value + ' ' + text;
    },
    toggleFavorit() {
      this.isFavorit = !this.isFavorit;
      this.isShowAlert = true;
      if (this.isFavorit) {
        this.alertValue = 'Товар "' + this.name + '" успешно добавлен в избранное';
        this.addProduct(this.product, 'favorits');
      } else {
        this.alertValue = 'Товар "' + this.name + '" удалён из избранного';
        this.removeProduct(this.product, 'favorits');
      }
    },
    toggleComp() {
      this.isComp = !this.isComp;
      this.isShowAlert = true;
      if (this.isComp) {
        this.alertValue = 'Товар "' + this.name + '" успешно добавлен в сравнение';
        this.addProduct(this.product, 'compares');
      } else {
        this.alertValue = 'Товар "' + this.name + '" удалён из сравнения';
        this.removeProduct(this.product, 'compares');
      }
    },
    toggleProduct() {
      this.isAdded = !this.isAdded;
      this.isShowAlert = true;
      if (this.isAdded) {
        this.alertValue = 'Товар "' + this.name + '" успешно добавлен в корзину';
        this.addProduct(this.product);
      } else {
        this.alertValue = 'Товар "' + this.name + '" удалён из корзины';
        this.removeProduct(this.product);
      }
    }
  },
  created() {
    this.product = {
      UID: this.UID,
      img: this.images[0],
      title: this.name,
      price: this.price,
      count: this.count,
      chars: this.chars
    }

    this.tabs.current = this.tabs.list[0];

    let counter = 0;
    for(let i = 0; i < 3; i++) {
      this.analogs.push(Products[counter]);
      counter = counter == 0 ? 1 : 0;
    }

    counter = 0;
    for(let i = 0; i < 2; i++) {
      this.rec.push(Products[counter]);
      counter = counter == 0 ? 1 : 0;
    }

  },
  mounted() {
    let findElement = this.products.find(el => el.UID == this.product.UID);
    if (findElement) {
      this.isAdded = true;
    }

    findElement = this.compares.find(el => el.UID == this.product.UID);
    if (findElement) {
      this.isComp = true;
    }

    findElement = this.favorits.find(el => el.UID == this.product.UID);
    if (findElement) {
      this.isFavorit = true;
    }

    let pagination = new Swiper(this.$refs.pagination, {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });

    new Swiper(this.$refs.images, {
      thumbs: {
        swiper: pagination
      },
      modules: [Thumbs]
    });
  }
}
