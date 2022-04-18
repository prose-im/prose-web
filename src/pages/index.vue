<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .p-index
    section-home-main(
      @action="onMainAction"
      class="p-index__main"
    )

    section-home-showcase(
      ref="showcase"
      class="p-index__showcase"
    )

    section-home-bulletpoints(
      :grid-padding-sides="gridPaddingSides"
      class="p-index__bulletpoints"
    )

    section-home-features(
      :grid-padding-sides="gridPaddingSides"
      class="p-index__features"
    )

    section-home-cost(
      class="p-index__cost"
    )

    section-home-data(
      class="p-index__data"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "IndexPage",
  layout: "landing",

  data() {
    return {
      // --> DATA <--

      gridPaddingSides: "36px"
    };
  },

  head: {
    title: "Prose – All of your workplace communication lives here"
  },

  methods: {
    // --> HELPERS <--

    /**
     * Scrolls to target
     * @public
     * @param  {object} ref
     * @return {undefined}
     */
    scrollToTarget(ref) {
      // Acquire header height
      const _headerElement = document.querySelector(".js-page-header");

      // Compute vertical offset
      const _verticalOffset =
        -1 * (_headerElement ? _headerElement.offsetHeight : 0);

      // Compute target vertical position
      const _verticalPosition =
        ref.$el.getBoundingClientRect().top +
        window.pageYOffset +
        _verticalOffset;

      // Scroll to vertical position
      window.scrollTo({ top: _verticalPosition, behavior: "smooth" });
    },

    // --> EVENT LISTENERS <--

    /**
     * Triggers when main action is clicked
     * @public
     * @param  {string} type
     * @return {undefined}
     */
    onMainAction(type) {
      switch (type) {
        case "next": {
          this.scrollToTarget(this.$refs.showcase);

          break;
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-index";

.p-index {
  #{$c}__bulletpoints,
  #{$c}__features,
  #{$c}__cost {
    border-bottom: 1px solid $color-border-secondary;
  }
}
</style>
