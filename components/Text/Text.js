export default {
  name: 'Text',
  methods: {
    toActual() {
      let actual = document.querySelector('.actual');
      if (actual) {
        let y = actual.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({top: y, behavior: 'smooth'})
      }
    }
  }
}
