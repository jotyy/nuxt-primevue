import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@formkit/nuxt',
    MyModule
  ],
  primevue: {
    addPlugin: true,
    config: {
      ripple: false
    }
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: false,
    icons: {
      scale: 1.2
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50']
    ]
  },
  css: [
    'primevue/resources/primevue.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primeicons/primeicons.css',
    '@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss',
    '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss'
  ],
  build: {
    transpile: ['primevue']
  }
})
