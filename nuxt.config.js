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
import { defineNuxtConfig } from "nuxt/config";
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

export default defineNuxtConfig({
  // Server-Side Rendering (SSG)
  ssr: true,
  target: "static",

  // Telemetry
  telemetry: false,

  // General Site Configuration
  site: {
    url: CONFIG.url.prose_web
  },

  // Source Directory
  srcDir: "src/",
  publicDir: "public/",

  // Directories
  dir: {
    assets: "assets",
    composables: "composables",
    layouts: "layouts",
    middleware: "middleware",
    modules: "modules",
    pages: "pages",
    plugins: "plugins",
    public: "../public",
    static: "static"
  },

  // CSS Files
  css: ["@/assets/stylesheets/all.scss"],

  // Auto-import all components as global
  components: [{ path: "components", pathPrefix: false }],

  // Modules
  modules: ["@nuxt/content", "@nuxtjs/robots", "@nuxtjs/sitemap"],

  // Preprocessing
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@use "@/assets/stylesheets/variables/all.scss" as *;',
            '@use "@/assets/stylesheets/tools/all.scss" as *;'
          ].join("\n")
        }
      }
    }
  },

  // Nitro Configuration
  nitro: {
    publicDir: "public",

    output: {
      dir: "build",
      serverDir: "build/server",
      publicDir: "build/public"
    }
  },

  // App Configuration
  app: {
    rootId: "__prose",
    baseURL: "/",
    buildAssetsDir: "/_prose/",

    // Global page headers
    head: {
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
        },

        {
          hid: "description",
          name: "description",
          content:
            "Prose is a decentralized, open-source and native workplace " +
            "communication platform."
        },

        {
          hid: "og-title",
          property: "og:title",
          content: "Prose – All of your workplace communication lives here"
        },

        {
          hid: "og-description",
          property: "og:description",
          content:
            "Prose is a decentralized, open-source and native workplace " +
            "communication platform."
        },

        {
          hid: "og-image",
          property: "og:image",
          content: `${CONFIG.url.prose_web}/opengraph/prose.jpg`
        },

        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Prose – All of your workplace communication lives here"
        },

        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Prose is a decentralized, open-source and native workplace " +
            "communication platform."
        },

        {
          hid: "twitter-image",
          name: "twitter:image",
          content: `${CONFIG.url.prose_web}/opengraph/prose.jpg`
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
    }
  },

  // Runtime Configuration
  runtimeConfig: {
    public: {
      // Important: remap config as to strip any private token from there, as \
      //   eg. in the future there might be some private built-time token \
      //   shared in this configuration file, which we DO NOT want to leak on \
      //   the Web.
      url: CONFIG.url,
      social: CONFIG.social,
      email: CONFIG.email,
      downloads: CONFIG.downloads,
      features: CONFIG.features,
      modifiers: CONFIG.modifiers,
      tokens: CONFIG.tokens.public,
      author: projectPackage.author
    }
  },

  // Sitemap Configuration
  sitemap: {
    hostname: CONFIG.url.prose_web
  },

  // Robots Configuration
  robots: {
    rules: {
      UserAgent: "*",
      Allow: "/",
      Sitemap: `${CONFIG.url.prose_web}/sitemap.xml`
    }
  },

  // Dev Tools Configuration
  devtools: {
    enabled: true
  }
});
