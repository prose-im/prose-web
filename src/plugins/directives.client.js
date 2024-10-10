/*
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 */

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import VueConfetti from "vue-confetti";

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export default defineNuxtPlugin(nuxtApp => {
  const _app = nuxtApp.vueApp;

  // Register all Vue directives
  _app.use(VueConfetti);
});
