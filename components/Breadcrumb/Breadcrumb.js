export default {
  name: 'Breadcrumb',
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/');
      const crumbs = []

      let mainEl = this.$router.getRoutes().find((el)=>{
        if (el.path == '/') return el;
      });
      crumbs.push(mainEl);

      let path = '';

      params.forEach((param, index) => {
        path = `${path}/${param}`;
        let el = '';

        if (this.$route.name == 'catalog-id' && index == params.length - 1) {
          el = this.$router.getRoutes().find((el)=>{
            if (el.name == this.$route.name) return el;
          });
        } else {
          el = this.$router.getRoutes().find((el)=>{
            if (el.path == path) return el;
          });
        }

        if (el?.name !== null) {
          crumbs.push(el)
        }
      })
      
      return crumbs;
    }
  }
}
