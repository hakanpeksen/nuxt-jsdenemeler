const path = require('path')

import { I18N } from './config'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: ['assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/font-awesome'
    },
    {
      src: '~/plugins/vue-notification',
      ssr: false
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-i18n', I18N],
    'nuxt-purgecss',
    '@nuxtjs/tailwindcss'
  ],
  purge: {
    //enable remove unused CSS only in production
    enabled: process.env.NODE_ENV === 'production',
    //any file that may contain the reference of CSS styles by class name.
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** PostCSS setup
     */
    // postcss: {
    //   // Add plugin names as key and arguments as value
    //   // Disable a plugin by passing false as value
    //   plugins: {
    //     'postcss-url': {},
    //     tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
    //     cssnano: {
    //       preset: 'default',
    //       discardComments: { removeAll: true },
    //       zIndex: false
    //     }
    //   },
    //   // Change the postcss-preset-env settings
    //   preset: {
    //     stage: 1
    //   }
    // },
    /*
     ** You can extend webpack config here
     */
    extend() {}
  }
}
