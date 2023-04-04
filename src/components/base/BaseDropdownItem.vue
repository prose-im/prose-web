<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
span.c-base-dropdown-item
  span.c-base-dropdown-item__icon(
    v-if="icon"
    v-html="icon"
  )

  span.c-base-dropdown-item__text
    span.c-base-dropdown-item__title.u-bold
      | {{ title }}

      image-title-arrow(
        class="c-base-dropdown-item__arrow"
      )

    span.c-base-dropdown-item__label(
      v-if="label"
    )
      | {{ label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageTitleArrow from "~/assets/images/components/base/BaseDropdownItem/title-arrow.svg?inline";

export default {
  name: "BaseDropdownItem",

  components: { ImageTitleArrow },

  props: {
    title: {
      type: String,
      required: true
    },

    label: {
      type: String,
      default: null
    },

    icon: {
      type: String,
      default: null
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-dropdown-item";

// VARIABLES
$icon-width: 18px;

$hover-transition-duration: 150ms;

.c-base-dropdown-item {
  display: flex;

  &:hover {
    #{$c}__icon {
      svg {
        opacity: 1;
      }
    }

    #{$c}__text {
      #{$c}__title {
        #{$c}__arrow {
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }
      }

      #{$c}__label {
        color: $color-base-blue-dark;
      }
    }
  }

  #{$c}__icon {
    min-width: ($icon-width + 8px);
    margin-top: -5px;
    padding-right: 4px;
    flex: 0 0 auto;

    svg {
      fill: $color-base-blue-dark;
      width: $icon-width;
      opacity: 0.25;
      transition: opacity $hover-transition-duration linear;
    }
  }

  #{$c}__text {
    flex: 1;

    #{$c}__title,
    #{$c}__label {
      line-height: 18px;
      display: block;
    }

    #{$c}__title {
      color: $color-base-blue-dark;
      font-size: 14px;
      letter-spacing: 0.1px;

      #{$c}__arrow {
        fill: $color-base-blue-dark;
        vertical-align: middle;
        margin-top: -1.5px;
        margin-left: 8px;
        height: 9px;
        opacity: 0;
        visibility: hidden;
        transform: translateX(-3px);
        transition: all $hover-transition-duration linear;
        transition-property: opacity, transform;
      }
    }

    #{$c}__label {
      color: rgba($color-base-blue-dark, 0.65);
      font-size: 12.5px;
      line-height: 16px;
      margin-top: 4px;
      transition: color $hover-transition-duration linear;
    }
  }
}
</style>
