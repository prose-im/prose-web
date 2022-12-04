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
        return ["mini", "small", "normal", "large"].includes(x);
      }
    },

    weight: {
      type: String,
      default: "medium",

      validator(x) {
        return ["regular", "medium", "bold"].includes(x);
      }
    },

    tint: {
      type: String,
      default: "dark",

      validator(x) {
        return ["light", "dark", "gradient"].includes(x);
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

// VARIABLES
$stroke-size: 2px;
$stroke-color: $color-background-secondary;

.c-base-title {
  // --> LEVELS <--

  &--mini {
    font-size: 26px;
    line-height: 26px;
    letter-spacing: -0.015em;
  }

  &--small {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.03em;
  }

  &--normal {
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.03em;
  }

  &--large {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -0.03em;
  }

  // --> TINTS <--

  &--dark {
    color: $color-base-blue-dark;
  }

  &--light {
    color: $color-white;
  }

  &--gradient {
    background: -webkit-linear-gradient(96.08deg, #06005E 18.95%, #3458AD 86.78%, #518EEA 116.32%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 0.2em;
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
    // Notice: this is a hack to visually emulate a 'text-stroke', as Chrome \
    //   does not yet support 'paint-order', which leads 'text-stroke' to \
    //   display with a broken style. All other browsers render this fine \
    //   except Chrome (as of version 102).
    //
    // Equivalent of:
    //   - paint-order: stroke;
    //   - @include text-stroke($stroke-size rgba($stroke-color, 0.75));
    text-shadow: 0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color,
      0 0 $stroke-size $stroke-color, 0 0 $stroke-size $stroke-color;
  }
}
</style>
