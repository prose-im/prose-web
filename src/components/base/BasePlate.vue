<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-plate
  .c-base-plate__inner
    p.c-base-plate__title.u-semibold
      span.c-base-plate__title-icon(
        v-if="icon"
        v-html="icon"
      )

      | {{ title }}

    p.c-base-plate__description
      | {{ description }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BasePlate",

  props: {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
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
$c: ".c-base-plate";

// VARIABLES
$border-radius: 12px;
$padding-edges: 3px;

#{$c} {
  background: $color-background-primary;
  border: 0.5px solid $color-border-primary;
  text-align: center;
  width: fit-content;
  max-width: 320px;
  padding: $padding-edges;
  border-radius: $border-radius;
  box-shadow: 0 2px 4px 0 rgba($color-black, 0.02);

  #{$c}__inner {
    background-image: linear-gradient(
      180deg,
      rgba($color-background-secondary, 0) 0%,
      rgba($color-background-secondary, 0.9) 100%
    );
    padding: 8px 32px 12px;
    border-radius: ($border-radius - $padding-edges);
  }

  #{$c}__title {
    color: $color-base-black-mid;
    font-size: 15.5px;
    line-height: 18px;
    letter-spacing: 0.17px;
    display: flex;
    align-items: center;
    justify-content: center;

    #{$c}__title-icon {
      margin-left: -2px;
      margin-right: 8px;
      flex: 0 0 auto;

      svg {
        height: 22px;
        aspect-ratio: 1;
        display: block;
      }
    }
  }

  #{$c}__description {
    color: $color-base-black-mid;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 17px;
    margin-top: 9px;
  }
}
</style>
