<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  div(
    :class=`[
      "c-page-main-title",
      "c-page-main-title--" + align
    ]`
  )
    page-wrapper(
      class="c-page-main-title__wrapper"
    )
      base-descripted-title(
        :align="align"
        class="c-page-main-title__title"
      )
        slot(
          slot="title"
          name="title"
        )

        slot(
          slot="description"
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
  name: "PageMainTitle",

  props: {
    align: {
      type: String,
      default: "center",

      validator(x) {
        return ["left", "center", "right"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-main-title";

.c-page-main-title {
  #{$c}__wrapper {
    position: relative;
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

  // ALIGNS

  &--center {
    text-align: center;
  }

  &--left {
    text-align: left;
  }

  &--right {
    text-align: right;
  }
}
</style>
