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
      class="p-changelog-year__main"
    )

    section-changelog-versions(
      class="p-changelog-year__versions"
    )

    section-changelog-background(
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

.p-changelog-year {
  #{$c}__main,
  #{$c}__versions {
    z-index: 1;
    position: relative;
  }

  #{$c}__versions {
    margin-top: 36px;
  }

  #{$c}__background {
    pointer-events: none;
  }
}
</style>
