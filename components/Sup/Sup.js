export default {
  name: 'Sup',
  data() {
    return {
      list: [],
      sups: [
        {
          name: 'BMW Russia',
          desc: 'Очень оригинальные запчасти для автомобилей постоянно требующих вложений.',
          img: '/assets/images/ate.jpg'
        },
        {
          name: 'REVO',
          desc: 'Для ценителей автомобилей и для те кто понимает что такое удовольствие от вождения.',
          img: '/assets/images/bremo.jpg'
        },
      ]
    }
  },
  created() {
    let counter = 0;
    for (let i = 0; i < 8; i++) {
      this.list.push(this.sups[counter]);
      counter = counter === 1 ? 0 : 1;
    }
  }
}
