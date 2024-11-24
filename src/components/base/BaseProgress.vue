<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-progress
  base-progress-item(
    v-for="item in items"
    :key="'item_' + item.id"
    :label="item.label"
    :icon="item.icon"
    :ongoing="item.ongoing"
    :elapsed="item.elapsed"
    :finished="item.finished"
    :class=`[
      "c-base-progress__item",
      {
        "c-base-progress__item--spaced": !item.label
      }
    ]`
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseProgress",

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-progress";

// VARIABLES
$horizontal-bar-height: 1px;

#{$c} {
  column-gap: 18px;
  display: flex;
  position: relative;

  #{$c}__item {
    flex: 0 0 auto;
    position: relative;
    z-index: 1;

    &--spaced {
      margin-left: 22px;
    }
  }

  &:before {
    content: "";
    background-color: $color-border-secondary;
    height: $horizontal-bar-height;
    margin-top: (-1 * calc($horizontal-bar-height / 2));
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 0;
  }
}
</style>
