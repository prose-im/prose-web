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
      :active-year="year"
      :sidebar-width="sidebarWidth"
      class="p-changelog-year__main"
      content-class="p-changelog-year__main-content"
    )

    section-changelog-versions(
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

  asyncData({ params }) {
    return { year: params.year };
  },

  data() {
    return {
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
