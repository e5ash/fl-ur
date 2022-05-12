// import titleCase from 'ap-style-title-case';

export default {
  name: 'Breadcrumb',
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []

      let mainEl = this.$router.getRoutes().find((el)=>{
        if (el.path == '/') return el;
      });
      crumbs.push(mainEl);

      let path = ''
      params.forEach((param) => {
        path = `${path}/${param}`;

        let el = this.$router.getRoutes().find((el)=>{
          if (el.path == path) return el;
        });

        if (el.name !== null) {
          crumbs.push(el)
        }
      })
      
      return crumbs;
    }
  }
}
