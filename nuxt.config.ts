import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
