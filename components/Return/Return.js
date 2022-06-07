import { toLink } from "~/utils";

export default {
  name: 'Return',
  methods: {
    toLink,
    goBack() {
      this.$router.go(-1);
      // this.$router.back();
      // console.log(this.$route);
    }
  },
  props: {
    share: Boolean
  }
}
