import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: [
    { path: '~/components', extensions: ['vue'] }
  ],
  alias: {
    "~styles": "/assets/styles",
    "~images": "/assets/images",
  },
  css: [
    '@/assets/styles/main.scss'
  ],
})
