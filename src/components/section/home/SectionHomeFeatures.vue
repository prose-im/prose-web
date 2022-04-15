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
    page-wrapper
      base-title(
        level="small"
        class="c-section-home-features__title"
      )
        | Every little thing, that makes your

        br

        //- TODO: circle effect
        | workspace more fun & productive.

      .c-section-home-features__actions
        //- TODO: target for this button?
        base-button(
          right-icon="arrow-right"
          size="large"
          class="c-section-home-features__action"
          bolder
        )
          | Start with Prose today
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeFeatures"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-features";

.c-section-home-features {
  background-color: $color-background-secondary;
  padding-top: 62px;
  padding-bottom: 50px;

  #{$c}__title {
    text-align: center;
  }

  #{$c}__actions {
    text-align: center;
    margin-top: 74px;
  }
}
</style>
