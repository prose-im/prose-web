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

export default (_, inject) => {
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
    }
  });
};
