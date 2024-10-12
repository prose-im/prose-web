<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-base-notice",
    "c-base-notice--" + color,
    {
      "u-medium": emphasis
    }
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseNotice",

  props: {
    color: {
      type: String,
      default: "yellow",

      validator(x) {
        return ["yellow", "red"].includes(x);
      }
    },

    emphasis: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-notice";

#{$c} {
  background-color: transparent;
  border: 1px solid $color-base-grey-light;
  color: $color-base-black-mid;
  font-size: 13.5px;
  line-height: 21px;
  letter-spacing: 0.1px;
  padding: 9px 22px;
  border-radius: 8px;

  // --> COLORS <--

  &--yellow {
    background-color: $color-base-yellow-light;
    border-color: $color-base-yellow-mid;
  }

  &--red {
    background-color: $color-base-red-light;
    border-color: rgba($color-base-red-mid, 0.4);
  }
}
</style>
