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
      "c-base-notice--shaky": shaky,
      "u-medium": emphasis
    }
  ]`
  :key="'notice_' + updateTime"
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
    },

    shaky: {
      type: Boolean,
      default: false
    },

    updateTime: {
      type: Number,
      default: 0
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-notice";

// VARIABLES
$animate-shake-base-depth: 4px;

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

  // --> BOOLEANS <--

  &--shaky {
    animation-name: c-page-entice-actions-shake;
    animation-duration: 900ms;
    animation-iteration-count: 1;
  }
}

// --> KEYFRAMES <--

@keyframes c-base-notice-shake {
  10%,
  90% {
    transform: translate3d((-1 * $animate-shake-base-depth), 0, 0);
  }

  20%,
  80% {
    transform: translate3d((2 * $animate-shake-base-depth), 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d((-4 * $animate-shake-base-depth), 0, 0);
  }

  40%,
  60% {
    transform: translate3d((4 * $animate-shake-base-depth), 0, 0);
  }
}
</style>
