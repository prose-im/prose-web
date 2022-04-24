<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .p-changelog-year
    section-changelog-main(
      :years="years"
      :active-year="year"
      :sidebar-width="sidebarWidth"
      class="p-changelog-year__main"
      content-class="p-changelog-year__main-content"
    )

    section-changelog-versions(
      :versions="changes.versions"
      :sidebar-width="sidebarWidth"
      class="p-changelog-year__versions"
      content-class="p-changelog-year__versions-content"
    )

    section-changelog-background(
      :sidebar-width="sidebarWidth"
      class="p-changelog-year__background"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
// TODO: make it dynamic
const YEARS = ["2022", "2021", "2020"];

// INSTANCES
const YEAR_REGEX = /^([12][0-9]{3})$/;

export default {
  name: "ChangelogYearPage",
  layout: "simple",

  validate({ params }) {
    // Year is set, but not valid?
    if (params.year && YEAR_REGEX.test(params.year) === false) {
      return false;
    }

    // Page parameters are valid
    return true;
  },

  async asyncData({ $content, params, error }) {
    // Important: fallback on non-existing year '0000' if no first year is \
    //   available, that way 404 errors are generated properly for the root \
    //   changelog page.
    const _year = params.year || YEARS[0] || "0000";

    const _changes = await $content("changelog", _year)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Year not found" });
      });

    return { year: _year, changes: _changes };
  },

  data() {
    return {
      // --> DATA <--

      sidebarWidth: "185px",

      years: YEARS
    };
  },

  head() {
    return {
      title: `Prose version history (${this.year || "Latest"})`
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-changelog-year";

// VARIABLES
$content-padding-left: 70px;

.p-changelog-year {
  #{$c}__main,
  #{$c}__versions {
    z-index: 1;
    position: relative;
  }

  #{$c}__main {
    #{$c}__main-content {
      padding-left: $content-padding-left;
    }
  }

  #{$c}__versions {
    margin-top: 36px;

    #{$c}__versions-content {
      padding-left: $content-padding-left;
    }
  }

  #{$c}__background {
    pointer-events: none;
  }
}
</style>
