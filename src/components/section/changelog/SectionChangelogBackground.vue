<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-split-view(
  :sidebar-width="sidebarWidth"
  :sidebar-class="sidebarClass"
  class="c-section-changelog-background"
  wrapper-class="c-section-changelog-background__wrapper"
  sidebar-background
  sidebar-border
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionChangelogBackground",

  props: {
    sidebarWidth: {
      type: String,
      required: true
    },

    sidebarClass: {
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
$c: ".c-section-changelog-background";

#{$c} {
  #{$c}__wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>
