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
  @mouseover="onMouseOver"
  @mouseleave="onMouseLeave"
  :class=`[
    "c-base-tooltip",
    "c-base-tooltip--" + direction,
    "c-base-tooltip--" + align,
    {
      "c-base-tooltip--visible": isVisible
    }
  ]`
)
  .c-base-tooltip__overlay
    .c-base-tooltip__value
      slot(
        name="tooltip"
      )

  .c-base-tooltip__wrapped(
    @click="onClick"
  )
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const MOUSE_LEAVE_APPLY_DELAY = 500; // 1/2 second

export default {
  name: "BaseTooltip",

  props: {
    align: {
      type: String,
      default: "center",

      validator(x) {
        return ["left", "center"].includes(x);
      }
    },

    direction: {
      type: String,
      default: "top",

      validator(x) {
        return ["top"].includes(x);
      }
    }
  },

  data() {
    return {
      // --> STATE <--

      mouseLeaveApplyTimeout: null,

      // --> DATA <--

      isVisible: false
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when tooltip is clicked
     * @public
     * @return {undefined}
     */
    onClick() {
      // Toggle visibility
      this.isVisible = !this.isVisible;
    },

    /**
     * Triggers when mouse is over
     * @public
     * @return {undefined}
     */
    onMouseOver() {
      // Any leave timeout set? Cancel it first?
      if (this.mouseLeaveApplyTimeout !== null) {
        clearTimeout(this.mouseLeaveApplyTimeout);

        this.mouseLeaveApplyTimeout = null;
      }

      this.isVisible = true;
    },

    /**
     * Triggers when mouse leaves
     * @public
     * @return {undefined}
     */
    onMouseLeave() {
      if (this.mouseLeaveApplyTimeout === null) {
        this.mouseLeaveApplyTimeout = setTimeout(() => {
          this.mouseLeaveApplyTimeout = null;

          this.isVisible = false;
        }, MOUSE_LEAVE_APPLY_DELAY);
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
  display: inline-block;
  cursor: context-menu;
  position: relative;

  #{$c}__overlay {
    font-weight: initial;
    line-height: 19px;
    user-select: none;
    cursor: default;
    width: $tooltip-area-width;
    opacity: 0;
    display: block;
    visibility: hidden;
    position: absolute;
    z-index: 1000;
    transition: all 150ms linear;
    transition-property: opacity, transform;
  }

  #{$c}__value {
    background-color: rgba($color-white, 0.9);
    backdrop-filter: blur(4px);
    font-size: 12px;
    user-select: none;
    text-align: center;
    letter-spacing: 0.25px;
    padding: 6px 12px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 0 3px 6px 0 rgba($color-black, 0.1);

    &,
    a {
      color: $color-black;
    }

    a {
      text-decoration: underline;
    }
  }

  #{$c}__wrapped {
    display: inline-block;
  }

  // --> DIRECTIONS <--

  &--top {
    #{$c}__overlay {
      padding-bottom: $tooltip-spacing-top-bottom;
      bottom: 100%;
      transform: translateY(-1 * $tooltip-translate-offset-vertical);
    }
  }

  // --> ALIGNS <--

  &--left {
    #{$c}__overlay {
      left: $tooltip-spacing-left-right;
      text-align: left;
    }
  }

  &--center {
    #{$c}__overlay {
      left: 50%;
      margin-left: (-1 * ($tooltip-area-width / 2));
      text-align: center;
    }
  }

  // --> BOOLEANS <--

  &--visible {
    #{$c}__overlay {
      visibility: visible;
      opacity: 1;
    }

    &#{$c}--top {
      #{$c}__overlay {
        transform: translateY(0);
      }
    }
  }
}
</style>
