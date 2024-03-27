/*
 * This file is part of prose-web
 *
 * Copyright 2023, Prose Foundation
 */

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

export default ({ $config }, inject) => {
  // Inject filters in context
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
      const packageFileName = [
        [$config.downloads.app.package, version, architecture.short].join("_"),
        extension
      ].join(".");

      // Generate target URL to package for platform
      const packageFileUrl =
        `${$config.url.prose_files}/apps/versions/` +
        `${version}/${platform}/${architecture.full}/` +
        packageFileName;

      return {
        url: packageFileUrl,
        name: architecture.name
      };
    }
  });
};
