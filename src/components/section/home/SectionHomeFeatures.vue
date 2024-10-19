<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-home-features
  page-wrapper(
    class="c-section-home-features__inner"
  )
    base-title(
      class="c-section-home-features__title"
      tint="gradient"
      align="center"
      level="large"
    )
      | Prose makes

      br

      | teamwork easy

    .c-section-home-features__grid
      partial-common-feature(
        v-for="feature in features"
        :key="'feature_' + feature"
        :feature="feature"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeFeatures",

  data() {
    return {
      features: [
        "encrypt",
        "share",
        "history",
        "integration",
        "search",
        "calls"
      ]
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-features";

#{$c} {
  padding-bottom: 80px;
  position: relative;
  z-index: 1;

  #{$c}__title {
    margin-bottom: 64px;
  }

  #{$c}__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 32px;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    padding-bottom: 0px;

    #{$c}__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
