export default {
  name: 'Filter',
  data() {
    return {
      max: {
        name: 'max',
        list: [
          { title: '10 мм', checked: false }, 
          { title: '15 мм', checked: false }, 
          { title: '20 мм', checked: false }, 
          { title: '25 мм', checked: false }, 
          { title: '30 мм', checked: false } 
        ]
      },
      price: {
        start: [134, 200],
        range: {
          min: 134,
          max: 154
        }
      }
    }
  }
}
