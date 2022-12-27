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
  page-wrapper(
    :class=`[
      "c-page-split-view__wrapper",
      {
        [wrapperClass]: wrapperClass
      }
    ]`
  )
    div(
      :style="sidebarStyle"
      :class=`[
        "c-page-split-view__sidebar",
        {
          [sidebarClass]: sidebarClass
        }
      ]`
    )
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
    },

    sidebarWidth: {
      type: String,
      default: "200px"
    },

    wrapperClass: {
      type: String,
      default: null
    },

    sidebarClass: {
      type: String,
      default: null
    }
  },

  computed: {
    sidebarStyle() {
      return {
        width: this.sidebarWidth
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-split-view";

// VARIABLES
$sidebar-background-infinite-width: 100000px;

.c-page-split-view {
  #{$c}__wrapper {
    display: flex;
  }

  #{$c}__sidebar {
    border-right: 1px solid transparent;
    flex: 0 0 auto;
    position: relative;
  }

  #{$c}__content {
    flex: 1;
  }

  // --> BOOLEANS <--

  &--sidebar-background {
    #{$c}__sidebar {
      &,
      &::before {
        background-color: $color-background-secondary;
      }

      &::before {
        content: "";
        width: $sidebar-background-infinite-width;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
      }
    }
  }

  &--sidebar-border {
    #{$c}__sidebar {
      border-right-color: $color-border-secondary;
    }
  }
}
</style>
