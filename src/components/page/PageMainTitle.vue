<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-page-main-title
    page-wrapper(
      class="c-page-main-title__wrapper"
    )
      base-title(
        class="c-page-main-title__title"
      )
        slot(
          name="title"
        )

      base-description(
        class="c-page-main-title__description"
      )
        slot(
          name="description"
        )

      .c-page-main-title__action(
        v-if="$slots.action"
      )
        slot(
          name="action"
        )

      .c-page-main-title__rasters(
        v-if="$slots.rasters"
      )
        slot(
          name="rasters"
        )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageMainTitle"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-main-title";

.c-page-main-title {
  text-align: center;

  #{$c}__wrapper {
    position: relative;
  }

  #{$c}__description {
    margin-top: 22px;
  }

  #{$c}__action {
    margin-top: 40px;
  }

  #{$c}__rasters {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
