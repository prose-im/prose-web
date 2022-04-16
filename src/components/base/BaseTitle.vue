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
    "c-base-title--" + tint,
    "c-base-title--" + align,
    "u-title",
    "u-" + weight,
    {
      "c-base-title--stroke": stroke
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
    },

    tint: {
      type: String,
      default: "dark",

      validator(x) {
        return ["light", "dark"].includes(x);
      }
    },

    align: {
      type: String,
      default: "left",

      validator(x) {
        return ["left", "center", "right"].includes(x);
      }
    },

    stroke: {
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
$c: ".c-base-title";

.c-base-title {
  // --> LEVELS <--

  &--small {
    font-size: 24px;
    line-height: 38px;
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

  // --> TINTS <--

  &--dark {
    color: $color-base-blue-dark;
  }

  &--light {
    color: $color-white;
  }

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

  // --> BOOLEANS <--

  &--stroke {
    paint-order: stroke;

    @include text-stroke(1.5px rgba($color-background-secondary, 0.7));
  }
}
</style>
