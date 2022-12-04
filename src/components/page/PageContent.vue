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
      "c-page-content",
      {
        "c-page-content--showcase": showcase
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
  name: "PageContent",

  props: {
    showcase: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-content";

.c-page-content {
  background-color: $color-background-primary;
  padding-top: 96px;
  padding-bottom: 120px;
  overflow: hidden;

  // --> BOOLEANS <--

  &--showcase {
    padding-top: 0;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-content {
    &:not(#{$c}--showcase) {
      padding-top: 52px;
      padding-bottom: 90px;
    }
  }
}
</style>
