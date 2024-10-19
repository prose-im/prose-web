<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
nuxt-link(
  :to="to"
  class="c-base-floating-link"
)
  span.c-base-floating-link__text
    slot

  span.c-base-floating-link__icon(
    v-if="iconHtml"
    v-html="iconHtml"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseFloatingLink",

  props: {
    to: {
      required: true,
      type: String
    },

    iconHtml: {
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
$c: ".c-base-floating-link";

// VARIABLES
$padding-top-bottom: 8px;

#{$c} {
  background: $color-white;
  border: 1px solid $color-border-secondary;
  user-select: none;
  cursor: pointer;
  padding: $padding-top-bottom 18px ($padding-top-bottom + 2px);
  display: flex;
  align-items: center;
  transition: all 150ms linear;
  transition-property: border-color, transform, box-shadow;
  box-shadow: 0 6px 3px -3px rgba($color-black, 0.02);
  border-radius: 22px;

  &:hover {
    border-color: $color-border-primary;
    box-shadow: 0 6px 3px -3px rgba($color-black, 0.04);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 2px -3px rgba($color-black, 0.04);
  }

  #{$c}__text {
    color: $color-base-black-mid;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.1px;
    flex: 1;
  }

  #{$c}__icon {
    fill: $color-base-black-mid;
    height: 12px;
    margin-left: 10px;
    margin-right: -2px;
    margin-top: -2px;
    flex: 0 0 auto;
  }
}
</style>
