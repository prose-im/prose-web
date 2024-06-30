<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
ul.c-base-navigate
  li(
    v-for="choice in choices"
    :key="choice.name"
    :class=`[
      "c-base-navigate__entry",
      {
        "c-base-navigate__entry--active": (choice.name === value)
      }
    ]`
  )
    nuxt-link(
      :to="choice.target"
      class="c-base-navigate__entry-link u-bold"
    )
      | {{ choice.name }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseNavigate",

  props: {
    choices: {
      type: Array,

      default() {
        return [];
      }
    },

    value: {
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
$c: ".c-base-navigate";

// VARIABLES
$navigate-border-radius: 2px;

#{$c} {
  display: inline-block;

  #{$c}__entry {
    &:first-child {
      #{$c}__entry-link {
        border-width: 1px;
        border-top-left-radius: $navigate-border-radius;
        border-bottom-left-radius: $navigate-border-radius;
      }
    }

    &:last-child {
      #{$c}__entry-link {
        border-top-right-radius: $navigate-border-radius;
        border-bottom-right-radius: $navigate-border-radius;
      }
    }

    &,
    #{$c}__entry-link {
      display: inline-block;
    }

    #{$c}__entry-link {
      background-color: $color-background-secondary;
      border-color: $color-border-secondary;
      border-width: 1px 1px 1px 0;
      border-style: solid;
      color: $color-base-black-mid;
      font-size: 14px;
      line-height: 28px;
      padding: 0 15px 1px;
      transition: background-color 100ms linear;

      &:hover {
        background-color: darken($color-background-secondary, 2%);
      }

      &:active {
        background-color: darken($color-background-secondary, 4%);
      }
    }

    &--active {
      #{$c}__entry-link {
        border-color: $color-base-blue-dark;
        border-width: 1px;
        color: $color-white;
        margin-left: -1px;

        &,
        &:hover,
        &:active {
          background-color: $color-base-blue-dark;
        }
      }

      &:first-child {
        #{$c}__entry-link {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
