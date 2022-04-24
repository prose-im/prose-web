/*
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 */

/**************************************************************************
 * IMPORTS
 * ************************************************************************* */

// NODE
import fs from "fs";
import path from "path";

// NPM
import merge from "lodash.merge";

// CONFIGURATION
import * as configCommon from "./config/common";
import * as configProduction from "./config/production";
import * as configDevelopment from "./config/development";

// PACKAGE
import * as projectPackage from "./package.json";

/**************************************************************************
 * CONFIGURATION
 * ************************************************************************* */

const CONFIG = (function () {
  const _config = {};

  // Load common configuration
  merge(_config, configCommon);

  // Load configuration for environment
  if (process.env.NODE_ENV === "production") {
    merge(_config, configProduction);
  } else {
    merge(_config, configDevelopment);

    if (fs.existsSync(path.join(__dirname, "/config/local.json")) === true) {
      merge(_config, require("./config/local.json"));
    }
  }

  return _config;
})();

/**************************************************************************
 * EXPORTS
 * ************************************************************************* */

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global name: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-global-name
  globalName: "prose",

  // Server-Side Rendering: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-ssr
  ssr: true,

  // Telemetry: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-telemetry
  telemetry: false,

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
      },

      {
        name: "format-detection",
        content: "telephone=no"
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

  // Source directory: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-srcdir
  srcDir: "src/",

  // Directories: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-dir/
  dir: {
    assets: "assets",
    app: "app",
    layouts: "layouts",
    middleware: "middleware",
    store: "store",
    pages: "pages",
    static: "static"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["assets/stylesheets/all"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "plugins/crisp.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "components", pathPrefix: false }],

  // Modules for dev and build (recommended): \
  //   https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources",
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/robots", "@nuxtjs/sitemap"],

  // Router: https://nuxtjs.org/docs/configuration-glossary/configuration-router
  router: {
    base: "/",
    mode: "history",
    trailingSlash: true,
    prefetchLinks: false
  },

  // Loading: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-loading
  loading: {
    color: CONFIG.modifiers.announcement ? "#0f2a5b" : "#ff88a3",
    failedColor: "#db0031",
    height: "3px",
    throttle: 250,
    duration: 3000,
    continuous: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    publicPath: "/public/",

    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    }
  },

  // Public runtime configuration: \
  //   https://nuxtjs.org/docs/configuration-glossary/\
  //     configuration-runtime-config
  publicRuntimeConfig: {
    // Important: remap config as to strip any private token from there, as \
    //   eg. in the future there might be some private built-time token shared \
    //   in this configuration file, which we DO NOT want to leak on the Web.
    url: CONFIG.url,
    email: CONFIG.email,
    features: CONFIG.features,
    modifiers: CONFIG.modifiers,
    tokens: CONFIG.tokens.public,
    author: projectPackage.author
  },

  // Generate options: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-generate
  generate: {
    dir: "build",
    fallback: "404.html"
  },

  // CLI settings: \
  //   https://nuxtjs.org/docs/configuration-glossary/configuration-cli
  cli: {
    badgeMessages: [
      `${projectPackage.author.name} © ${new Date().getFullYear()}`
    ],

    bannerColor: "blueBright"
  },

  // (Module) Robots: https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: `${CONFIG.url.prose_web}/sitemap.xml`
  },

  // (Module) Sitemap: https://sitemap.nuxtjs.org/usage/sitemap
  sitemap: {
    hostname: CONFIG.url.prose_web
  },

  // (Module) Style Resources: \
  //   https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ["assets/stylesheets/variables/*", "assets/stylesheets/tools/*"]
  }
};
