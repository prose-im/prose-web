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
    p.c-page-main-title__overline.u-medium(
      v-if="$slots.overline"
    )
      slot(
        name="overline"
      )

    base-descripted-title(
      :align="align"
      class="c-page-main-title__title"
    )
      template(
        v-slot:title
      )
        slot(
          name="title"
        )

      template(
        v-slot:description
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

    .c-page-main-title__waves(
      v-if="$slots.waves"
    )
      slot(
        name="waves"
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

#{$c} {
  #{$c}__wrapper {
    position: relative;
  }

  #{$c}__title,
  #{$c}__action {
    position: relative;
    z-index: 1;
  }

  #{$c}__overline {
    color: $color-base-grey-dark;
    margin-bottom: 20px;
  }

  #{$c}__action {
    margin-top: 40px;
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
