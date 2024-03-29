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
    sidebar-class="p-changelog-year__main-sidebar"
    content-class="p-changelog-year__main-content"
  )

  section-changelog-versions(
    :versions="changes.versions"
    :sidebar-width="sidebarWidth"
    class="p-changelog-year__versions"
    sidebar-class="p-changelog-year__versions-sidebar"
    content-class="p-changelog-year__versions-content"
  )

  section-changelog-background(
    :sidebar-width="sidebarWidth"
    class="p-changelog-year__background"
    sidebar-class="p-changelog-year__background-sidebar"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
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
    // Acquire all available content years
    const _years = (
      await $content("changelog", {
        deep: true
      })
        .only(["slug"])
        .fetch()
    )
      .map(yearData => {
        return yearData.slug;
      })
      .sort()
      .reverse();

    // Important: fallback on non-existing year '0000' if no first year is \
    //   available, that way 404 errors are generated properly for the root \
    //   changelog page.
    const _year = params.year || _years[0] || "0000";

    // Fetch changes for selected year
    const _changes = await $content("changelog", _year)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Year not found" });
      });

    return { year: _year, years: _years, changes: _changes };
  },

  data() {
    return {
      // --> DATA <--

      sidebarWidth: "185px"
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
$content-padding-left-default: 70px;
$content-padding-left-medium: 52px;
$content-padding-left-small: 42px;
$content-padding-left-tiny: 28px;
$content-padding-left-lilliput: 22px;

.p-changelog-year {
  #{$c}__main,
  #{$c}__versions {
    z-index: 1;
    position: relative;
  }

  #{$c}__main #{$c}__main-content,
  #{$c}__versions #{$c}__versions-content {
    padding-left: $content-padding-left-default;
  }

  #{$c}__versions {
    margin-top: 36px;
  }

  #{$c}__background {
    pointer-events: none;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .p-changelog-year {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-medium;
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  .p-changelog-year {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-small;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .p-changelog-year {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-tiny;
    }

    #{$c}__main #{$c}__main-sidebar,
    #{$c}__versions #{$c}__versions-sidebar,
    #{$c}__background #{$c}__background-sidebar {
      max-width: 150px;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .p-changelog-year {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-lilliput;
    }

    #{$c}__main #{$c}__main-sidebar,
    #{$c}__versions #{$c}__versions-sidebar,
    #{$c}__background #{$c}__background-sidebar {
      max-width: 92px;
    }
  }
}
</style>
