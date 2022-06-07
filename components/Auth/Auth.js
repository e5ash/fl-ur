import { toLink } from '~/utils';

export default {
  name: 'Auth',
  data() {
    return {
      fields: {
        email: '',
        phone: '',
        password: '',
      },
      policy: {
        value: 'yes',
        group: 'policy',
        checked: true,
      }
    }
  },
  methods: {
    toLink
  },
  props: {
    title: String,
    text: String,
    reg: Boolean,
  }
}
