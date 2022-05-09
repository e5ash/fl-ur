import { toLink } from "~/utils"

export default {
  name: 'Logo',
  props: {
    isIconHide: String,
    toMain: Boolean
  },
  methods: {
    toLink
  }
}
