export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global name: https://nuxtjs.org/docs/configuration-glossary/configuration-global-name
  globalName: "prose",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "prose-web",

    htmlAttrs: {
      lang: "en"
    },

    meta: [
      {
        charset: "utf-8"
      },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],

    link: [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicons/favicon.ico"
      },

      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/favicon.png"
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/favicons/favicon-512x512.png"
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "256x256",
        href: "/favicons/favicon-256x256.png"
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicons/favicon-192x192.png"
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "144x144",
        href: "/favicons/favicon-144x144.png"
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: "/favicons/favicon-128x128.png"
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png"
      }
    ]
  },

  // Directories: https://nuxtjs.org/docs/configuration-glossary/configuration-dir/
  dir: {
    assets: "src/assets",
    app: "src/app",
    layouts: "src/layouts",
    middleware: "src/middleware",
    store: "src/store",
    pages: "src/pages",
    static: "public"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/src/assets/stylesheets/generic/all"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~/src/components"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,

    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    }
  },

  // Generate options: https://nuxtjs.org/docs/configuration-glossary/configuration-generate
  generate: {
    dir: "build",
    fallback: "404.html"
  },

  // CLI settings: https://nuxtjs.org/docs/configuration-glossary/configuration-cli
  cli: {
    badgeMessages: ["© The Prose Foundation"],
    bannerColor: "blueBright"
  }
};
