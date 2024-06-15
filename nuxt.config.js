export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '2Day Laser & Skin Care',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}, {
      hid: 'description', name: 'description', content: ''
    }, {name: 'format-detection', content: 'telephone=no'},],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/logo.png'}],
  }, ssr: true, // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: 'plugins/owl.js', ssr: false}, {src: "~/plugins/disableLogs.js"}, {
    src: '~/plugins/toolTip.js', ssr: false,
  }, {src: '~/plugins/vue2-editor.js', ssr: false}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true, // middleware: ["checkUser"],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/image'], build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      }, scss: {
        implementation: require('sass'),
      },
    }, extend(config, {isClient}) {
      if (isClient) {
        config.devtool = false; // Disable source maps
      }
    },
  }, // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', '@nuxtjs/tailwindcss'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  }, routeRules: {
    // Homepage pre-rendered at build time
    '/bodyArea/**': {swr: 1}, '/singleBlog/**': {swr: 1}, '/singleService/**': {swr: 1},
  },

  generate: {
    fallback: true,
  },
}
