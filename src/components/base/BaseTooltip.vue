<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
span(
  :class=`[
    "c-base-tooltip",
    "c-base-tooltip--" + direction,
    "c-base-tooltip--" + align
  ]`
)
  span.c-base-tooltip__value
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseTooltip",

  props: {
    align: {
      type: String,
      default: "center",

      validator(x) {
        return ["left"].includes(x);
      }
    },

    direction: {
      type: String,
      default: "top",

      validator(x) {
        return ["top"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-tooltip";

// VARIABLES
$tooltip-area-width: 1000px;
$tooltip-spacing-top-bottom: 7px;
$tooltip-spacing-left-right: -2px;
$tooltip-translate-offset-vertical: 2px;

.c-base-tooltip {
  font-weight: initial;
  line-height: 19px;
  pointer-events: none;
  user-select: none;
  width: $tooltip-area-width;
  opacity: 0;
  display: block;
  visibility: hidden;
  position: absolute;
  z-index: 1000;
  transition: all 150ms linear;
  transition-property: opacity, transform;

  #{$c}__value {
    background-color: rgba($color-white, 0.9);
    backdrop-filter: blur(4px);
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.25px;
    padding: 6px 12px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 0 3px 6px 0 rgba($color-black, 0.1);

    &,
    a {
      color: $color-base-black-mid;
    }

    a {
      text-decoration: underline;
    }
  }

  // --> DIRECTIONS <--

  &--top {
    bottom: calc(100% + $tooltip-spacing-top-bottom);
    transform: translateY(-1 * $tooltip-translate-offset-vertical);
  }

  // --> ALIGNS <--

  &--left {
    left: $tooltip-spacing-left-right;
    text-align: left;
  }
}

// --> PARENTS <--

.u-has-tooltip {
  &:hover {
    #{$c} {
      visibility: visible;
      opacity: 1;

      &--top {
        transform: translateY(0);
      }
    }
  }
}
</style>
