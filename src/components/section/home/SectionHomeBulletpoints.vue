<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-bulletpoints
    page-wrapper
      base-title(
        level="small"
        class="c-section-home-bulletpoints__title"
      )
        | Here are the things that make Prose

        br

        //- TODO: circle effect
        | special versus others.

      .c-section-home-bulletpoints__grid

      .c-section-home-bulletpoints__actions
        //- TODO: target for this button?
        base-button(
          right-icon="arrow-right"
          tint="light"
          size="large"
          class="c-section-home-bulletpoints__action"
        )
          | Read more about what makes Prose different
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeBulletpoints"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-bulletpoints";

.c-section-home-bulletpoints {
  padding-top: 65px;
  padding-bottom: 70px;

  #{$c}__title {
    text-align: center;
  }

  #{$c}__grid {
    // TODO
  }

  #{$c}__actions {
    text-align: center;
    margin-top: 60px;
  }
}
</style>
