import { toPriceFormat, toLink } from '~/utils';
export default {
  name: 'Profile',
  data() {
    return {
      fields: {
        email: 'example@email.com',
        phone: '+7 (999) 999-99-99',
        password: 'ThisIsMyPassword',
      },
      orders: [
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 0,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 0,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 0,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 0,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 1,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 2,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 0,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 0,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 1,
        },
        {
          name: 'Заказ # 1234 1234 423',
          date: '14 мрата 2021',
          price: 12325,
          status: 2,
        },
      ]
    }
  },
  methods: {
    toPriceFormat,
    toLink
  }
}
