export default {
  name: 'Ord',
  data() {
    return {
      list: [],
      chars: [
        {
          title: 'Дата',
          value: '12 мая 2022 14:12:12'
        },
        {
          title: 'Сумма',
          value: '125 231 ₽'
        },
        {
          title: 'Доставка',
          value: 'СДЭК'
        },
        {
          title: 'Ожидаемый срок доставки',
          value: '1 год'
        },
        {
          title: 'Способ оплаты',
          value: 'Наличные'
        },
        {
          title: 'Статус',
          value: 'доставлен'
        },
      ]
    }
  },
  created() {
    // for(let i = 0; i < 4; i++) {
    //   this.list.push(Products[i]);
    // }
  }
}
