/*
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 */

/**************************************************************************
 * IMPORTS
 * ************************************************************************* */

// NPM
import { Crisp } from "crisp-sdk-web";

/**************************************************************************
 * EXPORTS
 * ************************************************************************* */

export default function ({ $config }, inject) {
  // Insert Crisp? (website identifier is defined, and chatbox feature is \
  //   enabled)
  if ($config.tokens.crisp_website_id && $config.features.chatbox === true) {
    Crisp.configure($config.tokens.crisp_website_id);
  }

  // Inject $crisp to context
  inject("crisp", Crisp);
}
