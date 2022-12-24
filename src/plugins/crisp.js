/*
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 */

export default function ({ $config }) {
  // Important: ALWAYS define $crisp, as the Crisp Chatbox SDK might be used \
  //   here and there in the website code.
  window.$crisp = [];

  // Insert Crisp? (website identifier is defined, and chatbox feature is \
  //   enabled)
  if ($config.tokens.crisp_website_id && $config.features.chatbox === true) {
    window.CRISP_WEBSITE_ID = $config.tokens.crisp_website_id;

    (function () {
      const _script = document.createElement("script");

      _script.src = `${$config.url.crisp_client}/l.js`;
      _script.defer = true;

      document.getElementsByTagName("head")[0].appendChild(_script);
    })();
  }
}
