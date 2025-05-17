/*
 * This file is part of prose-web
 *
 * Copyright 2025, Prose Foundation
 */

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import SimpleAnalytics from "simple-analytics-vue";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export default defineNuxtPlugin(nuxtApp => {
  const _config = useRuntimeConfig(),
    _app = nuxtApp.vueApp;

  // Register Simple Analytics
  _app.use(SimpleAnalytics, {
    skip: _config.public.features.analytics !== true
  });
});
