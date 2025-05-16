import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['shadcn-nuxt', '@nuxt/fonts', '@nuxt/image'],
  devServer: {
    port: 3011,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  components: [
    '~/components',
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
    {
      path: '~/components/marketing',
      pathPrefix: false,
    },
  ],
})
