export default {
  name: 'Error',
  data() {
    return {
      current: '',
      list: [
        {
          title: 'Дотюнинговались...',
          code: '404',
          status: 'Такой детали нет'
        },
        {
          title: 'Кажется, лег мотор...',
          code: '404',
          status: 'Крутить в отсечку нельзя'
        },
        {
          title: 'На 92 говорят поедет...',
          code: '4,04',
          status: '0 - 100'
        },
        {
          title: 'Октавия на стейдже...',
          code: '404',
          status: 'Количество ошибок на приборке'
        },
        {
          title: 'Такие детали только на авито...',
          code: '404',
        },
      ]

    }
  },
  methods: {
    getRandomItem() {
      let min = 0;
      let max = this.list.length - 1;
      return this.list[Math.floor(Math.random() * (max - min + 1)) + min]; 
    }
  },
  created() {
    this.current = this.getRandomItem();
  }
}
