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
      class="p-index__main"
    )

    section-home-showcase(
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
