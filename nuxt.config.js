export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Rolling Woods Property Owners Association',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'This site has been established to facilitate communications among the board and membership of the Rolling Woods Property Owners Association.',
      },
      {
        hid: 'image',
        name: 'image',
        content: 'https://rwpoa.org/lake.jpg',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-130438116-4',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  bootstrapVue: {
    // bootstrapCSS: false, // Or `css: false`
    // bootstrapVueCSS: false, // Or `bvCSS: false`,
    components: ['BContainer', 'BImg', 'BNavbar', 'BNavbarBrand'],
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
  },
}
