/*
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 */

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import { Crisp } from "crisp-sdk-web";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export default defineNuxtPlugin(nuxtApp => {
  const _config = useRuntimeConfig(),
    _app = nuxtApp.vueApp;

  // Insert Crisp? (website identifier is defined, and chatbox feature is \
  //   enabled)
  if (
    _config.public.tokens.crisp_website_id &&
    _config.public.features.chatbox === true
  ) {
    Crisp.configure(_config.public.tokens.crisp_website_id);
  }

  // Register $crisp into Vue
  _app.config.globalProperties.$crisp = Crisp;
});
