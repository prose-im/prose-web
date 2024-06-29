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
  @click="onClick"
  :class=`[
    "c-base-button",
    "c-base-button--" + size,
    "c-base-button--" + tint,
    {
      "c-base-button--darker": darker,
      "c-base-button--reverse": reverse,
      ["c-base-button--" + rightIcon]: rightIcon
    }
  ]`
)
  .c-base-button__inner
    div(
      :class=`[
        "c-base-button__label",
        {
          "u-medium": !bolder,
          "u-bold": bolder
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
import ImageIconArrowRight from "~/assets/images/components/base/BaseButton/icon-arrow-right.svg?raw";
import ImageIconArrowDown from "~/assets/images/components/base/BaseButton/icon-arrow-down.svg?raw";
import ImageIconChevronDown from "~/assets/images/components/base/BaseButton/icon-chevron-down.svg?raw";

export default {
  name: "BaseButton",

  props: {
    tint: {
      type: String,
      default: "dark",

      validator(x) {
        return ["light", "dark", "gradient", "fancy", "none"].includes(x);
      }
    },

    size: {
      type: String,
      default: "normal",

      validator(x) {
        return ["simple", "normal", "large", "huge"].includes(x);
      }
    },

    bolder: {
      type: Boolean,
      default: false
    },

    darker: {
      type: Boolean,
      default: false
    },

    reverse: {
      type: Boolean,
      default: false
    },

    rightIcon: {
      type: String,
      default: null,

      validator(x) {
        return ["arrow-right", "arrow-down", "chevron-down"].includes(x);
      }
    }
  },

  emits: ["click"],

  computed: {
    rightIconHtml() {
      switch (this.rightIcon) {
        case "arrow-right": {
          return ImageIconArrowRight;
        }

        case "arrow-down": {
          return ImageIconArrowDown;
        }

        case "chevron-down": {
          return ImageIconChevronDown;
        }

        default: {
          return null;
        }
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers button is clicked
     * @public
     * @param  {object} event
     * @return {undefined}
     */
    onClick(event) {
      // Re-emit click event
      this.$emit("click", event);
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
$size-huge-padding-sides: 38px;

.c-base-button {
  display: inline-block;

  &:active {
    #{$c}__inner {
      transform: translateY(1px);
    }
  }

  #{$c}__inner {
    text-align: center;
    padding-bottom: 2px;
    user-select: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 24px;
    transition: all 100ms linear;
    transition-property: transform, box-shadow, background-color;

    #{$c}__label {
      flex: 1;
    }

    #{$c}__icon {
      margin-left: 9px;
      margin-right: -2px;
      flex: 0 1 auto;

      svg {
        width: auto;
        height: 12px;
      }
    }
  }

  // --> TINTS <--

  &--none {
    #{$c}__inner {
      #{$c}__label {
        color: $color-base-blue-dark;
      }

      #{$c}__icon {
        fill: $color-base-blue-dark;
      }
    }
  }

  &--dark {
    #{$c}__inner {
      background-color: $color-button-dark-normal;
      box-shadow: 0 2px 1px 0 rgba($color-button-dark-normal, 0.12),
        inset 0 1px 0 0 rgba($color-white, 0.22);

      #{$c}__label {
        color: $color-white;
      }

      #{$c}__icon {
        fill: $color-white;
      }
    }

    &:hover {
      #{$c}__inner {
        background-color: lighten($color-button-dark-normal, 6%);
      }
    }

    &:active {
      #{$c}__inner {
        background-color: lighten($color-button-dark-normal, 2%);
        box-shadow: 0 1px 1px 0 rgba($color-button-dark-normal, 0.3);
      }
    }
  }

  &--light {
    #{$c}__inner {
      background-color: $color-button-light-normal;

      #{$c}__label {
        color: $color-base-blue-dark;
      }

      #{$c}__icon {
        fill: $color-base-blue-dark;
      }
    }

    &:hover {
      #{$c}__inner {
        background-color: darken($color-button-light-normal, 100%);
      }
    }

    &:active {
      #{$c}__inner {
        background-color: darken($color-button-light-normal, 50%);
      }
    }
  }

  &--gradient {
    #{$c}__inner {
      background: linear-gradient(
        328.77deg,
        #06005e -151.85%,
        #3458ad -117.66%,
        #518eea -70.44%,
        #5b6bcd -26.48%,
        #644eb4 7.71%,
        #9063b8 61.44%,
        #c97ebd 111.91%,
        #f67086 160.76%
      );
      box-shadow: 0px 3px 20px -6px rgba(100, 78, 180, 0.61),
        inset 0px 1px 2px rgba(255, 255, 255, 0.33),
        inset 0px -2px 2px rgba(102, 79, 187, 0.55);

      #{$c}__label {
        color: $color-white;
      }

      #{$c}__icon {
        fill: $color-white;
      }
    }

    &:hover {
      #{$c}__inner {
        background-color: darken($color-button-light-normal, 100%);
      }
    }

    &:active {
      #{$c}__inner {
        background-color: darken($color-button-light-normal, 50%);
      }
    }
  }

  &--fancy {
    #{$c}__inner {
      background: linear-gradient(
        138.14deg,
        #3458ad 2.91%,
        #141a75 110.18%,
        #141a75 110.19%
      );
      box-shadow: inset 0px -2.23809px 2.23809px #3975cf,
        inset 0px 1px 2px rgba(255, 255, 255, 0.33),
        inset 0px -2px 2px rgba(18, 31, 62, 0.54);

      #{$c}__label {
        color: $color-white;
      }

      #{$c}__icon {
        fill: $color-white;
      }
    }

    &:hover {
      #{$c}__inner {
        background-color: darken($color-button-light-normal, 100%);
      }
    }

    &:active {
      #{$c}__inner {
        background-color: darken($color-button-light-normal, 50%);
      }
    }
  }

  // --> SIZES <--

  &--normal,
  &--large,
  &--huge {
    #{$c}__inner {
      line-height: 18px;
    }
  }

  &--large,
  &--huge {
    #{$c}__inner {
      padding-top: 13px;
      padding-bottom: 15px;
    }
  }

  &--simple {
    #{$c}__inner {
      font-size: 14px;
      line-height: 22px;
      padding: 0;
    }
  }

  &--normal {
    #{$c}__inner {
      font-size: 14px;
      line-height: 22px;
      padding-top: 9px;
      padding-bottom: 11px;
      padding-left: $size-normal-padding-sides;
      padding-right: $size-normal-padding-sides;
    }
  }

  &--large {
    #{$c}__inner {
      padding-left: $size-large-padding-sides;
      padding-right: $size-large-padding-sides;
    }
  }

  &--huge {
    #{$c}__inner {
      font-size: 14.5px;
      padding-left: $size-huge-padding-sides;
      padding-right: $size-huge-padding-sides;

      #{$c}__icon {
        margin-left: 18px;
      }
    }
  }

  // --> RIGHT ICONS <--

  &--arrow-right,
  &--chevron-down {
    #{$c}__inner {
      #{$c}__icon {
        margin-bottom: -4px;
      }
    }
  }

  &--arrow-down {
    #{$c}__inner {
      #{$c}__icon {
        margin-bottom: -3px;
      }
    }
  }

  // --> BOOLEANS <--

  &--darker {
    &#{$c}--dark {
      #{$c}__inner {
        background-color: $color-button-dark-darker;
        box-shadow: 0 2px 1px 0 rgba($color-button-dark-darker, 0.12);
      }

      &:hover {
        #{$c}__inner {
          background-color: lighten($color-button-dark-darker, 4%);
        }
      }

      &:active {
        #{$c}__inner {
          background-color: lighten($color-button-dark-darker, 2%);
          box-shadow: 0 1px 1px 0 rgba($color-button-dark-darker, 0.3);
        }
      }
    }
  }

  &--reverse {
    &#{$c}--dark {
      #{$c}__inner {
        background-color: $color-button-dark-reverse;
        border: 1.5px solid $color-base-blue-dark;

        #{$c}__label {
          color: $color-base-blue-dark;
        }

        #{$c}__icon {
          fill: $color-base-blue-dark;
        }
      }
    }

    &#{$c}--light {
      #{$c}__inner {
        background-color: $color-button-light-reverse;

        #{$c}__label {
          color: $color-white;
        }

        #{$c}__icon {
          fill: $color-white;
        }
      }

      &:hover {
        #{$c}__inner {
          background-color: rgba($color-black, 0.14);
        }
      }

      &:active {
        #{$c}__inner {
          background-color: rgba($color-black, 0.15);
        }
      }
    }
  }
}
</style>
