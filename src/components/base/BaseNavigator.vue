<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
ul.c-base-navigator
  li(
    v-for="item, index in items"
    :key="'item_' + item.id"
    :class=`[
      "c-base-navigator__item",
      {
        "c-base-navigator__item--active": (item.id === active)
      }
    ]`
  )
    a.c-base-navigator__button(
      @click="onItemClick(item, index)"
    )
      span.c-base-navigator__button-icon(
        v-if="item.iconHtml"
        v-html="item.iconHtml"
      )

      span.c-base-navigator__button-label.u-semibold
        | {{ item.label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseNavigator",

  props: {
    items: {
      type: Array,
      required: true
    },

    active: {
      type: String,
      default: null
    }
  },

  emits: ["toggle"],

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when item is clicked
     * @public
     * @param  {object} item
     * @param  {number} index
     * @return {undefined}
     */
    onItemClick(item, index) {
      this.$emit("toggle", item.id, index);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-navigator";

// VARIABLES
$navigator-padding-top-bottom: 6px;
$navigator-item-margin-bottom: 4px;

#{$c} {
  background-color: rgba($color-white, 0.1);
  text-align: center;
  user-select: none;
  padding: $navigator-padding-top-bottom 7px
    ($navigator-padding-top-bottom - $navigator-item-margin-bottom);

  &,
  #{$c}__button {
    border-radius: 24px;
  }

  #{$c}__item,
  #{$c}__button {
    display: inline-block;
  }

  #{$c}__item {
    margin-right: 3px;
    margin-bottom: $navigator-item-margin-bottom;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      #{$c}__button {
        background-color: rgba($color-white, 0.07);
      }
    }

    &:active {
      #{$c}__button {
        background-color: rgba($color-white, 0.09);
      }
    }

    &--active {
      &,
      &:hover,
      &:active {
        #{$c}__button {
          background-color: rgba($color-white, 0.16);
        }
      }
    }
  }

  #{$c}__button {
    padding: 11px 19px 12px;
    display: flex;
    align-items: center;
    transition: background-color 75ms linear;

    #{$c}__button-icon {
      line-height: 0;
      margin-left: -5px;
      margin-right: 8px;
      margin-top: -1px;
      margin-bottom: -1px;
      fill: $color-white;

      svg {
        width: auto;
        height: 15px;
      }
    }

    #{$c}__button-label {
      color: $color-white;
    }
  }
}
</style>
