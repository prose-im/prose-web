/*
 * This file is part of prose-web
 *
 * Copyright 2023, Prose Foundation
 */

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";

/**************************************************************************
 * CONSTANTS
 * ************************************************************************* */

const FORMAT_DATE_AREA = "en-US";

const FORMAT_DATE_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

const FORMAT_DOWNLOAD_URL_FILE_SUFFIXES = {
  windows: ["en-US"]
};

/**************************************************************************
 * EXPORTS
 * ************************************************************************* */

export default defineNuxtPlugin(nuxtApp => {
  const _config = useRuntimeConfig(),
    _app = nuxtApp.vueApp;

  // Register $filters into Vue
  _app.config.globalProperties.$filters = {
    formatDate: dateString => {
      const _date = new Date(dateString);

      // Parsed date is valid? Format.
      if (isNaN(_date.getTime()) === false) {
        return _date.toLocaleDateString(FORMAT_DATE_AREA, FORMAT_DATE_OPTIONS);
      }

      // Parsed date is invalid, mirror raw date string
      return dateString;
    },

    formatDownloadUrl: (version, platform, extension, architecture) => {
      // Generate package file name
      // Notice: also concatenate with platform file name suffixes (if any)
      const _packageFileName = [
        []
          .concat(
            [_config.public.downloads.app.package, version, architecture.short],
            FORMAT_DOWNLOAD_URL_FILE_SUFFIXES[platform] || []
          )
          .join("_"),
        extension
      ].join(".");

      // Generate target URL to package for platform
      const _packageFileUrl =
        `${_config.public.url.prose_files}/apps/versions/` +
        `${version}/${platform}/${architecture.full}/` +
        _packageFileName;

      return {
        url: _packageFileUrl,
        name: architecture.name
      };
    }
  };
});
