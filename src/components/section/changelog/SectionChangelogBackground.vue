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
    class="c-section-changelog-background"
    sidebar-background
    sidebar-border
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionChangelogBackground"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-changelog-background";

.c-section-changelog-background {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
