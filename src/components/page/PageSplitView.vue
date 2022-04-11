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
      "c-page-split-view",
      {
        "c-page-split-view--sidebar-background": sidebarBackground,
        "c-page-split-view--sidebar-border": sidebarBorder
      }
    ]`
  )
    .c-page-split-view__sidebar
      slot(
        name="sidebar"
      )

    .c-page-split-view__content
      slot(
        name="content"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageSplitView",

  props: {
    sidebarBackground: {
      type: Boolean,
      default: false
    },

    sidebarBorder: {
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
$c: ".c-page-split-view";

.c-page-split-view {
  display: flex;

  #{$c}__sidebar {
    border-right: 1px solid transparent;
    width: 25%;
    min-width: 320px;
    flex: 0 0 auto;
  }

  #{$c}__content {
    flex: 1;
  }

  // --> BOOLEANS <--

  &--sidebar-background {
    #{$c}__sidebar {
      background-color: $color-background-secondary;
    }
  }

  &--sidebar-border {
    #{$c}__sidebar {
      border-right-color: $color-border-secondary;
    }
  }
}
</style>
