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
    "c-page-section",
    "c-page-section--" + level
  ]`
)
  page-wrapper
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageSection",

  props: {
    level: {
      type: String,
      default: "primary",

      validator(x) {
        return ["primary", "secondary"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-section";

.c-page-section {
  border-color: transparent;
  border-width: 1px 0;
  border-style: solid;
  padding: 46px 0;

  // --> LEVELS <--

  &--primary {
    background-color: $color-background-primary;
  }

  &--secondary {
    background-color: $color-background-secondary;
    border-color: $color-border-secondary;
  }
}
</style>
