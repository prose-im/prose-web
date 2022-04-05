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
    "c-base-button",
    "c-base-button--" + size,
    {
      "c-base-button--emphasis": emphasis
    }
  ]`
)
  .c-base-button__inner
    div(
      :class=`[
        "c-base-button__label",
        {
          "u-medium": !emphasis,
          "u-bold": emphasis
        }
      ]`
    )
      slot

    .c-base-button__icon(
      v-if="rightIconHtml"
      v-html="rightIconHtml"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconArrow from "~/assets/images/components/base/BaseButton/icon-arrow.svg?raw";

export default {
  name: "BaseButton",

  props: {
    size: {
      type: String,
      default: "normal",

      validator(x) {
        return ["normal", "large"].includes(x);
      }
    },

    emphasis: {
      type: Boolean,
      default: false
    },

    rightIcon: {
      type: String,
      default: null,

      validator(x) {
        return ["arrow"].includes(x);
      }
    }
  },

  computed: {
    rightIconHtml() {
      switch (this.rightIcon) {
        case "arrow": {
          return ImageIconArrow;
        }

        default: {
          return null;
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-button";

// VARIABLES
$size-normal-padding-sides: 22px;
$size-large-padding-sides: 28px;

.c-base-button {
  display: inline-block;

  &:hover {
    #{$c}__inner {
      background-color: lighten($color-button-dark-normal, 5%);
    }
  }

  &:active {
    #{$c}__inner {
      background-color: lighten($color-button-dark-normal, 2%);
      transform: translateY(1px);
      box-shadow: 0 1px 1px 0 rgba($color-button-dark-normal, 0.3);
    }
  }

  #{$c}__inner {
    background-color: $color-button-dark-normal;
    font-size: 13.5px;
    padding-bottom: 2px;
    user-select: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 24px;
    box-shadow: 0 2px 1px 0 rgba($color-button-dark-normal, 0.12),
      inset 0 1px 0 0 rgba($color-white, 0.22);
    transition: all 100ms linear;
    transition-property: transform, box-shadow, background-color;

    #{$c}__label {
      color: $color-white;
      flex: 1;
    }

    #{$c}__icon {
      margin-bottom: -2px;
      margin-left: 9px;
      margin-right: -3px;
      flex: 0 1 auto;

      svg {
        height: 9px;
      }
    }
  }

  // --> SIZES <--

  &--normal {
    #{$c}__inner {
      line-height: 36px;
      padding-left: $size-normal-padding-sides;
      padding-right: $size-normal-padding-sides;
    }
  }

  &--large {
    #{$c}__inner {
      line-height: 44px;
      padding-left: $size-large-padding-sides;
      padding-right: $size-large-padding-sides;
    }
  }

  // --> BOOLEANS <--

  &--emphasis {
    #{$c}__inner {
      background-color: $color-button-dark-emphasis;
      box-shadow: 0 2px 1px 0 rgba($color-button-dark-emphasis, 0.12);
    }

    &:hover {
      #{$c}__inner {
        background-color: lighten($color-button-dark-emphasis, 4%);
      }
    }

    &:active {
      #{$c}__inner {
        background-color: lighten($color-button-dark-emphasis, 2%);
        box-shadow: 0 1px 1px 0 rgba($color-button-dark-emphasis, 0.3);
      }
    }
  }
}
</style>
