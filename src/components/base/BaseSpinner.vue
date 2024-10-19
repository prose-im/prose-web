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
    "c-base-spinner",
    "c-base-spinner--" + color,
    "c-base-spinner--" + speed
  ]`
)
  span.c-base-spinner__icon(
    :style="iconStyle"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseSpinner",

  props: {
    color: {
      type: String,
      default: "black",

      validator(x) {
        return ["black", "white", "grey", "blue"].includes(x);
      }
    },

    speed: {
      type: String,
      default: "normal",

      validator(x) {
        return ["fast", "normal", "slow"].includes(x);
      }
    },

    size: {
      type: String,
      default: "16px"
    },

    borderWidth: {
      type: String,
      default: "2px"
    }
  },

  computed: {
    iconStyle() {
      return {
        height: this.size,
        width: this.size,
        borderWidth: this.borderWidth
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-spinner";

// VARIABLES
$colors: (
  "black": $color-black,
  "white": $color-white,
  "grey": $color-base-grey-dark,
  "blue": $color-base-blue-dark
);

$speeds: (
  "fast": 500ms,
  "normal": 1000ms,
  "slow": 1500ms
);

#{$c} {
  line-height: 0;
  text-align: center;

  #{$c}__icon {
    background: transparent;
    border-style: solid;
    display: inline-block;
    border-radius: 100%;
    animation: c-base-spinner-icon-spin 0s 0s infinite linear;
    animation-fill-mode: both;
  }

  // --> COLORS <--

  @each $color, $hex in $colors {
    &--#{$color} {
      #{$c}__icon {
        border-color: $hex $hex transparent;
      }
    }
  }

  // --> SPEEDS <--

  @each $speed, $duration in $speeds {
    &--#{$speed} {
      #{$c}__icon {
        animation-duration: $duration;
      }
    }
  }
}

// --> KEYFRAMES <--

@keyframes c-base-spinner-icon-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
