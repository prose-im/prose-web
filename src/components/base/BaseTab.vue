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
    "c-base-tab",
    {
      "c-base-tab--active": active
    }
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseTab",

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
$c: ".c-base-tab";

#{$c} {
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 0;
  position: absolute;

  // --> BOOLEANS <--

  &--active {
    opacity: 1;
    z-index: 1;
  }
}
</style>
