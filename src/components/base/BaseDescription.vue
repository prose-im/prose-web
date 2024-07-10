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
    "c-base-description",
    "c-base-description--" + align,
    "c-base-description--" + tint
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDescription",

  props: {
    align: {
      type: String,
      default: "left",

      validator(x) {
        return ["left", "center", "right"].includes(x);
      }
    },

    tint: {
      type: String,
      default: "light",

      validator(x) {
        return ["light", "dark"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-description";

#{$c} {
  font-size: 17px;
  line-height: 28px;

  // --> ALIGNS <--

  &--left {
    text-align: left;
  }

  &--center {
    text-align: center;
  }

  &--right {
    text-align: right;
  }

  // --> TINTS <--

  &--light {
    color: $color-base-grey-dark;
  }

  &--dark {
    color: $color-base-black-mid;
  }
}
</style>
