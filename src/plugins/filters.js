/*
 * This file is part of prose-web
 *
 * Copyright 2023, Prose Foundation
 */

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import { defineNuxtPlugin, useRuntimeConfig, inject } from "#imports";

/**************************************************************************
 * CONSTANTS
 * ************************************************************************* */

const FORMAT_DATE_AREA = "en-US";

const FORMAT_DATE_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

/**************************************************************************
 * EXPORTS
 * ************************************************************************* */

export default defineNuxtPlugin(() => {
  const _config = useRuntimeConfig();

  // Inject $filters to context
  inject("filters", {
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
      const _packageFileName = [
        [_config.downloads.app.package, version, architecture.short].join("_"),
        extension
      ].join(".");

      // Generate target URL to package for platform
      const _packageFileUrl =
        `${_config.url.prose_files}/apps/versions/` +
        `${version}/${platform}/${architecture.full}/` +
        _packageFileName;

      return {
        url: _packageFileUrl,
        name: architecture.name
      };
    }
  });
});
