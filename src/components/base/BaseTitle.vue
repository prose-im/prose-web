<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
h1(
  :class=`[
    "c-base-title",
    "c-base-title--" + level,
    "u-title",
    "u-" + weight
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseTitle",

  props: {
    level: {
      type: String,
      default: "normal",

      validator(x) {
        return ["small", "normal", "large"].includes(x);
      }
    },

    weight: {
      type: String,
      default: "bold",

      validator(x) {
        return ["regular", "medium", "bold"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-title";

.c-base-title {
  color: $color-base-blue-dark;

  // --> LEVELS <--

  &--small {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }

  &--normal {
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.15px;
  }

  &--large {
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -0.2px;
  }
}
</style>
